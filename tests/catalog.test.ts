import { test, after } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { Worker } from "node:worker_threads";
import Papa from "papaparse";

const dir = mkdtempSync(path.join(tmpdir(), "catalog-test-"));
process.env.CATALOG_DATA_DIR = dir;
process.env.DATABASE_URL = "";

test("catalog identity, imports, edits, deactivation, exports, and simultaneous allocation", async () => {
  const catalog = await import("../lib/catalog");
  const {
    db,
    saveCategory,
    categories,
    saveProduct,
    listProducts,
    getProduct,
    importCsv,
    exportCsv,
    deleteCategory,
    setProductActive,
  } = catalog;

  after(() => {
    if (db) db.close();
    rmSync(dir, { recursive: true, force: true });
  });

  await saveCategory(" Smart Home ");
  await assert.rejects(
    async () => await saveCategory("smart home"),
    /already exists/,
  );

  const category = (await categories())[0];
  const input = {
    name: "Smart Bulb",
    sku: " BULB-001 ",
    category_id: category.id,
    website_url: "https://example.com/bulb",
    brand: "ABC",
  };

  const id = await saveProduct(input);
  assert.equal(id, 1);
  await assert.rejects(
    async () => await saveProduct({ ...input, sku: "bulb-001" }),
    /already exists/,
  );

  let p = (await listProducts()).products[0];
  assert.equal(p.serial, "PRD-000001");
  const publicId = p.public_id;

  await saveProduct({ ...input, name: "Updated bulb", sku: "bulb-001-new" }, id);
  p = (await getProduct(publicId))!;
  assert.equal(p.name, "Updated bulb");
  assert.equal(p.serial, "PRD-000001");

  await assert.rejects(
    async () => await deleteCategory(category.id),
    /Reassign/,
  );
  await assert.rejects(
    async () =>
      await saveProduct({
        ...input,
        sku: "bad-date",
        manufacturing_date: "2026-02-30",
      }),
    /valid YYYY-MM-DD/,
  );
  await assert.rejects(
    async () =>
      await saveProduct({
        ...input,
        sku: "bad-url",
        website_url: "javascript:alert(1)",
      }),
    /HTTP or HTTPS/,
  );

  const csv =
    "Product Name,SKU,Category,Website URL\nExisting,BULB-001-NEW,Smart Home,https://example.com\nNew plug,PLUG-001,smart home,https://example.com/plug\nRepeated plug,plug-001,Smart Home,https://example.com\nBad category,BAD-1,Missing,https://example.com\nNo SKU,,Smart Home,https://example.com";
  const preview = await importCsv(csv, "products");
  assert.equal(preview.total, 5);
  assert.equal(preview.created, 0);
  assert.equal(preview.duplicates, 2);
  assert.equal(preview.invalid, 2);
  assert.equal((await listProducts()).total, 1);

  const result = await importCsv(csv, "products", true);
  assert.equal(result.created, 1);
  assert.equal(result.duplicates, 2);
  assert.equal(result.invalid, 2);
  assert.ok(result.id);
  assert.equal((await importCsv(csv, "products", true)).created, 0);
  assert.equal((await listProducts()).total, 2);

  await setProductActive(id, false);
  assert.equal((await getProduct(publicId))?.active, 0);

  await assert.rejects(
    async () => await saveProduct({ ...input, sku: "BULB-001-NEW" }),
    /already exists/,
  );

  assert.equal(
    (
      await importCsv(
        "Category Name\nsmart home\nAccessories\nACCESSORIES",
        "categories",
        true,
      )
    ).created,
    1,
  );
  assert.equal((await categories()).length, 2);

  await assert.rejects(
    async () => await importCsv("Product Name\nNo sku", "products"),
    /Required headers/,
  );
  assert.equal(
    (
      await importCsv(
        'Product Name,SKU,Category,Website URL\n"Line one\nLine two",MULTILINE,Smart Home,https://example.com',
        "products",
        true,
      )
    ).created,
    1,
  );

  assert.equal((await listProducts("PRD-000001")).total, 1);

  const safeId = await saveProduct({
    ...input,
    name: "=SUM(1,1)",
    sku: "FORMULA",
  });
  const exported = Papa.parse<Record<string, string>>(
    await exportCsv("products", "https://registry.example"),
    { header: true },
  );
  const formula = exported.data.find((r) => r.SKU === "FORMULA")!;
  assert.equal(formula["Product Name"], "'=SUM(1,1)");
  assert.ok(formula["QR URL"].startsWith("https://registry.example/p/"));

  // Independent database connections contend for the sequence.
  const workerCode = `const {parentPort,workerData}=require('node:worker_threads'); const {DatabaseSync}=require('node:sqlite');const {randomUUID}=require('node:crypto');const db=new DatabaseSync(workerData.file);db.exec('PRAGMA busy_timeout=10000');db.exec('PRAGMA foreign_keys=ON');const ids=[];for(let i=0;i<20;i++){const sku=workerData.prefix+i;ids.push(Number(db.prepare('INSERT INTO products (public_id,name,sku,sku_key,category_id,website_url) VALUES (?,?,?,?,?,?)').run(randomUUID(),sku,sku,sku,workerData.category,'https://example.com').lastInsertRowid));}db.close();parentPort.postMessage(ids);`;
  const work = (prefix: string) =>
    new Promise<number[]>((resolve, reject) => {
      const worker = new Worker(workerCode, {
        eval: true,
        workerData: {
          file: path.join(dir, "catalog.sqlite"),
          category: category.id,
          prefix,
        },
      });
      worker.once("message", resolve);
      worker.once("error", reject);
    });
  const ids = (await Promise.all([work("A-"), work("B-")])).flat();
  assert.equal(new Set(ids).size, 40);
  assert.ok(ids.every((n) => n > safeId));
});

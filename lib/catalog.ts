import { randomUUID } from "node:crypto";
import Papa from "papaparse";
import {
  dataDir,
  execute,
  isPostgres,
  query,
  queryOne,
  db,
} from "./catalog-db";

export { dataDir, db };

export type Category = { id: string; name: string; count: number };
export type ProductInput = {
  name: string;
  sku: string;
  category_id: string;
  brand: string;
  model: string;
  description: string;
  images: string[];
  manufacturing_date: string;
  website_url: string;
};
export type Product = ProductInput & {
  id: number;
  public_id: string;
  serial: string;
  category: string;
  active: number;
  created_at: string;
  updated_at: string;
};

const key = (value: string) => value.trim().toLocaleLowerCase("en-US");
export const serial = (id: number) => `PRD-${String(id).padStart(6, "0")}`;

function hydrate(row: any): Product {
  let images = row.images;
  if (typeof images === "string") {
    try {
      images = JSON.parse(images);
    } catch {
      images = [];
    }
  }
  return {
    ...row,
    id: Number(row.id),
    active: Number(row.active),
    images: Array.isArray(images) ? images : [],
    serial: serial(Number(row.id)),
    created_at:
      typeof row.created_at === "object" && row.created_at
        ? row.created_at.toISOString()
        : String(row.created_at || ""),
    updated_at:
      typeof row.updated_at === "object" && row.updated_at
        ? row.updated_at.toISOString()
        : String(row.updated_at || ""),
  };
}

export async function categories(): Promise<Category[]> {
  const rows = await query<{ id: string; name: string; count: number | string }>(
    "SELECT c.id, c.name, COUNT(p.id) AS count FROM categories c LEFT JOIN products p ON p.category_id=c.id GROUP BY c.id, c.name ORDER BY c.name",
  );
  return rows.map((r) => ({
    id: r.id,
    name: r.name,
    count: Number(r.count || 0),
  }));
}

export async function saveCategory(name: string, id?: string): Promise<void> {
  name = String(name || "").trim();
  if (!name || name.length > 120)
    throw new Error("Category name must contain 1–120 characters.");
  const existing = await queryOne<{ id: string }>(
    "SELECT id FROM categories WHERE name_key=$1 AND id!=$2",
    [key(name), id || ""],
  );
  if (existing) throw new Error("This category already exists.");
  if (id) {
    const res = await execute(
      "UPDATE categories SET name=$1, name_key=$2 WHERE id=$3",
      [name, key(name), id],
    );
    if (res.rowCount === 0) throw new Error("Category not found.");
  } else {
    await execute(
      "INSERT INTO categories (id, name, name_key) VALUES ($1, $2, $3)",
      [randomUUID(), name, key(name)],
    );
  }
}

export async function deleteCategory(id: string): Promise<void> {
  const product = await queryOne<{ id: number }>(
    "SELECT id FROM products WHERE category_id=$1 LIMIT 1",
    [id],
  );
  if (product)
    throw new Error(
      "Reassign all products, including inactive products, before deleting this category.",
    );
  await execute("DELETE FROM categories WHERE id=$1", [id]);
}

export async function validateProduct(
  raw: Partial<ProductInput>,
): Promise<ProductInput> {
  const input = {} as ProductInput;
  for (const field of [
    "name",
    "sku",
    "category_id",
    "brand",
    "model",
    "description",
    "manufacturing_date",
    "website_url",
  ] as const) {
    input[field] = String(raw[field] || "").trim();
    if (input[field].length > (field === "description" ? 10000 : 2048))
      throw new Error(`${field} is too long.`);
  }
  if (!input.name || !input.sku || !input.category_id || !input.website_url)
    throw new Error("Name, SKU, category, and website URL are required.");
  if (input.sku.length > 120 || input.name.length > 200)
    throw new Error(
      "SKU must be under 121 characters and name under 201 characters.",
    );
  const cat = await queryOne<{ id: string }>(
    "SELECT id FROM categories WHERE id=$1",
    [input.category_id],
  );
  if (!cat)
    throw new Error("Category does not exist. Import or create it first.");
  let url: URL;
  try {
    url = new URL(input.website_url);
  } catch {
    throw new Error("Enter a valid website URL.");
  }
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password
  )
    throw new Error("Website URL must use HTTP or HTTPS without credentials.");
  if (
    input.manufacturing_date &&
    (!/^\d{4}-\d{2}-\d{2}$/.test(input.manufacturing_date) ||
      !Number.isFinite(Date.parse(input.manufacturing_date)) ||
      new Date(input.manufacturing_date).toISOString().slice(0, 10) !==
        input.manufacturing_date)
  )
    throw new Error("Manufacturing date must be a valid YYYY-MM-DD date.");
  input.images = Array.isArray(raw.images) ? raw.images : [];
  if (
    input.images.length > 8 ||
    input.images.some(
      (u) =>
        typeof u !== "string" ||
        !/^\/api\/catalog\/images\/[a-f0-9-]+\.(png|jpg|webp)$/.test(u),
    )
  )
    throw new Error("Use up to eight uploaded product images.");
  return input;
}

export async function saveProduct(
  raw: Partial<ProductInput>,
  id?: number,
): Promise<number> {
  const p = await validateProduct(raw);
  const existing = await queryOne<{ id: number }>(
    "SELECT id FROM products WHERE sku_key=$1 AND id!=$2",
    [key(p.sku), id || 0],
  );
  if (existing)
    throw new Error(
      "This SKU already exists, possibly on an inactive product.",
    );
  const values = [
    p.name,
    p.sku,
    key(p.sku),
    p.category_id,
    p.brand,
    p.model,
    p.description,
    JSON.stringify(p.images),
    p.manufacturing_date,
    p.website_url,
  ];
  if (id) {
    const updateSql = isPostgres
      ? "UPDATE products SET name=$1, sku=$2, sku_key=$3, category_id=$4, brand=$5, model=$6, description=$7, images=$8, manufacturing_date=$9, website_url=$10, updated_at=NOW() WHERE id=$11 RETURNING id"
      : "UPDATE products SET name=$1, sku=$2, sku_key=$3, category_id=$4, brand=$5, model=$6, description=$7, images=$8, manufacturing_date=$9, website_url=$10, updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now') WHERE id=$11 RETURNING id";
    const row = await queryOne<{ id: number }>(updateSql, [...values, id]);
    if (!row) throw new Error("Product not found.");
    return Number(row.id);
  }
  const insertSql =
    "INSERT INTO products (name, sku, sku_key, category_id, brand, model, description, images, manufacturing_date, website_url, public_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id";
  const row = await queryOne<{ id: number }>(insertSql, [
    ...values,
    randomUUID(),
  ]);
  if (!row) throw new Error("Failed to insert product.");
  return Number(row.id);
}

const select =
  "SELECT p.*, c.name AS category FROM products p JOIN categories c ON c.id=p.category_id";

export async function getProduct(publicId: string): Promise<Product | undefined> {
  const row = await queryOne(
    `${select} WHERE p.public_id=$1`,
    [publicId],
  );
  return row ? hydrate(row) : undefined;
}

export async function listProducts(
  queryParam = "",
  category = "",
  status = "",
  page = 1,
  limit = 20,
) {
  const searchPattern = `%${queryParam}%`;
  const serialExpr = isPostgres
    ? "('PRD-' || LPAD(p.id::text, 6, '0'))"
    : "printf('PRD-%06d', p.id)";
  const likeOp = isPostgres ? "ILIKE" : "LIKE";

  const where = ` WHERE (p.name ${likeOp} $1 OR p.sku ${likeOp} $1 OR p.brand ${likeOp} $1 OR ${serialExpr} ${likeOp} $1) AND ($2='' OR p.category_id=$2) AND ($3='' OR p.active=$4)`;
  const activeVal = status === "inactive" ? 0 : 1;
  const args = [searchPattern, category, status, activeVal];

  const countRow = await queryOne<{ total: number | string }>(
    `SELECT COUNT(*) AS total FROM products p${where}`,
    args,
  );
  const total = Number(countRow?.total || 0);

  const offset = (page - 1) * limit;
  const rows = await query(
    `${select}${where} ORDER BY p.id DESC LIMIT $5 OFFSET $6`,
    [...args, limit, offset],
  );

  return {
    products: rows.map(hydrate),
    total,
  };
}

export async function stats() {
  const row = await queryOne<{ products: number | string; active: number | string }>(
    "SELECT COUNT(*) AS products, COALESCE(SUM(active),0) AS active FROM products",
  );
  const cats = await categories();
  return {
    products: Number(row?.products || 0),
    active: Number(row?.active || 0),
    categories: cats.length,
  };
}

export async function getImports() {
  return query<{ id: string; kind: string; created_at: string }>(
    "SELECT id, kind, created_at FROM imports ORDER BY created_at DESC LIMIT 10",
  );
}

export async function getImport(id: string) {
  return queryOne<{ result: string }>(
    "SELECT result FROM imports WHERE id=$1",
    [id],
  );
}

export async function setProductActive(id: number, active: boolean) {
  const sql = isPostgres
    ? "UPDATE products SET active=$1, updated_at=NOW() WHERE id=$2"
    : "UPDATE products SET active=$1, updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now') WHERE id=$2";
  return execute(sql, [active ? 1 : 0, id]);
}

export type ImportRow = {
  row: number;
  status: "new" | "duplicate" | "invalid" | "created";
  message: string;
  data: Record<string, string>;
};
export type ImportResult = {
  id?: string;
  total: number;
  created: number;
  duplicates: number;
  invalid: number;
  rows: ImportRow[];
};
const productHeaders = [
  "Product Name",
  "SKU",
  "Category",
  "Brand",
  "Model",
  "Description",
  "Manufacturing Date",
  "Website URL",
];

export function template(kind: string) {
  return Papa.unparse([
    kind === "categories" ? ["Category Name"] : productHeaders,
  ]);
}

export async function importCsv(
  csv: string,
  kind: string,
  commit = false,
): Promise<ImportResult> {
  if (!["products", "categories"].includes(kind))
    throw new Error("Choose products or categories.");
  if (Buffer.byteLength(csv) > 2 * 1024 * 1024)
    throw new Error("CSV must be smaller than 2 MB.");
  const parsed = Papa.parse<Record<string, string>>(
    csv.replace(/^\uFEFF/, ""),
    {
      header: true,
      delimiter: ",",
      skipEmptyLines: "greedy",
      transformHeader: (h) => h.trim(),
    },
  );
  const required =
    kind === "categories"
      ? ["Category Name"]
      : ["Product Name", "SKU", "Category", "Website URL"];
  if (required.some((h) => !parsed.meta.fields?.includes(h)))
    throw new Error(`Required headers: ${required.join(", ")}.`);
  if (parsed.data.length > 5000)
    throw new Error(
      "Import at most 5,000 rows per file. Split larger files into smaller imports.",
    );

  const seen = new Set<string>();
  const rows: ImportRow[] = [];

  for (let index = 0; index < parsed.data.length; index++) {
    const data = parsed.data[index];
    const row: ImportRow = {
      row: index + 2,
      status: "new",
      message: "Ready to import",
      data,
    };
    try {
      const parseError = parsed.errors.find(
        (e) => e.row === index || e.row === undefined,
      );
      if (parseError) throw new Error(parseError.message);
      const identity = key(
        data[kind === "categories" ? "Category Name" : "SKU"] || "",
      );
      if (!identity)
        throw new Error(
          kind === "categories"
            ? "Category name is required."
            : "SKU is required.",
        );
      const existing =
        kind === "categories"
          ? await queryOne<{ id: string }>(
              "SELECT id FROM categories WHERE name_key=$1",
              [identity],
            )
          : await queryOne<{ id: number }>(
              "SELECT id FROM products WHERE sku_key=$1",
              [identity],
            );
      if (seen.has(identity) || existing) {
        row.status = "duplicate";
        row.message = "Already exists; skipped.";
        rows.push(row);
        continue;
      }
      if (kind === "categories") {
        if (identity.length > 120)
          throw new Error("Category name must contain 1–120 characters.");
        if (commit) await saveCategory(data["Category Name"]);
      } else {
        const category = await queryOne<{ id: string }>(
          "SELECT id FROM categories WHERE name_key=$1",
          [key(data.Category || "")],
        );
        const input = await validateProduct({
          name: data["Product Name"],
          sku: data.SKU,
          category_id: category?.id,
          brand: data.Brand,
          model: data.Model,
          description: data.Description,
          manufacturing_date: data["Manufacturing Date"],
          website_url: data["Website URL"],
        });
        if (commit) await saveProduct(input);
      }
      seen.add(identity);
      if (commit) {
        row.status = "created";
        row.message = "Added successfully.";
      }
    } catch (e) {
      row.status = "invalid";
      row.message = e instanceof Error ? e.message : "Invalid row.";
    }
    rows.push(row);
  }

  const result: ImportResult = {
    total: rows.length,
    created: rows.filter((r) => r.status === "created").length,
    duplicates: rows.filter((r) => r.status === "duplicate").length,
    invalid: rows.filter((r) => r.status === "invalid").length,
    rows,
  };
  if (commit) {
    result.id = randomUUID();
    await execute(
      "INSERT INTO imports (id, kind, result) VALUES ($1, $2, $3)",
      [result.id, kind, JSON.stringify(result)],
    );
  }
  return result;
}

export async function exportCsv(kind: string, origin: string): Promise<string> {
  if (kind === "categories") {
    const cats = await categories();
    return Papa.unparse(
      { fields: ["Category Name"], data: cats.map((c) => [c.name]) },
      { escapeFormulae: true },
    );
  }
  const rows = await query(
    `${select} ORDER BY p.id`,
  );
  const products = rows.map(hydrate);
  return Papa.unparse(
    {
      fields: [
        ...productHeaders,
        "Serial Number",
        "Status",
        "QR URL",
        "Image URLs",
      ],
      data: products.map((p) => [
        p.name,
        p.sku,
        p.category,
        p.brand,
        p.model,
        p.description,
        p.manufacturing_date,
        p.website_url,
        p.serial,
        p.active ? "Active" : "Inactive",
        `${origin}/p/${p.public_id}`,
        p.images.join("|"),
      ]),
    },
    { escapeFormulae: true },
  );
}

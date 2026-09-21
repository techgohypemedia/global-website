import { test, after } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

const dir = mkdtempSync(path.join(tmpdir(), "railway-test-"));
process.env.CATALOG_DATA_DIR = dir;
process.env.DATABASE_URL = "";

test("Railway ELB Catalog: 19 Zones, Dynamic Options, Excel import from sheet/QR Code File.xlsx, and Product fields", async () => {
  const { ensureDb } = await import("../lib/catalog-db");
  await ensureDb();

  const {
    db,
    getRegistryOptions,
    saveRegistryOption,
    deleteRegistryOption,
    parseSpreadsheetData,
    importSpreadsheet,
    saveProduct,
    getProduct,
    listProducts,
    exportXlsx,
    exportCsv,
  } = await import("../lib/catalog");

  after(() => {
    if (db) db.close();
    rmSync(dir, { recursive: true, force: true });
  });

  // 1. Verify 19 Indian Railway Zones are loaded
  const options = await getRegistryOptions();
  const zones = options.filter((o) => o.category === "zone");
  assert.equal(zones.length, 19, "Should load all 19 Indian Railway Zones");

  const zoneNames = zones.map((z) => z.label);
  assert.ok(zoneNames.some((z) => z.includes("Central Railway (CR)")));
  assert.ok(zoneNames.some((z) => z.includes("Northern Railway (NR)")));
  assert.ok(zoneNames.some((z) => z.includes("Western Railway (WR)")));
  assert.ok(zoneNames.some((z) => z.includes("Metro Railway, Kolkata")));
  assert.ok(zoneNames.some((z) => z.includes("Konkan Railway (KR)")));
  assert.ok(zoneNames.some((z) => z.includes("South Coast Railway (SCoR)")));

  // 2. Verify Divisions mapped to Zones
  const divisions = options.filter((o) => o.category === "division");
  assert.ok(divisions.length >= 60, "Should have all divisions for the 19 zones");
  const nrDivisions = divisions.filter((d) => d.parent_value.includes("Northern Railway"));
  assert.ok(nrDivisions.some((d) => d.label === "Delhi"));

  // 3. Test Dynamic Option CRUD
  const customZoneId = await saveRegistryOption({
    category: "zone",
    label: "Dedicated Freight Corridor (DFCCIL)",
  });
  assert.ok(customZoneId);
  let updatedOptions = await getRegistryOptions("zone");
  assert.equal(updatedOptions.length, 20);

  await deleteRegistryOption(customZoneId);
  updatedOptions = await getRegistryOptions("zone");
  assert.equal(updatedOptions.length, 19);

  // 4. Test Excel Parsing on actual file in sheet/QR Code File.xlsx
  const fileBuffer = readFileSync("sheet/QR Code File.xlsx");
  const parsedRows = await parseSpreadsheetData(fileBuffer, true);
  assert.ok(Array.isArray(parsedRows));
  console.log(`Parsed ${parsedRows.length} rows from sheet/QR Code File.xlsx`);

  // 5. Test Saving Railway ELB Product Record
  const savedId = await saveProduct({
    name: "Heavy Duty Highway ELB - Boom Assembly (LC-102)",
    sku: "ELB-NR-LC102-01",
    zone: "Northern Railway (NR)",
    division: "Delhi",
    station_details: "Ghaziabad Junction Yard",
    elb_type: "Heavy Duty Highway ELB",
    part_name: "Boom & Arm Assembly",
    lc_gate_no: "LC-102",
    version_no: "v3.1",
    machine_no: "MCH-88712",
    pedestal_no: "PED-02",
    locking_no: "LCK-990",
    date_of_supply: "2025-03-01",
    date_of_installation: "2025-03-15",
    date_of_commissioning: "2025-03-20",
    date_of_warranty_expiry: "2028-03-20",
    under_warranty: "Yes",
    comments: "Tested under 110V AC supply with optical sensors",
  });
  assert.ok(savedId > 0);

  const product = await getProduct("ELB-NR-LC102-01");
  assert.ok(product);
  assert.equal(product.zone, "Northern Railway (NR)");
  assert.equal(product.division, "Delhi");
  assert.equal(product.station_details, "Ghaziabad Junction Yard");
  assert.equal(product.lc_gate_no, "LC-102");
  assert.equal(product.elb_type, "Heavy Duty Highway ELB");
  assert.equal(product.part_name, "Boom & Arm Assembly");
  assert.equal(product.machine_no, "MCH-88712");
  assert.equal(product.pedestal_no, "PED-02");
  assert.equal(product.locking_no, "LCK-990");
  assert.equal(product.version_no, "v3.1");
  assert.equal(product.date_of_supply, "2025-03-01");
  assert.equal(product.date_of_installation, "2025-03-15");
  assert.equal(product.date_of_commissioning, "2025-03-20");
  assert.equal(product.comments, "Tested under 110V AC supply with optical sensors");

  // 6. Test Search and Filtering by Railway attributes
  const searchByZone = await listProducts("Northern Railway");
  assert.equal(searchByZone.total, 1);

  const searchByGate = await listProducts("LC-102");
  assert.equal(searchByGate.total, 1);

  // 7. Test Exporting XLSX and CSV with Railway ELB columns
  const exportedCsv = await exportCsv("products", "http://localhost:3000");
  assert.ok(exportedCsv.includes("Zonal Railway"));
  assert.ok(exportedCsv.includes("Northern Railway (NR)"));
  assert.ok(exportedCsv.includes("Ghaziabad Junction Yard"));

  const exportedXlsx = await exportXlsx("products", "http://localhost:3000");
  assert.ok(Buffer.isBuffer(exportedXlsx));
  assert.ok(exportedXlsx.length > 100);
});

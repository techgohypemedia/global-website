import { randomUUID } from "node:crypto";
import Papa from "papaparse";
import * as xlsx from "xlsx";
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

export type RegistryOption = {
  id: string;
  category: "zone" | "division" | "elb_type" | "part_name" | string;
  label: string;
  value: string;
  parent_value: string;
  sort_order: number;
};

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
  // Railway ELB & Equipment Specifications
  zone: string;
  division: string;
  station_details: string;
  elb_type: string;
  part_name: string;
  lc_gate_no: string;
  version_no: string;
  machine_no: string;
  pedestal_no: string;
  locking_no: string;
  date_of_supply: string;
  date_of_installation: string;
  date_of_commissioning: string;
  date_of_warranty_expiry: string;
  under_warranty: string;
  comments: string;
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
    zone: String(row.zone || ""),
    division: String(row.division || ""),
    station_details: String(row.station_details || ""),
    elb_type: String(row.elb_type || ""),
    part_name: String(row.part_name || ""),
    lc_gate_no: String(row.lc_gate_no || ""),
    version_no: String(row.version_no || ""),
    machine_no: String(row.machine_no || ""),
    pedestal_no: String(row.pedestal_no || ""),
    locking_no: String(row.locking_no || ""),
    date_of_supply: String(row.date_of_supply || ""),
    date_of_installation: String(row.date_of_installation || ""),
    date_of_commissioning: String(row.date_of_commissioning || ""),
    date_of_warranty_expiry: String(row.date_of_warranty_expiry || ""),
    under_warranty: String(row.under_warranty || ""),
    comments: String(row.comments || ""),
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

export async function ensureRailwayCategory(): Promise<string> {
  const name = "Railway Equipment";
  const nameKey = key(name);
  const existing = await queryOne<{ id: string }>(
    "SELECT id FROM categories WHERE name_key=$1",
    [nameKey],
  );
  if (existing) return existing.id;
  const id = randomUUID();
  await execute(
    "INSERT INTO categories (id, name, name_key) VALUES ($1, $2, $3)",
    [id, name, nameKey],
  );
  return id;
}

export async function ensureDefaultCategories(): Promise<string> {
  const existing = await queryOne<{ id: string }>(
    "SELECT id FROM categories LIMIT 1",
  );
  if (existing) return existing.id;
  return ensureRailwayCategory();
}

export async function categories(): Promise<Category[]> {
  const rows = await query<{
    id: string;
    name: string;
    count: number | string;
  }>(
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
    const row = await queryOne<{ id: string }>(
      "UPDATE categories SET name=$1, name_key=$2 WHERE id=$3 RETURNING id",
      [name, key(name), id],
    );
    if (!row) throw new Error("Category not found.");
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

// -------------------------------------------------------------
// Dynamic Registry Options (Zones, Divisions, ELB Types, Parts)
// -------------------------------------------------------------
export const DEFAULT_RAILWAY_ZONES_AND_DIVISIONS: {
  zone: string;
  divisions: string[];
}[] = [
  {
    zone: "Central Railway (CR)",
    divisions: ["Mumbai (CSMT)", "Bhusawal", "Pune", "Solapur", "Nagpur"],
  },
  {
    zone: "Eastern Railway (ER)",
    divisions: ["Howrah", "Sealdah", "Asansol", "Malda"],
  },
  {
    zone: "East Central Railway (ECR)",
    divisions: [
      "Danapur",
      "Dhanbad",
      "Pt. Deen Dayal Upadhyay (DDU)",
      "Samastipur",
      "Sonpur",
    ],
  },
  {
    zone: "East Coast Railway (ECoR)",
    divisions: ["Khurda Road", "Sambalpur", "Waltair"],
  },
  {
    zone: "Northern Railway (NR)",
    divisions: ["Delhi", "Ambala", "Firozpur", "Lucknow (NR)", "Moradabad"],
  },
  {
    zone: "North Central Railway (NCR)",
    divisions: ["Prayagraj (Allahabad)", "Agra", "Jhansi"],
  },
  {
    zone: "North Eastern Railway (NER)",
    divisions: ["Lucknow (NER)", "Izzatnagar", "Varanasi"],
  },
  {
    zone: "Northeast Frontier Railway (NFR)",
    divisions: ["Katihar", "Alipurduar", "Rangiya", "Lumding", "Tinsukia"],
  },
  {
    zone: "North Western Railway (NWR)",
    divisions: ["Jaipur", "Ajmer", "Bikaner", "Jodhpur"],
  },
  {
    zone: "Southern Railway (SR)",
    divisions: [
      "Chennai",
      "Madurai",
      "Palakkad",
      "Tiruchchirappalli",
      "Thiruvananthapuram",
      "Salem",
    ],
  },
  {
    zone: "South Central Railway (SCR)",
    divisions: [
      "Secunderabad",
      "Hyderabad",
      "Vijayawada",
      "Guntakal",
      "Guntur",
      "Nanded",
    ],
  },
  {
    zone: "South Eastern Railway (SER)",
    divisions: ["Kharagpur", "Adra", "Chakradharpur", "Ranchi"],
  },
  {
    zone: "South East Central Railway (SECR)",
    divisions: ["Bilaspur", "Raipur", "Nagpur (SECR)"],
  },
  {
    zone: "South Western Railway (SWR)",
    divisions: [
      "Hubballi (Hubli)",
      "Bengaluru (Bangalore)",
      "Mysuru (Mysore)",
    ],
  },
  {
    zone: "Western Railway (WR)",
    divisions: [
      "Mumbai Central",
      "Vadodara",
      "Ahmedabad",
      "Ratlam",
      "Rajkot",
      "Bhavnagar",
    ],
  },
  {
    zone: "West Central Railway (WCR)",
    divisions: ["Jabalpur", "Bhopal", "Kota"],
  },
  {
    zone: "Metro Railway, Kolkata",
    divisions: ["Kolkata Metro"],
  },
  {
    zone: "South Coast Railway (SCoR)",
    divisions: ["Visakhapatnam", "Guntur", "Guntakal", "Rayagada"],
  },
  {
    zone: "Konkan Railway (KR)",
    divisions: ["Karwar", "Ratnagiri"],
  },
];

export const DEFAULT_ELB_TYPES = [
  "ELB 24V DC Standard",
  "ELB 110V AC Standard",
  "Heavy Duty Highway ELB",
  "High Speed Barrier ELB",
  "Solar Powered ELB",
];

export const DEFAULT_PART_NAMES = [
  "Complete ELB Unit",
  "Boom & Arm Assembly",
  "Drive Motor & Gearbox Mechanism",
  "Electronic Control Panel & Transmitter",
  "Pedestal & Counterweight Assembly",
  "Solenoid Locking & Latch Unit",
  "Audio-Visual Flashing Warning Unit",
  "Obstacle Sensor & Loop Detector",
];

export async function ensureDefaultOptions(): Promise<void> {
  await ensureRailwayCategory();
  const existing = await queryOne<{ id: string }>(
    "SELECT id FROM registry_options LIMIT 1",
  );
  if (existing) return;

  let sortOrder = 0;
  // Seed Zones and Divisions
  for (const item of DEFAULT_RAILWAY_ZONES_AND_DIVISIONS) {
    const zoneId = randomUUID();
    await execute(
      "INSERT INTO registry_options (id, category, label, value, parent_value, sort_order) VALUES ($1, $2, $3, $4, $5, $6)",
      [zoneId, "zone", item.zone, item.zone, "", sortOrder++],
    );
    for (const div of item.divisions) {
      await execute(
        "INSERT INTO registry_options (id, category, label, value, parent_value, sort_order) VALUES ($1, $2, $3, $4, $5, $6)",
        [randomUUID(), "division", div, div, item.zone, sortOrder++],
      );
    }
  }

  // Seed ELB Types
  for (const elb of DEFAULT_ELB_TYPES) {
    await execute(
      "INSERT INTO registry_options (id, category, label, value, parent_value, sort_order) VALUES ($1, $2, $3, $4, $5, $6)",
      [randomUUID(), "elb_type", elb, elb, "", sortOrder++],
    );
  }

  // Seed Part Names
  for (const part of DEFAULT_PART_NAMES) {
    await execute(
      "INSERT INTO registry_options (id, category, label, value, parent_value, sort_order) VALUES ($1, $2, $3, $4, $5, $6)",
      [randomUUID(), "part_name", part, part, "", sortOrder++],
    );
  }
}

export async function getRegistryOptions(
  category?: string,
): Promise<RegistryOption[]> {
  await ensureDefaultOptions();
  let sql =
    "SELECT id, category, label, value, parent_value, sort_order FROM registry_options";
  const params: unknown[] = [];
  if (category) {
    sql += " WHERE category=$1";
    params.push(category);
  }
  sql += " ORDER BY sort_order ASC, label ASC";
  const rows = await query<RegistryOption>(sql, params);
  return rows.map((r) => ({
    id: r.id,
    category: r.category,
    label: r.label,
    value: r.value,
    parent_value: r.parent_value || "",
    sort_order: Number(r.sort_order || 0),
  }));
}

export async function saveRegistryOption(option: {
  id?: string;
  category: string;
  label: string;
  value?: string;
  parent_value?: string;
  sort_order?: number;
}): Promise<string> {
  const category = String(option.category || "").trim();
  const label = String(option.label || "").trim();
  const val = String(option.value || label).trim();
  const parentVal = String(option.parent_value || "").trim();
  const sortOrder = Number(option.sort_order || 0);

  if (!category || !label) {
    throw new Error("Category and label are required for registry option.");
  }

  if (option.id) {
    await execute(
      "UPDATE registry_options SET label=$1, value=$2, parent_value=$3, sort_order=$4 WHERE id=$5",
      [label, val, parentVal, sortOrder, option.id],
    );
    return option.id;
  }

  const id = randomUUID();
  await execute(
    "INSERT INTO registry_options (id, category, label, value, parent_value, sort_order) VALUES ($1, $2, $3, $4, $5, $6)",
    [id, category, label, val, parentVal, sortOrder],
  );
  return id;
}

export async function deleteRegistryOption(id: string): Promise<void> {
  await execute("DELETE FROM registry_options WHERE id=$1", [id]);
}

// -------------------------------------------------------------
// Product Validation & Saving
// -------------------------------------------------------------
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
    "zone",
    "division",
    "station_details",
    "elb_type",
    "part_name",
    "lc_gate_no",
    "version_no",
    "machine_no",
    "pedestal_no",
    "locking_no",
    "date_of_supply",
    "date_of_installation",
    "date_of_commissioning",
    "date_of_warranty_expiry",
    "under_warranty",
    "comments",
  ] as const) {
    input[field] = String(raw[field] || "").trim();
    if (input[field].length > (field === "description" ? 10000 : 2048))
      throw new Error(`${field} is too long.`);
  }

  // If category is not set, fallback to default or create one
  if (!input.category_id) {
    input.category_id = await ensureDefaultCategories();
  }

  // Synthesize name if missing
  if (!input.name) {
    const parts = [
      input.elb_type || "Electric Lifting Barrier",
      input.part_name,
      input.station_details || (input.lc_gate_no ? `LC Gate ${input.lc_gate_no}` : ""),
    ].filter(Boolean);
    input.name = parts.join(" - ") || "Railway ELB Equipment";
  }

  // Synthesize SKU if missing
  if (!input.sku) {
    input.sku = input.machine_no
      ? `ELB-${input.machine_no}`
      : `ELB-${randomUUID().slice(0, 8).toUpperCase()}`;
  }

  // Default brand to GLOBAL if empty
  if (!input.brand) {
    input.brand = "GLOBAL";
  }

  // Default website_url if empty
  if (!input.website_url) {
    input.website_url = "https://global-website.com";
  }

  if (input.sku.length > 120 || input.name.length > 200)
    throw new Error(
      "SKU must be under 121 characters and name under 201 characters.",
    );

  const cat = await queryOne<{ id: string }>(
    "SELECT id FROM categories WHERE id=$1",
    [input.category_id],
  );
  if (!cat) {
    input.category_id = await ensureDefaultCategories();
  }

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
      "This SKU / QR Code already exists, possibly on an inactive product.",
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
    p.zone,
    p.division,
    p.station_details,
    p.elb_type,
    p.part_name,
    p.lc_gate_no,
    p.version_no,
    p.machine_no,
    p.pedestal_no,
    p.locking_no,
    p.date_of_supply,
    p.date_of_installation,
    p.date_of_commissioning,
    p.date_of_warranty_expiry,
    p.under_warranty,
    p.comments,
  ];

  if (id) {
    const updateSql = isPostgres
      ? `UPDATE products SET 
          name=$1, sku=$2, sku_key=$3, category_id=$4, brand=$5, model=$6, description=$7, 
          images=$8, manufacturing_date=$9, website_url=$10, zone=$11, division=$12, 
          station_details=$13, elb_type=$14, part_name=$15, lc_gate_no=$16, version_no=$17, 
          machine_no=$18, pedestal_no=$19, locking_no=$20, date_of_supply=$21, 
          date_of_installation=$22, date_of_commissioning=$23, date_of_warranty_expiry=$24, 
          under_warranty=$25, comments=$26, updated_at=NOW() 
         WHERE id=$27 RETURNING id`
      : `UPDATE products SET 
          name=$1, sku=$2, sku_key=$3, category_id=$4, brand=$5, model=$6, description=$7, 
          images=$8, manufacturing_date=$9, website_url=$10, zone=$11, division=$12, 
          station_details=$13, elb_type=$14, part_name=$15, lc_gate_no=$16, version_no=$17, 
          machine_no=$18, pedestal_no=$19, locking_no=$20, date_of_supply=$21, 
          date_of_installation=$22, date_of_commissioning=$23, date_of_warranty_expiry=$24, 
          under_warranty=$25, comments=$26, updated_at=strftime('%Y-%m-%dT%H:%M:%fZ','now') 
         WHERE id=$27 RETURNING id`;
    const row = await queryOne<{ id: number }>(updateSql, [...values, id]);
    if (!row) throw new Error("Product not found.");
    return Number(row.id);
  }

  const insertSql = `INSERT INTO products (
    name, sku, sku_key, category_id, brand, model, description, images, 
    manufacturing_date, website_url, zone, division, station_details, elb_type, 
    part_name, lc_gate_no, version_no, machine_no, pedestal_no, locking_no, 
    date_of_supply, date_of_installation, date_of_commissioning, date_of_warranty_expiry, 
    under_warranty, comments, public_id
  ) VALUES (
    $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, 
    $18, $19, $20, $21, $22, $23, $24, $25, $26, $27
  ) RETURNING id`;

  const row = await queryOne<{ id: number }>(insertSql, [
    ...values,
    randomUUID(),
  ]);
  if (!row) throw new Error("Failed to insert product.");
  return Number(row.id);
}

const select =
  "SELECT p.*, c.name AS category FROM products p JOIN categories c ON c.id=p.category_id";

export async function getProduct(
  publicId: string,
): Promise<Product | undefined> {
  const row = await queryOne(
    `${select} WHERE p.public_id=$1 OR p.sku=$1 OR p.sku_key=$2`,
    [publicId, key(publicId)],
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

  const where = ` WHERE (
    p.name ${likeOp} $1 OR 
    p.sku ${likeOp} $1 OR 
    p.brand ${likeOp} $1 OR 
    p.zone ${likeOp} $1 OR 
    p.division ${likeOp} $1 OR 
    p.station_details ${likeOp} $1 OR 
    p.elb_type ${likeOp} $1 OR 
    p.part_name ${likeOp} $1 OR 
    p.lc_gate_no ${likeOp} $1 OR 
    p.machine_no ${likeOp} $1 OR 
    ${serialExpr} ${likeOp} $1
  ) AND ($2='' OR p.category_id=$2) AND ($3='' OR p.active=$4)`;
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
  const row = await queryOne<{
    products: number | string;
    active: number | string;
  }>(
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

export const masterExcelHeaders = [
  "S.No",
  "QR Code Number",
  "Zonal Railway",
  "Division",
  "Station Details",
  "Type of ELB",
  "Part Name",
  "LC Gate No.",
  "Version No.",
  "Machine No.",
  "Pedestal No.",
  "Locking Number",
  "Date of Supply",
  "Date of Installation",
  "Date of Commissioning",
  "Date of Warranty Expiry",
  "Under Warranty?",
  "Comments",
];

export const standardProductHeaders = [
  "Product Name",
  "SKU",
  "Category",
  "Brand",
  "Model",
  "Description",
  "Manufacturing Date",
  "Website URL",
  ...masterExcelHeaders.slice(2),
];

export function template(kind: string, format = "csv"): string | Buffer {
  if (kind === "categories") {
    return Papa.unparse([["Category Name"]]);
  }
  if (format === "xlsx") {
    const wb = xlsx.utils.book_new();
    const wsData = [
      masterExcelHeaders,
      [
        "1",
        "ELB-QR-0001",
        "Northern Railway (NR)",
        "Delhi",
        "New Delhi Station Yard",
        "ELB 24V DC Standard",
        "Complete ELB Unit",
        "LC-42",
        "v2.4",
        "MCH-9921",
        "PED-04",
        "LCK-110",
        "2025-01-15",
        "2025-02-01",
        "2025-02-10",
        "2028-02-10",
        "Yes",
        "Supplied and commissioned per RDSO specifications",
      ],
    ];
    const ws = xlsx.utils.aoa_to_sheet(wsData);
    xlsx.utils.book_append_sheet(wb, ws, "Master Sheet");
    return xlsx.write(wb, { type: "buffer", bookType: "xlsx" });
  }
  return Papa.unparse([masterExcelHeaders]);
}

/**
 * Normalizes input row fields from either Excel (Master Sheet) or CSV
 */
function normalizeImportRow(raw: Record<string, string>): Record<string, string> {
  const norm: Record<string, string> = {};
  for (const [k, v] of Object.entries(raw)) {
    const cleanK = k.trim();
    norm[cleanK] = String(v ?? "").trim();
  }

  // Map master sheet variations
  const qrCodeNum =
    norm["QR Code Number"] ||
    norm["QR Code No."] ||
    norm["QR Code"] ||
    norm["SKU"] ||
    norm["Product Code"] ||
    "";
  const zone = norm["Zonal Railway"] || norm["Zone"] || "";
  const division = norm["Division"] || norm["District"] || "";
  const station = norm["Station Details"] || norm["Station"] || "";
  const elbType = norm["Type of ELB"] || norm["ELB Type"] || norm["Model"] || "";
  const partName = norm["Part Name"] || norm["Part"] || "";
  const lcGate = norm["LC Gate No."] || norm["LC Gate No"] || norm["Gate No."] || "";
  const version = norm["Version No."] || norm["Version"] || "";
  const machineNo = norm["Machine No."] || norm["Machine No"] || "";
  const pedestalNo = norm["Pedestal No."] || norm["Pedestal No"] || "";
  const lockingNo = norm["Locking Number"] || norm["Locking No."] || norm["Locking No"] || "";
  const supplyDate = norm["Date of Supply"] || norm["Supply Date"] || "";
  const installDate = norm["Date of Installation"] || norm["Installation Date"] || "";
  const commDate = norm["Date of Commissioning"] || norm["Commissioning Date"] || "";
  const warrantyExpiry = norm["Date of Warranty Expiry"] || norm["Warranty Expiry"] || "";
  const underWarranty = norm["Under Warranty?"] || norm["Under Warranty"] || "";
  const comments = norm["Comments"] || norm["Remarks"] || "";

  let productName = norm["Product Name"] || norm["Name"] || "";
  if (!productName && (elbType || partName || zone || lcGate || station)) {
    const nameParts = [
      elbType || "ELB",
      partName,
      station || (lcGate ? `Gate ${lcGate}` : ""),
    ].filter(Boolean);
    productName = nameParts.join(" - ") || "Railway Equipment";
  }

  const sku = qrCodeNum || (machineNo ? `ELB-${machineNo}` : "");

  return {
    "Product Name": productName,
    SKU: sku,
    Category: norm["Category"] || (zone || elbType ? "Railway Equipment" : ""),
    Brand: norm["Brand"] || "GLOBAL",
    Model: norm["Model"] || elbType || "",
    Description: norm["Description"] || comments || "",
    "Manufacturing Date": norm["Manufacturing Date"] || supplyDate || "",
    "Website URL":
      norm["Website URL"] ||
      (zone || elbType ? "https://global-website.com" : ""),
    Zone: zone,
    Division: division,
    "Station Details": station,
    "Type of ELB": elbType,
    "Part Name": partName,
    "LC Gate No.": lcGate,
    "Version No.": version,
    "Machine No.": machineNo,
    "Pedestal No.": pedestalNo,
    "Locking Number": lockingNo,
    "Date of Supply": supplyDate,
    "Date of Installation": installDate,
    "Date of Commissioning": commDate,
    "Date of Warranty Expiry": warrantyExpiry,
    "Under Warranty?": underWarranty,
    Comments: comments,
  };
}

export async function parseSpreadsheetData(
  input: string | Buffer,
  isBinary = false,
): Promise<Record<string, string>[]> {
  if (isBinary || (typeof input !== "string" && Buffer.isBuffer(input))) {
    const buf = Buffer.isBuffer(input) ? input : Buffer.from(input, "base64");
    const wb = xlsx.read(buf, { type: "buffer" });
    const sheetName = wb.SheetNames[0];
    const ws = wb.Sheets[sheetName];
    const rawRows = xlsx.utils.sheet_to_json<any[]>(ws, { header: 1, defval: "" });
    if (!rawRows || rawRows.length === 0) return [];

    // Find the header row (detect row that contains "QR Code Number" or "Zonal Railway" or "Product Name" or "Category Name")
    let headerRowIndex = 0;
    for (let i = 0; i < Math.min(10, rawRows.length); i++) {
      const row = rawRows[i] || [];
      const rowText = row.map((c) => String(c).trim().toLowerCase()).join(" ");
      if (
        rowText.includes("qr code") ||
        rowText.includes("zonal railway") ||
        rowText.includes("product name") ||
        rowText.includes("category name") ||
        rowText.includes("s.no")
      ) {
        headerRowIndex = i;
        break;
      }
    }

    const headers = (rawRows[headerRowIndex] || []).map((h: any) => String(h).trim());
    const dataRows: Record<string, string>[] = [];
    for (let i = headerRowIndex + 1; i < rawRows.length; i++) {
      const row = rawRows[i];
      if (!row || row.length === 0) continue;
      const rowObj: Record<string, string> = {};
      let hasData = false;
      headers.forEach((h: string, colIdx: number) => {
        if (!h) return;
        const val = String(row[colIdx] ?? "").trim();
        rowObj[h] = val;
        // Ignore row if it only has S.No or row number without any actual equipment data
        if (val && h !== "S.No" && h !== "") {
          hasData = true;
        }
      });
      if (hasData) {
        dataRows.push(rowObj);
      }
    }
    return dataRows;
  }

  // Handle CSV
  const csvText =
    typeof input === "string"
      ? input
      : Buffer.isBuffer(input)
        ? (input as Buffer).toString("utf-8")
        : String(input);
  const parsed = Papa.parse<Record<string, string>>(csvText.replace(/^\uFEFF/, ""), {
    header: true,
    delimiter: ",",
    skipEmptyLines: "greedy",
    transformHeader: (h) => h.trim(),
  });
  return parsed.data;
}

export async function importSpreadsheet(
  input: string | Buffer,
  kind: string,
  commit = false,
  isBinary = false,
): Promise<ImportResult> {
  if (!["products", "categories"].includes(kind))
    throw new Error("Choose products or categories.");

  const rawData = await parseSpreadsheetData(input, isBinary);
  if (rawData.length === 0) {
    throw new Error("No valid data rows found in the uploaded file.");
  }

  const sampleRowKeys = Object.keys(rawData[0] || {}).map((k) =>
    k.trim(),
  );
  const sampleRowKeysLower = sampleRowKeys.map((k) => k.toLowerCase());

  let isRailwaySheet = false;
  if (kind === "categories") {
    if (!sampleRowKeys.includes("Category Name")) {
      throw new Error("Required headers: Category Name.");
    }
  } else if (kind === "products") {
    isRailwaySheet = sampleRowKeysLower.some(
      (k) =>
        k.includes("zonal railway") ||
        k.includes("type of elb") ||
        k.includes("qr code number") ||
        k.includes("lc gate no") ||
        k.includes("station details"),
    );

    if (isRailwaySheet) {
      await ensureRailwayCategory();
    } else {
      const standardReq = [
        "Product Name",
        "SKU",
        "Category",
        "Website URL",
      ];
      if (standardReq.some((h) => !sampleRowKeys.includes(h))) {
        throw new Error(
          `Required headers: ${standardReq.join(", ")}.`,
        );
      }
    }
  }

  if (rawData.length > 5000)
    throw new Error("Import at most 5,000 rows per file.");

  const defaultCatId = await ensureDefaultCategories();
  const seen = new Set<string>();
  const rows: ImportRow[] = [];
  const categoryCache = new Map<string, string>();

  for (let index = 0; index < rawData.length; index++) {
    const rawRow = rawData[index];
    const normalized = kind === "categories" ? rawRow : normalizeImportRow(rawRow);
    const row: ImportRow = {
      row: index + 1,
      status: "new",
      message: "Ready to import",
      data: normalized,
    };

    try {
      const identity = key(
        kind === "categories"
          ? normalized["Category Name"] || normalized["Name"] || ""
          : normalized.SKU || normalized["QR Code Number"] || "",
      );

      if (!identity) {
        throw new Error(
          kind === "categories"
            ? "Category name is required."
            : "SKU is required.",
        );
      }

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
        const catName = normalized["Category Name"] || normalized["Name"];
        if (!catName || catName.length > 120)
          throw new Error("Category name must contain 1–120 characters.");
        if (commit) await saveCategory(catName);
      } else {
        const rawCategory = String(rawRow["Category"] || rawRow["category"] || "").trim();
        const isRailway =
          isRailwaySheet ||
          Boolean(
            rawRow["Zonal Railway"] ||
            rawRow["Zone"] ||
            rawRow["Type of ELB"] ||
            rawRow["ELB Type"] ||
            rawRow["Station Details"] ||
            rawRow["LC Gate No."]
          );
        const categoryName = normalized.Category || (isRailway ? "Railway Equipment" : "");
        let categoryId = defaultCatId;

        if (categoryName) {
          const catKey = key(categoryName);
          let foundId = categoryCache.get(catKey);

          if (!foundId) {
            const category = await queryOne<{ id: string }>(
              "SELECT id FROM categories WHERE name_key=$1",
              [catKey],
            );
            if (category) {
              foundId = category.id;
              categoryCache.set(catKey, foundId);
            }
          }

          if (!foundId) {
            if (isRailway || !rawCategory) {
              if (commit) {
                const newCatId = randomUUID();
                await execute(
                  "INSERT INTO categories (id, name, name_key) VALUES ($1, $2, $3)",
                  [newCatId, categoryName, catKey],
                );
                foundId = newCatId;
                categoryCache.set(catKey, newCatId);
              } else {
                foundId = defaultCatId;
              }
            } else {
              throw new Error("Category does not exist. Import or create it first.");
            }
          }

          categoryId = foundId;
        }

        const inputData = await validateProduct({
          name: normalized["Product Name"],
          sku: normalized.SKU,
          category_id: categoryId,
          brand: normalized.Brand || "GLOBAL",
          model: normalized.Model,
          description: normalized.Description,
          manufacturing_date: normalized["Manufacturing Date"],
          website_url: normalized["Website URL"] || "https://global-website.com",
          zone: normalized.Zone,
          division: normalized.Division,
          station_details: normalized["Station Details"],
          elb_type: normalized["Type of ELB"],
          part_name: normalized["Part Name"],
          lc_gate_no: normalized["LC Gate No."],
          version_no: normalized["Version No."],
          machine_no: normalized["Machine No."],
          pedestal_no: normalized["Pedestal No."],
          locking_no: normalized["Locking Number"],
          date_of_supply: normalized["Date of Supply"],
          date_of_installation: normalized["Date of Installation"],
          date_of_commissioning: normalized["Date of Commissioning"],
          date_of_warranty_expiry: normalized["Date of Warranty Expiry"],
          under_warranty: normalized["Under Warranty?"],
          comments: normalized.Comments,
        });

        if (commit) await saveProduct(inputData);
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

export async function importCsv(
  csv: string,
  kind: string,
  commit = false,
): Promise<ImportResult> {
  return importSpreadsheet(csv, kind, commit, false);
}

export async function exportCsv(kind: string, origin: string): Promise<string> {
  if (kind === "categories") {
    const cats = await categories();
    return Papa.unparse(
      { fields: ["Category Name"], data: cats.map((c) => [c.name]) },
      { escapeFormulae: true },
    );
  }
  const rows = await query(`${select} ORDER BY p.id`);
  const products = rows.map(hydrate);
  return Papa.unparse(
    {
      fields: [
        "Product Name",
        "SKU",
        "Category",
        "Brand",
        "Model",
        "Description",
        "Manufacturing Date",
        "Website URL",
        "Zonal Railway",
        "Division",
        "Station Details",
        "Type of ELB",
        "Part Name",
        "LC Gate No.",
        "Version No.",
        "Machine No.",
        "Pedestal No.",
        "Locking Number",
        "Date of Supply",
        "Date of Installation",
        "Date of Commissioning",
        "Date of Warranty Expiry",
        "Under Warranty?",
        "Comments",
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
        p.zone,
        p.division,
        p.station_details,
        p.elb_type,
        p.part_name,
        p.lc_gate_no,
        p.version_no,
        p.machine_no,
        p.pedestal_no,
        p.locking_no,
        p.date_of_supply,
        p.date_of_installation,
        p.date_of_commissioning,
        p.date_of_warranty_expiry,
        p.under_warranty,
        p.comments,
        p.serial,
        p.active ? "Active" : "Inactive",
        `${origin}/p/${p.public_id}`,
        p.images.join("|"),
      ]),
    },
    { escapeFormulae: true },
  );
}

export async function exportXlsx(kind: string, origin: string): Promise<Buffer> {
  if (kind === "categories") {
    const cats = await categories();
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.aoa_to_sheet([["Category Name"], ...cats.map((c) => [c.name])]);
    xlsx.utils.book_append_sheet(wb, ws, "Categories");
    return xlsx.write(wb, { type: "buffer", bookType: "xlsx" });
  }

  const rows = await query(`${select} ORDER BY p.id`);
  const products = rows.map(hydrate);
  const wb = xlsx.utils.book_new();
  const wsData = [
    [
      "S.No",
      "QR Code Number",
      "Zonal Railway",
      "Division",
      "Station Details",
      "Type of ELB",
      "Part Name",
      "LC Gate No.",
      "Version No.",
      "Machine No.",
      "Pedestal No.",
      "Locking Number",
      "Date of Supply",
      "Date of Installation",
      "Date of Commissioning",
      "Date of Warranty Expiry",
      "Under Warranty?",
      "Comments",
      "Public QR Link",
      "Status",
    ],
    ...products.map((p, idx) => [
      idx + 1,
      p.sku,
      p.zone,
      p.division,
      p.station_details,
      p.elb_type,
      p.part_name,
      p.lc_gate_no,
      p.version_no,
      p.machine_no,
      p.pedestal_no,
      p.locking_no,
      p.date_of_supply,
      p.date_of_installation,
      p.date_of_commissioning,
      p.date_of_warranty_expiry,
      p.under_warranty,
      p.comments,
      `${origin}/p/${p.public_id}`,
      p.active ? "Active" : "Inactive",
    ]),
  ];
  const ws = xlsx.utils.aoa_to_sheet(wsData);
  xlsx.utils.book_append_sheet(wb, ws, "Master Sheet");
  return xlsx.write(wb, { type: "buffer", bookType: "xlsx" });
}

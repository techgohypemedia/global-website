import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

// Ensure DATABASE_URL from .env.local is present
if (!process.env.DATABASE_URL && existsSync(".env.local")) {
  const match = readFileSync(".env.local", "utf8").match(/^DATABASE_URL=(.+)$/m);
  if (match) process.env.DATABASE_URL = match[1].trim();
}

test("Neon DB connection and admin catalog integration", async () => {
  assert.ok(process.env.DATABASE_URL, "DATABASE_URL must be defined");

  const { isPostgres, ensureDb } = await import("../lib/catalog-db");
  assert.equal(isPostgres, true, "Must be connected to PostgreSQL");

  await ensureDb();

  const {
    categories,
    saveCategory,
    deleteCategory,
    saveProduct,
    listProducts,
    getProduct,
    stats,
    setProductActive,
  } = await import("../lib/catalog");

  const { configured } = await import("../lib/catalog-auth");

  // Admin should be configured (migrated from SQLite or initialized)
  const isConfigured = await configured();
  assert.equal(isConfigured, true, "Admin should be configured in Neon DB");

  // Create test category with unique name
  const testCatName = `TestCat-${Date.now()}`;
  await saveCategory(testCatName);

  const allCats = await categories();
  const createdCat = allCats.find((c) => c.name === testCatName);
  assert.ok(createdCat, "Created category must exist in Neon DB");

  // Create test product
  const testSku = `NEON-${Date.now()}`;
  const prodInput = {
    name: "Neon Test Product",
    sku: testSku,
    category_id: createdCat.id,
    website_url: "https://neon.tech/test",
    brand: "Neon",
    model: "v1",
    description: "Testing Neon Postgres connection",
  };

  const prodId = await saveProduct(prodInput);
  assert.ok(prodId > 0, "Product ID must be positive");

  // Search product
  const searchRes = await listProducts(testSku);
  assert.equal(searchRes.total, 1, "Should find 1 product matching SKU");
  const prod = searchRes.products[0];
  assert.equal(prod.name, "Neon Test Product");
  assert.ok(prod.serial.startsWith("PRD-"));

  // Check getProduct by public_id
  const fetchedProd = await getProduct(prod.public_id);
  assert.ok(fetchedProd);
  assert.equal(fetchedProd.id, prodId);
  assert.equal(fetchedProd.active, 1);

  // Toggle active
  await setProductActive(prodId, false);
  const inactiveProd = await getProduct(prod.public_id);
  assert.equal(inactiveProd?.active, 0);

  // Restore active
  await setProductActive(prodId, true);

  // Check stats
  const currentStats = await stats();
  assert.ok(currentStats.products >= 1);
  assert.ok(currentStats.categories >= 1);

  // Cleanup test product and category
  const { execute, deleteCategory: delCat } = await import("../lib/catalog-db").then(async m => {
    const { deleteCategory } = await import("../lib/catalog");
    return { execute: m.execute, deleteCategory };
  });
  await execute("DELETE FROM products WHERE id=$1", [prodId]);
  await delCat(createdCat.id);

  console.log("Neon DB integration verified and test records cleaned up successfully:", {
    adminConfigured: isConfigured,
    stats: await stats(),
  });
});

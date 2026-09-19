import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import { mkdirSync } from "node:fs";
import { PNG } from "pngjs";
import jsQR from "jsqr";

const base = process.env.CATALOG_TEST_URL || "http://127.0.0.1:3001";
if (!["localhost", "127.0.0.1"].includes(new URL(base).hostname))
  throw new Error("Browser tests require a local isolated test server.");
const browser = await chromium.launch({
  channel: process.env.BROWSER_CHANNEL || "msedge",
  headless: true,
});
const context = await browser.newContext({
  baseURL: base,
  viewport: { width: 1440, height: 1000 },
});
const page = await context.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
const suffix = Date.now().toString();
const category = `Electrical ${suffix}`;
const sku = `ELD-${suffix}`;
mkdirSync("test-results", { recursive: true });
try {
  assert.equal((await context.request.get("/api/catalog/data")).status(), 401);
  await page.goto("/admin");
  await page.getByLabel("Email address").fill("browser-test@example.com");
  await page.getByLabel(/^Password/).fill("Browser-test-password-2026");
  if (await page.getByLabel("Setup token").count())
    await page
      .getByLabel("Setup token")
      .fill("catalog-browser-test-setup-token");
  await page
    .getByRole("button", { name: /Create admin account|Sign in/ })
    .click();
  await page.getByRole("heading", { name: "Dashboard", exact: true }).waitFor();
  await page
    .getByRole("navigation")
    .getByRole("button", { name: "Categories", exact: true })
    .click();
  await page.getByRole("button", { name: "Add category" }).click();
  await page.getByLabel("Category name").fill(category);
  await page.getByRole("button", { name: "Save category" }).click();
  await page.getByRole("dialog").waitFor({ state: "hidden" });
  await page
    .getByRole("navigation")
    .getByRole("button", { name: /Products/ })
    .click();
  await page.getByRole("button", { name: "Add product" }).first().click();
  await page.getByLabel("Product name").fill("Digital earth leakage detector");
  await page.getByLabel("SKU / product code").fill(sku);
  await page.getByLabel("Brand", { exact: true }).fill("GLOBAL");
  await page.getByLabel("Model", { exact: true }).fill("DELD-100");
  await page
    .getByRole("dialog")
    .getByRole("combobox")
    .selectOption({ label: category });
  await page
    .getByLabel("Main website product URL")
    .fill("https://example.com/products/deld-100");
  await page
    .getByLabel("Description", { exact: true })
    .fill("Continuous earth leakage monitoring for electrical safety systems.");
  const png = new PNG({ width: 64, height: 64 });
  for (let i = 0; i < png.data.length; i += 4) {
    png.data[i] = 40;
    png.data[i + 1] = 99;
    png.data[i + 2] = 231;
    png.data[i + 3] = 255;
  }
  await page.getByLabel("Product images").setInputFiles({
    name: "product.png",
    mimeType: "image/png",
    buffer: PNG.sync.write(png),
  });
  await page
    .getByRole("img", { name: "Product image 1", exact: true })
    .waitFor();
  await page.getByRole("button", { name: "Save product", exact: true }).click();
  await page.getByRole("dialog").waitFor({ state: "hidden" });
  await page
    .getByRole("button", {
      name: new RegExp(`Digital earth leakage detector ${sku}`),
    })
    .click();
  const response = await context.request.get(`/api/catalog/data?q=${sku}`);
  const product = (await response.json()).products[0];
  assert.ok(product.serial.startsWith("PRD-"));
  const qr = await context.request.get(`/api/catalog/qr/${product.public_id}`);
  const decoded = PNG.sync.read(await qr.body());
  assert.equal(
    jsQR(new Uint8ClampedArray(decoded.data), decoded.width, decoded.height)
      ?.data,
    `${base}/p/${product.public_id}`,
  );
  const svg = await context.request.get(
    `/api/catalog/qr/${product.public_id}?format=svg&download=1`,
  );
  assert.match(await svg.text(), /<svg/);
  assert.match(svg.headers()["content-disposition"], /attachment/);
  await page.screenshot({
    path: "test-results/product-label.png",
    fullPage: true,
  });
  await page.emulateMedia({ media: "print" });
  await page.screenshot({
    path: "test-results/product-print.png",
    fullPage: true,
  });
  await page.emulateMedia({ media: "screen" });
  await page.getByRole("button", { name: "Edit product", exact: true }).click();
  await page
    .getByLabel("Product name")
    .fill("Digital earth leakage detector — updated");
  await page.getByRole("button", { name: "Save product", exact: true }).click();
  await page.getByRole("dialog").waitFor({ state: "hidden" });
  const customer = await browser.newContext({
    baseURL: base,
    viewport: { width: 390, height: 844 },
  });
  const publicPage = await customer.newPage();
  const publicImage = await customer.request.get(product.images[0]);
  assert.equal(publicImage.status(), 200);
  assert.deepEqual(await publicImage.body(), PNG.sync.write(png));
  await publicPage.goto(`/p/${product.public_id}`);
  await publicPage
    .getByRole("heading", {
      name: "Digital earth leakage detector — updated",
      exact: true,
    })
    .waitFor();
  assert.equal(
    await publicPage
      .getByRole("link", { name: "View more details" })
      .getAttribute("href"),
    "https://example.com/products/deld-100",
  );
  await publicPage.screenshot({
    path: "test-results/public-mobile.png",
    fullPage: true,
  });
  assert.equal(
    await publicPage.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
    true,
  );
  assert.equal((await customer.request.get("/api/catalog/data")).status(), 401);
  assert.equal(
    (
      await context.request.post("/api/catalog/category", {
        headers: { Origin: "https://other.example" },
        data: { name: "Should fail" },
      })
    ).status(),
    400,
  );
  await page
    .getByRole("navigation")
    .getByRole("button", { name: "Import / Export", exact: true })
    .click();
  const csv = `Product Name,SKU,Category,Website URL\nExisting,${sku},${category},https://example.com\nSmart plug,PLUG-${suffix},${category},https://example.com/plug\nDuplicate,PLUG-${suffix},${category},https://example.com/plug\nInvalid,,${category},https://example.com`;
  await page.locator("input[type=file]").setInputFiles({
    name: "products.csv",
    mimeType: "text/csv",
    buffer: Buffer.from(csv),
  });
  await page.getByRole("button", { name: "Validate & preview" }).click();
  await page
    .getByRole("heading", { name: "Import preview", exact: true })
    .waitFor();
  await page.getByRole("button", { name: "Import valid rows" }).click();
  await page
    .getByRole("heading", { name: "Import completed", exact: true })
    .waitFor();
  assert.match(
    await page.locator(".results-panel").innerText(),
    /4 rows · 1 created · 2 duplicates · 1 invalid/,
  );
  const retry = await context.request.post("/api/catalog/import", {
    headers: { Origin: base },
    data: { csv, kind: "products", commit: true },
  });
  assert.equal((await retry.json()).created, 0);
  await page.screenshot({
    path: "test-results/import-results.png",
    fullPage: true,
  });
  const exported = await context.request.get(
    "/api/catalog/export?kind=products",
  );
  assert.match(await exported.text(), new RegExp(sku));
  await page
    .getByRole("navigation")
    .getByRole("button", { name: "Dashboard", exact: true })
    .click();
  await page
    .getByRole("heading", { name: "Recently added products" })
    .waitFor();
  await page.screenshot({
    path: "test-results/admin-desktop.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({
    path: "test-results/admin-mobile.png",
    fullPage: true,
  });
  const overflow = await page.evaluate(() => ({
    width: innerWidth,
    scroll: document.documentElement.scrollWidth,
    elements: [...document.querySelectorAll("body *")]
      .filter((e) => e.getBoundingClientRect().right > innerWidth + 1)
      .map((e) => ({
        tag: e.tagName,
        class: e.className,
        right: e.getBoundingClientRect().right,
      }))
      .slice(0, 25),
  }));
  if (overflow.scroll > overflow.width)
    console.log("Overflow diagnostic:", JSON.stringify(overflow));
  assert.equal(overflow.scroll <= overflow.width, true);
  await context.request.post("/api/catalog/status", {
    headers: { Origin: base },
    data: { id: product.id, active: false },
  });
  await publicPage.reload();
  await publicPage
    .getByRole("heading", { name: "Product unavailable", exact: true })
    .waitFor();
  await context.request.post("/api/catalog/status", {
    headers: { Origin: base },
    data: { id: product.id, active: true },
  });
  await publicPage.reload();
  await publicPage
    .getByRole("heading", {
      name: "Digital earth leakage detector — updated",
      exact: true,
    })
    .waitFor();
  await page
    .getByRole("button", { name: "Sign out", exact: true })
    .filter({ visible: true })
    .click();
  await page
    .getByRole("heading", { name: "Welcome back", exact: true })
    .waitFor();
  assert.equal((await context.request.get("/api/catalog/data")).status(), 401);
  assert.deepEqual(errors, []);
  await customer.close();
  console.log(
    "PASS: admin setup/login, category and product creation, image upload, stable public link, QR decode, PNG/SVG downloads, CSV preview/import/retry/export, deactivation/reactivation, auth/origin checks, mobile overflow, logout. Screenshots saved in test-results/.",
  );
} catch (error) {
  await page.screenshot({ path: "test-results/failure.png", fullPage: true });
  throw error;
} finally {
  await browser.close();
}

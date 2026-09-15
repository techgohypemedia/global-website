import { existsSync, readFileSync, appendFileSync } from "node:fs";
import { randomBytes } from "node:crypto";
const filename = ".env.local";
const existing = existsSync(filename) ? readFileSync(filename, "utf8") : "";
if (!/^ADMIN_SETUP_TOKEN=/m.test(existing)) {
  appendFileSync(
    filename,
    `\n# One-time product registry admin setup\nADMIN_SETUP_TOKEN=${randomBytes(24).toString("hex")}\n`,
  );
  console.log(
    "Created ADMIN_SETUP_TOKEN in .env.local. Open /admin and use it to create your administrator.",
  );
} else {
  console.log(
    "ADMIN_SETUP_TOKEN already exists in .env.local. Open /admin to continue.",
  );
}
if (/^DATABASE_URL=/m.test(existing)) {
  console.log("Neon / PostgreSQL DATABASE_URL is configured.");
}

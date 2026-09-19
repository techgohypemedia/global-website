import { readFile } from "node:fs/promises";
import path from "node:path";
import { dataDir, execute, queryOne } from "./catalog-db";

export async function saveImage(filename: string, bytes: Buffer) {
  await execute(
    "INSERT INTO product_images (filename, content) VALUES ($1, $2)",
    [filename, bytes.toString("base64")],
  );
}

export async function getImage(filename: string): Promise<Buffer | undefined> {
  if (!/^[a-f0-9-]+\.(png|jpg|webp)$/.test(filename)) return undefined;
  const row = await queryOne<{ content: string }>(
    "SELECT content FROM product_images WHERE filename=$1",
    [filename],
  );
  if (row) return Buffer.from(row.content, "base64");
  // Preserve access to images uploaded before database-backed storage.
  try {
    return await readFile(path.join(dataDir, "images", filename));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return undefined;
    throw error;
  }
}

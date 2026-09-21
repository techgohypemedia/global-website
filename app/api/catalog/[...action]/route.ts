import { NextRequest } from "next/server";
import {
  authenticated,
  checkOrigin,
  configured,
  login,
  logout,
} from "@/lib/catalog-auth";
import {
  categories,
  deleteCategory,
  deleteRegistryOption,
  exportCsv,
  exportXlsx,
  getImport,
  getImports,
  getProduct,
  getRegistryOptions,
  importSpreadsheet,
  listProducts,
  saveCategory,
  saveProduct,
  saveRegistryOption,
  setProductActive,
  stats,
  template,
} from "@/lib/catalog";
import QRCode from "qrcode";
import { getImage, saveImage } from "@/lib/catalog-images";
import { randomUUID } from "node:crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
type Context = { params: Promise<{ action: string[] }> };
const json = (data: unknown, status = 200) =>
  Response.json(data, { status, headers: { "Cache-Control": "no-store" } });

export async function GET(request: NextRequest, { params }: Context) {
  try {
    return await get(request, { params });
  } catch (error) {
    console.error("[catalog] GET failed", error);
    return json(
      {
        error:
          "The product registry is temporarily unavailable. Please try again.",
      },
      503,
    );
  }
}

async function get(request: NextRequest, { params }: Context) {
  const [action, id] = (await params).action;
  const q = request.nextUrl.searchParams;
  const origin = process.env.APP_URL || request.nextUrl.origin;

  if (action === "session")
    return json({
      authenticated: await authenticated(),
      configured: await configured(),
    });

  if (action === "images" && id && /^[a-f0-9-]+\.(png|jpg|webp)$/.test(id)) {
    const bytes = await getImage(id);
    if (!bytes) return json({ error: "Image not found." }, 404);
    return new Response(new Uint8Array(bytes), {
      headers: {
        "Content-Type": id.endsWith(".png")
          ? "image/png"
          : id.endsWith(".webp")
            ? "image/webp"
            : "image/jpeg",
        "X-Content-Type-Options": "nosniff",
        "Cache-Control": "public, max-age=86400",
      },
    });
  }

  // Public product lookup (for manual QR code number lookup when damaged)
  if (action === "lookup") {
    const queryTerm = q.get("q") || "";
    if (!queryTerm) return json({ error: "Query required." }, 400);
    const product = await getProduct(queryTerm);
    if (!product) return json({ error: "No product found with this QR code number / SKU." }, 404);
    return json({ product });
  }

  // QR code image generator for public/admin display
  if (action === "qr" && id) {
    const product = await getProduct(id);
    if (!product) return json({ error: "Product not found." }, 404);
    const url = `${origin.replace(/\/$/, "")}/p/${product.public_id}`;
    const svg = q.get("format") === "svg";
    const body = svg
      ? await QRCode.toString(url, {
          type: "svg",
          margin: 4,
          errorCorrectionLevel: "M",
        })
      : await QRCode.toBuffer(url, {
          width: 600,
          margin: 4,
          errorCorrectionLevel: "M",
        });
    return new Response(
      typeof body === "string" ? body : new Uint8Array(body),
      {
        headers: {
          "Content-Type": svg ? "image/svg+xml" : "image/png",
          "Cache-Control": "no-store",
          ...(q.has("download")
            ? {
                "Content-Disposition": `attachment; filename="${product.sku || product.serial}.${svg ? "svg" : "png"}"`,
              }
            : {}),
        },
      },
    );
  }

  if (!(await authenticated())) return json({ error: "Please sign in." }, 401);

  if (action === "data") {
    const [productData, catList, statList, importList, optionsList] =
      await Promise.all([
        listProducts(
          q.get("q") || "",
          q.get("category") || "",
          q.get("status") || "",
          Math.max(1, Number(q.get("page")) || 1),
        ),
        categories(),
        stats(),
        getImports(),
        getRegistryOptions(),
      ]);
    return json({
      ...productData,
      categories: catList,
      stats: statList,
      imports: importList,
      options: optionsList,
    });
  }

  if (action === "options") {
    const category = q.get("category") || undefined;
    const options = await getRegistryOptions(category);
    return json({ options });
  }

  if (action === "import" && id) {
    const row = await getImport(id);
    return row
      ? json(JSON.parse(row.result))
      : json({ error: "Import not found." }, 404);
  }

  if (action === "export") {
    const kind = q.get("kind") || "products";
    const format = q.get("format") || "csv";
    if (format === "xlsx") {
      const buffer = await exportXlsx(kind, origin);
      return new Response(new Uint8Array(buffer), {
        headers: {
          "Content-Type":
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "Content-Disposition": `attachment; filename="${kind === "categories" ? "categories" : "products"}-export.xlsx"`,
          "Cache-Control": "no-store",
        },
      });
    }
    return new Response(await exportCsv(kind, origin), {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${kind === "categories" ? "categories" : "products"}-export.csv"`,
        "Cache-Control": "no-store",
      },
    });
  }

  if (action === "template") {
    const kind = q.get("kind") || "products";
    const format = q.get("format") || "xlsx";
    const result = template(kind, format);
    if (format === "xlsx" && typeof result !== "string") {
      return new Response(new Uint8Array(result), {
        headers: {
          "Content-Type":
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "Content-Disposition": `attachment; filename="${kind === "categories" ? "categories" : "products"}-template.xlsx"`,
          "Cache-Control": "no-store",
        },
      });
    }
    return new Response(String(result), {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${kind === "categories" ? "categories" : "products"}-template.csv"`,
        "Cache-Control": "no-store",
      },
    });
  }

  return json({ error: "Not found." }, 404);
}

export async function POST(request: NextRequest, { params }: Context) {
  try {
    checkOrigin(request);
    const [action] = (await params).action;
    if (action === "login") {
      if (Number(request.headers.get("content-length") || 0) > 4096)
        throw new Error("Request is too large.");
      const body = await request.json();
      if (
        typeof body.email !== "string" ||
        typeof body.password !== "string" ||
        body.password.length > 256
      )
        throw new Error("Enter your email and password.");
      await login(body.email, body.password, body.setupToken);
      return json({ ok: true });
    }
    if (!(await authenticated()))
      return json({ error: "Please sign in." }, 401);
    if (action === "logout") {
      await logout();
      return json({ ok: true });
    }
    if (action === "upload") {
      if (Number(request.headers.get("content-length") || 0) > 6 * 1024 * 1024)
        throw new Error("Image must be smaller than 5 MB.");
      const file = (await request.formData()).get("file");
      if (!(file instanceof File) || file.size > 5 * 1024 * 1024)
        throw new Error("Choose a PNG, JPEG, or WebP image smaller than 5 MB.");
      const bytes = Buffer.from(await file.arrayBuffer());
      const ext = bytes
        .subarray(0, 8)
        .equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
        ? "png"
        : bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255
          ? "jpg"
          : bytes.toString("ascii", 0, 4) === "RIFF" &&
              bytes.toString("ascii", 8, 12) === "WEBP"
            ? "webp"
            : null;
      if (!ext)
        throw new Error("Only PNG, JPEG, and WebP images are supported.");
      const filename = `${randomUUID()}.${ext}`;
      await saveImage(filename, bytes);
      return json({ url: `/api/catalog/images/${filename}` });
    }
    if (Number(request.headers.get("content-length") || 0) > 10 * 1024 * 1024)
      throw new Error("Request is too large.");

    const body = await request.json();
    if (action === "product")
      return json({ id: await saveProduct(body, body.id) });
    if (action === "status") {
      await setProductActive(body.id, Boolean(body.active));
      return json({ ok: true });
    }
    if (action === "category") {
      await saveCategory(body.name, body.id);
      return json({ ok: true });
    }
    if (action === "delete-category") {
      await deleteCategory(body.id);
      return json({ ok: true });
    }
    if (action === "save-option") {
      const id = await saveRegistryOption(body);
      return json({ ok: true, id });
    }
    if (action === "delete-option") {
      await deleteRegistryOption(body.id);
      return json({ ok: true });
    }
    if (action === "import") {
      const input = body.fileBase64 || body.csv || "";
      const isBinary = Boolean(body.isBinary || body.fileBase64);
      return json(
        await importSpreadsheet(
          input,
          body.kind || "products",
          body.commit === true,
          isBinary,
        ),
      );
    }
    return json({ error: "Not found." }, 404);
  } catch (e) {
    return json(
      {
        error:
          e instanceof Error ? e.message : "Unable to complete this request.",
      },
      400,
    );
  }
}

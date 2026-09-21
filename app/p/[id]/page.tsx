/* Uploaded images are served directly from persistent catalog storage. */
import { getProduct } from "@/lib/catalog";
import { notFound } from "next/navigation";
import "../../admin/catalog.css";
import PublicProductView from "./public-product-view";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const product = await getProduct((await params).id);
  if (!product) {
    return {
      title: "Product Not Found | GLOBAL",
      robots: { index: false, follow: false },
    };
  }
  return {
    title: `${product.name} | GLOBAL Railway Equipment`,
    description: `Official verification record for ${product.name} in ${product.zone || "Indian Railways"}.`,
    robots: { index: false, follow: false },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) notFound();

  return <PublicProductView product={product} />;
}

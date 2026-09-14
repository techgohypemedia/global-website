/* Uploaded images are served directly from persistent catalog storage. */
/* eslint-disable @next/next/no-img-element */
import { getProduct } from "@/lib/catalog";
import { notFound } from "next/navigation";
import "../../admin/catalog.css";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Product information | GLOBAL",
  robots: { index: false, follow: false },
};
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const product = await getProduct((await params).id);
  if (!product) notFound();
  return (
    <main className="registry public-registry">
      <header className="public-brand">
        GLOBAL<span>Product information</span>
      </header>
      <article className="public-card">
        {!product.active ? (
          <>
            <span className="eyebrow">PRODUCT RECORD</span>
            <h1>Product unavailable</h1>
            <p>
              This product is no longer active. Contact the supplier for more
              information.
            </p>
            <code>{product.serial}</code>
          </>
        ) : (
          <>
            <span className="eyebrow">{product.category}</span>
            <h1>{product.name}</h1>
            <code>{product.serial}</code>
            {product.images.length > 0 && (
              <div className="public-images">
                {product.images.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${product.name} — image ${i + 1}`}
                  />
                ))}
              </div>
            )}
            <dl className="product-facts">
              {[
                ["Brand", product.brand],
                ["Model", product.model],
                ["SKU", product.sku],
                ["Manufactured", product.manufacturing_date],
              ]
                .filter(([, v]) => v)
                .map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
            </dl>
            <p className="description">{product.description}</p>
            <a
              className="primary"
              href={product.website_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View more details ↗
            </a>
          </>
        )}
      </article>
      <footer className="public-foot">
        Product information supplied by GLOBAL.
      </footer>
    </main>
  );
}

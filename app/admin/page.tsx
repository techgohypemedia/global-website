import CatalogAdmin from "./catalog-admin";
import "./catalog.css";
export const metadata = {
  title: "Product registry | GLOBAL",
  description: "Product and QR code management",
};
export default function AdminPage() {
  return <CatalogAdmin />;
}

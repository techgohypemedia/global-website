"use client";

/* Native images keep authenticated QR endpoints and uploaded image URLs intact. */
/* eslint-disable @next/next/no-img-element */

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import type {
  Category,
  ImportResult,
  Product,
  ProductInput,
} from "@/lib/catalog";
import Papa from "papaparse";

type Section =
  "Dashboard" | "Products" | "Categories" | "QR codes" | "Import / Export";
type Data = {
  products: Product[];
  total: number;
  categories: Category[];
  stats: { products: number; active: number; categories: number };
  imports: { id: string; kind: string; created_at: string }[];
};
const empty: ProductInput = {
  name: "",
  sku: "",
  category_id: "",
  brand: "",
  model: "",
  description: "",
  images: [],
  manufacturing_date: "",
  website_url: "",
};
async function api(action: string, body?: unknown) {
  const response = await fetch(
    `/api/catalog/${action}`,
    body
      ? {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      : { cache: "no-store" },
  );
  const data = await response.json();
  if (!response.ok)
    throw new Error(data.error || "Unable to complete this request.");
  return data;
}
function download(text: string, name: string) {
  const url = URL.createObjectURL(
    new Blob([text], { type: "text/csv;charset=utf-8" }),
  );
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function Mark() {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 11V2h9M18 2h9v9M27 18v9h-9M11 27H2v-9"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M9 9h4v4H9zM17 9h4v4h-4zM9 17h4v4H9zM17 17h4v4h-4z"
        fill="currentColor"
      />
    </svg>
  );
}
function Icon({ name }: { name: Section }) {
  const paths: Record<Section, string> = {
    Dashboard: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
    Products: "m3 7 9-4 9 4v10l-9 4-9-4V7Zm0 0 9 4 9-4M12 11v10",
    Categories: "M3 7V4h7l3 3h8v13H3V7Z",
    "QR codes": "M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM15 15h3v3h3v3h-6z",
    "Import / Export": "M7 3v13m-4-4 4 4 4-4M17 21V8m-4 4 4-4 4 4",
  };
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}

export default function CatalogAdmin() {
  const [session, setSession] = useState<{
    authenticated: boolean;
    configured: boolean;
  } | null>(null);
  const [section, setSection] = useState<Section>("Dashboard");
  const [data, setData] = useState<Data | null>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const [editing, setEditing] = useState<
    (ProductInput & { id?: number }) | null
  >(null);
  const [selected, setSelected] = useState<Product | null>(null);
  const [categoryEdit, setCategoryEdit] = useState<{
    id?: string;
    name: string;
  } | null>(null);
  const [kind, setKind] = useState("products");
  const [csv, setCsv] = useState("");
  const [filename, setFilename] = useState("");
  const [result, setResult] = useState<ImportResult | null>(null);
  const [loading, setLoading] = useState(false);
  const requestVersion = useRef(0);
  const load = useCallback(async () => {
    const version = ++requestVersion.current;
    setLoading(true);
    try {
      const p = new URLSearchParams({
        q: query,
        category,
        status,
        page: String(page),
      });
      const nextData = await api(`data?${p}`);
      if (version === requestVersion.current) setData(nextData);
    } catch (e) {
      if (version === requestVersion.current) {
        setError((e as Error).message);
        if ((e as Error).message === "Please sign in.")
          setSession({ authenticated: false, configured: true });
      }
    } finally {
      if (version === requestVersion.current) setLoading(false);
    }
  }, [query, category, status, page]);
  useEffect(() => {
    api("session")
      .then(setSession)
      .catch((e) => setError(e.message));
  }, []);
  useEffect(() => {
    if (session?.authenticated) {
      const t = setTimeout(load, 180);
      return () => clearTimeout(t);
    }
  }, [session, load]);
  async function action(work: () => Promise<void>) {
    setBusy(true);
    setError("");
    setNotice("");
    try {
      await work();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  function navigate(next: Section) {
    setSection(next);
    setQuery("");
    setCategory("");
    setStatus("");
    setPage(1);
    setError("");
    setNotice("");
  }
  function addProduct() {
    setError("");
    setEditing({
      ...empty,
      images: [],
      category_id: data?.categories[0]?.id || "",
    });
  }
  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    await action(async () => {
      await api("login", Object.fromEntries(form));
      setSession({ authenticated: true, configured: true });
    });
  }
  async function save(event: FormEvent) {
    event.preventDefault();
    await action(async () => {
      await api("product", editing);
      setEditing(null);
      setNotice("Product saved. Its serial number and QR code are ready.");
      await load();
    });
  }
  async function upload(files: FileList | null) {
    if (!files || !editing) return;
    await action(async () => {
      if (files.length + editing.images.length > 8)
        throw new Error("Use up to eight images.");
      const urls: string[] = [];
      for (const file of Array.from(files)) {
        if (file.size > 5 * 1024 * 1024)
          throw new Error("Each image must be smaller than 5 MB.");
        const form = new FormData();
        form.set("file", file);
        const response = await fetch("/api/catalog/upload", {
          method: "POST",
          body: form,
        });
        const body = await response.json();
        if (!response.ok) throw new Error(body.error);
        urls.push(body.url);
      }
      setEditing((prev) =>
        prev ? { ...prev, images: [...prev.images, ...urls] } : null,
      );
    });
  }
  useEffect(() => {
    if (!editing && !selected && !categoryEdit) return;
    function close(e: KeyboardEvent) {
      if (e.key === "Escape" && !busy) {
        setEditing(null);
        setSelected(null);
        setCategoryEdit(null);
      }
    }
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [editing, selected, categoryEdit, busy]);
  const feedback = (
    <>
      {error && (
        <div className="feedback error" role="alert">
          {error}
          <button aria-label="Dismiss error" onClick={() => setError("")}>
            ×
          </button>
        </div>
      )}
      {notice && (
        <div className="feedback success" role="status">
          {notice}
          <button aria-label="Dismiss message" onClick={() => setNotice("")}>
            ×
          </button>
        </div>
      )}
    </>
  );
  if (!session)
    return (
      <main className="registry login-shell">
        <div className="login-card">
          <Mark />
          <h1>Opening product registry…</h1>
          {feedback}
        </div>
      </main>
    );
  if (!session.authenticated)
    return (
      <main className="registry login-shell">
        <div className="login-story">
          <div className="wordmark">
            <Mark /> GLOBAL<span>REGISTRY</span>
          </div>
          <div>
            <span className="eyebrow">PRODUCTS, CONNECTED.</span>
            <h1>
              Every product.
              <br />
              One permanent link.
            </h1>
            <p>
              Manage your catalog, create product labels, and keep every scan up
              to date.
            </p>
          </div>
          <span className="login-foot">Product QR Code Management System</span>
        </div>
        <form className="login-card" onSubmit={signIn}>
          <span className="eyebrow">ADMIN ACCESS</span>
          <h2>
            {session.configured ? "Welcome back" : "Set up your registry"}
          </h2>
          <p>
            {session.configured
              ? "Sign in to manage products and QR codes."
              : "Create your first administrator account to get started."}
          </p>
          {feedback}
          {!session.configured && (
            <label>
              Setup token
              <input
                name="setupToken"
                type="password"
                required
                autoComplete="off"
              />
              <small>Use ADMIN_SETUP_TOKEN from your .env.local file.</small>
            </label>
          )}
          <label>
            Email address
            <input
              name="email"
              type="email"
              required
              autoComplete="username"
              placeholder="you@company.com"
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              minLength={session.configured ? 1 : 12}
              maxLength={256}
              required
              autoComplete={
                session.configured ? "current-password" : "new-password"
              }
            />
            {!session.configured && <small>Use at least 12 characters.</small>}
          </label>
          <button className="primary" disabled={busy}>
            {busy
              ? "Please wait…"
              : session.configured
                ? "Sign in →"
                : "Create admin account →"}
          </button>
        </form>
      </main>
    );
  const nav: Section[] = [
    "Dashboard",
    "Products",
    "Categories",
    "QR codes",
    "Import / Export",
  ];
  const subtitles: Record<Section, string> = {
    Dashboard: "A clear view of your product registry.",
    Products: "Manage the information behind every scan.",
    Categories: "Keep your product catalog organized.",
    "QR codes": "Permanent links. Ready for your product labels.",
    "Import / Export": "Move your catalog in and out, without duplicates.",
  };
  const productTable = (recent = false) => (
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Serial number</th>
            <th>Category</th>
            <th>Status</th>
            <th>
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {(recent ? data?.products.slice(0, 5) : data?.products)?.map((p) => (
            <tr key={p.id}>
              <td>
                <button className="product-cell" onClick={() => setSelected(p)}>
                  <span className="product-thumb">
                    {p.images[0] ? (
                      <img src={p.images[0]} alt="" />
                    ) : (
                      <Icon name="Products" />
                    )}
                  </span>
                  <span>
                    <strong>{p.name}</strong>
                    <small>
                      {p.sku}
                      {p.brand ? ` · ${p.brand}` : ""}
                    </small>
                  </span>
                </button>
              </td>
              <td>
                <code>{p.serial}</code>
              </td>
              <td>{p.category}</td>
              <td>
                <span className={`status ${p.active ? "" : "inactive"}`}>
                  {p.active ? "Active" : "Inactive"}
                </span>
              </td>
              <td>
                <button className="text-button" onClick={() => setSelected(p)}>
                  View ↗
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!data?.products.length && (
        <div className="empty">
          <Icon name="Products" />
          <h3>
            {query || category || status
              ? "No matching products"
              : "Your first product starts here"}
          </h3>
          <p>
            {query || category || status
              ? "Try another search or clear your filters."
              : "Add a product to create its serial number and QR code automatically."}
          </p>
          {!query && !category && !status && (
            <button className="primary" onClick={addProduct}>
              ＋ Add product
            </button>
          )}
        </div>
      )}
    </div>
  );
  return (
    <div className="registry admin-shell">
      <aside className="sidebar">
        <a className="wordmark" href="/admin">
          <Mark />
          GLOBAL<span>REGISTRY</span>
        </a>
        <div className="workspace-name">
          <span className="workspace-avatar">G</span>
          <div>
            Product management<small>Admin workspace</small>
          </div>
        </div>
        <span className="nav-caption">WORKSPACE</span>
        <nav>
          {nav.map((item) => (
            <button
              key={item}
              className={section === item ? "active" : ""}
              onClick={() => navigate(item)}
            >
              <Icon name={item} />
              {item}
              {item === "Products" && (
                <span className="nav-count">{data?.stats.products || 0}</span>
              )}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="connected">
            <span />
            Registry connected
          </div>
          <a href="/" target="_blank" rel="noreferrer">
            Open main website ↗
          </a>
          <button
            onClick={() =>
              action(async () => {
                await api("logout", {});
                setData(null);
                setSession({ authenticated: false, configured: true });
              })
            }
          >
            Sign out
          </button>
        </div>
      </aside>
      <div className="admin-main">
        <header className="topbar">
          <span>
            Workspace <span className="slash">/</span>{" "}
            <strong>{section}</strong>
          </span>
          <div>
            <span className="admin-badge">ADMIN</span>
            <span className="avatar">A</span>
            <button
              className="text-button mobile-signout"
              disabled={busy}
              onClick={() =>
                action(async () => {
                  await api("logout", {});
                  setData(null);
                  setSession({ authenticated: false, configured: true });
                })
              }
            >
              Sign out
            </button>
          </div>
        </header>
        <main className="admin-content">
          <div className="page-heading">
            <div>
              <span className="eyebrow">PRODUCT REGISTRY</span>
              <h1>{section}</h1>
              <p>{subtitles[section]}</p>
            </div>
            <div className="heading-actions">
              {section === "Categories" ? (
                <button
                  className="primary"
                  onClick={() => setCategoryEdit({ name: "" })}
                >
                  ＋ Add category
                </button>
              ) : (
                <>
                  <button
                    className="secondary"
                    onClick={() => navigate("Import / Export")}
                  >
                    ↥ Import CSV
                  </button>
                  <button className="primary" onClick={addProduct}>
                    ＋ Add product
                  </button>
                </>
              )}
            </div>
          </div>
          {feedback}
          {!data ? (
            <div className="panel empty">Loading your registry…</div>
          ) : (
            <>
              {section === "Dashboard" && (
                <>
                  <div className="stats-grid">
                    {[
                      [
                        "Total products",
                        data.stats.products,
                        "Products in your registry",
                        "Products",
                      ],
                      [
                        "Categories",
                        data.stats.categories,
                        "Organized product groups",
                        "Categories",
                      ],
                      [
                        "QR codes",
                        data.stats.products,
                        "One permanent link per product",
                        "QR codes",
                      ],
                      [
                        "Active products",
                        data.stats.active,
                        "Available to customers",
                        "Products",
                      ],
                    ].map(([label, value, caption, icon]) => (
                      <div className="stat-card" key={label}>
                        <div>
                          <span>{label}</span>
                          <Icon name={icon as Section} />
                        </div>
                        <strong>{value}</strong>
                        <small>{caption}</small>
                      </div>
                    ))}
                  </div>
                  <div className="dashboard-grid">
                    <section className="panel recent-panel">
                      <div className="panel-heading">
                        <div>
                          <h2>Recently added products</h2>
                          <p>The latest additions to your catalog</p>
                        </div>
                        <button
                          className="text-button"
                          onClick={() => navigate("Products")}
                        >
                          View all →
                        </button>
                      </div>
                      {productTable(true)}
                    </section>
                    <aside className="label-panel">
                      <span className="eyebrow">FROM RECORD TO REAL WORLD</span>
                      <h2>
                        Ready for
                        <br />
                        the next scan.
                      </h2>
                      <p>
                        Every product gets a unique serial number and a QR code
                        that stays with it.
                      </p>
                      <div className="sample-label">
                        <div className="label-top">
                          <strong>GLOBAL</strong>
                          <span>PRODUCT LABEL</span>
                        </div>
                        {data.products[0] ? (
                          <>
                            <img
                              src={`/api/catalog/qr/${data.products[0].public_id}`}
                              alt="QR code for the latest product"
                            />
                            <strong>{data.products[0].name}</strong>
                            <code>{data.products[0].serial}</code>
                          </>
                        ) : (
                          <>
                            <div className="empty-label">
                              <Mark />
                            </div>
                            <strong>Your product name</strong>
                            <span>Serial assigned on creation</span>
                          </>
                        )}
                        <div className="label-bottom">
                          SCAN FOR PRODUCT INFORMATION ↗
                        </div>
                      </div>
                      <button
                        className="label-action"
                        onClick={() =>
                          data.products[0]
                            ? setSelected(data.products[0])
                            : addProduct()
                        }
                      >
                        {data.products[0]
                          ? "View product label"
                          : "Create your first label"}{" "}
                        →
                      </button>
                    </aside>
                  </div>
                  <div className="workflow-strip">
                    <strong>Simple by design.</strong>
                    <span>01 &nbsp; Add a product</span>
                    <span>→</span>
                    <span>02 &nbsp; Print its QR code</span>
                    <span>→</span>
                    <span>03 &nbsp; Customers scan</span>
                  </div>
                </>
              )}
              {(section === "Products" || section === "QR codes") && (
                <section className="panel">
                  <div className="filter-bar">
                    <input
                      aria-label="Search products"
                      placeholder="Search name, SKU, brand, or serial…"
                      value={query}
                      onChange={(e) => {
                        setQuery(e.target.value);
                        setPage(1);
                      }}
                    />
                    <select
                      aria-label="Filter by category"
                      value={category}
                      onChange={(e) => {
                        setCategory(e.target.value);
                        setPage(1);
                      }}
                    >
                      <option value="">All categories</option>
                      {data.categories.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                    <select
                      aria-label="Filter by status"
                      value={status}
                      onChange={(e) => {
                        setStatus(e.target.value);
                        setPage(1);
                      }}
                    >
                      <option value="">All statuses</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                    <span>
                      {loading ? "Updating…" : `${data.total} products`}
                    </span>
                  </div>
                  {section === "Products" ? (
                    productTable()
                  ) : (
                    <div className="qr-grid">
                      {data.products.map((p) => (
                        <article className="qr-card" key={p.id}>
                          <span
                            className={`status ${p.active ? "" : "inactive"}`}
                          >
                            {p.active ? "Active" : "Inactive"}
                          </span>
                          <img
                            src={`/api/catalog/qr/${p.public_id}`}
                            alt={`QR code for ${p.name}`}
                          />
                          <h3>{p.name}</h3>
                          <code>{p.serial}</code>
                          <div>
                            <a
                              className="secondary"
                              href={`/api/catalog/qr/${p.public_id}?download=1`}
                            >
                              Download
                            </a>
                            <button
                              className="text-button"
                              onClick={() => setSelected(p)}
                            >
                              View / print
                            </button>
                          </div>
                        </article>
                      ))}
                      {!data.products.length && (
                        <div className="empty">
                          <h3>No QR codes to show</h3>
                          <p>Add a product or adjust your filters.</p>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="pagination">
                    <span>
                      Page {page} of {Math.max(1, Math.ceil(data.total / 20))}
                    </span>
                    <div>
                      <button
                        className="secondary"
                        disabled={page === 1 || loading}
                        onClick={() => setPage((p) => p - 1)}
                      >
                        ← Previous
                      </button>
                      <button
                        className="secondary"
                        disabled={page * 20 >= data.total || loading}
                        onClick={() => setPage((p) => p + 1)}
                      >
                        Next →
                      </button>
                    </div>
                  </div>
                </section>
              )}
              {section === "Categories" && (
                <section className="panel">
                  <div className="filter-bar">
                    <input
                      aria-label="Search categories"
                      placeholder="Search categories…"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <span>{data.categories.length} categories</span>
                    <a
                      download
                      className="secondary"
                      href="/api/catalog/export?kind=categories"
                    >
                      Export CSV ↧
                    </a>
                  </div>
                  <div className="table-scroll">
                    <table>
                      <thead>
                        <tr>
                          <th>Category name</th>
                          <th>Products</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.categories
                          .filter((c) =>
                            c.name.toLowerCase().includes(query.toLowerCase()),
                          )
                          .map((c) => (
                            <tr key={c.id}>
                              <td>
                                <strong>{c.name}</strong>
                              </td>
                              <td>{c.count}</td>
                              <td>
                                <button
                                  className="text-button"
                                  onClick={() => setCategoryEdit(c)}
                                >
                                  Edit
                                </button>
                                <button
                                  className="text-button danger"
                                  disabled={busy || c.count > 0}
                                  title={
                                    c.count
                                      ? "Reassign products before deletion"
                                      : undefined
                                  }
                                  onClick={() => {
                                    if (
                                      window.confirm(
                                        `Delete category “${c.name}”?`,
                                      )
                                    )
                                      action(async () => {
                                        await api("delete-category", {
                                          id: c.id,
                                        });
                                        await load();
                                        setNotice("Category deleted.");
                                      });
                                  }}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    {!data.categories.length && (
                      <div className="empty">
                        <h3>Give your catalog a little structure</h3>
                        <p>
                          Create your first category, or import categories from
                          a CSV.
                        </p>
                        <button
                          className="primary"
                          onClick={() => setCategoryEdit({ name: "" })}
                        >
                          ＋ Add category
                        </button>
                      </div>
                    )}
                  </div>
                </section>
              )}
              {section === "Import / Export" && (
                <>
                  <div className="import-layout">
                    <section className="panel import-panel">
                      <span className="eyebrow">BULK IMPORT</span>
                      <h2>Add your catalog in one go</h2>
                      <p>
                        Preview your file first. Existing records are skipped
                        automatically.
                      </p>
                      <label>
                        What are you importing?
                        <select
                          value={kind}
                          onChange={(e) => {
                            setKind(e.target.value);
                            setCsv("");
                            setFilename("");
                            setResult(null);
                          }}
                        >
                          <option value="products">Products</option>
                          <option value="categories">Categories</option>
                        </select>
                      </label>
                      <a
                        className="text-button template-link"
                        href={`/api/catalog/template?kind=${kind}`}
                      >
                        ↧ Download {kind} template
                      </a>
                      <label className="upload-zone">
                        <span className="upload-icon">↥</span>
                        <strong>{filename || "Choose a CSV file"}</strong>
                        <span>Up to 5,000 rows · 2 MB maximum</span>
                        <input
                          key={kind}
                          type="file"
                          accept=".csv,text/csv"
                          onChange={(e) =>
                            action(async () => {
                              const file = e.target.files?.[0];
                              if (!file) return;
                              setCsv("");
                              setResult(null);
                              if (file.size > 2 * 1024 * 1024)
                                throw new Error(
                                  "Choose a CSV smaller than 2 MB.",
                                );
                              setFilename(file.name);
                              setCsv(await file.text());
                            })
                          }
                        />
                      </label>
                      <button
                        className="primary"
                        disabled={!csv || busy}
                        onClick={() =>
                          action(async () =>
                            setResult(
                              await api("import", { csv, kind, commit: false }),
                            ),
                          )
                        }
                      >
                        {busy ? "Processing…" : "Validate & preview →"}
                      </button>
                      <p className="field-help">
                        {kind === "products"
                          ? "SKU is the unique identifier. Create or import categories first. This import adds new products; it does not update existing ones."
                          : "Category names are checked without case sensitivity. Existing names are skipped."}
                      </p>
                    </section>
                    <aside className="panel export-panel">
                      <span className="eyebrow">CSV EXPORT</span>
                      <h2>Your data, ready to go</h2>
                      <p>
                        Download the complete registry, including inactive
                        products.
                      </p>
                      <a
                        download
                        className="export-option"
                        href="/api/catalog/export?kind=products"
                      >
                        <Icon name="Products" />
                        <span>
                          <strong>Export products</strong>
                          <small>Product details, serials, and QR links</small>
                        </span>
                        <span>↧</span>
                      </a>
                      <a
                        download
                        className="export-option"
                        href="/api/catalog/export?kind=categories"
                      >
                        <Icon name="Categories" />
                        <span>
                          <strong>Export categories</strong>
                          <small>All category names</small>
                        </span>
                        <span>↧</span>
                      </a>
                      <h3>Recent imports</h3>
                      {data.imports.length ? (
                        data.imports.map((i) => (
                          <button
                            className="history-row"
                            key={i.id}
                            onClick={() =>
                              action(async () =>
                                setResult(await api(`import/${i.id}`)),
                              )
                            }
                          >
                            <span>
                              {i.kind}
                              <small>
                                {new Date(i.created_at).toLocaleString()}
                              </small>
                            </span>
                            <span>View →</span>
                          </button>
                        ))
                      ) : (
                        <p className="field-help">
                          Completed imports will appear here.
                        </p>
                      )}
                    </aside>
                  </div>
                  {result && (
                    <section className="panel results-panel">
                      <div className="panel-heading">
                        <div>
                          <h2>
                            {result.id ? "Import completed" : "Import preview"}
                          </h2>
                          <p>
                            {result.total} rows ·{" "}
                            {result.id
                              ? `${result.created} created`
                              : `${result.rows.filter((r) => r.status === "new").length} ready`}{" "}
                            · {result.duplicates} duplicates · {result.invalid}{" "}
                            invalid
                          </p>
                        </div>
                        <div className="heading-actions">
                          <button
                            className="secondary"
                            onClick={() =>
                              download(
                                Papa.unparse(
                                  result.rows.map((r) => ({
                                    Row: r.row,
                                    Status: r.status,
                                    Reason: r.message,
                                    ...r.data,
                                  })),
                                  { escapeFormulae: true },
                                ),
                                "import-report.csv",
                              )
                            }
                          >
                            Download report
                          </button>
                          {!result.id && (
                            <button
                              className="primary"
                              disabled={
                                busy ||
                                !result.rows.some((r) => r.status === "new")
                              }
                              onClick={() =>
                                action(async () => {
                                  setResult(
                                    await api("import", {
                                      csv,
                                      kind,
                                      commit: true,
                                    }),
                                  );
                                  await load();
                                  setNotice(
                                    "Import completed. Review the results below.",
                                  );
                                })
                              }
                            >
                              Import valid rows
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="table-scroll results-table">
                        <table>
                          <thead>
                            <tr>
                              <th>CSV row</th>
                              <th>Product / category</th>
                              <th>Status</th>
                              <th>Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            {result.rows.map((r) => (
                              <tr key={r.row}>
                                <td>{r.row}</td>
                                <td>
                                  {r.data["Product Name"] ||
                                    r.data["Category Name"] ||
                                    "—"}
                                </td>
                                <td>
                                  <span
                                    className={`status ${r.status === "invalid" ? "invalid" : r.status === "duplicate" ? "inactive" : ""}`}
                                  >
                                    {r.status}
                                  </span>
                                </td>
                                <td>{r.message}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </section>
                  )}
                </>
              )}
            </>
          )}
          <footer className="admin-footer">
            <span>GLOBAL / Product registry</span>
            <span>Built for every product. Ready for every scan.</span>
          </footer>
        </main>
      </div>
      {editing && (
        <dialog
          open
          aria-modal="true"
          className="modal-backdrop"
          aria-labelledby="edit-title"
          onKeyDown={trapFocus}
        >
          <form className="modal product-form" onSubmit={save}>
            <div className="modal-heading">
              <div>
                <span className="eyebrow">PRODUCT INFORMATION</span>
                <h2 id="edit-title">
                  {editing.id ? "Edit product" : "Add product"}
                </h2>
              </div>
              <button
                type="button"
                className="close-button"
                disabled={busy}
                onClick={() => setEditing(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            {feedback}
            <p className="form-note">
              {editing.id
                ? "Your existing serial number and QR code will stay the same."
                : "A serial number and QR code are created automatically when you save."}
            </p>
            <div className="form-grid">
              {(
                [
                  ["name", "Product name", true],
                  ["sku", "SKU / product code", true],
                  ["brand", "Brand", false],
                  ["model", "Model", false],
                ] as const
              ).map(([field, label, required], i) => (
                <label key={field}>
                  {label}
                  {required ? " *" : ""}
                  <input
                    autoFocus={i === 0}
                    required={required}
                    maxLength={field === "sku" ? 120 : 200}
                    value={editing[field]}
                    onChange={(e) =>
                      setEditing({ ...editing, [field]: e.target.value })
                    }
                  />
                </label>
              ))}
              <label>
                Category *
                <select
                  required
                  value={editing.category_id}
                  onChange={(e) =>
                    setEditing({ ...editing, category_id: e.target.value })
                  }
                >
                  <option value="">Choose a category</option>
                  {data?.categories.map((c) => (
                    <option value={c.id} key={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
                {!data?.categories.length && (
                  <small>
                    Create a category in the Categories section first.
                  </small>
                )}
              </label>
              <label>
                Manufacturing date
                <input
                  type="date"
                  value={editing.manufacturing_date}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      manufacturing_date: e.target.value,
                    })
                  }
                />
              </label>
              <label className="full-width">
                Main website product URL *
                <input
                  type="url"
                  placeholder="https://example.com/products/your-product"
                  required
                  value={editing.website_url}
                  onChange={(e) =>
                    setEditing({ ...editing, website_url: e.target.value })
                  }
                />
              </label>
              <label className="full-width">
                Description
                <textarea
                  rows={4}
                  maxLength={10000}
                  value={editing.description}
                  onChange={(e) =>
                    setEditing({ ...editing, description: e.target.value })
                  }
                />
              </label>
              <div className="full-width">
                <label>
                  Product images
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    multiple
                    disabled={busy}
                    onChange={(e) => upload(e.target.files)}
                  />
                  <small>
                    Up to 8 images. PNG, JPEG, or WebP. Maximum 5 MB each.
                  </small>
                </label>
                <div className="image-previews">
                  {editing.images.map((src, i) => (
                    <div key={src}>
                      <img src={src} alt={`Product image ${i + 1}`} />
                      <button
                        type="button"
                        aria-label={`Remove image ${i + 1}`}
                        onClick={() =>
                          setEditing({
                            ...editing,
                            images: editing.images.filter((s) => s !== src),
                          })
                        }
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-actions">
              <button
                type="button"
                className="secondary"
                disabled={busy}
                onClick={() => setEditing(null)}
              >
                Cancel
              </button>
              <button
                className="primary"
                disabled={busy || !data?.categories.length}
              >
                {busy ? "Saving…" : "Save product"}
              </button>
            </div>
          </form>
        </dialog>
      )}
      {categoryEdit && (
        <dialog
          open
          aria-modal="true"
          className="modal-backdrop"
          aria-labelledby="category-title"
          onKeyDown={trapFocus}
        >
          <form
            className="modal small-modal"
            onSubmit={(e) => {
              e.preventDefault();
              action(async () => {
                await api("category", categoryEdit);
                setCategoryEdit(null);
                await load();
                setNotice("Category saved.");
              });
            }}
          >
            <div className="modal-heading">
              <h2 id="category-title">
                {categoryEdit.id ? "Edit category" : "Add category"}
              </h2>
              <button
                type="button"
                className="close-button"
                disabled={busy}
                onClick={() => setCategoryEdit(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            {feedback}
            <label>
              Category name
              <input
                autoFocus
                required
                maxLength={120}
                value={categoryEdit.name}
                onChange={(e) =>
                  setCategoryEdit({ ...categoryEdit, name: e.target.value })
                }
              />
            </label>
            <div className="modal-actions">
              <button
                type="button"
                className="secondary"
                disabled={busy}
                onClick={() => setCategoryEdit(null)}
              >
                Cancel
              </button>
              <button className="primary" disabled={busy}>
                Save category
              </button>
            </div>
          </form>
        </dialog>
      )}
      {selected && (
        <dialog
          open
          aria-modal="true"
          className="modal-backdrop"
          aria-labelledby="detail-title"
          onKeyDown={trapFocus}
        >
          <div className="modal detail-modal">
            <div className="modal-heading no-print">
              <div>
                <span className="eyebrow">PRODUCT RECORD</span>
                <h2 id="detail-title">{selected.name}</h2>
              </div>
              <button
                autoFocus
                className="close-button"
                disabled={busy}
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            {feedback}
            <div className="detail-layout">
              <div className="no-print">
                <span className={`status ${selected.active ? "" : "inactive"}`}>
                  {selected.active ? "Active" : "Inactive"}
                </span>
                <dl className="product-facts">
                  {[
                    ["SKU", selected.sku],
                    ["Category", selected.category],
                    ["Brand", selected.brand || "—"],
                    ["Model", selected.model || "—"],
                    ["Manufactured", selected.manufacturing_date || "—"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="description">
                  {selected.description || "No description added."}
                </p>
                <div className="image-previews">
                  {selected.images.map((src) => (
                    <img src={src} key={src} alt={selected.name} />
                  ))}
                </div>
                <a
                  className="text-button"
                  href={`/p/${selected.public_id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open customer page ↗
                </a>
                <br />
                <a
                  className="text-button"
                  href={selected.website_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open main website product page ↗
                </a>
              </div>
              <div>
                <div className="sample-label print-label">
                  <div className="label-top">
                    <strong>GLOBAL</strong>
                    <span>PRODUCT LABEL</span>
                  </div>
                  <img
                    src={`/api/catalog/qr/${selected.public_id}`}
                    alt={`QR code for ${selected.name}`}
                  />
                  <strong>{selected.name}</strong>
                  <code>{selected.serial}</code>
                  <div className="label-bottom">
                    SCAN FOR PRODUCT INFORMATION ↗
                  </div>
                </div>
                <div className="qr-actions no-print">
                  <a
                    className="secondary"
                    href={`/api/catalog/qr/${selected.public_id}?download=1`}
                  >
                    PNG ↧
                  </a>
                  <a
                    className="secondary"
                    href={`/api/catalog/qr/${selected.public_id}?download=1&format=svg`}
                  >
                    SVG ↧
                  </a>
                  <button className="secondary" onClick={() => window.print()}>
                    Print
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-actions no-print">
              <button
                className="text-button danger"
                disabled={busy}
                onClick={() => {
                  if (
                    window.confirm(
                      selected.active
                        ? "Deactivate this product? Its QR page will display “Product unavailable”."
                        : "Reactivate this product?",
                    )
                  )
                    action(async () => {
                      await api("status", {
                        id: selected.id,
                        active: !selected.active,
                      });
                      setSelected({
                        ...selected,
                        active: selected.active ? 0 : 1,
                      });
                      await load();
                    });
                }}
              >
                {selected.active ? "Deactivate product" : "Reactivate product"}
              </button>
              <button
                className="primary"
                onClick={() => {
                  setEditing(selected);
                  setSelected(null);
                }}
              >
                Edit product
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}

function trapFocus(event: React.KeyboardEvent<HTMLDialogElement>) {
  if (event.key !== "Tab") return;
  const elements = Array.from(
    event.currentTarget.querySelectorAll<HTMLElement>(
      "button:not(:disabled),a[href],input:not(:disabled),select:not(:disabled),textarea:not(:disabled)",
    ),
  );
  const first = elements[0],
    last = elements[elements.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last?.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first?.focus();
  }
}

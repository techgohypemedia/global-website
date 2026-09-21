"use client";

/* Native images keep authenticated QR endpoints and uploaded image URLs intact. */
/* eslint-disable @next/next/no-img-element */

import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import type {
  Category,
  ImportResult,
  Product,
  ProductInput,
  RegistryOption,
} from "@/lib/catalog";
import Papa from "papaparse";

type Section =
  | "Dashboard"
  | "Products"
  | "Categories"
  | "Form Options"
  | "QR codes"
  | "Import / Export";

type Data = {
  products: Product[];
  total: number;
  categories: Category[];
  options: RegistryOption[];
  stats: { products: number; active: number; categories: number };
  imports: { id: string; kind: string; created_at: string }[];
};

const emptyProduct: ProductInput = {
  name: "",
  sku: "",
  category_id: "",
  brand: "GLOBAL",
  model: "",
  description: "",
  images: [],
  manufacturing_date: "",
  website_url: "https://global-website.com",
  zone: "",
  division: "",
  station_details: "",
  elb_type: "",
  part_name: "",
  lc_gate_no: "",
  version_no: "",
  machine_no: "",
  pedestal_no: "",
  locking_no: "",
  date_of_supply: "",
  date_of_installation: "",
  date_of_commissioning: "",
  date_of_warranty_expiry: "",
  under_warranty: "Yes",
  comments: "",
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
  const data = await response.json().catch(() => {
    throw new Error(
      "The product registry is temporarily unavailable. Please try again.",
    );
  });
  if (!response.ok)
    throw new Error(data.error || "Unable to complete this request.");
  return data;
}

function download(content: BlobPart, name: string, type = "text/csv;charset=utf-8") {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
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
    "Form Options": "M12 6V4m0 16v-2m8-6h2M2 12h2m13.657-5.657 1.414-1.414M4.929 19.071l1.414-1.414m0-11.314L4.929 4.929m14.142 14.142-1.414-1.414M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
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

  // Dynamic Options Management
  const [optionCategoryFilter, setOptionCategoryFilter] = useState<
    "all" | "zone" | "division" | "elb_type" | "part_name"
  >("all");
  const [optionEdit, setOptionEdit] = useState<{
    id?: string;
    category: "zone" | "division" | "elb_type" | "part_name" | string;
    label: string;
    value?: string;
    parent_value?: string;
    sort_order?: number;
  } | null>(null);

  // Import / Export
  const [kind, setKind] = useState("products");
  const [importFormat, setImportFormat] = useState<"csv" | "xlsx">("xlsx");
  const [csv, setCsv] = useState("");
  const [fileBase64, setFileBase64] = useState("");
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
      ...emptyProduct,
      images: [],
      category_id: data?.categories[0]?.id || "",
      zone: data?.options?.find((o) => o.category === "zone")?.value || "",
    });
  }

  // Precomputed options
  const zoneOptions = useMemo(
    () => (data?.options || []).filter((o) => o.category === "zone"),
    [data?.options],
  );
  const allDivisionOptions = useMemo(
    () => (data?.options || []).filter((o) => o.category === "division"),
    [data?.options],
  );
  const elbTypeOptions = useMemo(
    () => (data?.options || []).filter((o) => o.category === "elb_type"),
    [data?.options],
  );
  const partNameOptions = useMemo(
    () => (data?.options || []).filter((o) => o.category === "part_name"),
    [data?.options],
  );

  // Filter divisions based on currently selected zone in editing form
  const availableDivisions = useMemo(() => {
    if (!editing?.zone) return allDivisionOptions;
    const filtered = allDivisionOptions.filter(
      (d) =>
        !d.parent_value ||
        d.parent_value === editing.zone ||
        editing.zone.includes(d.parent_value) ||
        d.parent_value.includes(editing.zone),
    );
    return filtered.length > 0 ? filtered : allDivisionOptions;
  }, [allDivisionOptions, editing?.zone]);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    action(async () => {
      await api("login", {
        email: form.get("email"),
        password: form.get("password"),
        setupToken: form.get("setupToken"),
      });
      setSession({ authenticated: true, configured: true });
      await load();
    });
  }

  async function uploadImages(files: FileList | null) {
    if (!files?.length || !editing) return;
    action(async () => {
      const uploaded: string[] = [...editing.images];
      for (const file of Array.from(files)) {
        if (uploaded.length >= 8) break;
        const formData = new FormData();
        formData.append("file", file);
        const res = await fetch("/api/catalog/upload", {
          method: "POST",
          body: formData,
        });
        const d = await res.json();
        if (!res.ok) throw new Error(d.error || "Image upload failed.");
        uploaded.push(d.url);
      }
      setEditing({ ...editing, images: uploaded });
      setNotice("Images uploaded.");
    });
  }

  async function saveProductForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!editing) return;
    action(async () => {
      await api("product", editing);
      setEditing(null);
      await load();
      setNotice(editing.id ? "Product updated." : "Product added.");
    });
  }

  const feedback = (
    <>
      {error && (
        <div className="feedback error" role="alert">
          <span>{error}</span>
          <button onClick={() => setError("")} aria-label="Dismiss error">
            ×
          </button>
        </div>
      )}
      {notice && (
        <div className="feedback success" role="status">
          <span>{notice}</span>
          <button onClick={() => setNotice("")} aria-label="Dismiss message">
            ×
          </button>
        </div>
      )}
    </>
  );

  if (!session?.authenticated)
    return (
      <main className="registry login-shell">
        <div className="login-hero">
          <div className="wordmark">
            <img
              className="registry-logo"
              src="/global-logo.png"
              alt="GLOBAL"
              width={160}
              height={36}
            />
          </div>
          <div>
            <span className="eyebrow">RAILWAY PRODUCT REGISTRY</span>
            <h1>
              Indian Railways ELB.
              <br />
              One Permanent QR Link.
            </h1>
            <p>
              Manage all 19 zones, divisions, electric lifting barrier assets,
              and live scan records.
            </p>
          </div>
          <span className="login-foot">Product QR Code Management System</span>
        </div>
        <form className="login-card" onSubmit={signIn}>
          <span className="eyebrow">ADMIN ACCESS</span>
          <h2>
            {session?.configured ? "Welcome back" : "Set up your registry"}
          </h2>
          <p>
            {session?.configured
              ? "Sign in to manage products and QR codes."
              : "Create your first administrator account to get started."}
          </p>
          {feedback}
          {!session?.configured && (
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
              placeholder="admin@global.com"
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              minLength={session?.configured ? 1 : 12}
              maxLength={256}
              required
              autoComplete={
                session?.configured ? "current-password" : "new-password"
              }
            />
            {!session?.configured && <small>Use at least 12 characters.</small>}
          </label>
          <button className="primary" disabled={busy}>
            {busy
              ? "Please wait…"
              : session?.configured
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
    "Form Options",
    "QR codes",
    "Import / Export",
  ];

  const subtitles: Record<Section, string> = {
    Dashboard: "A clear view of your railway equipment registry.",
    Products: "Manage the information behind every ELB unit scan.",
    Categories: "Organize equipment lines and component types.",
    "Form Options":
      "Configure 19 Indian Railway Zones, Divisions, ELB Types, and Part Names.",
    "QR codes": "Permanent links. Ready for your equipment labels.",
    "Import / Export":
      "Move your catalog in and out via Excel (.xlsx) or CSV, without duplicates.",
  };

  const productTable = (recent = false) => (
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            <th>Equipment / Product</th>
            <th>QR Code / Machine No.</th>
            <th>Zonal Railway & Division</th>
            <th>Station & LC Gate</th>
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
                      {p.elb_type || p.category}
                      {p.part_name ? ` · ${p.part_name}` : ""}
                    </small>
                  </span>
                </button>
              </td>
              <td>
                <code>{p.sku}</code>
              </td>
              <td>
                <div>
                  <strong>{p.zone || "—"}</strong>
                  <br />
                  <small style={{ color: "var(--muted)" }}>
                    {p.division ? `Div: ${p.division}` : ""}
                  </small>
                </div>
              </td>
              <td>
                <span>
                  {p.station_details || "—"}
                  {p.lc_gate_no ? ` (Gate ${p.lc_gate_no})` : ""}
                </span>
              </td>
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
              ? "No matching equipment found"
              : "Your first railway equipment entry starts here"}
          </h3>
          <p>
            {query || category || status
              ? "Try another search or clear your filters."
              : "Add a product manually or upload your QR Code File.xlsx in Import / Export."}
          </p>
          {!query && !category && !status && (
            <button className="primary" onClick={addProduct}>
              ＋ Add Equipment Record
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
          <img
            className="registry-logo"
            src="/global-logo.png"
            alt="GLOBAL"
            width={160}
            height={36}
          />
        </a>
        <div className="workspace-name">
          <span className="workspace-avatar">
            <Icon name="Products" />
          </span>
          <div>
            Railway Registry<small>Admin workspace</small>
          </div>
        </div>
        <span className="nav-caption">Workspace</span>
        <nav aria-label="Registry navigation">
          {nav.map((item) => (
            <button
              key={item}
              className={section === item ? "active" : ""}
              aria-current={section === item ? "page" : undefined}
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
            {data ? "Registry connected" : "Connecting to registry"}
          </div>
          <a href="/" target="_blank" rel="noreferrer">
            Open main website ↗
          </a>
          <button
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
      </aside>

      <div className="admin-main">
        <header className="topbar">
          <span>
            Workspace <span className="slash">/</span> <strong>{section}</strong>
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
              ) : section === "Form Options" ? (
                <button
                  className="primary"
                  onClick={() =>
                    setOptionEdit({
                      category:
                        optionCategoryFilter === "all"
                          ? "zone"
                          : optionCategoryFilter,
                      label: "",
                      parent_value: "",
                    })
                  }
                >
                  ＋ Add Option
                </button>
              ) : (
                <>
                  <button
                    className="secondary"
                    onClick={() => navigate("Import / Export")}
                  >
                    ↥ Import Excel / CSV
                  </button>
                  <button className="primary" onClick={addProduct}>
                    ＋ Add Equipment / ELB
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
                        "Total equipment",
                        data.stats.products,
                        "Registered Railway Assets",
                        "Products",
                      ],
                      [
                        "Categories",
                        data.stats.categories,
                        "Organized product groups",
                        "Categories",
                      ],
                      [
                        "Active QR Codes",
                        data.stats.products,
                        "One permanent link per asset",
                        "QR codes",
                      ],
                      [
                        "Indian Railway Zones",
                        zoneOptions.length || 19,
                        "Configured railway zones",
                        "Form Options",
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
                          <h2>Recently added equipment</h2>
                          <p>The latest additions to your registry</p>
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
                      <h2>Product label</h2>
                      <p>
                        {data.products[0]
                          ? "Latest equipment asset"
                          : "No equipment yet"}
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
                            <code>{data.products[0].sku}</code>
                          </>
                        ) : (
                          <>
                            <div className="empty-label">
                              <Mark />
                            </div>
                            <strong>ELB 24V DC - Boom Unit</strong>
                            <span>QR assigned on creation</span>
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
                          ? "View product record"
                          : "Create your first record"}{" "}
                        →
                      </button>
                      {data.products[0] && (
                        <a
                          className="label-download"
                          href={`/api/catalog/qr/${data.products[0].public_id}?download=1`}
                          download
                        >
                          Download QR PNG
                        </a>
                      )}
                    </aside>
                  </div>
                </>
              )}

              {(section === "Products" || section === "QR codes") && (
                <section className="panel">
                  <div className="filter-bar">
                    <input
                      aria-label="Search products"
                      placeholder="Search Zone, Division, Station, ELB Type, Gate No, Machine No, SKU…"
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
                      {loading ? "Updating…" : `${data.total} records`}
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
                          <code>{p.sku}</code>
                          <small style={{ color: "var(--muted)", margin: "4px 0" }}>
                            {p.zone} {p.division ? `(${p.division})` : ""}
                          </small>
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
                          <p>Add equipment or adjust your filters.</p>
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
                      href="/api/catalog/export?kind=categories&format=csv"
                    >
                      Export CSV ↧
                    </a>
                  </div>
                  <div className="table-scroll">
                    <table>
                      <thead>
                        <tr>
                          <th>Category name</th>
                          <th>Equipment count</th>
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
                  </div>
                </section>
              )}

              {section === "Form Options" && (
                <section className="panel">
                  <div className="filter-bar">
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      {[
                        ["all", "All Options"],
                        ["zone", "19 Railway Zones"],
                        ["division", "Divisions"],
                        ["elb_type", "Types of ELB"],
                        ["part_name", "Part Names"],
                      ].map(([k, label]) => (
                        <button
                          key={k}
                          className={optionCategoryFilter === k ? "primary" : "secondary"}
                          onClick={() => setOptionCategoryFilter(k as any)}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                    <span style={{ marginLeft: "auto" }}>
                      {data.options.length} dynamic options
                    </span>
                  </div>
                  <div className="table-scroll">
                    <table>
                      <thead>
                        <tr>
                          <th>Category</th>
                          <th>Option Label / Value</th>
                          <th>Parent Zone (if division)</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.options
                          .filter(
                            (o) =>
                              optionCategoryFilter === "all" ||
                              o.category === optionCategoryFilter,
                          )
                          .map((opt) => (
                            <tr key={opt.id}>
                              <td>
                                <span className="status">
                                  {opt.category === "zone"
                                    ? "Zonal Railway"
                                    : opt.category === "division"
                                      ? "Division"
                                      : opt.category === "elb_type"
                                        ? "Type of ELB"
                                        : opt.category === "part_name"
                                          ? "Part Name"
                                          : opt.category}
                                </span>
                              </td>
                              <td>
                                <strong>{opt.label}</strong>
                              </td>
                              <td>{opt.parent_value || "—"}</td>
                              <td>
                                <button
                                  className="text-button"
                                  onClick={() => setOptionEdit(opt)}
                                >
                                  Edit
                                </button>
                                <button
                                  className="text-button danger"
                                  disabled={busy}
                                  onClick={() => {
                                    if (
                                      window.confirm(
                                        `Delete option “${opt.label}”?`,
                                      )
                                    )
                                      action(async () => {
                                        await api("delete-option", {
                                          id: opt.id,
                                        });
                                        await load();
                                        setNotice("Option deleted.");
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
                  </div>
                </section>
              )}

              {section === "Import / Export" && (
                <>
                  <div className="import-layout">
                    <section className="panel import-panel">
                      <span className="eyebrow">BULK IMPORT</span>
                      <h2>Upload QR Code File (.xlsx or .csv)</h2>
                      <p>
                        Upload your Master Sheet Excel (.xlsx) or CSV file. All
                        19 Railway Zone & Division fields will be mapped and
                        validated automatically.
                      </p>

                      <div style={{ display: "flex", gap: "10px", margin: "14px 0" }}>
                        <a
                          className="secondary"
                          href="/api/catalog/template?kind=products&format=xlsx"
                          download="QR-Code-Template.xlsx"
                        >
                          ↧ Download Excel Template (.xlsx)
                        </a>
                        <a
                          className="secondary"
                          href="/api/catalog/template?kind=products&format=csv"
                          download="QR-Code-Template.csv"
                        >
                          ↧ Download CSV Template
                        </a>
                      </div>

                      <label className="upload-zone">
                        <span className="upload-icon">↥</span>
                        <strong>
                          {filename || "Choose Excel (.xlsx) or CSV file"}
                        </strong>
                        <span>
                          Supports QR Code File.xlsx or CSV · Up to 5,000 rows
                        </span>
                        <input
                          key={kind}
                          type="file"
                          accept=".xlsx,.xls,.csv,text/csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                          onChange={(e) =>
                            action(async () => {
                              const file = e.target.files?.[0];
                              if (!file) return;
                              setCsv("");
                              setFileBase64("");
                              setResult(null);
                              setFilename(file.name);

                              const isXlsx =
                                file.name.endsWith(".xlsx") ||
                                file.name.endsWith(".xls");
                              setImportFormat(isXlsx ? "xlsx" : "csv");

                              if (isXlsx) {
                                const buffer = await file.arrayBuffer();
                                const bytes = new Uint8Array(buffer);
                                let binary = "";
                                for (let i = 0; i < bytes.byteLength; i++) {
                                  binary += String.fromCharCode(bytes[i]);
                                }
                                const base64 = btoa(binary);
                                setFileBase64(base64);
                              } else {
                                const text = await file.text();
                                setCsv(text);
                              }
                            })
                          }
                        />
                      </label>

                      <button
                        className="primary"
                        disabled={(!csv && !fileBase64) || busy}
                        onClick={() =>
                          action(async () =>
                            setResult(
                              await api("import", {
                                csv,
                                fileBase64,
                                isBinary: Boolean(fileBase64),
                                kind,
                                commit: false,
                              }),
                            ),
                          )
                        }
                      >
                        {busy ? "Processing file…" : "Validate & Preview Rows →"}
                      </button>
                    </section>

                    <aside className="panel export-panel">
                      <span className="eyebrow">EXPORT DATA</span>
                      <h2>Your equipment registry, ready to download</h2>
                      <p>
                        Download the complete registry with all Railway ELB
                        columns and public QR links.
                      </p>

                      <a
                        download="Railway-Equipment-Export.xlsx"
                        className="export-option"
                        href="/api/catalog/export?kind=products&format=xlsx"
                      >
                        <Icon name="Products" />
                        <span>
                          <strong>Export Excel (.xlsx)</strong>
                          <small>Master Sheet layout with all 19 zone specs</small>
                        </span>
                        <span>↧</span>
                      </a>

                      <a
                        download="Railway-Equipment-Export.csv"
                        className="export-option"
                        href="/api/catalog/export?kind=products&format=csv"
                      >
                        <Icon name="Products" />
                        <span>
                          <strong>Export CSV</strong>
                          <small>Universal CSV format</small>
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
                            {result.total} rows parsed ·{" "}
                            {result.id
                              ? `${result.created} created`
                              : `${result.rows.filter((r) => r.status === "new").length} ready to import`}{" "}
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
                                      fileBase64,
                                      isBinary: Boolean(fileBase64),
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
                              <th>Row</th>
                              <th>Equipment / QR Number</th>
                              <th>Zonal Railway & Division</th>
                              <th>Station & Gate</th>
                              <th>Status</th>
                              <th>Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            {result.rows.map((r) => (
                              <tr key={r.row}>
                                <td>{r.row}</td>
                                <td>
                                  <strong>
                                    {r.data["Product Name"] ||
                                      r.data["Type of ELB"] ||
                                      r.data["QR Code Number"] ||
                                      "—"}
                                  </strong>
                                  <br />
                                  <code>
                                    {r.data.SKU ||
                                      r.data["QR Code Number"] ||
                                      ""}
                                  </code>
                                </td>
                                <td>
                                  {r.data.Zone || r.data["Zonal Railway"] || "—"}{" "}
                                  {r.data.Division
                                    ? `(${r.data.Division})`
                                    : ""}
                                </td>
                                <td>
                                  {r.data["Station Details"] || "—"}{" "}
                                  {r.data["LC Gate No."]
                                    ? `[Gate ${r.data["LC Gate No."]}]`
                                    : ""}
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
            <span>GLOBAL / Railway Product Registry</span>
            <span>All 19 Indian Railway Zones & Divisions Supported.</span>
          </footer>
        </main>
      </div>

      {/* Product Manual Upload / Add / Edit Modal */}
      {editing && (
        <dialog
          open
          aria-modal="true"
          className="modal-backdrop"
          aria-labelledby="edit-title"
          onKeyDown={trapFocus}
        >
          <form className="modal product-form" onSubmit={saveProductForm}>
            <div className="modal-heading">
              <div>
                <span className="eyebrow">EQUIPMENT INFORMATION</span>
                <h2 id="edit-title">
                  {editing.id ? "Edit Railway Equipment" : "Add Railway Equipment"}
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
                ? "Existing QR code and permanent public scan link will stay unchanged."
                : "A permanent QR code link is generated automatically upon saving."}
            </p>

            <div className="form-grid">
              {/* Railway Zone */}
              <label>
                Zonal Railway *
                <select
                  required
                  value={editing.zone}
                  onChange={(e) => {
                    const newZone = e.target.value;
                    const matchDivs = allDivisionOptions.filter(
                      (d) =>
                        !d.parent_value ||
                        d.parent_value === newZone ||
                        newZone.includes(d.parent_value),
                    );
                    setEditing({
                      ...editing,
                      zone: newZone,
                      division: matchDivs[0]?.value || "",
                    });
                  }}
                >
                  <option value="">Select Indian Railway Zone</option>
                  {zoneOptions.map((z) => (
                    <option key={z.id} value={z.value}>
                      {z.label}
                    </option>
                  ))}
                </select>
              </label>

              {/* Division */}
              <label>
                Division / District *
                <select
                  required
                  value={editing.division}
                  onChange={(e) =>
                    setEditing({ ...editing, division: e.target.value })
                  }
                >
                  <option value="">Select Division</option>
                  {availableDivisions.map((d) => (
                    <option key={d.id} value={d.value}>
                      {d.label} {d.parent_value ? `(${d.parent_value.split(" ")[0]})` : ""}
                    </option>
                  ))}
                </select>
              </label>

              {/* Station Details */}
              <label>
                Station Details
                <input
                  placeholder="e.g. New Delhi Station Yard / Track 2"
                  value={editing.station_details}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      station_details: e.target.value,
                    })
                  }
                />
              </label>

              {/* LC Gate No. */}
              <label>
                LC Gate No.
                <input
                  placeholder="e.g. LC-42 or Special Class"
                  value={editing.lc_gate_no}
                  onChange={(e) =>
                    setEditing({ ...editing, lc_gate_no: e.target.value })
                  }
                />
              </label>

              {/* Type of ELB */}
              <label>
                Type of ELB
                <select
                  value={editing.elb_type}
                  onChange={(e) =>
                    setEditing({ ...editing, elb_type: e.target.value })
                  }
                >
                  <option value="">Select or specify Type of ELB</option>
                  {elbTypeOptions.map((t) => (
                    <option key={t.id} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </label>

              {/* Part Name */}
              <label>
                Part Name
                <select
                  value={editing.part_name}
                  onChange={(e) =>
                    setEditing({ ...editing, part_name: e.target.value })
                  }
                >
                  <option value="">Select or specify Part Name</option>
                  {partNameOptions.map((p) => (
                    <option key={p.id} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </label>

              {/* Machine No. */}
              <label>
                Machine No.
                <input
                  placeholder="e.g. MCH-98124"
                  value={editing.machine_no}
                  onChange={(e) =>
                    setEditing({ ...editing, machine_no: e.target.value })
                  }
                />
              </label>

              {/* Pedestal No. */}
              <label>
                Pedestal No.
                <input
                  placeholder="e.g. PED-08"
                  value={editing.pedestal_no}
                  onChange={(e) =>
                    setEditing({ ...editing, pedestal_no: e.target.value })
                  }
                />
              </label>

              {/* Locking Number */}
              <label>
                Locking Number
                <input
                  placeholder="e.g. LCK-541"
                  value={editing.locking_no}
                  onChange={(e) =>
                    setEditing({ ...editing, locking_no: e.target.value })
                  }
                />
              </label>

              {/* Version No. */}
              <label>
                Version No.
                <input
                  placeholder="e.g. v2.4"
                  value={editing.version_no}
                  onChange={(e) =>
                    setEditing({ ...editing, version_no: e.target.value })
                  }
                />
              </label>

              {/* Date of Supply */}
              <label>
                Date of Supply
                <input
                  type="date"
                  value={editing.date_of_supply}
                  onChange={(e) =>
                    setEditing({ ...editing, date_of_supply: e.target.value })
                  }
                />
              </label>

              {/* Date of Installation */}
              <label>
                Date of Installation
                <input
                  type="date"
                  value={editing.date_of_installation}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      date_of_installation: e.target.value,
                    })
                  }
                />
              </label>

              {/* Date of Commissioning */}
              <label>
                Date of Commissioning
                <input
                  type="date"
                  value={editing.date_of_commissioning}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      date_of_commissioning: e.target.value,
                    })
                  }
                />
              </label>

              {/* Date of Warranty Expiry */}
              <label>
                Date of Warranty Expiry
                <input
                  type="date"
                  value={editing.date_of_warranty_expiry}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      date_of_warranty_expiry: e.target.value,
                    })
                  }
                />
              </label>

              {/* Under Warranty? */}
              <label>
                Under Warranty?
                <select
                  value={editing.under_warranty}
                  onChange={(e) =>
                    setEditing({ ...editing, under_warranty: e.target.value })
                  }
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>

              {/* QR Code Number / SKU */}
              <label>
                QR Code Number / SKU
                <input
                  placeholder="Auto-generated if left blank"
                  value={editing.sku}
                  onChange={(e) =>
                    setEditing({ ...editing, sku: e.target.value })
                  }
                />
              </label>

              {/* Product Name */}
              <label className="full-width">
                Product / Title (Optional)
                <input
                  placeholder="Auto-synthesized from ELB Type & Station if left blank"
                  value={editing.name}
                  onChange={(e) =>
                    setEditing({ ...editing, name: e.target.value })
                  }
                />
              </label>

              {/* Comments / Notes */}
              <label className="full-width">
                Comments / Technical Notes
                <textarea
                  rows={3}
                  placeholder="Comments, inspection remarks, or RDSO compliance details..."
                  value={editing.comments}
                  onChange={(e) =>
                    setEditing({ ...editing, comments: e.target.value })
                  }
                />
              </label>

              {/* Images */}
              <div className="full-width">
                <label>
                  Equipment Images
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    multiple
                    disabled={busy}
                    onChange={(e) => uploadImages(e.target.files)}
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
              <button className="primary" disabled={busy}>
                {busy ? "Saving…" : "Save Equipment Record"}
              </button>
            </div>
          </form>
        </dialog>
      )}

      {/* Category Edit Dialog */}
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

      {/* Option Add/Edit Modal (Zones, Divisions, ELB Types, Parts) */}
      {optionEdit && (
        <dialog
          open
          aria-modal="true"
          className="modal-backdrop"
          aria-labelledby="option-title"
          onKeyDown={trapFocus}
        >
          <form
            className="modal small-modal"
            onSubmit={(e) => {
              e.preventDefault();
              action(async () => {
                await api("save-option", optionEdit);
                setOptionEdit(null);
                await load();
                setNotice("Option saved.");
              });
            }}
          >
            <div className="modal-heading">
              <h2 id="option-title">
                {optionEdit.id ? "Edit Dropdown Option" : "Add Dropdown Option"}
              </h2>
              <button
                type="button"
                className="close-button"
                disabled={busy}
                onClick={() => setOptionEdit(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            {feedback}

            <label>
              Field Category
              <select
                value={optionEdit.category}
                onChange={(e) =>
                  setOptionEdit({ ...optionEdit, category: e.target.value as any })
                }
              >
                <option value="zone">Zonal Railway (Zone)</option>
                <option value="division">Division / District</option>
                <option value="elb_type">Type of ELB</option>
                <option value="part_name">Part Name</option>
              </select>
            </label>

            <label>
              Option Name / Label *
              <input
                autoFocus
                required
                placeholder="e.g. North Western Railway (NWR) or Boom Assembly"
                value={optionEdit.label}
                onChange={(e) =>
                  setOptionEdit({ ...optionEdit, label: e.target.value })
                }
              />
            </label>

            {optionEdit.category === "division" && (
              <label>
                Parent Zonal Railway
                <select
                  value={optionEdit.parent_value || ""}
                  onChange={(e) =>
                    setOptionEdit({
                      ...optionEdit,
                      parent_value: e.target.value,
                    })
                  }
                >
                  <option value="">Any / General Division</option>
                  {zoneOptions.map((z) => (
                    <option key={z.id} value={z.value}>
                      {z.label}
                    </option>
                  ))}
                </select>
              </label>
            )}

            <div className="modal-actions">
              <button
                type="button"
                className="secondary"
                disabled={busy}
                onClick={() => setOptionEdit(null)}
              >
                Cancel
              </button>
              <button className="primary" disabled={busy}>
                Save Option
              </button>
            </div>
          </form>
        </dialog>
      )}

      {/* Product Detail Modal */}
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
                <span className="eyebrow">EQUIPMENT RECORD</span>
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
                    ["QR / SKU", selected.sku],
                    ["Zonal Railway", selected.zone || "—"],
                    ["Division", selected.division || "—"],
                    ["Station Details", selected.station_details || "—"],
                    ["LC Gate No.", selected.lc_gate_no || "—"],
                    ["Type of ELB", selected.elb_type || "—"],
                    ["Part Name", selected.part_name || "—"],
                    ["Machine No.", selected.machine_no || "—"],
                    ["Pedestal No.", selected.pedestal_no || "—"],
                    ["Locking No.", selected.locking_no || "—"],
                    ["Version", selected.version_no || "—"],
                    ["Date of Supply", selected.date_of_supply || "—"],
                    ["Installation Date", selected.date_of_installation || "—"],
                    ["Commissioning Date", selected.date_of_commissioning || "—"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                {selected.comments && (
                  <p className="description">
                    <strong>Comments:</strong> {selected.comments}
                  </p>
                )}
                <div className="image-previews">
                  {selected.images.map((src) => (
                    <img src={src} key={src} alt={selected.name} />
                  ))}
                </div>
                <div style={{ marginTop: "16px" }}>
                  <a
                    className="text-button"
                    href={`/p/${selected.public_id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Public QR Scan Page ↗
                  </a>
                </div>
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
                  <code>{selected.sku}</code>
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
                        ? "Deactivate this equipment? Its QR page will display “Product unavailable”."
                        : "Reactivate this equipment?",
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
                {selected.active ? "Deactivate record" : "Reactivate record"}
              </button>
              <button
                className="primary"
                onClick={() => {
                  setEditing(selected);
                  setSelected(null);
                }}
              >
                Edit Equipment
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

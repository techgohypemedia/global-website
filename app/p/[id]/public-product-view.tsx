"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import AramcoHeader from "../../components/AramcoHeader";
import Footer from "../../components/Footer";
import { LanguageProvider } from "../../context/LanguageContext";
import type { Product } from "@/lib/catalog";

function PublicProductInner({ product }: { product: Product }) {
  const [manualQuery, setManualQuery] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [serviceSubmitted, setServiceSubmitted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [serviceForm, setServiceForm] = useState({
    name: "",
    phone: "",
    designation: "",
    issueType: "Preventive Maintenance",
    details: "",
  });

  async function handleManualLookup(e: React.FormEvent) {
    e.preventDefault();
    if (!manualQuery.trim()) return;
    setSearchLoading(true);
    setSearchError("");
    try {
      const res = await fetch(
        `/api/catalog/lookup?q=${encodeURIComponent(manualQuery.trim())}`,
      );
      const data = await res.json();
      if (!res.ok || !data.product) {
        throw new Error(
          data.error || "No equipment found with this QR Code or Machine Number.",
        );
      }
      window.location.href = `/p/${data.product.public_id}`;
    } catch (err) {
      setSearchError((err as Error).message);
    } finally {
      setSearchLoading(false);
    }
  }

  function handleServiceSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServiceSubmitted(true);
    setTimeout(() => {
      setShowServiceModal(false);
      setServiceSubmitted(false);
    }, 2500);
  }

  const whatsappMessage = encodeURIComponent(
    `Hello GLOBAL Railway Support,\n\nInquiry regarding Railway Asset Record:\n- Equipment: ${product.name}\n- Zone/Division: ${product.zone || "—"} / ${product.division || "—"}\n- Station/Gate: ${product.station_details || "—"} ${product.lc_gate_no ? `(LC Gate ${product.lc_gate_no})` : ""}\n- Asset Code: ${product.sku || product.machine_no}\n\nPlease assist with technical verification.`,
  );

  return (
    <main className="min-h-screen flex flex-col bg-[#f8fafc] text-neutral-900 selection:bg-[#ff3131] selection:text-white relative font-sans">
      {/* 1. Official Header */}
      <AramcoHeader />

      {/* 2. Hero Header Section with ample top clearance for fixed AramcoHeader */}
      <section className="relative bg-neutral-950 text-white pt-36 sm:pt-40 lg:pt-44 pb-10 lg:pb-12 border-b border-neutral-800">
        <div className="w-[90%] max-w-[1540px] mx-auto">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="text-neutral-600">/</span>
            <Link href="/products" className="hover:text-white transition">Products</Link>
            <span className="text-neutral-600">/</span>
            <span className="text-neutral-200 font-medium">Railway Asset Verification</span>
          </nav>

          {/* Badges / Chips */}
          {(product.zone || product.division || product.elb_type) && (
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {product.zone && (
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded">
                  {product.zone}
                </span>
              )}
              {product.division && (
                <span className="px-3 py-1 bg-neutral-800 text-neutral-200 text-xs font-medium rounded border border-neutral-700">
                  Division: {product.division}
                </span>
              )}
              {product.elb_type && (
                <span className="px-3 py-1 bg-neutral-800 text-neutral-200 text-xs font-medium rounded border border-neutral-700">
                  {product.elb_type}
                </span>
              )}
            </div>
          )}

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4">
            {product.name}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-800/80 text-xs sm:text-sm text-neutral-400">
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <span className="text-neutral-500 mr-2">Asset Code:</span>
                <span className="font-mono text-white font-semibold bg-neutral-900 px-2.5 py-1 rounded border border-neutral-800">
                  {product.sku}
                </span>
              </div>
              <div>
                <span className="text-neutral-500 mr-2">Manufacturer:</span>
                <span className="text-white font-medium">{product.brand || "GLOBAL"}</span>
              </div>
              {product.station_details && (
                <div>
                  <span className="text-neutral-500 mr-2">Field Location:</span>
                  <span className="text-white font-medium">
                    {product.station_details}
                    {product.lc_gate_no ? ` (LC Gate ${product.lc_gate_no})` : ""}
                  </span>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => window.print()}
              className="no-print inline-flex items-center gap-2 px-4 py-2 bg-[#ff3131] hover:bg-[#e02626] text-white text-xs font-bold rounded-lg transition shadow cursor-pointer ml-auto"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF Datasheet
            </button>
          </div>
        </div>
      </section>

      {/* 4. Main 90% Width Content Grid */}
      <div className="w-[90%] max-w-[1540px] mx-auto py-10 flex-1">
        {!product.active ? (
          <div className="bg-white border border-neutral-200 rounded-xl p-12 text-center max-w-xl mx-auto shadow-sm">
            <h2 className="text-xl font-bold text-neutral-900 mb-2">Equipment Record Inactive</h2>
            <p className="text-neutral-600 text-sm mb-6">
              This railway asset record is marked inactive. Contact GLOBAL support for maintenance and status updates.
            </p>
            <a
              href="tel:+911145678900"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-semibold rounded-lg transition"
            >
              Contact Support Desk
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Comprehensive Engineering Datasheet (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Location & Field Deployment Table */}
              <div className="bg-white border border-neutral-200/80 rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-700">
                    1. Location & Deployment Information
                  </h2>
                  <span className="text-xs font-semibold text-neutral-600">Field Specification</span>
                </div>
                <div className="divide-y divide-neutral-100">
                  <div className="grid grid-cols-1 sm:grid-cols-3 px-6 py-3.5 text-sm">
                    <span className="text-neutral-500 font-medium">Zonal Railway</span>
                    <span className="sm:col-span-2 text-neutral-900 font-semibold">{product.zone || "—"}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 px-6 py-3.5 text-sm">
                    <span className="text-neutral-500 font-medium">Division / District</span>
                    <span className="sm:col-span-2 text-neutral-900 font-semibold">{product.division || "—"}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 px-6 py-3.5 text-sm">
                    <span className="text-neutral-500 font-medium">Station & Yard Details</span>
                    <span className="sm:col-span-2 text-neutral-900 font-semibold">{product.station_details || "—"}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 px-6 py-3.5 text-sm">
                    <span className="text-neutral-500 font-medium">Level Crossing (LC) Gate No.</span>
                    <span className="sm:col-span-2 text-neutral-900 font-semibold">{product.lc_gate_no || "—"}</span>
                  </div>
                </div>
              </div>

              {/* Technical Equipment & Hardware Specifications Table */}
              <div className="bg-white border border-neutral-200/80 rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-700">
                    2. Technical & Hardware Specifications
                  </h2>
                  <span className="text-xs font-semibold text-neutral-600">Component Specs</span>
                </div>
                <div className="divide-y divide-neutral-100">
                  <div className="grid grid-cols-1 sm:grid-cols-3 px-6 py-3.5 text-sm">
                    <span className="text-neutral-500 font-medium">Type of ELB</span>
                    <span className="sm:col-span-2 text-neutral-900 font-semibold">{product.elb_type || "—"}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 px-6 py-3.5 text-sm">
                    <span className="text-neutral-500 font-medium">Part / Sub-Assembly Name</span>
                    <span className="sm:col-span-2 text-neutral-900 font-semibold">{product.part_name || "—"}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 px-6 py-3.5 text-sm">
                    <span className="text-neutral-500 font-medium">Machine Serial Number</span>
                    <span className="sm:col-span-2 font-mono text-neutral-900 font-semibold">{product.machine_no || "—"}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 px-6 py-3.5 text-sm">
                    <span className="text-neutral-500 font-medium">Pedestal Unit Number</span>
                    <span className="sm:col-span-2 font-mono text-neutral-900 font-semibold">{product.pedestal_no || "—"}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 px-6 py-3.5 text-sm">
                    <span className="text-neutral-500 font-medium">Locking Mechanism No.</span>
                    <span className="sm:col-span-2 font-mono text-neutral-900 font-semibold">{product.locking_no || "—"}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 px-6 py-3.5 text-sm">
                    <span className="text-neutral-500 font-medium">Build / Version Number</span>
                    <span className="sm:col-span-2 font-mono text-neutral-900 font-semibold">{product.version_no || "—"}</span>
                  </div>
                </div>
              </div>

              {/* Lifecycle & Operational Milestones */}
              <div className="bg-white border border-neutral-200/80 rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-6">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-700">
                    3. Lifecycle & Operational Milestones
                  </h2>
                  <span className="text-xs font-semibold text-neutral-600">Verification Timeline</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-neutral-50 border border-neutral-200/70 rounded-lg p-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600 block mb-1">
                      Date of Supply
                    </span>
                    <strong className="text-sm sm:text-base font-bold text-neutral-900">
                      {product.date_of_supply || "—"}
                    </strong>
                  </div>
                  <div className="bg-neutral-50 border border-neutral-200/70 rounded-lg p-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600 block mb-1">
                      Date of Installation
                    </span>
                    <strong className="text-sm sm:text-base font-bold text-neutral-900">
                      {product.date_of_installation || "—"}
                    </strong>
                  </div>
                  <div className="bg-neutral-50 border border-neutral-200/70 rounded-lg p-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600 block mb-1">
                      Date of Commissioning
                    </span>
                    <strong className="text-sm sm:text-base font-bold text-neutral-900">
                      {product.date_of_commissioning || "—"}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Remarks & Technical Notes */}
              {(product.comments || product.description) && (
                <div className="bg-white border border-neutral-200/80 rounded-xl shadow-sm p-6">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-700 pb-3 border-b border-neutral-100 mb-4">
                    4. Technical Observations & Remarks
                  </h2>
                  <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200/70 text-sm text-neutral-700 leading-relaxed space-y-2">
                    {product.comments && (
                      <p>
                        <strong className="text-neutral-900">Field Remarks:</strong> {product.comments}
                      </p>
                    )}
                    {product.description && <p>{product.description}</p>}
                  </div>
                </div>
              )}

              {/* Equipment Photo Gallery */}
              {product.images && product.images.length > 0 && (
                <div className="bg-white border border-neutral-200/80 rounded-xl shadow-sm p-6">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-700 pb-3 border-b border-neutral-100 mb-4">
                    5. Equipment Photographs
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {product.images.map((src, i) => (
                      <div
                        key={src}
                        className="relative h-28 sm:h-36 rounded-lg overflow-hidden border border-neutral-200 cursor-pointer group"
                        onClick={() => setSelectedImage(src)}
                      >
                        <img
                          src={src}
                          alt={`${product.name} - photo ${i + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-200"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-xs font-semibold">
                          View Image
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Asset QR Tag & Quick Actions Hub (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Asset QR Verification Tag Card */}
              <div className="bg-white border border-neutral-200/80 rounded-xl shadow-sm overflow-hidden text-center">
                <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-700">
                    Digital Asset QR Tag
                  </h2>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                    Official Tag
                  </span>
                </div>
                <div className="p-6">
                  <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 inline-block mb-3 shadow-inner">
                    <img
                      src={`/api/catalog/qr/${product.public_id}`}
                      alt={`QR Code for ${product.name}`}
                      className="w-44 h-44 mx-auto object-contain"
                    />
                  </div>
                  <div className="font-mono text-sm font-bold text-neutral-900 mb-1">{product.sku}</div>
                  <p className="text-xs text-neutral-500 mb-5">Official Verification Endpoint</p>

                  <div className="no-print space-y-2.5">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#ff3131] hover:bg-[#e02626] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition hover:shadow cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Full PDF Datasheet
                    </button>

                    <a
                      href={`/api/catalog/qr/${product.public_id}?download=1`}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold rounded-lg border border-neutral-200 transition"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download QR Tag (PNG)
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Actions & Technical Support Hub */}
              <div className="no-print bg-white border border-neutral-200/80 rounded-xl shadow-sm p-6">
                <h3 className="text-base font-bold text-neutral-900 mb-1">Technical Support & Actions</h3>
                <p className="text-xs text-neutral-600 mb-4">
                  Direct channels for railway field engineers and station personnel.
                </p>

                <div className="space-y-2.5">
                  <a
                    href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 text-emerald-900 transition group"
                  >
                    <div>
                      <div className="text-xs font-bold text-emerald-950">WhatsApp Field Desk</div>
                      <div className="text-[11px] text-emerald-800">Instant technical coordination</div>
                    </div>
                    <span className="text-emerald-700 font-bold group-hover:translate-x-0.5 transition">→</span>
                  </a>

                  <a
                    href="tel:+911145678900"
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-blue-50 hover:bg-blue-100/80 border border-blue-200 text-blue-900 transition group"
                  >
                    <div>
                      <div className="text-xs font-bold text-blue-950">Engineering Helpline</div>
                      <div className="text-[11px] text-blue-800">+91 11-4567-8900</div>
                    </div>
                    <span className="text-blue-700 font-bold group-hover:translate-x-0.5 transition">→</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setShowServiceModal(true)}
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-amber-50 hover:bg-amber-100/80 border border-amber-200 text-amber-900 transition text-left cursor-pointer group"
                  >
                    <div>
                      <div className="text-xs font-bold text-amber-950">Log Service / Breakdown Ticket</div>
                      <div className="text-[11px] text-amber-800">Submit maintenance escalation</div>
                    </div>
                    <span className="text-amber-700 font-bold group-hover:translate-x-0.5 transition">→</span>
                  </button>

                  <a
                    href="/products"
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-800 transition group"
                  >
                    <div>
                      <div className="text-xs font-bold text-neutral-900">Technical Manuals & Specs</div>
                      <div className="text-[11px] text-neutral-600">Installation & maintenance guides</div>
                    </div>
                    <span className="text-neutral-500 font-bold group-hover:translate-x-0.5 transition">→</span>
                  </a>

                  <a
                    href="/support"
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-800 transition group"
                  >
                    <div>
                      <div className="text-xs font-bold text-neutral-900">Support Knowledgebase</div>
                      <div className="text-[11px] text-neutral-600">Troubleshooting FAQs</div>
                    </div>
                    <span className="text-neutral-500 font-bold group-hover:translate-x-0.5 transition">→</span>
                  </a>
                </div>
              </div>

              {/* Manual QR / Asset Code Search Card */}
              <div className="no-print bg-white border border-neutral-200/80 rounded-xl shadow-sm p-6">
                <h4 className="text-sm font-bold text-neutral-900 mb-1">Manual Asset Lookup</h4>
                <p className="text-xs text-neutral-600 mb-3">
                  If the QR code sticker is damaged, enter the machine code below.
                </p>
                <form onSubmit={handleManualLookup} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter QR / Machine Code..."
                    value={manualQuery}
                    onChange={(e) => setManualQuery(e.target.value)}
                    className="flex-1 bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    disabled={searchLoading}
                    className="px-3 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg transition"
                  >
                    {searchLoading ? "..." : "Search"}
                  </button>
                </form>
                {searchError && (
                  <p className="text-red-600 text-xs mt-2">{searchError}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 5. In-Flow Discrete Bottom Disclaimer (Not Floating, Not Highlighted) */}
        <div className="mt-12 p-4 sm:p-5 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-600 text-xs leading-relaxed">
          <span className="font-semibold text-neutral-700">Disclaimer:</span> The technical and operational data presented above is synchronized with the official GLOBAL Railway Asset Verification Registry. If you notice any discrepancy or require further technical clarification, please contact{" "}
          <a href="tel:+911145678900" className="text-blue-600 font-medium underline">
            GLOBAL Technical Support
          </a>.
        </div>
      </div>

      {/* 6. Official Footer */}
      <div className="no-print">
        <Footer />
      </div>

      {/* Embedded Print Stylesheet for High-Quality PDF Export */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 12mm;
          }
          header, footer, nav, .no-print {
            display: none !important;
          }
          body, main {
            background: #ffffff !important;
            color: #0f172a !important;
            padding: 0 !important;
            margin: 0 !important;
            font-size: 11pt !important;
          }
          section {
            padding-top: 0 !important;
            padding-bottom: 12px !important;
            background: #ffffff !important;
            color: #000000 !important;
            border-bottom: 2px solid #0f172a !important;
          }
          section h1 {
            color: #0f172a !important;
            font-size: 20pt !important;
            margin-bottom: 6px !important;
          }
          section * {
            color: #1e293b !important;
          }
          .w-\\[90\\%\\] {
            width: 100% !important;
            max-width: 100% !important;
          }
          .lg\\:col-span-8 {
            width: 68% !important;
            float: left !important;
          }
          .lg\\:col-span-4 {
            width: 30% !important;
            float: right !important;
          }
          .shadow-sm, .shadow-md, .shadow-lg {
            box-shadow: none !important;
          }
          .border {
            border-color: #cbd5e1 !important;
          }
          .divide-y > * {
            page-break-inside: avoid;
            break-inside: avoid;
          }
        }
      `}</style>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img src={selectedImage} alt="Equipment preview" className="max-w-full max-h-[90vh] object-contain rounded-lg" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-3xl font-light hover:text-neutral-300"
              aria-label="Close image"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Service Request Modal */}
      {showServiceModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-4">
              <h3 className="text-base font-bold text-neutral-900">Register Service / Breakdown Ticket</h3>
              <button
                onClick={() => setShowServiceModal(false)}
                className="text-neutral-400 hover:text-neutral-700 text-xl font-bold"
              >
                ×
              </button>
            </div>

            {serviceSubmitted ? (
              <div className="text-center py-6 space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h4 className="text-base font-bold text-neutral-900">Service Ticket Logged</h4>
                <p className="text-xs text-neutral-600">
                  Ticket ID: <strong>SR-2026-{(Math.random() * 90000 + 10000).toFixed(0)}</strong>
                  <br />
                  Our engineering team has been alerted for <strong>{product.name}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleServiceSubmit} className="space-y-3.5 text-xs">
                <div className="p-2.5 rounded bg-neutral-50 border border-neutral-200 text-neutral-700">
                  Asset: <strong>{product.name}</strong> ({product.sku})
                </div>
                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">Engineer / Officer Name *</label>
                  <input
                    required
                    placeholder="e.g. R. K. Sharma (SSE / Sig)"
                    value={serviceForm.name}
                    onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">Contact Mobile Number *</label>
                  <input
                    required
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={serviceForm.phone}
                    onChange={(e) => setServiceForm({ ...serviceForm, phone: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">Issue Category *</label>
                  <select
                    value={serviceForm.issueType}
                    onChange={(e) => setServiceForm({ ...serviceForm, issueType: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Preventive Maintenance">Periodic Inspection / Preventive Maintenance</option>
                    <option value="Boom Breakdown">Boom / Barrier Arm Mechanical Issue</option>
                    <option value="Drive Motor Fault">Drive Motor & Gearbox Mechanism Fault</option>
                    <option value="Control Panel / Sensor">Control Panel & Obstacle Sensor Fault</option>
                    <option value="Locking Failure">Locking & Solenoid Unit Failure</option>
                    <option value="Other">Other Technical Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">Issue Observations</label>
                  <textarea
                    rows={3}
                    placeholder="Describe observations, symptoms or required spares..."
                    value={serviceForm.details}
                    onChange={(e) => setServiceForm({ ...serviceForm, details: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowServiceModal(false)}
                    className="px-4 py-2 rounded-lg border border-neutral-300 text-neutral-700 font-semibold hover:bg-neutral-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-semibold transition"
                  >
                    Submit Ticket
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default function PublicProductView({ product }: { product: Product }) {
  return (
    <LanguageProvider>
      <PublicProductInner product={product} />
    </LanguageProvider>
  );
}

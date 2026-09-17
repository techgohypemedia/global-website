"use client";

import React, { useState } from "react";
import Link from "next/link";
import AramcoHeader from "./AramcoHeader";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";

export interface SupportSubpageProps {
  slug: string;
  subCategoryTitleEn: string;
  subCategoryTitleHi: string;
  badgeEn: string;
  badgeHi: string;
  heroHeadlineEn: string;
  heroHeadlineHi: string;
  heroSubtitleEn: string;
  heroSubtitleHi: string;
  bannerImage: string;
  secondaryBannerImage: string;
  fieldBannerImage: string;
  stats: { value: string; labelEn: string; labelHi: string; subEn: string; subHi: string }[];
  deepDiveTitleEn: string;
  deepDiveTitleHi: string;
  deepDiveParasEn: string[];
  deepDiveParasHi: string[];
  documents: { code: string; format: string; size: string; category: string; titleEn: string; titleHi: string; descEn: string; descHi: string }[];
  wiringPinouts?: { pin: string; functionEn: string; functionHi: string; rating: string; notes: string }[];
  faqs: { questionEn: string; questionHi: string; answerEn: string; answerHi: string }[];
  relatedSublinks: { titleEn: string; titleHi: string; href: string; tag: string }[];
}

function SupportContent({ data }: { data: SupportSubpageProps }) {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);
  const [selectedPin, setSelectedPin] = useState<number>(0);
  const [zipDownloaded, setZipDownloaded] = useState(false);

  // Filtered documents
  const filteredDocs = data.documents.filter((doc) => {
    const matchesSearch = doc.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) || doc.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === "ALL" || doc.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 font-sans selection:bg-[#dc2626] selection:text-white">
      {/* 1. Global Navigation */}
      <AramcoHeader />

      {/* 
        =======================================================================
        HERO SECTION: TECHNICAL DOCUMENTATION KNOWLEDGE BASE (RED & WHITE THEME)
        =======================================================================
      */}
      <section className="relative w-full pt-28 sm:pt-36 pb-16 sm:pb-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.2] mb-5">
                {lang === "hi" ? data.heroHeadlineHi : data.heroHeadlineEn}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
                {lang === "hi" ? data.heroSubtitleHi : data.heroSubtitleEn}
              </p>

              {/* Live Search Input Bar */}
              <div className="relative max-w-lg mb-6">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={lang === "hi" ? "डेटाशीट, CAD ड्राइंग या कोड खोजें (e.g. DS-RBS, CBCT)..." : "Search datasheets, CAD models, wiring guides (e.g. DS-RBS, CBCT)..."}
                  className="w-full px-4 py-3.5 pl-11 bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 shadow-xs"
                />
                <svg className="w-4 h-4 absolute left-3.5 top-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Quick Jump Filter Chips */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "ALL", label: "All Documents" },
                  { id: "BARRIER", label: "Railway Barrier (DWG/PDF)" },
                  { id: "LEAKAGE", label: "Earth Leakage Specs" },
                  { id: "MANUAL", label: "Installation Guides" }
                ].map((chip) => (
                  <button
                    key={chip.id}
                    onClick={() => setActiveCategory(chip.id)}
                    className={`px-3 py-1.5 text-xs font-semibold border transition-all cursor-pointer ${
                      activeCategory === chip.id
                        ? "bg-red-600 text-white border-red-600 shadow-sm"
                        : "bg-white text-slate-600 border-slate-200 hover:bg-red-50/50 hover:border-red-200"
                    }`}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Hero Image Card (Sharp Rectangular Border, No Curve) */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden bg-white p-2 shadow-sm border border-slate-200">
                <div className="relative h-72 sm:h-88 md:h-96 w-full overflow-hidden bg-slate-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={data.bannerImage}
                    alt={data.subCategoryTitleEn}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 4 Stat Metrics */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {data.stats.map((st, i) => (
              <div key={i} className="p-4 sm:p-5 bg-white border border-slate-200 shadow-sm hover:border-red-300 transition-all group">
                <div className="text-2xl sm:text-3xl font-bold text-red-600 font-mono tracking-tight group-hover:scale-105 transition-transform">
                  {st.value}
                </div>
                <div className="text-xs font-bold text-slate-900 mt-1">
                  {lang === "hi" ? st.labelHi : st.labelEn}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {lang === "hi" ? st.subHi : st.subEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        BANNER 1: TECHNICAL DOCUMENTATION SPOTLIGHT (NO OVERLAY BOX, SHARP IMAGES)
        =======================================================================
      */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 my-12 sm:my-16">
        <div className="bg-white border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                {lang === "hi" 
                  ? `${data.subCategoryTitleHi} - प्रमाणित तकनीकी संदर्भ`
                  : `${data.subCategoryTitleEn} Verified Engineering Library`}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {lang === "hi"
                  ? "प्रोजेक्ट कंसल्टेंट्स और साइट ठेकेदारों के लिए आधिकारिक ब्लूप्रिंट, सीएडी ड्राइंग और इंस्टॉलेशन मैनुअल।"
                  : "Direct access to printable dimensional vectors, terminal pinouts, and field commissioning verification procedures."}
              </p>
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href="#document-vault"
                  className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold tracking-wide transition-all shadow-sm flex items-center space-x-2"
                >
                  <span>{lang === "hi" ? "दस्तावेज़ तालिका देखें" : "View Document Vault"}</span>
                  <span>→</span>
                </a>
                <a
                  href="/contact/engineering-team"
                  className="text-xs font-semibold text-slate-700 hover:text-red-600 transition-colors"
                >
                  {lang === "hi" ? "इंजीनियरिंग टीम से परामर्श" : "Consult Support Engineering"}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="h-56 sm:h-64 w-full overflow-hidden border border-slate-200 shadow-sm bg-slate-50 p-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data.secondaryBannerImage}
                  alt={data.subCategoryTitleEn}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        TECHNICAL DOCUMENTATION & FIELD SCHEMATICS PHOTO GALLERY (SHARP BORDERS)
        =======================================================================
      */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {lang === "hi" ? "फील्ड इंस्टॉलेशन एवं वायरिंग संदर्भ" : "Field Schematics & Physical Layouts"}
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono mt-2 sm:mt-0">
              RDSO & IEC COMPLIANT MANUALS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-200 bg-white p-2 shadow-xs">
              <div className="h-52 w-full overflow-hidden bg-slate-100 border border-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/weatherproof_enclosure.jpg"
                  alt="Enclosure Foundation Layout"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-3">
                <div className="text-[10px] font-mono font-bold text-red-600 uppercase">CIVIL FOUNDATION</div>
                <div className="text-xs font-bold text-slate-900 mt-0.5">Enclosure Plinth Dimensions</div>
                <p className="text-[11px] text-slate-500 mt-1">Foundation bolt pitch specifications and conduit entry schematics for civil contractors.</p>
              </div>
            </div>

            <div className="border border-slate-200 bg-white p-2 shadow-xs">
              <div className="h-52 w-full overflow-hidden bg-slate-100 border border-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/signalling_relay_room.jpg"
                  alt="Relay Interface Wiring"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-3">
                <div className="text-[10px] font-mono font-bold text-red-600 uppercase">WIRING & TELEMETRY</div>
                <div className="text-xs font-bold text-slate-900 mt-0.5">Relay Interlocking Interface</div>
                <p className="text-[11px] text-slate-500 mt-1">Galvanically isolated potential-free contact hookups for electronic interlocking cubicles.</p>
              </div>
            </div>

            <div className="border border-slate-200 bg-white p-2 shadow-xs">
              <div className="h-52 w-full overflow-hidden bg-slate-100 border border-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/eld_engineering_lab.jpg"
                  alt="Calibration & Troubleshooting"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-3">
                <div className="text-[10px] font-mono font-bold text-red-600 uppercase">TEST BENCH</div>
                <div className="text-xs font-bold text-slate-900 mt-0.5">Pre-Commissioning Checklist</div>
                <p className="text-[11px] text-slate-500 mt-1">Step-by-step insulation verification and current transformer ratio setup guide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 2: SEARCHABLE DOCUMENT CARDS REPOSITORY
        =======================================================================
      */}
      <section id="document-vault" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                {lang === "hi" ? "आधिकारिक विनिर्देश एवं गाइड फाइल्स" : "Available Specification & Manual Files"}
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Showing {filteredDocs.length} Document(s)
            </span>
          </div>

          {downloadNotice && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-xs font-medium flex items-center justify-between">
              <span className="font-mono">{downloadNotice}</span>
              <span className="text-[10px] font-mono text-red-600 font-bold">DOWNLOADING</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredDocs.map((doc, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-slate-200 hover:border-red-300 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 bg-red-50 text-red-800 border border-red-200 font-mono text-[10px] font-bold">
                      {doc.code}
                    </span>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-700 font-mono text-[10px] font-bold">
                      {doc.format} • {doc.size}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {lang === "hi" ? doc.titleHi : doc.titleEn}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === "hi" ? doc.descHi : doc.descEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">REV 2026.1</span>
                  <button
                    onClick={() => {
                      setDownloadNotice(`Downloading ${doc.code} (${doc.titleEn})`);
                      setTimeout(() => setDownloadNotice(null), 3000);
                    }}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center space-x-1.5 shadow-sm shadow-red-600/20"
                  >
                    <span>Download</span>
                    <span>↓</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 3: INTERACTIVE TERMINAL WIRING & PINOUT EXPLORER
        =======================================================================
      */}
      {data.wiringPinouts && data.wiringPinouts.length > 0 && (
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                Terminal Strip Pinout & Field Wiring Map
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Terminal Pin Selector */}
              <div className="lg:col-span-5 space-y-2">
                {data.wiringPinouts.map((pin, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPin(idx)}
                    className={`w-full p-3.5 text-left border transition-all cursor-pointer ${
                      selectedPin === idx
                        ? "bg-red-50 border-red-600 shadow-xs text-slate-900"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-red-700">{pin.pin}</span>
                      <span className="text-[10px] font-semibold text-slate-500">{pin.rating}</span>
                    </div>
                    <div className="text-xs font-semibold mt-1 text-slate-900">
                      {lang === "hi" ? pin.functionHi : pin.functionEn}
                    </div>
                  </button>
                ))}
              </div>

              {/* Right Terminal Detail Box */}
              <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 border border-slate-200 shadow-sm text-slate-900">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                  <span className="text-xs font-bold text-red-700 uppercase tracking-wide font-mono">
                    TERMINAL DETAILS: {data.wiringPinouts[selectedPin].pin}
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 bg-red-50 text-red-700 font-semibold border border-red-200">
                    ISOLATED CONTACT
                  </span>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="p-4 bg-white border border-slate-200">
                    <div className="text-slate-500 font-medium mb-1">TERMINAL FUNCTION</div>
                    <div className="text-base font-bold text-slate-900">
                      {lang === "hi" ? data.wiringPinouts[selectedPin].functionHi : data.wiringPinouts[selectedPin].functionEn}
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-200">
                    <div className="text-slate-500 font-medium mb-1">ELECTRICAL RATING & TOLERANCE</div>
                    <div className="text-sm font-bold text-red-700 font-mono">
                      {data.wiringPinouts[selectedPin].rating}
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-200">
                    <div className="text-slate-500 font-medium mb-1">CONTRACTOR FIELD WIRING INSTRUCTIONS</div>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">
                      {data.wiringPinouts[selectedPin].notes}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 
        =======================================================================
        BANNER 2 (FULL-WIDTH): FIELD COMMISSIONING & SITE VERIFICATION
        =======================================================================
      */}
      <section className="relative w-full my-12 sm:my-16 bg-slate-100 border-y border-slate-200 overflow-hidden">
        <div className="relative h-[280px] sm:h-[400px] lg:h-[480px] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.fieldBannerImage}
            alt={lang === "hi" ? `${data.subCategoryTitleHi} फील्ड संदर्भ` : `${data.subCategoryTitleEn} Technical Documentation Deployment`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white border-t border-slate-200 py-3.5 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600 font-mono">
            <div className="flex items-center space-x-2 font-bold text-slate-900">
              <span>{lang === "hi" ? `${data.subCategoryTitleHi} - प्रमाणित साइट मैनुअल` : `${data.subCategoryTitleEn} • Verified Site Manuals`}</span>
            </div>
            <div className="flex items-center space-x-4 text-[11px] text-slate-500">
              <span>RDSO & IEC COMPLIANT</span>
              <span>•</span>
              <span>24/7 TECHNICAL DESK READY</span>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 4: TECHNICAL FAQS ACCORDION
        =======================================================================
      */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              {lang === "hi" ? "साइट स्थापना एवं कमीशनिंग प्रश्नोत्तर" : "Installation & Commissioning Inquiries"}
            </h3>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <div key={i} className="p-5 bg-white border border-slate-200 shadow-xs hover:border-red-200 transition-colors">
                <h4 className="text-sm font-bold text-slate-900 mb-2">
                  Q: {lang === "hi" ? faq.questionHi : faq.questionEn}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A: {lang === "hi" ? faq.answerHi : faq.answerEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 5: BESPOKE CONTRACTOR HOTLINE & ZIP BUNDLE
        =======================================================================
      */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 bg-slate-50 text-slate-900 border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-xs font-bold text-red-700 uppercase tracking-wide font-mono">
                  CONTRACTOR TECHNICAL DESK
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  On-Site Installation Support & Complete ZIP Archive
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Download all combined CAD blueprints, wiring schematics, and commissioning checklists in a single 24.5MB offline package.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      setZipDownloaded(true);
                      setTimeout(() => setZipDownloaded(false), 3500);
                    }}
                    className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-red-600/20 cursor-pointer flex items-center space-x-2"
                  >
                    <span>Download Complete ZIP Archive (24.5 MB)</span>
                    <span className="font-mono">↓</span>
                  </button>
                  <a
                    href="mailto:support@global-safety.com"
                    className="px-5 py-3.5 bg-white hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-semibold transition-all border border-slate-200"
                  >
                    support@global-safety.com
                  </a>
                </div>

                {zipDownloaded && (
                  <div className="mt-3 p-3 bg-red-50 border border-red-200 text-red-800 text-xs font-medium flex items-center space-x-2">
                    <span className="font-bold text-red-700 font-mono">[CONFIRMED]</span>
                    <span>Offline technical documentation bundle download initiated.</span>
                  </div>
                )}
              </div>

              {/* Direct Site Hotline Card */}
              <div className="lg:col-span-5 bg-white p-6 border border-slate-200 shadow-xs text-slate-900">
                <span className="text-[10px] font-bold text-red-700 uppercase font-mono">24/7 SITE HOTLINE</span>
                <h4 className="text-base font-bold text-slate-900 mt-1">Live Engineer Assistance</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Direct phone helpline for contractors standing on active railway crossing sites.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="text-lg font-bold text-red-600 font-mono">+91 11 4988 7700</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Engineering Desk • Extensions 204 / 208</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. Related Sublinks Navigation */}
      {data.relatedSublinks && data.relatedSublinks.length > 0 && (
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              {lang === "hi" ? "संबंधित संसाधन" : "Explore Related Support Modules"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.relatedSublinks.map((sub, i) => (
                <Link
                  key={i}
                  href={sub.href}
                  className="p-4 bg-white hover:bg-red-50/60 border border-slate-200 hover:border-red-300 transition-all flex items-center justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-red-700">{sub.tag}</span>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-red-700">
                      {lang === "hi" ? sub.titleHi : sub.titleEn}
                    </div>
                  </div>
                  <span className="text-slate-400 group-hover:text-red-600 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter and Footer */}
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default function SupportSubpage({ data }: { data: SupportSubpageProps }) {
  return (
    <LanguageProvider>
      <SupportContent data={data} />
    </LanguageProvider>
  );
}

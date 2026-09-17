"use client";

import React, { useState } from "react";
import Link from "next/link";
import AramcoHeader from "./AramcoHeader";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";

export interface ContactSubpageProps {
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
  contactPillars: { icon: string; titleEn: string; titleHi: string; descEn: string; descHi: string }[];
  regionalOffices: { cityEn: string; cityHi: string; roleEn: string; roleHi: string; phone: string; email: string }[];
  relatedSublinks: { titleEn: string; titleHi: string; href: string; tag: string }[];
}

function ContactContent({ data }: { data: ContactSubpageProps }) {
  const { lang } = useLanguage();
  
  // Interactive 3-Step BOQ Estimator State
  const [selectedProduct, setSelectedProduct] = useState<"railway_barrier" | "earth_leakage" | "signalling_access">("railway_barrier");
  const [selectedQuantity, setSelectedQuantity] = useState<number>(4);
  const [includeRadar, setIncludeRadar] = useState<boolean>(true);
  const [includeUPS, setIncludeUPS] = useState<boolean>(true);
  const [includeModbus, setIncludeModbus] = useState<boolean>(true);
  const [boqGenerated, setBoqGenerated] = useState<boolean>(false);
  const [contactEmail, setContactEmail] = useState<string>("");

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 font-sans selection:bg-[#dc2626] selection:text-white">
      {/* 1. Global Navigation */}
      <AramcoHeader />

      {/* 
        =======================================================================
        HERO SECTION: DIRECT TECHNICAL CONSULTATION & TENDER ESTIMATION (RED & WHITE THEME)
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

              {/* Action Toolbar */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#boq-builder"
                  className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md shadow-red-600/20 flex items-center space-x-2"
                >
                  <span>{lang === "hi" ? "इंटरएक्टिव BOQ कोटेशन बनाएं" : "Launch Interactive BOQ Builder"}</span>
                  <span className="text-xs font-mono">→</span>
                </a>
                <a
                  href="#regional-desks"
                  className="px-5 py-3.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm flex items-center space-x-2"
                >
                  <span>{lang === "hi" ? "क्षेत्रीय इंजीनियरिंग डेस्क" : "Regional Engineering Desks"}</span>
                </a>
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
        BANNER 1: TECHNICAL CONSULTATION SPOTLIGHT (NO OVERLAY BOX, SHARP IMAGES)
        =======================================================================
      */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 my-12 sm:my-16">
        <div className="bg-white border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                {lang === "hi" 
                  ? `${data.subCategoryTitleHi} - प्रत्यक्ष तकनीकी सहयोग`
                  : `${data.subCategoryTitleEn} Senior Systems Dialogue`}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {lang === "hi"
                  ? "सर्किट आरेख, टेंडर क्लॉज अनुपालन और साइट अनुकूलन के लिए सीधे वरिष्ठ इंजीनियरों से संपर्क करें।"
                  : "Connect directly with experienced hardware and signaling leads for itemized commercial proposals, compliance packs, and custom OEM adaptations."}
              </p>
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href="#boq-builder"
                  className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold tracking-wide transition-all shadow-sm flex items-center space-x-2"
                >
                  <span>{lang === "hi" ? "BOQ कोटेशन जनरेटर" : "Launch BOQ Estimator"}</span>
                  <span>→</span>
                </a>
                <a
                  href="#regional-desks"
                  className="text-xs font-semibold text-slate-700 hover:text-red-600 transition-colors"
                >
                  {lang === "hi" ? "क्षेत्रीय संपर्क डायरेक्टरी" : "Regional Engineering Desks"}
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
        PROJECT DISPATCH & PROPOSAL ENGINEERING PHOTO GALLERY (SHARP BORDERS)
        =======================================================================
      */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {lang === "hi" ? "पैन-इंडिया प्रत्यक्ष इंजीनियरिंग आपूर्ति" : "Pan-India Production & Crated Dispatch"}
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono mt-2 sm:mt-0">
              DIRECT FACTORY DISPATCH
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-200 bg-white p-2 shadow-xs">
              <div className="h-52 w-full overflow-hidden bg-slate-100 border border-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/boom_barrier_railway.jpg"
                  alt="Automated Barrier Dispatch"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-3">
                <div className="text-[10px] font-mono font-bold text-red-600 uppercase">FACTORY TESTING</div>
                <div className="text-xs font-bold text-slate-900 mt-0.5">Pre-Packaged Barrier Assemblies</div>
                <p className="text-[11px] text-slate-500 mt-1">Pre-wired drive mechanisms calibrated to exact crossing roadway width before shipping.</p>
              </div>
            </div>

            <div className="border border-slate-200 bg-white p-2 shadow-xs">
              <div className="h-52 w-full overflow-hidden bg-slate-100 border border-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/eld_engineering_lab.jpg"
                  alt="ELD Diagnostics Verification"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-3">
                <div className="text-[10px] font-mono font-bold text-red-600 uppercase">CALIBRATION PROTOCOL</div>
                <div className="text-xs font-bold text-slate-900 mt-0.5">Tested Sensor Packs</div>
                <p className="text-[11px] text-slate-500 mt-1">Core CBCT coils and RS-485 modules pre-certified with stamped compliance sheets.</p>
              </div>
            </div>

            <div className="border border-slate-200 bg-white p-2 shadow-xs">
              <div className="h-52 w-full overflow-hidden bg-slate-100 border border-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/crash_barrier_perimeter.jpg"
                  alt="Heavy Duty Assembly"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-3">
                <div className="text-[10px] font-mono font-bold text-red-600 uppercase">HEAVY FABRICATION</div>
                <div className="text-xs font-bold text-slate-900 mt-0.5">Structural Perimeter Gates</div>
                <p className="text-[11px] text-slate-500 mt-1">Industrial welding and zinc-coated steel bodies ready for immediate crated transport.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 2: INTERACTIVE BOQ ESTIMATOR & PROPOSAL BUILDER
        =======================================================================
      */}
      <section id="boq-builder" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {lang === "hi" ? "आधिकारिक बिल ऑफ क्वांटिटीज (BOQ) कोटेशन जनरेटर" : "Itemized Bill of Quantities (BOQ) Commercial Estimator"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Select product configurations, quantities, and safety sensors to compute estimated turnaround and receive official stamped tender proposals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Config Controls */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-slate-200 flex flex-col justify-between shadow-xs">
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-5">
                  1. Select System Architecture & Quantity
                </h3>

                {/* System Selection */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {[
                    { id: "railway_barrier", label: "Railway Barrier System" },
                    { id: "earth_leakage", label: "Digital ELD Relay" },
                    { id: "signalling_access", label: "Signalling Access Gate" }
                  ].map((sys) => (
                    <button
                      key={sys.id}
                      onClick={() => setSelectedProduct(sys.id as any)}
                      className={`p-3 text-xs font-bold border transition-all text-center cursor-pointer ${
                        selectedProduct === sys.id
                          ? "bg-red-600 text-white border-red-600 shadow-sm"
                          : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {sys.label}
                    </button>
                  ))}
                </div>

                {/* Quantity Slider */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-700">Required Quantity (Units / Crossings):</label>
                    <span className="text-sm font-mono font-bold text-red-700 bg-red-50 px-2 py-0.5 border border-red-200">
                      {selectedQuantity} Units
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={20}
                    value={selectedQuantity}
                    onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
                    className="w-full accent-[#dc2626] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>1 Unit (Trial)</span>
                    <span>10 Units (Division Lot)</span>
                    <span>20+ Units (Tender)</span>
                  </div>
                </div>

                {/* Accessory Checkboxes */}
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  2. Add-On Modular Packages
                </h3>
                <div className="space-y-2.5">
                  {[
                    { state: includeRadar, setter: setIncludeRadar, title: "24GHz FMCW Radar Column & Obstacle Sensor", sub: "Prevents boom descent on vehicles" },
                    { state: includeUPS, setter: setIncludeUPS, title: "24V DC Auxiliary Battery Backup Module", sub: "Keeps gate active for 500+ blackout cycles" },
                    { state: includeModbus, setter: setIncludeModbus, title: "RS-485 Modbus-RTU Telemetry Module", sub: "Live SCADA integration & error reporting" }
                  ].map((opt, idx) => (
                    <label
                      key={idx}
                      className={`p-3 border flex items-center justify-between cursor-pointer transition-all ${
                        opt.state ? "bg-red-50/40 border-red-300" : "bg-slate-50 border-slate-200 text-slate-500"
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-slate-900">{opt.title}</div>
                        <div className="text-[10px] text-slate-500">{opt.sub}</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={opt.state}
                        onChange={(e) => opt.setter(e.target.checked)}
                        className="w-4 h-4 accent-[#dc2626]"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Live BOQ Summary Box */}
            <div className="lg:col-span-6 bg-white text-slate-900 p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-5 text-xs">
                  <span className="text-red-700 font-bold uppercase tracking-wide font-mono">Official BOQ Estimation</span>
                  <span className="text-slate-500 font-mono text-[11px]">REF: GL-BOQ-2026-{(selectedQuantity * 347 + 1024).toString(16).toUpperCase()}</span>
                </div>

                <div className="divide-y divide-slate-100 text-xs text-slate-700">
                  <div className="flex justify-between py-2.5">
                    <span className="text-slate-500 font-medium">Base System Family:</span>
                    <span className="text-slate-900 font-bold">{selectedProduct.replace("_", " ").toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-slate-500 font-medium">Configured Quantity:</span>
                    <span className="text-red-700 font-bold">{selectedQuantity} Complete Set(s)</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-slate-500 font-medium">Safety Sensors Included:</span>
                    <span className="text-red-700 font-semibold">
                      {[includeRadar ? "Radar" : "", includeUPS ? "24V UPS" : "", includeModbus ? "Modbus" : ""].filter(Boolean).join(" + ") || "Base Core Only"}
                    </span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-slate-500 font-medium">Estimated Dispatch Lead Time:</span>
                    <span className="text-slate-900 font-semibold">{selectedQuantity <= 5 ? "5 to 7 Business Days" : "10 to 14 Business Days"}</span>
                  </div>
                </div>

                {/* Instant Email for Stamped Proposal */}
                <div className="mt-6 p-4 bg-slate-50 border border-slate-200">
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1.5 font-sans">
                    Email address for official stamped BOQ & compliance certificates:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="tender@corporation.com"
                      className="flex-1 px-3 py-2 bg-white border border-slate-300 text-slate-900 text-xs font-sans focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                    <button
                      onClick={() => {
                        if (contactEmail) {
                          setBoqGenerated(true);
                          setTimeout(() => setBoqGenerated(false), 4000);
                        }
                      }}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold font-sans transition-all cursor-pointer shadow-sm shadow-red-600/20"
                    >
                      {boqGenerated ? "Dispatched" : "Request PDF"}
                    </button>
                  </div>
                  {boqGenerated && (
                    <div className="text-[11px] text-red-700 mt-2 font-sans font-medium">
                      Stamped commercial quotation pack dispatched to {contactEmail}.
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 text-[11px] text-slate-500 flex justify-between mt-4">
                <span>Pan-India Direct Logistics • Pan-India Crated Transport</span>
                <span className="font-semibold text-slate-700">GST / Tender Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        BANNER 2 (FULL-WIDTH): REGIONAL ENGINEERING & FACTORY DISPATCH
        =======================================================================
      */}
      <section className="relative w-full my-12 sm:my-16 bg-slate-100 border-y border-slate-200 overflow-hidden">
        <div className="relative h-[280px] sm:h-[400px] lg:h-[480px] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.fieldBannerImage}
            alt={lang === "hi" ? `${data.subCategoryTitleHi} फील्ड तैनाती` : `${data.subCategoryTitleEn} Pan-India Support & Dispatch`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white border-t border-slate-200 py-3.5 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600 font-mono">
            <div className="font-bold text-slate-900">
              {lang === "hi" ? `${data.subCategoryTitleHi} - समर्पित तकनीकी डेस्क` : `${data.subCategoryTitleEn} • Dedicated Technical Desks`}
            </div>
            <div className="flex items-center space-x-4 text-[11px] text-slate-500">
              <span>NEW DELHI (HQ)</span>
              <span>•</span>
              <span>MUMBAI (INDUSTRIAL)</span>
              <span>•</span>
              <span>BENGALURU (R&D)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 3: REGIONAL SENIOR ENGINEERING DIRECTORY
        =======================================================================
      */}
      <section id="regional-desks" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h3 className="text-2xl font-bold text-slate-900">
              Regional Senior Engineering Desks
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.regionalOffices.map((off, idx) => (
              <div key={idx} className="p-6 bg-slate-50 border border-slate-200 shadow-xs hover:border-red-300 transition-all flex flex-col justify-between group">
                <div>
                  <div className="text-xs font-mono font-bold text-red-700 mb-1">{off.cityEn}</div>
                  <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-red-700 transition-colors">{off.roleEn}</h4>
                  <div className="text-xs text-slate-500 leading-relaxed font-mono">
                    <div>TEL: {off.phone}</div>
                    <div className="text-red-600 mt-1">EMAIL: {off.email}</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span>SLA: &lt; 24 Hours</span>
                  <a href={`mailto:${off.email}`} className="text-red-600 hover:text-red-700">Direct Email →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Related Sublinks Navigation */}
      {data.relatedSublinks && data.relatedSublinks.length > 0 && (
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              Explore Related Portals
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

export default function ContactSubpage({ data }: { data: ContactSubpageProps }) {
  return (
    <LanguageProvider>
      <ContactContent data={data} />
    </LanguageProvider>
  );
}

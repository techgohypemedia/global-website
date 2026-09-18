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
    <main className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#ff3131] selection:text-white relative font-sans">
      {/* 1. Global Navigation Header */}
      <AramcoHeader />

      {/* 
        =======================================================================
        HERO SECTION: MATCHING HOMEPAGE CINEMATIC FULL-BLEED HERO
        =======================================================================
      */}
      <section className="relative min-h-[560px] lg:min-h-[640px] pt-32 sm:pt-40 pb-16 sm:pb-20 overflow-hidden bg-neutral-950 flex flex-col justify-between">
        <div className="absolute inset-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.bannerImage}
            alt={data.subCategoryTitleEn}
            className="w-full h-full object-cover opacity-35 object-center scale-105"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-4">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>{lang === "hi" ? data.badgeHi : data.badgeEn}</span>
              <span className="text-white/40">•</span>
              <span className="text-gray-300">{lang === "hi" ? data.subCategoryTitleHi : data.subCategoryTitleEn}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight mb-5 font-sans">
              {lang === "hi" ? data.heroHeadlineHi : data.heroHeadlineEn}
            </h1>

            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-8 max-w-2xl">
              {lang === "hi" ? data.heroSubtitleHi : data.heroSubtitleEn}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#boq-estimator"
                className="px-7 py-3.5 bg-[#ff3131] hover:bg-[#e02626] text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-lg hover:shadow-[#ff3131]/30 flex items-center space-x-2 group hover:-translate-y-0.5"
              >
                <span>{lang === "hi" ? "त्वरित BOQ अनुमानक चलाएं" : "Launch Fast-Track BOQ Estimator"}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#regional-desks"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white text-white text-xs sm:text-sm font-medium tracking-wide backdrop-blur-sm transition-all flex items-center space-x-2 hover:-translate-y-0.5"
              >
                <span>{lang === "hi" ? "क्षेत्रीय इंजीनियरिंग डेस्क" : "Regional Senior Desks"}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative z-10 w-full border-t border-white/15 bg-black/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.stats.map((st, i) => (
                <div key={i} className="flex flex-col border-l border-white/15 pl-4 sm:pl-6 first:border-l-0">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight font-sans">
                    {st.value}
                  </div>
                  <div className="text-xs font-medium text-gray-300 uppercase tracking-wider mt-1">
                    {lang === "hi" ? st.labelHi : st.labelEn}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    {lang === "hi" ? st.subHi : st.subEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 1: DIRECT CONSULTATION & PILLARS
        =======================================================================
      */}
      <section className="w-full bg-white text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>DIRECT ACCESS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#1e293b] font-sans mb-5">
              {lang === "hi" ? data.deepDiveTitleHi : data.deepDiveTitleEn}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              {lang === "hi"
                ? "सीधे हमारे वरिष्ठ हार्डवेयर और सिग्नलिंग इंजीनियरों से संपर्क करें। बिना किसी सेल्स बैरियर के तकनीकी सहायता।"
                : "Direct access to senior application leads and hardware architects without sales intermediaries."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.contactPillars.map((p, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-[#f8f9fa] border border-gray-200 hover:border-[#ff3131]/60 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="text-2xl mb-4 text-[#ff3131]">{p.icon}</div>
                <h3 className="text-base font-semibold text-[#1e293b] mb-2 font-sans">
                  {lang === "hi" ? p.titleHi : p.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {lang === "hi" ? p.descHi : p.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 2: FAST-TRACK BOQ ESTIMATOR (Workstation Style)
        =======================================================================
      */}
      <section id="boq-estimator" className="w-full bg-[#f8f9fa] text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>{lang === "hi" ? "त्वरित कोटेशन" : "FAST-TRACK ESTIMATION"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#1e293b] font-sans mb-5">
              {lang === "hi" ? "त्वरित BOQ एवं टेंडर अनुमानक" : "Fast-Track BOQ & Tender Pack Estimator"}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Controls */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-gray-200 shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-[#1e293b] uppercase tracking-wider mb-4 font-sans">
                  1. Select System Architecture
                </h3>
                <div className="grid grid-cols-3 gap-2.5 mb-6">
                  {[
                    { id: "railway_barrier", label: "Barrier Systems" },
                    { id: "earth_leakage", label: "Earth Leakage" },
                    { id: "signalling_access", label: "Signalling Hub" }
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedProduct(p.id as any)}
                      className={`p-3 text-center border text-xs font-semibold transition-all cursor-pointer ${
                        selectedProduct === p.id
                          ? "bg-red-50 border-[#ff3131] text-[#ff3131]"
                          : "bg-[#f8f9fa] border-gray-200 text-gray-700 hover:bg-white"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-gray-700">Required Quantity (Units):</label>
                    <span className="text-sm font-semibold text-[#ff3131] bg-red-50 px-2.5 py-0.5 border border-red-200">
                      {selectedQuantity} Unit(s)
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={20}
                    value={selectedQuantity}
                    onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
                    className="w-full accent-[#ff3131] cursor-pointer"
                  />
                </div>

                <h3 className="text-sm font-semibold text-[#1e293b] uppercase tracking-wider mb-3 font-sans">
                  2. Add-On Modular Packages
                </h3>
                <div className="space-y-2.5">
                  {[
                    { state: includeRadar, setter: setIncludeRadar, title: "24GHz FMCW Radar Column Sensor", sub: "Prevents boom descent on vehicles" },
                    { state: includeUPS, setter: setIncludeUPS, title: "24V DC Auxiliary Battery Backup", sub: "Keeps gate active for 500+ blackout cycles" },
                    { state: includeModbus, setter: setIncludeModbus, title: "RS-485 Modbus-RTU Telemetry Module", sub: "Live SCADA integration & error reporting" }
                  ].map((opt, idx) => (
                    <label
                      key={idx}
                      className={`p-3 border flex items-center justify-between cursor-pointer transition-all ${
                        opt.state ? "bg-red-50/50 border-[#ff3131]/60" : "bg-[#f8f9fa] border-gray-200 text-gray-600"
                      }`}
                    >
                      <div>
                        <div className="text-xs font-semibold text-gray-900">{opt.title}</div>
                        <div className="text-[10px] text-gray-500">{opt.sub}</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={opt.state}
                        onChange={(e) => opt.setter(e.target.checked)}
                        className="w-4 h-4 accent-[#ff3131]"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Summary */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-gray-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-5 text-xs">
                  <span className="text-[#ff3131] font-semibold uppercase tracking-wider font-sans">Official BOQ Estimation</span>
                  <span className="text-gray-500 font-mono text-[11px]">REF: GL-BOQ-2026-{(selectedQuantity * 347 + 1024).toString(16).toUpperCase()}</span>
                </div>

                <div className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-700">
                  <div className="flex justify-between py-3">
                    <span className="text-gray-500 font-medium">Base System Family:</span>
                    <span className="text-gray-900 font-semibold">{selectedProduct.replace("_", " ").toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-500 font-medium">Configured Quantity:</span>
                    <span className="text-[#ff3131] font-semibold">{selectedQuantity} Complete Set(s)</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-500 font-medium">Estimated Dispatch Lead Time:</span>
                    <span className="text-gray-900 font-semibold">{selectedQuantity <= 5 ? "5 to 7 Business Days" : "10 to 14 Business Days"}</span>
                  </div>
                </div>

                {/* Instant Email for Stamped Proposal */}
                <div className="mt-6 p-4 bg-[#f8f9fa] border border-gray-200">
                  <label className="block text-xs font-semibold text-gray-700 mb-2 font-sans">
                    Email address for official stamped commercial quotation:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="procurement@railways.gov"
                      className="flex-1 px-3 py-2 bg-white border border-gray-300 text-xs focus:outline-none focus:border-[#ff3131]"
                    />
                    <button
                      onClick={() => {
                        if (contactEmail) {
                          setBoqGenerated(true);
                          setTimeout(() => setBoqGenerated(false), 4000);
                        }
                      }}
                      className="px-4 py-2 bg-[#ff3131] hover:bg-[#e02626] text-white text-xs font-medium transition-all cursor-pointer shadow-sm"
                    >
                      {boqGenerated ? "Dispatched ✓" : "Request PDF"}
                    </button>
                  </div>
                  {boqGenerated && (
                    <div className="text-xs text-emerald-700 mt-2 font-medium">
                      ✓ Stamped commercial quotation pack dispatched to {contactEmail}.
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 text-[11px] text-gray-500 flex justify-between mt-4">
                <span>Pan-India Direct Logistics • Fully Crated Transport</span>
                <span className="font-semibold text-gray-700">GST / Tender Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 3: REGIONAL ENGINEERING DIRECTORY
        =======================================================================
      */}
      <section id="regional-desks" className="w-full bg-white text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-3">
              REGIONAL DIRECTORY
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#1e293b] font-sans">
              Regional Senior Engineering Desks
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.regionalOffices.map((off, idx) => (
              <div key={idx} className="p-6 bg-[#f8f9fa] border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#ff3131]/60 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#ff3131] uppercase mb-1">{off.cityEn}</div>
                  <h4 className="text-base font-semibold text-[#1e293b] mb-2 font-sans">{off.roleEn}</h4>
                  <div className="text-xs text-gray-600 leading-relaxed font-mono">
                    <div>TEL: {off.phone}</div>
                    <div className="text-[#ff3131] mt-1">EMAIL: {off.email}</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-semibold text-gray-700">
                  <span>SLA: &lt; 24 Hours</span>
                  <a href={`mailto:${off.email}`} className="text-[#ff3131] hover:text-[#e02626]">Direct Email →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Modules */}
      {data.relatedSublinks && data.relatedSublinks.length > 0 && (
        <section className="w-full bg-[#f8f9fa] text-gray-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xs font-semibold text-[#ff3131] uppercase tracking-widest mb-6">
              Explore Related Portals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.relatedSublinks.map((sub, i) => (
                <Link
                  key={i}
                  href={sub.href}
                  className="p-6 bg-white hover:bg-red-50/30 border border-gray-200 hover:border-[#ff3131]/60 shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-[#ff3131] uppercase">{sub.tag}</span>
                    <div className="text-sm font-semibold text-[#1e293b] group-hover:text-[#ff3131] mt-1 font-sans">
                      {lang === "hi" ? sub.titleHi : sub.titleEn}
                    </div>
                  </div>
                  <span className="text-gray-400 group-hover:text-[#ff3131] transition-transform group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter and Official Footer */}
      <NewsletterSection />
      <Footer />
    </main>
  );
}

export default function ContactSubpage({ data }: { data: ContactSubpageProps }) {
  return (
    <LanguageProvider>
      <ContactContent data={data} />
    </LanguageProvider>
  );
}

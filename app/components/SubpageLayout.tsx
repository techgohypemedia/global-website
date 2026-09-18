"use client";

import React, { useState } from "react";
import Link from "next/link";
import AramcoHeader from "./AramcoHeader";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";

export interface SpecItem {
  labelEn: string;
  labelHi: string;
  valueEn: string;
  valueHi: string;
}

export interface FeatureItem {
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  icon?: string;
  badgeEn?: string;
  badgeHi?: string;
}

export interface ApplicationItem {
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  tagEn: string;
  tagHi: string;
}

export interface SubpageConfig {
  slug: string;
  categoryEn: string;
  categoryHi: string;
  categoryHref: string;
  titleEn: string;
  titleHi: string;
  subtitleEn: string;
  subtitleHi: string;
  bannerImage: string;
  heroBadgeEn: string;
  heroBadgeHi: string;
  stats: {
    value: string;
    labelEn: string;
    labelHi: string;
  }[];
  overviewTitleEn: string;
  overviewTitleHi: string;
  overviewTextEn: string[];
  overviewTextHi: string[];
  features: FeatureItem[];
  specs?: SpecItem[];
  applications?: ApplicationItem[];
  relatedLinks?: {
    titleEn: string;
    titleHi: string;
    href: string;
    tagEn: string;
    tagHi: string;
  }[];
  complianceStandards?: string[];
  downloadableDocTitleEn?: string;
  downloadableDocTitleHi?: string;
}

function SubpageInner({ config }: { config: SubpageConfig }) {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "applications">("overview");

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
        {/* Full-bleed Background Image with smooth zoom & overlays */}
        <div className="absolute inset-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={config.bannerImage}
            alt={config.titleEn}
            className="w-full h-full object-cover opacity-35 object-center scale-105"
          />
        </div>

        {/* Ambient Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none" />

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
          <div className="max-w-3xl">
            {/* Category Breadcrumb Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-4">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>{lang === "hi" ? config.heroBadgeHi : config.heroBadgeEn}</span>
              <span className="text-white/40">•</span>
              <span className="text-gray-300">{lang === "hi" ? config.categoryHi : config.categoryEn}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight mb-5 font-sans">
              {lang === "hi" ? config.titleHi : config.titleEn}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-8 max-w-2xl">
              {lang === "hi" ? config.subtitleHi : config.subtitleEn}
            </p>

            {/* CTA Toolbar */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#inquiry-form"
                className="px-7 py-3.5 bg-[#ff3131] hover:bg-[#e02626] text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-lg hover:shadow-[#ff3131]/30 flex items-center space-x-2 group hover:-translate-y-0.5"
              >
                <span>{lang === "hi" ? "तकनीकी कोटेशन प्राप्त करें" : "Request Technical Quote"}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/contact/engineering-team"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white text-white text-xs sm:text-sm font-medium tracking-wide backdrop-blur-sm transition-all flex items-center space-x-2 hover:-translate-y-0.5"
              >
                <span>{lang === "hi" ? "इंजीनियरिंग टीम से परामर्श" : "Consult Engineering"}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Key Metrics Strip (matching AtAGlance on homepage) */}
        {config.stats && config.stats.length > 0 && (
          <div className="relative z-10 w-full border-t border-white/15 bg-black/40 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {config.stats.map((st, i) => (
                  <div key={i} className="flex flex-col border-l border-white/15 pl-4 sm:pl-6 first:border-l-0">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight font-sans">
                      {st.value}
                    </div>
                    <div className="text-xs font-medium text-gray-300 uppercase tracking-wider mt-1">
                      {lang === "hi" ? st.labelHi : st.labelEn}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 
        =======================================================================
        SECTION 1: HARDWARE MODULES GALLERY (DiscoverAramco Style)
        =======================================================================
      */}
      <section className="w-full bg-white text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>{lang === "hi" ? "प्रमाणित मॉड्यूल" : "ENGINEERED SUBASSEMBLIES"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#1e293b] font-sans mb-5">
              {lang === "hi" ? "प्रमाणित इंजीनियरिंग घटक एवं मॉड्यूल" : "Engineered Subassemblies & Field Modules"}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              {lang === "hi"
                ? "कठिनतम रेलवे लेवल क्रॉसिंग, सिग्नलिंग नेटवर्क और औद्योगिक पैनलों के लिए समर्पित तकनीकी समाधान।"
                : "Field-proven functional safety architectures engineered to eliminate downtime, protect personnel, and maintain continuous operational uptime."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Heavy-Duty Automated Boom",
                category: "FIELD INTEGRITY",
                image: "/images/boom_barrier_railway.jpg",
                desc: "Direct level crossing automated barrier assembly engineered for 24/7 heavy duty operation."
              },
              {
                title: "Digital Microcontroller Core",
                category: "DIAGNOSTICS & CONTROL",
                image: "/images/eld_engineering_lab.jpg",
                desc: "High-speed DSP digital sampling unit with RS-485 Modbus-RTU telemetry interface."
              },
              {
                title: "IP66 Heavy Steel Chassis",
                category: "INGRESS PROTECTION",
                image: "/images/weatherproof_enclosure.jpg",
                desc: "Weatherproof CRCA steel housing with multi-stage anti-corrosive electrostatic powder coating."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative h-[380px] sm:h-[440px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between p-6 sm:p-7 text-white border border-gray-200 hover:border-[#ff3131]/60 bg-neutral-900"
              >
                <div className="absolute inset-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-400 pointer-events-none" />
                
                <div className="relative z-10">
                  <span className="inline-block text-[11px] font-semibold tracking-widest text-[#ff3131] uppercase bg-black/60 px-2.5 py-1 backdrop-blur-sm border border-white/10">
                    {item.category}
                  </span>
                </div>

                <div className="relative z-10 mt-auto">
                  <h3 className="text-lg sm:text-xl font-medium leading-snug text-white font-sans mb-2 drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed font-light">
                    {item.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[#ff3131]">
                    <span>Specification Verified</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 2: TABBED ARCHITECTURE & CAPABILITIES
        =======================================================================
      */}
      <section className="w-full bg-[#f8f9fa] text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          {/* Section Mode Switcher Tabs */}
          <div className="flex items-center space-x-3 border-b border-gray-200 pb-4 mb-12 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-3 text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap shadow-sm ${
                activeTab === "overview"
                  ? "bg-[#ff3131] text-white"
                  : "bg-white text-gray-700 hover:text-[#ff3131] border border-gray-200"
              }`}
            >
              {lang === "hi" ? "सिस्टम अवलोकन (Overview)" : "System Overview"}
            </button>
            {config.specs && config.specs.length > 0 && (
              <button
                onClick={() => setActiveTab("specs")}
                className={`px-6 py-3 text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap shadow-sm ${
                  activeTab === "specs"
                    ? "bg-[#ff3131] text-white"
                    : "bg-white text-gray-700 hover:text-[#ff3131] border border-gray-200"
                }`}
              >
                {lang === "hi" ? "तकनीकी विनिर्देश (Specifications)" : "Technical Specifications"}
              </button>
            )}
            {config.applications && config.applications.length > 0 && (
              <button
                onClick={() => setActiveTab("applications")}
                className={`px-6 py-3 text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap shadow-sm ${
                  activeTab === "applications"
                    ? "bg-[#ff3131] text-white"
                    : "bg-white text-gray-700 hover:text-[#ff3131] border border-gray-200"
                }`}
              >
                {lang === "hi" ? "फ़ील्ड अनुप्रयोग (Applications)" : "Field Applications"}
              </button>
            )}
          </div>

          {/* TAB 1: OVERVIEW & ARCHITECTURE */}
          {activeTab === "overview" && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-7 space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-normal text-[#1e293b] font-sans">
                    {lang === "hi" ? config.overviewTitleHi : config.overviewTitleEn}
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                    {(lang === "hi" ? config.overviewTextHi : config.overviewTextEn).map((paragraph, idx) => (
                      <p key={idx} className="bg-white p-5 border-l-2 border-[#ff3131] border-gray-200 shadow-sm">{paragraph}</p>
                    ))}
                  </div>

                  {config.complianceStandards && config.complianceStandards.length > 0 && (
                    <div className="pt-6 border-t border-gray-200">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        {lang === "hi" ? "अनुपालन एवं सुरक्षा मानक" : "Compliance & Engineering Standards"}
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {config.complianceStandards.map((std, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white border border-gray-200 text-xs font-semibold text-[#ff3131] shadow-xs"
                          >
                            {std}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Highlights Card */}
                <div className="lg:col-span-5">
                  <div className="bg-white p-8 border border-gray-200 shadow-md">
                    <div className="text-xs font-semibold text-[#ff3131] uppercase tracking-widest mb-2">
                      {lang === "hi" ? "इंजीनियरिंग विश्वसनीयता" : "ENGINEERING HIGHLIGHTS"}
                    </div>
                    <h3 className="text-xl font-normal text-[#1e293b] mb-4 font-sans">
                      {lang === "hi" ? "मिशन-क्रिटिकल संचालन हेतु निर्मित" : "Engineered for Zero Failure Tolerance"}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
                      {lang === "hi"
                        ? "ग्लोबल सिस्टम्स कठोर पर्यावरणीय परीक्षणों, निरंतर परिचालन चक्रों और अंतरराष्ट्रीय सुरक्षा अनुपालन से प्रमाणित हैं।"
                        : "GLOBAL safety hardware undergoes 100% factory stress validation, continuous thermal testing, and conforms to demanding railway & industrial standards."}
                    </p>

                    <div className="space-y-3 mb-6 text-xs sm:text-sm text-gray-700">
                      <div className="flex items-center space-x-2.5">
                        <span className="w-2 h-2 bg-[#ff3131]" />
                        <span>{lang === "hi" ? "कठिन तापमान सहिष्णुता (-20°C to +70°C)" : "Extended temperature range (-20°C to +70°C)"}</span>
                      </div>
                      <div className="flex items-center space-x-2.5">
                        <span className="w-2 h-2 bg-[#ff3131]" />
                        <span>{lang === "hi" ? "IP65/IP66 वेदरप्रूफ संरक्षण" : "IP65 / IP66 Industrial Ingress Protection"}</span>
                      </div>
                      <div className="flex items-center space-x-2.5">
                        <span className="w-2 h-2 bg-[#ff3131]" />
                        <span>{lang === "hi" ? "डायरेक्ट OEM एवं इंटीग्रेशन सपोर्ट" : "Direct OEM / ODM Customization Available"}</span>
                      </div>
                    </div>

                    <a
                      href="/contact/quote-req"
                      className="w-full py-3.5 px-4 bg-[#ff3131] hover:bg-[#e02626] text-white text-xs sm:text-sm font-medium tracking-wide text-center block transition-all shadow-md hover:shadow-[#ff3131]/30"
                    >
                      {lang === "hi" ? "विस्तृत डेटाशीट अनुरोध करें" : "Request Full Technical Datasheet"}
                    </a>
                  </div>
                </div>
              </div>

              {/* Key Features Grid */}
              <div className="pt-10">
                <div className="mb-8">
                  <div className="text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-2">
                    {lang === "hi" ? "मुख्य क्षमताएं" : "CORE CAPABILITIES"}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-normal text-[#1e293b] font-sans">
                    {lang === "hi" ? "प्रमुख तकनीकी विशेषताएं" : "Key Engineering Features"}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {config.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-white border border-gray-200 hover:border-[#ff3131]/60 transition-all shadow-sm hover:shadow-xl group"
                    >
                      {feat.badgeEn && (
                        <div className="text-[10px] font-semibold text-[#ff3131] uppercase tracking-wider mb-2">
                          {lang === "hi" ? feat.badgeHi : feat.badgeEn}
                        </div>
                      )}
                      <h4 className="text-base sm:text-lg font-medium text-[#1e293b] mb-2.5 group-hover:text-[#ff3131] transition-colors font-sans">
                        {lang === "hi" ? feat.titleHi : feat.titleEn}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                        {lang === "hi" ? feat.descHi : feat.descEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TECHNICAL SPECIFICATIONS TABLE */}
          {activeTab === "specs" && config.specs && (
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-normal text-[#1e293b] font-sans mb-2">
                  {lang === "hi" ? "विस्तृत तकनीकी विनिर्देश" : "Engineering Specifications"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {lang === "hi"
                    ? "फैक्ट्री प्रमाणित पैरामीटर एवं परिचालन सीमाएं।"
                    : "Standard factory parameters and operational envelope."}
                </p>
              </div>

              <div className="border border-gray-200 overflow-hidden shadow-md bg-white">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#1e293b] text-white uppercase font-medium text-xs tracking-wider">
                    <tr>
                      <th className="py-4 px-6 sm:px-8 w-1/2">
                        {lang === "hi" ? "पैरामीटर / विनिर्देश" : "Parameter / Specification"}
                      </th>
                      <th className="py-4 px-6 sm:px-8 w-1/2">
                        {lang === "hi" ? "मान / विवरण" : "Value / Description"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {config.specs.map((item, idx) => (
                      <tr key={idx} className="hover:bg-red-50/40 transition-colors">
                        <td className="py-3.5 px-6 sm:px-8 font-medium text-[#1e293b]">
                          {lang === "hi" ? item.labelHi : item.labelEn}
                        </td>
                        <td className="py-3.5 px-6 sm:px-8 text-[#ff3131] font-semibold text-xs sm:text-sm">
                          {lang === "hi" ? item.valueHi : item.valueEn}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: FIELD APPLICATIONS */}
          {activeTab === "applications" && config.applications && (
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-normal text-[#1e293b] font-sans mb-2">
                  {lang === "hi" ? "उपयोग परिदृश्य एवं अनुप्रयोग" : "Field Deployments & Use Cases"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {lang === "hi"
                    ? "कठिन फील्ड परिस्थितियों और बुनियादी ढांचा प्रतिष्ठानों में हमारा सिद्ध प्रदर्शन।"
                    : "Proven installations across heavy railway divisions, utilities, and mission-critical industries."}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {config.applications.map((app, idx) => (
                  <div key={idx} className="p-6 bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#ff3131]/60 transition-all">
                    <span className="inline-block px-2.5 py-1 bg-red-50 text-[#ff3131] border border-red-200 text-[10px] font-semibold uppercase tracking-wider mb-3">
                      {lang === "hi" ? app.tagHi : app.tagEn}
                    </span>
                    <h4 className="text-base font-medium text-[#1e293b] mb-2 font-sans">
                      {lang === "hi" ? app.titleHi : app.titleEn}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {lang === "hi" ? app.descHi : app.descEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 3: ASSOCIATED FAMILY PAGES (DiscoverAramco Style)
        =======================================================================
      */}
      {config.relatedLinks && config.relatedLinks.length > 0 && (
        <section className="w-full bg-white text-gray-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs font-semibold text-[#ff3131] uppercase tracking-widest flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#ff3131]" />
                <span>{lang === "hi" ? "अन्य संबंधित प्रणालियां" : "Associated Products & Architectures"}</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {config.relatedLinks.map((rel, idx) => (
                <Link
                  key={idx}
                  href={rel.href}
                  className="p-6 bg-[#f8f9fa] border border-gray-200 hover:border-[#ff3131]/60 hover:bg-white shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] font-semibold text-[#ff3131] uppercase tracking-wider mb-1">
                      {lang === "hi" ? rel.tagHi : rel.tagEn}
                    </div>
                    <div className="text-sm font-semibold text-[#1e293b] group-hover:text-[#ff3131] transition-colors font-sans">
                      {lang === "hi" ? rel.titleHi : rel.titleEn}
                    </div>
                  </div>
                  <div className="pt-4 mt-2 flex items-center justify-end text-xs font-medium text-gray-400 group-hover:text-[#ff3131] transition-colors">
                    <span>{lang === "hi" ? "देखें" : "View"}</span>
                    <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 
        =======================================================================
        SECTION 4: INQUIRY & RESOURCES PORTAL (Matching FinancialReports & Support)
        =======================================================================
      */}
      <section id="inquiry-form" className="w-full bg-[#f8f9fa] text-gray-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-7 bg-white border border-gray-200 p-8 sm:p-10 shadow-md flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-[#ff3131] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-[#ff3131]" />
                  <span>{lang === "hi" ? "सीधा संसाधन केंद्र" : "CENTRAL SPECIFICATION DESK"}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-normal text-[#1e293b] font-sans mt-2">
                  {lang === "hi" ? `${config.titleHi} तकनीकी दस्तावेज़ एवं सहायता` : `Access ${config.titleEn} Resources & Direct Support`}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  {lang === "hi"
                    ? "सिविल लेआउट, वायरिंग आरेख और टेंडर अनुपालन दस्तावेज तुरंत प्राप्त करें या वरिष्ठ इंजीनियरों से परामर्श लें।"
                    : "Direct access to engineering datasheets, CAD dimensional blueprints, and dedicated application leads."}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/support/datasheets"
                    className="px-6 py-3.5 bg-[#ff3131] hover:bg-[#e02626] text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-md hover:shadow-[#ff3131]/30 flex items-center space-x-2"
                  >
                    <span>{lang === "hi" ? "डेटाशीट डाउनलोड करें (PDF)" : "Download Specification PDF"}</span>
                    <span>↓</span>
                  </a>
                  <a
                    href="/contact/engineering-team"
                    className="px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-medium tracking-wide transition-all border border-gray-300"
                  >
                    {lang === "hi" ? "इंजीनियर से बात करें" : "Talk to Systems Engineer"}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Desk Card in Dark Corporate Styling */}
            <div className="lg:col-span-5 bg-[#1e293b] text-white p-8 sm:p-10 shadow-xl flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-semibold text-[#ff3131] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-5 h-[2px] bg-[#ff3131]" />
                  <span>CENTRAL ENGINEERING DESK</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-light text-white font-sans mt-2">
                  {lang === "hi" ? "सीधा तकनीकी संपर्क" : "Direct Systems Hotline"}
                </h4>
                <div className="mt-6 divide-y divide-gray-700 text-xs sm:text-sm text-gray-300">
                  <div className="flex justify-between py-3">
                    <span className="text-gray-400 font-medium">Direct Helpline:</span>
                    <span className="text-[#ff3131] font-semibold font-mono">+91 11 4988 7700</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-400 font-medium">Technical Mail:</span>
                    <span className="text-white font-medium">support@global-safety.com</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-400 font-medium">SLA Response:</span>
                    <span className="text-emerald-400 font-semibold">&lt; 24 Hours Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Newsletter Subscription */}
      <NewsletterSection />

      {/* 3. Global Footer */}
      <Footer />
    </main>
  );
}

export default function SubpageLayout({ config }: { config: SubpageConfig }) {
  return (
    <LanguageProvider>
      <SubpageInner config={config} />
    </LanguageProvider>
  );
}

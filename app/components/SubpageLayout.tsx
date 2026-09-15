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
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 font-sans selection:bg-[#0284c7] selection:text-white">
      {/* 1. Global Aramco Sticky Navigation */}
      <AramcoHeader />

      {/* 
        =======================================================================
        HERO BANNER (Clean Corporate White / Soft Slate & Sapphire Theme)
        =======================================================================
      */}
      <section className="relative w-full pt-28 sm:pt-36 pb-16 sm:pb-24 bg-gradient-to-b from-slate-100 via-[#f8fafc] to-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Geometric Background Elements */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-24 right-10 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs font-medium text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-sky-600 transition-colors">
              {lang === "hi" ? "होम" : "Home"}
            </Link>
            <span>/</span>
            <Link href={config.categoryHref} className="hover:text-sky-600 transition-colors">
              {lang === "hi" ? config.categoryHi : config.categoryEn}
            </Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold truncate max-w-[200px] sm:max-w-none">
              {lang === "hi" ? config.titleHi : config.titleEn}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Hero Details */}
            <div className="lg:col-span-7">
              {/* Category / Domain Header */}
              <div className="text-xs sm:text-sm font-bold text-sky-700 tracking-wider uppercase font-mono mb-3">
                {lang === "hi" ? config.heroBadgeHi : config.heroBadgeEn}
              </div>

              {/* Page Title */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[46px] font-bold text-slate-900 tracking-tight leading-[1.18] mb-5">
                {lang === "hi" ? config.titleHi : config.titleEn}
              </h1>

              {/* Subtitle / Key Executive Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
                {lang === "hi" ? config.subtitleHi : config.subtitleEn}
              </p>

              {/* Quick Action CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#inquiry-form"
                  className="px-6 py-3.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-500/30 flex items-center space-x-2 cursor-pointer"
                >
                  <span>{lang === "hi" ? "तकनीकी कोटेशन प्राप्त करें" : "Request Technical Quote"}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href="/contact/engineering-team"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm flex items-center space-x-2"
                >
                  <span>{lang === "hi" ? "इंजीनियरिंग टीम से परामर्श" : "Consult Engineering"}</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Card Banner */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden bg-white p-2 shadow-lg border border-slate-200">
                <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={config.bannerImage}
                    alt={config.titleEn}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          {config.stats && config.stats.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {config.stats.map((st, i) => (
                <div key={i} className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono tracking-tight text-sky-600">
                    {st.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                    {lang === "hi" ? st.labelHi : st.labelEn}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 
        =======================================================================
        BANNER 1 (~80% WIDTH): CATEGORY ARCHITECTURE SPOTLIGHT
        =======================================================================
      */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 my-12 sm:my-16">
        <div className="bg-gradient-to-r from-sky-50 via-slate-50 to-white border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-100 text-sky-800 border border-sky-200 text-xs font-bold uppercase tracking-wider font-mono">
                <span>{lang === "hi" ? "इंजीनियरिंग पोर्टफोलियो" : "ENGINEERING DOMAIN"}</span>
                <span>•</span>
                <span>PROVEN HARDWARE RELIABILITY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                {lang === "hi" 
                  ? `${config.titleHi} - मिशन-क्रिटिकल विश्वसनीयता`
                  : `${config.titleEn} Mission-Critical Systems`}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {lang === "hi"
                  ? "कठिनतम रेलवे लेवल क्रॉसिंग, सिग्नलिंग नेटवर्क और औद्योगिक पैनलों के लिए समर्पित तकनीकी समाधान।"
                  : "Field-proven functional safety architectures engineered to eliminate downtime, protect personnel, and maintain continuous operational uptime."}
              </p>
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href="#inquiry-form"
                  className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold tracking-wide transition-all shadow-sm flex items-center space-x-2"
                >
                  <span>{lang === "hi" ? "तकनीकी डेटाशीट डाउनलोड करें" : "Download Specifications"}</span>
                  <span>→</span>
                </a>
                <a
                  href="/contact/engineering-team"
                  className="text-xs font-semibold text-slate-700 hover:text-sky-600 transition-colors"
                >
                  {lang === "hi" ? "इंजीनियरिंग से परामर्श" : "Consult Systems Engineering"}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="h-56 sm:h-64 w-full overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={config.bannerImage}
                  alt={config.titleEn}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        NAVIGATION TABS & CORE CONTENT
        =======================================================================
      */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Mode Switcher Tabs */}
          <div className="flex items-center space-x-2 border-b border-slate-200 pb-4 mb-10 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "overview"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {lang === "hi" ? "सिस्टम अवलोकन (Overview)" : "System Overview"}
            </button>
            {config.specs && config.specs.length > 0 && (
              <button
                onClick={() => setActiveTab("specs")}
                className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === "specs"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {lang === "hi" ? "तकनीकी विनिर्देश (Specifications)" : "Technical Specifications"}
              </button>
            )}
            {config.applications && config.applications.length > 0 && (
              <button
                onClick={() => setActiveTab("applications")}
                className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === "applications"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {lang === "hi" ? "फ़ील्ड अनुप्रयोग (Applications)" : "Field Applications"}
              </button>
            )}
          </div>

          {/* TAB 1: OVERVIEW & ARCHITECTURE */}
          {activeTab === "overview" && (
            <div className="space-y-12 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Narrative Left Column */}
                <div className="lg:col-span-7 space-y-5">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {lang === "hi" ? config.overviewTitleHi : config.overviewTitleEn}
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {(lang === "hi" ? config.overviewTextHi : config.overviewTextEn).map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Standards Compliance Badges */}
                  {config.complianceStandards && config.complianceStandards.length > 0 && (
                    <div className="pt-6 border-t border-slate-100">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                        {lang === "hi" ? "अनुपालन एवं सुरक्षा मानक" : "Compliance & Engineering Standards"}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {config.complianceStandards.map((std, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700 font-mono"
                          >
                            {std}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Callout Box */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-sky-50/50 p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                    <div className="text-xs font-bold text-sky-700 uppercase tracking-wider mb-2">
                      {lang === "hi" ? "इंजीनियरिंग विश्वसनीयता" : "ENGINEERING HIGHLIGHTS"}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                      {lang === "hi" ? "मिशन-क्रिटिकल संचालन हेतु निर्मित" : "Engineered for Zero Failure Tolerance"}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                      {lang === "hi"
                        ? "ग्लोबल सिस्टम्स कठोर पर्यावरणीय परीक्षणों, निरंतर परिचालन चक्रों और अंतरराष्ट्रीय सुरक्षा अनुपालन से प्रमाणित हैं।"
                        : "GLOBAL safety hardware undergoes 100% factory stress validation, continuous thermal testing, and conforms to demanding railway & industrial standards."}
                    </p>

                    <div className="space-y-3 mb-6 text-xs sm:text-sm text-slate-700">
                      <div className="flex items-center space-x-2.5">
                        <span className="w-2 h-2 rounded-full bg-sky-600" />
                        <span>{lang === "hi" ? "कठिन तापमान सहिष्णुता (-20°C to +70°C)" : "Extended temperature range (-20°C to +70°C)"}</span>
                      </div>
                      <div className="flex items-center space-x-2.5">
                        <span className="w-2 h-2 rounded-full bg-sky-600" />
                        <span>{lang === "hi" ? "IP65/IP66 वेदरप्रूफ संरक्षण" : "IP65 / IP66 Industrial Ingress Protection"}</span>
                      </div>
                      <div className="flex items-center space-x-2.5">
                        <span className="w-2 h-2 rounded-full bg-sky-600" />
                        <span>{lang === "hi" ? "डायरेक्ट OEM एवं इंटीग्रेशन सपोर्ट" : "Direct OEM / ODM Customization Available"}</span>
                      </div>
                    </div>

                    <a
                      href="/contact/quote-req"
                      className="w-full py-3 px-4 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold tracking-wide text-center block transition-colors shadow-sm"
                    >
                      {lang === "hi" ? "विस्तृत डेटाशीट अनुरोध करें" : "Request Full Technical Datasheet"}
                    </a>
                  </div>
                </div>

              </div>

              {/* Key Features Grid */}
              <div className="pt-10">
                <div className="mb-8">
                  <div className="text-xs font-bold tracking-wider text-sky-600 uppercase mb-2">
                    {lang === "hi" ? "मुख्य क्षमताएं" : "CORE CAPABILITIES"}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {lang === "hi" ? "प्रमुख तकनीकी विशेषताएं" : "Key Engineering Features"}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {config.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200/90 hover:border-sky-300 hover:bg-white transition-all shadow-sm group"
                    >
                      {feat.badgeEn && (
                        <div className="text-[10px] font-bold text-sky-600 uppercase tracking-wider mb-2 font-mono">
                          {lang === "hi" ? feat.badgeHi : feat.badgeEn}
                        </div>
                      )}
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 group-hover:text-sky-700 transition-colors">
                        {lang === "hi" ? feat.titleHi : feat.titleEn}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
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
            <div className="animate-in fade-in duration-200">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  {lang === "hi" ? "विस्तृत तकनीकी विनिर्देश" : "Engineering Specifications"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  {lang === "hi"
                    ? "फैक्ट्री प्रमाणित पैरामीटर एवं परिचालन सीमाएं।"
                    : "Standard factory parameters and operational envelope."}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 uppercase font-bold text-[11px] tracking-wider">
                    <tr>
                      <th className="py-4 px-6 sm:px-8 w-1/2">
                        {lang === "hi" ? "पैरामीटर / विनिर्देश" : "Parameter / Specification"}
                      </th>
                      <th className="py-4 px-6 sm:px-8 w-1/2">
                        {lang === "hi" ? "मान / विवरण" : "Value / Description"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {config.specs.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-3.5 px-6 sm:px-8 font-medium text-slate-900">
                          {lang === "hi" ? item.labelHi : item.labelEn}
                        </td>
                        <td className="py-3.5 px-6 sm:px-8 text-slate-600 font-mono text-xs sm:text-sm">
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
            <div className="animate-in fade-in duration-200">
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  {lang === "hi" ? "उपयोग परिदृश्य एवं अनुप्रयोग" : "Field Deployments & Use Cases"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  {lang === "hi"
                    ? "कठिन फील्ड परिस्थितियों और बुनियादी ढांचा प्रतिष्ठानों में हमारा सिद्ध प्रदर्शन।"
                    : "Proven installations across heavy railway divisions, utilities, and mission-critical industries."}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {config.applications.map((app, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 shadow-sm">
                    <span className="inline-block px-2.5 py-1 rounded bg-sky-100 text-sky-800 text-[10px] font-bold uppercase tracking-wider mb-3">
                      {lang === "hi" ? app.tagHi : app.tagEn}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mb-2">
                      {lang === "hi" ? app.titleHi : app.titleEn}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
        BANNER 2 (FULL-WIDTH): INDUSTRIAL DEPLOYMENT & FIELD STANDARDS
        =======================================================================
      */}
      <section className="relative w-full my-12 sm:my-16 bg-slate-100 border-y border-slate-200 overflow-hidden">
        <div className="relative h-[280px] sm:h-[400px] lg:h-[480px] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={config.bannerImage}
            alt={lang === "hi" ? `${config.titleHi} फील्ड परिनियोजन` : `${config.titleEn} Active Field Deployment`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white border-t border-slate-200 py-3.5 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600 font-mono">
            <div className="flex items-center space-x-2 font-bold text-slate-900">
              <span className="w-2 h-2 rounded-full bg-sky-600 inline-block" />
              <span>{lang === "hi" ? `${config.titleHi} - प्रमाणित फील्ड विश्वसनीयता` : `${config.titleEn} • Verified Field Reliability`}</span>
            </div>
            <div className="flex items-center space-x-4 text-[11px] text-slate-500">
              <span>CENELEC EN 50126</span>
              <span>•</span>
              <span>IEC 60947 COMPLIANT</span>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        RELATED SUB-CATEGORY NAVIGATION (Explore Family Pages)
        =======================================================================
      */}
      {config.relatedLinks && config.relatedLinks.length > 0 && (
        <section className="py-12 bg-slate-50 border-t border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {lang === "hi" ? "संबंधित समाधान" : "EXPLORE RELATED SOLUTIONS"}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {lang === "hi" ? "अन्य संबंधित प्रणालियां" : "Associated Products & Architectures"}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {config.relatedLinks.map((rel, idx) => (
                <Link
                  key={idx}
                  href={rel.href}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] font-bold text-sky-600 uppercase tracking-wider mb-1">
                      {lang === "hi" ? rel.tagHi : rel.tagEn}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {lang === "hi" ? rel.titleHi : rel.titleEn}
                    </div>
                  </div>
                  <div className="pt-3 mt-2 flex items-center justify-end text-xs font-semibold text-slate-400 group-hover:text-sky-600 transition-colors">
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
        CATEGORY HUB ACTION PORTAL (Modern, Fast-Track Access)
        =======================================================================
      */}
      <section id="inquiry-form" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-xs font-bold font-mono text-sky-600 uppercase tracking-widest">
                  {lang === "hi" ? "त्वरित सहायता एवं डाउनलोड" : "FAST-TRACK TECHNICAL ACCESS"}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  {lang === "hi" ? `${config.titleHi} तकनीकी दस्तावेज़ एवं सहायता` : `Access ${config.titleEn} Resources & Direct Support`}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {lang === "hi"
                    ? "सिविल लेआउट, वायरिंग आरेख और टेंडर अनुपालन दस्तावेज तुरंत प्राप्त करें या वरिष्ठ इंजीनियरों से परामर्श लें।"
                    : "Direct access to engineering datasheets, CAD dimensional blueprints, and dedicated application leads."}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/support/datasheets"
                    className="px-5 py-3 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md shadow-sky-500/20 flex items-center space-x-2"
                  >
                    <span>{lang === "hi" ? "डेटाशीट डाउनलोड करें (PDF)" : "Download Specification PDF"}</span>
                    <span className="font-mono">↓</span>
                  </a>
                  <a
                    href="/contact/engineering-team"
                    className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold tracking-wide transition-all"
                  >
                    {lang === "hi" ? "इंजीनियर से बात करें" : "Talk to Systems Engineer"}
                  </a>
                </div>
              </div>

              {/* Direct Desk Card */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm text-slate-900">
                <span className="text-[10px] font-bold text-sky-700 uppercase tracking-widest">
                  CENTRAL ENGINEERING DESK
                </span>
                <h4 className="text-lg font-bold text-slate-900 mt-1">
                  {lang === "hi" ? "सीधा तकनीकी संपर्क" : "Direct Systems Hotline"}
                </h4>
                <div className="mt-4 divide-y divide-slate-100 text-xs text-slate-700">
                  <div className="flex justify-between py-2">
                    <span className="text-slate-500 font-medium">Direct Helpline:</span>
                    <span className="text-sky-700 font-bold">+91 11 4988 7700</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-500 font-medium">Technical Mail:</span>
                    <span className="text-slate-900 font-medium">support@global-safety.com</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-500 font-medium">SLA Response:</span>
                    <span className="text-emerald-700 font-bold">&lt; 24 Hours Guaranteed</span>
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
    </div>
  );
}

export default function SubpageLayout({ config }: { config: SubpageConfig }) {
  return (
    <LanguageProvider>
      <SubpageInner config={config} />
    </LanguageProvider>
  );
}

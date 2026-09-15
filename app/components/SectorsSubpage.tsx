"use client";

import React, { useState } from "react";
import Link from "next/link";
import AramcoHeader from "./AramcoHeader";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";

export interface SectorsSubpageProps {
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
  riskMitigations: { titleEn: string; titleHi: string; riskEn: string; riskHi: string; solutionEn: string; solutionHi: string }[];
  caseStudies: { titleEn: string; titleHi: string; locationEn: string; locationHi: string; outcomeEn: string; outcomeHi: string; tag: string }[];
  relatedSublinks: { titleEn: string; titleHi: string; href: string; tag: string }[];
}

function SectorsContent({ data }: { data: SectorsSubpageProps }) {
  const { lang } = useLanguage();
  const [selectedRiskIdx, setSelectedRiskIdx] = useState<number>(0);
  const [refPackSent, setRefPackSent] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 font-sans selection:bg-[#0284c7] selection:text-white">
      {/* 1. Global Navigation */}
      <AramcoHeader />

      {/* 
        =======================================================================
        HERO SECTION: INFRASTRUCTURE OPERATIONS & DEPLOYMENT CORRIDORS
        =======================================================================
      */}
      <section className="relative w-full pt-28 sm:pt-36 pb-16 sm:pb-20 bg-gradient-to-b from-slate-100 via-[#f8fafc] to-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs font-medium text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-sky-600 transition-colors">
              {lang === "hi" ? "होम" : "Home"}
            </Link>
            <span>/</span>
            <Link href="/sectors" className="hover:text-sky-600 transition-colors">
              {lang === "hi" ? "उपयोग एवं क्षेत्र" : "Applications & Sectors"}
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold truncate max-w-[220px] sm:max-w-none">
              {lang === "hi" ? data.subCategoryTitleHi : data.subCategoryTitleEn}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="text-xs sm:text-sm font-bold text-sky-700 tracking-wider uppercase font-mono mb-3">
                {lang === "hi" ? data.badgeHi : data.badgeEn}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.2] mb-5">
                {lang === "hi" ? data.heroHeadlineHi : data.heroHeadlineEn}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
                {lang === "hi" ? data.heroSubtitleHi : data.heroSubtitleEn}
              </p>

              {/* Action Toolbar */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#hazard-matrix"
                  className="px-6 py-3 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md shadow-sky-500/20 hover:shadow-lg flex items-center space-x-2"
                >
                  <span>{lang === "hi" ? "खतरा शमन इंटरएक्टिव ग्रिड" : "Interactive Hazard Matrix"}</span>
                  <span className="text-xs font-mono">→</span>
                </a>
                <a
                  href="#project-library"
                  className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm flex items-center space-x-2"
                >
                  <span>{lang === "hi" ? "प्रोजेक्ट केस स्टडीज" : "Field Case Studies"}</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden bg-white p-2 shadow-lg border border-slate-200">
                <div className="relative h-72 sm:h-88 md:h-96 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={data.bannerImage}
                    alt={data.subCategoryTitleEn}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 4 Stat Metrics */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {data.stats.map((st, i) => (
              <div key={i} className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-sky-300 transition-all">
                <div className="text-2xl sm:text-3xl font-bold text-sky-600 font-mono tracking-tight">
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
        BANNER 1 (~80% WIDTH): INFRASTRUCTURE DEPLOYMENT SPOTLIGHT
        =======================================================================
      */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 my-12 sm:my-16">
        <div className="bg-gradient-to-r from-sky-50 via-slate-50 to-white border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-100 text-sky-800 border border-sky-200 text-xs font-bold uppercase tracking-wider font-mono">
                <span>{lang === "hi" ? "इन्फ्रास्ट्रक्चर सेक्टर" : "SECTOR ARCHITECTURE"}</span>
                <span>•</span>
                <span>CRITICAL ASSET PROTECTION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                {lang === "hi" 
                  ? `${data.subCategoryTitleHi} - उच्च-घनत्व परिचालन सुरक्षा`
                  : `${data.subCategoryTitleEn} Specialized Infrastructure`}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {lang === "hi"
                  ? "सार्वजनिक सुरक्षा और भारी परिसंपत्तियों के लिए समर्पित समाधान। 24/7 निर्बाध परिचालन और स्वचालित सुरक्षा समन्वय।"
                  : "Engineered specifically to solve real operational bottlenecks at road-rail interfaces, industrial power centers, and railway yards."}
              </p>
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href="#hazard-matrix"
                  className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold tracking-wide transition-all shadow-sm flex items-center space-x-2"
                >
                  <span>{lang === "hi" ? "जोखिम शमन विश्लेषण" : "Explore Risk Mitigations"}</span>
                  <span>→</span>
                </a>
                <a
                  href="#project-library"
                  className="text-xs font-semibold text-slate-700 hover:text-sky-600 transition-colors"
                >
                  {lang === "hi" ? "परियोजना संदर्भ देखें" : "View Project Case Studies"}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="h-56 sm:h-64 w-full overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
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
        SECTION 2: INTERACTIVE BEFORE / AFTER HAZARD MITIGATION
        =======================================================================
      */}
      <section id="hazard-matrix" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold font-mono text-sky-600 uppercase tracking-widest">
              {lang === "hi" ? "जोखिम शमन विश्लेषण" : "OPERATIONAL HAZARD MITIGATION"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              {lang === "hi" ? "वास्तविक फील्ड जोखिम बनाम ग्लोबल इंजीनियरिंग समाधान" : "Real-World Field Hazards vs. GLOBAL Engineering Solutions"}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Hazard Tabs */}
            <div className="lg:col-span-5 space-y-3">
              {data.riskMitigations.map((r, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedRiskIdx(idx)}
                  className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedRiskIdx === idx
                      ? "bg-sky-50 border-sky-500 shadow-md text-slate-900 ring-2 ring-sky-400/20"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold font-mono text-sky-700">HAZARD #{idx + 1}</span>
                    <span className="text-[10px] text-slate-400">ACTIVE SCENARIO</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {lang === "hi" ? r.titleHi : r.titleEn}
                  </h4>
                </button>
              ))}
            </div>

            {/* Right Side Before vs After Comparison Card */}
            <div className="lg:col-span-7 bg-white text-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-6">
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wide">
                  SCENARIO ANALYSIS: {lang === "hi" ? data.riskMitigations[selectedRiskIdx].titleHi : data.riskMitigations[selectedRiskIdx].titleEn}
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                  MITIGATED
                </span>
              </div>

              {/* Before: Hazard State */}
              <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200 mb-4">
                <div className="text-[11px] font-bold text-rose-700 uppercase flex items-center space-x-1.5 mb-1">
                  <span>[HAZARD STATE] UNPROTECTED / LEGACY HAZARD</span>
                </div>
                <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                  {lang === "hi" ? data.riskMitigations[selectedRiskIdx].riskHi : data.riskMitigations[selectedRiskIdx].riskEn}
                </p>
              </div>

              {/* After: GLOBAL Solution */}
              <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200">
                <div className="text-[11px] font-bold text-emerald-700 uppercase flex items-center space-x-1.5 mb-1">
                  <span>[SOLUTION] GLOBAL ENGINEERING SAFEGUARD</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                  {lang === "hi" ? data.riskMitigations[selectedRiskIdx].solutionHi : data.riskMitigations[selectedRiskIdx].solutionEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        BANNER 2 (FULL-WIDTH): FIELD CORRIDOR & CROSSING SHOWCASE
        =======================================================================
      */}
      <section className="relative w-full my-12 sm:my-16 bg-slate-100 border-y border-slate-200 overflow-hidden">
        <div className="relative h-[280px] sm:h-[400px] lg:h-[480px] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.fieldBannerImage}
            alt={lang === "hi" ? `${data.subCategoryTitleHi} फील्ड तैनाती` : `${data.subCategoryTitleEn} Field Infrastructure Deployment`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white border-t border-slate-200 py-3.5 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600 font-mono">
            <div className="flex items-center space-x-2 font-bold text-slate-900">
              <span className="w-2 h-2 rounded-full bg-sky-600 inline-block" />
              <span>{lang === "hi" ? `${data.subCategoryTitleHi} - सक्रिय कॉरिडोर परिनियोजन` : `${data.subCategoryTitleEn} • Active Corridor Deployment`}</span>
            </div>
            <div className="flex items-center space-x-4 text-[11px] text-slate-500">
              <span>HIGH DENSITY CORRIDOR READY</span>
              <span>•</span>
              <span>24/7 MISSION CRITICAL UP-TIME</span>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 3: CASE STUDIES GALLERY (Real Deployment Sites)
        =======================================================================
      */}
      <section id="project-library" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold font-mono text-sky-600 uppercase tracking-widest">
              {lang === "hi" ? "तैनाती संदर्भ" : "PROVEN FIELD TRACK RECORD"}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              {lang === "hi" ? "प्रमुख परियोजनाएं एवं साइट परिणाम" : "Flagship Deployment References"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.caseStudies.map((cs, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-sky-300 transition-all flex flex-col justify-between">
                <div>
                  <span className="px-2.5 py-1 rounded bg-sky-100 text-sky-800 text-[10px] font-bold font-mono uppercase mb-3 inline-block">
                    {cs.tag}
                  </span>
                  <div className="text-xs font-bold text-slate-500 font-mono">
                    {lang === "hi" ? cs.locationHi : cs.locationEn}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mt-1 mb-2">
                    {lang === "hi" ? cs.titleHi : cs.titleEn}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === "hi" ? cs.outcomeHi : cs.outcomeEn}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono text-emerald-600 font-bold">
                  STATUS: VERIFIED ON SITE
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 4: BESPOKE SECTOR ADVISORY & REFERENCE LIBRARY (NO REPEATED FORM)
        =======================================================================
      */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-xs font-bold font-mono text-sky-600 uppercase tracking-widest">
                  TURNKEY SECTOR INTEGRATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Request Project Reference Pack for {data.subCategoryTitleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Receive our comprehensive list of verified site acceptance certificates, tender qualifying project references, and BOQ templates.
                </p>

                <div className="mt-6">
                  <button
                    onClick={() => {
                      setRefPackSent(true);
                      setTimeout(() => setRefPackSent(false), 3500);
                    }}
                    className="px-6 py-3 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md shadow-sky-500/20 cursor-pointer flex items-center space-x-2"
                  >
                    <span>Download Project Reference Dossier (PDF)</span>
                    <span className="font-mono">↓</span>
                  </button>
                  {refPackSent && (
                    <div className="mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center space-x-2">
                      <span className="font-bold text-emerald-700 font-mono">[CONFIRMED]</span>
                      <span>Project reference dossier initiated (GL-PROJECT-REFERENCES-2026.pdf).</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Regional Project Lead Contact */}
              <div className="lg:col-span-5 bg-white text-slate-900 p-6 rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wide">REGIONAL SECTOR DESK</span>
                <h4 className="text-base font-bold text-slate-900 mt-1">Project Engineering Lead</h4>
                <div className="mt-4 divide-y divide-slate-100 text-xs text-slate-700">
                  <div className="flex justify-between py-2">
                    <span className="text-slate-500 font-medium">Direct Desk:</span>
                    <span className="text-slate-900 font-bold">+91 11 4988 7700</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-500 font-medium">Project Support:</span>
                    <span className="text-sky-700 font-medium">projects@global-safety.com</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-500 font-medium">Response SLA:</span>
                    <span className="text-emerald-700 font-bold">&lt; 12 Hours</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. Related Sublinks Navigation */}
      {data.relatedSublinks && data.relatedSublinks.length > 0 && (
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              {lang === "hi" ? "अन्य संबंधित क्षेत्र" : "Explore Other Deployment Sectors"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.relatedSublinks.map((sub, i) => (
                <Link
                  key={i}
                  href={sub.href}
                  className="p-4 rounded-xl bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 transition-all flex items-center justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-sky-700">{sub.tag}</span>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-sky-700">
                      {lang === "hi" ? sub.titleHi : sub.titleEn}
                    </div>
                  </div>
                  <span className="text-slate-400 group-hover:text-sky-600 transition-transform group-hover:translate-x-1">→</span>
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

export default function SectorsSubpage({ data }: { data: SectorsSubpageProps }) {
  return (
    <LanguageProvider>
      <SectorsContent data={data} />
    </LanguageProvider>
  );
}

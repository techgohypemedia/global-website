"use client";

import React, { useState } from "react";
import Link from "next/link";
import AramcoHeader from "./AramcoHeader";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";

export interface CapabilitySubpageProps {
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
  pillars: { titleEn: string; titleHi: string; descEn: string; descHi: string; badge: string }[];
  lifecycleSteps: { step: string; titleEn: string; titleHi: string; descEn: string; descHi: string }[];
  complianceList: string[];
  relatedSublinks: { titleEn: string; titleHi: string; href: string; tag: string }[];
}

function CapabilityContent({ data }: { data: CapabilitySubpageProps }) {
  const { lang } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [dossierDownloaded, setDossierDownloaded] = useState(false);
  const [tourBooked, setTourBooked] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Next Tuesday, 10:30 AM");

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 font-sans selection:bg-[#0284c7] selection:text-white">
      {/* 1. Global Navigation */}
      <AramcoHeader />

      {/* 
        =======================================================================
        HERO SECTION: CORPORATE EDITORIAL & SIL-2 INTEGRITY SHOWCASE
        =======================================================================
      */}
      <section className="relative w-full pt-28 sm:pt-36 pb-16 sm:pb-24 bg-gradient-to-b from-slate-100 via-[#f8fafc] to-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute top-0 right-1/4 w-[36rem] h-[36rem] bg-sky-200/30 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs font-medium text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-sky-600 transition-colors">
              {lang === "hi" ? "होम" : "Home"}
            </Link>
            <span>/</span>
            <Link href="/capability" className="hover:text-sky-600 transition-colors">
              {lang === "hi" ? "इंजीनियरिंग क्षमताएं" : "Engineering Capabilities"}
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
                  href="#rams-lifecycle"
                  className="px-6 py-3 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md shadow-sky-500/20 hover:shadow-lg flex items-center space-x-2"
                >
                  <span>{lang === "hi" ? "4-चरणीय सत्यापन पाइपलाइन" : "Explore 4-Stage RAMS Pipeline"}</span>
                  <span className="text-xs font-mono">→</span>
                </a>
                <a
                  href="#compliance-vault"
                  className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm flex items-center space-x-2"
                >
                  <span className="text-[11px] font-mono font-bold text-sky-600">SIL-2</span>
                  <span>{lang === "hi" ? "SIL-2 अनुपालन प्रमाणपत्र" : "SIL-2 Compliance Matrix"}</span>
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
        BANNER 1 (~80% WIDTH): ENGINEERING EXCELLENCE SPOTLIGHT
        =======================================================================
      */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 my-12 sm:my-16">
        <div className="bg-gradient-to-r from-sky-50 via-slate-50 to-white border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-100 text-sky-800 border border-sky-200 text-xs font-bold uppercase tracking-wider font-mono">
                <span>{lang === "hi" ? "इंजीनियरिंग क्षमता" : "ENGINEERING CAPABILITY"}</span>
                <span>•</span>
                <span>CENELEC EN 50126</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                {lang === "hi" 
                  ? `${data.subCategoryTitleHi} - प्रमाणित गुणवत्ता मानक`
                  : `${data.subCategoryTitleEn} Industrial Rigor`}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {lang === "hi"
                  ? "शून्य-दोष निर्माण और 100% फैक्ट्री स्ट्रेस टेस्टिंग। अंतरराष्ट्रीय रेलवे और भारी औद्योगिक मानकों के अनुसार सत्यापित।"
                  : "Zero-defect manufacturing protocols, 100% component traceability, and rigorous environmental burn-in testing across all production batches."}
              </p>
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href="#rams-lifecycle"
                  className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold tracking-wide transition-all shadow-sm flex items-center space-x-2"
                >
                  <span>{lang === "hi" ? "RAMS पाइपलाइन देखें" : "Explore RAMS Pipeline"}</span>
                  <span>→</span>
                </a>
                <a
                  href="#compliance-vault"
                  className="text-xs font-semibold text-slate-700 hover:text-sky-600 transition-colors"
                >
                  {lang === "hi" ? "प्रमाणन मैट्रिक्स देखें" : "View Compliance Certificates"}
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
        SECTION 2: 4-STAGE RAMS LIFECYCLE (Interactive Stepper)
        =======================================================================
      */}
      <section id="rams-lifecycle" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold font-mono text-sky-600 uppercase tracking-widest">
              {lang === "hi" ? "RAMS गुणवत्ता सत्यापन" : "RELIABILITY, AVAILABILITY, MAINTAINABILITY & SAFETY"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              {lang === "hi" ? "4-चरणीय सुरक्षा जीवनचक्र सत्यापन पाइपलाइन" : "4-Stage Lifecycle Safety Verification Pipeline"}
            </h2>
          </div>

          {/* 4 Steps Interactive Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {data.lifecycleSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                  activeStep === idx
                    ? "bg-sky-50/90 border-sky-500 shadow-md text-slate-900 ring-2 ring-sky-400/20"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
                    activeStep === idx ? "bg-sky-600 text-white" : "bg-slate-200 text-slate-700"
                  }`}>
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">STAGE {idx + 1}</span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                  {lang === "hi" ? step.titleHi : step.titleEn}
                </h3>
                <p className="text-[11px] text-slate-600 leading-normal">
                  {lang === "hi" ? step.descHi : step.descEn}
                </p>
              </button>
            ))}
          </div>

          {/* Active Step Deep-Dive Card */}
          <div className="p-8 rounded-3xl bg-white text-slate-900 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div>
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wide">
                  STAGE {data.lifecycleSteps[activeStep].step} VERIFICATION PROTOCOL
                </span>
                <h4 className="text-xl font-bold text-slate-900 mt-1">
                  {lang === "hi" ? data.lifecycleSteps[activeStep].titleHi : data.lifecycleSteps[activeStep].titleEn}
                </h4>
              </div>
              <span className="px-3 py-1 rounded bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold">
                CENELEC EN 50126
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-slate-500 font-medium mb-1">FAILURE RATE TARGET</div>
                <div className="text-lg font-bold text-emerald-700">&lt; 10⁻⁷ / hr</div>
                <div className="text-[10px] text-slate-500 mt-1">SIL-2 Safety Requirement</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-slate-500 font-medium mb-1">THERMAL STRESS SCREENING</div>
                <div className="text-lg font-bold text-sky-700">-25°C to +70°C</div>
                <div className="text-[10px] text-slate-500 mt-1">72-Hour Burn-In Chamber</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-slate-500 font-medium mb-1">AUDIT CERTIFICATION</div>
                <div className="text-lg font-bold text-slate-900">100% Traceable</div>
                <div className="text-[10px] text-slate-500 mt-1">Stamped Factory Records</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 3: ARCHITECTURE COMPARISON MATRIX (Conventional vs GLOBAL)
        =======================================================================
      */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold font-mono text-sky-600 uppercase tracking-widest">
              {lang === "hi" ? "तकनीकी तुलना" : "COMPARATIVE ENGINEERING"}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              {lang === "hi" ? "पारंपरिक सिस्टम बनाम ग्लोबल डिजिटल आर्किटेक्चर" : "Conventional Systems vs. GLOBAL Digital Safety Architecture"}
            </h3>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                <tr>
                  <th className="p-4 sm:p-5">Engineering Dimension</th>
                  <th className="p-4 sm:p-5 text-slate-500">Conventional Equipment</th>
                  <th className="p-4 sm:p-5 text-sky-800 bg-sky-50/50">GLOBAL Advanced Architecture</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Total Blackout Response</td>
                  <td className="p-4 sm:p-5 text-slate-500">Stalls midway in unsafe state</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-700 bg-sky-50/30">100% Passive Gravity Safe Lock</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">VFD & Inverter Noise</td>
                  <td className="p-4 sm:p-5 text-slate-500">Frequent false/nuisance trips</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-700 bg-sky-50/30">32-Bit DSP Harmonic Filtration</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Remote SCADA Telemetry</td>
                  <td className="p-4 sm:p-5 text-slate-500">Isolated black-box dial relay</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-700 bg-sky-50/30">Native Isolated Modbus-RTU RS-485</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Enclosure Integrity</td>
                  <td className="p-4 sm:p-5 text-slate-500">1.2mm sheet metal, basic paint</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-700 bg-sky-50/30">2.5mm CRCA Steel IP66 / IK10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        BANNER 2 (FULL-WIDTH): ACCREDITED LABORATORY & FIELD DEPLOYMENT
        =======================================================================
      */}
      <section className="relative w-full my-12 sm:my-16 bg-slate-100 border-y border-slate-200 overflow-hidden">
        <div className="relative h-[280px] sm:h-[400px] lg:h-[480px] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.fieldBannerImage}
            alt={lang === "hi" ? `${data.subCategoryTitleHi} फील्ड प्रमाणन` : `${data.subCategoryTitleEn} Field Accreditation`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white border-t border-slate-200 py-3.5 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600 font-mono">
            <div className="flex items-center space-x-2 font-bold text-slate-900">
              <span className="w-2 h-2 rounded-full bg-sky-600 inline-block" />
              <span>{lang === "hi" ? `${data.subCategoryTitleHi} - प्रयोगशाला सत्यापन` : `${data.subCategoryTitleEn} • Laboratory Verification`}</span>
            </div>
            <div className="flex items-center space-x-4 text-[11px] text-slate-500">
              <span>SIL-2 FUNCTIONAL SAFETY</span>
              <span>•</span>
              <span>ISO 9001:2015 AUDITED FACILITY</span>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 4: COMPLIANCE VAULT
        =======================================================================
      */}
      <section id="compliance-vault" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold font-mono text-sky-600 uppercase tracking-widest">
              {lang === "hi" ? "अंतरराष्ट्रीय मानक" : "INTERNATIONAL CERTIFICATIONS"}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              {lang === "hi" ? "प्रमाणित मानक एवं अनुपालन सूची" : "Compliance & Certification Matrix"}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {data.complianceList.map((comp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-sky-300 transition-all">
                <span className="text-xs font-mono font-bold text-sky-800">{comp}</span>
                <div className="text-[10px] text-emerald-600 font-bold mt-1 font-mono">VERIFIED COMPLIANT</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 5: BESPOKE FACTORY AUDIT & TOUR SCHEDULER (NO REPEATED FORM)
        =======================================================================
      */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-slate-100 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Instant Dossier Access */}
              <div className="lg:col-span-7">
                <div className="text-xs font-bold font-mono text-sky-700 uppercase tracking-wider mb-2">
                  {lang === "hi" ? "आधिकारिक प्रमाणन" : "FACTORY AUDIT & DOSSIER"}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {lang === "hi" ? "SIL-2 अनुपालन दस्तावेज़ प्राप्त करें" : "Download Official SIL-2 Certification Dossier"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {lang === "hi"
                    ? "टेंडर सबमिशन के लिए क्लॉज-दर-क्लॉज अनुपालन विवरण और स्वतंत्र परीक्षण रिपोर्ट डाउनलोड करें।"
                    : "Includes complete clause-by-clause compliance statements, failure mode hazard analyses, and third-party laboratory test certificates."}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      setDossierDownloaded(true);
                      setTimeout(() => setDossierDownloaded(false), 3500);
                    }}
                    className="px-6 py-3 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md shadow-sky-500/20 cursor-pointer flex items-center space-x-2"
                  >
                    <span>{lang === "hi" ? "SIL-2 डोजियर डाउनलोड करें (PDF)" : "Download Compliance Dossier (PDF)"}</span>
                    <span className="font-mono">↓</span>
                  </button>
                  <a
                    href="mailto:quality@global-safety.com"
                    className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold tracking-wide transition-all"
                  >
                    {lang === "hi" ? "ऑडिट टीम से संपर्क" : "Quality Audit Desk"}
                  </a>
                </div>

                {dossierDownloaded && (
                  <div className="mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center space-x-2">
                    <span className="font-bold text-emerald-700 font-mono">[CONFIRMED]</span>
                    <span>Dossier package download initiated (GL-SIL2-COMPLIANCE-2026.pdf).</span>
                  </div>
                )}
              </div>

              {/* Right Column: Virtual Lab Tour Booking */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm text-slate-900">
                <span className="text-[10px] font-bold text-sky-700 uppercase tracking-widest">
                  LIVE LAB INTERACTION
                </span>
                <h4 className="text-lg font-bold text-slate-900 mt-1">
                  Schedule Virtual Factory & Testing Lab Tour
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Join a 20-minute live video walkthrough with our senior test engineers observing real burn-in and surge testing.
                </p>

                <div className="mt-4 space-y-3">
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option>Next Tuesday, 10:30 AM</option>
                    <option>Next Wednesday, 02:00 PM</option>
                    <option>Next Thursday, 11:00 AM</option>
                  </select>

                  <button
                    onClick={() => {
                      setTourBooked(true);
                      setTimeout(() => setTourBooked(false), 4000);
                    }}
                    className="w-full py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold transition-all cursor-pointer shadow-sm"
                  >
                    {tourBooked ? "Tour Reservation Confirmed" : "Confirm Lab Walkthrough"}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. Related Sublinks Navigation */}
      {data.relatedSublinks && data.relatedSublinks.length > 0 && (
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              {lang === "hi" ? "संबंधित क्षमताएं" : "Explore Related Engineering Disciplines"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.relatedSublinks.map((sub, i) => (
                <Link
                  key={i}
                  href={sub.href}
                  className="p-4 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-300 transition-all flex items-center justify-between group"
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

export default function CapabilitySubpage({ data }: { data: CapabilitySubpageProps }) {
  return (
    <LanguageProvider>
      <CapabilityContent data={data} />
    </LanguageProvider>
  );
}

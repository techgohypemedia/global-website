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
            src={data.bannerImage}
            alt={data.subCategoryTitleEn}
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
              <span>{lang === "hi" ? data.badgeHi : data.badgeEn}</span>
              <span className="text-white/40">•</span>
              <span className="text-gray-300">{lang === "hi" ? data.subCategoryTitleHi : data.subCategoryTitleEn}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight mb-5 font-sans">
              {lang === "hi" ? data.heroHeadlineHi : data.heroHeadlineEn}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-8 max-w-2xl">
              {lang === "hi" ? data.heroSubtitleHi : data.heroSubtitleEn}
            </p>

            {/* CTA Toolbar */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#rams-lifecycle"
                className="px-7 py-3.5 bg-[#ff3131] hover:bg-[#e02626] text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-lg hover:shadow-[#ff3131]/30 flex items-center space-x-2 group hover:-translate-y-0.5"
              >
                <span>{lang === "hi" ? "4-चरणीय सत्यापन पाइपलाइन" : "Explore 4-Stage RAMS Pipeline"}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#compliance-vault"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white text-white text-xs sm:text-sm font-medium tracking-wide backdrop-blur-sm transition-all flex items-center space-x-2 hover:-translate-y-0.5"
              >
                <span className="text-[11px] font-bold text-[#ff3131]">SIL-2</span>
                <span>{lang === "hi" ? "SIL-2 अनुपालन प्रमाणपत्र" : "SIL-2 Compliance Matrix"}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Key Metrics Strip (matching AtAGlance on homepage) */}
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
        SECTION 1: ENGINEERING EXCELLENCE & PILLARS (Clean Homepage Style)
        =======================================================================
      */}
      <section className="w-full bg-white text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>{lang === "hi" ? "गुणवत्ता ढांचा" : "ENGINEERING RIGOR"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#1e293b] font-sans mb-5">
              {lang === "hi" ? data.deepDiveTitleHi : data.deepDiveTitleEn}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              {lang === "hi"
                ? "शून्य-दोष निर्माण और 100% फैक्ट्री स्ट्रेस टेस्टिंग। अंतरराष्ट्रीय रेलवे और भारी औद्योगिक मानकों के अनुसार सत्यापित।"
                : "Zero-defect manufacturing protocols, 100% component traceability, and rigorous environmental burn-in testing across all production batches."}
            </p>
            <p className="text-sm sm:text-base font-medium text-[#ff3131]">
              {lang === "hi" ? "CENELEC EN 50126 एवं SIL-2 अनुरूपता।" : "Certified to CENELEC EN 50126 RAMS Standards."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Deep Dive Text & Feature Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                {(lang === "hi" ? data.deepDiveParasHi : data.deepDiveParasEn).map((p, idx) => (
                  <div key={idx} className="p-5 sm:p-6 bg-[#f8f9fa] border-l-2 border-[#ff3131] text-gray-700 text-sm sm:text-base leading-relaxed">
                    {p}
                  </div>
                ))}
              </div>

              {/* 3 Pillars Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {data.pillars.map((p, i) => (
                  <div
                    key={i}
                    className="p-5 bg-[#f8f9fa] border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#ff3131]/60 transition-all duration-300"
                  >
                    <span className="inline-block px-2 py-0.5 bg-red-50 text-[#ff3131] border border-red-100 text-[10px] font-semibold uppercase tracking-wider mb-3">
                      {p.badge}
                    </span>
                    <h4 className="text-sm font-semibold text-[#1e293b] mb-2 font-sans">
                      {lang === "hi" ? p.titleHi : p.titleEn}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {lang === "hi" ? p.descHi : p.descEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Visual Schematic Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#f8f9fa] border border-gray-200/90 shadow-md p-6 sm:p-7 hover:border-gray-300 transition-all">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-xs font-semibold text-[#1e293b] tracking-wider uppercase font-sans">
                    {lang === "hi" ? "मानकीकरण अवसंरचना" : "Accredited Testing Facility"}
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 bg-red-50 text-[#ff3131] font-medium border border-red-200">
                    ISO 9001:2015
                  </span>
                </div>
                
                <div className="relative my-4 h-52 overflow-hidden border border-gray-200 bg-neutral-900 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={data.secondaryBannerImage}
                    alt="Testing Facility"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>

                <div className="divide-y divide-gray-200 text-xs sm:text-sm">
                  <div className="flex justify-between py-3">
                    <span className="text-gray-500 font-medium">Burn-In Validation:</span>
                    <span className="text-[#ff3131] font-semibold">100% Units 72-Hour Run</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-500 font-medium">Traceability Standard:</span>
                    <span className="text-gray-900 font-medium">Component Serial Tracked</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-500 font-medium">Testing Standards:</span>
                    <span className="text-gray-900 font-medium">EN 50126, IEC 60947</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 2: 4-STAGE RAMS PIPELINE (Workstation Stepper Style)
        =======================================================================
      */}
      <section id="rams-lifecycle" className="w-full bg-[#f8f9fa] text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>{lang === "hi" ? "सत्यापन पाइपलाइन" : "RAMS SAFETY LIFECYCLE"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#1e293b] font-sans mb-5">
              {lang === "hi" ? "4-चरणीय सुरक्षा जीवनचक्र सत्यापन पाइपलाइन" : "4-Stage Lifecycle Safety Verification Pipeline"}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              {lang === "hi"
                ? "डिजाइन आर्किटेक्चर से लेकर फील्ड कमीशनिंग तक, प्रत्येक चरण CENELEC EN 50126 RAMS सिद्धांतों का पालन करता है।"
                : "From baseline schematic validation to continuous field telemetry, every product adheres to strict CENELEC RAMS principles."}
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {data.lifecycleSteps.map((st, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-5 text-left border transition-all cursor-pointer shadow-sm ${
                  activeStep === idx
                    ? "bg-white border-[#ff3131] shadow-md border-t-4 border-t-[#ff3131]"
                    : "bg-[#f8f9fa] border-gray-200 hover:bg-white"
                }`}
              >
                <div className="text-xs font-semibold text-[#ff3131] mb-1">
                  STAGE {st.step}
                </div>
                <div className="text-sm font-semibold text-[#1e293b] font-sans">
                  {lang === "hi" ? st.titleHi : st.titleEn}
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Showcase */}
          <div className="bg-white border border-gray-200 p-8 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-50 text-[#ff3131] border border-red-200 text-xs font-semibold">
                STAGE {data.lifecycleSteps[activeStep].step}
              </span>
              <h3 className="text-xl font-normal text-[#1e293b] font-sans">
                {lang === "hi" ? data.lifecycleSteps[activeStep].titleHi : data.lifecycleSteps[activeStep].titleEn}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-4xl">
              {lang === "hi" ? data.lifecycleSteps[activeStep].descHi : data.lifecycleSteps[activeStep].descEn}
            </p>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 3: HARDWARE TESTING GALLERY (DiscoverAramco Style)
        =======================================================================
      */}
      <section className="w-full bg-white text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>{lang === "hi" ? "सत्यापित अवसंरचना" : "VALIDATION INFRASTRUCTURE"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#1e293b] font-sans mb-5">
              {lang === "hi" ? "प्रमाणित इंजीनियरिंग अवसंरचना" : "Accredited Hardware & Validation Equipment"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Signalling & Relay Chamber",
                category: "SIGNAL INTEGRITY",
                image: "/images/signalling_relay_room.jpg",
                desc: "Direct interconnect verification under simulated heavy railway line load."
              },
              {
                title: "Microprocessor Calibration Bench",
                category: "DIAGNOSTIC RIGOR",
                image: "/images/eld_engineering_lab.jpg",
                desc: "Multi-channel signal analysis for precise earth fault threshold limits."
              },
              {
                title: "Electromechanical Counterweight Rig",
                category: "KINETIC RELIABILITY",
                image: "/images/fail_safe_boom.jpg",
                desc: "Continuous 5,000,000 cycle stress testing with zero maintenance downtime."
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 4: COMPLIANCE VAULT & DIRECT ACCESS
        =======================================================================
      */}
      <section id="compliance-vault" className="w-full bg-[#f8f9fa] text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-7 bg-white border border-gray-200 p-8 sm:p-10 shadow-md flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-[#ff3131] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-[#ff3131]" />
                  <span>COMPLIANCE VAULT</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-normal text-[#1e293b] font-sans mt-2">
                  {lang === "hi" ? "प्रमाणन एवं परीक्षण रिपोर्ट" : "Certificates & Type Test Reports"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  {lang === "hi"
                    ? "SIL-2, CENELEC EN 50126 और RDSO अनुरूपता प्रमाण पत्र तुरंत डाउनलोड करें।"
                    : "Direct access to third-party lab certificates, type test dossiers, and ISO quality management statements."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  {data.complianceList.map((c, i) => (
                    <div key={i} className="p-3.5 bg-[#f8f9fa] border border-gray-200 text-xs font-medium text-gray-800 flex items-center gap-2">
                      <span className="text-[#ff3131] font-bold">✓</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => {
                      setDossierDownloaded(true);
                      setTimeout(() => setDossierDownloaded(false), 3500);
                    }}
                    className="px-6 py-3 bg-[#ff3131] hover:bg-[#e02626] text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-sm"
                  >
                    <span>{lang === "hi" ? "पूर्ण अनुपालन डोजियर डाउनलोड करें (PDF)" : "Download Full Compliance Dossier (PDF)"}</span>
                  </button>
                  {dossierDownloaded && (
                    <div className="mt-3 text-xs text-emerald-700 font-medium">
                      ✓ Dossier download initiated.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Desk Card */}
            <div className="lg:col-span-5 bg-[#1e293b] text-white p-8 sm:p-10 shadow-xl flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-semibold text-[#ff3131] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-5 h-[2px] bg-[#ff3131]" />
                  <span>QUALITY AUDIT & VISITS</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-light text-white font-sans mt-2">
                  {lang === "hi" ? "फैक्ट्री क्वालिटी ऑडिट शेड्यूल करें" : "Schedule Factory QA Audit"}
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed font-light">
                  {lang === "hi"
                    ? "हमारे मुख्य विनिर्माण संयंत्र में प्रत्यक्ष गुणवत्ता और प्रक्रिया ऑडिट का समन्वय करें।"
                    : "Arrange on-site quality assurance audits and component witnessing with our Chief Quality Officer."}
                </p>

                <div className="mt-8 space-y-3">
                  <a
                    href="/contact/engineering-team"
                    className="w-full py-3.5 px-4 bg-[#ff3131] hover:bg-[#e02626] text-white text-xs sm:text-sm font-medium flex items-center justify-between transition-all shadow-lg"
                  >
                    <span>REQUEST ON-SITE AUDIT</span>
                    <span>→</span>
                  </a>
                  <a
                    href="mailto:quality@global-safety.com"
                    className="w-full py-3.5 px-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-medium flex items-center justify-between transition-all"
                  >
                    <span>EMAIL: quality@global-safety.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Modules */}
      {data.relatedSublinks && data.relatedSublinks.length > 0 && (
        <section className="w-full bg-white text-gray-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xs font-semibold text-[#ff3131] uppercase tracking-widest mb-6">
              {lang === "hi" ? "संबंधित क्षमताएं" : "Explore Related Engineering Capabilities"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.relatedSublinks.map((sub, i) => (
                <Link
                  key={i}
                  href={sub.href}
                  className="p-6 bg-[#f8f9fa] hover:bg-white border border-gray-200 hover:border-[#ff3131]/60 shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
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

export default function CapabilitySubpage({ data }: { data: CapabilitySubpageProps }) {
  return (
    <LanguageProvider>
      <CapabilityContent data={data} />
    </LanguageProvider>
  );
}

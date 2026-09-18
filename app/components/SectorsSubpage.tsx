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
                href="#hazard-matrix"
                className="px-7 py-3.5 bg-[#ff3131] hover:bg-[#e02626] text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-lg hover:shadow-[#ff3131]/30 flex items-center space-x-2 group hover:-translate-y-0.5"
              >
                <span>{lang === "hi" ? "खतरा शमन इंटरएक्टिव ग्रिड" : "Interactive Hazard Matrix"}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#case-studies"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white text-white text-xs sm:text-sm font-medium tracking-wide backdrop-blur-sm transition-all flex items-center space-x-2 hover:-translate-y-0.5"
              >
                <span>{lang === "hi" ? "फील्ड केस स्टडीज देखें" : "View Field Deployments"}</span>
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
        SECTION 1: SECTOR OPERATIONAL CONTEXT & NARRATIVE
        =======================================================================
      */}
      <section className="w-full bg-white text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>{lang === "hi" ? "क्षेत्र संचालन ढांचा" : "SECTOR OPERATIONS"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#1e293b] font-sans mb-5">
              {lang === "hi" ? data.deepDiveTitleHi : data.deepDiveTitleEn}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              {lang === "hi"
                ? "भारी रेल नेटवर्क, पावर ग्रिड और औद्योगिक निर्माण संयंत्रों के लिए लक्षित सुरक्षा बुनियादी ढांचा।"
                : "Targeted safety infrastructure specifically engineered for railway corridors, utilities, and continuous process plants."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-4">
              {(lang === "hi" ? data.deepDiveParasHi : data.deepDiveParasEn).map((p, idx) => (
                <div key={idx} className="p-5 sm:p-6 bg-[#f8f9fa] border-l-2 border-[#ff3131] text-gray-700 text-sm sm:text-base leading-relaxed">
                  {p}
                </div>
              ))}
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#f8f9fa] border border-gray-200/90 shadow-md p-6 sm:p-7 hover:border-gray-300 transition-all">
                <div className="relative h-56 overflow-hidden border border-gray-200 bg-neutral-900 group mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={data.secondaryBannerImage}
                    alt={data.subCategoryTitleEn}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
                <h4 className="text-base font-semibold text-[#1e293b] font-sans">
                  {lang === "hi" ? "क्षेत्रीय इंजीनियरिंग सहायता" : "Dedicated Sector Specialists"}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  {lang === "hi"
                    ? "हमारे सेक्टर इंजीनियर साइट सर्वेक्षण और टेंडर अनुपालन में आपकी सहायता के लिए उपलब्ध हैं।"
                    : "Direct consultation with sector engineering leads to verify signaling interlocks, panel sizing, and power grid protection."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 2: INTERACTIVE HAZARD MITIGATION MATRIX
        =======================================================================
      */}
      <section id="hazard-matrix" className="w-full bg-[#f8f9fa] text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>{lang === "hi" ? "जोखिम शमन" : "HAZARD MITIGATION MATRIX"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#1e293b] font-sans mb-5">
              {lang === "hi" ? "परिचालन जोखिम एवं इंजीनियरिंग समाधान" : "Operational Risks & Engineered Mitigations"}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 space-y-3">
              {data.riskMitigations.map((rm, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedRiskIdx(idx)}
                  className={`w-full p-5 text-left border transition-all cursor-pointer shadow-sm ${
                    selectedRiskIdx === idx
                      ? "bg-white border-[#ff3131] shadow-md border-l-4 border-l-[#ff3131]"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="text-xs font-semibold text-[#ff3131] mb-1">HAZARD #{idx + 1}</div>
                  <div className="text-sm font-semibold text-[#1e293b] font-sans">
                    {lang === "hi" ? rm.titleHi : rm.titleEn}
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 bg-white p-8 border border-gray-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                  <h3 className="text-lg font-medium text-[#1e293b] font-sans">
                    {lang === "hi" ? data.riskMitigations[selectedRiskIdx].titleHi : data.riskMitigations[selectedRiskIdx].titleEn}
                  </h3>
                  <span className="px-2.5 py-0.5 bg-red-50 text-[#ff3131] text-xs font-semibold border border-red-200">
                    MITIGATED
                  </span>
                </div>

                <div className="space-y-6">
                  <div className="p-4 bg-red-50/50 border border-red-100">
                    <div className="text-xs font-semibold text-[#ff3131] uppercase mb-1">IDENTIFIED OPERATIONAL RISK</div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {lang === "hi" ? data.riskMitigations[selectedRiskIdx].riskHi : data.riskMitigations[selectedRiskIdx].riskEn}
                    </p>
                  </div>

                  <div className="p-4 bg-emerald-50/50 border border-emerald-100">
                    <div className="text-xs font-semibold text-emerald-700 uppercase mb-1">ENGINEERED GLOBAL SOLUTION</div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {lang === "hi" ? data.riskMitigations[selectedRiskIdx].solutionHi : data.riskMitigations[selectedRiskIdx].solutionEn}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-6 flex justify-end">
                <a
                  href="/contact/engineering-team"
                  className="px-5 py-2.5 bg-[#ff3131] hover:bg-[#e02626] text-white text-xs font-medium tracking-wide transition-all shadow-sm"
                >
                  {lang === "hi" ? "साइट शमन योजना अनुरोध करें" : "Request Site Mitigation Plan"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 3: CASE STUDIES (DiscoverAramco Cards)
        =======================================================================
      */}
      <section id="case-studies" className="w-full bg-white text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>{lang === "hi" ? "फील्ड परिणाम" : "DEPLOYED CASE STUDIES"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#1e293b] font-sans mb-5">
              {lang === "hi" ? "प्रमुख इंफ्रास्ट्रक्चर प्रोजेक्ट्स" : "Demonstrated Field Performance"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {data.caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-[#f8f9fa] border border-gray-200 hover:border-[#ff3131]/60 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 bg-red-50 text-[#ff3131] border border-red-200 text-[10px] font-semibold uppercase tracking-wider mb-3">
                    {cs.tag}
                  </span>
                  <h3 className="text-lg font-medium text-[#1e293b] mb-1 font-sans">
                    {lang === "hi" ? cs.titleHi : cs.titleEn}
                  </h3>
                  <div className="text-xs text-gray-500 font-medium mb-3">
                    {lang === "hi" ? cs.locationHi : cs.locationEn}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {lang === "hi" ? cs.outcomeHi : cs.outcomeEn}
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-gray-200 flex items-center justify-between text-xs font-medium text-[#ff3131]">
                  <span>Verified Operation</span>
                  <span>✓</span>
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
              {lang === "hi" ? "संबंधित क्षेत्र" : "Explore Related Infrastructure Sectors"}
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

export default function SectorsSubpage({ data }: { data: SectorsSubpageProps }) {
  return (
    <LanguageProvider>
      <SectorsContent data={data} />
    </LanguageProvider>
  );
}

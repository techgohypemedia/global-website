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

  const filteredDocs = data.documents.filter((doc) => {
    const matchesSearch = doc.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) || doc.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === "ALL" || doc.category === activeCategory;
    return matchesSearch && matchesCat;
  });

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
                href="#document-library"
                className="px-7 py-3.5 bg-[#ff3131] hover:bg-[#e02626] text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-lg hover:shadow-[#ff3131]/30 flex items-center space-x-2 group hover:-translate-y-0.5"
              >
                <span>{lang === "hi" ? "दस्तावेज़ संग्रह देखें" : "Explore Technical Library"}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#faqs-section"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white text-white text-xs sm:text-sm font-medium tracking-wide backdrop-blur-sm transition-all flex items-center space-x-2 hover:-translate-y-0.5"
              >
                <span>{lang === "hi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}</span>
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
        SECTION 1: DOCUMENTATION HUB & REPOSITORY
        =======================================================================
      */}
      <section id="document-library" className="w-full bg-white text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>{lang === "hi" ? "दस्तावेज़ पुस्तकालय" : "DOCUMENTATION REPOSITORY"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#1e293b] font-sans mb-5">
              {lang === "hi" ? data.deepDiveTitleHi : data.deepDiveTitleEn}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              {lang === "hi"
                ? "इंजीनियरिंग डेटाशीट, वायरिंग स्कीमेटिक्स, कैड ड्राइंग्स और सर्टिफिकेशन फाइलों का केंद्रीय संग्रह।"
                : "Instant access to verified engineering datasheets, wiring schematics, CAD layouts, and type-test reports."}
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-[#f8f9fa] border border-gray-200 p-4 sm:p-6 mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <input
              type="text"
              placeholder={lang === "hi" ? "दस्तावेज़ या कोड खोजें..." : "Search by title, code, or keyword..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-96 px-4 py-2.5 bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#ff3131]"
            />
            <div className="flex gap-2">
              {["ALL", "DATASHEET", "MANUAL", "DRAWING"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? "bg-[#ff3131] text-white"
                      : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Document Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocs.map((doc, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#f8f9fa] border border-gray-200 hover:border-[#ff3131]/60 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-semibold text-[#ff3131] bg-red-50 px-2 py-0.5 border border-red-200">
                      {doc.format} • {doc.size}
                    </span>
                    <span className="text-xs font-mono text-gray-500">{doc.code}</span>
                  </div>
                  <h3 className="text-base font-semibold text-[#1e293b] mb-2 font-sans">
                    {lang === "hi" ? doc.titleHi : doc.titleEn}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {lang === "hi" ? doc.descHi : doc.descEn}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200 flex justify-end">
                  <button
                    onClick={() => {
                      setDownloadNotice(doc.code);
                      setTimeout(() => setDownloadNotice(null), 3000);
                    }}
                    className="px-4 py-2 bg-[#ff3131] hover:bg-[#e02626] text-white text-xs font-medium transition-all shadow-xs flex items-center gap-1.5"
                  >
                    <span>Download</span>
                    <span>↓</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {downloadNotice && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 text-[#ff3131] text-xs font-medium text-center">
              ✓ Document package {downloadNotice} download initiated.
            </div>
          )}
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 2: FAQS
        =======================================================================
      */}
      {data.faqs && data.faqs.length > 0 && (
        <section id="faqs-section" className="w-full bg-[#f8f9fa] text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-3">
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#1e293b] font-sans">
                {lang === "hi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Engineering Questions"}
              </h2>
            </div>

            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 bg-white border border-gray-200 shadow-sm">
                  <h3 className="text-base font-semibold text-[#1e293b] mb-2 font-sans">
                    {lang === "hi" ? faq.questionHi : faq.questionEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {lang === "hi" ? faq.answerHi : faq.answerEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Modules */}
      {data.relatedSublinks && data.relatedSublinks.length > 0 && (
        <section className="w-full bg-white text-gray-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xs font-semibold text-[#ff3131] uppercase tracking-widest mb-6">
              {lang === "hi" ? "संबंधित संसाधन" : "Explore Related Engineering Resources"}
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

export default function SupportSubpage({ data }: { data: SupportSubpageProps }) {
  return (
    <LanguageProvider>
      <SupportContent data={data} />
    </LanguageProvider>
  );
}

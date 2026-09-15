"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function EnvironmentalProtection() {
  const { lang, t } = useLanguage();

  const PILLARS = [
    {
      id: "fail-safe-thinking",
      title: lang === "hi" ? "फेल-सेफ सोच" : "Fail-Safe Thinking",
      subtitle: lang === "hi" ? "पूर्वानुमेय संचालन" : "Predictable Operation",
      description:
        lang === "hi"
          ? "असामान्य परिस्थितियों और आपातकाल के दौरान पूर्वानुमेय संचालन के लिए डिज़ाइन की गई प्रणालियां।"
          : "Systems designed around predictable operation during abnormal conditions and emergency situations.",
      image: "/images/boom_barrier_railway.jpg",
      fallbackImage: "/images/crash_barrier_perimeter.jpg",
      link: "#fail-safe",
    },
    {
      id: "robust-construction",
      title: lang === "hi" ? "मजबूत निर्माण" : "Robust Construction",
      subtitle: lang === "hi" ? "कठिन पर्यावरण अनुकूल" : "Demanding Environments",
      description:
        lang === "hi"
          ? "कठिन बाहरी रेलवे और बुनियादी ढांचे के वातावरण के लिए इंजीनियर किए गए टिकाऊ उत्पाद।"
          : "Products engineered for demanding outdoor railway and infrastructure environments.",
      image: "/images/boom_barrier_hero.jpg",
      fallbackImage: "/images/boom_barrier_original.png",
      link: "#robust-construction",
    },
    {
      id: "clear-diagnostics",
      title: lang === "hi" ? "स्पष्ट डायग्नोस्टिक्स एवं एकीकरण" : "Clear Diagnostics & Integration",
      subtitle: lang === "hi" ? "अनुकूल रखरखाव" : "Maintainable by Design",
      description:
        lang === "hi"
          ? "समझने में आसान डिजिटल डिस्प्ले और संगत नियंत्रण वास्तुकला जो समस्या निवारण और नियमित रखरखाव को सरल बनाती है।"
          : "Easy-to-understand indications and compatible railway, electrical and control architecture designed to support faster troubleshooting.",
      image: "/images/earth_leakage_detector_hero.jpg",
      fallbackImage: "/images/eld_engineering_lab.jpg",
      link: "#clear-diagnostics",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100" id="engineering">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <span className="block text-xs sm:text-sm font-semibold tracking-widest text-[#ff3131] uppercase mb-3">
              {lang === "hi" ? "फ़ील्ड के लिए इंजीनियरिंग" : "ENGINEERING FOR THE FIELD"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1e293b] leading-tight mb-4 font-sans">
              {lang === "hi"
                ? "ड्राइंग बोर्ड से परे प्रदर्शन के लिए डिज़ाइन।"
                : "Designed to perform beyond the drawing board."}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {lang === "hi"
                ? "महत्वपूर्ण बुनियादी ढांचे के उपकरणों को नियंत्रित प्रयोगशाला स्थितियों से बाहर विश्वसनीय रूप से काम करना चाहिए। ग्लोबल उत्पाद पर्यावरणीय जोखिम, बार-बार यांत्रिक संचालन, विद्युत भिन्नता, रखरखाव पहुंच और सिस्टम एकीकरण की वास्तविक आवश्यकताओं के आधार पर विकसित किए जाते हैं।"
                : "Critical infrastructure equipment must operate reliably outside controlled laboratory conditions. GLOBAL products are developed around real operating requirements including environmental exposure, repeated mechanical operation, electrical variation, maintenance accessibility and system integration."}
            </p>
          </div>

          <a
            href="#contact-engineering"
            className="inline-flex items-center space-x-3 text-red-600 hover:text-red-700 font-medium text-sm sm:text-base group cursor-pointer self-start lg:self-end"
          >
            <span className="group-hover:underline font-semibold">
              {lang === "hi" ? "इंजीनियरिंग टीम से संपर्क करें" : "Contact Engineering"}
            </span>
            <span className="w-10 h-10 rounded-full border-2 border-red-600 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {PILLARS.map((pillar) => (
            <div key={pillar.id} className="flex flex-col justify-between group cursor-pointer">
              
              <div>
                <div className="w-full h-[220px] sm:h-[250px] rounded-none overflow-hidden bg-gray-100 shadow-md transition-all duration-300 group-hover:shadow-xl relative mb-5 border border-gray-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== pillar.fallbackImage) {
                        target.src = pillar.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
                </div>

                <h3 className="text-xl font-medium text-[#1e293b] group-hover:text-red-600 transition-colors mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5">
                <a
                  href={pillar.link}
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-red-600 hover:text-red-700 group-hover:translate-x-1 transition-transform"
                >
                  <span className="text-red-600 font-bold">→</span>
                  <span className="hover:underline">{t.environmental.readMore}</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function CaseStudyMaterials() {
  const { lang, t } = useLanguage();

  return (
    <section className="w-full bg-white text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Side: Advanced Materials Composite Pipes Image */}
          <div className="lg:col-span-6 group cursor-pointer">
            <div className="w-full h-[320px] sm:h-[400px] rounded-none overflow-hidden bg-gray-100 shadow-lg transition-all duration-300 group-hover:shadow-2xl relative border border-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/boom_barrier_railway.jpg"
                alt={t.caseStudy.title}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = "/images/eld_engineering_lab.jpg";
                }}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Side: Why GLOBAL Content & Points */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#ff3131] uppercase mb-3 block">
              {lang === "hi" ? "ग्लोबल क्यों" : "WHY GLOBAL"}
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1e293b] leading-snug mb-5 font-sans">
              {lang === "hi"
                ? "सुरक्षा तकनीक को तब काम करना चाहिए जब इसकी सबसे ज्यादा जरूरत हो।"
                : "Safety technology should work when it is needed most."}
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              {lang === "hi"
                ? "हमारा मानना है कि महत्वपूर्ण बुनियादी ढांचा उत्पादों को अनावश्यक जटिलता के बजाय वास्तविक परिचालन आवश्यकताओं के आधार पर इंजीनियर किया जाना चाहिए।"
                : "We believe critical infrastructure products should be engineered around real operational requirements instead of unnecessary complexity."}
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
              {lang === "hi"
                ? "हमारा दृष्टिकोण व्यावहारिक डिज़ाइन, केंद्रित इंजीनियरिंग और अनुप्रयोग-विशिष्ट कॉन्फ़िगरेशन को जोड़ता है।"
                : "Our approach combines practical design, focused engineering and application-specific configuration."}
            </p>

            {/* 5 Why GLOBAL Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                { en: "Focused Product Expertise", hi: "केंद्रित उत्पाद विशेषज्ञता" },
                { en: "Application-Oriented Engineering", hi: "अनुप्रयोग-उन्मुख इंजीनियरिंग" },
                { en: "Practical Maintenance", hi: "व्यावहारिक रखरखाव" },
                { en: "Infrastructure Mindset", hi: "बुनियादी ढांचा मानसिकता" },
                { en: "Engineering Support", hi: "प्रत्यक्ष इंजीनियरिंग सहायता" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-gray-50 border border-gray-200"
                >
                  <span className="w-5 h-5 rounded-full bg-red-100 text-[#ff3131] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-gray-800">
                    {lang === "hi" ? item.hi : item.en}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <a
                href="#contact-engineering"
                className="inline-flex items-center space-x-3 text-red-600 hover:text-red-700 font-medium text-sm sm:text-base group cursor-pointer"
              >
                <span className="group-hover:underline font-semibold">
                  {lang === "hi" ? "इंजीनियरिंग टीम से बात करें" : "Talk to Our Engineering Team"}
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
          </div>

        </div>
      </div>
    </section>
  );
}

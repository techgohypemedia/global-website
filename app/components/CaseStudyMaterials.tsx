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
            <div className="w-full h-[320px] sm:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 shadow-lg transition-all duration-300 group-hover:shadow-2xl relative">
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

          {/* Right Side: Case Study Content & CTA Link */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1e293b] leading-snug mb-6 font-sans">
              <span className="font-semibold uppercase tracking-wide">{t.caseStudy.badge}</span>{" "}
              {t.caseStudy.title}
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
              {t.caseStudy.p1}
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
              {t.caseStudy.p2}
            </p>

            <div>
              <a
                href="#case-study"
                className="inline-flex items-center space-x-3 text-red-600 hover:text-red-700 font-medium text-sm sm:text-base group cursor-pointer"
              >
                <span className="group-hover:underline font-semibold">{t.caseStudy.cta}</span>
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

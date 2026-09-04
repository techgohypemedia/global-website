"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ElementsMagazine() {
  const { t } = useLanguage();

  const FEATURED_ARTICLE = {
    id: "boom-barrier-system",
    tag: t.elementsMagazine.article1Tag,
    title: t.elementsMagazine.article1,
    desc: t.elementsMagazine.article1Desc,
    image: "/images/boom_barrier_hero.jpg",
    fallbackImage: "/images/crash_barrier_perimeter.jpg",
    link: "#boom-barrier-system",
  };

  const SIDE_ARTICLES = [
    {
      id: "earth-leakage-detector",
      tag: t.elementsMagazine.article2Tag,
      title: t.elementsMagazine.article2,
      desc: t.elementsMagazine.article2Desc,
      image: "/images/earth_leakage_detector_hero.jpg",
      fallbackImage: "/images/power_distribution_eld.jpg",
      link: "#earth-leakage-detector",
    },
    {
      id: "railway-level-crossing",
      tag: t.elementsMagazine.article3Tag,
      title: t.elementsMagazine.article3,
      desc: t.elementsMagazine.article3Desc,
      image: "/images/boom_barrier_railway.jpg",
      fallbackImage: "/images/eld_engineering_lab.jpg",
      link: "#railway-level-crossing",
    },
  ];


  return (
    <section className="w-full bg-[#f8f9fa] text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-widest text-[#ff3131] uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff3131] animate-pulse" />
              <span>{t.elementsMagazine.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1e293b] leading-[1.2] font-sans">
              {t.elementsMagazine.titleLine1} <br />
              <span className="font-semibold text-gray-900">{t.elementsMagazine.titleLine2}</span>
            </h2>
          </div>

          <a
            href="#elements-magazine"
            className="inline-flex items-center space-x-3 text-gray-900 hover:text-[#ff3131] font-semibold text-sm sm:text-base mt-6 sm:mt-0 group cursor-pointer transition-colors"
          >
            <span className="group-hover:underline">{t.elementsMagazine.visitMagazine}</span>
            <span className="w-10 h-10 rounded-full border-2 border-gray-900 text-gray-900 flex items-center justify-center group-hover:bg-[#ff3131] group-hover:border-[#ff3131] group-hover:text-white transition-all duration-300 shadow-sm">
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Featured Article */}
          <div className="lg:col-span-7">
            <a
              href={FEATURED_ARTICLE.link}
              className="group flex flex-col cursor-pointer block"
            >
              {/* Image Container */}
              <div className="relative w-full h-[340px] sm:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 shadow-md group-hover:shadow-xl transition-all duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={FEATURED_ARTICLE.image}
                  alt={FEATURED_ARTICLE.title}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== FEATURED_ARTICLE.fallbackImage) {
                      target.src = FEATURED_ARTICLE.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Text Below Image */}
              <div className="mt-5 sm:mt-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-[#1e293b] leading-snug group-hover:text-[#ff3131] transition-colors mb-3">
                  {FEATURED_ARTICLE.title}
                </h3>
                <div className="inline-flex items-center space-x-2 text-sm sm:text-base font-semibold text-[#ff3131] group-hover:underline transition-all">
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                  <span>{t.elementsMagazine.readMore}</span>
                </div>
              </div>
            </a>
          </div>

          {/* Right Column: 2 Stacked Articles */}
          <div className="lg:col-span-5 flex flex-col space-y-8 sm:space-y-9">
            {SIDE_ARTICLES.map((article) => (
              <a
                key={article.id}
                href={article.link}
                className="group flex flex-col cursor-pointer block"
              >
                {/* Image Container */}
                <div className="relative w-full h-[200px] sm:h-[220px] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 shadow-md group-hover:shadow-xl transition-all duration-500">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.image}
                    alt={article.title}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== article.fallbackImage) {
                        target.src = article.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Text Below Image */}
                <div className="mt-4">
                  <h4 className="text-lg sm:text-xl font-normal text-[#1e293b] leading-snug group-hover:text-[#ff3131] transition-colors mb-2.5">
                    {article.title}
                  </h4>
                  <div className="inline-flex items-center space-x-2 text-sm font-semibold text-[#ff3131] group-hover:underline transition-all">
                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
                    <span>{t.elementsMagazine.readMore}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}


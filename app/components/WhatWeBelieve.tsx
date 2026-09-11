"use client";

import React, { useRef, useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function WhatWeBelieve() {
  const { lang, t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const STORIES = [
    {
      id: "railway-level-crossings",
      title: lang === "hi" ? "रेलवे लेवल क्रॉसिंग" : "Railway Level Crossings",
      description:
        lang === "hi"
          ? "रेल पटरियों पर वाहनों की आवाजाही को नियंत्रित करने के लिए विश्वसनीय बैरियर सिस्टम।"
          : "Reliable barrier systems for controlling vehicular movement across railway tracks.",
      image: "/images/boom_barrier_railway.jpg",
      fallbackImage: "/images/boom_barrier_hero.jpg",
      link: "#railway-crossings",
      aspect: "tall",
    },
    {
      id: "railway-signalling",
      title: lang === "hi" ? "रेलवे सिग्नलिंग इंफ्रास्ट्रक्चर" : "Railway Signalling Infrastructure",
      description:
        lang === "hi"
          ? "उपयुक्त रेलवे सिग्नलिंग और नियंत्रण प्रतिष्ठानों के लिए विद्युत निगरानी समाधान।"
          : "Electrical monitoring solutions for suitable railway signalling and control installations.",
      image: "/images/earth_leakage_detector_hero.jpg",
      fallbackImage: "/images/power_distribution_eld.jpg",
      link: "#railway-signalling",
      aspect: "wide",
    },
    {
      id: "railway-control-panels",
      title: lang === "hi" ? "रेलवे कंट्रोल पैनल" : "Railway Control Panels",
      description:
        lang === "hi"
          ? "डिजिटल लीकेज मॉनिटरिंग जो रखरखाव टीमों को असामान्य विद्युत स्थितियों की पहचान करने में मदद करती है।"
          : "Digital leakage monitoring that can help maintenance teams identify abnormal electrical conditions.",
      image: "/images/power_distribution_eld.jpg",
      fallbackImage: "/images/earth_leakage_detector_original.png",
      link: "#railway-control-panels",
      aspect: "tall",
    },
    {
      id: "industrial-electrical-panels",
      title: lang === "hi" ? "औद्योगिक विद्युत पैनल" : "Industrial Electrical Panels",
      description:
        lang === "hi"
          ? "महत्वपूर्ण औद्योगिक विद्युत प्रणालियों के लिए निरंतर अर्थ लीकेज निगरानी।"
          : "Continuous earth leakage monitoring for critical industrial electrical systems.",
      image: "/images/eld_engineering_lab.jpg",
      fallbackImage: "/images/power_distribution_eld.jpg",
      link: "#industrial-panels",
      aspect: "wide",
    },
    {
      id: "restricted-access",
      title: lang === "hi" ? "प्रतिबंधित बुनियादी ढांचा पहुंच" : "Restricted Infrastructure Access",
      description:
        lang === "hi"
          ? "रेलवे यार्ड, डिपो, रखरखाव क्षेत्रों और नियंत्रित स्थानों के लिए बैरियर सिस्टम।"
          : "Barrier systems for railway yards, depots, maintenance areas and controlled infrastructure locations.",
      image: "/images/boom_barrier_original.png",
      fallbackImage: "/images/boom_barrier_hero.jpg",
      link: "#restricted-access",
      aspect: "tall",
    },
    {
      id: "utility-sites",
      title: lang === "hi" ? "यूटिलिटी एवं इंफ्रास्ट्रक्चर साइट्स" : "Utility & Infrastructure Sites",
      description:
        lang === "hi"
          ? "उन प्रतिष्ठानों के लिए विद्युत निगरानी जहां विश्वसनीय फॉल्ट दृश्यता महत्वपूर्ण है।"
          : "Electrical monitoring for installations where dependable fault visibility is important.",
      image: "/images/crash_barrier_perimeter.jpg",
      fallbackImage: "/images/eld_engineering_lab.jpg",
      link: "#utility-sites",
      aspect: "wide",
    },
  ];


  // Auto-scroll loop that pauses on mouse hover
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const nextScroll = scrollLeft + 360;

        if (scrollLeft >= maxScroll - 20) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainerRef.current.scrollTo({ left: nextScroll, behavior: "smooth" });
        }
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white text-gray-900 py-16 sm:py-24 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-relaxed text-[#1e293b] font-sans">
              {t.whatWeBelieve.headline}
            </h2>
          </div>

          <div className="flex items-center space-x-2.5 mt-4 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-[#ff3131] hover:text-[#ff3131] hover:bg-[#ff3131]/5 transition-all cursor-pointer shadow-sm"
              aria-label="Scroll left"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-[#ff3131] hover:text-[#ff3131] hover:bg-[#ff3131]/5 transition-all cursor-pointer shadow-sm"
              aria-label="Scroll right"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>

      {/* Horizontal Auto-Moving Carousel */}
      <div
        className="w-full px-4 sm:px-6 lg:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 sm:space-x-6 overflow-x-auto pb-6 sm:pb-8 pt-2 scrollbar-none scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {STORIES.map((story) => (
            <div
              key={story.id}
              className={`flex-shrink-0 flex flex-col justify-between group cursor-pointer snap-start ${
                story.aspect === "wide"
                  ? "w-[280px] sm:w-[420px]"
                  : "w-[240px] sm:w-[320px]"
              }`}
            >
              <div
                className={`w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-neutral-900 shadow-md transition-all duration-300 group-hover:shadow-2xl border border-gray-200 group-hover:border-[#ff3131]/50 relative ${
                  story.aspect === "wide"
                    ? "h-[190px] sm:h-[260px]"
                    : "h-[240px] sm:h-[330px]"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={story.image}
                  alt={story.title}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== story.fallbackImage) {
                      target.src = story.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="mt-4 flex flex-col justify-between">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-[#ff3131] transition-colors leading-snug line-clamp-1 font-sans">
                  {story.title}
                </h3>
                {story.description && (
                  <p className="text-xs sm:text-sm text-gray-600 font-light mt-1.5 line-clamp-2 leading-relaxed">
                    {story.description}
                  </p>
                )}
                <a
                  href={story.link}
                  className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-red-600 hover:text-red-700 mt-2.5 group-hover:translate-x-1 transition-transform"
                >
                  <span className="text-red-600 font-bold">→</span>
                  <span className="hover:underline">{t.whatWeBelieve.learnMore}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

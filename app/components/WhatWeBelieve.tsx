"use client";

import React, { useRef, useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function WhatWeBelieve() {
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const STORIES = [
    {
      id: "sil4-architecture",
      title: t.whatWeBelieve.story1,
      image: "/images/earth_leakage_detector_hero.jpg",
      fallbackImage: "/images/power_distribution_eld.jpg",
      link: "#sil4-architecture",
      aspect: "tall",
    },
    {
      id: "leakage-analysis",
      title: t.whatWeBelieve.story2,
      image: "/images/eld_engineering_lab.jpg",
      fallbackImage: "/images/earth_leakage_detector_original.png",
      link: "#leakage-analysis",
      aspect: "wide",
    },
    {
      id: "anti-ram-barriers",
      title: t.whatWeBelieve.story3,
      image: "/images/crash_barrier_perimeter.jpg",
      fallbackImage: "/images/boom_barrier_hero.jpg",
      link: "#anti-ram",
      aspect: "tall",
    },
    {
      id: "weatherproof-durability",
      title: t.whatWeBelieve.story4,
      image: "/images/boom_barrier_original.png",
      fallbackImage: "/images/boom_barrier_hero.jpg",
      link: "#durability",
      aspect: "wide",
    },
    {
      id: "microsecond-fault",
      title: t.whatWeBelieve.story5,
      image: "/images/power_distribution_eld.jpg",
      fallbackImage: "/images/earth_leakage_detector_hero.jpg",
      link: "#fault-isolation",
      aspect: "tall",
    },
    {
      id: "rail-interlocking",
      title: t.whatWeBelieve.story6,
      image: "/images/boom_barrier_railway.jpg",
      fallbackImage: "/images/crash_barrier_perimeter.jpg",
      link: "#rail-interlocking",
      aspect: "wide",
    },
    {
      id: "hv-protection",
      title: t.whatWeBelieve.story7,
      image: "/images/eld_engineering_lab.jpg",
      fallbackImage: "/images/power_distribution_eld.jpg",
      link: "#hv-protection",
      aspect: "tall",
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
            <span className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-widest text-[#ff3131] uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ff3131] animate-pulse" />
              <span>{t.whatWeBelieve.badge}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-relaxed text-[#1e293b] font-sans">
              {t.whatWeBelieve.headline}
            </h2>
          </div>

          <div className="hidden md:flex items-center space-x-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-[#ff3131] hover:text-[#ff3131] hover:bg-[#ff3131]/5 transition-all cursor-pointer shadow-sm"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-[#ff3131] hover:text-[#ff3131] hover:bg-[#ff3131]/5 transition-all cursor-pointer shadow-sm"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
          className="flex space-x-6 overflow-x-auto pb-8 pt-2 scrollbar-none scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {STORIES.map((story) => (
            <div
              key={story.id}
              className={`flex-shrink-0 flex flex-col justify-between group cursor-pointer ${
                story.aspect === "wide"
                  ? "w-[340px] sm:w-[420px]"
                  : "w-[260px] sm:w-[320px]"
              }`}
            >
              <div
                className={`w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-neutral-900 shadow-md transition-all duration-300 group-hover:shadow-2xl border border-gray-200 group-hover:border-[#ff3131]/50 relative ${
                  story.aspect === "wide"
                    ? "h-[220px] sm:h-[260px]"
                    : "h-[280px] sm:h-[330px]"
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
                <h3 className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-[#ff3131] transition-colors leading-snug line-clamp-2 font-sans">
                  {story.title}
                </h3>
                <a
                  href={story.link}
                  className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-red-600 hover:text-red-700 mt-3 group-hover:translate-x-1 transition-transform"
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

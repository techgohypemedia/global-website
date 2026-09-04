"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function DiscoverAramco() {
  const { t } = useLanguage();

  const CARDS = [
    {
      id: "sustainability",
      category: t.discover.card1Cat,
      title: t.discover.card1Title,
      image: "/images/sustainability_solar.jpg",
      fallbackImage: "/images/aramco_wetlands.jpg",
      link: "#sustainability",
    },
    {
      id: "what-we-do",
      category: t.discover.card2Cat,
      title: t.discover.card2Title,
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
      fallbackImage: "/images/aramco_core_labs.jpg",
      link: "#what-we-do",
    },
    {
      id: "careers",
      category: t.discover.card3Cat,
      title: t.discover.card3Title,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
      fallbackImage: "/images/aramco_refinery_engineers_laptop.jpg",
      link: "#careers",
    },
    {
      id: "investors",
      category: t.discover.card4Cat,
      title: t.discover.card4Title,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
      fallbackImage: "/images/aramco_results_refinery.jpg",
      link: "#investors",
    },
  ];

  return (
    <section className="w-full bg-[#f8f9fa] text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title Section */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-widest text-[#ff3131] uppercase mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#ff3131] animate-pulse" />
            <span>{t.discover.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-relaxed text-[#1e293b] font-sans">
            {t.discover.headline}
          </h2>
        </div>

        {/* 4 Cards Grid: Image only by default, text reveals on hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {CARDS.map((card) => (
            <a
              key={card.id}
              href={card.link}
              className="group relative h-[440px] sm:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between p-6 sm:p-7 text-white border border-gray-200 hover:border-[#ff3131]/60 cursor-pointer bg-neutral-900"
            >
              {/* Full Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={card.title}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== card.fallbackImage) {
                      target.src = card.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Default subtle bottom shadow for depth, dark overlay appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-100 group-hover:opacity-0 transition-opacity duration-400 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

              {/* Text Content: Hidden by default, Slides up & Fades in on Hover */}
              <div className="relative z-10 opacity-0 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out">
                {/* Category Badge */}
                <div className="inline-flex items-center text-[11px] sm:text-xs font-bold tracking-widest text-white/95 uppercase mb-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-md border border-white/20 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff3131] mr-1.5 inline-block" />
                  {card.category}
                </div>
              </div>

              {/* Bottom Section: Title & Arrow Reveal on Hover */}
              <div className="relative z-10 mt-auto opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out">
                <h3 className="text-lg sm:text-xl font-medium leading-snug text-white font-sans mb-4 drop-shadow-md">
                  {card.title}
                </h3>

                <div className="flex justify-end items-center pt-2">
                  <div className="w-11 h-11 rounded-full border border-white/70 bg-black/40 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:bg-[#ff3131] group-hover:border-[#ff3131] group-hover:text-white shadow-xl">
                    <svg
                      className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Red Bottom Accent Bar on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#ff3131] transition-all duration-300 z-20 shadow-[0_-2px_10px_rgba(255,49,49,0.5)]" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

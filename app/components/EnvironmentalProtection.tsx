"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function EnvironmentalProtection() {
  const { lang, t } = useLanguage();

  const PILLARS = [
    {
      id: "climate-energy",
      title: t.environmental.pillar1Title,
      description: t.environmental.pillar1Desc,
      image:
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
      fallbackImage:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      link: "#climate-energy",
    },
    {
      id: "people-safety",
      title: t.environmental.pillar2Title,
      description: t.environmental.pillar2Desc,
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
      fallbackImage:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      link: "#people-safety",
    },
    {
      id: "biodiversity-initiatives",
      title: t.environmental.pillar3Title,
      description: t.environmental.pillar3Desc,
      image:
        "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
      fallbackImage:
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
      link: "#biodiversity",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="block text-xs sm:text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">
              {t.environmental.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1e293b] leading-tight mb-4 font-sans">
              {t.environmental.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
              {t.environmental.desc}
            </p>
          </div>

          <a
            href="#sustainability-hub"
            className="inline-flex items-center space-x-3 text-red-600 hover:text-red-700 font-medium text-sm sm:text-base group cursor-pointer self-start lg:self-end"
          >
            <span className="group-hover:underline font-semibold">{t.environmental.cta}</span>
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
                <div className="w-full h-[220px] sm:h-[250px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 shadow-md transition-all duration-300 group-hover:shadow-xl relative mb-5">
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

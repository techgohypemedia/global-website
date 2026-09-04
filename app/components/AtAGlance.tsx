"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function AtAGlance() {
  const { t } = useLanguage();

  const STATS = [
    {
      number: t.atAGlance.stat1Number,
      label: t.atAGlance.stat1Label,
    },
    {
      number: t.atAGlance.stat2Number,
      label: t.atAGlance.stat2Label,
    },
    {
      number: t.atAGlance.stat3Number,
      label: t.atAGlance.stat3Label,
      subLabel: t.atAGlance.stat3Sub,
    },
  ];

  return (
    <section className="w-full bg-[#f4f4f4] text-gray-900 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-normal text-[#1e293b] mb-16 sm:mb-20 font-sans">
          {t.atAGlance.title}
        </h2>

        {/* 3 Stats Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
          {STATS.map((stat, index) => (
            <div key={index} className="flex flex-col justify-between pb-8 border-b border-gray-300">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#1e293b] mb-4 font-sans">
                {stat.number}
              </div>

              <div className="text-xs sm:text-sm text-gray-700 leading-snug">
                <p>{stat.label}</p>
                {stat.subLabel && (
                  <p className="text-gray-500">{stat.subLabel}</p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

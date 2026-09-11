"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function DiscoverAramco() {
  const { lang, t } = useLanguage();

  const CARDS = [
    {
      id: "boom-barriers",
      category: t.discover.card1Cat,
      title: t.discover.card1Title,
      image: "/images/boom_barrier_original.png",
      fallbackImage: "/images/boom_barrier_hero.jpg",
      link: "#boom-barriers",
    },
    {
      id: "earth-leakage-detector",
      category: t.discover.card2Cat,
      title: t.discover.card2Title,
      image: "/images/earth_leakage_detector_original.png",
      fallbackImage: "/images/earth_leakage_detector_hero.jpg",
      link: "#earth-leakage-detector",
    },
    {
      id: "railway-automation",
      category: t.discover.card3Cat,
      title: t.discover.card3Title,
      image: "/images/boom_barrier_railway.jpg",
      fallbackImage: "/images/crash_barrier_perimeter.jpg",
      link: "#railway-automation",
    },
    {
      id: "power-substation",
      category: t.discover.card4Cat,
      title: t.discover.card4Title,
      image: "/images/power_distribution_eld.jpg",
      fallbackImage: "/images/eld_engineering_lab.jpg",
      link: "#power-substation",
    },
  ];


  return (
    <section className="w-full bg-[#f8f9fa] text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title Section */}
        <div className="max-w-4xl mb-12 sm:mb-16">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#1e293b] font-sans mb-5">
            {lang === "hi" ? "सुरक्षा वहां, जहां विश्वसनीयता सबसे महत्वपूर्ण है।" : "Protection where reliability matters most."}
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            {lang === "hi"
              ? "बुनियादी ढांचे की सुरक्षा उन प्रणालियों पर निर्भर करती है जो जरूरत के समय निरंतर काम करें। ग्लोबल व्यावहारिक संचालन के लिए लक्षित रेलवे और विद्युत सुरक्षा समाधान विकसित करता है।"
              : "Infrastructure safety depends on systems that perform consistently when they are needed. GLOBAL develops focused railway and electrical safety solutions designed for practical operation in demanding environments."}
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            {lang === "hi"
              ? "हमारे रेलवे बैरियर सिस्टम लेवल क्रॉसिंग और प्रतिबंधित रेलवे क्षेत्रों में वाहनों की आवाजाही को नियंत्रित करने में मदद करते हैं, जबकि हमारे डिजिटल अर्थ लीकेज डिटेक्टर बड़े परिचालन जोखिम बनने से पहले विद्युत रिसाव स्थितियों की पहचान करने में मदद करते हैं।"
              : "Our Railway Barrier Systems help control vehicular movement at railway crossings and restricted railway areas, while our Digital Earth Leakage Detectors help identify electrical leakage conditions before they develop into larger operational risks."}
          </p>
          <p className="text-sm sm:text-base font-medium text-[#ff3131]">
            {lang === "hi" ? "सुरक्षित, अधिक विश्वसनीय बुनियादी ढांचा।" : "Safer, more dependable infrastructure."}
          </p>
        </div>

        {/* 4 Cards Grid: Always visible on mobile, reveals on hover on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
          {CARDS.map((card) => (
            <a
              key={card.id}
              href={card.link}
              className="group relative h-[380px] sm:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between p-5 sm:p-7 text-white border border-gray-200 hover:border-[#ff3131]/60 cursor-pointer bg-neutral-900"
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

              {/* Gradient overlay: Active by default on mobile for legibility, hover on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent sm:from-black/40 sm:via-transparent sm:to-black/10 sm:group-hover:from-black/90 sm:group-hover:via-black/60 sm:group-hover:to-black/35 transition-all duration-400 pointer-events-none" />

              {/* Bottom Section: Title & Arrow */}
              <div className="relative z-10 mt-auto opacity-100 sm:opacity-0 sm:translate-y-5 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-400 ease-out">
                <h3 className="text-base sm:text-xl font-medium leading-snug text-white font-sans mb-3 sm:mb-4 drop-shadow-md">
                  {card.title}
                </h3>

                <div className="flex justify-end items-center pt-1">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/70 bg-black/50 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:bg-[#ff3131] group-hover:border-[#ff3131] group-hover:text-white shadow-xl">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white transition-transform duration-300 group-hover:translate-x-1"
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

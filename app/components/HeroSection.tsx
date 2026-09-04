"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function HeroSection() {
  const { lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDES = [
    {
      id: "boom-barriers",
      tag: lang === "hi" ? "बूम बैरियर सिस्टम" : "AUTOMATED BARRIER SYSTEMS",
      title:
        lang === "hi"
          ? "हैवी-ड्यूटी क्रैश-रेटेड स्वचालित बूम बैरियर"
          : "Heavy-Duty Crash-Rated Automated Boom Barriers",
      subtitle:
        lang === "hi"
          ? "महत्वपूर्ण बुनियादी ढांचे, रक्षा परिसरों और टोल प्लाजा के लिए उच्च-प्रदर्शन स्वचालित सुरक्षा बैरियर।"
          : "High-performance electro-mechanical & hydraulic barrier gates engineered for critical infrastructure, tollways, and perimeter security.",
      ctaText: lang === "hi" ? "बूम बैरियर देखें" : "Explore barriers",
      ctaLink: "#boom-barriers",
      tabLabel: lang === "hi" ? "बूम बैरियर" : "BOOM BARRIERS",
      bgType: "image",
      bgImage: "/images/boom_barrier_hero.jpg",
      buttonType: "arrow",
    },
    {
      id: "earth-leakage-detector",
      tag: lang === "hi" ? "अर्थ लीकेज डिटेक्टर" : "EARTH LEAKAGE DETECTOR",
      title:
        lang === "hi"
          ? "मल्टी-चैनल अर्थ लीकेज डिटेक्टर (ELD) सिस्टम"
          : "Multi-Channel Earth Leakage Detector (ELD) Systems",
      subtitle:
        lang === "hi"
          ? "रेलवे सिग्नलिंग और पावर सबस्टेशन के लिए वास्तविक समय विद्युत इन्सुलेशन निगरानी और फॉल्ट एनालिसिस।"
          : "Precision online electrical insulation resistance monitoring and real-time multi-channel fault totalization for railway signaling networks.",
      ctaText: lang === "hi" ? "ईएलडी विवरण देखें" : "View ELD specs",
      ctaLink: "#earth-leakage-detector",
      tabLabel: lang === "hi" ? "अर्थ लीकेज डिटेक्टर" : "LEAKAGE DETECTOR",
      bgType: "image",
      bgImage: "/images/earth_leakage_detector_hero.jpg",
      buttonType: "arrow",
    },
    {
      id: "railway-signaling",
      tag: lang === "hi" ? "रेलवे सिग्नलिंग" : "RAILWAY SIGNALING SAFETY",
      title:
        lang === "hi"
          ? "स्वचालित रेलवे लेवल क्रॉसिंग सुरक्षा गेट्स"
          : "Automated Railway Level Crossing Barrier Systems",
      subtitle:
        lang === "hi"
          ? "ऑडियो-विजुअल एलईडी सिग्नलिंग, त्वरित प्रतिक्रिया और ट्रैक इंटरलॉकिंग से लैस सुरक्षित रेलवे गेट।"
          : "SIL-compliant fail-safe railway crossing barrier mechanisms with integrated flashing LED signals, acoustic alarms, and remote interlocking.",
      ctaText: lang === "hi" ? "रेल सुरक्षा प्रणाली" : "Railway systems",
      ctaLink: "#railway-signaling",
      tabLabel: lang === "hi" ? "रेलवे सिग्नलिंग" : "RAILWAY SAFETY",
      bgType: "image",
      bgImage: "/images/boom_barrier_railway.jpg",
      buttonType: "arrow",
    },
    {
      id: "power-substation",
      tag: lang === "hi" ? "पावर ग्रिड सुरक्षा" : "SUBSTATION PROTECTION",
      title:
        lang === "hi"
          ? "सबस्टेशन विद्युत इन्सुलेशन एवं पावर ग्रिड सुरक्षा"
          : "Substation Power Insulation & Grid Protection",
      subtitle:
        lang === "hi"
          ? "निरंतर ऑनलाइन इन्सुलेशन प्रतिरोध मापन जो शून्य डाउनटाइम और निर्बाध विद्युत प्रवाह सुनिश्चित करता है।"
          : "Continuous multi-point DC/AC insulation resistance diagnostics preventing catastrophic circuit failures and ensuring 24/7 uptime.",
      cta1Text: lang === "hi" ? "उत्पाद कैटलॉग (PDF)" : "Product catalog (PDF)",
      cta2Text: lang === "hi" ? "तकनीकी डेटाशीट" : "Technical datasheet",
      ctaLink: "#specifications",
      tabLabel: lang === "hi" ? "तकनीकी विवरण" : "SPECIFICATIONS",
      bgType: "image",
      bgImage: "/images/power_distribution_eld.jpg",
      buttonType: "dual-download",
    },
  ];


  const SLIDE_DURATION_MS = 4500;

  useEffect(() => {
    setProgress(0);
    const startTime = Date.now();

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min((elapsed / SLIDE_DURATION_MS) * 100, 100);
      setProgress(currentProgress);

      if (elapsed >= SLIDE_DURATION_MS) {
        if (timerRef.current) clearInterval(timerRef.current);
        setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
        setProgress(0);
      }
    }, 25);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, SLIDES.length]);

  const selectSlide = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrentIndex(index);
    setProgress(0);
  };

  const prevSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setProgress(0);
  };

  const nextSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    setProgress(0);
  };

  const activeSlide = SLIDES[currentIndex];

  return (
    <section
      className="relative w-full min-h-[720px] lg:min-h-[820px] h-[94vh] flex flex-col justify-between overflow-hidden bg-black select-none group/hero"
      aria-label="Aramco Featured Stories"
    >
      {/* 
        =======================================================================
        1. BACKGROUND CINEMATIC VISUALS WITH HIGH-RES GRADIENTS & OVERLAYS
        =======================================================================
      */}
      {SLIDES.map((slide, idx) => {
        const isActive = idx === currentIndex;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-0 scale-100" : "opacity-0 -z-10 scale-105"
            }`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: idx === 2 ? "center 50%" : "center 38%",
              transition: "opacity 1000ms ease-in-out, transform 5000ms cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            {/* Cinematic Multilayer Vignettes */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/35 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/70 pointer-events-none" />
          </div>
        );
      })}

      {/* Floating Ambient Warm Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none z-[1]" />

      {/* 
        =======================================================================
        2. MAIN HEADLINE & ACTIONS CONTENT
        =======================================================================
      */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 flex-grow flex flex-col justify-center w-full">
        <div className="max-w-3xl text-start">
          
          {/* Tag Category Pill with Red Glowing Live Dot */}
          <div className="overflow-hidden mb-4">
            <div
              key={`tag-${activeSlide.id}-${lang}`}
              className="inline-flex items-center space-x-2.5 rtl:space-x-reverse px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-red-500/40 text-white shadow-xl animate-fadeIn"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_#ef4444]" />
              </span>
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-gray-200 uppercase font-sans">
                {activeSlide.tag}
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1
            key={`title-${activeSlide.id}-${lang}`}
            className={`font-light tracking-tight text-white mb-4 sm:mb-5 font-sans drop-shadow-2xl animate-slideUp ${
              activeSlide.id === "sustainability"
                ? "text-4xl sm:text-6xl lg:text-[68px] leading-[1.08]"
                : "text-3xl sm:text-5xl lg:text-[54px] leading-[1.16]"
            }`}
          >
            {activeSlide.title}
          </h1>

          {/* Subtitle / Descriptive Narrative */}
          <p
            key={`sub-${activeSlide.id}-${lang}`}
            className="text-sm sm:text-base lg:text-lg text-gray-300 font-light max-w-2xl leading-relaxed mb-8 sm:mb-10 drop-shadow-md animate-fadeIn"
          >
            {activeSlide.subtitle}
          </p>

          {/* 
            =======================================================================
            ACTION BUTTONS WITH RED INTERACTIVE GLOW & CIRCULAR HOVER
            =======================================================================
          */}
          <div className="pt-1">
            {activeSlide.buttonType === "dual-download" ? (
              /* Slide 4: Dual Actions */
              <div className="flex flex-wrap items-center gap-6 sm:gap-10">
                {/* 1. Q2 Interim report with Red Circle Down Arrow */}
                <a
                  href="#q2-report"
                  className="inline-flex items-center space-x-3.5 rtl:space-x-reverse text-white text-base sm:text-lg font-medium group cursor-pointer"
                >
                  <span className="border-b border-transparent group-hover:border-red-500 group-hover:text-red-400 transition-all duration-200">
                    {activeSlide.cta1Text}
                  </span>
                  <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white/80 flex items-center justify-center group-hover:border-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_0_25px_rgba(239,68,68,0.7)] transition-all duration-300 shadow-lg backdrop-blur-sm bg-black/30">
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </a>

                {/* 2. Press release with outline down arrow */}
                <a
                  href="#press-release"
                  className="inline-flex items-center space-x-2.5 rtl:space-x-reverse text-gray-200 hover:text-white text-base sm:text-lg font-medium group cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 text-red-500 group-hover:translate-y-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <span className="border-b border-transparent group-hover:border-white transition-all duration-200">
                    {activeSlide.cta2Text}
                  </span>
                </a>
              </div>
            ) : (
              /* Slides 1, 2, 3: Single Action with Red-Accented Circular Arrow */
              <a
                href={activeSlide.ctaLink}
                className="inline-flex items-center space-x-4 text-white text-base sm:text-lg font-medium group cursor-pointer"
              >
                <span className="border-b border-transparent group-hover:border-red-500 group-hover:text-red-400 transition-all duration-200">
                  {activeSlide.ctaText}
                </span>

                <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white/80 flex items-center justify-center group-hover:border-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_0_25px_rgba(239,68,68,0.7)] transition-all duration-300 shadow-lg backdrop-blur-sm bg-black/30">
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            )}
          </div>

        </div>
      </div>

      {/* Floating Left / Right Subtle Navigation Arrows on Hover */}
      <div className="absolute inset-y-0 left-4 right-4 z-20 pointer-events-none hidden md:flex items-center justify-between opacity-0 group-hover/hero:opacity-100 transition-opacity duration-300">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="pointer-events-auto w-12 h-12 rounded-full bg-black/50 hover:bg-red-600 text-white/80 hover:text-white border border-white/20 hover:border-red-500 backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-xl cursor-pointer hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="pointer-events-auto w-12 h-12 rounded-full bg-black/50 hover:bg-red-600 text-white/80 hover:text-white border border-white/20 hover:border-red-500 backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-xl cursor-pointer hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* 
        =======================================================================
        3. BOTTOM TABS WITH ELECTRIC RED PROGRESS INDICATOR & INDEX LABELS
        =======================================================================
      */}
      <div className="relative z-10 w-full bg-gradient-to-t from-black/95 via-black/80 to-black/40 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 py-4 sm:py-5">
          {SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            const slideNum = `0${index + 1}`;

            return (
              <button
                key={slide.id}
                onClick={() => selectSlide(index)}
                onMouseEnter={() => selectSlide(index)}
                className="text-start group cursor-pointer focus:outline-none transition-all flex flex-col justify-end py-1"
              >
                {/* Header Row: Slide Number + Tab Label */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`block text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-colors duration-300 truncate ${
                      isActive ? "text-white font-bold" : "text-white/45 group-hover:text-white/80"
                    }`}
                  >
                    {slide.tabLabel}
                  </span>

                  <span
                    className={`text-[10px] font-mono tracking-wider transition-colors ${
                      isActive ? "text-red-400 font-bold" : "text-white/30 group-hover:text-white/60"
                    }`}
                  >
                    {slideNum}
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div className="w-full h-[3px] bg-white/20 rounded-full overflow-hidden relative">
                  {isActive ? (
                    <div
                      className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-red-400 rounded-full transition-all ease-linear shadow-[0_0_12px_rgba(239,68,68,0.9)]"
                      style={{ width: `${progress}%` }}
                    />
                  ) : (
                    <div className="h-full w-0 bg-white/40 rounded-full group-hover:w-full transition-all duration-300" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

    </section>
  );
}

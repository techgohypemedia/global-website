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
      id: "railway-barriers",
      tag: lang === "hi" ? "रेलवे एवं विद्युत सुरक्षा प्रणालियां" : "RAILWAY & ELECTRICAL SAFETY SYSTEMS",
      title:
        lang === "hi"
          ? "महत्वपूर्ण बुनियादी ढांचे में सुरक्षा की इंजीनियरिंग"
          : "Engineering Safety Into Critical Infrastructure",
      subtitle:
        lang === "hi"
          ? "बुनियादी ढांचे, उपकरणों और लोगों की सुरक्षा के लिए इंजीनियर किए गए विश्वसनीय रेलवे बैरियर सिस्टम और डिजिटल अर्थ लीकेज डिटेक्शन समाधान।"
          : "Reliable railway barrier systems and digital earth leakage detection solutions engineered to help protect infrastructure, equipment, and people.",
      secondaryLine:
        lang === "hi"
          ? "कठिन वातावरण के लिए निर्मित। विश्वसनीय संचालन के लिए डिज़ाइन।"
          : "Built for demanding environments. Designed for dependable operation.",
      primaryCtaText: lang === "hi" ? "हमारे उत्पाद देखें" : "Explore Our Products",
      primaryCtaLink: "#our-solutions",
      secondaryCtaText: lang === "hi" ? "इंजीनियरिंग टीम से बात करें" : "Talk to Our Engineering Team",
      secondaryCtaLink: "#contact-engineering",
      tabLabel: lang === "hi" ? "रेलवे बैरियर" : "RAILWAY BARRIERS",
      bgType: "image",
      bgImage: "/images/boom_barrier_hero.jpg",
    },
    {
      id: "earth-leakage-detector",
      tag: lang === "hi" ? "विद्युत सुरक्षा प्रणालियां" : "DIGITAL EARTH LEAKAGE DETECTOR",
      title:
        lang === "hi"
          ? "समस्या बढ़ने से पहले लीकेज का पता लगाएं"
          : "Detect electrical leakage before it becomes a bigger problem.",
      subtitle:
        lang === "hi"
          ? "विद्युत प्रणालियों में अनचाहे अर्थ लीकेज करंट की निरंतर निगरानी के लिए निर्मित ग्लोबल डिजिटल अर्थ लीकेज डिटेक्टर।"
          : "GLOBAL Digital Earth Leakage Detectors are designed to continuously monitor electrical systems for unwanted leakage current to earth.",
      secondaryLine:
        lang === "hi"
          ? "स्पष्ट डिजिटल संकेत ऑपरेटरों और रखरखाव टीमों को असामान्य स्थितियों की त्वरित पहचान में मदद करता है।"
          : "Clear digital indication helps operators and maintenance teams identify abnormal electrical conditions quickly.",
      primaryCtaText: lang === "hi" ? "अर्थ लीकेज डिटेक्टर देखें" : "Explore Digital Earth Leakage Detector",
      primaryCtaLink: "#earth-leakage-detector",
      secondaryCtaText: lang === "hi" ? "इंजीनियरिंग टीम से बात करें" : "Talk to Our Engineering Team",
      secondaryCtaLink: "#contact-engineering",
      tabLabel: lang === "hi" ? "अर्थ लीकेज डिटेक्टर" : "LEAKAGE DETECTOR",
      bgType: "image",
      bgImage: "/images/earth_leakage_detector_hero.jpg",
    },
    {
      id: "railway-signaling",
      tag: lang === "hi" ? "रेलवे क्रॉसिंग सुरक्षा" : "RAILWAY LEVEL CROSSING SAFETY",
      title:
        lang === "hi"
          ? "नियंत्रित क्रॉसिंग। सुरक्षित आवागमन।"
          : "Controlled crossings. Safer movement.",
      subtitle:
        lang === "hi"
          ? "रेलवे लेवल क्रॉसिंग और प्रतिबंधित क्षेत्रों में सड़क यातायात को नियंत्रित करने के लिए डिज़ाइन किए गए ग्लोबल रेलवे बैरियर सिस्टम।"
          : "GLOBAL Railway Barrier Systems are designed to control road traffic at railway level crossings and restricted railway access areas.",
      secondaryLine:
        lang === "hi"
          ? "मजबूत यांत्रिक निर्माण और विश्वसनीय नियंत्रण वास्तुकला का संयोजन।"
          : "The system combines robust mechanical construction with dependable control architecture to support safe and consistent barrier operation.",
      primaryCtaText: lang === "hi" ? "रेलवे बैरियर सिस्टम देखें" : "Explore Railway Barrier System",
      primaryCtaLink: "#railway-barriers",
      secondaryCtaText: lang === "hi" ? "इंजीनियरिंग टीम से बात करें" : "Talk to Our Engineering Team",
      secondaryCtaLink: "#contact-engineering",
      tabLabel: lang === "hi" ? "उपयोग के क्षेत्र" : "APPLICATIONS",
      bgType: "image",
      bgImage: "/images/boom_barrier_railway.jpg",
    },
    {
      id: "engineering-specs",
      tag: lang === "hi" ? "फ़ील्ड के लिए इंजीनियरिंग" : "ENGINEERING FOR THE FIELD",
      title:
        lang === "hi"
          ? "ड्राइंग बोर्ड से परे प्रदर्शन के लिए डिज़ाइन"
          : "Designed to perform beyond the drawing board.",
      subtitle:
        lang === "hi"
          ? "पर्यावरणीय जोखिम, बार-बार संचालन, विद्युत भिन्नता और रखरखाव पहुंच की वास्तविक आवश्यकताओं के आधार पर निर्मित उत्पाद।"
          : "Critical infrastructure equipment developed around real operating requirements including environmental exposure, repeated mechanical operation, and maintenance accessibility.",
      secondaryLine:
        lang === "hi"
          ? "सुरक्षित, अधिक विश्वसनीय बुनियादी ढांचा।"
          : "Safer, more dependable infrastructure.",
      primaryCtaText: lang === "hi" ? "कोटेशन का अनुरोध करें" : "Request a Quote",
      primaryCtaLink: "#specifications",
      secondaryCtaText: lang === "hi" ? "इंजीनियरिंग टीम से बात करें" : "Talk to Our Engineering Team",
      secondaryCtaLink: "#contact-engineering",
      tabLabel: lang === "hi" ? "तकनीकी विवरण" : "SPECIFICATIONS",
      bgType: "image",
      bgImage: "/images/power_distribution_eld.jpg",
    },
  ];

  const SLIDE_DURATION_MS = 5000;

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

  // Touch swipe handling for phone view
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const isSwipeLeft = distance > 45;
    const isSwipeRight = distance < -45;

    if (isSwipeLeft) {
      nextSlide();
    } else if (isSwipeRight) {
      prevSlide();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const activeSlide = SLIDES[currentIndex];

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full min-h-[620px] sm:min-h-[720px] lg:min-h-[820px] h-[100dvh] sm:h-[94vh] flex flex-col justify-between overflow-hidden bg-black select-none group/hero"
      aria-label="GLOBAL Railway & Electrical Safety Systems"
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
            {/* Clean, Bright & Crisp Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent" />
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-40 lg:pt-44 pb-3 sm:pb-0 flex-grow flex flex-col justify-center w-full">
        <div className="max-w-3xl text-start">
          


          {/* Main Headline */}
          <h1
            key={`title-${activeSlide.id}-${lang}`}
            className="font-light tracking-tight text-white mb-3 sm:mb-5 font-sans drop-shadow-2xl animate-slideUp text-2xl xs:text-3xl sm:text-5xl lg:text-[54px] leading-[1.18] sm:leading-[1.16]"
          >
            {activeSlide.title}
          </h1>

          {/* Subtitle / Descriptive Narrative */}
          <p
            key={`sub-${activeSlide.id}-${lang}`}
            className="text-xs sm:text-base lg:text-lg text-gray-300 font-light max-w-2xl leading-relaxed mb-2.5 sm:mb-4 drop-shadow-md animate-fadeIn line-clamp-3 sm:line-clamp-none"
          >
            {activeSlide.subtitle}
          </p>

          {/* Secondary line */}
          {activeSlide.secondaryLine && (
            <p
              key={`sec-${activeSlide.id}-${lang}`}
              className="text-[11px] sm:text-sm lg:text-base text-gray-400 font-normal max-w-2xl leading-relaxed mb-6 sm:mb-10 drop-shadow-md animate-fadeIn line-clamp-2 sm:line-clamp-none"
            >
              {activeSlide.secondaryLine}
            </p>
          )}

          {/* 
            =======================================================================
            ACTION BUTTONS (Primary CTA + Secondary CTA)
            =======================================================================
          */}
          <div className="pt-1 flex flex-col xs:flex-row items-start xs:items-center gap-3.5 xs:gap-6 sm:gap-8">
            {/* Primary CTA: Explore Our Products */}
            <a
              href={activeSlide.primaryCtaLink}
              className="inline-flex items-center space-x-3 text-white text-sm sm:text-lg font-medium group cursor-pointer"
            >
              <span className="border-b border-transparent group-hover:border-red-500 group-hover:text-red-400 transition-all duration-200">
                {activeSlide.primaryCtaText}
              </span>

              <span className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border-2 border-white/80 flex items-center justify-center group-hover:border-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_0_25px_rgba(239,68,68,0.7)] transition-all duration-300 shadow-lg backdrop-blur-sm bg-black/40">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>

            {/* Secondary CTA: Talk to Our Engineering Team */}
            <a
              href={activeSlide.secondaryCtaLink}
              className="inline-flex items-center space-x-2 text-gray-300 hover:text-white text-xs sm:text-base font-normal group cursor-pointer"
            >
              <span className="border-b border-transparent group-hover:border-white transition-all duration-200">
                {activeSlide.secondaryCtaText}
              </span>
              <span className="text-red-500 group-hover:translate-x-1 transition-transform text-sm sm:text-lg">
                →
              </span>
            </a>
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
      <div className="relative z-10 w-full bg-gradient-to-t from-black/95 via-black/85 to-black/40 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 grid grid-cols-4 gap-2 sm:gap-8 py-3 sm:py-5">
          {SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            const slideNum = `0${index + 1}`;

            return (
              <button
                key={slide.id}
                onClick={() => selectSlide(index)}
                className="text-start group cursor-pointer focus:outline-none transition-all flex flex-col justify-end py-1"
                aria-label={`Slide ${slideNum}: ${slide.tabLabel}`}
              >
                {/* Header Row: Slide Number + Tab Label */}
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span
                    className={`block text-[9px] xs:text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-colors duration-300 truncate ${
                      isActive ? "text-white font-bold" : "text-white/45 group-hover:text-white/80"
                    }`}
                  >
                    {/* Short label on phone, full on tablet/desktop */}
                    <span className="sm:hidden">
                      {index === 0 ? "01" : index === 1 ? "02" : index === 2 ? "03" : "04"}
                    </span>
                    <span className="hidden sm:inline truncate">
                      {slide.tabLabel}
                    </span>
                  </span>

                  <span
                    className={`text-[9px] sm:text-[10px] font-mono tracking-wider transition-colors hidden sm:inline ${
                      isActive ? "text-red-400 font-bold" : "text-white/30 group-hover:text-white/60"
                    }`}
                  >
                    {slideNum}
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div className="w-full h-[2.5px] sm:h-[3px] bg-white/20 rounded-full overflow-hidden relative">
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

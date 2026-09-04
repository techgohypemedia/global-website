"use client";

import React, { useState, useEffect } from "react";
import AramcoHeader from "../components/AramcoHeader";
import Footer from "../components/Footer";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";

function AboutUsContent() {
  const { lang } = useLanguage();
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Auto-redirect to Home page when user refreshes the page
  useEffect(() => {
    try {
      const navEntries = window.performance?.getEntriesByType?.("navigation");
      const isReload =
        (navEntries && navEntries.length > 0 && (navEntries[0] as PerformanceNavigationTiming).type === "reload") ||
        (window.performance && (window.performance as any).navigation?.type === 1);

      if (isReload) {
        window.location.replace("/");
      }
    } catch {
      // Ignore
    }
  }, []);

  const STATS = [
    {
      value: "2",
      label: lang === "hi" ? "प्रमुख उत्पाद श्रृंखलाएं" : "Core Product Lines",
      sub: lang === "hi" ? "रेलवे बैरियर एवं अर्थ लीकेज" : "Barrier & Earth Leakage",
    },
    {
      value: "24/7",
      label: lang === "hi" ? "सतत सक्रिय निगरानी" : "Continuous Monitoring",
      sub: lang === "hi" ? "रीयल-टाइम विद्युत सुरक्षा" : "Real-Time Protection",
    },
    {
      value: "100%",
      label: lang === "hi" ? "फेल-सेफ इंजीनियरिंग सिद्धांत" : "Fail-Safe Architecture",
      sub: lang === "hi" ? "कठिन फील्ड परिस्थितियों हेतु" : "Demanding Environments",
    },
    {
      value: "DIRECT",
      label: lang === "hi" ? "प्रत्यक्ष इंजीनियरिंग सहायता" : "Engineering Support",
      sub: lang === "hi" ? "अनुप्रयोग एवं फील्ड मार्गदर्शन" : "Direct Technical Guidance",
    },
  ];

  const LEADERS = [
    {
      id: "systems-engineering",
      name: lang === "hi" ? "सिस्टम डिजाइन एवं नियंत्रण" : "Systems & Control Design",
      title: lang === "hi" ? "फेल-सेफ रेलवे एवं बैरियर ऑटोमेशन इंजीनियरिंग" : "Fail-Safe Automation & Barrier Engineering",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "power-electronics",
      name: lang === "hi" ? "पावर इलेक्ट्रॉनिक्स एवं सेंसिंग" : "Power Electronics & Sensing",
      title: lang === "hi" ? "डिजिटल अर्थ लीकेज एवं इंसुलेशन डायग्नोस्टिक्स" : "Earth Leakage & Insulation Diagnostics",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "field-applications",
      name: lang === "hi" ? "फील्ड अनुप्रयोग एवं एकीकरण" : "Field Applications & Integration",
      title: lang === "hi" ? "कमीशनिंग, रेट्रोफिटिंग एवं ऑन-साइट सपोर्ट" : "Commissioning & On-Site Engineering Support",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "quality-assurance",
      name: lang === "hi" ? "गुणवत्ता एवं फील्ड सत्यापन" : "Quality & Environmental Testing",
      title: lang === "hi" ? "कठोर परीक्षण, थर्मल सत्यापन एवं विश्वसनीयता" : "Stress Testing, Thermal & Reliability Compliance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#100305] text-white font-sans selection:bg-red-600 selection:text-white">
      {/* 1. Transparent / Sticky Aramco Header */}
      <AramcoHeader />

      {/* 
        =======================================================================
        HERO SECTION: Rich Crimson-Maroon & Obsidian Gradient with White Accents
        =======================================================================
      */}
      <section className="relative w-full pt-28 sm:pt-44 pb-14 sm:pb-28 bg-gradient-to-b from-[#1a0407] via-[#2a060d] to-[#1a0407] text-white overflow-hidden">
        
        {/* Visible Ambient Crimson Glows & Starlight Pattern */}
        <div className="absolute top-10 left-1/4 w-[36rem] h-[26rem] bg-red-600/25 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[30rem] h-[24rem] bg-rose-700/20 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Breadcrumb with White & Red Shade */}
              <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-wider mb-4 sm:mb-6">
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  {lang === "hi" ? "मुख्य पृष्ठ" : "Home"}
                </a>
                <span className="text-red-400">/</span>
                <span className="text-white px-3 py-1 rounded-full bg-red-600/30 border border-red-500/50 font-medium shadow-md">
                  <span className="inline-block w-2 h-2 rounded-full bg-red-400 mr-2 animate-pulse" />
                  {lang === "hi" ? "हमारे बारे में" : "About Us"}
                </span>
              </div>

              {/* Title with White & Crimson Red Gradient */}
              <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.18] sm:leading-[1.15] text-white mb-4 sm:mb-6 font-sans">
                {lang === "hi" ? (
                  <>
                    विश्वसनीय इंजीनियरिंग एवं <br />
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-red-400">
                      अवसंरचना सुरक्षा
                    </span>
                  </>
                ) : (
                  <>
                    Engineering Safety & <br />
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-200 to-red-400">
                      Operational Reliability
                    </span>
                  </>
                )}
              </h1>

              {/* Description */}
              <p className="text-xs sm:text-lg text-gray-200 leading-relaxed max-w-2xl mb-6 sm:mb-8 font-light">
                {lang === "hi"
                  ? "GLOBAL में, हम महत्वपूर्ण अवसंरचना और औद्योगिक नेटवर्क के लिए समर्पित सुरक्षा समाधान विकसित करते हैं। हमारी इंजीनियरिंग रेलवे बैरियर सिस्टम और डिजिटल अर्थ लीकेज डिटेक्टरों के निर्माण पर केंद्रित है, जो कठिन परिस्थितियों में निरंतर और भरोसेमंद संचालन सुनिश्चित करते हैं।"
                  : "At GLOBAL, we develop specialised safety systems for critical transportation and industrial infrastructure. Our engineering is focused on Railway Barrier Systems and Digital Earth Leakage Detectors — built with fail-safe principles to ensure dependable, uninterrupted operation in demanding field environments."}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3.5 sm:gap-4">
                <a
                  href="/#elements"
                  className="px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-red-600 via-red-700 to-rose-800 text-white font-medium text-center text-xs sm:text-base hover:brightness-110 transition-all shadow-xl shadow-red-950/60 border border-red-400/40 cursor-pointer"
                >
                  {lang === "hi" ? "हमारे उत्पाद देखें" : "Explore Our Products"}
                </a>
                <a
                  href="/#banner"
                  className="px-6 py-3 sm:py-3.5 rounded-full bg-white/10 border border-white/30 text-white font-medium text-center text-xs sm:text-base hover:bg-white/20 transition-all shadow-md backdrop-blur-sm cursor-pointer"
                >
                  {lang === "hi" ? "इंजीनियरिंग टीम से संपर्क करें" : "Talk to Engineering"}
                </a>
              </div>
            </div>

            {/* Right Image Composition with Red-Tinted Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Large Image */}
                <div className="w-full h-[260px] sm:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-red-500/40 relative group bg-[#1a0407]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                    alt="GLOBAL Industrial Safety Systems"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0407]/90 via-transparent to-black/20" />
                </div>

                {/* Rotating Circular Seal / Badge with Vibrant Red & White Ring */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#1a0407] text-white shadow-2xl p-1.5 flex items-center justify-center border-2 border-red-500/70 z-20">
                  <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-red-600 via-rose-700 to-red-400 flex items-center justify-center text-white text-center p-1.5 sm:p-2 shadow-inner">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-md animate-pulse" fill="currentColor">
                      <path d="M12 2L14.2 8.5L20.8 6.8L16.2 12L20.8 17.2L14.2 15.5L12 22L9.8 15.5L3.2 17.2L7.8 12L3.2 6.8L9.8 8.5L12 2Z" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 2: Big Mission Statement Banner + 4 Stats Grid (Rich Crimson Red)
        =======================================================================
      */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#1a0407] via-[#24060b] to-[#180305] border-y border-red-900/40 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <p className="text-base sm:text-2xl lg:text-3xl text-gray-100 leading-relaxed font-light mb-10 sm:mb-16">
            {lang === "hi" ? (
              <>
                <span className="font-semibold text-white">GLOBAL</span> में, हम महत्वपूर्ण परिवहन और विद्युत बुनियादी ढांचे के लिए उच्च-विश्वसनीयता सुरक्षा प्रणाली प्रदान करने के लिए प्रतिबद्ध हैं। हम{" "}
                <span className="font-semibold text-white border-b-2 border-red-500">फेल-सेफ इंजीनियरिंग</span>, मजबूत फील्ड निर्माण और स्पष्ट डायग्नोस्टिक्स का संयोजन करते हैं।
              </>
            ) : (
              <>
                At <span className="font-semibold text-white">GLOBAL</span>, we are committed to delivering high-reliability safety systems for critical transportation and electrical infrastructure. We combine{" "}
                <span className="font-semibold text-white border-b-2 border-red-500">fail-safe engineering</span>, robust field construction, and clear diagnostics to ensure dependable operation.
              </>
            )}
          </p>

          {/* 4 Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-8 pt-6 sm:pt-10 border-t border-red-800/30">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#2b080f]/80 to-[#180306]/90 border border-red-500/30 hover:border-red-400/50 transition-all shadow-xl backdrop-blur-sm"
              >
                <div className="text-2xl xs:text-3xl sm:text-5xl font-light tracking-tight mb-1 sm:mb-2 font-sans text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-red-400">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-sm font-semibold text-white text-center mb-0.5 sm:mb-1">
                  {stat.label}
                </div>
                <div className="text-[10px] sm:text-[11px] text-gray-300 text-center">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 3: Our Mission (Left Blueprint + Right Mission Text)
        =======================================================================
      */}
      <section id="mission" className="py-20 sm:py-28 bg-gradient-to-b from-[#180305] via-[#22050a] to-[#160306] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Multi-Photo Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative">
                {/* Background Blueprint / Plant Card */}
                <div className="w-[85%] h-[280px] sm:h-[340px] rounded-3xl overflow-hidden shadow-2xl border-2 border-red-500/40 bg-[#1a0407]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                    alt="Infrastructure Safety Engineering"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#160306]/80 via-transparent to-red-950/20" />
                </div>

                {/* Overlapping Foreground Card */}
                <div className="absolute -bottom-10 -right-2 sm:-right-6 w-[65%] h-[240px] sm:h-[290px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/40 bg-[#1a0407]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80"
                    alt="Railway & Electrical Field Engineers"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 pt-10 lg:pt-0">
              <span className="text-xs font-bold tracking-widest text-red-400 uppercase mb-3 block">
                {lang === "hi" ? "हमारा उद्देश्य" : "OUR PURPOSE"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-white leading-tight mb-6 font-sans">
                {lang === "hi" ? "हमारा मिशन" : "Our Mission"}
              </h2>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-8 font-light">
                {lang === "hi"
                  ? "कठिन फील्ड परिस्थितियों में काम करने वाले ऑपरेटरों, इंजीनियरों और बुनियादी ढांचा प्रबंधकों के लिए अत्यधिक भरोसेमंद, रखरखाव-अनुकूल और सुरक्षा-महत्वपूर्ण उत्पाद प्रदान करना। हम गुणवत्ता और व्यावहारिक फील्ड इंजीनियरिंग के साथ सुरक्षा मानकों को सशक्त बनाते हैं।"
                  : "To engineer dependable, maintenance-friendly, and safety-critical systems for infrastructure operators and engineers. We protect human life, reduce equipment failure, and eliminate preventable downtime through rigorous design and direct engineering support."}
              </p>

              {/* Checklist Items */}
              <div className="space-y-4">
                {[
                  lang === "hi" ? "रेलवे लेवल क्रॉसिंग पर सुरक्षित और स्वचालित बूम नियंत्रण" : "Fail-Safe Boom Control for Railway Level Crossings",
                  lang === "hi" ? "विद्युत पैनलों में निरंतर इन्सुलेशन और लीकेज निगरानी" : "Continuous Insulation & Earth Leakage Diagnostics",
                  lang === "hi" ? "कठिन पर्यावरणीय परिस्थितियों के लिए मजबूत वेदरप्रूफ निर्माण" : "Rugged Industrial Housings for Harsh Field Environments",
                  lang === "hi" ? "अनुप्रयोग इंजीनियरिंग और फील्ड एकीकरण में सीधा मार्गदर्शन" : "Direct Application Engineering & Integration Support",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 p-3 rounded-xl bg-[#28070d]/60 border border-red-500/25 hover:border-red-400/40 transition-all">
                    <span className="w-5 h-5 rounded-full bg-red-600/30 text-red-400 border border-red-500/50 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-sm sm:text-base font-normal text-gray-100">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 4: Our Vision (Dual Layered Photos: Surveyors & Engineers)
        =======================================================================
      */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#160306] via-[#26060c] to-[#140305] overflow-hidden border-t border-red-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Text */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-widest text-red-400 uppercase mb-3 block">
                {lang === "hi" ? "दीर्घकालिक दृष्टि" : "LONG-TERM VISION"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-white leading-tight mb-6 font-sans">
                {lang === "hi" ? "हमारा विजन: अवसंरचना सुरक्षा में विश्वसनीयता" : "Our Vision: Dependable Infrastructure Protection"}
              </h2>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-8 font-light">
                {lang === "hi"
                  ? "हमारा विजन ऐसे सुरक्षा उपकरण विकसित करना है जिन पर फील्ड इंजीनियर बिना किसी संदेह के भरोसा कर सकें — जहां हर तंत्र डिफ़ॉल्ट रूप से सुरक्षित स्थिति में काम करे और हर विफलता का समय पर पता लगाया जा सके।"
                  : "Our vision is to build safety systems that field engineers rely upon with total confidence — where every mechanism defaults to safety upon fault, and electrical degradation is detected long before hazards arise."}
              </p>

              {/* Checklist Items */}
              <div className="space-y-4">
                {[
                  lang === "hi" ? "डिफ़ॉल्ट-टू-सेफ आर्किटेक्चर और मजबूत हार्डवेयर इंटरफेस" : "Default-to-Safe Control Architecture & Rugged Interfaces",
                  lang === "hi" ? "सटीक ट्रू RMS लीकेज डिटेक्शन और स्पष्ट अलर्टिंग" : "Precision True RMS Leakage Sensing & Clear Alerting",
                  lang === "hi" ? "जटिलता रहित, दीर्घकालिक विश्वसनीयता और आसान फील्ड मेंटेनेंस" : "Low Maintenance Overhead & High Long-Term Field Durability",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 p-3 rounded-xl bg-[#28070d]/60 border border-red-500/25 hover:border-red-400/40 transition-all">
                    <span className="w-5 h-5 rounded-full bg-red-600/30 text-red-400 border border-red-500/50 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-sm sm:text-base font-normal text-gray-100">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Photo Composition: Dual Layered Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative">
                
                {/* Main Card */}
                <div className="w-[90%] h-[340px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-2 border-red-500/50 relative group bg-[#1a0407]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/aramco_petroleum_surveyors.jpg"
                    alt="Field Inspection and Infrastructure Verification"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-red-950/20" />

                  {/* High-Tech Scan Ring */}
                  <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-red-500/80 flex items-center justify-center animate-ping pointer-events-none" />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-red-500/50 text-xs text-white flex items-center space-x-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                    <span>{lang === "hi" ? "फील्ड-सत्यापित इंजीनियरिंग" : "Field-Verified Engineering"}</span>
                  </div>
                </div>

                {/* Overlapping Foreground Card */}
                <div className="absolute -bottom-8 -right-2 sm:-right-6 w-[62%] h-[220px] sm:h-[260px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/50 group bg-[#1a0407]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/aramco_refinery_engineers_laptop.jpg"
                    alt="Engineers Testing Control & Diagnostic Logic"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 5: Engineering Journey (Left Historic Crew + Right History Timeline)
        =======================================================================
      */}
      <section id="history" className="py-20 sm:py-28 bg-gradient-to-b from-[#140305] via-[#1e0509] to-[#120204] border-t border-red-900/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Photo Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative">
                <div className="w-full h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-2 border-red-500/40 bg-[#1a0407]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80"
                    alt="Industrial Equipment and Electrical Control R&D"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-red-950/20" />
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-widest text-red-400 uppercase mb-3 block">
                {lang === "hi" ? "हमारा दृष्टिकोण" : "OUR APPROACH"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-white leading-tight mb-6 font-sans">
                {lang === "hi" ? "हमारा ध्यान: दो मुख्य सुरक्षा उत्पाद" : "Our Focus: Two Core Safety Lines"}
              </h2>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-8 font-light">
                {lang === "hi"
                  ? "व्यापक और सामान्य कैटलॉग बनाने के बजाय, हमने अपनी संपूर्ण इंजीनियरिंग विशेषज्ञता को दो महत्वपूर्ण उत्पादों पर केंद्रित किया है: रेलवे बैरियर सिस्टम और डिजिटल अर्थ लीकेज डिटेक्टर। इस गहन फोकस के माध्यम से हम प्रत्येक प्रणाली में असाधारण विश्वसनीयता सुनिश्चित करते हैं।"
                  : "Rather than spreading across generic product catalogues, we concentrate our engineering capabilities strictly on two vital domains: Railway Barrier Systems and Digital Earth Leakage Detectors. This specialization ensures deep technical refinement, reliable component selection, and uncompromising durability."}
              </p>

              {/* Checklist */}
              <div className="space-y-4">
                {[
                  lang === "hi" ? "व्यावहारिक फील्ड आवश्यकताओं के अनुरूप उद्देश्य-निर्मित हार्डवेयर" : "Purpose-Built Hardware for Real Field Requirements",
                  lang === "hi" ? "बिना अनावश्यक जटिलता के स्पष्ट इंटरफेस और वायरिंग" : "Clear Wiring & Diagnostics Without Unnecessary Complexity",
                  lang === "hi" ? "फील्ड फीडबैक और परिचालन अनुभवों पर आधारित निरंतर सुधार" : "Continuous Refinement Based on Real Operating Feedback",
                  lang === "hi" ? "प्रत्यक्ष तकनीकी सहायता और प्रोजेक्ट-विशिष्ट विनिर्देश" : "Direct Technical Guidance for Project Specifications",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 p-3 rounded-xl bg-[#28070d]/60 border border-red-500/25 hover:border-red-400/40 transition-all">
                    <span className="w-5 h-5 rounded-full bg-red-600/30 text-red-400 border border-red-500/50 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-sm sm:text-base font-normal text-gray-100">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 6: Operational Model (Video Banner with Crimson Backdrop)
        =======================================================================
      */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#120204] via-[#20050a] to-[#100305] border-t border-red-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="text-xs font-bold tracking-widest text-red-400 uppercase mb-3 block">
            {lang === "hi" ? "परिचालन मॉडल" : "OPERATIONAL PROCESS"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-white leading-tight mb-4 font-sans">
            {lang === "hi" ? "हमारा कार्य मॉडल" : "How We Deliver Solutions"}
          </h2>
          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
            {lang === "hi"
              ? "हम प्रारंभिक तकनीकी परामर्श से लेकर हार्डवेयर निर्माण, गुणवत्ता परीक्षण और फील्ड कमीशनिंग तक एक सहयोगी और पारदर्शी प्रक्रिया का पालन करते हैं।"
              : "We follow a disciplined engineering process — from project requirement review and robust component assembly to comprehensive bench testing and commissioning support."}
          </p>

          {/* Featured Video / Photo Container */}
          <div
            onClick={() => setIsPlayingVideo(true)}
            className="relative w-full max-w-5xl mx-auto h-[340px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border-2 border-red-500/50 bg-[#1a0407]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=80"
              alt="Engineering & Field Testing"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-red-950/30 group-hover:bg-black/40 transition-colors" />

            {/* Play Button with Crimson & White Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-red-600 via-red-500 to-rose-400 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform border-2 border-white/80">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 7: Engineering Capabilities (Specialised Engineering Team)
        =======================================================================
      */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#100305] via-[#1a0408] to-[#0c0204] border-t border-red-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14">
            <div>
              <span className="text-xs font-bold tracking-widest text-red-400 uppercase mb-2 block">
                {lang === "hi" ? "इंजीनियरिंग विशेषज्ञता" : "ENGINEERING CAPABILITIES"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-white leading-tight font-sans">
                {lang === "hi" ? "विशेषज्ञ इंजीनियरिंग एवं तकनीकी क्षमताएं" : "Specialised Engineering Capabilities"}
              </h2>
              <p className="text-sm text-gray-300 mt-2 max-w-xl font-light">
                {lang === "hi"
                  ? "हमारी ताकत रेलवे सिग्नलिंग, पावर इलेक्ट्रॉनिक्स और फील्ड ऑटोमेशन में प्रत्यक्ष व्यावहारिक अनुभव रखने वाली समर्पित इंजीनियरिंग टीम है।"
                  : "Our systems are engineered and supported by specialists with hands-on experience in railway signalling, power electronics, and industrial protection."}
              </p>
            </div>

            <a
              href="/#banner"
              className="mt-6 sm:mt-0 inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-rose-700 text-white text-xs sm:text-sm font-semibold hover:brightness-110 transition-all shadow-lg border border-red-400/40 self-start sm:self-auto cursor-pointer"
            >
              {lang === "hi" ? "इंजीनियरिंग से संपर्क करें" : "Talk to Our Team"}
            </a>
          </div>

          {/* 4 Capability Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERS.map((leader) => (
              <div
                key={leader.id}
                className="bg-gradient-to-b from-[#24060c] to-[#120204] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-950/60 transition-all duration-300 hover:-translate-y-1.5 border border-red-500/30 group flex flex-col justify-between"
              >
                <div className="w-full h-64 overflow-hidden relative bg-[#120204]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120204] via-transparent to-transparent opacity-70 group-hover:opacity-30 transition-opacity" />
                </div>

                <div className="p-6 text-start">
                  <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 leading-snug">
                    {leader.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Video Modal */}
      {isPlayingVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl bg-[#1a0407] rounded-2xl overflow-hidden shadow-2xl border-2 border-red-500/50">
            <button
              onClick={() => setIsPlayingVideo(false)}
              className="absolute top-4 right-4 z-20 text-white/80 hover:text-white bg-black/70 p-2 rounded-full hover:bg-black/90 transition-colors cursor-pointer"
              aria-label="Close video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative pt-[56.25%] w-full">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="GLOBAL Engineering Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function AboutPage() {
  return (
    <LanguageProvider>
      <AboutUsContent />
    </LanguageProvider>
  );
}

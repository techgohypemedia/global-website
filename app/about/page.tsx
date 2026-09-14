
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import AramcoHeader from "../components/AramcoHeader";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";

function AboutUsContent() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<"railway" | "eld">("railway");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Top Banner Slides: Auto-changing every 3 seconds
  const TOP_BANNER_SLIDES = [
    {
      id: "slide-1",
      image: "/images/boom_barrier_railway.jpg",
    },
    {
      id: "slide-2",
      image: "/images/earth_leakage_detector_hero.jpg",
    },
    {
      id: "slide-3",
      image: "/images/eld_engineering_lab.jpg",
    },
    {
      id: "slide-4",
      image: "/images/power_distribution_eld.jpg",
    },
    {
      id: "slide-5",
      image: "/images/crash_barrier_perimeter.jpg",
    },
  ];

  // Auto-play timer for top banner (3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TOP_BANNER_SLIDES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [TOP_BANNER_SLIDES.length]);

  const STATS = [
    {
      value: "2",
      label: lang === "hi" ? "प्रमुख उत्पाद क्षेत्र" : "Specialised Product Domains",
      sub: lang === "hi" ? "रेलवे बैरियर एवं अर्थ लीकेज" : "Railway Barriers & Earth Leakage",
    },
    {
      value: "24/7",
      label: lang === "hi" ? "सतत सक्रिय निगरानी" : "Continuous Monitoring",
      sub: lang === "hi" ? "रीयल-टाइम विद्युत सुरक्षा" : "Real-Time Insulation Diagnostics",
    },
    {
      value: "100%",
      label: lang === "hi" ? "फेल-सेफ इंजीनियरिंग" : "Fail-Safe Architecture",
      sub: lang === "hi" ? "कठिन फील्ड परिस्थितियों हेतु" : "Default-to-Safe Mechanism",
    },
    {
      value: "DIRECT",
      label: lang === "hi" ? "प्रत्यक्ष तकनीकी सहयोग" : "Engineering Guidance",
      sub: lang === "hi" ? "अनुप्रयोग एवं फील्ड समर्थन" : "Dedicated Project Support",
    },
  ];

  const DISCIPLINES = [
    {
      id: "systems-engineering",
      name: lang === "hi" ? "सिस्टम डिजाइन एवं स्वचालन" : "Systems & Control Automation",
      title: lang === "hi" ? "फेल-सेफ रेलवे एवं बैरियर ऑटोमेशन इंजीनियरिंग" : "Fail-Safe Barrier & Signalling Interface Engineering",
      desc: lang === "hi" ? "रेलवे क्रॉसिंग और उच्च-सुरक्षा क्षेत्रों के लिए यांत्रिक ड्राइव, सेंसर एकीकरण और स्वचालित लॉजिक डिजाइन।" : "Mechanical drive systems, obstacle detection interlocks, and automated control logic for high-traffic corridors.",
      image: "/images/boom_barrier_hero.jpg",
    },
    {
      id: "power-electronics",
      name: lang === "hi" ? "पावर इलेक्ट्रॉनिक्स एवं सेंसिंग" : "Power Electronics & Sensing",
      title: lang === "hi" ? "डिजिटल अर्थ लीकेज एवं इंसुलेशन डायग्नोस्टिक्स" : "Earth Leakage & Electrical Diagnostics",
      desc: lang === "hi" ? "ट्रू RMS करंट मापन, निरंतर इंसुलेशन मॉनिटरिंग और सटीक डिजिटल अलार्म थ्रेसहोल्ड।" : "Precision True RMS leakage detection, real-time insulation resistance tracking, and early fault alerting.",
      image: "/images/earth_leakage_detector_hero.jpg",
    },
    {
      id: "field-applications",
      name: lang === "hi" ? "फील्ड अनुप्रयोग एवं एकीकरण" : "Field Application Engineering",
      title: lang === "hi" ? "कमीशनिंग, रेट्रोफिटिंग एवं ऑन-साइट समर्थन" : "On-Site Commissioning & Retrofit Integration",
      desc: lang === "hi" ? "मौजूदा औद्योगिक पैनलों और रेलवे इंफ्रास्ट्रक्चर में निर्बाध एकीकरण और ऑन-साइट परीक्षण।" : "Seamless retrofit into existing motor control panels, distribution boards, and rail signaling infrastructure.",
      image: "/images/power_distribution_eld.jpg",
    },
    {
      id: "quality-validation",
      name: lang === "hi" ? "गुणवत्ता एवं फील्ड सत्यापन" : "Quality & Environmental Validation",
      title: lang === "hi" ? "कठोर परीक्षण, थर्मल सत्यापन एवं विश्वसनीयता" : "Environmental Stress & Reliability Compliance",
      desc: lang === "hi" ? "अत्यधिक तापमान, कंपन और निरंतर चक्रों के तहत प्रत्येक उत्पाद का 100% फैक्ट्री परीक्षण।" : "100% factory bench-tested under thermal variations, continuous mechanical duty cycles, and vibration stress.",
      image: "/images/crash_barrier_perimeter.jpg",
    },
  ];

  const WORKFLOW_STEPS = [
    {
      step: "01",
      title: lang === "hi" ? "तकनीकी विश्लेषण एवं विनिर्देश" : "Requirement Analysis & Review",
      desc: lang === "hi" ? "आपकी परिचालन स्थितियों, स्थापना स्थल, विद्युत लोड और सुरक्षा आवश्यकताओं का विस्तृत मूल्यांकन।" : "Comprehensive technical evaluation of operational conditions, duty cycles, electrical parameters, and site-specific needs.",
    },
    {
      step: "02",
      title: lang === "hi" ? "अनुप्रयोग इंजीनियरिंग एवं डिजाइन" : "Application-Specific Engineering",
      desc: lang === "hi" ? "परियोजना के विनिर्देशों के अनुसार वायरिंग आरेख, नियंत्रण लॉजिक और उपयुक्त हार्डवेयर कॉन्फ़िगरेशन का निर्धारण।" : "Tailoring mechanical boom dimensions, control interface schematics, or leakage alarm thresholds to exact field requirements.",
    },
    {
      step: "03",
      title: lang === "hi" ? "सटीक निर्माण एवं फैक्ट्री परीक्षण" : "Precision Build & 100% Factory Test",
      desc: lang === "hi" ? "कड़े गुणवत्ता मानकों के तहत निर्माण, प्रत्येक घटक का तनाव परीक्षण और परिचालन सत्यापन।" : "Rigorous assembly, thermal cycle verification, and simulated fault injection tests before leaving our manufacturing floor.",
    },
    {
      step: "04",
      title: lang === "hi" ? "कमीशनिंग मार्गदर्शन एवं निरंतर सहयोग" : "Commissioning & Lifecycle Support",
      desc: lang === "hi" ? "फील्ड इंजीनियरों को प्रत्यक्ष तकनीकी सहायता, दस्तावेजीकरण और दीर्घकालिक परिचालन मार्गदर्शन।" : "Direct engineer-to-engineer technical consultation, comprehensive wiring schematics, and long-term lifecycle reliability.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-sans selection:bg-[#ff3131] selection:text-white relative">
      {/* 1. Header */}
      <AramcoHeader />

      {/* 
        =======================================================================
        1. TOP BANNER (100% Clean, Fresh & Bright 3-Second Visual Slideshow)
        =======================================================================
      */}
      <section
        className="relative w-full h-[75vh] sm:h-[88vh] min-h-[520px] sm:min-h-[640px] overflow-hidden bg-black select-none border-b border-white/10"
      >
        {/* Full-bleed Bright & Fresh HD Images with 3s Crossfade */}
        {TOP_BANNER_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div
              className={`w-full h-full bg-cover bg-center transition-transform duration-[5000ms] ease-out ${
                idx === currentSlide ? "scale-105" : "scale-100"
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />
          </div>
        ))}
        {/* Top Vignette Gradient for Navbar Legibility & Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/50 pointer-events-none z-10" />
      </section>

      {/* 
        =======================================================================
        2. MAIN ABOUT US OVERVIEW SECTION (Placed Cleanly Below the Top Banner)
        =======================================================================
      */}
      <section className="relative w-full py-20 sm:py-28 bg-[#0a0a0c] text-white overflow-hidden border-b border-white/10">

        {/* Ambient Subtle Depth (Clean, Deep Industrial Background) */}
        <div className="absolute top-1/4 left-1/3 w-[32rem] h-[32rem] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-10 right-10 w-[24rem] h-[24rem] bg-[#ff3131]/[0.025] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Refined Eyebrow Pill with Tasteful Red Accent Indicator */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-gray-300 tracking-wider uppercase mb-5 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff3131] shadow-[0_0_8px_rgba(255,49,49,0.8)]" />
                <span>
                  {lang === "hi"
                    ? "ग्लोबल अवसंरचना सुरक्षा एवं विद्युत निगरानी"
                    : "GLOBAL Infrastructure Safety & Electrical Monitoring"}
                </span>
              </div>

              {/* Main Headline: Clean, Authoritative White with a Brand Red Period */}
              <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[52px] font-light tracking-tight leading-[1.14] text-white mb-5 sm:mb-6 font-sans">
                {lang === "hi" ? (
                  <>
                    विश्वसनीय इंजीनियरिंग। <br />
                    <span className="font-semibold text-white">
                      सुरक्षित अवसंरचना<span className="text-[#ff3131]">.</span>
                    </span>
                  </>
                ) : (
                  <>
                    Engineering Safety & <br />
                    <span className="font-semibold text-white">
                      Operational Reliability<span className="text-[#ff3131]">.</span>
                    </span>
                  </>
                )}
              </h2>

              {/* Narrative Summary */}
              <p className="text-sm sm:text-base lg:text-[17px] text-gray-300 leading-relaxed max-w-2xl mb-8 font-light">
                {lang === "hi"
                  ? "GLOBAL में, हम महत्वपूर्ण परिवहन और औद्योगिक नेटवर्क के लिए समर्पित सुरक्षा समाधान विकसित करते हैं। हमारी विशेषज्ञता दो मुख्य क्षेत्रों पर केंद्रित है: रेलवे बैरियर सिस्टम और डिजिटल अर्थ लीकेज डिटेक्टर — जो कठिन फील्ड परिस्थितियों में शून्य विफलता और निरंतर भरोसेमंद संचालन सुनिश्चित करते हैं।"
                  : "At GLOBAL, we engineer specialised safety systems for mission-critical infrastructure. Rather than generic catalogues, we focus exclusively on Railway Barrier Systems and Digital Earth Leakage Detectors — built with fail-safe principles to protect human life, eliminate electrical hazards, and ensure uninterrupted operations."}
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-xl">
                <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <div className="w-5 h-5 rounded-md bg-[#ff3131]/10 border border-[#ff3131]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#ff3131]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      {lang === "hi" ? "रेलवे बैरियर ऑटोमेशन" : "Railway Barrier Automation"}
                    </div>
                    <div className="text-[11px] text-gray-400 font-light">
                      {lang === "hi" ? "फेल-सेफ बूम एवं सेंसर एकीकरण" : "Fail-safe boom interlocks & obstacle sensors"}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <div className="w-5 h-5 rounded-md bg-[#ff3131]/10 border border-[#ff3131]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#ff3131]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      {lang === "hi" ? "डिजिटल अर्थ लीकेज डिटेक्शन" : "Earth Leakage Detection"}
                    </div>
                    <div className="text-[11px] text-gray-400 font-light">
                      {lang === "hi" ? "ट्रू RMS करंट एवं सतत इंसुलेशन सुरक्षा" : "True RMS continuous insulation diagnostics"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Clean, Sophisticated Balance */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Link
                  href="/products/railway-barrier-system"
                  className="inline-flex items-center justify-center space-x-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-gray-950 hover:bg-gray-100 font-semibold text-sm sm:text-[15px] transition-all duration-200 shadow-md hover:shadow-lg group cursor-pointer"
                >
                  <span>{lang === "hi" ? "हमारे उत्पाद देखें" : "Explore Safety Solutions"}</span>
                  <span className="w-5 h-5 rounded-full bg-gray-200 group-hover:bg-[#ff3131] group-hover:text-white text-gray-800 flex items-center justify-center transition-all duration-200 text-xs">
                    →
                  </span>
                </Link>

                <Link
                  href="/#contact-engineering"
                  className="inline-flex items-center justify-center space-x-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-white/25 text-white font-medium text-sm sm:text-[15px] transition-all backdrop-blur-md cursor-pointer"
                >
                  <span>{lang === "hi" ? "इंजीनियरिंग टीम से बात करें" : "Talk to Engineering"}</span>
                </Link>
              </div>
            </div>

            {/* Right Media Composition with Non-Overlapping Architecture */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">

                {/* Main Hero Card: Railway Barrier System */}
                <div className="w-full h-[300px] sm:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/15 relative group bg-[#111115]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/boom_barrier_railway.jpg"
                    alt="GLOBAL Railway Barrier System"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                  {/* Top Status Pill */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{lang === "hi" ? "सक्रिय सिस्टम" : "ACTIVE DEPLOYMENT"}</span>
                    </span>
                  </div>

                  {/* Docked Technical Spec Overlay - positioned cleanly on bottom left */}
                  <div className="absolute bottom-4 left-4 right-4 sm:right-28 p-3.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/15">
                    <div className="flex items-center space-x-1.5 text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff3131]" />
                      <span>{lang === "hi" ? "विशेषज्ञ उत्पाद 01" : "ENGINEERED DOMAIN 01"}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white leading-snug">
                      {lang === "hi" ? "रेलवे बैरियर एवं लेवल क्रॉसिंग सिस्टम" : "Railway Barrier & Crossing Automation"}
                    </div>
                  </div>
                </div>

                {/* Floating Telemetry Glass Card: Digital Earth Leakage Detector */}
                <div className="hidden sm:flex absolute -bottom-6 -right-3 lg:-right-6 w-64 p-3 rounded-2xl bg-[#121318]/95 backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-20 items-center space-x-3 transition-transform hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/10 flex-shrink-0 relative bg-black">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/earth_leakage_detector_hero.jpg"
                      alt="Digital Earth Leakage Detector"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center space-x-1.5 text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff3131]" />
                      <span>{lang === "hi" ? "उत्पाद 02" : "SYSTEM 02"}</span>
                    </div>
                    <div className="text-xs font-semibold text-white truncate">
                      {lang === "hi" ? "डिजिटल अर्थ लीकेज डिटेक्टर" : "Digital Earth Leakage Detector"}
                    </div>
                    <div className="text-[10px] text-gray-400 font-mono truncate mt-0.5">
                      {lang === "hi" ? "ट्रू RMS सतत निगरानी" : "True RMS Diagnostics"}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        3. ENTERPRISE METRICS (4 Stat Counters)
        =======================================================================
      */}
      <section className="py-12 sm:py-16 bg-[#0e0e12] border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff3131]/40 hover:bg-white/[0.05] transition-all shadow-md group"
              >
                <div className="text-3xl sm:text-5xl font-light tracking-tight mb-2 font-sans text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-[#ff3131] group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white text-center mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] sm:text-xs text-gray-400 text-center font-light">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        4. MANUFACTURING & ENGINEERING EXCELLENCE (Railway & ELD Systems Profile)
        =======================================================================
      */}
      <section className="py-20 sm:py-28 bg-[#0a0a0c] border-b border-white/10 relative overflow-hidden">
        
        {/* Red & Black Ambient Glows */}
        <div className="absolute top-1/3 left-0 w-[32rem] h-[32rem] bg-[#ff3131]/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-rose-900/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#ff3131_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Core Products Showcase Collage (Railway Signaling + Digital ELD Machines) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-12 gap-3.5 sm:gap-4 items-stretch">
                
                {/* 1. Tall Left: Railway Barrier & Level Crossing Signaling */}
                <div className="col-span-6 rounded-2xl overflow-hidden border border-[#ff3131]/25 bg-gradient-to-b from-[#18080a] to-[#0d0d11] shadow-[0_10px_35px_rgba(255,49,49,0.15)] relative group h-[380px] sm:h-[480px] hover:border-[#ff3131]/60 transition-all duration-300">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/boom_barrier_railway.jpg"
                    alt="GLOBAL Railway Barrier & Signaling Mechanism"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                  
                  {/* Bottom Red Accented Pill */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-[#ff3131]/30">
                    <div className="text-[9px] sm:text-[10px] font-bold text-[#ff3131] uppercase tracking-widest mb-0.5">
                      {lang === "hi" ? "रेलवे सुरक्षा प्रणालियां" : "RAILWAY SIGNALING & BARRIERS"}
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-white tracking-tight block truncate">
                      {lang === "hi" ? "ऑटोमैटिक रेलवे बूम बैरियर" : "Fail-Safe Boom Barriers"}
                    </span>
                  </div>
                </div>

                {/* Right Stack: Digital ELD Machine + Lab Validation */}
                <div className="col-span-6 flex flex-col gap-3.5 sm:gap-4 h-[380px] sm:h-[480px]">
                  
                  {/* 2. Top Right: Digital Earth Leakage Detector Machine */}
                  <div className="flex-1 rounded-2xl overflow-hidden border border-[#ff3131]/25 bg-gradient-to-b from-[#18080a] to-[#0d0d11] shadow-xl relative group hover:border-[#ff3131]/60 transition-all duration-300">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/earth_leakage_detector_hero.jpg"
                      alt="GLOBAL Digital Earth Leakage Detector Machine"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 sm:p-2.5 rounded-lg bg-black/80 backdrop-blur-md border border-[#ff3131]/30">
                      <div className="text-[8px] sm:text-[9px] font-bold text-[#ff3131] uppercase tracking-wider">
                        {lang === "hi" ? "विद्युत निगरानी" : "ELECTRICAL DIAGNOSTICS"}
                      </div>
                      <span className="text-[11px] sm:text-xs font-semibold text-white tracking-tight block truncate">
                        {lang === "hi" ? "डिजिटल अर्थ लीकेज मशीन" : "Digital ELD Machines"}
                      </span>
                    </div>
                  </div>

                  {/* 3. Bottom Right: Precision Lab Validation & Stress Testing */}
                  <div className="flex-1 rounded-2xl overflow-hidden border border-[#ff3131]/25 bg-gradient-to-b from-[#18080a] to-[#0d0d11] shadow-xl relative group hover:border-[#ff3131]/60 transition-all duration-300">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/eld_engineering_lab.jpg"
                      alt="GLOBAL 100% Factory Validation Lab"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 sm:p-2.5 rounded-lg bg-black/80 backdrop-blur-md border border-[#ff3131]/30">
                      <div className="text-[8px] sm:text-[9px] font-bold text-[#ff3131] uppercase tracking-wider">
                        {lang === "hi" ? "100% परीक्षण" : "FACTORY VALIDATION"}
                      </div>
                      <span className="text-[11px] sm:text-xs font-semibold text-white tracking-tight block truncate">
                        {lang === "hi" ? "थर्मल एवं तनाव परीक्षण" : "100% Stress Testing"}
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Right Column: Detailed Corporate Manufacturing Copy in Red & Black Theme */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              
              {/* Category Tag */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#ff3131]/10 border border-[#ff3131]/30 text-xs sm:text-sm font-semibold tracking-widest text-[#ff3131] uppercase">
                <span>{lang === "hi" ? "हमारे बारे में" : "About Us"}</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-semibold text-white tracking-tight leading-[1.18] sm:leading-[1.16] font-sans">
                {lang === "hi" ? (
                  <>
                    परिशुद्ध विनिर्माण एवं <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-[#ff3131]">
                      फील्ड इंजीनियरिंग का दीर्घकालिक अनुभव
                    </span>
                  </>
                ) : (
                  <>
                    Decades Of Precision Manufacturing & <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-[#ff3131]">
                      Engineering Experience
                    </span>
                  </>
                )}
              </h2>

              {/* Body Paragraph 1 */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                {lang === "hi"
                  ? "GLOBAL अपनी प्रमाणित इंजीनियरिंग विशेषज्ञता के आधार पर भारत और वैश्विक बाजारों में सभी प्रमुख सिस्टम इंटीग्रेटर्स, रेलवे डिवीजनों और औद्योगिक प्रतिष्ठानों को उच्च-विश्वसनीयता रेलवे बैरियर प्रणालियों और डिजिटल अर्थ लीकेज डिटेक्शन मशीनों का विनिर्माण और आपूर्ति करता है।"
                  : "GLOBAL manufactures and supplies high-reliability Railway Barrier Systems and Digital Earth Leakage Detection Machines based on proven engineering expertise to leading major system integrators, railway divisions, and industrial operators across India and global markets."}
              </p>

              {/* Body Paragraph 2 */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                {lang === "hi"
                  ? "हमारी विनिर्माण इकाइयों से निकलने वाली प्रत्येक सुरक्षा प्रणाली को सटीक इंजीनियरिंग के साथ डिजाइन किया जाता है, कड़े मानकों के अनुसार निर्मित किया जाता है और कठोर थर्मल व यांत्रिक तनाव परीक्षणों पर परखा जाता है। GLOBAL सुरक्षा प्रणालियों की निर्माण गुणवत्ता और विश्वसनीयता हमारे भागीदारों को अद्वितीय मूल्य प्रदान करती है। हम अत्यधिक फील्ड तनाव और निरंतर 24/7 परिचालन के लिए मजबूत कैबिनेट, यांत्रिक ड्राइव और डिजिटल कंट्रोलर का निर्माण करते हैं।"
                  : "Every safety system that leaves our factories has been designed with precision, manufactured to standards, and subjected to rigorous thermal and mechanical stress testing. The build quality and reliability of GLOBAL safety systems provides tremendous value to our partners and clients. We manufacture cabinets, heavy-duty drive mechanisms, and digital controllers engineered for demanding round-the-clock duty cycles."}
              </p>

              {/* Body Paragraph 3 */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                {lang === "hi"
                  ? "GLOBAL अनुबंध विनिर्माण (Contract Manufacturing) और OEM/ODM सेवाओं के माध्यम से रेलवे ऑटोमेशन बूम बैरियर्स, सिग्नलिंग इंटरफेस, डिजिटल अर्थ लीकेज डिटेक्टर (True RMS) और इंडस्ट्रियल पावर प्रोटेक्शन सिस्टम्स के लिए डिजाइन और ब्रांड अनुकूलन प्रदान करता है।"
                  : "GLOBAL provides design and brand customization through contract manufacturing and OEM/ODM services for mission-critical systems such as Railway Boom Barriers, Level Crossing Signaling Interlocks, Digital Earth Leakage Detectors (True RMS), and Industrial Power Distribution Protection."}
              </p>

              {/* Body Paragraph 4 */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                {lang === "hi"
                  ? "GLOBAL सुरक्षा प्रणालियां और डायग्नोस्टिक मशीनें हमारी अत्याधुनिक विनिर्माण इकाइयों और समर्पित तकनीकी इंजीनियरिंग सहायता नेटवर्क के माध्यम से सीधे आपको उपलब्ध कराई जाती हैं।"
                  : "GLOBAL security systems and diagnostic machines are available to you directly through our precision manufacturing facilities and dedicated technical application support network."}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        5. TWO CORE DOMAINS (Interactive Deep Dive)
        =======================================================================
      */}
      <section className="py-20 sm:py-28 bg-[#0d0d10] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <div>
              <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#ff3131] uppercase mb-3">
                {lang === "hi" ? "विशेषज्ञता का दायरा" : "TWO CORE ENGINEERING DOMAINS"}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white font-sans">
                {lang === "hi" ? "हमारा उत्पाद फोकस" : "Focused Exclusively on Two Domains"}
              </h2>
            </div>

            {/* Domain Switcher Tabs */}
            <div className="flex items-center space-x-2 mt-6 md:mt-0 p-1.5 rounded-full bg-white/[0.05] border border-white/10">
              <button
                type="button"
                onClick={() => setActiveTab("railway")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeTab === "railway"
                    ? "bg-[#ff3131] text-white shadow-md"
                    : "text-gray-400 hover:text-white"
                  }`}
              >
                {lang === "hi" ? "रेलवे बैरियर सिस्टम" : "Railway Barriers"}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("eld")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeTab === "eld"
                    ? "bg-[#ff3131] text-white shadow-md"
                    : "text-gray-400 hover:text-white"
                  }`}
              >
                {lang === "hi" ? "अर्थ लीकेज डिटेक्टर" : "Earth Leakage"}
              </button>
            </div>
          </div>

          {/* Tab 1: Railway Barrier Content */}
          {activeTab === "railway" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-6 space-y-6">
                <div className="text-xs font-bold tracking-wider text-[#ff3131] uppercase">
                  {lang === "hi" ? "डोमेन 01 • लेवल क्रॉसिंग एवं परिधि नियंत्रण" : "DOMAIN 01 • LEVEL CROSSINGS & PERIMETER SAFETY"}
                </div>
                <h3 className="text-2xl sm:text-4xl font-normal text-white font-sans leading-tight">
                  {lang === "hi" ? "रेलवे बैरियर एवं स्वचालित बूम सिस्टम" : "Railway Barrier Systems"}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                  {lang === "hi"
                    ? "ग्लोबल रेलवे बैरियर सिस्टम रेलवे लेवल क्रॉसिंग और प्रतिबंधित क्षेत्रों में सड़क यातायात को सुरक्षित रूप से नियंत्रित करने के लिए डिज़ाइन किए गए हैं। मजबूत यांत्रिक निर्माण और डिफ़ॉल्ट-टू-सेफ नियंत्रण वास्तुकला कठिन पर्यावरणीय परिस्थितियों में भी निरंतर कार्यक्षमता प्रदान करती है।"
                    : "GLOBAL Railway Barrier Systems are engineered for heavy-duty traffic control at railway level crossings and restricted industrial access points. Combining robust electromechanical drive units with fail-safe control logic, they deliver reliable and continuous perimeter protection."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    { en: "Electromechanical Drive Unit", hi: "इलेक्ट्रोमैकेनिकल ड्राइव यूनिट" },
                    { en: "Weatherproof Enclosure", hi: "वेदरप्रूफ औद्योगिक एनक्लोजर" },
                    { en: "Obstacle Detection Ready", hi: "ऑब्स्टेकल डिटेक्शन इंटरफेस" },
                    { en: "Manual Override & Battery Backup", hi: "मैनुअल ओवरराइड एवं बैकअप" },
                  ].map((f, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-gray-200 flex items-center space-x-2.5">
                      <span className="text-[#ff3131] font-bold">●</span>
                      <span>{lang === "hi" ? f.hi : f.en}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/products/railway-barrier-system"
                    className="inline-flex items-center space-x-2 text-sm sm:text-base font-semibold text-[#ff3131] hover:text-white transition-colors cursor-pointer group"
                  >
                    <span>{lang === "hi" ? "रेलवे बैरियर उत्पाद विनिर्देश देखें" : "View Railway Barrier Specifications"}</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="w-full h-[320px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-white/15 relative bg-[#111115]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/boom_barrier_hero.jpg"
                    alt="Railway Barrier System"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Earth Leakage Detector Content */}
          {activeTab === "eld" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-6 space-y-6">
                <div className="text-xs font-bold tracking-wider text-[#ff3131] uppercase">
                  {lang === "hi" ? "डोमेन 02 • सतत विद्युत इंसुलेशन निगरानी" : "DOMAIN 02 • CONTINUOUS INSULATION MONITORING"}
                </div>
                <h3 className="text-2xl sm:text-4xl font-normal text-white font-sans leading-tight">
                  {lang === "hi" ? "डिजिटल अर्थ लीकेज डिटेक्टर" : "Digital Earth Leakage Detectors"}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                  {lang === "hi"
                    ? "ग्लोबल डिजिटल अर्थ लीकेज डिटेक्टर विद्युत प्रणालियों में अनचाहे अर्थ लीकेज करंट की निरंतर निगरानी करते हैं। स्पष्ट डिजिटल डिस्प्ले ऑपरेटरों को असामान्य स्थितियों की तुरंत पहचान करने में मदद करता है, जिससे विद्युत आग और उपकरण विफलता का जोखिम समाप्त होता है।"
                    : "GLOBAL Digital Earth Leakage Detectors continuously monitor electrical distribution networks for unwanted leakage current to earth. Clear digital displays and adjustable trip thresholds help maintenance teams catch insulation degradation before it leads to electrical failure."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    { en: "True RMS Current Sensing", hi: "ट्रू RMS करंट मापन" },
                    { en: "High-Contrast Digital Display", hi: "हाई-कंट्रास्ट डिजिटल डिस्प्ले" },
                    { en: "Adjustable Alarm Thresholds", hi: "एडजस्टेबल अलार्म थ्रेसहोल्ड" },
                    { en: "Standard Panel Mount Form", hi: "मानक पैनल माउंटिंग फॉर्म" },
                  ].map((f, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-gray-200 flex items-center space-x-2.5">
                      <span className="text-[#ff3131] font-bold">●</span>
                      <span>{lang === "hi" ? f.hi : f.en}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/products/earth-leakage-detector"
                    className="inline-flex items-center space-x-2 text-sm sm:text-base font-semibold text-[#ff3131] hover:text-white transition-colors cursor-pointer group"
                  >
                    <span>{lang === "hi" ? "अर्थ लीकेज डिटेक्टर विनिर्देश देखें" : "View Earth Leakage Detector Specifications"}</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="w-full h-[320px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-white/15 relative bg-[#111115]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/earth_leakage_detector_hero.jpg"
                    alt="Digital Earth Leakage Detector"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 
        =======================================================================
        6. OPERATIONAL WORKFLOW (4-Step Pipeline)
        =======================================================================
      */}
      <section className="py-20 sm:py-28 bg-[#0a0a0c] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#ff3131] uppercase mb-3">
              {lang === "hi" ? "कार्यप्रणाली एवं गुणवत्ता आश्वासन" : "THE GLOBAL METHODOLOGY"}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white font-sans leading-tight">
              {lang === "hi" ? "हमारी डिलीवरी प्रक्रिया" : "How We Deliver Solutions"}
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mt-4 font-light">
              {lang === "hi"
                ? "प्रारंभिक परियोजना मूल्यांकन से लेकर अंतिम कमीशनिंग तक हमारा पारदर्शी और अनुशासित इंजीनियरिंग दृष्टिकोण।"
                : "A disciplined, engineer-guided process ensuring every deployment matches strict technical standards."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#ff3131]/40 hover:bg-white/[0.05] transition-all flex flex-col justify-between shadow-lg group"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-mono font-bold text-[#ff3131] mb-5 tracking-tight">
                    {step.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-normal text-white mb-3 font-sans group-hover:text-red-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 
        =======================================================================
        7. ENGINEERING DISCIPLINES & EXPERTISE
        =======================================================================
      */}
      <section className="py-20 sm:py-28 bg-[#0e0e12] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16">
            <div>
              <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#ff3131] uppercase mb-2">
                {lang === "hi" ? "इंजीनियरिंग क्षमताएं" : "DISCIPLINES & CAPABILITIES"}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white font-sans">
                {lang === "hi" ? "विशेषज्ञ इंजीनियरिंग विभाग" : "Specialised Engineering Capabilities"}
              </h2>
            </div>

            <a
              href="/#contact-engineering"
              className="mt-6 sm:mt-0 inline-flex items-center px-6 py-3 rounded-full bg-[#ff3131] hover:bg-[#d62828] text-white text-xs sm:text-sm font-semibold transition-all shadow-md self-start sm:self-auto cursor-pointer"
            >
              {lang === "hi" ? "इंजीनियरिंग से संपर्क करें" : "Consult Our Team"}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {DISCIPLINES.map((d) => (
              <div
                key={d.id}
                className="bg-white/[0.03] rounded-3xl overflow-hidden border border-white/10 hover:border-[#ff3131]/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl group flex flex-col justify-between"
              >
                <div className="w-full h-52 overflow-hidden relative bg-[#15151a]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 text-start flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#ff3131] transition-colors mb-1">
                      {d.name}
                    </h3>
                    <div className="text-xs font-medium text-[#ff3131] mb-2">
                      {d.title}
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                      {d.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 
        =======================================================================
        8. DIRECT CONSULTATION CTA BANNER
        =======================================================================
      */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#0e0e12] via-[#1a0408] to-[#0a0a0c] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

          <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#ff3131] uppercase mb-4">
            {lang === "hi" ? "परियोजना विनिर्देश एवं तकनीकी परामर्श" : "PROJECT CONSULTATION & TECHNICAL SPECIFICATIONS"}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight mb-6 font-sans">
            {lang === "hi"
              ? "क्या आपको आगामी बुनियादी ढांचा परियोजना के लिए तकनीकी सहायता की आवश्यकता है?"
              : "Need Technical Assistance for an Infrastructure Project?"}
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
            {lang === "hi"
              ? "अपनी स्थापना, परिचालन स्थितियों, नियंत्रण एकीकरण और तकनीकी विनिर्देशों के बारे में हमारी इंजीनियरिंग टीम से सीधे बात करें।"
              : "Discuss installation parameters, environmental conditions, control interface integration, and customized wiring diagrams directly with our engineering team."}
          </p>

          <div className="flex flex-col xs:flex-row items-center justify-center gap-4">
            <a
              href="/#contact-engineering"
              className="w-full xs:w-auto px-8 py-4 rounded-full bg-[#ff3131] hover:bg-[#d62828] text-white font-medium text-center text-sm sm:text-base transition-all shadow-[0_0_25px_rgba(255,49,49,0.4)] cursor-pointer"
            >
              {lang === "hi" ? "कोटेशन का अनुरोध करें" : "Request a Technical Quote"}
            </a>
            <a
              href="/#contact-engineering"
              className="w-full xs:w-auto px-8 py-4 rounded-full border border-white/30 hover:border-white text-white font-medium text-center text-sm sm:text-base transition-all bg-white/[0.05] hover:bg-white/[0.1] backdrop-blur-md cursor-pointer"
            >
              {lang === "hi" ? "इंजीनियरिंग टीम से संपर्क करें" : "Contact Engineering Team"}
            </a>
          </div>

        </div>
      </section>

      {/* 9. Newsletter Section */}
      <NewsletterSection />

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

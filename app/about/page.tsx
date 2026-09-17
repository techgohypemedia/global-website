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
      title: "Railway Barrier Automation",
    },
    {
      id: "slide-2",
      image: "/images/earth_leakage_detector_hero.jpg",
      title: "Digital Earth Leakage Detection",
    },
    {
      id: "slide-3",
      image: "/images/eld_engineering_lab.jpg",
      title: "100% Factory Validation Testing",
    },
    {
      id: "slide-4",
      image: "/images/power_distribution_eld.jpg",
      title: "Continuous Power & Substation Safety",
    },
    {
      id: "slide-5",
      image: "/images/crash_barrier_perimeter.jpg",
      title: "Industrial Perimeter Access Protection",
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
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-[#ff3131] selection:text-white relative">
      {/* 1. Header */}
      <AramcoHeader theme="light" />

      {/* 
        =======================================================================
        1. TOP BANNER (Clean, Fresh & Bright 3-Second Visual Slideshow)
        =======================================================================
      */}
      <section className="relative w-full h-[50vh] sm:h-[65vh] min-h-[380px] sm:min-h-[480px] overflow-hidden bg-slate-100 select-none border-b border-slate-200">
        {TOP_BANNER_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div
              className={`w-full h-full bg-cover bg-center transition-transform duration-[4000ms] ease-out ${
                idx === currentSlide ? "scale-105" : "scale-100"
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />
          </div>
        ))}

        {/* Slide Indicators at bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2 bg-white/80 backdrop-blur-xs px-3 py-1.5 border border-slate-300">
          {TOP_BANNER_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 transition-all cursor-pointer ${
                idx === currentSlide ? "w-6 bg-[#ff3131]" : "w-2 bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 
        =======================================================================
        2. MAIN ABOUT US OVERVIEW SECTION (RED & WHITE THEME)
        =======================================================================
      */}
      <section className="relative w-full py-16 sm:py-24 bg-white text-slate-800 overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight leading-[1.18] text-slate-900 mb-5 font-sans">
                {lang === "hi" ? (
                  <>
                    विश्वसनीय इंजीनियरिंग। <br />
                    <span className="text-red-600">सुरक्षित अवसंरचना.</span>
                  </>
                ) : (
                  <>
                    Engineering Safety & <br />
                    <span className="text-red-600">Operational Reliability.</span>
                  </>
                )}
              </h1>

              {/* Narrative Summary */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
                {lang === "hi"
                  ? "GLOBAL में, हम महत्वपूर्ण परिवहन और औद्योगिक नेटवर्क के लिए समर्पित सुरक्षा समाधान विकसित करते हैं। हमारी विशेषज्ञता दो मुख्य क्षेत्रों पर केंद्रित है: रेलवे बैरियर सिस्टम और डिजिटल अर्थ लीकेज डिटेक्टर — जो कठिन फील्ड परिस्थितियों में शून्य विफलता और निरंतर भरोसेमंद संचालन सुनिश्चित करते हैं।"
                  : "At GLOBAL, we engineer specialised safety systems for mission-critical infrastructure. Rather than generic catalogues, we focus exclusively on Railway Barrier Systems and Digital Earth Leakage Detectors — built with fail-safe principles to protect human life, eliminate electrical hazards, and ensure uninterrupted operations."}
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-xl">
                <div className="flex items-start space-x-2.5 p-3.5 bg-slate-50 border border-slate-200">
                  <div className="w-5 h-5 bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0 mt-0.5 text-red-600 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      {lang === "hi" ? "रेलवे बैरियर ऑटोमेशन" : "Railway Barrier Automation"}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {lang === "hi" ? "फेल-सेफ बूम एवं सेंसर एकीकरण" : "Fail-safe boom interlocks & obstacle sensors"}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5 p-3.5 bg-slate-50 border border-slate-200">
                  <div className="w-5 h-5 bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0 mt-0.5 text-red-600 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      {lang === "hi" ? "डिजिटल अर्थ लीकेज डिटेक्शन" : "Earth Leakage Detection"}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {lang === "hi" ? "ट्रू RMS करंट एवं सतत इंसुलेशन सुरक्षा" : "True RMS continuous insulation diagnostics"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Link
                  href="/products/railway-barrier-system"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-md shadow-red-600/20 cursor-pointer"
                >
                  <span>{lang === "hi" ? "हमारे उत्पाद देखें" : "Explore Safety Solutions"}</span>
                  <span>→</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-xs cursor-pointer"
                >
                  <span>{lang === "hi" ? "इंजीनियरिंग टीम से बात करें" : "Talk to Engineering"}</span>
                </Link>
              </div>
            </div>

            {/* Right Media Composition with Sharp Straight Borders */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white p-2 border border-slate-200 shadow-xs">
                <div className="w-full h-[280px] sm:h-[400px] overflow-hidden border border-slate-200 bg-slate-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/boom_barrier_railway.jpg"
                    alt="GLOBAL Railway Barrier System"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-3 bg-white border-t border-slate-100">
                  <span className="text-xs text-red-600 font-bold uppercase tracking-wider block font-mono">
                    {lang === "hi" ? "मिशन-क्रिटिकल इंफ्रास्ट्रक्चर" : "Mission-Critical Infrastructure"}
                  </span>
                  <span className="text-xs text-slate-600">
                    {lang === "hi"
                      ? "24/7 लेवल क्रॉसिंग एवं पावर पैनल सुरक्षा प्रणालियां"
                      : "24/7 level crossing & power distribution protection systems"}
                  </span>
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
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-5 sm:p-6 bg-white border border-slate-200 hover:border-red-300 transition-all shadow-xs group"
              >
                <div className="text-3xl sm:text-5xl font-bold font-mono tracking-tight mb-2 text-red-600 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 text-center mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 text-center font-normal">
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
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Core Products Showcase (Sharp Straight Rectangles) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-12 gap-3.5 sm:gap-4 items-stretch">
                
                {/* 1. Tall Left: Railway Barrier */}
                <div className="col-span-6 border border-slate-200 bg-white p-1.5 shadow-xs h-[360px] sm:h-[460px]">
                  <div className="w-full h-full overflow-hidden bg-slate-100 border border-slate-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/boom_barrier_railway.jpg"
                      alt="GLOBAL Railway Barrier & Signaling Mechanism"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Right Stack: Digital ELD + Lab Validation */}
                <div className="col-span-6 flex flex-col gap-3.5 sm:gap-4 h-[360px] sm:h-[460px]">
                  <div className="flex-1 border border-slate-200 bg-white p-1.5 shadow-xs">
                    <div className="w-full h-full overflow-hidden bg-slate-100 border border-slate-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/earth_leakage_detector_hero.jpg"
                        alt="GLOBAL Digital Earth Leakage Detector Machine"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="flex-1 border border-slate-200 bg-white p-1.5 shadow-xs">
                    <div className="w-full h-full overflow-hidden bg-slate-100 border border-slate-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/eld_engineering_lab.jpg"
                        alt="GLOBAL 100% Factory Validation Lab"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Detailed Corporate Manufacturing Copy */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-[1.18] font-sans">
                {lang === "hi" ? (
                  <>
                    परिशुद्ध विनिर्माण एवं <br />
                    <span className="text-red-600">
                      फील्ड इंजीनियरिंग का दीर्घकालिक अनुभव
                    </span>
                  </>
                ) : (
                  <>
                    Decades Of Precision Manufacturing & <br />
                    <span className="text-red-600">
                      Engineering Experience
                    </span>
                  </>
                )}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {lang === "hi"
                  ? "GLOBAL अपनी प्रमाणित इंजीनियरिंग विशेषज्ञता के आधार पर भारत और वैश्विक बाजारों में सभी प्रमुख सिस्टम इंटीग्रेटर्स, रेलवे डिवीजनों और औद्योगिक प्रतिष्ठानों को उच्च-विश्वसनीयता रेलवे बैरियर प्रणालियों और डिजिटल अर्थ लीकेज डिटेक्शन मशीनों का विनिर्माण और आपूर्ति करता है।"
                  : "GLOBAL manufactures and supplies high-reliability Railway Barrier Systems and Digital Earth Leakage Detection Machines based on proven engineering expertise to leading major system integrators, railway divisions, and industrial operators across India and global markets."}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {lang === "hi"
                  ? "हमारी विनिर्माण इकाइयों से निकलने वाली प्रत्येक सुरक्षा प्रणाली को सटीक इंजीनियरिंग के साथ डिजाइन किया जाता है, कड़े मानकों के अनुसार निर्मित किया जाता है और कठोर थर्मल व यांत्रिक तनाव परीक्षणों पर परखा जाता है। GLOBAL सुरक्षा प्रणालियों की निर्माण गुणवत्ता और विश्वसनीयता हमारे भागीदारों को अद्वितीय मूल्य प्रदान करती है।"
                  : "Every safety system that leaves our factories has been designed with precision, manufactured to standards, and subjected to rigorous thermal and mechanical stress testing. The build quality and reliability of GLOBAL safety systems provides tremendous value to our partners and clients."}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {lang === "hi"
                  ? "GLOBAL अनुबंध विनिर्माण (Contract Manufacturing) और OEM/ODM सेवाओं के माध्यम से रेलवे ऑटोमेशन बूम बैरियर्स, सिग्नलिंग इंटरफेस, डिजिटल अर्थ लीकेज डिटेक्टर (True RMS) और इंडस्ट्रियल पावर प्रोटेक्शन सिस्टम्स के लिए डिजाइन और ब्रांड अनुकूलन प्रदान करता है।"
                  : "GLOBAL provides design and brand customization through contract manufacturing and OEM/ODM services for mission-critical systems such as Railway Boom Barriers, Level Crossing Signaling Interlocks, Digital Earth Leakage Detectors (True RMS), and Industrial Power Distribution Protection."}
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
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-sans">
                {lang === "hi" ? "हमारा उत्पाद फोकस" : "Focused Exclusively on Two Domains"}
              </h2>
            </div>

            {/* Domain Switcher Tabs */}
            <div className="flex items-center space-x-2 mt-6 md:mt-0 p-1 bg-white border border-slate-300">
              <button
                type="button"
                onClick={() => setActiveTab("railway")}
                className={`px-5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "railway"
                    ? "bg-red-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {lang === "hi" ? "रेलवे बैरियर सिस्टम" : "Railway Barriers"}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("eld")}
                className={`px-5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "eld"
                    ? "bg-red-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
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
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sans leading-tight">
                  {lang === "hi" ? "रेलवे बैरियर एवं स्वचालित बूम सिस्टम" : "Railway Barrier Systems"}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
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
                    <div key={idx} className="p-3.5 bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-center space-x-2.5">
                      <span className="text-red-600 font-bold text-xs">✓</span>
                      <span>{lang === "hi" ? f.hi : f.en}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/products/railway-barrier-system"
                    className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 transition-colors cursor-pointer group"
                  >
                    <span>{lang === "hi" ? "रेलवे बैरियर उत्पाद विनिर्देश देखें" : "View Railway Barrier Specifications"}</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="bg-white p-2 border border-slate-200 shadow-xs">
                  <div className="w-full h-[320px] sm:h-[420px] overflow-hidden bg-slate-100 border border-slate-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/boom_barrier_hero.jpg"
                      alt="Railway Barrier System"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Earth Leakage Detector Content */}
          {activeTab === "eld" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-6 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sans leading-tight">
                  {lang === "hi" ? "डिजिटल अर्थ लीकेज डिटेक्टर" : "Digital Earth Leakage Detectors"}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
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
                    <div key={idx} className="p-3.5 bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-center space-x-2.5">
                      <span className="text-red-600 font-bold text-xs">✓</span>
                      <span>{lang === "hi" ? f.hi : f.en}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/products/earth-leakage-detector"
                    className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 transition-colors cursor-pointer group"
                  >
                    <span>{lang === "hi" ? "अर्थ लीकेज डिटेक्टर विनिर्देश देखें" : "View Earth Leakage Detector Specifications"}</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="bg-white p-2 border border-slate-200 shadow-xs">
                  <div className="w-full h-[320px] sm:h-[420px] overflow-hidden bg-slate-100 border border-slate-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/earth_leakage_detector_hero.jpg"
                      alt="Digital Earth Leakage Detector"
                      className="w-full h-full object-cover"
                    />
                  </div>
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
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-sans leading-tight">
              {lang === "hi" ? "हमारी डिलीवरी प्रक्रिया" : "How We Deliver Solutions"}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal">
              {lang === "hi"
                ? "प्रारंभिक परियोजना मूल्यांकन से लेकर अंतिम कमीशनिंग तक हमारा पारदर्शी और अनुशासित इंजीनियरिंग दृष्टिकोण।"
                : "A disciplined, engineer-guided process ensuring every deployment matches strict technical standards."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 sm:p-7 bg-slate-50 border border-slate-200 hover:border-red-300 transition-all flex flex-col justify-between shadow-xs group"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-mono font-bold text-red-600 mb-4 tracking-tight">
                    {step.step}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 font-sans group-hover:text-red-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
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
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-sans">
                {lang === "hi" ? "विशेषज्ञ इंजीनियरिंग विभाग" : "Specialised Engineering Capabilities"}
              </h2>
            </div>

            <Link
              href="/contact"
              className="mt-6 sm:mt-0 inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md shadow-red-600/20 self-start sm:self-auto cursor-pointer"
            >
              {lang === "hi" ? "इंजीनियरिंग से संपर्क करें" : "Consult Our Team"}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {DISCIPLINES.map((d) => (
              <div
                key={d.id}
                className="bg-white border border-slate-200 hover:border-red-300 transition-all shadow-xs group flex flex-col justify-between"
              >
                <div className="w-full h-48 overflow-hidden relative bg-slate-100 border-b border-slate-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 text-start flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-1">
                      {d.name}
                    </h3>
                    <div className="text-xs font-semibold text-red-600 mb-2 font-mono">
                      {d.title}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
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
      <section className="py-16 sm:py-24 bg-white text-slate-900 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-5 font-sans">
            {lang === "hi"
              ? "क्या आपको आगामी बुनियादी ढांचा परियोजना के लिए तकनीकी सहायता की आवश्यकता है?"
              : "Need Technical Assistance for an Infrastructure Project?"}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            {lang === "hi"
              ? "अपनी स्थापना, परिचालन स्थितियों, नियंत्रण एकीकरण और तकनीकी विनिर्देशों के बारे में हमारी इंजीनियरिंग टीम से सीधे बात करें।"
              : "Discuss installation parameters, environmental conditions, control interface integration, and customized wiring diagrams directly with our engineering team."}
          </p>

          <div className="flex flex-col xs:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full xs:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-center text-xs sm:text-sm tracking-wide transition-all shadow-md shadow-red-600/20 cursor-pointer"
            >
              {lang === "hi" ? "कोटेशन का अनुरोध करें" : "Request a Technical Quote"}
            </Link>
            <Link
              href="/contact/engineering-team"
              className="w-full xs:w-auto px-8 py-4 border border-slate-300 hover:border-slate-400 bg-slate-50 text-slate-800 font-semibold text-center text-xs sm:text-sm tracking-wide transition-all cursor-pointer"
            >
              {lang === "hi" ? "इंजीनियरिंग टीम से संपर्क करें" : "Contact Engineering Team"}
            </Link>
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

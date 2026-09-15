"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import AramcoHeader from "../../components/AramcoHeader";
import NewsletterSection from "../../components/NewsletterSection";
import Footer from "../../components/Footer";
import { LanguageProvider, useLanguage } from "../../context/LanguageContext";

function EarthLeakageDetectorContent() {
  const { lang } = useLanguage();
  const [activeSpecTab, setActiveSpecTab] = useState<string>("continuous-monitoring");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const SPECS_NAV = [
    {
      id: "continuous-monitoring",
      label: lang === "hi" ? "निरंतर निगरानी" : "Continuous Monitoring",
    },
    {
      id: "true-rms",
      label: lang === "hi" ? "ट्रू RMS सेंसिंग" : "True RMS Sensing",
    },
    {
      id: "digital-display",
      label: lang === "hi" ? "डिजिटल डिस्प्ले" : "Digital Display",
    },
    {
      id: "adjustable-thresholds",
      label: lang === "hi" ? "थ्रेसहोल्ड सेटिंग्स" : "Thresholds",
    },
    {
      id: "technical-specs",
      label: lang === "hi" ? "तकनीकी तालिका" : "Datasheet Matrix",
    },
    {
      id: "wiring-schematics",
      label: lang === "hi" ? "वायरिंग गाइड" : "Wiring & CBCT",
    },
  ];

  useEffect(() => {
    const sectionIds = SPECS_NAV.map((s) => s.id);
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSpecTab(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SPEC_DATA_TABLE = [
    {
      param: lang === "hi" ? "लीकेज करंट सीमा" : "Leakage Current Trip Range",
      spec: "10mA to 30A (Multi-Range Selectable)",
      note: lang === "hi" ? "10mA, 30mA, 100mA, 300mA, 500mA, 1A, 3A, 5A, 10A, 30A" : "Configurable steps via front panel dials for sensitive or heavy feeder loads",
    },
    {
      param: lang === "hi" ? "मापन तकनीक" : "Measurement Technology",
      spec: "Microcontroller DSP-Based True RMS",
      note: lang === "hi" ? "हार्मोनिक फिल्टरिंग एवं VFD नॉइज़ इम्यूनिटी" : "Immune to high-frequency switching noise and harmonic distortion",
    },
    {
      param: lang === "hi" ? "ट्रिप विलंब समय" : "Adjustable Trip Delay",
      spec: "Instantaneous (< 30ms) to 5.0 Seconds",
      note: lang === "hi" ? "अपस्ट्रीम और डाउनस्ट्रीम सुरक्षा समन्वय हेतु" : "Selectable delay (Inst, 0.1s, 0.2s, 0.5s, 1.0s, 3.0s, 5.0s) for protection grading",
    },
    {
      param: lang === "hi" ? "डिजिटल डिस्प्ले" : "Telemetry & Display Readout",
      spec: "4-Digit High-Visibility 7-Segment LED / OLED",
      note: lang === "hi" ? "रीयल-टाइम लीकेज करंट (mA / A) एवं फॉल्ट मेमोरी" : "Displays live operational leakage in mA/A and recalls last 10 trip records",
    },
    {
      param: lang === "hi" ? "रिले आउटपुट" : "Output Trip Contacts",
      spec: "2 x Form C (C/O) Potential-Free Relays",
      note: lang === "hi" ? "6A @ 250V AC / 30V DC रेटेड (शंट ट्रिप व अलार्म हेतु)" : "Relay 1: Breaker Shunt / UV release; Relay 2: SCADA / Warning buzzer",
    },
    {
      param: lang === "hi" ? "सेंसर इनपुट (CBCT)" : "Core Balance Current Transformer",
      spec: "Compatible with 35mm, 70mm, 120mm, 210mm, 300mm Toroids",
      note: lang === "hi" ? "राउंड एवं रेक्टेंगुलर बसबार कोर उपलब्ध" : "Nano-crystalline high-permeability magnetic cores for micro-leakage accuracy",
    },
    {
      param: lang === "hi" ? "सहायक विद्युत आपूर्ति" : "Auxiliary Power Supply",
      spec: "110V - 240V AC / DC (±20%), 50/60 Hz (Universal)",
      note: lang === "hi" ? "कम बिजली खपत (< 3.5 VA)" : "Wide-band power supply operates stably across severe voltage fluctuations",
    },
    {
      param: lang === "hi" ? "माउंटिंग एवं फॉर्म फैक्टर" : "Mounting & Form Factor",
      spec: "Standard 35mm DIN Rail (EN 50022) / 96x96 Panel Door",
      note: lang === "hi" ? "कॉम्पैक्ट मॉड्यूलर एनक्लोजर" : "Engineered for compact MCC and distribution switchboard integration",
    },
    {
      param: lang === "hi" ? "डाइइलेक्ट्रिक स्ट्रेंथ" : "Dielectric Insulation Strength",
      spec: "2.5 kV AC 50 Hz for 1 Minute",
      note: lang === "hi" ? "उच्च वोल्टेज सर्ज एवं इम्पल्स सुरक्षा" : "Tested to withstand high transient surges and track flashovers",
    },
    {
      param: lang === "hi" ? "अंतर्राष्ट्रीय मानक अनुपालन" : "Regulatory Compliance",
      spec: "IEC 60947-2 Annex M, IEC 60755, IS 12640, CE Certified",
      note: lang === "hi" ? "रेलवे एवं भारी औद्योगिक सुरक्षा मानकों के अनुरूप" : "Full compliance with global electrical safety and fire-prevention codes",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#ff3131] selection:text-white relative font-sans">
      {/* 1. Header with Light Theme */}
      <AramcoHeader theme="light" />

      {/* 2. Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-[#f8f9fb] via-white to-white overflow-hidden pb-14 sm:pb-20 pt-28 sm:pt-36 border-b border-gray-100">
        {/* Subtle Decorative Ambient Accents */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-red-500/[0.04] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#ff3131]/[0.03] rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#ff3131_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 font-medium">
                <Link href="/" className="hover:text-[#ff3131] transition-colors">
                  {lang === "hi" ? "होम" : "Home"}
                </Link>
                <span>/</span>
                <span className="text-gray-400">
                  {lang === "hi" ? "उत्पाद" : "Products"}
                </span>
                <span>/</span>
                <span className="text-[#ff3131] font-semibold">
                  {lang === "hi" ? "डिजिटल अर्थ लीकेज डिटेक्टर" : "Digital Earth Leakage Detector"}
                </span>
              </nav>

              {/* Eyebrow Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 mb-4 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#ff3131] animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#ff3131]">
                  {lang === "hi" ? "उन्नत विद्युत सुरक्षा एवं इंसुलेशन डायग्नोस्टिक्स" : "Advanced Electrical Insulation Diagnostics"}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-light tracking-tight text-gray-950 font-sans mb-4 sm:mb-6 leading-[1.15]">
                {lang === "hi" ? (
                  <>
                    डिजिटल अर्थ लीकेज डिटेक्टर <br />
                    <span className="font-semibold text-gray-950">
                      सटीक ट्रू RMS <span className="text-[#ff3131]">इंसुलेशन सुरक्षा</span>
                    </span>
                  </>
                ) : (
                  <>
                    Digital Earth Leakage Detector <br />
                    <span className="font-semibold text-gray-950">
                      Precision True RMS <span className="text-[#ff3131]">Insulation Safety</span>
                    </span>
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed mb-8 max-w-2xl">
                {lang === "hi"
                  ? "रेलवे ट्रैक सिग्नलिंग सर्किट, औद्योगिक मोटर नियंत्रण केंद्र (MCC) और संवेदनशील पावर पैनलों में वास्तविक समय पर इंसुलेशन प्रतिरोध की निगरानी, ट्रू RMS मापन और सटीक फॉल्ट अलार्म।"
                  : "High-precision digital earth leakage relay engineered for continuous online insulation monitoring, harmonic-immune True RMS sensing, and lightning-fast microsecond fault tripping across mission-critical power networks."}
              </p>

              {/* Top Quick Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 mb-8">
                {/* Stat 1 */}
                <div className="relative p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md hover:border-[#ff3131]/40 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#ff3131] via-[#ff3131]/60 to-transparent" />
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff3131]" />
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-gray-400">
                      {lang === "hi" ? "संवेदनशीलता" : "Sensitivity"}
                    </span>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl xl:text-2xl font-bold text-gray-950 tracking-tight whitespace-nowrap">
                      10mA – 30A
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-500 font-medium leading-tight mt-1">
                      {lang === "hi" ? "सटीक थ्रेसहोल्ड सीमा" : "Trip Current Range"}
                    </div>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="relative p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md hover:border-[#ff3131]/40 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#ff3131] via-[#ff3131]/60 to-transparent" />
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff3131]" />
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-gray-400">
                      {lang === "hi" ? "सटीकता" : "Precision"}
                    </span>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl xl:text-2xl font-bold text-gray-950 tracking-tight whitespace-nowrap">
                      True RMS
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-500 font-medium leading-tight mt-1">
                      {lang === "hi" ? "हार्मोनिक-प्रतिरोधी" : "Harmonic Immunity"}
                    </div>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="relative p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md hover:border-[#ff3131]/40 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#ff3131] via-[#ff3131]/60 to-transparent" />
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff3131]" />
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-gray-400">
                      {lang === "hi" ? "प्रतिक्रिया" : "Response"}
                    </span>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl xl:text-2xl font-bold text-gray-950 tracking-tight whitespace-nowrap">
                      &lt; 30ms
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-500 font-medium leading-tight mt-1">
                      {lang === "hi" ? "त्वरित ट्रिप प्रतिक्रिया" : "Ultra-Fast Trip"}
                    </div>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="relative p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md hover:border-[#ff3131]/40 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#ff3131] via-[#ff3131]/60 to-transparent" />
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff3131]" />
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-gray-400">
                      {lang === "hi" ? "मानक" : "Compliance"}
                    </span>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl xl:text-2xl font-bold text-gray-950 tracking-tight whitespace-nowrap">
                      IEC 60947
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-500 font-medium leading-tight mt-1">
                      {lang === "hi" ? "प्रमाणित सुरक्षा मानक" : "Global Safety Standard"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Hero CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <a
                  href="#contact-engineering"
                  className="group inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#ff3131] hover:bg-[#d62828] text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>{lang === "hi" ? "कोटेशन का अनुरोध करें" : "Request Technical Quote"}</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href="#wiring-schematics"
                  className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full border border-gray-300 hover:border-gray-900 bg-white hover:bg-gray-50 text-gray-800 hover:text-gray-950 font-semibold text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{lang === "hi" ? "वायरिंग स्कीमेटिक्स देखें" : "View Wiring Schematics"}</span>
                </a>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-white p-2">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="/images/earth_leakage_detector_hero.jpg"
                    alt="Digital Earth Leakage Detector in Action"
                    className="w-full h-[360px] sm:h-[460px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg text-gray-900">
                    <span className="text-xs text-[#ff3131] font-bold uppercase tracking-wider block">
                      {lang === "hi" ? "फील्ड प्रमाणित उपकरण" : "Field-Proven Instrumentation"}
                    </span>
                    <span className="text-sm font-medium text-gray-800">
                      {lang === "hi"
                        ? "24/7 सक्रिय ग्राउंड लीकेज एवं इंसुलेशन डायग्नोस्टिक्स"
                        : "Continuous 24/7 online insulation resistance & earth leakage monitoring"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Sticky Product Sub-Navigation Bar */}
      <nav
        aria-label="Product Sub Navigation"
        className="sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-y border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-3 sm:gap-4">
            {/* Left: Product Anchor */}
            <div className="flex items-center space-x-2.5 sm:space-x-3 flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff3131] animate-pulse" />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-gray-950 tracking-tight leading-none whitespace-nowrap">
                  {lang === "hi" ? "अर्थ लीकेज डिटेक्टर" : "Earth Leakage Detector"}
                </span>
                <span className="text-[10px] text-gray-400 font-mono hidden md:inline leading-tight mt-0.5">
                  Series ELR-30 • True RMS
                </span>
              </div>
            </div>

            {/* Middle: Horizontal Nav Tabs */}
            <div className="flex items-center space-x-1 sm:space-x-1.5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1">
              {SPECS_NAV.map((nav) => {
                const isActive = activeSpecTab === nav.id;
                return (
                  <a
                    key={nav.id}
                    href={`#${nav.id}`}
                    onClick={() => setActiveSpecTab(nav.id)}
                    className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-[#ff3131] text-white shadow-sm shadow-red-500/25"
                        : "text-gray-600 hover:text-gray-950 hover:bg-gray-100/90"
                    }`}
                  >
                    {nav.label}
                  </a>
                );
              })}
            </div>

            {/* Right: Quick Action Quote CTA */}
            <div className="flex-shrink-0 hidden lg:flex items-center">
              <a
                href="#contact-engineering"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-950 hover:bg-[#ff3131] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span>{lang === "hi" ? "कोटेशन लें" : "Get Quote"}</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 4. Deep-Dive Specification Breakdown Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24 sm:space-y-32">

        {/* SPEC 1: CONTINUOUS INSULATION MONITORING */}
        <section id="continuous-monitoring" className="scroll-mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#ff3131] text-xs font-semibold uppercase tracking-wider">
                <span>01</span>
                <span>•</span>
                <span>{lang === "hi" ? "सतत लाइव निगरानी" : "Active Diagnostics"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-gray-950 tracking-tight font-sans">
                {lang === "hi" ? "निरंतर इंसुलेशन निगरानी" : "Continuous Insulation Monitoring"}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                {lang === "hi"
                  ? "पारंपरिक सुरक्षा प्रणालियाँ केवल तभी काम करती हैं जब शॉर्ट सर्किट या बड़ा फॉल्ट हो चुका होता है। ग्लोबल का डिजिटल अर्थ लीकेज डिटेक्टर बिना बिजली बंद किए 24/7 लाइव लाइनों पर सूक्ष्म इंसुलेशन गिरावट (Degradation) को ट्रैक करता है, जिससे आग और उपकरण विनाश से पहले ही सुरक्षा प्राप्त होती है।"
                  : "Traditional protection relays operate only after a catastrophic insulation flashover occurs. Our Digital Earth Leakage Detector continuously evaluates live conductor dielectric resistance without service interruption, alerting maintenance personnel to pre-fault leakage trends before catastrophic breaker trips or electrical fires happen."}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#f8f9fa] border border-gray-200 hover:border-red-200 hover:bg-white transition-all shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-[#ff3131] font-bold text-xs mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-gray-900 text-sm font-semibold">
                      {lang === "hi" ? "बिना शटडाउन के लाइव विश्लेषण" : "Online Live Line Evaluation"}
                    </h4>
                    <p className="text-gray-600 text-xs mt-0.5">
                      {lang === "hi"
                        ? "संवेदनशील रेलवे ट्रैक सर्किट और सतत विनिर्माण संयंत्रों में शून्य डाउनटाइम।"
                        : "Continuous diagnostic scanning across ungrounded (IT) and solidly grounded (TN-S/TT) distribution networks without shutting down loads."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#f8f9fa] border border-gray-200 hover:border-red-200 hover:bg-white transition-all shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-[#ff3131] font-bold text-xs mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-gray-900 text-sm font-semibold">
                      {lang === "hi" ? "प्री-अलार्म प्रारंभिक चेतावनी स्तर (70%)" : "Predictive Pre-Alarm Warning at 70%"}
                    </h4>
                    <p className="text-gray-600 text-xs mt-0.5">
                      {lang === "hi"
                        ? "लीकेज 70% थ्रेसहोल्ड तक पहुंचते ही चेतावनी एम्बर एलईडी जलती है, जिससे समय रहते रखरखाव संभव होता है।"
                        : "Amber visual indicator and secondary dry contact engage when insulation degradation reaches 70% of the set trip threshold."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#f8f9fa] border border-gray-200 hover:border-red-200 hover:bg-white transition-all shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-[#ff3131] font-bold text-xs mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-gray-900 text-sm font-semibold">
                      {lang === "hi" ? "हाई इम्पीडेंस फॉल्ट पहचान" : "High-Impedance Micro-Fault Sensing"}
                    </h4>
                    <p className="text-gray-600 text-xs mt-0.5">
                      {lang === "hi"
                        ? "केबल इंसुलेशन में नमी, चूहे द्वारा कतरने या एजिंग के कारण होने वाले सूक्ष्म रिसाव को तुरंत पकड़ता है।"
                        : "Detects sub-milliamp dielectric deterioration caused by cable jacket moisture ingress, mechanical crushing, or insulation aging."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white group">
                <img
                  src="/images/power_distribution_eld.jpg"
                  alt="Continuous Insulation Monitoring"
                  className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-md text-gray-900">
                  <span className="text-xs text-[#ff3131] font-bold uppercase tracking-wider block">
                    {lang === "hi" ? "निरंतर परिचालन" : "Continuous Protection"}
                  </span>
                  <span className="text-sm text-gray-800 font-medium">
                    {lang === "hi"
                      ? "पावर डिस्ट्रीब्यूशन पैनलों में बिना किसी व्यवधान के 24/7 सुरक्षा निगरानी"
                      : "24/7 uncompromised electrical fire prevention in mission-critical power distribution centres"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPEC 2: TRUE RMS CURRENT MEASUREMENT */}
        <section id="true-rms" className="scroll-mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white group">
                <img
                  src="/images/eld_engineering_lab.jpg"
                  alt="True RMS Current Measurement Lab"
                  className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-md text-gray-900">
                  <span className="text-xs text-[#ff3131] font-bold uppercase tracking-wider block">
                    {lang === "hi" ? "हार्मोनिक फिल्टरिंग" : "DSP Harmonic Rejection"}
                  </span>
                  <span className="text-sm text-gray-800 font-medium">
                    {lang === "hi"
                      ? "VFD ड्राइव्स और सोलर इन्वर्टर से उत्पन्न अवांछित ट्रिपिंग का 100% समाधान"
                      : "High-order active filtering rejects high-frequency PWM switching harmonics and false line noise"}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#ff3131] text-xs font-semibold uppercase tracking-wider">
                <span>02</span>
                <span>•</span>
                <span>{lang === "hi" ? "सटीक सिग्नल प्रोसेसिंग" : "Signal Precision"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-gray-950 tracking-tight font-sans">
                {lang === "hi" ? "ट्रू RMS करंट मापन तकनीक" : "True RMS Current Measurement"}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                {lang === "hi"
                  ? "आधुनिक औद्योगिक वातावरण में वैरिएबल फ्रीक्वेंसी ड्राइव (VFD), स्विच-मोड पावर सप्लाई (SMPS) और यूपीएस सिस्टम भारी हार्मोनिक विकृति पैदा करते हैं। पारंपरिक एनालॉग रिले इनमें झूठी ट्रिपिंग (Nuisance Tripping) कर बैठते हैं। हमारा डिजिटल रिले उच्च-गति 32-बिट माइक्रोप्रोसेसर के साथ वास्तविक ट्रू RMS गणना करता है।"
                  : "Modern industrial switchgear powers non-linear loads: variable frequency drives (VFDs), UPS banks, DC rectifiers, and servo inverters. Ordinary relays suffer frequent nuisance trips from waveform distortion. Our DSP architecture samples waveforms thousands of times per cycle, calculating authentic True RMS leakage current while rejecting benign switching spikes."}
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-gray-200 hover:border-red-200 hover:bg-white shadow-sm transition-all">
                  <h4 className="text-gray-900 text-sm font-semibold flex items-center justify-between">
                    <span>{lang === "hi" ? "गैर-रैखिक लोड हार्मोनिक इम्यूनिटी" : "Non-Linear Harmonic Immunity"}</span>
                    <span className="text-xs text-[#ff3131] font-mono font-semibold bg-red-50 px-2 py-0.5 rounded border border-red-200">Up to 15th Harmonic</span>
                  </h4>
                  <p className="text-gray-600 text-xs mt-1">
                    {lang === "hi"
                      ? "3रे, 5वें और 7वें हार्मोनिक कंपोनेंट्स को सटीक रूप से अलग कर केवल वास्तविक ग्राउंड लीकेज पर ट्रिप करता है।"
                      : "Differentiates true conductive fault leakage from capacitive charging currents and high-frequency inverter ripple."}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-gray-200 hover:border-red-200 hover:bg-white shadow-sm transition-all">
                  <h4 className="text-gray-900 text-sm font-semibold flex items-center justify-between">
                    <span>{lang === "hi" ? "कोर बैलेंस करंट ट्रांसफॉर्मर (CBCT) एकीकरण" : "Toroidal Core Balance CT Precision"}</span>
                    <span className="text-xs text-[#ff3131] font-mono font-semibold bg-red-50 px-2 py-0.5 rounded border border-red-200">High-Mu Core</span>
                  </h4>
                  <p className="text-gray-600 text-xs mt-1">
                    {lang === "hi"
                      ? "नैनो-क्रिस्टलीय हाई-पर्मिएबिलिटी मैग्नेटिक कोर जो 10mA के अति-सूक्ष्म लीकेज पर भी लीनियर आउटपुट देता है।"
                      : "Ultra-low magnetic saturation toroidal sensors accommodate conductors up to 300mm without flux drift."}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-gray-200 hover:border-red-200 hover:bg-white shadow-sm transition-all">
                  <h4 className="text-gray-900 text-sm font-semibold flex items-center justify-between">
                    <span>{lang === "hi" ? "शून्य-क्रॉसिंग सिंक्रनाइज़ेशन" : "Zero-Crossing Fast Fault Tripping"}</span>
                    <span className="text-xs text-[#ff3131] font-mono font-semibold bg-red-50 px-2 py-0.5 rounded border border-red-200">&lt; 30ms Instantaneous</span>
                  </h4>
                  <p className="text-gray-600 text-xs mt-1">
                    {lang === "hi"
                      ? "घातक लाइव करंट संपर्क होने पर मानव जीवन की रक्षा हेतु 30 मिलीसेकंड से भी कम समय में ब्रेकर ट्रिप।"
                      : "Instantaneous trip response ensures touch-voltage protection and rapid MCCB shunt actuation under human contact hazards."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPEC 3: REAL-TIME DIGITAL DISPLAY */}
        <section id="digital-display" className="scroll-mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#ff3131] text-xs font-semibold uppercase tracking-wider">
                <span>03</span>
                <span>•</span>
                <span>{lang === "hi" ? "टेलीमेट्री एवं डिस्प्ले" : "Telemetry & Diagnostics"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-gray-950 tracking-tight font-sans">
                {lang === "hi" ? "रीयल-टाइम डिजिटल डिस्प्ले एवं इवेंट लॉग" : "Real-Time Digital Display & Diagnostics"}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                {lang === "hi"
                  ? "फ्रंट पैनल पर स्थित उच्च-कंट्रास्ट 4-अंकीय 7-सेगमेंट डिजिटल डिस्प्ले पैनल पर काम करने वाले इंजीनियरों को वास्तविक समय में सिस्टम का लाइव लीकेज करंट (mA या Amperes में) दिखाता है। आंतरिक नॉन-वोलेटाइल मेमोरी पिछले 10 ट्रिप इवेंट्स के सटीक आंकड़े सुरक्षित रखती है।"
                  : "Panel operators can immediately assess electrical health via an ultra-bright 4-digit digital readout showing real-time leakage current. Onboard non-volatile memory logs the exact fault amplitude and phase condition for the last 10 trip events, drastically reducing post-trip troubleshooting hours."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-xl bg-white border border-gray-200 hover:border-red-200 shadow-sm transition-all">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#ff3131] mb-1">
                    {lang === "hi" ? "लाइव करंट टेलीमेट्री" : "Live Telemetry"}
                  </div>
                  <div className="text-xl font-bold text-gray-900 font-sans">0.0mA - 30.0A</div>
                  <p className="text-gray-600 text-xs mt-1">
                    {lang === "hi"
                      ? "1mA रेजोल्यूशन के साथ रीयल-टाइम डिजिटल वैल्यू।"
                      : "Continuous auto-ranging display with crisp 1mA resolution."}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-200 hover:border-red-200 shadow-sm transition-all">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#ff3131] mb-1">
                    {lang === "hi" ? "इवेंट फॉल्ट हिस्ट्री" : "Event Memory Log"}
                  </div>
                  <div className="text-xl font-bold text-gray-900 font-sans">Last 10 Trips</div>
                  <p className="text-gray-600 text-xs mt-1">
                    {lang === "hi"
                      ? "बिजली जाने पर भी सुरक्षित रहने वाली गैर-वाष्पशील फॉल्ट मेमोरी।"
                      : "Retains fault magnitude and timestamp even during total blackout."}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-200 hover:border-red-200 shadow-sm transition-all">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#ff3131] mb-1">
                    {lang === "hi" ? "ट्राई-कलर स्टेटस एलईडी" : "Tri-Color Status LEDs"}
                  </div>
                  <div className="text-xl font-bold text-gray-900 font-sans">Normal / Warn / Trip</div>
                  <p className="text-gray-600 text-xs mt-1">
                    {lang === "hi"
                      ? "ग्रीन (सामान्य), एम्बर (70% चेतावनी), रेड (ट्रिप) स्पष्ट संकेत।"
                      : "Instant visual diagnostic indication visible from across the switchboard."}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-200 hover:border-red-200 shadow-sm transition-all">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#ff3131] mb-1">
                    {lang === "hi" ? "रिमोट टेस्ट एवं रीसेट" : "Remote Reset Terminals"}
                  </div>
                  <div className="text-xl font-bold text-gray-900 font-sans">Dry Contact Reset</div>
                  <p className="text-gray-600 text-xs mt-1">
                    {lang === "hi"
                      ? "कंट्रोल रूम या पीएलसी (PLC) से रिमोट रीसेट करने की सुविधा।"
                      : "Direct wiring for remote pushbuttons and central DCS/SCADA command."}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white group">
                <img
                  src="/images/earth_leakage_detector_hero.jpg"
                  alt="Real-Time Digital Display & Diagnostics"
                  className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-md text-gray-900">
                  <span className="text-xs text-[#ff3131] font-bold uppercase tracking-wider block">
                    {lang === "hi" ? "आसान ऑपरेशन" : "Intuitive Operation"}
                  </span>
                  <span className="text-sm text-gray-800 font-medium">
                    {lang === "hi"
                      ? "पैनल बंद किए बिना तुरंत डायग्नोस्टिक्स और पैरामीटर सत्यापन"
                      : "Direct telemetry display enables instantaneous fault isolation without multimeters"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPEC 4: ADJUSTABLE TRIP THRESHOLDS */}
        <section id="adjustable-thresholds" className="scroll-mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gradient-to-b from-[#f8f9fb] to-white p-8 flex items-center justify-center">
                <img
                  src="/images/earth_leakage_detector_original.png"
                  alt="Adjustable Trip Threshold Hardware"
                  className="max-h-[380px] w-auto object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.12)]"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-md text-gray-900">
                  <span className="text-xs text-[#ff3131] font-bold uppercase tracking-wider block">
                    {lang === "hi" ? "कस्टम थ्रेसहोल्ड" : "Field Programmable"}
                  </span>
                  <span className="text-sm text-gray-800 font-medium">
                    {lang === "hi"
                      ? "रोटरी स्विच और डिजिटल डायल द्वारा आसान व सुरक्षित अंशांकन"
                      : "Multi-position rotary dials with tamper-evident sealable transparent cover"}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#ff3131] text-xs font-semibold uppercase tracking-wider">
                <span>04</span>
                <span>•</span>
                <span>{lang === "hi" ? "सुरक्षा समन्वय" : "Protection Coordination"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-gray-950 tracking-tight font-sans">
                {lang === "hi" ? "एडजस्टेबल ट्रिप थ्रेसहोल्ड एवं रिले" : "Adjustable Trip Thresholds & Relays"}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                {lang === "hi"
                  ? "प्रत्येक औद्योगिक पैनल और रेलवे स्थापना की विद्युत विशेषताएं अलग होती हैं। हमारे डिटेक्टर में 10mA से 30A तक 10-चरणीय करंट चयन और तात्कालिक (<30ms) से लेकर 5.0 सेकंड तक का टाइम डिले उपलब्ध है, जिससे मुख्य और उप-पैनलों के बीच संपूर्ण चयनात्मक समन्वय (Discrimination) बनता है।"
                  : "Different electrical distribution topologies require distinct trip levels. Our unit incorporates a 10-step rotary current selector (10mA to 30A) and an adjustable time delay selector (Instantaneous to 5.0s), guaranteeing complete protective discrimination between upstream substation mains and downstream feeder boards."}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#f8f9fa] border border-gray-200 hover:border-red-200 hover:bg-white shadow-sm transition-all">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-[#ff3131] font-bold text-xs mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-gray-900 text-sm font-semibold">
                      {lang === "hi" ? "दोहरे पोटेंशियल-फ्री C/O रिले आउटपुट" : "Dual Potential-Free Relay Outputs"}
                    </h4>
                    <p className="text-gray-600 text-xs mt-0.5">
                      {lang === "hi"
                        ? "रिले 1 को सर्किट ब्रेकर शंट ट्रिप या अंडरवोल्टेज रिलीज हेतु, तथा रिले 2 को सायरन या SCADA अलार्म हेतु स्वतंत्र रूप से कॉन्फ़िगर करें।"
                        : "Independent Form C contacts rated 6A @ 250V AC: Relay 1 for MCCB shunt release, Relay 2 for SCADA / audible horn."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#f8f9fa] border border-gray-200 hover:border-red-200 hover:bg-white shadow-sm transition-all">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-[#ff3131] font-bold text-xs mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-gray-900 text-sm font-semibold">
                      {lang === "hi" ? "सुरक्षित सील करने योग्य पारदर्शी कवर" : "Tamper-Evident Sealable Window"}
                    </h4>
                    <p className="text-gray-600 text-xs mt-0.5">
                      {lang === "hi"
                        ? "अनाधिकृत कर्मियों द्वारा सेटिंग्स में किसी भी बदलाव को रोकने के लिए वायर-सील लॉक की सुविधा।"
                        : "Clear protective polycarbonate cover can be lead-sealed to prevent unauthorized threshold tampering after commissioning."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#f8f9fa] border border-gray-200 hover:border-red-200 hover:bg-white shadow-sm transition-all">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-[#ff3131] font-bold text-xs mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-gray-900 text-sm font-semibold">
                      {lang === "hi" ? "मैनुअल / ऑटो रीसेट चयन स्विच" : "Manual vs Automatic Reset Mode Selector"}
                    </h4>
                    <p className="text-gray-600 text-xs mt-0.5">
                      {lang === "hi"
                        ? "सुरक्षा नियमों के अनुसार फॉल्ट हटने के बाद स्वतः रीसेट या केवल अधिकृत ऑपरेटर द्वारा मैनुअल रीसेट का चयन।"
                        : "DIP switch selectable auto-reset (for unmanned trackside substations) or latching manual reset (for plant operator clearance)."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Comprehensive Technical Specification Matrix Table */}
        <section id="technical-specs" className="scroll-mt-36">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ff3131]/10 border border-[#ff3131]/20 text-[#ff3131] text-xs font-semibold uppercase tracking-wider mb-3">
              <span>{lang === "hi" ? "इंजीनियरिंग डेटाशीट" : "Engineering Datasheet"}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-light text-gray-950 tracking-tight font-sans">
              {lang === "hi" ? "विस्तृत तकनीकी विनिर्देश तालिका" : "Technical Specification Matrix"}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light mt-3">
              {lang === "hi"
                ? "डिजिटल अर्थ लीकेज डिटेक्टर के इलेक्ट्रिकल, ऑपरेटिंग और सुरक्षा मानकों का संपूर्ण विवरण"
                : "Full operational ratings, sensor specifications, and compliance standards for electrical designers and consultants."}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-xl">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-[#f8f9fa]">
                  <th className="py-4 px-5 sm:px-6 font-semibold text-gray-900 tracking-wider uppercase text-xs">
                    {lang === "hi" ? "पैरामीटर" : "Parameter"}
                  </th>
                  <th className="py-4 px-5 sm:px-6 font-semibold text-[#ff3131] tracking-wider uppercase text-xs">
                    {lang === "hi" ? "मान / विनिर्देश" : "Specification Value"}
                  </th>
                  <th className="py-4 px-5 sm:px-6 font-semibold text-gray-500 tracking-wider uppercase text-xs hidden md:table-cell">
                    {lang === "hi" ? "विवरण एवं मानक" : "Notes & Standards"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-light">
                {SPEC_DATA_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-3.5 px-5 sm:px-6 font-medium text-gray-900 whitespace-nowrap">
                      {row.param}
                    </td>
                    <td className="py-3.5 px-5 sm:px-6 text-gray-800 font-mono text-xs sm:text-sm font-normal">
                      {row.spec}
                    </td>
                    <td className="py-3.5 px-5 sm:px-6 text-gray-600 text-xs hidden md:table-cell">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. Wiring Schematics & Installation Guidelines */}
        <section id="wiring-schematics" className="scroll-mt-36">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ff3131]/10 border border-[#ff3131]/30 text-[#ff3131] text-xs font-semibold uppercase tracking-wider mb-3">
              <span>{lang === "hi" ? "स्थापना एवं एकीकरण" : "Installation Architecture"}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-light text-gray-950 tracking-tight font-sans">
              {lang === "hi" ? "वायरिंग एवं सीबीसीटी (CBCT) कनेक्शन गाइड" : "Wiring Schematics & CBCT Integration"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Schematic Step-by-Step Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#f8f9fa] border border-gray-200 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {lang === "hi" ? "सीबीसीटी (CBCT) कोर कनेक्शन नियम" : "Essential CBCT Installation Rules"}
                </h3>
                <div className="space-y-4 text-xs sm:text-sm text-gray-700 font-light">
                  <div className="flex items-start space-x-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff3131] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow-sm">
                      1
                    </span>
                    <p>
                      {lang === "hi"
                        ? "सभी 3 फेज (R, Y, B) और न्यूट्रल (N) केबलों को एक साथ सीबीसीटी रिंग के अंदर से गुजारें।"
                        : "Pass all 3 Phase conductors (L1, L2, L3) and Neutral (N) through the CBCT aperture in the same direction."}
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff3131] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow-sm">
                      2
                    </span>
                    <p>
                      {lang === "hi"
                        ? "सुरक्षा अर्थ (PE) तार को सीबीसीटी के अंदर से कभी न गुजारें; यह रिंग के बाहर से सीधे अर्थ बसबार तक जाना चाहिए।"
                        : "NEVER pass the protective Earth (PE) conductor through the CBCT core. Ground shields must bypass outside the core."}
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff3131] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow-sm">
                      3
                    </span>
                    <p>
                      {lang === "hi"
                        ? "सीबीसीटी सेकेंडरी तारों (S1, S2) को ट्विस्टेड पेयर के रूप में रिले के इनपुट टर्मिनलों से जोड़ें।"
                        : "Use twisted-pair shielded cable (max 10m) between CBCT secondary terminals (S1, S2) and relay sensor input."}
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff3131] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow-sm">
                      4
                    </span>
                    <p>
                      {lang === "hi"
                        ? "रिले आउटपुट कॉन्टैक्ट (11-14 NO) को एमसीसीबी के शंट ट्रिप कॉइल से सीरीज में कनेक्ट करें।"
                        : "Connect Relay Trip Contact (Terminals 11-14 NO) in series with the MCCB/ACB Shunt Trip Release Coil."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 text-xs text-gray-600 shadow-sm">
                <span className="text-[#ff3131] font-semibold block mb-1">
                  {lang === "hi" ? "तकनीकी सलाह:" : "Engineering Advisory:"}
                </span>
                {lang === "hi"
                  ? "यदि केबल आर्मर्ड है, तो आर्मर अर्थिंग तार को वापस सीबीसीटी रिंग के अंदर से घुमाकर अर्थ पर जोड़ना चाहिए।"
                  : "If armored cable is used, ensure the metallic armor bonding conductor loops backward through the CBCT before terminating to ground."}
              </div>
            </div>

            {/* Terminal Diagram Representation */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-white to-[#f8f9fa] border border-gray-200 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {lang === "hi" ? "टर्मिनल ब्लॉक लेआउट" : "Terminal Block Configuration"}
                </h3>
                <p className="text-gray-600 text-xs mb-6">
                  {lang === "hi" ? "मानक 35mm डीआईएन रेल मॉड्यूल टर्मिनल विवरण" : "Standard 35mm DIN-Rail modular enclosure pinout map"}
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200 shadow-sm">
                    <span className="text-[#ff3131] font-bold">Terminals 1 - 2</span>
                    <span className="text-gray-700">Aux Power Supply (110-240V AC/DC)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200 shadow-sm">
                    <span className="text-[#ff3131] font-bold">Terminals 3 - 4</span>
                    <span className="text-gray-700">CBCT Toroidal Sensor Input (S1 - S2)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200 shadow-sm">
                    <span className="text-[#ff3131] font-bold">Terminals 5 - 6</span>
                    <span className="text-gray-700">Remote Reset / Pushbutton Input</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200 shadow-sm">
                    <span className="text-[#ff3131] font-bold">Terminals 11 - 12 - 14</span>
                    <span className="text-gray-700">Relay 1 (Trip / Breaker Shunt C/O)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200 shadow-sm">
                    <span className="text-[#ff3131] font-bold">Terminals 21 - 22 - 24</span>
                    <span className="text-gray-700">Relay 2 (Alarm / Telemetry C/O)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                <span className="text-xs text-gray-600 font-sans">
                  {lang === "hi" ? "विस्तृत सीएडी एवं वायरिंग स्कीमेटिक पीडीएफ" : "Full CAD & wiring diagram schematics"}
                </span>
                <a
                  href="#contact-engineering"
                  className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  {lang === "hi" ? "पीडीएफ डाउनलोड" : "Request PDF"}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Request a Quote / Engineering Consultation Section */}
        <section id="contact-engineering" className="scroll-mt-36">
          <div className="rounded-3xl bg-gradient-to-b from-[#f8f9fb] to-white border border-gray-200 p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ff3131]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#ff3131]">
                  {lang === "hi" ? "प्रत्यक्ष तकनीकी सहयोग" : "Direct Technical Consultation"}
                </span>
                <h2 className="text-2xl sm:text-4xl font-light text-gray-950 tracking-tight font-sans">
                  {lang === "hi" ? "अर्थ लीकेज सुरक्षा हेतु विशेषज्ञ कोटेशन प्राप्त करें" : "Request an Earth Leakage Engineering Quote"}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
                  {lang === "hi"
                    ? "हमारे इलेक्ट्रिकल प्रोटेक्शन इंजीनियर आपकी स्विचगियर रेटिंग, मोटर लोड, बसबार आयाम और सीबीसीटी आवश्यकताओं के अनुसार अनुकूलित तकनीकी प्रस्ताव तैयार करेंगे।"
                    : "Consult our power protection engineers to select the optimal CBCT aperture diameter, sensitivity threshold range, and coordinated relay grading for your switchboard installation."}
                </p>

                <div className="pt-4 space-y-2 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#ff3131]">●</span>
                    <span>{lang === "hi" ? "24 घंटे में तकनीकी डेटाशीट एवं मूल्य कोटेशन" : "Technical datasheet and commercial quote within 24 hours"}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#ff3131]">●</span>
                    <span>{lang === "hi" ? "सीबीसीटी आकार एवं बसबार अनुकूलता मार्गदर्शन" : "CBCT sizing and busbar clearance selection assistance"}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#ff3131]">●</span>
                    <span>{lang === "hi" ? "परीक्षण एवं ऑन-साइट कमीशनिंग समर्थन" : "On-site relay testing and trip coordination advisory"}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-white border border-gray-200 text-center space-y-4 shadow-xl animate-in fade-in duration-300">
                    <div className="w-14 h-14 mx-auto rounded-full bg-[#ff3131]/10 flex items-center justify-center text-[#ff3131] text-2xl font-bold">
                      ✓
                    </div>
                    <h3 className="text-xl font-medium text-gray-900">
                      {lang === "hi" ? "अनुरोध सफलतापूर्वक प्राप्त हुआ" : "Inquiry Received Successfully"}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm font-light">
                      {lang === "hi"
                        ? "हमारी पावर इलेक्ट्रॉनिक्स टीम आपके प्रोजेक्ट विनिर्देशों की समीक्षा कर शीघ्र संपर्क करेगी।"
                        : "Our electrical protection specialists will review your panel specifications and reply promptly with engineering drawings and commercial quotes."}
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      {lang === "hi" ? "नया अनुरोध सबमिट करें" : "Submit Another Inquiry"}
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSubmitted(true);
                    }}
                    className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-xl space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-gray-700 mb-1.5">
                        {lang === "hi" ? "पूरा नाम" : "Full Name"} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={lang === "hi" ? "उदा. सुनील वर्मा" : "e.g. Michael Smith"}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f8f9fa] border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:bg-white focus:border-[#ff3131] transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-gray-700 mb-1.5">
                          {lang === "hi" ? "कंपनी / संगठन" : "Organization / EPC"} *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={lang === "hi" ? "उदा. पैनल बिल्डर्स प्रा. लि." : "e.g. Switchgear Systems Ltd"}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#f8f9fa] border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:bg-white focus:border-[#ff3131] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-gray-700 mb-1.5">
                          {lang === "hi" ? "फोन नंबर" : "Phone Number"} *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 / Country Code"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#f8f9fa] border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:bg-white focus:border-[#ff3131] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-gray-700 mb-1.5">
                          {lang === "hi" ? "ईमेल पता" : "Work Email"} *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="protection@org.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#f8f9fa] border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:bg-white focus:border-[#ff3131] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-gray-700 mb-1.5">
                          {lang === "hi" ? "आवश्यक सीबीसीटी आकार" : "CBCT Aperture Size"}
                        </label>
                        <select className="w-full px-4 py-2.5 rounded-xl bg-[#f8f9fa] border border-gray-300 text-gray-900 text-sm focus:outline-none focus:bg-white focus:border-[#ff3131] transition-colors">
                          <option value="35mm">35mm Inner Diameter (Up to 50 sq mm)</option>
                          <option value="70mm">70mm Inner Diameter (Up to 150 sq mm)</option>
                          <option value="120mm">120mm Inner Diameter (Up to 400 sq mm)</option>
                          <option value="210mm">210mm Inner Diameter (Heavy Busbars)</option>
                          <option value="rectangular">Rectangular Split-Core Busbar</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-gray-700 mb-1.5">
                        {lang === "hi" ? "परियोजना विवरण एवं अनुप्रयोग" : "Application Details & Panel Type"}
                      </label>
                      <textarea
                        rows={3}
                        placeholder={lang === "hi" ? "मोटर कंट्रोल सेंटर (MCC), रेलवे ट्रैक सर्किट या सबस्टेशन फीडर..." : "Specify switchboard type, feeder rated current, VFD presence, or quantity needed..."}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f8f9fa] border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:bg-white focus:border-[#ff3131] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-full bg-[#ff3131] hover:bg-[#d62828] text-white font-medium text-sm sm:text-base uppercase tracking-wider transition-all shadow-md shadow-[#ff3131]/20 cursor-pointer"
                    >
                      {lang === "hi" ? "अनुरोध सबमिट करें" : "Submit Earth Leakage Quote Request"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* 8. Newsletter Section */}
      <NewsletterSection />

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}

export default function EarthLeakageDetectorPage() {
  return (
    <LanguageProvider>
      <EarthLeakageDetectorContent />
    </LanguageProvider>
  );
}

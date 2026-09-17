"use client";

import React, { useState } from "react";
import Link from "next/link";
import AramcoHeader from "../../components/AramcoHeader";
import NewsletterSection from "../../components/NewsletterSection";
import Footer from "../../components/Footer";
import { LanguageProvider, useLanguage } from "../../context/LanguageContext";

function RailwayBarrierContent() {
  const { lang } = useLanguage();
  const [activeSpecTab, setActiveSpecTab] = useState<string>("fail-safe-boom");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const SPECS_NAV = [
    {
      id: "fail-safe-boom",
      label: lang === "hi" ? "फेल-सेफ बूम" : "Fail-Safe Boom",
      code: "SPEC-01",
    },
    {
      id: "obstacle-detection",
      label: lang === "hi" ? "अवरोध पहचान" : "Obstacle Detection",
      code: "SPEC-02",
    },
    {
      id: "power-backup",
      label: lang === "hi" ? "पावर बैकअप" : "Power Backup & Override",
      code: "SPEC-03",
    },
    {
      id: "weatherproof-enclosure",
      label: lang === "hi" ? "वेदरप्रूफ एनक्लोजर" : "Weatherproof Enclosure",
      code: "SPEC-04",
    },
    {
      id: "technical-specs",
      label: lang === "hi" ? "डेटाशीट मैट्रिक्स" : "Technical Matrix",
      code: "SPEC-05",
    },
    {
      id: "applications",
      label: lang === "hi" ? "अनुप्रयोग" : "Field Applications",
      code: "SPEC-06",
    },
  ];

  const SPEC_DATA_TABLE = [
    {
      param: lang === "hi" ? "ड्राइव मोटर प्रकार" : "Drive Motor Architecture",
      spec: "Brushless DC (BLDC) Planetary Gear Drive",
      note: lang === "hi" ? "शून्य रखरखाव, उच्च टॉर्क एवं 100% ड्यूटी साइकिल" : "High torque, maintenance-free continuous Class S1 duty rating",
    },
    {
      param: lang === "hi" ? "फेल-सेफ आर्किटेक्चर" : "Fail-Safe Operation Mode",
      spec: "Mechanical Counterweight & Gravity Drop / Fail-Secure",
      note: lang === "hi" ? "बिजली कटने पर सुरक्षित स्वतः स्थिति निर्धारण" : "Default safe posture engaged via electromagnetic clutch",
    },
    {
      param: lang === "hi" ? "परिचालन गति (ओपनिंग / क्लोजिंग)" : "Opening / Closing Speed",
      spec: "1.5s – 6.0s (Digitally Configurable)",
      note: lang === "hi" ? "सॉफ्ट-स्टार्ट और सॉफ्ट-स्टॉप त्वरण नियंत्रण" : "Electronic S-curve acceleration and deceleration damping",
    },
    {
      param: lang === "hi" ? "बूम की अधिकतम लंबाई" : "Maximum Boom Span",
      spec: "3.0 Metres to 8.0 Metres (Octagonal)",
      note: lang === "hi" ? "3M रिफ्लेक्टिव स्ट्रिप्स एवं उच्च-चमक एलईडी" : "Extruded aerodynamically stable aluminium alloy arm",
    },
    {
      param: lang === "hi" ? "आवरण सुरक्षा रेटिंग" : "Ingress Protection Rating",
      spec: "IP66 / NEMA 4X Certified Enclosure",
      note: lang === "hi" ? "धूल, भारी मानसूनी बारिश और संक्षारण प्रतिरोधी" : "3mm zinc-phosphated steel with electrostatic polyester coat",
    },
    {
      param: lang === "hi" ? "इंटरफेस एवं नियंत्रण" : "Signaling & SCADA Interface",
      spec: "Dry Relay Contacts / RS-485 Modbus-RTU",
      note: lang === "hi" ? "रेलवे इंटरलॉकिंग रिले एवं ईआई से सीधा कनेक्शन" : "Direct interface with railway relay interlocking and telemetry systems",
    },
    {
      param: lang === "hi" ? "ड्यूटी साइकिल रेटिंग" : "Mechanical Lifetime Cycles",
      spec: "> 5,000,000 Continuous MTBF Cycles",
      note: lang === "hi" ? "रेलवे क्रॉसिंग के 24/7 निरंतर उपयोग हेतु प्रमाणित" : "Bench-tested for heavy round-the-clock railway corridor duty",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#ff3131] selection:text-white relative font-sans">
      {/* 1. Light Header at Top */}
      <AramcoHeader theme="light" />

      {/* 2. Hero Section */}
      <section className="relative w-full overflow-hidden pb-14 sm:pb-20 pt-28 sm:pt-36 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-gray-950 font-sans mb-4 sm:mb-6 leading-[1.15]">
                {lang === "hi" ? (
                  <>
                    रेलवे बैरियर सिस्टम <br />
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ff3131] via-[#d62828] to-gray-900">
                      फेल-सेफ ऑटोमेशन इंजीनियरिंग
                    </span>
                  </>
                ) : (
                  <>
                    Railway Barrier System <br />
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ff3131] via-[#d62828] to-gray-900">
                      Fail-Safe Automation Engineering
                    </span>
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light leading-relaxed mb-8">
                {lang === "hi"
                  ? "रेलवे लेवल क्रॉसिंग, हाई-ट्रैफिक ट्रांजिट कॉरिडोर और रणनीतिक बुनियादी ढांचे के लिए 100% फेल-सेफ आर्किटेक्चर, अत्यधिक टिकाऊ बीएलडीसी ड्राइव और रीयल-टाइम सिग्नलिंग एकीकरण के साथ निर्मित।"
                  : "Precision automated boom barriers engineered for railway level crossings, high-traffic corridors, and critical facilities with default-to-safe mechanics, optical interlocks, and continuous 24/7 reliability."}
              </p>

              {/* Top Quick Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 mb-8">
                {/* Stat 1 */}
                <div className="relative p-3.5 sm:p-4 bg-white border border-gray-200/90 shadow-xs hover:border-[#ff3131]/40 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#ff3131] via-[#ff3131]/60 to-transparent" />
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="w-1.5 h-1.5 bg-[#ff3131]" />
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-gray-400">
                      {lang === "hi" ? "आर्किटेक्चर" : "Architecture"}
                    </span>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl xl:text-2xl font-bold text-gray-950 tracking-tight whitespace-nowrap">
                      100%
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-500 font-medium leading-tight mt-1">
                      {lang === "hi" ? "फेल-सेफ डिफॉल्ट" : "Fail-Safe Architecture"}
                    </div>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="relative p-3.5 sm:p-4 bg-white border border-gray-200/90 shadow-xs hover:border-[#ff3131]/40 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#ff3131] via-[#ff3131]/60 to-transparent" />
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="w-1.5 h-1.5 bg-[#ff3131]" />
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-gray-400">
                      {lang === "hi" ? "गति" : "Velocity"}
                    </span>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl xl:text-2xl font-bold text-gray-950 tracking-tight whitespace-nowrap">
                      1.5s – 6s
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-500 font-medium leading-tight mt-1">
                      {lang === "hi" ? "परिचालन गति" : "Operating Speed"}
                    </div>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="relative p-3.5 sm:p-4 bg-white border border-gray-200/90 shadow-xs hover:border-[#ff3131]/40 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#ff3131] via-[#ff3131]/60 to-transparent" />
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="w-1.5 h-1.5 bg-[#ff3131]" />
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-gray-400">
                      {lang === "hi" ? "दायरा" : "Coverage"}
                    </span>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl xl:text-2xl font-bold text-gray-950 tracking-tight whitespace-nowrap">
                      Up to 8m
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-500 font-medium leading-tight mt-1">
                      {lang === "hi" ? "बूम की लंबाई" : "Max Span Length"}
                    </div>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="relative p-3.5 sm:p-4 bg-white border border-gray-200/90 shadow-xs hover:border-[#ff3131]/40 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#ff3131] via-[#ff3131]/60 to-transparent" />
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="w-1.5 h-1.5 bg-[#ff3131]" />
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-gray-400">
                      {lang === "hi" ? "स्थायित्व" : "Reliability"}
                    </span>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl xl:text-2xl font-bold text-gray-950 tracking-tight whitespace-nowrap">
                      5M+ MCBF
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-500 font-medium leading-tight mt-1">
                      {lang === "hi" ? "चक्र विफलता अंतराल" : "Duty Cycles Rating"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Hero CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <a
                  href="#contact-engineering"
                  className="px-6 py-3.5 bg-[#ff3131] hover:bg-[#d62828] text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-red-500/20 flex items-center space-x-2 cursor-pointer"
                >
                  <span>{lang === "hi" ? "कोटेशन का अनुरोध करें" : "Request Technical Quote"}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href="#technical-specs"
                  className="px-6 py-3.5 border border-gray-300 hover:border-gray-900 bg-white hover:bg-gray-50 text-gray-800 font-semibold text-sm transition-all duration-200 shadow-xs flex items-center space-x-2 cursor-pointer"
                >
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{lang === "hi" ? "तकनीकी विनिर्देश देखें" : "View Technical Matrix"}</span>
                </a>
              </div>
            </div>

            {/* Right Media Column (Sharp Rectangular Border, No Overlay Box) */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white p-2 border border-gray-200 shadow-xs">
                <div className="w-full h-[360px] sm:h-[460px] overflow-hidden bg-slate-50 border border-slate-200">
                  <img
                    src="/images/boom_barrier_railway.jpg"
                    alt="Railway Barrier System"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 bg-white border-t border-gray-100">
                  <span className="text-xs text-[#ff3131] font-semibold uppercase tracking-wider block font-mono">
                    {lang === "hi" ? "आरडीएसओ एवं एनईएमए मानक" : "Heavy Duty Railway Crossing Barrier"}
                  </span>
                  <span className="text-xs text-gray-600 font-light">
                    {lang === "hi"
                      ? "24/7 निरंतर भारी रेलवे और ट्रांजिट कॉरिडोर परिचालन हेतु प्रमाणित"
                      : "Proven in round-the-clock railway level crossing operations"}
                  </span>
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
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-gray-950 tracking-tight leading-none whitespace-nowrap">
                  {lang === "hi" ? "रेलवे बैरियर सिस्टम" : "Railway Barrier System"}
                </span>
                <span className="text-[10px] text-gray-400 font-mono hidden md:inline leading-tight mt-0.5">
                  Series RBS-80 • BLDC Fail-Safe
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
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-150 ${
                      isActive
                        ? "bg-[#ff3131] text-white shadow-xs font-semibold"
                        : "text-gray-600 hover:text-gray-950 hover:bg-gray-100"
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-70 mr-1.5 hidden sm:inline">
                      {nav.code}
                    </span>
                    <span>{nav.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Right: Quick Action Button */}
            <div className="hidden lg:flex items-center">
              <a
                href="#contact-engineering"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-950 hover:bg-[#ff3131] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer"
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

        {/* SPEC 1: FAIL-SAFE BOOM MECHANISM */}
        <section id="fail-safe-boom" className="scroll-mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-4xl font-light text-gray-950 tracking-tight font-sans">
                {lang === "hi" ? "फेल-सेफ बूम तंत्र" : "Fail-Safe Boom Mechanism"}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                {lang === "hi"
                  ? "ग्लोबल रेलवे बैरियर सिस्टम एक विशेष काउंटरवेट-संतुलित यांत्रिक लिंकेज पर आधारित है। मुख्य बिजली ग्रिड के अचानक फेल होने या सिग्नलिंग विफलता की स्थिति में, आंतरिक इलेक्ट्रोमैग्नेटिक ब्रेक सुरक्षित रूप से बूम को पूर्व-निर्धारित सुरक्षित स्थिति में लाते हैं।"
                  : "Engineered with a precision counterbalanced kinetic linkage driven by high-torque brushless DC motors. In the event of primary power failure or track signal loss, the fail-safe magnetic clutch and counterbalance assembly ensure the boom defaults to a designated safe posture without damaging the drive gears."}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 p-3.5 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <div className="w-6 h-6 bg-[#ff3131]/10 flex items-center justify-center text-[#ff3131] font-bold text-xs mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-gray-900 text-sm font-medium">
                      {lang === "hi" ? "भारी-भरकम बीएलडीसी गियरबॉक्स" : "Industrial Brushless Planetary Drive"}
                    </h4>
                    <p className="text-gray-600 text-xs mt-0.5">
                      {lang === "hi"
                        ? "50 लाख से अधिक निरंतर चक्रों हेतु परीक्षण किया गया ब्रशलेस टॉर्क मोटर।"
                        : "Rated for >5,000,000 duty cycles with zero brush maintenance and smooth acceleration damping."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <div className="w-6 h-6 bg-[#ff3131]/10 flex items-center justify-center text-[#ff3131] font-bold text-xs mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-gray-900 text-sm font-medium">
                      {lang === "hi" ? "एल्युमिनियम ऑक्टागोनल आर्म व एलईडी स्ट्रिप्स" : "Reinforced Aluminium Profile & High-Vis LEDs"}
                    </h4>
                    <p className="text-gray-600 text-xs mt-0.5">
                      {lang === "hi"
                        ? "हवा के तीव्र दबाव को सहने वाला अष्टकोणीय डिजाइन, 3M डायमंड रिफ्लेक्टिव स्ट्रिप्स व दोहरे रंग की एलईडी चेतावनी लाइटें।"
                        : "High-yield aerodynamically optimized arm with embedded bi-color red/green status LEDs and 3M Diamond Grade reflective chevrons."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <div className="w-6 h-6 bg-[#ff3131]/10 flex items-center justify-center text-[#ff3131] font-bold text-xs mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-gray-900 text-sm font-medium">
                      {lang === "hi" ? "इम्पैक्ट ब्रेक-अवे कपलिंग (वैकल्पिक)" : "Impact Break-Away Mechanism (Optional)"}
                    </h4>
                    <p className="text-gray-600 text-xs mt-0.5">
                      {lang === "hi"
                        ? "वाहन की टक्कर होने पर मुख्य गियरबॉक्स को क्षतिग्रस्त होने से बचाने वाला स्व-वियोज्य सुरक्षा कपलर।"
                        : "Sacrificial or swing-away shear coupler prevents severe drive train damage if an errant vehicle impacts the lowered boom."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Media (Sharp Borders, Clean Below Caption, No Overlay) */}
            <div className="lg:col-span-6 relative">
              <div className="bg-white p-2 border border-gray-200 shadow-xs">
                <div className="w-full h-[360px] sm:h-[440px] overflow-hidden bg-slate-50 border border-slate-200">
                  <img
                    src="/images/boom_barrier_hero.jpg"
                    alt="Fail-Safe Boom Mechanism"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 bg-white border-t border-gray-100">
                  <span className="text-xs text-[#ff3131] font-semibold uppercase tracking-wider block font-mono">
                    {lang === "hi" ? "इंजीनियरिंग परीक्षण" : "Factory Verification"}
                  </span>
                  <span className="text-xs text-gray-600 font-light">
                    {lang === "hi"
                      ? "कठोर थर्मल और कंपन परीक्षणों के तहत प्रमाणित यांत्रिक घटक"
                      : "100% factory endurance validated under simulated crosswind and vibration conditions"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPEC 2: OBSTACLE DETECTION INTEGRATION */}
        <section id="obstacle-detection" className="scroll-mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Media (Sharp Borders, Clean Below Caption) */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="bg-white p-2 border border-gray-200 shadow-xs">
                <div className="w-full h-[360px] sm:h-[440px] overflow-hidden bg-slate-50 border border-slate-200">
                  <img
                    src="/images/crash_barrier_perimeter.jpg"
                    alt="Obstacle Detection Integration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 bg-white border-t border-gray-100">
                  <span className="text-xs text-[#ff3131] font-semibold uppercase tracking-wider block font-mono">
                    {lang === "hi" ? "सेंसर रिडंडेंसी" : "Triple Sensing Protection"}
                  </span>
                  <span className="text-xs text-gray-600 font-light">
                    {lang === "hi"
                      ? "इंडक्टिव लूप, फोटोइलेक्ट्रिक इन्फ्रारेड और रडार का समन्वित एकीकरण"
                      : "Coordinated loop detection, optical through-beams, and 24GHz FMCW radar"}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl sm:text-4xl font-light text-gray-950 tracking-tight font-sans">
                {lang === "hi" ? "अवरोध पहचान एकीकरण" : "Obstacle Detection Integration"}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                {lang === "hi"
                  ? "ट्रैक पर फंसे वाहनों या राहगीरों को किसी भी प्रकार के नुकसान से बचाने हेतु त्रि-स्तरीय सेंसर सुरक्षा प्रणाली लागू की गई है। बूम के नीचे किसी भी अवरोध का पता लगते ही सिस्टम 150 मिलीसेकंड के भीतर स्वतः रिवर्सल करता है।"
                  : "Accident prevention is paramount on busy level crossings. Our barrier control board integrates tri-level obstacle detection to ensure boom arms immediately stop and auto-reverse upon detecting vehicles, pedestrians, or maintenance machinery within the roadway zone."}
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <h4 className="text-gray-900 text-sm font-semibold flex items-center justify-between">
                    <span>{lang === "hi" ? "इंडक्टिव लूप वाहन डिटेक्टर" : "Dual-Channel Inductive Loop Detection"}</span>
                    <span className="text-xs text-[#ff3131] font-mono">&lt; 50ms Response</span>
                  </h4>
                  <p className="text-gray-600 text-xs mt-1">
                    {lang === "hi"
                      ? "सड़क की सतह में एम्बेडेड दोहरे कॉइल डिटेक्टर जो भारी ट्रकों से लेकर दोपहिया वाहनों की सटीक पहचान करते हैं।"
                      : "Directly wired road-embedded loop detectors track vehicle presence and departure across high-traffic rail crossing lanes."}
                  </p>
                </div>

                <div className="p-4 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <h4 className="text-gray-900 text-sm font-semibold flex items-center justify-between">
                    <span>{lang === "hi" ? "इन्फ्रारेड थ्रू-बीम सेफ्टी कर्टन" : "Optical Infrared Through-Beam Curtain"}</span>
                    <span className="text-xs text-[#ff3131] font-mono">15m Optical Range</span>
                  </h4>
                  <p className="text-gray-600 text-xs mt-1">
                    {lang === "hi"
                      ? "धूल, कोहरे और बारिश में भी 100% विश्वसनीय कार्य करने वाले इन्फ्रारेड सुरक्षा सेंसर।"
                      : "Modulated pulsed infrared safety beams detect any obstruction across the entire gate span with ambient sunlight immunity."}
                  </p>
                </div>

                <div className="p-4 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <h4 className="text-gray-900 text-sm font-semibold flex items-center justify-between">
                    <span>{lang === "hi" ? "24GHz माइक्रोवेव रडार स्कैनर (वैकल्पिक)" : "24GHz FMCW Radar Integration (Optional)"}</span>
                    <span className="text-xs text-[#ff3131] font-mono">No Digging Needed</span>
                  </h4>
                  <p className="text-gray-600 text-xs mt-1">
                    {lang === "hi"
                      ? "सड़क खुदाई किए बिना सतह से ऊपर स्थापित रडार जो सभी प्रकार के मौसम में अवरोध का सटीक पता लगाता है।"
                      : "Surface-mounted millimetre-wave radar eliminates road trenching while offering robust detection in extreme fog, snow, and torrential rain."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPEC 3: POWER BACKUP & MANUAL OVERRIDE */}
        <section id="power-backup" className="scroll-mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-4xl font-light text-gray-950 tracking-tight font-sans">
                {lang === "hi" ? "पावर बैकअप एवं मैनुअल ओवरराइड" : "Power Backup & Manual Override"}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                {lang === "hi"
                  ? "रेलवे परिचालन कभी रुक नहीं सकता। हमारा सिस्टम आंतरिक 24V डीसी बैटरी बैंक से सुसज्जित है जो मुख्य ग्रिड ब्लैकआउट के दौरान 200 से अधिक पूर्ण चक्रों का निर्बाध संचालन प्रदान करता है। आपातकालीन स्थिति में ऑन-साइट स्टेशन मास्टर के लिए सुरक्षित मैनुअल हैंड-क्रैंक ओवरराइड भी उपलब्ध है।"
                  : "Rail operations demand 100% uptime regardless of commercial grid stability. An internal industrial 24V DC battery bank provides sustained automated operation through extended power outages, while an ergonomic key-release clutch allows manual hand-crank operation during maintenance windows."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#ff3131] mb-1 font-mono">
                    {lang === "hi" ? "बैटरी बैकअप" : "Internal Battery Bank"}
                  </div>
                  <div className="text-xl font-light text-gray-900 font-sans">&gt; 200 Cycles</div>
                  <p className="text-gray-600 text-xs mt-1">
                    {lang === "hi"
                      ? "स्मार्ट फ्लोट चार्जर और डीप-डिस्चार्ज सुरक्षा के साथ 24V AGM/LiFePO4 बैटरी।"
                      : "Integrated intelligent float charger with deep-discharge protection and thermal monitoring."}
                  </p>
                </div>

                <div className="p-4 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#ff3131] mb-1 font-mono">
                    {lang === "hi" ? "स्विचओवर समय" : "Transfer Time"}
                  </div>
                  <div className="text-xl font-light text-gray-900 font-sans">&lt; 10 Milliseconds</div>
                  <p className="text-gray-600 text-xs mt-1">
                    {lang === "hi"
                      ? "ग्रिड विफलता पर बिना किसी नियंत्रक रीसेट या व्यवधान के तुरंत स्विचओवर।"
                      : "Zero-glitch transfer without CPU controller reboot or relay dropouts."}
                  </p>
                </div>

                <div className="p-4 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#ff3131] mb-1 font-mono">
                    {lang === "hi" ? "मैनुअल हैंड क्रैंक" : "Manual Hand Crank"}
                  </div>
                  <div className="text-xl font-light text-gray-900 font-sans">Key-Release Clutch</div>
                  <p className="text-gray-600 text-xs mt-1">
                    {lang === "hi"
                      ? "सुरक्षित की-लॉक रिलीज तंत्र जिसे ऑपरेटर आसानी से हाथ से घुमाकर बूम उठा सकता है।"
                      : "Mechanical interlock automatically disables motor circuit when hand crank is engaged."}
                  </p>
                </div>

                <div className="p-4 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#ff3131] mb-1 font-mono">
                    {lang === "hi" ? "सोलर हाइब्रिड सपोर्ट" : "Solar DC Ready"}
                  </div>
                  <div className="text-xl font-light text-gray-900 font-sans">12V / 24V Solar Input</div>
                  <p className="text-gray-600 text-xs mt-1">
                    {lang === "hi"
                      ? "दूरदराज के गैर-विद्युतीकृत रेलवे क्रॉसिंग के लिए सीधे सोलर पैनल इनपुट।"
                      : "Direct MPPT solar charging controller interface for un-electrified remote rail sections."}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Media (Sharp Borders, Clean Below Caption) */}
            <div className="lg:col-span-6 relative">
              <div className="bg-white p-2 border border-gray-200 shadow-xs">
                <div className="w-full h-[360px] sm:h-[440px] overflow-hidden bg-slate-50 border border-slate-200">
                  <img
                    src="/images/road_blocker_barrier.jpg"
                    alt="Power Backup and Manual Override"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 bg-white border-t border-gray-100">
                  <span className="text-xs text-[#ff3131] font-semibold uppercase tracking-wider block font-mono">
                    {lang === "hi" ? "फील्ड-रेडी विश्वसनीयता" : "Uninterrupted Uptime"}
                  </span>
                  <span className="text-xs text-gray-600 font-light">
                    {lang === "hi"
                      ? "लंबे समय तक चलने वाले बिजली संकट में भी लेवल क्रॉसिंग सुरक्षा 100% बरकरार रहती है"
                      : "Autonomous battery failover guarantees barrier function across grid outages and storms"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPEC 4: WEATHERPROOF ENCLOSURE */}
        <section id="weatherproof-enclosure" className="scroll-mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Media (Sharp Borders, Clean Below Caption) */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="bg-white p-2 border border-gray-200 shadow-xs">
                <div className="w-full h-[360px] sm:h-[440px] overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center p-4">
                  <img
                    src="/images/weatherproof_enclosure.jpg"
                    alt="Weatherproof Enclosure Construction"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 bg-white border-t border-gray-100">
                  <span className="text-xs text-[#ff3131] font-semibold uppercase tracking-wider block font-mono">
                    {lang === "hi" ? "कठोर निर्माण" : "Heavy-Duty Construction"}
                  </span>
                  <span className="text-xs text-gray-600 font-light">
                    {lang === "hi"
                      ? "3mm कोल्ड-रोल्ड स्टील / 316 स्टेनलेस स्टील, IP66 प्रमाणित कैबिनेट"
                      : "3mm cold-rolled steel or optional 316 stainless steel with IP66 ingress protection"}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl sm:text-4xl font-light text-gray-950 tracking-tight font-sans">
                {lang === "hi" ? "वेदरप्रूफ एनक्लोजर एवं सुरक्षा" : "Weatherproof Enclosure & Durability"}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                {lang === "hi"
                  ? "रेलवे ट्रैक के किनारे की परिस्थितियां धूल, भारी बारिश, कंपन और अत्यधिक तापमान से भरी होती हैं। हमारे एनक्लोजर को थर्मोसेट पॉलिएस्टर पाउडर कोटिंग के साथ 3mm स्टील से निर्मित किया गया है, जो IP66 सीलिंग और संक्षारण प्रतिरोध सुनिश्चित करता है।"
                  : "Trackside environments expose equipment to heavy track ballast dust, torrential monsoon rainfall, extreme thermal swings, and constant vibration. Our enclosures utilize marine-grade zinc-phosphated steel with electrostatic polyester powder coating certified to IP66 standards."}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 p-3.5 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <div className="w-6 h-6 bg-[#ff3131]/10 flex items-center justify-center text-[#ff3131] font-bold text-xs mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-gray-900 text-sm font-medium">
                      {lang === "hi" ? "थर्मोस्टेट-नियंत्रित एंटी-कंडेनसेशन हीटर" : "Thermostatic Anti-Condensation Heater"}
                    </h4>
                    <p className="text-gray-600 text-xs mt-0.5">
                      {lang === "hi"
                        ? "शीत ऋतु और नमी में आंतरिक इलेक्ट्रॉनिक्स पर ओस या नमी जमने से रोकता है।"
                        : "Internal PTC ceramic heating element prevents moisture accumulation on sensitive circuit boards."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <div className="w-6 h-6 bg-[#ff3131]/10 flex items-center justify-center text-[#ff3131] font-bold text-xs mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-gray-900 text-sm font-medium">
                      {lang === "hi" ? "वांडल-प्रतिरोधी दोहरी कैम लैच लॉकिंग" : "Tamper-Proof Dual Cam Security Latches"}
                    </h4>
                    <p className="text-gray-600 text-xs mt-0.5">
                      {lang === "hi"
                        ? "अनाधिकृत पहुंच को रोकने वाले आंतरिक माइक्रोस्विच जो छेड़छाड़ पर अलार्म ट्रिगर करते हैं।"
                        : "Lockable access panels with tamper microswitches that report unauthorized door opening to SCADA."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <div className="w-6 h-6 bg-[#ff3131]/10 flex items-center justify-center text-[#ff3131] font-bold text-xs mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-gray-900 text-sm font-medium">
                      {lang === "hi" ? "रेलवे मानक रंग एवं कोटिंग (RAL 2000 / RAL 7016)" : "Standard Rail Finishes & UV Resistance"}
                    </h4>
                    <p className="text-gray-600 text-xs mt-0.5">
                      {lang === "hi"
                        ? "धूप में रंग फीका पड़ने से बचाने वाली यूवी-प्रतिरोधी आउटडोर कोटिंग।"
                        : "UV-stable polyester finish in high-visibility safety orange or custom institutional livery."}
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
            <h2 className="text-2xl sm:text-4xl font-light text-gray-950 tracking-tight font-sans">
              {lang === "hi" ? "विस्तृत तकनीकी विनिर्देश तालिका" : "Technical Specification Matrix"}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light mt-3">
              {lang === "hi"
                ? "ग्लोबल रेलवे बैरियर सिस्टम के प्रमुख परिचालन, यांत्रिक और विद्युत विनिर्देश"
                : "Comprehensive operational, mechanical, and electrical parameters for project planning and tender compliance."}
            </p>
          </div>

          <div className="overflow-x-auto border border-gray-200 bg-white shadow-xs">
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

        {/* 6. Applications Section */}
        <section id="applications" className="scroll-mt-36">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-light text-gray-950 tracking-tight font-sans">
              {lang === "hi" ? "प्रमुख अनुप्रयोग एवं उद्योग" : "Applications & Deployment Corridors"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#f8f9fa] border border-gray-200 shadow-xs space-y-4 hover:border-gray-300 transition-all">
              <div className="w-12 h-12 bg-[#ff3131]/10 border border-[#ff3131]/20 flex items-center justify-center text-[#ff3131]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {lang === "hi" ? "रेलवे लेवल क्रॉसिंग (Manned & Unmanned)" : "Railway Level Crossings"}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
                {lang === "hi"
                  ? "हाई-स्पीड पैसेंजर और फ्रेट कॉरिडोर्स पर रेल सिग्नलिंग इंटरलॉकिंग के साथ पूर्ण स्वचालित एकीकरण।"
                  : "Certified for mainline railway networks, dedicated freight corridors, and high-frequency urban level crossings."}
              </p>
            </div>

            <div className="p-6 bg-[#f8f9fa] border border-gray-200 shadow-xs space-y-4 hover:border-gray-300 transition-all">
              <div className="w-12 h-12 bg-[#ff3131]/10 border border-[#ff3131]/20 flex items-center justify-center text-[#ff3131]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {lang === "hi" ? "औद्योगिक एवं रिफाइनरी परिधि नियंत्रण" : "Refineries & Heavy Industry"}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
                {lang === "hi"
                  ? "पेट्रोकेमिकल संयंत्रों, बिजली संयंत्रों और बंदरगाहों के लिए उच्च-सुरक्षा एक्सेस नियंत्रण और भारी ट्रैफिक प्रबंधन।"
                  : "Critical perimeter checkpoints, petrochemical refinery gates, and heavy logistics container yards."}
              </p>
            </div>

            <div className="p-6 bg-[#f8f9fa] border border-gray-200 shadow-xs space-y-4 hover:border-gray-300 transition-all">
              <div className="w-12 h-12 bg-[#ff3131]/10 border border-[#ff3131]/20 flex items-center justify-center text-[#ff3131]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {lang === "hi" ? "सैन्य एवं रणनीतिक बुनियादी ढांचा" : "Defence & Strategic Hubs"}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
                {lang === "hi"
                  ? "क्रैश-रेटेड बैरियर, स्वचालित नंबर प्लेट पहचान (ANPR) और सुरक्षा प्रोटोकॉल इंटरलॉक।"
                  : "High-security access gates with automated license plate recognition (ANPR) and security access control interlocks."}
              </p>
            </div>
          </div>
        </section>

        {/* 7. Request a Quote / Engineering Consultation Section */}
        <section id="contact-engineering" className="scroll-mt-36">
          <div className="bg-white border border-gray-200 p-8 sm:p-12 lg:p-16 shadow-xs relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#ff3131] font-mono">
                  {lang === "hi" ? "प्रत्यक्ष तकनीकी सहयोग" : "Direct Technical Consultation"}
                </span>
                <h2 className="text-2xl sm:text-4xl font-light text-gray-950 tracking-tight font-sans">
                  {lang === "hi" ? "अपनी परियोजना हेतु तकनीकी विनिर्देश प्राप्त करें" : "Request a Project Technical Quote"}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
                  {lang === "hi"
                    ? "हमारे वरिष्ठ रेलवे ऑटोमेशन इंजीनियर आपकी साइट के विनिर्देशों, आवश्यक बूम की लंबाई, सिग्नलिंग इंटरलॉकिंग और आपूर्ति समय-सारणी के अनुरूप विस्तृत कोटेशन तैयार करेंगे।"
                    : "Speak directly with our senior railway automation engineers to configure boom spans, optical sensor arrays, battery reserve banks, and signaling schematics tailored to your tender specifications."}
                </p>

                <div className="pt-4 space-y-2 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#ff3131]">●</span>
                    <span>{lang === "hi" ? "24-48 घंटों के भीतर विस्तृत तकनीकी एवं वित्तीय प्रस्ताव" : "Detailed technical & commercial proposal within 24-48 hours"}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#ff3131]">●</span>
                    <span>{lang === "hi" ? "CAD ड्रॉइंग्स और वायरिंग स्कीमेटिक्स उपलब्ध" : "CAD drawings and electrical wiring schematics provided"}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#ff3131]">●</span>
                    <span>{lang === "hi" ? "ऑन-साइट कमीशनिंग एवं फील्ड सपोर्ट" : "On-site installation and commissioning engineering support"}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                {formSubmitted ? (
                  <div className="p-8 bg-white border border-gray-200 text-center space-y-4 shadow-sm animate-in fade-in duration-300">
                    <div className="w-14 h-14 mx-auto bg-[#ff3131]/10 flex items-center justify-center text-[#ff3131] text-2xl font-bold">
                      ✓
                    </div>
                    <h3 className="text-xl font-medium text-gray-900">
                      {lang === "hi" ? "अनुरोध सफलतापूर्वक प्राप्त हुआ" : "Inquiry Received Successfully"}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm font-light">
                      {lang === "hi"
                        ? "हमारी इंजीनियरिंग टीम शीघ्र ही आपसे संपर्क करेगी और विस्तृत विनिर्देश साझा करेगी।"
                        : "Our application engineering team will review your requirements and respond promptly with datasheets and commercial details."}
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
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
                    className="p-6 sm:p-8 bg-slate-50 border border-gray-200 shadow-xs space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-gray-700 mb-1.5">
                        {lang === "hi" ? "पूरा नाम" : "Full Name"} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={lang === "hi" ? "उदा. राजेश कुमार" : "e.g. John Doe"}
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#ff3131] transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-gray-700 mb-1.5">
                          {lang === "hi" ? "संगठन / रेलवे डिवीजन" : "Organization / Division"} *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={lang === "hi" ? "कंपनी / रेलवे जोन" : "e.g. Northern Railways / EPC Corp"}
                          className="w-full px-4 py-2.5 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#ff3131] transition-colors"
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
                          className="w-full px-4 py-2.5 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#ff3131] transition-colors"
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
                          placeholder="engineering@org.com"
                          className="w-full px-4 py-2.5 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#ff3131] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-gray-700 mb-1.5">
                          {lang === "hi" ? "आवश्यक बूम लंबाई" : "Required Boom Span"}
                        </label>
                        <select className="w-full px-4 py-2.5 bg-white border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#ff3131] transition-colors">
                          <option value="4m">3.0m - 4.0m (Standard Single Track)</option>
                          <option value="6m">4.5m - 6.0m (Standard Dual Track)</option>
                          <option value="8m">6.5m - 8.0m (Wide Crossing Heavy Rail)</option>
                          <option value="custom">Custom Site Specification</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-gray-700 mb-1.5">
                        {lang === "hi" ? "परियोजना आवश्यकताएं / संदेश" : "Project Requirements / Notes"}
                      </label>
                      <textarea
                        rows={3}
                        placeholder={lang === "hi" ? "स्थापना स्थल, वोल्टेज या विशेष सिग्नलिंग आवश्यकताएं..." : "Specify site conditions, interlocking interfaces, or tender timelines..."}
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#ff3131] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#ff3131] hover:bg-[#d62828] text-white font-medium text-sm sm:text-base uppercase tracking-wider transition-all shadow-md shadow-[#ff3131]/20 cursor-pointer"
                    >
                      {lang === "hi" ? "अनुरोध सबमिट करें" : "Submit Technical Specification Request"}
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

export default function RailwayBarrierPage() {
  return (
    <LanguageProvider>
      <RailwayBarrierContent />
    </LanguageProvider>
  );
}

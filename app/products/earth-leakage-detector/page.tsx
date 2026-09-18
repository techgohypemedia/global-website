"use client";

import React, { useState } from "react";
import Link from "next/link";
import AramcoHeader from "../../components/AramcoHeader";
import NewsletterSection from "../../components/NewsletterSection";
import Footer from "../../components/Footer";
import { LanguageProvider, useLanguage } from "../../context/LanguageContext";

function EarthLeakageDetectorContent() {
  const { lang } = useLanguage();
  const [activeSpecTab, setActiveSpecTab] = useState<string>("continuous-monitoring");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const SPECS_NAV = [
    {
      id: "continuous-monitoring",
      label: lang === "hi" ? "सतत निगरानी" : "Continuous Monitoring",
      code: "SPEC-01",
    },
    {
      id: "true-rms",
      label: lang === "hi" ? "ट्रू RMS मापन" : "True RMS Measurement",
      code: "SPEC-02",
    },
    {
      id: "digital-display",
      label: lang === "hi" ? "डिजिटल डिस्प्ले" : "Digital Display & Logs",
      code: "SPEC-03",
    },
    {
      id: "adjustable-thresholds",
      label: lang === "hi" ? "एडजस्टेबल थ्रेसहोल्ड" : "Adjustable Thresholds",
      code: "SPEC-04",
    },
    {
      id: "technical-specs",
      label: lang === "hi" ? "डेटाशीट मैट्रिक्स" : "Technical Matrix",
      code: "SPEC-05",
    },
    {
      id: "wiring-schematics",
      label: lang === "hi" ? "वायरिंग गाइड" : "Wiring & CBCT",
      code: "SPEC-06",
    },
  ];

  const SPEC_DATA_TABLE = [
    {
      param: lang === "hi" ? "मापन प्रकार" : "Sensing & Measurement Method",
      spec: "True RMS (Root Mean Square) Core Balance",
      note: lang === "hi" ? "हार्मोनिक्स और इन्वर्टर स्पाइक्स से अप्रभावित" : "Harmonic-immune active 32-bit DSP filtering",
    },
    {
      param: lang === "hi" ? "ट्रिप करंट थ्रेसहोल्ड रेंज" : "Selectable Trip Sensitivity",
      spec: "10mA – 30A (10 Discrete Step Settings)",
      note: lang === "hi" ? "रोटरी चयन स्विच द्वारा सटीक अंशांकन" : "User-calibrated rotary switch with transparent lead seal",
    },
    {
      param: lang === "hi" ? "ट्रिप समय विलंब (Time Delay)" : "Adjustable Trip Delay",
      spec: "Instantaneous (<30ms) to 5.0 Seconds",
      note: lang === "hi" ? "मुख्य और सब-पैनलों में चयनात्मक समन्वय" : "Guarantees protective discrimination with upstream ACB/MCCB",
    },
    {
      param: lang === "hi" ? "प्री-अलार्म थ्रेसहोल्ड स्तर" : "Predictive Warning Level",
      spec: "70% of Set Fault Current (Amber LED)",
      note: lang === "hi" ? "आसन्न फॉल्ट की प्रारंभिक चेतावनी संकेत" : "Enables predictive maintenance before breaker trip",
    },
    {
      param: lang === "hi" ? "सहायक विद्युत आपूर्ति" : "Auxiliary Control Voltage",
      spec: "110V – 240V AC/DC Universal Input",
      note: lang === "hi" ? "व्यापक वोल्टेज उतार-चढ़ाव सहिष्णुता" : "Internal surge suppressor withstands 4kV transients",
    },
    {
      param: lang === "hi" ? "आउटपुट रिले संपर्क" : "Relay Output Contacts",
      spec: "2x Form C (NO/NC) Changeover Contacts",
      note: lang === "hi" ? "6A @ 250V AC / 30V DC रेटेड संपर्क" : "Independent contacts for Breaker Trip and SCADA Alarm",
    },
    {
      param: lang === "hi" ? "सीबीसीटी (CBCT) कोर संगतता" : "CBCT Aperture Compatibility",
      spec: "35mm, 70mm, 120mm, 210mm & Custom Toroids",
      note: lang === "hi" ? "नैनो-क्रिस्टलीय उच्च-पारगम्यता कोर" : "Ultra-sensitive current transformers with high linearity",
    },
    {
      param: lang === "hi" ? "माउंटिंग एवं सुरक्षा श्रेणी" : "Mounting & Housing Profile",
      spec: "35mm DIN Rail / 96x96mm Flush Panel",
      note: lang === "hi" ? "IP54 फ्रंट सील / IEC 60947-2 अनुपालन" : "Flame-retardant UL94-V0 polycarbonate casing",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#ff3131] selection:text-white relative font-sans">
      {/* 1. Global Navigation Header */}
      <AramcoHeader />

      {/* 2. Hero Section: Full-Bleed Dark Cinematic Hero */}
      <section className="relative min-h-[580px] lg:min-h-[660px] pt-32 sm:pt-40 pb-16 sm:pb-20 overflow-hidden bg-neutral-950 flex flex-col justify-between">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/earth_leakage_detector_original.png"
            alt="Digital Earth Leakage Detector"
            className="w-full h-full object-cover opacity-35 object-center scale-105"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-4">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>{lang === "hi" ? "विद्युत सुरक्षा प्रणालियां" : "ELECTRICAL PROTECTION SYSTEMS"}</span>
              <span className="text-white/40">•</span>
              <span className="text-gray-300">IEC 60947-2 ANNEX M CERTIFIED</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white font-sans mb-5 leading-tight">
              {lang === "hi" ? (
                <>
                  डिजिटल अर्थ लीकेज डिटेक्टर <br />
                  <span className="font-semibold text-[#ff3131]">
                    सटीक ट्रू RMS इंसुलेशन सुरक्षा
                  </span>
                </>
              ) : (
                <>
                  Digital Earth Leakage Detector <br />
                  <span className="font-semibold text-[#ff3131]">
                    Precision True RMS Insulation Safety
                  </span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-8 max-w-2xl">
              {lang === "hi"
                ? "रेलवे ट्रैक सिग्नलिंग सर्किट, औद्योगिक मोटर नियंत्रण केंद्र (MCC) और संवेदनशील पावर पैनलों में वास्तविक समय पर इंसुलेशन प्रतिरोध की निगरानी, ट्रू RMS मापन और सटीक फॉल्ट अलार्म।"
                : "High-precision digital earth leakage relay engineered for continuous online insulation monitoring, harmonic-immune True RMS sensing, and lightning-fast microsecond fault tripping across mission-critical power networks."}
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact-engineering"
                className="px-7 py-3.5 bg-[#ff3131] hover:bg-[#e02626] text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-lg hover:shadow-[#ff3131]/30 flex items-center space-x-2 group hover:-translate-y-0.5"
              >
                <span>{lang === "hi" ? "कोटेशन का अनुरोध करें" : "Request Technical Quote"}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#wiring-schematics"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white text-white text-xs sm:text-sm font-medium tracking-wide backdrop-blur-sm transition-all flex items-center space-x-2 hover:-translate-y-0.5"
              >
                <span>{lang === "hi" ? "वायरिंग एवं स्कीमेटिक्स देखें" : "View Wiring Schematics"}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="relative z-10 w-full border-t border-white/15 bg-black/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col border-l border-white/15 pl-4 sm:pl-6 first:border-l-0">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight font-sans">10mA – 30A</div>
                <div className="text-xs font-medium text-gray-300 uppercase tracking-wider mt-1">{lang === "hi" ? "संवेदनशीलता" : "Trip Current Range"}</div>
                <div className="text-xs text-gray-400 mt-0.5">Continuous Adjustable</div>
              </div>
              <div className="flex flex-col border-l border-white/15 pl-4 sm:pl-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight font-sans">True RMS</div>
                <div className="text-xs font-medium text-gray-300 uppercase tracking-wider mt-1">{lang === "hi" ? "हार्मोनिक-प्रतिरोधी" : "Harmonic Immunity"}</div>
                <div className="text-xs text-gray-400 mt-0.5">32-Bit DSP Filtered</div>
              </div>
              <div className="flex flex-col border-l border-white/15 pl-4 sm:pl-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight font-sans">&lt; 30ms</div>
                <div className="text-xs font-medium text-gray-300 uppercase tracking-wider mt-1">{lang === "hi" ? "प्रतिक्रिया" : "Ultra-Fast Trip"}</div>
                <div className="text-xs text-gray-400 mt-0.5">Instant Shunt Release</div>
              </div>
              <div className="flex flex-col border-l border-white/15 pl-4 sm:pl-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight font-sans">IEC 60947</div>
                <div className="text-xs font-medium text-gray-300 uppercase tracking-wider mt-1">{lang === "hi" ? "मानक" : "Compliance"}</div>
                <div className="text-xs text-gray-400 mt-0.5">Annex M Certified</div>
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

        {/* SPEC 1: CONTINUOUS INSULATION MONITORING */}
        <section id="continuous-monitoring" className="scroll-mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-4xl font-light text-gray-950 tracking-tight font-sans">
                {lang === "hi" ? "निरंतर इंसुलेशन निगरानी" : "Continuous Insulation Monitoring"}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                {lang === "hi"
                  ? "पारंपरिक सुरक्षा प्रणालियाँ केवल तभी काम करती हैं जब शॉर्ट सर्किट या बड़ा फॉल्ट हो चुका होता है। ग्लोबल का डिजिटल अर्थ लीकेज डिटेक्टर बिना बिजली बंद किए 24/7 लाइव लाइनों पर सूक्ष्म इंसुलेशन गिरावट (Degradation) को ट्रैक करता है, जिससे आग और उपकरण विनाश से पहले ही सुरक्षा प्राप्त होती है।"
                  : "Traditional protection relays operate only after a catastrophic insulation flashover occurs. Our Digital Earth Leakage Detector continuously evaluates live conductor dielectric resistance without service interruption, alerting maintenance personnel to pre-fault leakage trends before catastrophic breaker trips or electrical fires happen."}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 p-3.5 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <div className="w-6 h-6 bg-red-100 flex items-center justify-center text-[#ff3131] font-bold text-xs mt-0.5 flex-shrink-0">
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

                <div className="flex items-start space-x-3 p-3.5 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <div className="w-6 h-6 bg-red-100 flex items-center justify-center text-[#ff3131] font-bold text-xs mt-0.5 flex-shrink-0">
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

                <div className="flex items-start space-x-3 p-3.5 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <div className="w-6 h-6 bg-red-100 flex items-center justify-center text-[#ff3131] font-bold text-xs mt-0.5 flex-shrink-0">
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

            {/* Right Media (Sharp Borders, Clean Below Caption, No Dark Overlay) */}
            <div className="lg:col-span-6 relative">
              <div className="bg-white p-2 border border-gray-200 shadow-xs">
                <div className="w-full h-[360px] sm:h-[440px] overflow-hidden bg-slate-50 border border-slate-200">
                  <img
                    src="/images/power_distribution_eld.jpg"
                    alt="Continuous Insulation Monitoring"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 bg-white border-t border-gray-100">
                  <span className="text-xs text-[#ff3131] font-bold uppercase tracking-wider block font-mono">
                    {lang === "hi" ? "निरंतर परिचालन" : "Continuous Protection"}
                  </span>
                  <span className="text-xs text-gray-700 font-medium">
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
            {/* Left Media (Sharp Borders, Clean Below Caption) */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="bg-white p-2 border border-gray-200 shadow-xs">
                <div className="w-full h-[360px] sm:h-[440px] overflow-hidden bg-slate-50 border border-slate-200">
                  <img
                    src="/images/eld_engineering_lab.jpg"
                    alt="True RMS Current Measurement Lab"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 bg-white border-t border-gray-100">
                  <span className="text-xs text-[#ff3131] font-bold uppercase tracking-wider block font-mono">
                    {lang === "hi" ? "हार्मोनिक फिल्टरिंग" : "DSP Harmonic Rejection"}
                  </span>
                  <span className="text-xs text-gray-700 font-medium">
                    {lang === "hi"
                      ? "VFD ड्राइव्स और सोलर इन्वर्टर से उत्पन्न अवांछित ट्रिपिंग का 100% समाधान"
                      : "High-order active filtering rejects high-frequency PWM switching harmonics and false line noise"}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl sm:text-4xl font-light text-gray-950 tracking-tight font-sans">
                {lang === "hi" ? "ट्रू RMS करंट मापन तकनीक" : "True RMS Current Measurement"}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                {lang === "hi"
                  ? "आधुनिक औद्योगिक वातावरण में वैरिएबल फ्रीक्वेंसी ड्राइव (VFD), स्विच-मोड पावर सप्लाई (SMPS) और यूपीएस सिस्टम भारी हार्मोनिक विकृति पैदा करते हैं। पारंपरिक एनालॉग रिले इनमें झूठी ट्रिपिंग (Nuisance Tripping) कर बैठते हैं। हमारा डिजिटल रिले उच्च-गति 32-बिट माइक्रोप्रोसेसर के साथ वास्तविक ट्रू RMS गणना करता है।"
                  : "Modern industrial switchgear powers non-linear loads: variable frequency drives (VFDs), UPS banks, DC rectifiers, and servo inverters. Ordinary relays suffer frequent nuisance trips from waveform distortion. Our DSP architecture samples waveforms thousands of times per cycle, calculating authentic True RMS leakage current while rejecting benign switching spikes."}
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <h4 className="text-gray-900 text-sm font-semibold flex items-center justify-between">
                    <span>{lang === "hi" ? "गैर-रैखिक लोड हार्मोनिक इम्यूनिटी" : "Non-Linear Harmonic Immunity"}</span>
                    <span className="text-xs text-[#ff3131] font-mono font-semibold bg-red-50 px-2 py-0.5 border border-red-200">Up to 15th Harmonic</span>
                  </h4>
                  <p className="text-gray-600 text-xs mt-1">
                    {lang === "hi"
                      ? "3रे, 5वें और 7वें हार्मोनिक कंपोनेंट्स को सटीक रूप से अलग कर केवल वास्तविक ग्राउंड लीकेज पर ट्रिप करता है।"
                      : "Differentiates true conductive fault leakage from capacitive charging currents and high-frequency inverter ripple."}
                  </p>
                </div>

                <div className="p-4 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <h4 className="text-gray-900 text-sm font-semibold flex items-center justify-between">
                    <span>{lang === "hi" ? "कोर बैलेंस करंट ट्रांसफॉर्मर (CBCT) एकीकरण" : "Toroidal Core Balance CT Precision"}</span>
                    <span className="text-xs text-[#ff3131] font-mono font-semibold bg-red-50 px-2 py-0.5 border border-red-200">High-Mu Core</span>
                  </h4>
                  <p className="text-gray-600 text-xs mt-1">
                    {lang === "hi"
                      ? "नैनो-क्रिस्टलीय हाई-पर्मिएबिलिटी मैग्नेटिक कोर जो 10mA के अति-सूक्ष्म लीकेज पर भी लीनियर आउटपुट देता है।"
                      : "Ultra-low magnetic saturation toroidal sensors accommodate conductors up to 300mm without flux drift."}
                  </p>
                </div>

                <div className="p-4 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <h4 className="text-gray-900 text-sm font-semibold flex items-center justify-between">
                    <span>{lang === "hi" ? "शून्य-क्रॉसिंग सिंक्रनाइज़ेशन" : "Zero-Crossing Fast Fault Tripping"}</span>
                    <span className="text-xs text-[#ff3131] font-mono font-semibold bg-red-50 px-2 py-0.5 border border-red-200">&lt; 30ms Instantaneous</span>
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
              <h2 className="text-2xl sm:text-4xl font-light text-gray-950 tracking-tight font-sans">
                {lang === "hi" ? "रीयल-टाइम डिजिटल डिस्प्ले एवं इवेंट लॉग" : "Real-Time Digital Display & Diagnostics"}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                {lang === "hi"
                  ? "फ्रंट पैनल पर स्थित उच्च-कंट्रास्ट 4-अंकीय 7-सेगमेंट डिजिटल डिस्प्ले पैनल पर काम करने वाले इंजीनियरों को वास्तविक समय में सिस्टम का लाइव लीकेज करंट (mA या Amperes में) दिखाता है। आंतरिक नॉन-वोलेटाइल मेमोरी पिछले 10 ट्रिप इवेंट्स के सटीक आंकड़े सुरक्षित रखती है।"
                  : "Panel operators can immediately assess electrical health via an ultra-bright 4-digit digital readout showing real-time leakage current. Onboard non-volatile memory logs the exact fault amplitude and phase condition for the last 10 trip events, drastically reducing post-trip troubleshooting hours."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 bg-white border border-gray-200 shadow-xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#ff3131] mb-1 font-mono">
                    {lang === "hi" ? "लाइव करंट टेलीमेट्री" : "Live Telemetry"}
                  </div>
                  <div className="text-xl font-bold text-gray-900 font-sans">0.0mA - 30.0A</div>
                  <p className="text-gray-600 text-xs mt-1">
                    {lang === "hi"
                      ? "1mA रेजोल्यूशन के साथ रीयल-टाइम डिजिटल वैल्यू।"
                      : "Continuous auto-ranging display with crisp 1mA resolution."}
                  </p>
                </div>

                <div className="p-4 bg-white border border-gray-200 shadow-xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#ff3131] mb-1 font-mono">
                    {lang === "hi" ? "इवेंट फॉल्ट हिस्ट्री" : "Event Memory Log"}
                  </div>
                  <div className="text-xl font-bold text-gray-900 font-sans">Last 10 Trips</div>
                  <p className="text-gray-600 text-xs mt-1">
                    {lang === "hi"
                      ? "बिजली जाने पर भी सुरक्षित रहने वाली गैर-वाष्पशील फॉल्ट मेमोरी।"
                      : "Retains fault magnitude and timestamp even during total blackout."}
                  </p>
                </div>

                <div className="p-4 bg-white border border-gray-200 shadow-xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#ff3131] mb-1 font-mono">
                    {lang === "hi" ? "ट्राई-कलर स्टेटस एलईडी" : "Tri-Color Status LEDs"}
                  </div>
                  <div className="text-xl font-bold text-gray-900 font-sans">Normal / Warn / Trip</div>
                  <p className="text-gray-600 text-xs mt-1">
                    {lang === "hi"
                      ? "ग्रीन (सामान्य), एम्बर (70% चेतावनी), रेड (ट्रिप) स्पष्ट संकेत।"
                      : "Instant visual diagnostic indication visible from across the switchboard."}
                  </p>
                </div>

                <div className="p-4 bg-white border border-gray-200 shadow-xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#ff3131] mb-1 font-mono">
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

            {/* Right Media (Sharp Borders, Clean Below Caption) */}
            <div className="lg:col-span-6 relative">
              <div className="bg-white p-2 border border-gray-200 shadow-xs">
                <div className="w-full h-[360px] sm:h-[440px] overflow-hidden bg-slate-50 border border-slate-200">
                  <img
                    src="/images/continuous_insulation.jpg"
                    alt="Real-Time Digital Display & Diagnostics"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 bg-white border-t border-gray-100">
                  <span className="text-xs text-[#ff3131] font-bold uppercase tracking-wider block font-mono">
                    {lang === "hi" ? "आसान ऑपरेशन" : "Intuitive Operation"}
                  </span>
                  <span className="text-xs text-gray-700 font-medium">
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
            {/* Left Media (Sharp Borders, Clean Below Caption) */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="bg-white p-2 border border-gray-200 shadow-xs">
                <div className="w-full h-[360px] sm:h-[440px] overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center p-4">
                  <img
                    src="/images/earth_leakage_detector_hero.jpg"
                    alt="Adjustable Trip Threshold Hardware"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 bg-white border-t border-gray-100">
                  <span className="text-xs text-[#ff3131] font-bold uppercase tracking-wider block font-mono">
                    {lang === "hi" ? "कस्टम थ्रेसहोल्ड" : "Field Programmable"}
                  </span>
                  <span className="text-xs text-gray-700 font-medium">
                    {lang === "hi"
                      ? "रोटरी स्विच और डिजिटल डायल द्वारा आसान व सुरक्षित अंशांकन"
                      : "Multi-position rotary dials with tamper-evident sealable transparent cover"}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl sm:text-4xl font-light text-gray-950 tracking-tight font-sans">
                {lang === "hi" ? "एडजस्टेबल ट्रिप थ्रेसहोल्ड एवं रिले" : "Adjustable Trip Thresholds & Relays"}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                {lang === "hi"
                  ? "प्रत्येक औद्योगिक पैनल और रेलवे स्थापना की विद्युत विशेषताएं अलग होती हैं। हमारे डिटेक्टर में 10mA से 30A तक 10-चरणीय करंट चयन और तात्कालिक (<30ms) से लेकर 5.0 सेकंड तक का टाइम डिले उपलब्ध है, जिससे मुख्य और उप-पैनलों के बीच संपूर्ण चयनात्मक समन्वय (Discrimination) बनता है।"
                  : "Different electrical distribution topologies require distinct trip levels. Our unit incorporates a 10-step rotary current selector (10mA to 30A) and an adjustable time delay selector (Instantaneous to 5.0s), guaranteeing complete protective discrimination between upstream substation mains and downstream feeder boards."}
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <div className="w-6 h-6 bg-red-100 flex items-center justify-center text-[#ff3131] font-bold text-xs mt-0.5 flex-shrink-0">
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

                <div className="p-4 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <div className="w-6 h-6 bg-red-100 flex items-center justify-center text-[#ff3131] font-bold text-xs mt-0.5 flex-shrink-0">
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

                <div className="p-4 bg-[#f8f9fa] border border-gray-200 shadow-xs">
                  <div className="w-6 h-6 bg-red-100 flex items-center justify-center text-[#ff3131] font-bold text-xs mt-0.5 flex-shrink-0">
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
            <h2 className="text-2xl sm:text-4xl font-light text-gray-950 tracking-tight font-sans">
              {lang === "hi" ? "विस्तृत तकनीकी विनिर्देश तालिका" : "Technical Specification Matrix"}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light mt-3">
              {lang === "hi"
                ? "डिजिटल अर्थ लीकेज डिटेक्टर के इलेक्ट्रिकल, ऑपरेटिंग और सुरक्षा मानकों का संपूर्ण विवरण"
                : "Full operational ratings, sensor specifications, and compliance standards for electrical designers and consultants."}
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

        {/* 6. Wiring Schematics & Installation Guidelines */}
        <section id="wiring-schematics" className="scroll-mt-36">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-light text-gray-950 tracking-tight font-sans">
              {lang === "hi" ? "वायरिंग एवं सीबीसीटी (CBCT) कनेक्शन गाइड" : "Wiring Schematics & CBCT Integration"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Schematic Step-by-Step Card */}
            <div className="p-6 sm:p-8 bg-[#f8f9fa] border border-gray-200 shadow-xs flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {lang === "hi" ? "सीबीसीटी (CBCT) कोर कनेक्शन नियम" : "Essential CBCT Installation Rules"}
                </h3>
                <div className="space-y-4 text-xs sm:text-sm text-gray-700 font-light">
                  <div className="flex items-start space-x-3">
                    <span className="w-5 h-5 bg-[#ff3131] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow-xs">
                      1
                    </span>
                    <p>
                      {lang === "hi"
                        ? "सभी 3 फेज (R, Y, B) और न्यूट्रल (N) केबलों को एक साथ सीबीसीटी रिंग के अंदर से गुजारें।"
                        : "Pass all 3 Phase conductors (L1, L2, L3) and Neutral (N) through the CBCT aperture in the same direction."}
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-5 h-5 bg-[#ff3131] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow-xs">
                      2
                    </span>
                    <p>
                      {lang === "hi"
                        ? "सुरक्षा अर्थ (PE) तार को सीबीसीटी के अंदर से कभी न गुजारें; यह रिंग के बाहर से सीधे अर्थ बसबार तक जाना चाहिए।"
                        : "NEVER pass the protective Earth (PE) conductor through the CBCT core. Ground shields must bypass outside the core."}
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-5 h-5 bg-[#ff3131] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow-xs">
                      3
                    </span>
                    <p>
                      {lang === "hi"
                        ? "सीबीसीटी सेकेंडरी तारों (S1, S2) को ट्विस्टेड पेयर के रूप में रिले के इनपुट टर्मिनलों से जोड़ें।"
                        : "Use twisted-pair shielded cable (max 10m) between CBCT secondary terminals (S1, S2) and relay sensor input."}
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-5 h-5 bg-[#ff3131] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow-xs">
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

              <div className="p-4 bg-white border border-gray-200 text-xs text-gray-600 shadow-xs">
                <span className="text-[#ff3131] font-semibold block mb-1">
                  {lang === "hi" ? "तकनीकी सलाह:" : "Engineering Advisory:"}
                </span>
                {lang === "hi"
                  ? "यदि केबल आर्मर्ड है, तो आर्मर अर्थिंग तार को वापस सीबीसीटी रिंग के अंदर से घुमाकर अर्थ पर जोड़ना चाहिए।"
                  : "If armored cable is used, ensure the metallic armor bonding conductor loops backward through the CBCT before terminating to ground."}
              </div>
            </div>

            {/* Terminal Diagram Representation */}
            <div className="p-6 sm:p-8 bg-white border border-gray-200 shadow-xs flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {lang === "hi" ? "टर्मिनल ब्लॉक लेआउट" : "Terminal Block Configuration"}
                </h3>
                <p className="text-gray-600 text-xs mb-6">
                  {lang === "hi" ? "मानक 35mm डीआईएन रेल मॉड्यूल टर्मिनल विवरण" : "Standard 35mm DIN-Rail modular enclosure pinout map"}
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between p-3 bg-slate-50 border border-gray-200 shadow-xs">
                    <span className="text-[#ff3131] font-bold">Terminals 1 - 2</span>
                    <span className="text-gray-700">Aux Power Supply (110-240V AC/DC)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 border border-gray-200 shadow-xs">
                    <span className="text-[#ff3131] font-bold">Terminals 3 - 4</span>
                    <span className="text-gray-700">CBCT Toroidal Sensor Input (S1 - S2)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 border border-gray-200 shadow-xs">
                    <span className="text-[#ff3131] font-bold">Terminals 5 - 6</span>
                    <span className="text-gray-700">Remote Reset / Pushbutton Input</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 border border-gray-200 shadow-xs">
                    <span className="text-[#ff3131] font-bold">Terminals 11 - 12 - 14</span>
                    <span className="text-gray-700">Relay 1 (Trip / Breaker Shunt C/O)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 border border-gray-200 shadow-xs">
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
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  {lang === "hi" ? "पीडीएफ डाउनलोड" : "Request PDF"}
                </a>
              </div>
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
                  <div className="p-8 bg-white border border-gray-200 text-center space-y-4 shadow-sm animate-in fade-in duration-300">
                    <div className="w-14 h-14 mx-auto bg-[#ff3131]/10 flex items-center justify-center text-[#ff3131] text-2xl font-bold">
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
                        placeholder={lang === "hi" ? "उदा. सुनील वर्मा" : "e.g. Michael Smith"}
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#ff3131] transition-colors"
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
                          placeholder="protection@org.com"
                          className="w-full px-4 py-2.5 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#ff3131] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-gray-700 mb-1.5">
                          {lang === "hi" ? "आवश्यक सीबीसीटी आकार" : "CBCT Aperture Size"}
                        </label>
                        <select className="w-full px-4 py-2.5 bg-white border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#ff3131] transition-colors">
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
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#ff3131] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#ff3131] hover:bg-[#d62828] text-white font-medium text-sm sm:text-base uppercase tracking-wider transition-all shadow-md shadow-[#ff3131]/20 cursor-pointer"
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
    </main>
  );
}

export default function EarthLeakageDetectorPage() {
  return (
    <LanguageProvider>
      <EarthLeakageDetectorContent />
    </LanguageProvider>
  );
}

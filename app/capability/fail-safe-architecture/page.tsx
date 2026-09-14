"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import AramcoHeader from "../../components/AramcoHeader";
import NewsletterSection from "../../components/NewsletterSection";
import Footer from "../../components/Footer";
import { LanguageProvider, useLanguage } from "../../context/LanguageContext";

function FailSafeArchitectureContent() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("core-principles");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const SUBNAV_ITEMS = [
    { id: "core-principles", label: lang === "hi" ? "मूल सिद्धांत" : "Core Philosophy" },
    { id: "gravity-drop", label: lang === "hi" ? "ग्रेविटी ड्रॉप मेकैनिज्म" : "Gravity Drop & Counterbalance" },
    { id: "redundant-sensing", label: lang === "hi" ? "दोहरी सेंसिंग" : "Redundant Sensing" },
    { id: "railway-interlocking", label: lang === "hi" ? "रेलवे इंटरलॉकिंग" : "Signalling Interlocks" },
    { id: "sil3-matrix", label: lang === "hi" ? "सुरक्षा मैट्रिक्स" : "SIL-3 Matrix" },
  ];

  useEffect(() => {
    const sectionIds = SUBNAV_ITEMS.map((s) => s.id);
    const handleScroll = () => {
      const scrollPos = window.scrollY + 240;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveTab(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SIL_MATRIX = [
    {
      parameter: lang === "hi" ? "सुरक्षा अखंडता स्तर" : "Safety Integrity Level (SIL)",
      target: "SIL-3 (IEC 61508 / EN 50129)",
      implementation: lang === "hi" ? "डुअल-चैनल माइक्रोप्रोसेसर + हार्डवेयर फॉल्ट टॉलरेंस HFT=1" : "Dual-channel voting logic with 1oo2 architecture",
    },
    {
      parameter: lang === "hi" ? "ब्लैकआउट रिएक्शन मोड" : "Total Power Loss Behavior",
      target: lang === "hi" ? "डिफ़ॉल्ट-टू-सेफ ग्रेविटी ड्रॉप / लॉक" : "Mechanical De-Energize to Safe State",
      implementation: lang === "hi" ? "इलेक्ट्रोमैग्नेटिक ब्रेक रिलीज, कंट्रोल्ड काउंटरबैलेंस डिसेंट" : "Electromagnetic holding release with damped gravity fall",
    },
    {
      parameter: lang === "hi" ? "डायग्नोस्टिक कवरेज" : "Diagnostic Coverage (DC)",
      target: "> 99.0%",
      implementation: lang === "hi" ? "निरंतर सेंसर लूप टेस्ट, रिले कांटेक्ट वेल्डिंग डिटेक्शन" : "Continuous cycle self-test & contact weld monitoring",
    },
    {
      parameter: lang === "hi" ? "सुरक्षा रिले आइसोलेशन" : "Galvanic Isolation Rating",
      target: "3.75 kV AC / 1 Minute",
      implementation: lang === "hi" ? "हाई-स्पीड ऑप्टोकपलर्स, ट्रांसिएंट सप्रेसर्स" : "High-isolation optocouplers on all railway interlocking inputs",
    },
    {
      parameter: lang === "hi" ? "अवरोध पहचान रिस्पॉन्स" : "Obstacle Interlock Reaction",
      target: "< 10 Milliseconds",
      implementation: lang === "hi" ? "ड्यूल ऑप्टिकल बीम + इंडक्टिव लूप डुअल ट्रिप" : "Hardware interrupt triggered reverse drive immediately",
    },
    {
      parameter: lang === "hi" ? "औसत खतरनाक विफलता समय" : "MTTFd (Mean Time to Dangerous Failure)",
      target: "> 1,000,000 Operating Cycles",
      implementation: lang === "hi" ? "इंडस्ट्रियल-ग्रेड सॉलिड स्टेट ड्राइव्स एवं प्रिसिजन गियर्स" : "Heavy-duty hardened gear train with brushless DC motor",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#ff3131] selection:text-white relative font-sans">
      {/* 1. Header with Light Theme */}
      <AramcoHeader theme="light" />

      {/* 2. Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-[#f8f9fb] via-white to-white overflow-hidden pb-14 sm:pb-20 pt-28 sm:pt-36 border-b border-gray-100">
        {/* Subtle red accent glow */}
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
                <Link href="/capability" className="hover:text-[#ff3131] transition-colors">
                  {lang === "hi" ? "क्षमताएं" : "Capabilities"}
                </Link>
                <span>/</span>
                <span className="text-[#ff3131] font-semibold">
                  {lang === "hi" ? "फेल-सेफ आर्किटेक्चर" : "Fail-Safe Architecture"}
                </span>
              </nav>

              {/* Eyebrow Badge */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-xs font-semibold text-[#ff3131] tracking-wider uppercase mb-5">
                <span className="w-2 h-2 rounded-full bg-[#ff3131] animate-pulse" />
                <span>
                  {lang === "hi"
                    ? "सुरक्षा अखंडता स्तर (SIL-3 आर्किटेक्चर)"
                    : "SAFETY INTEGRITY LEVEL (SIL-3 COMPLIANT)"}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-gray-950 leading-[1.12] mb-5">
                {lang === "hi" ? (
                  <>
                    शून्य-जोखिम गारंटी: <br />
                    <span className="text-[#ff3131]">डिफ़ॉल्ट-टू-सेफ आर्किटेक्चर</span>
                  </>
                ) : (
                  <>
                    Zero Hazard Guarantee: <br />
                    <span className="text-[#ff3131]">Fail-Safe System Architecture.</span>
                  </>
                )}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mb-8">
                {lang === "hi"
                  ? "रेलवे क्रॉसिंग और मिशन-क्रिटिकल कॉरिडोर के लिए तैयार: विद्युत आपूर्ति टूटने, कंट्रोल लाइन कटने या सेंसर विफलता पर सिस्टम स्वतः प्रमाणित सुरक्षित अवस्था में लॉक हो जाता है।"
                  : "Engineered specifically for railway level crossings and critical perimeters. In the event of complete blackout, severed control links, or sensor degradation, mechanical counterbalance and redundant logic force the system into a guaranteed safe state."}
              </p>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                <div className="border-l-2 border-[#ff3131] pl-3">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-950">100%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                    {lang === "hi" ? "फेल-सेफ स्टेट" : "Fail-Safe Default"}
                  </div>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-950">SIL-3</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                    {lang === "hi" ? "लॉजिक कम्पलायंस" : "Safety Integrity"}
                  </div>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-950">&lt; 10ms</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                    {lang === "hi" ? "फेलओवर रिस्पॉन्स" : "Trip Response"}
                  </div>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-950">3.75 kV</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                    {lang === "hi" ? "गैल्वेनिक आइसोलेशन" : "Opto-Isolation"}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group bg-gray-100">
                <div
                  className="w-full h-[380px] sm:h-[460px] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: "url('/images/boom_barrier_hero.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block px-3 py-1 rounded-md bg-[#ff3131] text-[11px] font-bold tracking-wider uppercase mb-2">
                    {lang === "hi" ? "मैकेनिकल ग्रेविटी रिलीज" : "ACTIVE FAIL-SAFE ACTUATOR"}
                  </span>
                  <h3 className="text-lg font-bold">
                    {lang === "hi" ? "ग्रेविटी-असिस्टेड काउंटरबैलेंस असेंबली" : "Counterbalanced Controlled-Drop Mechanism"}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1">
                    {lang === "hi" ? "बिना बिजली के भी 100% सुरक्षित गिरावट" : "Safe controlled descent without external mains power"}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Sticky Subnavigation */}
      <div className="sticky top-16 sm:top-20 z-40 bg-white/95 backdrop-blur-md border-y border-gray-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Left Brand Anchor */}
            <div className="hidden md:flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-[#ff3131]" />
              <span className="text-xs font-bold uppercase tracking-wider text-gray-900">
                {lang === "hi" ? "फेल-सेफ वास्तुकला" : "FAIL-SAFE ARCHITECTURE"}
              </span>
            </div>

            {/* Subnav Navigation Pills */}
            <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1">
              {SUBNAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item.id);
                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    activeTab === item.id
                      ? "bg-[#ff3131] text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-950 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right Consultation CTA */}
            <div className="hidden sm:block">
              <a
                href="#consultation-quote"
                className="px-4 py-1.5 rounded-full bg-red-50 hover:bg-[#ff3131] text-[#ff3131] hover:text-white border border-red-200 hover:border-[#ff3131] text-xs font-bold uppercase tracking-wider transition-all duration-200"
              >
                {lang === "hi" ? "इंजीनियरिंग से बात करें" : "Consult Engineering"}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Deep-Dive Section 1: Core Philosophy */}
      <section id="core-principles" className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff3131] mb-2 block">
                {lang === "hi" ? "सिद्धांत 01 : डी-एनर्जाइज सुरक्षा" : "PRINCIPLE 01 : DE-ENERGIZE TO SAFE STATE"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-950 tracking-tight mb-5 leading-tight">
                {lang === "hi"
                  ? "विद्युत कटने पर भी सुरक्षित स्थिति में पहुंचने की अचूक व्यवस्था"
                  : "Guaranteed Safe Orientation on Total Energy Depletion"}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 font-normal">
                {lang === "hi"
                  ? "पारंपरिक प्रणालियां बिजली कटने पर अपनी स्थिति में फंस जाती हैं जिससे रेलवे क्रॉसिंग पर जानलेवा स्थितियां उत्पन्न हो सकती हैं। हमारा आर्किटेक्चर यांत्रिक बल और स्प्रिंग-लोडेड डी-एनर्जाइजेशन का उपयोग करता है।"
                  : "Conventional motor gates freeze in place during power loss, causing extreme collision risks at railway intersections. Our architecture employs normally-open/normally-closed electrical routing combined with mechanical counterweights, ensuring complete autonomous transition to the designated safe state without requiring active microcontroller commands."}
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-gray-200 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-[#ff3131] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      {lang === "hi" ? "हार्डवेयर फॉल्ट टॉलरेंस (HFT = 1)" : "Hardware Fault Tolerance (HFT = 1)"}
                    </h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      {lang === "hi"
                        ? "किसी एक रिले या सेंसर के खराब होने पर भी सुरक्षा कार्यप्रणाली अप्रभावित रहती है।"
                        : "Single-component electrical breakdown never disables the primary safety shutdown circuit."}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-gray-200 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-[#ff3131] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      {lang === "hi" ? "संपर्क वेल्डिंग सुरक्षा" : "Force-Guided Relay Contact Surveillance"}
                    </h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      {lang === "hi"
                        ? "यदि कोई संपर्क वेल्ड हो जाए तो सिस्टम तुरंत खराबी का पता लगा कर अलार्म सक्रिय करता है।"
                        : "Mechanically linked contacts verify that high-amperage switching contacts never weld shut undetected."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-[#f8f9fa] border border-gray-200/80 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/50 rounded-bl-full pointer-events-none" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-6">
                  {lang === "hi" ? "लॉजिकल फ्लो आरेख" : "FAIL-SAFE CONTROL LOOP STATE MACHINE"}
                </h3>

                <div className="space-y-4 text-xs font-mono">
                  <div className="p-3 bg-white rounded-lg border border-gray-200 text-gray-800 flex justify-between items-center">
                    <span>STATE: NORMAL_OPERATION</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded font-sans font-semibold text-[10px]">PASSIVE MONITOR</span>
                  </div>
                  <div className="text-center text-[#ff3131] font-bold">↓ (Power Loss / Circuit Interruption)</div>
                  <div className="p-3 bg-red-50 rounded-lg border border-red-200 text-red-900 flex justify-between items-center">
                    <span>ACTION: DE-ENERGIZE BRAKE RELAY</span>
                    <span className="px-2 py-0.5 bg-red-200 text-red-900 rounded font-sans font-semibold text-[10px]">&lt; 8ms</span>
                  </div>
                  <div className="text-center text-[#ff3131] font-bold">↓ (Counterbalance Release)</div>
                  <div className="p-3 bg-white rounded-lg border border-gray-200 text-gray-800 flex justify-between items-center">
                    <span>MECH: DAMPED GRAVITY DROP / HOLD</span>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-sans font-semibold text-[10px]">FLUID DAMPER</span>
                  </div>
                  <div className="text-center text-[#ff3131] font-bold">↓ (Interlocking Verification)</div>
                  <div className="p-3 bg-gray-900 text-white rounded-lg flex justify-between items-center">
                    <span>REST: FAIL-SAFE LOCKED STATE</span>
                    <span className="px-2 py-0.5 bg-green-500 text-white rounded font-sans font-semibold text-[10px]">CONFIRMED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Deep-Dive Section 2: Gravity Drop & Mechanical Counterbalance */}
      <section id="gravity-drop" className="py-16 sm:py-24 bg-[#f8f9fb] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3131] mb-2 block">
              {lang === "hi" ? "सिद्धांत 02 : यांत्रिक काउंटरबैलेंस" : "PRINCIPLE 02 : MECHANICAL GRAVITY COUNTERBALANCE"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-950 tracking-tight">
              {lang === "hi"
                ? "इलेक्ट्रोमैग्नेटिक ब्रेक एवं गुरुत्वाकर्षण नियंत्रित गिरावट"
                : "Kinetic Damping & Zero-Power Mechanical Descent"}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              {lang === "hi"
                ? "बूम बैरियर आर्म का गुरुत्वाकर्षण केंद्र सटीक संतुलन भार के साथ कैलिब्रेट किया जाता है। बिजली कटते ही ब्रेक खुल जाता है और हाइड्रोलिक डैम्पर बूम को झटका दिए बिना सुरक्षित नीचे लाता है।"
                : "The barrier boom is balanced with precision counterweights. During mains shutdown, the electromagnetic lock releases immediately. Controlled descent is regulated through hydraulic dashpots to prevent mechanical shock or bounce."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#ff3131] flex items-center justify-center font-bold mb-4">
                ⚙️
              </div>
              <h3 className="text-base font-bold text-gray-950 mb-2">
                {lang === "hi" ? "इलेक्ट्रोमैग्नेटिक ब्रेक" : "Failsafe Brake Clutch"}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {lang === "hi"
                  ? "चालू अवस्था में लगातार एनर्जाइज्ड रहता है; किसी भी खराबी या बिजली कटने पर तुरंत स्प्रिंग द्वारा ब्रेक रिलीज हो जाता है।"
                  : "Normally-energized electromagnetic coil holds tension; loss of power instantly releases spring-loaded clutch mechanism."}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#ff3131] flex items-center justify-center font-bold mb-4">
                ⚖️
              </div>
              <h3 className="text-base font-bold text-gray-950 mb-2">
                {lang === "hi" ? "हाइड्रोलिक फ्लूइड डैम्पिंग" : "Hydraulic Dashpot Damper"}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {lang === "hi"
                  ? "बूम के गिरने की गति को अंतिम 15 डिग्री पर नियंत्रित करता है ताकि जमीन या फ्रेम से टकराने पर कोई कंपन न हो।"
                  : "Regulates terminal descent speed over the final 15° of travel, eliminating rebound shock to boom and foundation."}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#ff3131] flex items-center justify-center font-bold mb-4">
                🔒
              </div>
              <h3 className="text-base font-bold text-gray-950 mb-2">
                {lang === "hi" ? "मैन्युअल क्रैंक ओवरराइड" : "Manual Hand-Crank Override"}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {lang === "hi"
                  ? "दीर्घकालिक पावर कट के दौरान आपातकालीन परिचालन हेतु डेडिकेटिड मैकेनिकल क्रैंक कुंजी।"
                  : "Heavy-duty ergonomic key-operated crank allows station master to manually operate arm safely during scheduled line maintenance."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Deep-Dive Section 3: Redundant Sensing & Anti-Crush */}
      <section id="redundant-sensing" className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100">
                <div
                  className="w-full h-80 sm:h-96 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/crash_barrier_perimeter.jpg')" }}
                />
                <div className="p-5 bg-white border-t border-gray-200">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-900">
                    <span>DUAL INTERLOCK VALIDATION</span>
                    <span className="text-[#ff3131]">RESPONSE &lt; 10ms</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff3131] mb-2 block">
                {lang === "hi" ? "सिद्धांत 03 : दोहरी सेंसिंग इंटरलॉकिंग" : "PRINCIPLE 03 : DUAL-CHANNEL SENSING INTERLOCKS"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-950 tracking-tight mb-5 leading-tight">
                {lang === "hi"
                  ? "एंटी-क्रश सुरक्षा: ऑप्टिकल बीम एवं इंडक्टिव लूप का समन्वय"
                  : "Redundant Optical Photobeams & Sub-Surface Inductive Loops"}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 font-normal">
                {lang === "hi"
                  ? "यदि बूम के नीचे कोई वाहन, पैदल यात्री या अवरोध उपस्थित हो, तो इन्फ्रारेड बीम और सड़क के नीचे लगा इंडक्टिव लूप दोनों स्वतंत्र रूप से बूम के उतरने को तुरंत रोक कर रिवर्स दिशा में उठा देते हैं।"
                  : "To eliminate pinch or crush hazards, optical infrared curtains combine with embedded tarmac loops. Each sensor line runs on independent hardware channels. If either channel triggers, the motor drive instantly engages reverse torque in under 10 milliseconds."}
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center space-x-3 text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">✓</span>
                  <span>{lang === "hi" ? "मॉड्यूलेटेड इन्फ्रारेड फ्रीक्वेंसी - सूर्य के प्रकाश से अप्रभावित" : "Modulated IR pulse train immune to blinding direct sunlight"}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">✓</span>
                  <span>{lang === "hi" ? "तार कटने पर स्वतः अलार्म ट्रिगर करने वाला सुपरवाइज्ड लूप" : "Supervised current loop detects severed wiring immediately"}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">✓</span>
                  <span>{lang === "hi" ? "भारी वाहन व 2-पहिया दोनों की समान संवेदनशीलता" : "Accurately detects both heavy freight vehicles and light two-wheelers"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Deep-Dive Section 4: Railway Interlocking & Signalling */}
      <section id="railway-interlocking" className="py-16 sm:py-24 bg-[#f8f9fb] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3131] mb-2 block">
              {lang === "hi" ? "सिद्धांत 04 : सिग्नलिंग एकीकरण" : "PRINCIPLE 04 : SIGNALLING & CABIN INTERLOCKING"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-950 tracking-tight">
              {lang === "hi"
                ? "3.75 kV गैल्वेनिकली आइसोलेटेड रेलवे इंटरलॉकिंग इंटरफेस"
                : "Fail-Safe Direct Interface to Railway Electronic Interlocking"}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              {lang === "hi"
                ? "सिग्नल केबिन, रिले रूम एवं ऑटोमैटिक सिग्नलिंग सिस्टम के साथ सीधा इंटरफेस। जब तक दोनों गेट पूरी तरह लॉक नहीं होते, ट्रेन को ग्रीन सिग्नल मिलना असंभव है।"
                : "Direct electrical integration with Railway Relay Rooms and Solid State Interlocking (SSI). Track signals can only be cleared to green when barrier limit switches prove 100% mechanical lock down on both road flanks."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200">
              <h3 className="text-base font-bold text-gray-950 mb-3 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#ff3131]" />
                <span>{lang === "hi" ? "पोटेंशियल-फ्री लिमिट स्विच फीडबैक" : "Potential-Free End-Position Proving"}</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {lang === "hi"
                  ? "हेवी-ड्यूटी गोल्ड-प्लेटेड माइक्रो-स्विच बूम के 0° (पूर्ण बंद) और 90° (पूर्ण खुला) स्थिति की पुष्टि करते हैं। कोई इलेक्ट्रॉनिक फॉल्ट इस फीडबैक को बाईपास नहीं कर सकता।"
                  : "Positive-break mechanical limit contacts route directly back to station interlocking racks, providing hardwired confirmation that booms are locked down before rail signal clears."}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200">
              <h3 className="text-base font-bold text-gray-950 mb-3 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#ff3131]" />
                <span>{lang === "hi" ? "सर्जरी एवं लाइटनिंग सर्ज आइसोलेशन" : "3.75 kV Surge Protection"}</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {lang === "hi"
                  ? "रेलवे ट्रैक के आसपास ओवरहेड 25 kV AC ट्रैक्शन लाइन से उत्पन्न होने वाले इंडक्टिव सर्ज और आकाशीय बिजली से आंतरिक मदरबोर्ड को पूर्ण सुरक्षा।"
                  : "Engineered to withstand harsh trackside electro-magnetic interference (EMI) and 25 kV AC traction harmonics through optoelectronic barrier boundaries."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SIL-3 Matrix Table */}
      <section id="sil3-matrix" className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3131] mb-2 block">
              {lang === "hi" ? "प्रमाणीकरण तालिका" : "STANDARDS & SAFETY MATRIX"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-950 tracking-tight">
              {lang === "hi"
                ? "SIL-3 एवं RDSO विशिष्टताओं का सत्यापन"
                : "Fail-Safe Safety & Regulatory Verification Matrix"}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {lang === "hi"
                ? "प्रत्येक सुरक्षा पैरामीटर का प्रयोगशाला और ऑन-साइट फील्ड परिस्थितियों में सत्यापन।"
                : "Audited against IEC 61508, EN 50126, and RDSO trackside signalling specifications."}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-950 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-4 px-5">{lang === "hi" ? "सुरक्षा पैरामीटर" : "Safety Parameter"}</th>
                  <th className="py-4 px-5">{lang === "hi" ? "मानक आवश्यकता" : "Target Requirement"}</th>
                  <th className="py-4 px-5 text-[#ff3131]">{lang === "hi" ? "आर्किटेक्चरल इंप्लीमेंटेशन" : "Implementation Details"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {SIL_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-5 font-semibold text-gray-900">{row.parameter}</td>
                    <td className="py-4 px-5 text-gray-700 font-mono font-medium">{row.target}</td>
                    <td className="py-4 px-5 text-gray-600">{row.implementation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. Technical Consultation Form */}
      <section id="consultation-quote" className="py-16 sm:py-24 bg-[#f8f9fb] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-md">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#ff3131] bg-red-50 px-3.5 py-1 rounded-full border border-red-200 mb-3">
                {lang === "hi" ? "इंजीनियरिंग परामर्श" : "ENGINEERING CONSULTATION"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 tracking-tight">
                {lang === "hi"
                  ? "अपनी साइट हेतु फेल-सेफ आर्किटेक्चर विनिर्देश प्राप्त करें"
                  : "Request Fail-Safe Architectural Schematics & SIL Data"}
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                {lang === "hi"
                  ? "हमारे चीफ सेफ्टी सिस्टम्स इंजीनियर से सीधी तकनीकी चर्चा हेतु फॉर्म भरें।"
                  : "Our railway safety integration team will furnish wiring schematics, SIL validation reports, and CAD drawings for your project."}
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-green-50 border border-green-200 rounded-2xl text-center max-w-lg mx-auto">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-green-900 mb-2">
                  {lang === "hi" ? "परामर्श अनुरोध प्राप्त हुआ!" : "Technical Inquiry Dispatched"}
                </h3>
                <p className="text-xs sm:text-sm text-green-700">
                  {lang === "hi"
                    ? "हमारे सिस्टम इंजीनियर 24 व्यावसायिक घंटों के भीतर आपसे संपर्क करेंगे।"
                    : "A senior fail-safe systems engineer will contact you shortly with full documentation."}
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto"
              >
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    {lang === "hi" ? "पूरा नाम *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sunil Verma"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#ff3131] focus:ring-1 focus:ring-[#ff3131]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    {lang === "hi" ? "व्यावसायिक ईमेल *" : "Work Email *"}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@railway.gov.in"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#ff3131] focus:ring-1 focus:ring-[#ff3131]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    {lang === "hi" ? "संगठन / डिवीजन *" : "Organization / Division *"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Western Railway S&T"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#ff3131] focus:ring-1 focus:ring-[#ff3131]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    {lang === "hi" ? "बूम लंबाई / कॉरिडोर प्रकार *" : "Corridor / Boom Requirement *"}
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#ff3131] focus:ring-1 focus:ring-[#ff3131]"
                  >
                    <option value="">Select Boom Span</option>
                    <option value="4m">4-Meter High-Speed Road</option>
                    <option value="6m">6-Meter Railway LC Standard</option>
                    <option value="8m">8-Meter Double-Carriageway</option>
                    <option value="custom">Custom Industrial Interlock</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    {lang === "hi" ? "सिग्नलिंग एवं इंटरलॉकिंग विवरण" : "Signalling & Interlocking Context"}
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your interlocking cabin interface (e.g. 24V DC / 110V AC relay inputs, fail-state preference)..."
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#ff3131] focus:ring-1 focus:ring-[#ff3131]"
                  />
                </div>
                <div className="sm:col-span-2 text-center pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#ff3131] hover:bg-[#d62828] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    {lang === "hi" ? "तकनीकी स्कीमेटिक्स का अनुरोध करें" : "Request Technical Schematics"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 10. Newsletter & Footer */}
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default function FailSafeArchitecturePage() {
  return (
    <LanguageProvider>
      <FailSafeArchitectureContent />
    </LanguageProvider>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import AramcoHeader from "../../components/AramcoHeader";
import NewsletterSection from "../../components/NewsletterSection";
import Footer from "../../components/Footer";
import { LanguageProvider, useLanguage } from "../../context/LanguageContext";

function DiagnosticsSystemIntegrationContent() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("telemetry");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const SUBNAV_ITEMS = [
    { id: "telemetry", label: lang === "hi" ? "SCADA एवं मोडबस" : "Modbus & SCADA" },
    { id: "true-rms", label: lang === "hi" ? "ट्रू RMS DSP इंजन" : "True RMS DSP" },
    { id: "event-logging", label: lang === "hi" ? "ब्लैकबॉक्स इवेंट मेमोरी" : "Blackbox Memory" },
    { id: "relay-mapping", label: lang === "hi" ? "रिले मैपिंग व आउटपुट" : "Relay Mapping" },
    { id: "protocol-matrix", label: lang === "hi" ? "रजिस्टर मैप मैट्रिक्स" : "Register Map" },
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

  const MODBUS_REGISTERS = [
    {
      reg: "40001",
      param: lang === "hi" ? "लाइव लीकेज करंट (mA)" : "Live Residual Leakage Current",
      format: "16-Bit Unsigned Integer",
      access: "Read-Only (0x03 / 0x04)",
      desc: lang === "hi" ? "रीयल-टाइम ट्रू RMS करंट (0.1 mA रेजोल्यूशन)" : "Live instantaneous DSP sampled leakage value in mA",
    },
    {
      reg: "40002",
      param: lang === "hi" ? "कॉन्फ़िगर ट्रिप थ्रेसहोल्ड" : "Configured Trip Threshold",
      format: "16-Bit Unsigned Integer",
      access: "Read / Write (0x06 / 0x10)",
      desc: lang === "hi" ? "वर्तमान ट्रिप सीमा (10mA से 30A सेटिंग्स)" : "Active trip setpoint with parity verification",
    },
    {
      reg: "40003",
      param: lang === "hi" ? "ट्रिप विलंब समय (ms)" : "Active Trip Delay Setting",
      format: "16-Bit Unsigned Integer",
      access: "Read / Write (0x06 / 0x10)",
      desc: lang === "hi" ? "0 (त्वरित <30ms) से 5000ms तक" : "Selectable grading delay from 0 to 5,000 milliseconds",
    },
    {
      reg: "40004",
      param: lang === "hi" ? "सिस्टम एवं रिले स्थिति फ्लैग" : "Relay & Health Bitfield Status",
      format: "16-Bit Bitmask (Bitmap)",
      access: "Read-Only (0x03)",
      desc: lang === "hi" ? "बिट 0: रिले 1 ट्रिप, बिट 1: अलार्म, बिट 2: CBCT ओपन" : "Bit 0: Shunt Trip; Bit 1: Alarm; Bit 2: Sensor Wire Break",
    },
    {
      reg: "40005",
      param: lang === "hi" ? "अंतिम ट्रिप फॉल्ट करंट" : "Last Fault Magnitude (Peak mA)",
      format: "32-Bit Float (2 Registers)",
      access: "Read-Only (0x03)",
      desc: lang === "hi" ? "अंतिम ट्रिप के समय दर्ज अधिकतम करंट मान" : "Historical peak current captured during breaker disconnect",
    },
    {
      reg: "40007",
      param: lang === "hi" ? "कुल ट्रिप साइकिल काउंटर" : "Cumulative Trip Event Counter",
      format: "32-Bit Unsigned Integer",
      access: "Read-Only (0x03)",
      desc: lang === "hi" ? "कमीशनिंग से अब तक कुल फॉल्ट की संख्या" : "Non-volatile life cycle trip count for predictive maintenance",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#ff3131] selection:text-white relative font-sans">
      {/* 1. Light Theme Header */}
      <AramcoHeader theme="light" />

      {/* 2. Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-[#f8f9fb] via-white to-white overflow-hidden pb-14 sm:pb-20 pt-28 sm:pt-36 border-b border-gray-100">
        {/* Ambient subtle glow */}
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
                  {lang === "hi" ? "डायग्नोस्टिक्स एवं सिस्टम एकीकरण" : "Diagnostics & System Integration"}
                </span>
              </nav>

              {/* Eyebrow Badge */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-xs font-semibold text-[#ff3131] tracking-wider uppercase mb-5">
                <span className="w-2 h-2 rounded-full bg-[#ff3131] animate-pulse" />
                <span>
                  {lang === "hi"
                    ? "इंडस्ट्रियल IoT एवं SCADA टेलीमेट्री"
                    : "INDUSTRIAL IOT & SCADA TELEMETRY INTEGRATION"}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-gray-950 leading-[1.12] mb-5">
                {lang === "hi" ? (
                  <>
                    रीयल-टाइम इंटेलिजेंस: <br />
                    <span className="text-[#ff3131]">डायग्नोस्टिक्स एवं सिस्टम एकीकरण</span>
                  </>
                ) : (
                  <>
                    Real-Time Telemetry: <br />
                    <span className="text-[#ff3131]">Diagnostics & SCADA Integration.</span>
                  </>
                )}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mb-8">
                {lang === "hi"
                  ? "32-बिट DSP आर्किटेक्चर, ट्रू RMS हार्मोनिक फिल्टरिंग, 500-इवेंट ब्लैकबॉक्स मेमोरी और RS-485 मोडबस RTU इंटरफेस के साथ केंद्रीय SCADA व PLC में निर्बाध टेलीमेट्री।"
                  : "High-speed 32-bit DSP processing with True RMS harmonic noise immunity, 500-event non-volatile blackbox recording, and 1.5 kV opto-isolated RS-485 Modbus RTU telemetry for centralised SCADA and PLC control rooms."}
              </p>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                <div className="border-l-2 border-[#ff3131] pl-3">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-950">RS-485</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                    {lang === "hi" ? "मोडबस RTU" : "Modbus RTU"}
                  </div>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-950">True RMS</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                    {lang === "hi" ? "DSP मापन इंजन" : "15th Harmonic DSP"}
                  </div>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-950">500 Evt</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                    {lang === "hi" ? "ब्लैकबॉक्स मेमोरी" : "EEPROM Logger"}
                  </div>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-950">&lt; 30ms</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                    {lang === "hi" ? "ट्रिप क्लियरेंस" : "Fastest Trip"}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group bg-gray-100">
                <div
                  className="w-full h-[380px] sm:h-[460px] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: "url('/images/eld_engineering_lab.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block px-3 py-1 rounded-md bg-[#ff3131] text-[11px] font-bold tracking-wider uppercase mb-2">
                    {lang === "hi" ? "डिजिटल टेलीमेट्री लैब" : "DSP CALIBRATION LAB"}
                  </span>
                  <h3 className="text-lg font-bold">
                    {lang === "hi" ? "हार्मोनिक फिल्टरिंग एवं SCADA सत्यापन" : "Precision True RMS DSP Calibration"}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1">
                    {lang === "hi" ? "VFD एवं इनवर्टर नॉइज़ में 100% सटीक मापन" : "Zero false trips on non-linear inverter switching noise"}
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
                {lang === "hi" ? "डायग्नोस्टिक्स व एकीकरण" : "DIAGNOSTICS & INTEGRATION"}
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

      {/* 4. Deep-Dive Section 1: RS-485 Modbus RTU & SCADA */}
      <section id="telemetry" className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff3131] mb-2 block">
                {lang === "hi" ? "मॉड्यूल 01 : SCADA टेलीमेट्री" : "MODULE 01 : RS-485 MODBUS RTU & SCADA"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-950 tracking-tight mb-5 leading-tight">
                {lang === "hi"
                  ? "एक ही RS-485 बस पर 32 नोड्स तक केंद्रीकृत निगरानी"
                  : "Galvanically Isolated 2-Wire Multi-Drop Telemetry"}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 font-normal">
                {lang === "hi"
                  ? "प्रत्येक अर्थ लीकेज डिटेक्टर और बूम बैरियर कंट्रोलर में औद्योगिक RS-485 पोर्ट मौजूद है। यह पोर्ट 1.5 kV गैल्वेनिकली आइसोलेटेड है और 32 यूनिटों को 1200 मीटर की दूरी तक एक ही ट्विस्टेड-पेयर केबल पर जोड़ सकता है।"
                  : "All devices embed an opto-isolated RS-485 transceiver supporting Modbus RTU protocol up to 115,200 baud. Connect up to 32 nodes over a single shielded twisted pair line spanning up to 1,200 meters directly to station PLCs or enterprise DCS consoles."}
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-gray-200 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-[#ff3131] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      {lang === "hi" ? "1.5 kV गैल्वेनिक ऑप्टिकल आइसोलेशन" : "1.5 kV Optical Bus Isolation"}
                    </h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      {lang === "hi"
                        ? "पावर केबल्स से उत्पन्न ग्राउंड लूप्स और हाई वोल्टेज सर्ज से केंद्रीय पीएलसी को सुरक्षित रखता है।"
                        : "Completely breaks ground loops between field switchboards and the remote control server room."}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-gray-200 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-[#ff3131] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      {lang === "hi" ? "सॉफ्टवेयर से दूरस्थ कॉन्फ़िगरेशन" : "Remote Threshold Modification via SCADA"}
                    </h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      {lang === "hi"
                        ? "इंजीनियर केंद्रीय नियंत्रण कक्ष से ट्रिप सीमाएं और अलार्म सेटिंग्स बदल सकते हैं।"
                        : "Security-keyed write registers allow central operators to adjust grading delay without manual panel access."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-[#f8f9fa] border border-gray-200 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">
                  {lang === "hi" ? "SCADA आर्किटेक्चर टोपोलॉजी" : "INDUSTRIAL SCADA TOPOLOGY BUS"}
                </h3>
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-gray-900 text-white rounded-xl flex items-center justify-between">
                    <span>CENTRAL SCADA / PLC MASTER</span>
                    <span className="text-[#ff3131] font-bold text-[11px]">192.168.1.100</span>
                  </div>
                  <div className="text-center text-gray-400">│ (RS-485 Serial Gateway / Modbus TCP)</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-white rounded-xl border border-gray-200 text-gray-800">
                      <div className="font-bold text-xs">NODE #01: SUBSTATION-A</div>
                      <div className="text-[11px] text-[#ff3131] mt-1 font-semibold">ELD: 14.2 mA (NORMAL)</div>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-gray-200 text-gray-800">
                      <div className="font-bold text-xs">NODE #02: FEEDER MOTOR</div>
                      <div className="text-[11px] text-green-600 mt-1 font-semibold">ELD: 3.1 mA (HEALTHY)</div>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-gray-200 text-gray-800">
                      <div className="font-bold text-xs">NODE #03: RAIL BARRIER</div>
                      <div className="text-[11px] text-blue-600 mt-1 font-semibold">STATUS: BOOM LOCKED</div>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-gray-200 text-gray-800">
                      <div className="font-bold text-xs">NODE #04: RECTIFIER RACK</div>
                      <div className="text-[11px] text-[#ff3131] mt-1 font-semibold">ELD: 28.5 mA (WARNING)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Deep-Dive Section 2: True RMS DSP Harmonic Filtering */}
      <section id="true-rms" className="py-16 sm:py-24 bg-[#f8f9fb] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3131] mb-2 block">
              {lang === "hi" ? "मॉड्यूल 02 : डिजिटल सिग्नल प्रोसेसिंग" : "MODULE 02 : TRUE RMS DIGITAL SIGNAL PROCESSING"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-950 tracking-tight">
              {lang === "hi"
                ? "हार्मोनिक नॉइज़ एवं इनवर्टर स्विचिंग में शून्य मिथ्या ट्रिप"
                : "Precision True RMS Calculation up to 15th Harmonic"}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              {lang === "hi"
                ? "आधुनिक कारखानों और रेलवे में सोलर इन्वर्टर, वीएफडी (VFD), और यूपीएस भारी हार्मोनिक विरूपण पैदा करते हैं। पारंपरिक एनालॉग रिले भ्रमित होकर फॉल्स ट्रिप कर जाते हैं। हमारा 32-बिट डीएसपी 3.2 kHz पर सैंपल लेकर वास्तविक फॉल्ट करंट की गणना करता है।"
                : "Non-linear switching loads like Variable Frequency Drives (VFDs) and Solar Inverters create high-frequency common-mode noise. Standard analog detectors false-trip constantly. Our 32-bit DSP processor executes 64 samples per mains cycle (3.2 kHz sampling rate) to compute true mathematical RMS."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#ff3131] flex items-center justify-center font-bold mb-4">
                📊
              </div>
              <h3 className="text-base font-bold text-gray-950 mb-2">
                {lang === "hi" ? "3.2 kHz हाई-स्पीड सैंपलिंग" : "3.2 kHz High-Speed Sampling"}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {lang === "hi"
                  ? "प्रत्येक 50Hz चक्र में 64 बिंदुओं पर माप कर विकृत तरंगों का एकदम सटीक आकलन।"
                  : "64 samples per 20ms mains sine wave capture accurate real-world heating effect without peak-averaging errors."}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#ff3131] flex items-center justify-center font-bold mb-4">
                ⚡
              </div>
              <h3 className="text-base font-bold text-gray-950 mb-2">
                {lang === "hi" ? "VFD स्विचिंग नॉइज़ फिल्टर" : "Active VFD PWM Noise Rejection"}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {lang === "hi"
                  ? "आईजीबीटी (IGBT) स्विचिंग के कारण पैदा होने वाली 8-16 kHz शोर आवृत्ति को स्वचालित रूप से समाप्त करता है।"
                  : "Integrated 4th order Butterworth bandpass filter suppresses PWM carrier ripples from motor drives."}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#ff3131] flex items-center justify-center font-bold mb-4">
                ⏱️
              </div>
              <h3 className="text-base font-bold text-gray-950 mb-2">
                {lang === "hi" ? "< 30ms त्वरित ट्रिप रिएक्शन" : "< 30ms Instantaneous Trip Reaction"}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {lang === "hi"
                  ? "गंभीर शार्ट सर्किट या प्रत्यक्ष संपर्क में 30 मिलीसेकंड के भीतर सर्किट ब्रेकर को बंद करता है।"
                  : "Hardware comparator bypass engages immediate breaker tripping under severe catastrophic ground faults."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Deep-Dive Section 3: Non-Volatile Event Memory */}
      <section id="event-logging" className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100">
                <div
                  className="w-full h-80 sm:h-96 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/earth_leakage_detector_hero.jpg')" }}
                />
                <div className="p-5 bg-white border-t border-gray-200">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-900">
                    <span>EEPROM NON-VOLATILE FAULT RECORDER</span>
                    <span className="text-[#ff3131]">500 EVENTS STORED</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff3131] mb-2 block">
                {lang === "hi" ? "मॉड्यूल 03 : ब्लैकबॉक्स फॉल्ट रिकॉर्डर" : "MODULE 03 : NON-VOLATILE BLACKBOX RECORDING"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-950 tracking-tight mb-5 leading-tight">
                {lang === "hi"
                  ? "विद्युत विफलता में भी 500 फॉल्ट रिकॉर्ड सुरक्षित"
                  : "Comprehensive Root-Cause Analysis Fault Memory"}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 font-normal">
                {lang === "hi"
                  ? "जब भी कोई ट्रिप या गंभीर लीकेज घटना होती है, आंतरिक EEPROM चिप उस क्षण का सटीक समय, पीक करंट, ट्रिप में लगा समय और आंतरिक तापमान रिकॉर्ड कर लेती है। बिजली पूरी तरह चले जाने पर भी यह डेटा 10 वर्षों तक सुरक्षित रहता है।"
                  : "Every fault trip triggers an autonomous write to industrial-grade ferroelectric non-volatile memory. Timestamp, trip duration, peak leakage amperage, and ambient temperature are saved. Retains records for over 10 years without batteries or auxiliary power."}
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center space-x-3 text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">✓</span>
                  <span>{lang === "hi" ? "अंतिम 10 ट्रिप फ्रंट पैनल डिस्प्ले पर सीधे देखने की सुविधा" : "Direct front-panel scrolling recall of last 10 trip records"}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">✓</span>
                  <span>{lang === "hi" ? "मोडबस द्वारा संपूर्ण 500 घटनाओं का डेटाबेस एक्सपोर्ट" : "Full 500-event log batch exportable over RS-485 Modbus"}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">✓</span>
                  <span>{lang === "hi" ? "इंसुलेशन क्षरण ट्रेंडिंग - समय से पहले फॉल्ट की पहचान" : "Predictive insulation decay tracking alerts before actual trip occurs"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Deep-Dive Section 4: Dual Form C Relays */}
      <section id="relay-mapping" className="py-16 sm:py-24 bg-[#f8f9fb] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3131] mb-2 block">
              {lang === "hi" ? "मॉड्यूल 04 : रिले मैपिंग" : "MODULE 04 : POTENTIAL-FREE DUAL FORM C RELAYS"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-950 tracking-tight">
              {lang === "hi"
                ? "स्वतंत्र ट्रिप एवं अलार्म आउटपुट कांटेक्ट्स"
                : "Isolated Shunt Trip & SCADA Pre-Alarm Channels"}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              {lang === "hi"
                ? "दो स्वतंत्र पोटेंशियल-फ्री चेंजओवर रिले: रिले 1 सीधे सर्किट ब्रेकर के शंट ट्रिप को ट्रिगर करता है, जबकि रिले 2 ऑपरेटर को चेतावनी हूटर या स्काडा अलार्म भेजता है।"
                : "Two independent Form C changeover contacts rated 6A @ 250V AC. Relay 1 connects directly to breaker shunt or under-voltage coils; Relay 2 is configured for pre-warning alarms before full shutdown occurs."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200">
              <h3 className="text-base font-bold text-gray-950 mb-3 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#ff3131]" />
                <span>{lang === "hi" ? "रिले 1 : ब्रेकर शंट ट्रिप आउटपुट" : "Relay 1: Breaker Shunt / UV Release"}</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {lang === "hi"
                  ? "6A 250V AC रेटेड सिल्वर-अलॉय कांटेक्ट्स। जैसे ही लीकेज निर्धारित सीमा को पार करती है, यह तुरंत सर्किट ब्रेकर को ट्रिप कर सप्लाई काट देता है।"
                  : "Dedicated heavy-duty contact routes directly to MCCB/ACB shunt trip coil to instantly isolate the faulty branch feeder."}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200">
              <h3 className="text-base font-bold text-gray-950 mb-3 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#ff3131]" />
                <span>{lang === "hi" ? "रिले 2 : अर्ली वार्निंग अलार्म" : "Relay 2: Pre-Warning Alarm & Telemetry"}</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {lang === "hi"
                  ? "ट्रिप से पहले 50% या 70% लीकेज करंट पर अलार्म सक्रिय करने हेतु कॉन्फ़िगर करने योग्य, जिससे अवांछित ब्लैकआउट से बचा जा सके।"
                  : "Selectable pre-alarm threshold (e.g. 50% of trip setpoint) alerts plant engineers to degrading cable insulation before blackout occurs."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Modbus Register Matrix Table */}
      <section id="protocol-matrix" className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3131] mb-2 block">
              {lang === "hi" ? "रजिस्टर मैप" : "MODBUS RTU REGISTER SPECIFICATION"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-950 tracking-tight">
              {lang === "hi"
                ? "मोडबस RTU रजिस्टर मैपिंग तालिका"
                : "Standard Modbus Register Telemetry Map"}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {lang === "hi"
                ? "किसी भी प्रमुख पीएलसी (Siemens, Schneider, Rockwell, Mitsubishi) के साथ तत्काल प्लग-एंड-प्ले एकीकरण।"
                : "Plug-and-play compatibility with all major industrial PLCs and SCADA suites."}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-950 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-4 px-5">{lang === "hi" ? "रजिस्टर पता" : "Register"}</th>
                  <th className="py-4 px-5">{lang === "hi" ? "पैरामीटर" : "Parameter"}</th>
                  <th className="py-4 px-5">{lang === "hi" ? "डेटा प्रारूप" : "Data Format"}</th>
                  <th className="py-4 px-5">{lang === "hi" ? "एक्सेस मोड" : "Access"}</th>
                  <th className="py-4 px-5 text-[#ff3131]">{lang === "hi" ? "विवरण" : "Engineering Description"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {MODBUS_REGISTERS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-5 font-mono font-bold text-red-600">{row.reg}</td>
                    <td className="py-4 px-5 font-semibold text-gray-900">{row.param}</td>
                    <td className="py-4 px-5 text-gray-600 font-mono text-xs">{row.format}</td>
                    <td className="py-4 px-5 text-gray-700 font-mono text-xs">{row.access}</td>
                    <td className="py-4 px-5 text-gray-600">{row.desc}</td>
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
                  ? "SCADA इंटीग्रेशन एवं पीएलसी रजिस्टर गाइड प्राप्त करें"
                  : "Request SCADA Register Map & PLC Sample Logic"}
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                {lang === "hi"
                  ? "हमारे ऑटोमेशन इंजीनियर्स आपकी मौजूदा प्रणाली के लिए सीमेंस/श्नाइडर पीएलसी फंक्शन ब्लॉक्स और वायरिंग गाइड प्रदान करेंगे।"
                  : "Our SCADA automation team will provide tested Siemens TIA Portal & Schneider EcoStruxure function blocks."}
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-green-50 border border-green-200 rounded-2xl text-center max-w-lg mx-auto">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-green-900 mb-2">
                  {lang === "hi" ? "अनुरोध प्राप्त हुआ!" : "Integration Request Dispatched"}
                </h3>
                <p className="text-xs sm:text-sm text-green-700">
                  {lang === "hi"
                    ? "हमारे SCADA इंजीनियर 24 व्यावसायिक घंटों के भीतर मोडबस मैपिंग फाइल एवं सैंपल कोड के साथ संपर्क करेंगे।"
                    : "A senior SCADA engineer will follow up with Modbus mapping files and integration code."}
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
                    placeholder="e.g. Vikram Singhal"
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
                    placeholder="name@automation.com"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#ff3131] focus:ring-1 focus:ring-[#ff3131]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    {lang === "hi" ? "कंपनी / प्लांट *" : "Company / Plant *"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. BHEL / Jindal Steel"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#ff3131] focus:ring-1 focus:ring-[#ff3131]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    {lang === "hi" ? "पीएलसी / कंट्रोल सिस्टम *" : "PLC / Control Platform *"}
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#ff3131] focus:ring-1 focus:ring-[#ff3131]"
                  >
                    <option value="">Select PLC / SCADA Platform</option>
                    <option value="siemens">Siemens S7-1200 / S7-1500 (TIA)</option>
                    <option value="schneider">Schneider Modicon / EcoStruxure</option>
                    <option value="rockwell">Rockwell ControlLogix / CompactLogix</option>
                    <option value="generic">Generic Modbus RTU / DCS</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    {lang === "hi" ? "एकीकरण आवश्यकताएं एवं नोट्स" : "SCADA Architecture & Telemetry Scope"}
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe baud rate requirements, number of monitored feeders, or desired custom alarm bits..."
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#ff3131] focus:ring-1 focus:ring-[#ff3131]"
                  />
                </div>
                <div className="sm:col-span-2 text-center pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#ff3131] hover:bg-[#d62828] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    {lang === "hi" ? "मोडबस मैप व सैम्पल कोड प्राप्त करें" : "Request Modbus Map & Sample Code"}
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

export default function DiagnosticsSystemIntegrationPage() {
  return (
    <LanguageProvider>
      <DiagnosticsSystemIntegrationContent />
    </LanguageProvider>
  );
}

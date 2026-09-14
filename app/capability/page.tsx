"use client";

import React, { useState } from "react";
import Link from "next/link";
import AramcoHeader from "../components/AramcoHeader";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";

function CapabilityHubContent() {
  const { lang } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const CAPABILITIES = [
    {
      id: "fail-safe-architecture",
      href: "/capability/fail-safe-architecture",
      tag: lang === "hi" ? "फेल-सेफ आर्किटेक्चर" : "FAIL-SAFE ARCHITECTURE",
      title:
        lang === "hi"
          ? "डिफ़ॉल्ट-टू-सेफ मैकेनिकल एवं लॉजिकल सुरक्षा आर्किटेक्चर"
          : "Default-to-Safe Mechanical & Signalling Interlock Architecture",
      desc:
        lang === "hi"
          ? "विद्युत विफलता, सिग्नल रुकावट या सेंसर त्रुटि की स्थिति में सिस्टम का पूर्व-निर्धारित सुरक्षित स्थिति में जाना सुनिश्चित करता है।"
          : "Engineered to guarantee an absolute safe resting state under total blackout, signal disruption, or sensor failure with SIL-3 certified logic.",
      image: "/images/crash_barrier_perimeter.jpg",
      metrics: [
        { label: lang === "hi" ? "फेल-सेफ स्टेट" : "Fail-Safe Default", val: "100%" },
        { label: lang === "hi" ? "मानक अनुपालन" : "Safety Compliance", val: "SIL-3" },
        { label: lang === "hi" ? "प्रतिक्रिया समय" : "Trip Reaction", val: "< 10ms" },
      ],
      highlights: [
        lang === "hi" ? "गुरुत्वाकर्षण ड्रॉप व काउंटरबैलेंस मेकैनिज्म" : "Gravity-Assisted Mechanical Counterbalance Drop",
        lang === "hi" ? "दोहरा ऑप्टिकल व इंडक्टिव लूप इंटरलॉकिंग" : "Dual-Channel Optical & Inductive Loop Interlocks",
        lang === "hi" ? "गैल्वेनिक आइसोलेशन युक्त 3.75 kV सिग्नलिंग इंटरफेस" : "3.75 kV Opto-Isolated Signalling Relays",
      ],
    },
    {
      id: "rugged-industrial-construction",
      href: "/capability/rugged-industrial-construction",
      tag: lang === "hi" ? "मजबूत औद्योगिक निर्माण" : "RUGGED INDUSTRIAL CONSTRUCTION",
      title:
        lang === "hi"
          ? "कठोरतम मौसम एवं औद्योगिक तनाव सहन करने वाला निर्माण"
          : "Heavy-Gauge Weatherproof & Extreme Thermal Hardening",
      desc:
        lang === "hi"
          ? "3.0mm कोल्ड-रोल्ड स्टील, फॉस्फेटिंग व 1000 घंटे साल्ट स्प्रे परीक्षण के साथ IP66 वेदरप्रूफ एनक्लोजर।"
          : "Heavy 3.0mm cold-rolled steel treated with zinc-phosphate anti-corrosion chemistry, IP66 gasketing, and -25°C to +70°C thermal protection.",
      image: "/images/power_distribution_eld.jpg",
      metrics: [
        { label: lang === "hi" ? "प्रोटेक्शन रेटिंग" : "Ingress Rating", val: "IP66" },
        { label: lang === "hi" ? "तापमान सीमा" : "Temperature", val: "-25°C to +70°C" },
        { label: lang === "hi" ? "स्टील मोटाई" : "Cabinet Gauge", val: "3.0mm CR" },
      ],
      highlights: [
        lang === "hi" ? "प्योर पॉलिएस्टर इलेक्ट्रोस्टैटिक पाउडर कोटिंग" : "Pure Polyester Electrostatic Powder Coating",
        lang === "hi" ? "एंटी-कंडेनसेशन थर्मोस्टेटिक हीटिंग एलिमेंट" : "Internal Thermostatic Anti-Condensation Elements",
        lang === "hi" ? "IEC 60068 कंपन एवं शॉक सहनशीलता" : "Heavy Shock & Vibration Isolation to IEC 60068",
      ],
    },
    {
      id: "diagnostics-system-integration",
      href: "/capability/diagnostics-system-integration",
      tag: lang === "hi" ? "डायग्नोस्टिक्स एवं एकीकरण" : "DIAGNOSTICS & SYSTEM INTEGRATION",
      title:
        lang === "hi"
          ? "रीयल-टाइम टेलीमेट्री, DSP ट्रू RMS एवं SCADA एकीकरण"
          : "Microcontroller True RMS Telemetry & SCADA Modbus Integration",
      desc:
        lang === "hi"
          ? "32-बिट माइक्रोप्रोसेसर द्वारा 15वें हार्मोनिक तक सटीक लीकेज मापन, 500 फॉल्ट मेमोरी एवं RS-485 टेलीमेट्री।"
          : "Advanced DSP architecture measuring True RMS current across noisy industrial environments, 500-event non-volatile logging, and RS-485 Modbus RTU integration.",
      image: "/images/eld_engineering_lab.jpg",
      metrics: [
        { label: lang === "hi" ? "प्रोटोकॉल" : "Fieldbus Protocol", val: "Modbus RTU" },
        { label: lang === "hi" ? "मापन" : "Sensing Engine", val: "True RMS DSP" },
        { label: lang === "hi" ? "इवेंट मेमोरी" : "Blackbox Memory", val: "500 Events" },
      ],
      highlights: [
        lang === "hi" ? "RS-485 2-वायर शील्डेड SCADA इंटरफेस" : "RS-485 2-Wire Shielded SCADA / PLC Interface",
        lang === "hi" ? "सटीक 4-अंकीय OLED/LED डिजिटल टेलीमेट्री" : "High-Precision 4-Digit OLED Telemetry Display",
        lang === "hi" ? "पोटेंशियल-फ्री डुअल फॉर्म सी रिले आउटपुट" : "Potential-Free Dual Form C Auxiliary Relays",
      ],
    },
  ];

  const CAPABILITY_MATRIX = [
    {
      discipline: lang === "hi" ? "मैकेनिकल विश्वसनीयता" : "Mechanical Reliability",
      spec: lang === "hi" ? "100% काउंटरबैलेंस व ग्रेविटी सेफ-ड्रॉप" : "100% Counterbalanced Gravity Drop",
      railway: "Compliant (RDSO Spec)",
      industrial: "Heavy Duty 24/7 Duty Cycle",
      failSafe: "SIL-3 Architecture",
    },
    {
      discipline: lang === "hi" ? "पर्यावरणीय सुरक्षा" : "Environmental Ingress",
      spec: lang === "hi" ? "IP66 डुअल सीमलेस EPDM गैसकेटिंग" : "IP66 Dual Seamless EPDM Gasketed",
      railway: "Dust & Jet Monsoon Proof",
      industrial: "Chemical & Splash Resistant",
      failSafe: "Corrosion Proof (>1000h Salt)",
    },
    {
      discipline: lang === "hi" ? "थर्मल टॉलरेंस" : "Operating Thermal Envelope",
      spec: lang === "hi" ? "-25°C से +70°C आंतरिक PTC हीटर सहित" : "-25°C to +70°C with PTC De-Humidifier",
      railway: "Sub-Zero Winter to High Desert Heat",
      industrial: "Enclosed Switchgear Panel Ambient",
      failSafe: "Thermal Trip Redundancy",
    },
    {
      discipline: lang === "hi" ? "सिस्टम टेलीमेट्री" : "Telemetry & Automation",
      spec: lang === "hi" ? "RS-485 Modbus RTU + 4-Digit LED" : "RS-485 Modbus RTU + Local LED Telemetry",
      railway: "Signalling Relay Interlocking",
      industrial: "SCADA / DCS Central Integration",
      failSafe: "Opto-Isolated 3.75 kV Inputs",
    },
    {
      discipline: lang === "hi" ? "सुरक्षा ट्रिप गति" : "Fault Clearance Response",
      spec: lang === "hi" ? "< 30ms से 5.0s समायोज्य विलंब" : "< 30ms Instantaneous to 5.0s Coordinated",
      railway: "Zero Signalling Hazard",
      industrial: "Cascaded Breaker Coordination",
      failSafe: "Fail-to-Ground Neutral Logic",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#ff3131] selection:text-white relative font-sans">
      {/* 1. Light Theme Header */}
      <AramcoHeader theme="light" />

      {/* 2. Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-[#f8f9fb] via-white to-white overflow-hidden pb-16 pt-28 sm:pt-36 border-b border-gray-100">
        {/* Subtle red accent glow */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-red-500/[0.04] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#ff3131]/[0.03] rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#ff3131_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 font-medium">
              <Link href="/" className="hover:text-[#ff3131] transition-colors">
                {lang === "hi" ? "होम" : "Home"}
              </Link>
              <span>/</span>
              <span className="text-[#ff3131] font-semibold">
                {lang === "hi" ? "इंजीनियरिंग एवं सुरक्षा क्षमताएं" : "Engineering & Safety Capabilities"}
              </span>
            </nav>

            {/* Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-xs font-semibold text-[#ff3131] tracking-wider uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-[#ff3131] animate-pulse" />
              <span>
                {lang === "hi"
                  ? "मिशन-क्रिटिकल इंजीनियरिंग क्षमताएं"
                  : "MISSION-CRITICAL CAPABILITY SUITE"}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-gray-950 leading-[1.12] mb-6">
              {lang === "hi" ? (
                <>
                  मिशन-क्रिटिकल अवसंरचना हेतु{" "}
                  <span className="text-[#ff3131]">इंजीनियरिंग एवं सुरक्षा</span>
                </>
              ) : (
                <>
                  Engineering & Safety Architecture for{" "}
                  <span className="text-[#ff3131]">Zero-Failure Operations.</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mb-8">
              {lang === "hi"
                ? "रेलवे लेवल क्रॉसिंग, हाई-वोल्टेज वितरण सबस्टेशन एवं भारी औद्योगिक संयंत्रों के लिए उच्च विश्वसनीयता, मजबूत धातु विज्ञान, और डिजिटल टेलीमेट्री से सुसज्जित प्रणाली।"
                : "Explore the core engineering disciplines underpinning our railway barriers and digital earth leakage detectors: guaranteed default-to-safe mechanics, IP66 physical hardening, and real-time SCADA telemetry."}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
              <div className="border-l-2 border-[#ff3131] pl-3">
                <div className="text-2xl sm:text-3xl font-bold text-gray-950">100%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                  {lang === "hi" ? "फेल-सेफ विश्वसनीयता" : "Fail-Safe Assured"}
                </div>
              </div>
              <div className="border-l-2 border-gray-300 pl-3">
                <div className="text-2xl sm:text-3xl font-bold text-gray-950">IP66</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                  {lang === "hi" ? "वेदरप्रूफ रेटिंग" : "Ingress Rating"}
                </div>
              </div>
              <div className="border-l-2 border-gray-300 pl-3">
                <div className="text-2xl sm:text-3xl font-bold text-gray-950">SIL-3</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                  {lang === "hi" ? "लॉजिक कम्पलायंस" : "Safety Integrity"}
                </div>
              </div>
              <div className="border-l-2 border-gray-300 pl-3">
                <div className="text-2xl sm:text-3xl font-bold text-gray-950">RS-485</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                  {lang === "hi" ? "SCADA टेलीमेट्री" : "Modbus RTU"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Core Capability Pillars (Interactive Cards) */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-[#ff3131] uppercase mb-3">
              {lang === "hi" ? "प्रमुख इंजीनियरिंग स्तंभ" : "THREE FOUNDATIONAL PILLARS"}
            </h2>
            <h3 className="text-2xl sm:text-4xl font-bold text-gray-950 tracking-tight">
              {lang === "hi"
                ? "गहन इंजीनियरिंग सिद्धांतों पर निर्मित विश्वसनीयता"
                : "Engineered from the Circuit Board to the Heavy Steel Enclosure"}
            </h3>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              {lang === "hi"
                ? "प्रत्येक तकनीक स्वतंत्र रूप से कठोरतम अंतरराष्ट्रीय मानकों और भारतीय रेलवे की परिचालन आवश्यकताओं के अनुरूप विकसित की गई है।"
                : "Select any capability domain below to view technical specifications, schematics, and engineering white papers."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                className="group flex flex-col bg-[#f8f9fa] rounded-2xl border border-gray-200/80 hover:border-red-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${cap.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/90 text-gray-900 shadow-sm">
                      {cap.tag}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-950 group-hover:text-[#ff3131] transition-colors mb-3 leading-snug">
                      {cap.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                      {cap.desc}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-gray-200">
                      {cap.highlights.map((h, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-gray-700">
                          <span className="text-[#ff3131] font-bold mt-0.5">✓</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics Row & CTA */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="grid grid-cols-3 gap-2 mb-5 text-center">
                      {cap.metrics.map((m, idx) => (
                        <div key={idx} className="bg-white py-2 px-1 rounded-lg border border-gray-200/60">
                          <div className="text-xs sm:text-sm font-bold text-gray-950">{m.val}</div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-tight truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={cap.href}
                      className="w-full py-2.5 px-4 rounded-xl bg-white group-hover:bg-[#ff3131] group-hover:text-white text-gray-900 border border-gray-200 group-hover:border-[#ff3131] text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center space-x-2 transition-all duration-200 shadow-sm"
                    >
                      <span>{lang === "hi" ? "विस्तृत विवरण देखें" : "Explore Capability"}</span>
                      <span className="text-sm font-bold transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Cross-Domain Engineering Comparison Matrix */}
      <section className="py-16 sm:py-24 bg-[#f8f9fb] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-[#ff3131] uppercase mb-2">
              {lang === "hi" ? "तकनीकी मैट्रिक्स" : "PERFORMANCE & COMPLIANCE MATRIX"}
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-950">
              {lang === "hi"
                ? "क्रॉस-डिसिप्लिनरी सुरक्षा एवं विश्वसनीयता विनिर्देश"
                : "Cross-Disciplinary Engineering & Safety Parameters"}
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              {lang === "hi"
                ? "हमारे सभी उत्पादों में शामिल सुरक्षा मानकों और फील्ड सत्यापन की व्यापक तुलना।"
                : "Benchmarked against Indian Railway (RDSO), IEC standards, and demanding heavy-industry environments."}
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-950 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-4 px-5">{lang === "hi" ? "इंजीनियरिंग डिसिप्लिन" : "Discipline"}</th>
                  <th className="py-4 px-5">{lang === "hi" ? "कोर स्पेसिफिकेशन" : "Core Specification"}</th>
                  <th className="py-4 px-5">{lang === "hi" ? "रेलवे क्रॉसिंग अनुप्रयोग" : "Railway Signalling"}</th>
                  <th className="py-4 px-5">{lang === "hi" ? "औद्योगिक पैनल उपयोग" : "Industrial Automation"}</th>
                  <th className="py-4 px-5 text-[#ff3131]">{lang === "hi" ? "फेल-सेफ गारंटी" : "Fail-Safe Assurance"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {CAPABILITY_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-5 font-semibold text-gray-900">{row.discipline}</td>
                    <td className="py-4 px-5 text-gray-700">{row.spec}</td>
                    <td className="py-4 px-5 text-gray-600">{row.railway}</td>
                    <td className="py-4 px-5 text-gray-600">{row.industrial}</td>
                    <td className="py-4 px-5 font-semibold text-[#ff3131]">{row.failSafe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Consultation & Technical Inquiries Form */}
      <section id="contact-engineering" className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f8f9fa] rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-md">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#ff3131] bg-red-50 px-3.5 py-1 rounded-full border border-red-200 mb-3">
                {lang === "hi" ? "इंजीनियरिंग कंसल्टेशन" : "DIRECT ENGINEERING CONSULTATION"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 tracking-tight">
                {lang === "hi"
                  ? "अपनी परियोजना हेतु तकनीकी विनिर्देश व गाइड प्राप्त करें"
                  : "Discuss Your Safety Architecture Requirements with Our Engineers"}
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                {lang === "hi"
                  ? "हमारे तकनीकी विशेषज्ञ आपकी परियोजना के लिए पूर्ण वायरिंग डायग्राम, कैपेबिलिटी डॉक्स एवं कस्टमाइज्ड समाधान प्रदान करते हैं।"
                  : "Submit your project requirements for custom fail-safe architecture, environmental ratings, or SCADA integration schematics."}
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-green-50 border border-green-200 rounded-2xl text-center max-w-lg mx-auto">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-green-900 mb-2">
                  {lang === "hi" ? "पूछताछ सफलतापूर्वक प्राप्त हुई!" : "Consultation Request Received!"}
                </h3>
                <p className="text-xs sm:text-sm text-green-700">
                  {lang === "hi"
                    ? "हमारे मुख्य सिस्टम इंजीनियर 1 कार्य दिवस के भीतर तकनीकी विनिर्देशों के साथ आपसे संपर्क करेंगे।"
                    : "Our senior systems engineer will review your inquiry and follow up within 24 business hours with detailed datasheets."}
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
                    placeholder="e.g. Rajesh Sharma"
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
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#ff3131] focus:ring-1 focus:ring-[#ff3131]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    {lang === "hi" ? "संस्था / कंपनी *" : "Company / Organization *"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Northern Railway / NTPC"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#ff3131] focus:ring-1 focus:ring-[#ff3131]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    {lang === "hi" ? "रुचि का क्षेत्र *" : "Discipline of Interest *"}
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#ff3131] focus:ring-1 focus:ring-[#ff3131]"
                  >
                    <option value="">Select Primary Architecture</option>
                    <option value="fail-safe">Fail-Safe Boom Architecture</option>
                    <option value="rugged-build">IP66 Heavy Enclosure Hardening</option>
                    <option value="diagnostics">True RMS DSP & SCADA Integration</option>
                    <option value="all">Comprehensive Turnkey Solution</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    {lang === "hi" ? "परियोजना आवश्यकताएं या विनिर्देश" : "Project Requirements & Technical Notes"}
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Detail your operating voltages, ambient conditions, or communication protocol requirements..."
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#ff3131] focus:ring-1 focus:ring-[#ff3131]"
                  />
                </div>
                <div className="sm:col-span-2 text-center pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#ff3131] hover:bg-[#d62828] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    {lang === "hi" ? "तकनीकी परामर्श अनुरोध भेजें" : "Submit Consultation Request"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 6. Newsletter */}
      <NewsletterSection />

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}

export default function CapabilityPage() {
  return (
    <LanguageProvider>
      <CapabilityHubContent />
    </LanguageProvider>
  );
}

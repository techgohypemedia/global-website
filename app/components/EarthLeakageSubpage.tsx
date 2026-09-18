"use client";

import React, { useState } from "react";
import Link from "next/link";
import AramcoHeader from "./AramcoHeader";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";

export interface EarthLeakageSubpageProps {
  slug: string;
  subCategoryTitleEn: string;
  subCategoryTitleHi: string;
  badgeEn: string;
  badgeHi: string;
  heroHeadlineEn: string;
  heroHeadlineHi: string;
  heroSubtitleEn: string;
  heroSubtitleHi: string;
  bannerImage: string;
  secondaryBannerImage: string;
  fieldBannerImage: string;
  stats: { value: string; labelEn: string; labelHi: string; subEn: string; subHi: string }[];
  deepDiveTitleEn: string;
  deepDiveTitleHi: string;
  deepDiveParasEn: string[];
  deepDiveParasHi: string[];
  features: { titleEn: string; titleHi: string; descEn: string; descHi: string; badge: string }[];
  specsTable: { parameterEn: string; parameterHi: string; valueEn: string; valueHi: string; standard: string }[];
  cbctSelectionTable: { cbctModel: string; windowDia: string; cableMax: string; primaryRated: string }[];
  relatedSublinks: { titleEn: string; titleHi: string; href: string; tag: string }[];
}

function EarthLeakageContent({ data }: { data: EarthLeakageSubpageProps }) {
  const { lang } = useLanguage();
  
  // Interactive Oscilloscope State
  const [selectedWaveform, setSelectedWaveform] = useState<"clean" | "vfd_distorted" | "fault_trip">("vfd_distorted");

  // Interactive Switchboard Sizing Assistant State
  const [feederCurrent, setFeederCurrent] = useState<"125A" | "250A" | "630A" | "1600A">("250A");

  // Recommendations calculated live
  const recommendedCBCT = feederCurrent === "125A" ? "CBCT-35 (35mm)" : feederCurrent === "250A" ? "CBCT-70 (70mm)" : feederCurrent === "630A" ? "CBCT-120 (120mm)" : "CBCT-210 (210mm Rectangular)";
  const recommendedSensitivity = feederCurrent === "125A" ? "30mA - 100mA" : feederCurrent === "250A" ? "100mA - 300mA" : "300mA - 1.0A";
  const recommendedDelay = feederCurrent === "125A" ? "Instantaneous (0.02s)" : feederCurrent === "250A" ? "0.10s (Discriminated)" : "0.50s (Main Incomer)";

  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#ff3131] selection:text-white relative font-sans">
      {/* 1. Global Navigation Header */}
      <AramcoHeader />

      {/* 
        =======================================================================
        HERO SECTION: MATCHING HOMEPAGE CINEMATIC FULL-BLEED HERO
        =======================================================================
      */}
      <section className="relative min-h-[560px] lg:min-h-[640px] pt-32 sm:pt-40 pb-16 sm:pb-20 overflow-hidden bg-neutral-950 flex flex-col justify-between">
        {/* Full-bleed Background Image with smooth zoom & overlays */}
        <div className="absolute inset-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.bannerImage}
            alt={data.subCategoryTitleEn}
            className="w-full h-full object-cover opacity-35 object-center scale-105"
          />
        </div>

        {/* Ambient Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none" />

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
          <div className="max-w-3xl">
            {/* Category Breadcrumb Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-4">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>{lang === "hi" ? data.badgeHi : data.badgeEn}</span>
              <span className="text-white/40">•</span>
              <span className="text-gray-300">{lang === "hi" ? data.subCategoryTitleHi : data.subCategoryTitleEn}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight mb-5 font-sans">
              {lang === "hi" ? data.heroHeadlineHi : data.heroHeadlineEn}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-8 max-w-2xl">
              {lang === "hi" ? data.heroSubtitleHi : data.heroSubtitleEn}
            </p>

            {/* CTA Toolbar */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#oscilloscope-lab"
                className="px-7 py-3.5 bg-[#ff3131] hover:bg-[#e02626] text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-lg hover:shadow-[#ff3131]/30 flex items-center space-x-2 group hover:-translate-y-0.5"
              >
                <span>{lang === "hi" ? "हार्मोनिक ऑसिलोस्कोप चलाएं" : "View Harmonic Oscilloscope"}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#cbct-matrix"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white text-white text-xs sm:text-sm font-medium tracking-wide backdrop-blur-sm transition-all flex items-center space-x-2 hover:-translate-y-0.5"
              >
                <span className="text-[11px] font-bold text-[#ff3131]">CBCT</span>
                <span>{lang === "hi" ? "CBCT ट्रांसफॉर्मर टेबल" : "CBCT Transformer Sizing"}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Key Metrics Strip (matching AtAGlance on homepage) */}
        <div className="relative z-10 w-full border-t border-white/15 bg-black/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.stats.map((st, i) => (
                <div key={i} className="flex flex-col border-l border-white/15 pl-4 sm:pl-6 first:border-l-0">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight font-sans">
                    {st.value}
                  </div>
                  <div className="text-xs font-medium text-gray-300 uppercase tracking-wider mt-1">
                    {lang === "hi" ? st.labelHi : st.labelEn}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    {lang === "hi" ? st.subHi : st.subEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 1: ELECTRICAL INSULATION & DSP HIGHLIGHTS (Clean Homepage Style)
        =======================================================================
      */}
      <section className="w-full bg-white text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>{lang === "hi" ? "विद्युत सुरक्षा मानक" : "ELECTRICAL PROTECTION STANDARDS"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#1e293b] font-sans mb-5">
              {lang === "hi" ? data.deepDiveTitleHi : data.deepDiveTitleEn}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              {lang === "hi"
                ? "विद्युत आग और अवांछित शटडाउन से पूर्ण सुरक्षा। 32-बिट डीएसपी एल्गोरिद्म और 3.5kV गैल्वेनिक आइसोलेशन के साथ निरंतर निगरानी।"
                : "Prevent electrical fire hazards and catastrophic transformer burnout with continuous true mathematical RMS residual leakage analysis."}
            </p>
            <p className="text-sm sm:text-base font-medium text-[#ff3131]">
              {lang === "hi" ? "IEC 60947-2 Annex M प्रमाणित शून्य-फॉल्स-ट्रिप सुरक्षा।" : "IEC 60947-2 Annex M Certified Zero-Nuisance-Trip Protection."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Deep Dive Text & Feature Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                {(lang === "hi" ? data.deepDiveParasHi : data.deepDiveParasEn).map((p, idx) => (
                  <div key={idx} className="p-5 sm:p-6 bg-[#f8f9fa] border-l-2 border-[#ff3131] text-gray-700 text-sm sm:text-base leading-relaxed">
                    {p}
                  </div>
                ))}
              </div>

              {/* 3 Features Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {data.features.map((f, i) => (
                  <div
                    key={i}
                    className="p-5 bg-[#f8f9fa] border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#ff3131]/60 transition-all duration-300"
                  >
                    <span className="inline-block px-2 py-0.5 bg-red-50 text-[#ff3131] border border-red-100 text-[10px] font-semibold uppercase tracking-wider mb-3">
                      {f.badge}
                    </span>
                    <h4 className="text-sm font-semibold text-[#1e293b] mb-2 font-sans">
                      {lang === "hi" ? f.titleHi : f.titleEn}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {lang === "hi" ? f.descHi : f.descEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Visual Schematic Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#f8f9fa] border border-gray-200/90 shadow-md p-6 sm:p-7 hover:border-gray-300 transition-all">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-xs font-semibold text-[#1e293b] tracking-wider uppercase font-sans">
                    {lang === "hi" ? "इंसुलेशन तकनीक" : "Insulation Monitoring"}
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 bg-red-50 text-[#ff3131] font-medium border border-red-200">
                    IEC 60947-2
                  </span>
                </div>
                
                <div className="relative my-4 h-52 overflow-hidden border border-gray-200 bg-neutral-900 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={data.secondaryBannerImage}
                    alt="ELD Mechanism View"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>

                <div className="divide-y divide-gray-200 text-xs sm:text-sm">
                  <div className="flex justify-between py-3">
                    <span className="text-gray-500 font-medium">Harmonic Rejection:</span>
                    <span className="text-[#ff3131] font-semibold">Up to 31st Harmonic</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-500 font-medium">Galvanic Isolation:</span>
                    <span className="text-gray-900 font-medium">3.5 kV Continuous</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-500 font-medium">Sampling Rate:</span>
                    <span className="text-gray-900 font-medium">3.2 kHz True RMS</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">SCADA & Modbus RTU</span>
                  <a
                    href="#spec-drawer"
                    className="text-xs font-semibold text-[#ff3131] hover:text-[#e02626] transition-colors flex items-center gap-1"
                  >
                    <span>View Docs</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 2: HARMONIC OSCILLOSCOPE & DSP FILTER LAB (Workstation Style)
        =======================================================================
      */}
      <section id="oscilloscope-lab" className="w-full bg-[#f8f9fa] text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>{lang === "hi" ? "डीएसपी प्रयोगशाला" : "DSP HARMONIC FILTER LAB"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#1e293b] font-sans mb-5">
              {lang === "hi" ? "ट्रू RMS बनाम पारंपरिक एवरेज सेंसिंग विश्लेषण" : "True RMS Computation Under Distorted Inverter Loads"}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              {lang === "hi"
                ? "देखें कि कैसे 32-बिट डीएसपी एल्गोरिद्म VFD और मोटर इन्वर्टर नॉइज़ को फिल्टर करके फॉल्स ट्रिपिंग को पूरी तरह समाप्त करता है।"
                : "Select different load environments to visualize how our 32-bit DSP engine eliminates nuisance tripping from high-frequency PWM switching."}
            </p>
            <p className="text-sm sm:text-base font-medium text-[#ff3131]">
              {lang === "hi" ? "रीयल-टाइम 3.2 kHz सैंपलिंग और 31वें हार्मोनिक रिजेक्शन।" : "Live 3.2 kHz DSP harmonic filter comparison."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Interactive Waveform Selector */}
            <div className="lg:col-span-5 space-y-3.5">
              {[
                {
                  id: "clean",
                  titleEn: "1. Clean 50Hz Fundamental Sine Wave",
                  titleHi: "1. सामान्य 50Hz शुद्ध साइन वेव",
                  descEn: "Standard resistive load with zero harmonic distortion. True RMS and average relays match identically.",
                  descHi: "शून्य हार्मोनिक विकृति। ट्रू RMS और पारंपरिक रिले समान गणना करते हैं।",
                  tag: "THD < 1%"
                },
                {
                  id: "vfd_distorted",
                  titleEn: "2. Inverter / VFD PWM Noise (31st Harmonic)",
                  titleHi: "2. वीएफडी मोटर इन्वर्टर हार्मोनिक नॉइज़",
                  descEn: "Heavy high-frequency switching spikes. Conventional relays false-trip; GLOBAL DSP extracts true ohmic leakage.",
                  descHi: "पारंपरिक रिले गलत ट्रिप होते हैं; ग्लोबल डीएसपी केवल वास्तविक लीकेज मापता है।",
                  tag: "THD > 45%"
                },
                {
                  id: "fault_trip",
                  titleEn: "3. Genuine Phase-to-Ground Fault Transient",
                  titleHi: "3. वास्तविक अर्थ फॉल्ट ट्रिप स्थिति",
                  descEn: "Rapid current excursion triggering instantaneous breaker shunt-trip output in < 20 milliseconds.",
                  descHi: "त्वरित करंट वृद्धि जो 20 मिलीसेकंड के भीतर सर्किट ब्रेकर को ट्रिप कर देती है।",
                  tag: "TRIP < 20ms"
                }
              ].map((w) => (
                <button
                  key={w.id}
                  onClick={() => setSelectedWaveform(w.id as any)}
                  className={`w-full p-5 text-left border transition-all cursor-pointer shadow-sm ${
                    selectedWaveform === w.id
                      ? "bg-red-50/70 border-[#ff3131] shadow-md"
                      : "bg-white border-gray-200 hover:border-gray-300 hover:bg-[#f8f9fa]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs sm:text-sm font-semibold text-[#1e293b] font-sans">
                      {lang === "hi" ? w.titleHi : w.titleEn}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 bg-white border border-gray-200 text-[#ff3131]">
                      {w.tag}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {lang === "hi" ? w.descHi : w.descEn}
                  </p>
                </button>
              ))}
            </div>

            {/* Right Oscilloscope Visualization Box */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-gray-200 shadow-md">
              <div className="flex justify-between items-center pb-4 border-b border-gray-100 mb-6 text-xs font-sans">
                <span className="text-[#ff3131] font-semibold uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ff3131] animate-pulse" />
                  <span>DSP SAMPLING RATE: 3.2 kHz</span>
                </span>
                <span className="text-gray-500 font-medium">CHANNEL 1: RESIDUAL CURRENT (IΔ)</span>
              </div>

              {/* Graphical Waveform Display Canvas */}
              <div className="relative h-48 w-full bg-neutral-950 border border-gray-800 flex items-center justify-center overflow-hidden">
                {/* Simulated Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
                
                {/* Dynamic Wave Representation */}
                <div className="relative z-10 text-center px-4">
                  {selectedWaveform === "clean" && (
                    <div>
                      <div className="text-emerald-400 text-sm font-medium tracking-wide">PURE 50.0 Hz FUNDAMENTAL SINE WAVE</div>
                      <div className="text-xs text-gray-400 mt-1">Calculated Energy: 0.038A RMS • Zero Nuisance Tripping</div>
                    </div>
                  )}
                  {selectedWaveform === "vfd_distorted" && (
                    <div>
                      <div className="text-amber-400 text-sm font-medium tracking-wide">DISTORTED PWM CARRIER ATTENUATED (&gt;400Hz)</div>
                      <div className="text-xs text-gray-400 mt-1">32-Bit Low-Pass Filter: ACTIVE • False Tripping Suppressed</div>
                    </div>
                  )}
                  {selectedWaveform === "fault_trip" && (
                    <div>
                      <div className="text-[#ff3131] text-sm font-medium tracking-wide">GROUND FAULT TRANSIENT DETECTED</div>
                      <div className="text-xs text-red-400 mt-1">Fault Current: 1.42A Peak • Shunt Relay Tripped in 18ms</div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center text-xs">
                <div className="p-3.5 bg-[#f8f9fa] border border-gray-200">
                  <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">CREST FACTOR</div>
                  <div className="text-gray-900 font-semibold mt-1">Up to 5.0</div>
                </div>
                <div className="p-3.5 bg-[#f8f9fa] border border-gray-200">
                  <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">HARMONIC CUTOFF</div>
                  <div className="text-[#ff3131] font-semibold mt-1">31st Harmonic</div>
                </div>
                <div className="p-3.5 bg-[#f8f9fa] border border-gray-200">
                  <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">ISOLATION RATING</div>
                  <div className="text-gray-900 font-semibold mt-1">3.5 kV Galvanic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 3: CBCT SELECTION MATRIX (Clean Table Style)
        =======================================================================
      */}
      <section id="cbct-matrix" className="w-full bg-white text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>{lang === "hi" ? "ट्रांसफॉर्मर चयन" : "CBCT SELECTION"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#1e293b] font-sans mb-5">
              {lang === "hi" ? "केबल आकार एवं CBCT मॉडल चयन तालिका" : "CBCT Current Transformer Sizing Matrix"}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              {lang === "hi"
                ? "सभी फेज कंडक्टरों और न्यूट्रल को CBCT विंडो के माध्यम से गुजारें (अर्थिंग वायर कभी अंदर से न गुजारें)।"
                : "Pass all 3 phase conductors and neutral through the CBCT window. Protective Earth must never pass through."}
            </p>
          </div>

          <div className="bg-white border border-gray-200 shadow-md overflow-hidden">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#1e293b] text-white text-xs uppercase tracking-wider font-medium">
                <tr>
                  <th className="p-4 sm:p-5">CBCT Model</th>
                  <th className="p-4 sm:p-5">Window Diameter</th>
                  <th className="p-4 sm:p-5">Max Armoured Cable Size</th>
                  <th className="p-4 sm:p-5">Rated Primary Current</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {data.cbctSelectionTable.map((cb, idx) => (
                  <tr key={idx} className="hover:bg-red-50/40 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-[#ff3131]">{cb.cbctModel}</td>
                    <td className="p-4 sm:p-5 font-medium text-[#1e293b]">{cb.windowDia}</td>
                    <td className="p-4 sm:p-5 text-gray-600">{cb.cableMax}</td>
                    <td className="p-4 sm:p-5 font-semibold text-gray-900">{cb.primaryRated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 4: HARDWARE IMAGE GALLERY (DiscoverAramco Style)
        =======================================================================
      */}
      <section className="w-full bg-[#f8f9fa] text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>{lang === "hi" ? "फैक्ट्री परीक्षण" : "TESTING & DEPLOYMENT"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#1e293b] font-sans mb-5">
              {lang === "hi" ? "फैक्ट्री परीक्षण एवं स्विचगियर स्थापना" : "Testing Laboratory & Switchboard Integration"}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              {lang === "hi"
                ? "प्रत्येक यूनिट का 100% ट्रू RMS कैलिब्रेशन और उच्च वोल्टेज आइसोलेशन परीक्षण किया जाता है।"
                : "Every unit undergoes 100% factory DSP calibration and 3.5kV dielectric breakdown verification before dispatch."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "DSP Harmonic Calibration Bench",
                category: "100% FACTORY CALIBRATED",
                image: "/images/eld_engineering_lab.jpg",
                desc: "Precision injection testing across DC to 2.4 kHz distorted harmonic frequency bands."
              },
              {
                title: "415V Main Incomer Feeder Panel",
                category: "INDUSTRIAL SWITCHGEAR",
                image: "/images/power_distribution_eld.jpg",
                desc: "Main switchboard continuous ground fault protection with instant breaker trip shunt."
              },
              {
                title: "Railway Signalling Power Substation",
                category: "MISSION-CRITICAL INFRA",
                image: "/images/earth_leakage_detector_original.png",
                desc: "Isolated neutral and 110V DC railway signalling feeder fault isolation."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative h-[380px] sm:h-[440px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between p-6 sm:p-7 text-white border border-gray-200 hover:border-[#ff3131]/60 bg-neutral-900"
              >
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-400 pointer-events-none" />

                {/* Top Category Badge */}
                <div className="relative z-10">
                  <span className="inline-block text-[11px] font-semibold tracking-widest text-[#ff3131] uppercase bg-black/60 px-2.5 py-1 backdrop-blur-sm border border-white/10">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Title & Description */}
                <div className="relative z-10 mt-auto">
                  <h3 className="text-lg sm:text-xl font-medium leading-snug text-white font-sans mb-2 drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed font-light">
                    {item.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[#ff3131]">
                    <span>Calibration Verified</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 5: SPECIFICATION REPOSITORY & DESK (Matching FinancialReports & CaseStudies)
        =======================================================================
      */}
      <section id="spec-drawer" className="w-full bg-white text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Column: Direct Downloads */}
            <div className="lg:col-span-7 bg-[#f8f9fa] border border-gray-200 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-[#ff3131] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-[#ff3131]" />
                  <span>{lang === "hi" ? "सीधा इंजीनियरिंग एक्सेस" : "DIRECT SPECIFICATION REPOSITORY"}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-normal text-[#1e293b] font-sans mt-2">
                  {lang === "hi"
                    ? `${data.subCategoryTitleHi} ब्लूप्रिंट एवं दस्तावेज`
                    : `Download ${data.subCategoryTitleEn} Engineering Pack`}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  {lang === "hi"
                    ? "तार वायरिंग आरेख, मोडबस रजिस्टर मैप और IEC अनुरूपता प्रमाणपत्र तुरंत प्राप्त करें।"
                    : "Instant access to switchboard cutouts, wiring schematics, Modbus RTU register mapping, and IEC test certificates."}
                </p>

                {/* Download Action Chips matching FinancialReports cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  {[
                    { id: "pdf", label: "Datasheet (PDF)", size: "2.8 MB", ext: "PDF" },
                    { id: "modbus", label: "Modbus Map", size: "1.1 MB", ext: "XLS" },
                    { id: "step", label: "DIN Rail CAD", size: "9.4 MB", ext: "STEP" }
                  ].map((doc) => (
                    <button
                      key={doc.id}
                      className="p-4 bg-white hover:bg-red-50/40 border border-gray-200 hover:border-[#ff3131]/60 text-left transition-all flex flex-col justify-between cursor-pointer group shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold text-[#ff3131] bg-red-50 px-2 py-0.5 border border-red-200">
                          {doc.ext}
                        </span>
                        <span className="text-xs text-gray-400 group-hover:text-[#ff3131]">↓</span>
                      </div>
                      <div className="mt-3">
                        <div className="text-xs font-semibold text-[#1e293b] group-hover:text-[#ff3131]">
                          {doc.label}
                        </div>
                        <div className="text-[11px] text-gray-400 mt-0.5">{doc.size}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Direct Electrical Hotline Card */}
            <div className="lg:col-span-5 bg-[#1e293b] text-white p-8 sm:p-10 shadow-xl flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-semibold text-[#ff3131] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-5 h-[2px] bg-[#ff3131]" />
                  <span>{lang === "hi" ? "सीधा तकनीकी सहायता" : "DEDICATED ELECTRICAL DESK"}</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-light text-white font-sans mt-2">
                  {lang === "hi" ? "विद्युत सुरक्षा एप्लीकेशन हॉटलाइन" : "Electrical Systems Engineering Desk"}
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed font-light">
                  {lang === "hi"
                    ? "CBCT आकार निर्धारण और वीएफडी हार्मोनिक फिल्टर पर हमारे वरिष्ठ इलेक्ट्रिकल इंजीनियर से सीधे बात करें।"
                    : "Direct consultation on CBCT transformer sizing, harmonic mitigation, and trip coordination with Senior Protection Leads."}
                </p>

                <div className="mt-8 space-y-3">
                  <a
                    href="tel:+911149887700"
                    className="w-full py-3.5 px-4 bg-[#ff3131] hover:bg-[#e02626] text-white text-xs sm:text-sm font-medium flex items-center justify-between transition-all shadow-lg hover:shadow-[#ff3131]/25"
                  >
                    <span>TEL: +91 11 4988 7700</span>
                    <span className="text-[10px] bg-black/20 px-2 py-0.5 font-semibold uppercase">NEW DELHI HQ</span>
                  </a>
                  <a
                    href="mailto:electrical.protection@global-safety.com"
                    className="w-full py-3.5 px-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-medium flex items-center justify-between transition-all"
                  >
                    <span>EMAIL: electrical.protection@global-safety.com</span>
                    <span className="text-[10px] text-gray-300 font-semibold uppercase">DIRECT DESK</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 6: RELATED MODULES (Matching DiscoverAramco Cards)
        =======================================================================
      */}
      {data.relatedSublinks && data.relatedSublinks.length > 0 && (
        <section className="w-full bg-[#f8f9fa] text-gray-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs font-semibold text-[#ff3131] uppercase tracking-widest flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#ff3131]" />
                <span>{lang === "hi" ? "संबंधित उत्पाद एवं तकनीकें" : "Explore Related Earth Leakage Modules"}</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.relatedSublinks.map((sub, i) => (
                <Link
                  key={i}
                  href={sub.href}
                  className="p-6 bg-white hover:bg-red-50/30 border border-gray-200 hover:border-[#ff3131]/60 shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-[#ff3131] uppercase tracking-wider">{sub.tag}</span>
                    <div className="text-sm font-semibold text-[#1e293b] group-hover:text-[#ff3131] mt-1 font-sans">
                      {lang === "hi" ? sub.titleHi : sub.titleEn}
                    </div>
                  </div>
                  <span className="text-gray-400 group-hover:text-[#ff3131] transition-transform group-hover:translate-x-1 text-sm font-medium">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter and Official Footer */}
      <NewsletterSection />
      <Footer />
    </main>
  );
}

export default function EarthLeakageSubpage({ data }: { data: EarthLeakageSubpageProps }) {
  return (
    <LanguageProvider>
      <EarthLeakageContent data={data} />
    </LanguageProvider>
  );
}

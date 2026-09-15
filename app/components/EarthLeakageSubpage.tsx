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
  const [panelVoltage, setPanelVoltage] = useState<"415V" | "690V" | "110V_DC">("415V");
  const [feederCurrent, setFeederCurrent] = useState<"125A" | "250A" | "630A" | "1600A">("250A");
  const [ambientHarmonics, setAmbientHarmonics] = useState<"low" | "heavy_vfd">("heavy_vfd");
  const [schematicRequested, setSchematicRequested] = useState(false);

  // Recommendations calculated live
  const recommendedCBCT = feederCurrent === "125A" ? "CBCT-35 (35mm)" : feederCurrent === "250A" ? "CBCT-70 (70mm)" : feederCurrent === "630A" ? "CBCT-120 (120mm)" : "CBCT-210 (210mm Rectangular)";
  const recommendedSensitivity = feederCurrent === "125A" ? "30mA - 100mA" : feederCurrent === "250A" ? "100mA - 300mA" : "300mA - 1.0A";
  const recommendedDelay = feederCurrent === "125A" ? "Instantaneous (0.02s)" : feederCurrent === "250A" ? "0.10s (Discriminated)" : "0.50s (Main Incomer)";

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 font-sans selection:bg-[#0284c7] selection:text-white">
      {/* 1. Global Navigation */}
      <AramcoHeader />

      {/* 
        =======================================================================
        HERO SECTION: DIGITAL INSTRUMENTATION & OLED HUD METERS
        =======================================================================
      */}
      <section className="relative w-full pt-28 sm:pt-36 pb-16 sm:pb-20 bg-gradient-to-b from-slate-100 via-[#f8fafc] to-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs font-medium text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              {lang === "hi" ? "होम" : "Home"}
            </Link>
            <span>/</span>
            <Link href="/products/earth-leakage" className="hover:text-emerald-600 transition-colors">
              {lang === "hi" ? "डिजिटल अर्थ लीकेज रिले" : "Digital Earth Leakage Relay"}
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold truncate max-w-[220px] sm:max-w-none">
              {lang === "hi" ? data.subCategoryTitleHi : data.subCategoryTitleEn}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="text-xs sm:text-sm font-bold text-emerald-700 tracking-wider uppercase font-mono mb-3">
                {lang === "hi" ? data.badgeHi : data.badgeEn}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.2] mb-5">
                {lang === "hi" ? data.heroHeadlineHi : data.heroHeadlineEn}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
                {lang === "hi" ? data.heroSubtitleHi : data.heroSubtitleEn}
              </p>

              {/* Action Toolbar */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#oscilloscope-lab"
                  className="px-6 py-3 rounded-xl bg-[#059669] hover:bg-[#047857] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md shadow-emerald-600/20 hover:shadow-lg flex items-center space-x-2"
                >
                  <span>{lang === "hi" ? "हार्मोनिक ऑसिलोस्कोप चलाएं" : "View Harmonic Oscilloscope"}</span>
                  <span className="text-xs font-mono">→</span>
                </a>
                <a
                  href="#cbct-matrix"
                  className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm flex items-center space-x-2"
                >
                  <span className="text-[11px] font-mono font-bold text-emerald-600">CBCT</span>
                  <span>{lang === "hi" ? "CBCT ट्रांसफॉर्मर टेबल" : "CBCT Transformer Sizing"}</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden bg-white p-2 shadow-lg border border-slate-200">
                <div className="relative h-72 sm:h-88 md:h-96 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={data.bannerImage}
                    alt={data.subCategoryTitleEn}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 4 Stat Metrics */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {data.stats.map((st, i) => (
              <div key={i} className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-300 transition-all">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600 font-mono tracking-tight">
                  {st.value}
                </div>
                <div className="text-xs font-bold text-slate-900 mt-1">
                  {lang === "hi" ? st.labelHi : st.labelEn}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {lang === "hi" ? st.subHi : st.subEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        BANNER 1 (~80% WIDTH): ELECTRICAL INSULATION SPOTLIGHT
        =======================================================================
      */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 my-12 sm:my-16">
        <div className="bg-gradient-to-r from-emerald-50 via-slate-50 to-white border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider font-mono">
                <span>{lang === "hi" ? "इंसुलेशन सुरक्षा मानक" : "INSULATION PROTECTION STANDARD"}</span>
                <span>•</span>
                <span>IEC 60947-2 ANNEX M</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                {lang === "hi" 
                  ? `${data.subCategoryTitleHi} - रीयल-टाइम विद्युत सुरक्षा`
                  : `${data.subCategoryTitleEn} Active Network Protection`}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {lang === "hi"
                  ? "विद्युत आग और अवांछित शटडाउन से पूर्ण सुरक्षा। 32-बिट डीएसपी एल्गोरिद्म और 3.5kV गैल्वेनिक आइसोलेशन के साथ निरंतर निगरानी।"
                  : "Prevent electrical fire hazards and catastrophic transformer burnout with continuous true mathematical RMS residual leakage analysis."}
              </p>
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href="#cbct-matrix"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wide transition-all shadow-sm flex items-center space-x-2"
                >
                  <span>{lang === "hi" ? "CBCT ट्रांसफॉर्मर तालिका देखें" : "View CBCT Sizing Matrix"}</span>
                  <span>→</span>
                </a>
                <a
                  href="#spec-drawer"
                  className="text-xs font-semibold text-slate-700 hover:text-emerald-700 transition-colors"
                >
                  {lang === "hi" ? "तकनीकी डेटाशीट डाउनलोड करें" : "Download ELD Technical Datasheet"}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="h-56 sm:h-64 w-full overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data.secondaryBannerImage}
                  alt={data.subCategoryTitleEn}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 2: HARMONIC OSCILLOSCOPE & DSP FILTER LAB
        =======================================================================
      */}
      <section id="oscilloscope-lab" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="px-3 py-1 rounded bg-sky-100 text-sky-800 border border-sky-200 text-xs font-bold uppercase tracking-wide">
              {lang === "hi" ? "हार्मोनिक वेवफॉर्म विश्लेषण" : "DIGITAL SIGNAL PROCESSING SIMULATOR"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              {lang === "hi" ? "ट्रू RMS बनाम पारंपरिक एवरेज सेंसिंग विश्लेषण" : "True RMS Computation Under Distorted Inverter Loads"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              {lang === "hi"
                ? "देखें कि कैसे 32-बिट डीएसपी एल्गोरिद्म VFD और मोटर इन्वर्टर नॉइज़ को फिल्टर करके फॉल्स ट्रिपिंग को पूरी तरह समाप्त करता है।"
                : "Select different load environments to visualize how our 32-bit DSP engine eliminates nuisance tripping from high-frequency PWM switching."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Interactive Waveform Selector */}
            <div className="lg:col-span-5 space-y-3">
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
                  className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedWaveform === w.id
                      ? "bg-sky-50 border-sky-600 shadow-sm text-slate-900"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-slate-900">
                      {lang === "hi" ? w.titleHi : w.titleEn}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700">
                      {w.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    {lang === "hi" ? w.descHi : w.descEn}
                  </p>
                </button>
              ))}
            </div>

            {/* Right Oscilloscope Visualization Box */}
            <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center pb-3 border-b border-slate-100 mb-4 text-xs">
                <span className="text-sky-700 flex items-center space-x-2 font-bold uppercase tracking-wide">
                  <span>DSP SAMPLING RATE: 3.2 kHz</span>
                </span>
                <span className="text-slate-500 font-medium">CHANNEL 1: RESIDUAL CURRENT (IΔ)</span>
              </div>

              {/* Graphical Waveform Display Canvas */}
              <div className="relative h-44 w-full bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center overflow-hidden">
                {/* Simulated Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                {/* Dynamic Wave Representation */}
                <div className="relative z-10 text-center px-4">
                  {selectedWaveform === "clean" && (
                    <div>
                      <div className="text-emerald-700 text-sm font-bold">PURE 50.0 Hz FUNDAMENTAL SINE WAVE</div>
                      <div className="text-[11px] text-slate-600 mt-1">Calculated Energy: 0.038A RMS • Zero Nuisance Tripping</div>
                    </div>
                  )}
                  {selectedWaveform === "vfd_distorted" && (
                    <div>
                      <div className="text-amber-700 text-sm font-bold">DISTORTED PWM CARRIER ATTENUATED (&gt;400Hz)</div>
                      <div className="text-[11px] text-slate-600 mt-1">32-Bit Low-Pass Filter: ACTIVE • False Tripping Suppressed</div>
                    </div>
                  )}
                  {selectedWaveform === "fault_trip" && (
                    <div>
                      <div className="text-rose-700 text-sm font-bold">GROUND FAULT TRANSIENT DETECTED</div>
                      <div className="text-[11px] text-rose-600 mt-1">Fault Current: 1.42A Peak • Shunt Relay Tripped in 18ms</div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-[10px] text-slate-500 font-medium uppercase">CREST FACTOR</div>
                  <div className="text-slate-900 font-bold mt-0.5">Up to 5.0</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-[10px] text-slate-500 font-medium uppercase">HARMONIC CUTOFF</div>
                  <div className="text-sky-700 font-bold mt-0.5">31st Harmonic</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-[10px] text-slate-500 font-medium uppercase">ISOLATION RATING</div>
                  <div className="text-emerald-700 font-bold mt-0.5">3.5 kV Galvanic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 3: CBCT SELECTION MATRIX & SIZING GUIDE
        =======================================================================
      */}
      <section id="cbct-matrix" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold font-mono text-emerald-600 uppercase tracking-widest">
              {lang === "hi" ? "ट्रांसफॉर्मर चयन गाइड" : "CORE BALANCE CT SELECTION"}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              {lang === "hi" ? "केबल आकार एवं CBCT मॉडल चयन तालिका" : "CBCT Current Transformer Sizing Matrix"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              {lang === "hi"
                ? "सभी फेज कंडक्टरों और न्यूट्रल को CBCT विंडो के माध्यम से गुजारें (अर्थिंग वायर कभी अंदर से न गुजारें)।"
                : "Pass all 3 phase conductors and neutral through the CBCT window. Protective Earth must never pass through."}
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                <tr>
                  <th className="p-4 sm:p-5">CBCT Model</th>
                  <th className="p-4 sm:p-5">Window Diameter</th>
                  <th className="p-4 sm:p-5">Max Armoured Cable Size</th>
                  <th className="p-4 sm:p-5">Rated Primary Current</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {data.cbctSelectionTable.map((cb, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-mono font-bold text-emerald-700">{cb.cbctModel}</td>
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">{cb.windowDia}</td>
                    <td className="p-4 sm:p-5 font-mono">{cb.cableMax}</td>
                    <td className="p-4 sm:p-5 font-mono text-slate-800 font-bold">{cb.primaryRated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        BANNER 2 (FULL-WIDTH): INDUSTRIAL SWITCHGEAR & SUBSTATION COMMISSIONING
        =======================================================================
      */}
      <section className="relative w-full my-12 sm:my-16 bg-slate-100 border-y border-slate-200 overflow-hidden">
        <div className="relative h-[280px] sm:h-[400px] lg:h-[480px] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.fieldBannerImage}
            alt={lang === "hi" ? `${data.subCategoryTitleHi} फील्ड कमीशनिंग` : `${data.subCategoryTitleEn} Industrial Switchboard Deployment`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white border-t border-slate-200 py-3.5 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600 font-mono">
            <div className="flex items-center space-x-2 font-bold text-slate-900">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              <span>{lang === "hi" ? `${data.subCategoryTitleHi} - 100% फैक्ट्री कैलिब्रेटेड` : `${data.subCategoryTitleEn} • 100% Factory Calibrated`}</span>
            </div>
            <div className="flex items-center space-x-4 text-[11px] text-slate-500">
              <span>TRUE RMS DSP 3.2 kHz</span>
              <span>•</span>
              <span>3.5 kV GALVANIC ISOLATION CERTIFIED</span>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 4: BESPOKE SWITCHBOARD SIZING ASSISTANT (NO REPEATED FORM)
        =======================================================================
      */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-slate-100 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="px-3 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-bold font-mono uppercase">
                {lang === "hi" ? "इंटेलिजेंट स्विचबोर्ड कॉन्फिगरेटर" : "AUTOMATED RELAY SIZING ASSISTANT"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                {lang === "hi" ? "अपने स्विचबोर्ड हेतु तुरंत रिले एवं CBCT साइजिंग प्राप्त करें" : "Configure Earth Leakage Relay for Your Switchboard Feeder"}
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Selectors */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {lang === "hi" ? "सिस्टम ऑपरेटिंग वोल्टेज:" : "Operating System Voltage:"}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(["415V", "690V", "110V_DC"] as const).map((v) => (
                      <button
                        key={v}
                        onClick={() => setPanelVoltage(v)}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                          panelVoltage === v
                            ? "bg-emerald-50 border-emerald-500 text-emerald-800"
                            : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {v.replace("_", " ")}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {lang === "hi" ? "फीडर करंट रेटिंग:" : "Feeder Primary Current Rating:"}
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {(["125A", "250A", "630A", "1600A"] as const).map((c) => (
                      <button
                        key={c}
                        onClick={() => setFeederCurrent(c)}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                          feederCurrent === c
                            ? "bg-emerald-50 border-emerald-500 text-emerald-800"
                            : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {lang === "hi" ? "हार्मोनिक इन्वर्टर वातावरण:" : "Harmonic Noise / VFD Inverters Present:"}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(["heavy_vfd", "low"] as const).map((h) => (
                      <button
                        key={h}
                        onClick={() => setAmbientHarmonics(h)}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                          ambientHarmonics === h
                            ? "bg-emerald-50 border-emerald-500 text-emerald-800"
                            : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {h === "heavy_vfd" ? "VFD / Inverter Heavy" : "Standard Linear Loads"}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Computed Sizing Result Card */}
              <div className="lg:col-span-6 bg-white text-slate-900 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Recommended Configuration
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                    IEC 60947 COMPLIANT
                  </span>
                </div>
                
                <div className="mt-4 divide-y divide-slate-100 text-xs text-slate-700">
                  <div className="flex justify-between py-2.5">
                    <span className="text-slate-500 font-medium">Matched CBCT Sensor:</span>
                    <span className="text-emerald-700 font-bold">{recommendedCBCT}</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-slate-500 font-medium">Trip Sensitivity (IΔn):</span>
                    <span className="text-slate-900 font-bold">{recommendedSensitivity}</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-slate-500 font-medium">Time-Graded Delay (Δt):</span>
                    <span className="text-sky-700 font-bold">{recommendedDelay}</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-slate-500 font-medium">Modbus Telemetry:</span>
                    <span className="text-slate-900 font-medium">RS-485 Modbus-RTU Included</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="mailto:industrial.eld@global-safety.com"
                    className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-medium"
                  >
                    industrial.eld@global-safety.com
                  </a>
                  <button
                    onClick={() => {
                      setSchematicRequested(true);
                      setTimeout(() => setSchematicRequested(false), 3000);
                    }}
                    className="px-4 py-2 rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold tracking-wide transition-all cursor-pointer shadow-sm"
                  >
                    {schematicRequested ? "Schematic Dispatched" : "Download Feeder DWG"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Related Sublinks Navigation */}
      {data.relatedSublinks && data.relatedSublinks.length > 0 && (
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              {lang === "hi" ? "संबंधित उत्पाद एवं तकनीकें" : "Explore Related Earth Leakage Modules"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.relatedSublinks.map((sub, i) => (
                <Link
                  key={i}
                  href={sub.href}
                  className="p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all flex items-center justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-emerald-700">{sub.tag}</span>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700">
                      {lang === "hi" ? sub.titleHi : sub.titleEn}
                    </div>
                  </div>
                  <span className="text-slate-400 group-hover:text-emerald-600 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter and Footer */}
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default function EarthLeakageSubpage({ data }: { data: EarthLeakageSubpageProps }) {
  return (
    <LanguageProvider>
      <EarthLeakageContent data={data} />
    </LanguageProvider>
  );
}

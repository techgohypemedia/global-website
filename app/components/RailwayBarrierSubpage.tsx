"use client";

import React, { useState } from "react";
import Link from "next/link";
import AramcoHeader from "./AramcoHeader";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";

export interface RailwaySubpageProps {
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
  highlights: { titleEn: string; titleHi: string; descEn: string; descHi: string; badge: string }[];
  specsTable: { parameterEn: string; parameterHi: string; valueEn: string; valueHi: string; standard: string }[];
  caseStudies: { titleEn: string; titleHi: string; siteEn: string; siteHi: string; descEn: string; descHi: string; metric: string }[];
  relatedSublinks: { titleEn: string; titleHi: string; href: string; tag: string }[];
}

function RailwaySubpageContent({ data }: { data: RailwaySubpageProps }) {
  const { lang } = useLanguage();
  
  // Interactive Boom Torque / Sizing Calculator State
  const [boomLength, setBoomLength] = useState<number>(5.0);
  const [windSpeed, setWindSpeed] = useState<number>(70);
  const [selectedProfile, setSelectedProfile] = useState<"octagonal" | "round" | "articulated">("octagonal");
  const [downloadRequested, setDownloadRequested] = useState<string | null>(null);

  // Calculated values for interactive simulation
  const cycleTime = (boomLength * 0.55).toFixed(1);
  const totalTorque = (boomLength * 38 + windSpeed * 0.95).toFixed(0);
  const counterbalanceSprings = boomLength <= 4 ? "Dual Helical Pack A (800N)" : boomLength <= 6 ? "Quad Spring Pack B (1800N)" : "Heavy High-Tensile Pack C (2800N)";
  const motorRating = boomLength <= 4 ? "180W Brushless DC" : boomLength <= 6 ? "250W High-Torque BLDC" : "400W Industrial Geared BLDC";

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-[#dc2626] selection:text-white">
      {/* 1. Global Navigation */}
      <AramcoHeader />

      {/* 
        =======================================================================
        HERO SECTION: CLEAN RED & WHITE TECHNICAL PRESENTATION
        =======================================================================
      */}
      <section className="relative w-full pt-28 sm:pt-36 pb-16 sm:pb-20 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.2] mb-5">
                {lang === "hi" ? data.heroHeadlineHi : data.heroHeadlineEn}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
                {lang === "hi" ? data.heroSubtitleHi : data.heroSubtitleEn}
              </p>

              {/* Action Toolbar */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#engineering-bench"
                  className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm flex items-center space-x-2"
                >
                  <span>{lang === "hi" ? "बूम साइज़िंग कैलकुलेटर चलाएं" : "Launch Boom Sizing Bench"}</span>
                  <span className="text-xs font-mono">→</span>
                </a>
                <a
                  href="#spec-drawer"
                  className="px-5 py-3.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 hover:text-red-600 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm flex items-center space-x-2"
                >
                  <span className="text-[11px] font-mono font-bold text-red-600">DWG</span>
                  <span>{lang === "hi" ? "CAD एवं टेंडर स्पेक्स" : "CAD DWG & Tender Specs"}</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image (Sharp Rectangular Border, NO Curve) */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden bg-white p-2 border border-slate-200 shadow-sm">
                <div className="relative h-72 sm:h-88 md:h-96 w-full overflow-hidden bg-slate-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={data.bannerImage}
                    alt={data.subCategoryTitleEn}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 4 Stat Metrics (Sharp Rectangles) */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {data.stats.map((st, i) => (
              <div key={i} className="p-5 bg-white border border-slate-200 shadow-sm hover:border-red-300 transition-all">
                <div className="text-2xl sm:text-3xl font-bold text-red-600 font-mono tracking-tight">
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
        SECTION 2: DEEP DIVE & MECHANICAL HIGHLIGHTS (Sharp Presentation)
        =======================================================================
      */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              {lang === "hi" ? data.deepDiveTitleHi : data.deepDiveTitleEn}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Deep dive text */}
            <div className="lg:col-span-7 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              {(lang === "hi" ? data.deepDiveParasHi : data.deepDiveParasEn).map((p, idx) => (
                <p key={idx} className="bg-slate-50 p-4 border border-slate-200 border-l-4 border-l-red-600">
                  {p}
                </p>
              ))}

              {/* Highlights cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {data.highlights.map((h, i) => (
                  <div key={i} className="p-4 bg-white border border-slate-200 shadow-sm hover:border-red-300 transition-all">
                    <span className="inline-block px-2 py-0.5 bg-red-50 text-red-700 border border-red-200 text-[10px] font-bold font-mono uppercase mb-2">
                      {h.badge}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 mb-1">
                      {lang === "hi" ? h.titleHi : h.titleEn}
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-normal">
                      {lang === "hi" ? h.descHi : h.descEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Visual Schematic Card (Sharp image, clean light theme) */}
            <div className="lg:col-span-5">
              <div className="border border-slate-200 shadow-sm bg-white p-5 sm:p-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">Technical Specification</span>
                  <span className="text-[11px] px-2.5 py-0.5 bg-red-50 text-red-700 font-medium border border-red-200">Certified EN 50126</span>
                </div>
                
                <div className="relative my-4 h-48 overflow-hidden border border-slate-200 bg-slate-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={data.secondaryBannerImage}
                    alt="Mechanism View"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="divide-y divide-slate-100 text-xs">
                  <div className="flex justify-between py-2.5">
                    <span className="text-slate-500 font-medium">Clutch Release Delay:</span>
                    <span className="text-red-700 font-semibold">&lt; 10 ms (Fail-Safe)</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-slate-500 font-medium">Terminal Cushioning:</span>
                    <span className="text-slate-900 font-semibold">Hydro-Pneumatic Active</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-slate-500 font-medium">Enclosure Integrity:</span>
                    <span className="text-slate-900 font-semibold">IP66 / IK10 Heavy Gauge</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        BANNER 1: ARCHITECTURE SPOTLIGHT (Clean light background, NO overlay boxes)
        =======================================================================
      */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 my-12 sm:my-16">
        <div className="bg-slate-50 border border-slate-200 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold text-red-700 uppercase tracking-wider font-mono">
                <span>{lang === "hi" ? "तकनीकी मानकीकरण" : "TECHNICAL STANDARD"}</span>
                <span className="mx-2">•</span>
                <span>SIL-2 & RDSO READY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                {lang === "hi" 
                  ? `${data.subCategoryTitleHi} - प्रमाणित परिचालन विश्वसनीयता`
                  : `${data.subCategoryTitleEn} Certified Engineering Core`}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {lang === "hi"
                  ? "कठिनतम रेलवे लेवल क्रॉसिंग और औद्योगिक वातावरण के लिए निर्मित। शून्य-घिसाव ड्राइव ज्यामिति और स्वचालित सुरक्षा इंटरलॉक।"
                  : "Engineered specifically for heavy continuous duty. Zero-wear mechanical geometries and active fail-safe interlocking protocols."}
              </p>
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href="#engineering-bench"
                  className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold tracking-wide transition-all shadow-sm flex items-center space-x-2"
                >
                  <span>{lang === "hi" ? "सिस्टम कॉन्फ़िगर करें" : "Configure System"}</span>
                  <span>→</span>
                </a>
                <a
                  href="#spec-drawer"
                  className="text-xs font-semibold text-slate-700 hover:text-red-600 transition-colors"
                >
                  {lang === "hi" ? "तकनीकी डेटाशीट डाउनलोड करें" : "Download Full Technical Datasheet"}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="h-56 sm:h-64 w-full overflow-hidden border border-slate-200 bg-white">
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
        SECTION 3: INTERACTIVE BOOM SIZING BENCH
        =======================================================================
      */}
      <section id="engineering-bench" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              {lang === "hi" ? "बूम लंबाई एवं पवन भार कैलकुलेटर" : "Boom Span & Wind Torque Engineering Bench"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              {lang === "hi"
                ? "अपनी क्रॉसिंग चौड़ाई और हवा की गति को समायोजित करें और आवश्यक टॉर्क, स्प्रिंग्स और साइकिल गति की रीयल-टाइम गणना देखें।"
                : "Adjust span length and ambient wind velocity to calculate dynamic holding torque, counterbalance springs, and cycle timings."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Controls */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center justify-between">
                  <span>{lang === "hi" ? "पैरामीटर इनपुट" : "Site Parameter Sliders"}</span>
                  <span className="text-xs font-mono text-red-600">LIVE FEEDBACK</span>
                </h3>

                {/* Boom Length Slider */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-700">
                      {lang === "hi" ? "बूम आर्म लंबाई (मीटर):" : "Barrier Boom Arm Span:"}
                    </label>
                    <span className="text-sm font-bold font-mono text-red-600 bg-red-50 px-2 py-0.5 border border-red-200">
                      {boomLength.toFixed(1)} Meters
                    </span>
                  </div>
                  <input
                    type="range"
                    min={3.0}
                    max={9.0}
                    step={0.5}
                    value={boomLength}
                    onChange={(e) => setBoomLength(parseFloat(e.target.value))}
                    className="w-full accent-[#dc2626] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>3.0m (Standard Single)</span>
                    <span>6.0m (Dual Highway)</span>
                    <span>9.0m (Multi-Track)</span>
                  </div>
                </div>

                {/* Wind Velocity Slider */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-700">
                      {lang === "hi" ? "पवन गति (Wind Gust):" : "Design Wind Gust Velocity:"}
                    </label>
                    <span className="text-sm font-bold font-mono text-amber-600 bg-amber-50 px-2 py-0.5 border border-amber-200">
                      {windSpeed} km/h
                    </span>
                  </div>
                  <input
                    type="range"
                    min={20}
                    max={140}
                    step={5}
                    value={windSpeed}
                    onChange={(e) => setWindSpeed(parseInt(e.target.value))}
                    className="w-full accent-[#dc2626] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>20 km/h (Calm)</span>
                    <span>70 km/h (Standard RDSO)</span>
                    <span>140 km/h (Coastal Storm)</span>
                  </div>
                </div>

                {/* Profile Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    {lang === "hi" ? "बूम आर्म प्रोफाइल प्रकार:" : "Aerodynamic Boom Arm Profile:"}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "octagonal", label: "Octagonal Aero", sub: "Low Wind Resistance" },
                      { id: "round", label: "Round Tubular", sub: "Standard Budget" },
                      { id: "articulated", label: "Articulated Joint", sub: "Low Ceiling Clearance" }
                    ].map((prf) => (
                      <button
                        key={prf.id}
                        onClick={() => setSelectedProfile(prf.id as any)}
                        className={`p-2.5 text-left border transition-all cursor-pointer ${
                          selectedProfile === prf.id
                            ? "bg-red-50 border-red-500 text-red-950 font-bold shadow-sm"
                            : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        <div className="text-xs">{prf.label}</div>
                        <div className="text-[9px] text-slate-500 font-normal mt-0.5">{prf.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Simulation Output */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    {lang === "hi" ? "गणना परिणाम" : "Live Sizing Computations"}
                  </h3>
                  <span className="text-[10px] px-2.5 py-0.5 bg-red-50 text-red-700 font-mono font-bold border border-red-200">
                    EN 50126 READY
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 my-6">
                  <div className="p-4 bg-slate-50 border border-slate-200">
                    <span className="text-[11px] text-slate-500 font-medium">Calculated Holding Torque</span>
                    <div className="text-2xl font-bold font-mono text-slate-900 mt-1">{totalTorque} Nm</div>
                    <span className="text-[10px] text-slate-400">Wind gust compensated</span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200">
                    <span className="text-[11px] text-slate-500 font-medium">Estimated Cycle Duration</span>
                    <div className="text-2xl font-bold font-mono text-red-600 mt-1">{cycleTime} sec</div>
                    <span className="text-[10px] text-slate-400">0° to 90° full stroke</span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="flex justify-between p-2.5 bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 font-medium">Matched Counterbalance Pack:</span>
                    <span className="font-bold text-slate-900">{counterbalanceSprings}</span>
                  </div>
                  <div className="flex justify-between p-2.5 bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 font-medium">Recommended Motor Unit:</span>
                    <span className="font-bold text-slate-900">{motorRating}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-6">
                <span className="text-[11px] text-slate-500 font-medium">Matched to Indian Railways RDSO Norms</span>
                <a
                  href="#spec-drawer"
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold tracking-wide transition-all shadow-sm"
                >
                  {lang === "hi" ? "ड्राइंग डाउनलोड करें" : "Export Mechanical DWG"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        BANNER 2 (FULL-WIDTH): FIELD INSTALLATION (Clean presentation, NO boxes on image)
        =======================================================================
      */}
      <section className="relative w-full my-12 sm:my-16 bg-white border-y border-slate-200 overflow-hidden">
        <div className="relative h-[280px] sm:h-[400px] lg:h-[480px] w-full overflow-hidden bg-slate-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.fieldBannerImage}
            alt={lang === "hi" ? `${data.subCategoryTitleHi} फील्ड इंस्टॉलेशन` : `${data.subCategoryTitleEn} Active Field Deployment`}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Caption below the image (NOT on top of it) */}
        <div className="bg-white border-t border-slate-200 py-3.5 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600 font-mono">
            <div className="flex items-center space-x-2 font-bold text-slate-900">
              <span>{lang === "hi" ? `${data.subCategoryTitleHi} - सक्रिय फील्ड परिनियोजन` : `${data.subCategoryTitleEn} • Active Field Deployment`}</span>
            </div>
            <div className="flex items-center space-x-4 text-[11px] text-slate-500">
              <span>EN 50126 RAMS VERIFIED</span>
              <span>•</span>
              <span>-25°C TO +70°C AMBIENT RATED</span>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 4: HARDWARE IMAGE GALLERY (More real hardware photos)
        =======================================================================
      */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              {lang === "hi" ? "विस्तृत निर्माण एवं फील्ड तस्वीरें" : "Assembly Engineering & Field Hardware"}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="border border-slate-200 bg-white p-2">
              <div className="h-52 w-full overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/boom_barrier_railway.jpg"
                  alt="Barrier Corridor"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-3 text-xs font-bold text-slate-900">Railway Level Crossing Corridor</div>
            </div>

            <div className="border border-slate-200 bg-white p-2">
              <div className="h-52 w-full overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/fail_safe_boom.jpg"
                  alt="Internal Actuator Drive"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-3 text-xs font-bold text-slate-900">Internal Torque & BLDC Drive</div>
            </div>

            <div className="border border-slate-200 bg-white p-2">
              <div className="h-52 w-full overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/weatherproof_enclosure.jpg"
                  alt="IP66 Enclosure Test"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-3 text-xs font-bold text-slate-900">IP66 Weatherproof Tested Cabinet</div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 5: SPECIFICATION MATRIX
        =======================================================================
      */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-slate-900">
              {lang === "hi" ? `${data.subCategoryTitleHi} तकनीकी डेटा` : `${data.subCategoryTitleEn} Technical Matrix`}
            </h3>
          </div>

          <div className="border border-slate-200 shadow-sm bg-white overflow-hidden">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                <tr>
                  <th className="p-4 sm:p-5">{lang === "hi" ? "पैरामीटर" : "Engineering Parameter"}</th>
                  <th className="p-4 sm:p-5">{lang === "hi" ? "रेटेड मान" : "Rated Value / Metric"}</th>
                  <th className="p-4 sm:p-5">{lang === "hi" ? "मानक" : "Applicable Standard"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {data.specsTable.map((sp, idx) => (
                  <tr key={idx} className="hover:bg-red-50/30 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">
                      {lang === "hi" ? sp.parameterHi : sp.parameterEn}
                    </td>
                    <td className="p-4 sm:p-5 font-mono text-red-700 font-medium">
                      {lang === "hi" ? sp.valueHi : sp.valueEn}
                    </td>
                    <td className="p-4 sm:p-5">
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-700 font-mono text-xs">
                        {sp.standard}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 6: DIRECT SPECIFICATION REPOSITORY
        =======================================================================
      */}
      <section id="spec-drawer" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 bg-white border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Direct Downloads */}
              <div className="lg:col-span-7">
                <div className="text-xs font-bold font-mono text-red-700 uppercase tracking-wider mb-2">
                  {lang === "hi" ? "सीधा इंजीनियरिंग एक्सेस" : "DIRECT SPECIFICATION REPOSITORY"}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {lang === "hi"
                    ? `${data.subCategoryTitleHi} ब्लूप्रिंट एवं दस्तावेज`
                    : `Download ${data.subCategoryTitleEn} Engineering Pack`}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {lang === "hi"
                    ? "सिविल फाउंडेशन लेआउट, 2D/3D DWG ड्राइंग्स और टेंडर कंप्लायंस शीट्स तुरंत प्राप्त करें।"
                    : "Instant access to anchor bolt civil foundation layouts, 2D DWG cad blueprints, and RDSO compliance statements."}
                </p>

                {/* Download Action Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
                  {[
                    { id: "pdf", label: "Datasheet (PDF)", size: "3.4 MB", ext: "PDF" },
                    { id: "dwg", label: "Civil Layout (DWG)", size: "8.1 MB", ext: "DWG" },
                    { id: "step", label: "3D CAD Model", size: "14.2 MB", ext: "STEP" }
                  ].map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => {
                        setDownloadRequested(doc.id);
                        setTimeout(() => setDownloadRequested(null), 3500);
                      }}
                      className="p-3 bg-slate-50 hover:bg-red-50/60 border border-slate-200 hover:border-red-300 text-left transition-all flex flex-col justify-between cursor-pointer group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-red-700 bg-white px-1.5 py-0.5 border border-slate-200">
                          {doc.ext}
                        </span>
                        <span className="text-xs text-slate-400 group-hover:text-red-600">↓</span>
                      </div>
                      <div className="mt-2">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-red-700">
                          {doc.label}
                        </div>
                        <div className="text-[10px] text-slate-400">{doc.size}</div>
                      </div>
                    </button>
                  ))}
                </div>

                {downloadRequested && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-800 text-xs font-medium flex items-center space-x-2">
                    <span className="font-bold text-red-700 font-mono">[CONFIRMED]</span>
                    <span>{lang === "hi" ? "दस्तावेज डाउनलोड प्रारंभ हो गया है।" : "Specification package download initiated."}</span>
                  </div>
                )}
              </div>

              {/* Right Column: Direct Rail Hotline Card */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-7 border border-slate-200 shadow-sm text-slate-900">
                <span className="text-[10px] font-bold text-red-700 uppercase tracking-widest font-mono">
                  {lang === "hi" ? "सीधा तकनीकी सहायता" : "DEDICATED RAILWAYS DESK"}
                </span>
                <h4 className="text-lg font-bold text-slate-900 mt-1">
                  {lang === "hi" ? "रेलवे डिवीजन तकनीकी हॉटलाइन" : "Railway Systems Engineering Hotline"}
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {lang === "hi"
                    ? "इंटरफेसिंग, 24V बैकअप और ट्रैक इंटरलॉकिंग पर हमारे वरिष्ठ इंजीनियर से सीधे बात करें।"
                    : "Direct dialogue with Senior Signaling & Hardware Application Leads without sales gatekeepers."}
                </p>

                <div className="mt-5 space-y-2.5">
                  <a
                    href="tel:+911149887700"
                    className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold flex items-center justify-between transition-all shadow-sm"
                  >
                    <span>TEL: +91 11 4988 7700</span>
                    <span className="text-[10px] bg-red-700 px-2 py-0.5 font-medium">NEW DELHI HQ</span>
                  </a>
                  <a
                    href="mailto:rail.engineering@global-safety.com"
                    className="w-full py-3 px-4 bg-slate-50 hover:bg-red-50/50 border border-slate-200 hover:border-red-200 text-slate-800 text-xs font-semibold flex items-center justify-between transition-all"
                  >
                    <span>EMAIL: rail.engineering@global-safety.com</span>
                    <span className="text-[10px] text-slate-500 font-medium">DIRECT DESK</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. Related Sublinks Navigation */}
      {data.relatedSublinks && data.relatedSublinks.length > 0 && (
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              {lang === "hi" ? "संबंधित उत्पाद एवं तकनीकें" : "Explore Related Railway Barrier Modules"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.relatedSublinks.map((sub, i) => (
                <Link
                  key={i}
                  href={sub.href}
                  className="p-4 bg-slate-50 hover:bg-red-50/60 border border-slate-200 hover:border-red-300 transition-all flex items-center justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-red-700">{sub.tag}</span>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-red-700">
                      {lang === "hi" ? sub.titleHi : sub.titleEn}
                    </div>
                  </div>
                  <span className="text-slate-400 group-hover:text-red-600 transition-transform group-hover:translate-x-1">→</span>
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

export default function RailwayBarrierSubpage({ data }: { data: RailwaySubpageProps }) {
  return (
    <LanguageProvider>
      <RailwaySubpageContent data={data} />
    </LanguageProvider>
  );
}

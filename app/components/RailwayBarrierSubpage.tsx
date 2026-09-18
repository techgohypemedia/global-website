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

        {/* Ambient Dark Gradients matching Homepage */}
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
                href="#engineering-bench"
                className="px-7 py-3.5 bg-[#ff3131] hover:bg-[#e02626] text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-lg hover:shadow-[#ff3131]/30 flex items-center space-x-2 group hover:-translate-y-0.5"
              >
                <span>{lang === "hi" ? "बूम साइज़िंग कैलकुलेटर चलाएं" : "Launch Boom Sizing Bench"}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#spec-drawer"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white text-white text-xs sm:text-sm font-medium tracking-wide backdrop-blur-sm transition-all flex items-center space-x-2 hover:-translate-y-0.5"
              >
                <span className="text-[11px] font-bold text-[#ff3131]">DWG</span>
                <span>{lang === "hi" ? "CAD एवं टेंडर स्पेक्स" : "CAD DWG & Tender Specs"}</span>
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
        SECTION 1: ARCHITECTURE DEEP DIVE & HIGHLIGHTS (Clean Homepage Style)
        =======================================================================
      */}
      <section className="w-full bg-white text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>{lang === "hi" ? "इंजीनियरिंग कोर" : "ENGINEERING ARCHITECTURE"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#1e293b] font-sans mb-5">
              {lang === "hi" ? data.deepDiveTitleHi : data.deepDiveTitleEn}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              {lang === "hi"
                ? "कठिनतम रेलवे लेवल क्रॉसिंग और औद्योगिक वातावरण के लिए निर्मित। शून्य-घिसाव ड्राइव ज्यामिति और स्वचालित सुरक्षा इंटरलॉक।"
                : "Engineered specifically for heavy continuous duty with zero-wear mechanical geometries and active fail-safe interlocking protocols."}
            </p>
            <p className="text-sm sm:text-base font-medium text-[#ff3131]">
              {lang === "hi" ? "सत्यापित SIL-2 और RDSO विश्वसनीयता।" : "Verified SIL-2 & RDSO Operational Dependability."}
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

              {/* 3 Highlights Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {data.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-5 bg-[#f8f9fa] border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#ff3131]/60 transition-all duration-300"
                  >
                    <span className="inline-block px-2 py-0.5 bg-red-50 text-[#ff3131] border border-red-100 text-[10px] font-semibold uppercase tracking-wider mb-3">
                      {h.badge}
                    </span>
                    <h4 className="text-sm font-semibold text-[#1e293b] mb-2 font-sans">
                      {lang === "hi" ? h.titleHi : h.titleEn}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {lang === "hi" ? h.descHi : h.descEn}
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
                    {lang === "hi" ? "तकनीकी विनिर्देश" : "Technical Specification"}
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 bg-red-50 text-[#ff3131] font-medium border border-red-200">
                    Certified EN 50126
                  </span>
                </div>
                
                <div className="relative my-4 h-52 overflow-hidden border border-gray-200 bg-neutral-900 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={data.secondaryBannerImage}
                    alt="Mechanism View"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>

                <div className="divide-y divide-gray-200 text-xs sm:text-sm">
                  <div className="flex justify-between py-3">
                    <span className="text-gray-500 font-medium">Clutch Release Delay:</span>
                    <span className="text-[#ff3131] font-semibold">&lt; 10 ms (Fail-Safe)</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-500 font-medium">Terminal Cushioning:</span>
                    <span className="text-gray-900 font-medium">Hydro-Pneumatic Active</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-500 font-medium">Enclosure Integrity:</span>
                    <span className="text-gray-900 font-medium">IP66 / IK10 Heavy Gauge</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">RDSO / SIL-2 Compliance</span>
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
        SECTION 2: INTERACTIVE BOOM SIZING BENCH (Homepage Workstation Style)
        =======================================================================
      */}
      <section id="engineering-bench" className="w-full bg-[#f8f9fa] text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>{lang === "hi" ? "इंटरएक्टिव इंजीनियरिंग लैब" : "ENGINEERING BENCH"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#1e293b] font-sans mb-5">
              {lang === "hi" ? "बूम लंबाई एवं पवन भार कैलकुलेटर" : "Boom Span & Wind Torque Engineering Bench"}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              {lang === "hi"
                ? "अपनी क्रॉसिंग चौड़ाई और हवा की गति को समायोजित करें और आवश्यक टॉर्क, स्प्रिंग्स और साइकिल गति की रीयल-टाइम गणना देखें।"
                : "Adjust span length and ambient wind velocity to calculate dynamic holding torque, counterbalance springs, and cycle timings."}
            </p>
            <p className="text-sm sm:text-base font-medium text-[#ff3131]">
              {lang === "hi" ? "रीयल-टाइम भारतीय रेलवे RDSO विनिर्देश गणना।" : "Live calculation mapped to RDSO and EN 50126 specifications."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Controls */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-gray-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                  <h3 className="text-sm font-semibold text-[#1e293b] uppercase tracking-wider font-sans">
                    {lang === "hi" ? "साइट पैरामीटर इनपुट" : "Site Parameter Sliders"}
                  </h3>
                  <span className="text-xs font-medium text-[#ff3131] bg-red-50 border border-red-100 px-2.5 py-0.5">
                    LIVE SIMULATION
                  </span>
                </div>

                {/* Boom Length Slider */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-gray-700">
                      {lang === "hi" ? "बूम आर्म लंबाई (मीटर):" : "Barrier Boom Arm Span:"}
                    </label>
                    <span className="text-sm font-semibold text-[#ff3131] bg-red-50 px-2.5 py-0.5 border border-red-200">
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
                    className="w-full accent-[#ff3131] cursor-pointer h-2 bg-gray-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-gray-500 mt-1.5">
                    <span>3.0m (Single Lane)</span>
                    <span>6.0m (Dual Highway)</span>
                    <span>9.0m (Multi-Track)</span>
                  </div>
                </div>

                {/* Wind Velocity Slider */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-gray-700">
                      {lang === "hi" ? "पवन गति (Wind Gust):" : "Design Wind Gust Velocity:"}
                    </label>
                    <span className="text-sm font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 border border-amber-200">
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
                    className="w-full accent-[#ff3131] cursor-pointer h-2 bg-gray-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-gray-500 mt-1.5">
                    <span>20 km/h (Calm)</span>
                    <span>70 km/h (Standard RDSO)</span>
                    <span>140 km/h (Coastal Storm)</span>
                  </div>
                </div>

                {/* Profile Selector */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    {lang === "hi" ? "बूम आर्म प्रोफाइल प्रकार:" : "Aerodynamic Boom Arm Profile:"}
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: "octagonal", label: "Octagonal Aero", sub: "Low Wind Drag" },
                      { id: "round", label: "Round Tubular", sub: "Standard Profile" },
                      { id: "articulated", label: "Articulated Joint", sub: "Low Ceiling Joint" }
                    ].map((prf) => (
                      <button
                        key={prf.id}
                        onClick={() => setSelectedProfile(prf.id as any)}
                        className={`p-3 text-left border transition-all cursor-pointer ${
                          selectedProfile === prf.id
                            ? "bg-red-50 border-[#ff3131] text-[#1e293b] font-semibold shadow-sm"
                            : "bg-[#f8f9fa] border-gray-200 text-gray-600 hover:bg-white"
                        }`}
                      >
                        <div className="text-xs">{prf.label}</div>
                        <div className="text-[10px] text-gray-500 font-normal mt-0.5">{prf.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Simulation Output */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-gray-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-[#1e293b] uppercase tracking-wider font-sans">
                    {lang === "hi" ? "गणना परिणाम" : "Live Sizing Computations"}
                  </h3>
                  <span className="text-[10px] px-2.5 py-0.5 bg-red-50 text-[#ff3131] font-semibold border border-red-200">
                    EN 50126 READY
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 my-6">
                  <div className="p-5 bg-[#f8f9fa] border border-gray-200">
                    <span className="text-xs text-gray-500 font-medium">Calculated Holding Torque</span>
                    <div className="text-3xl font-light text-[#1e293b] mt-1">{totalTorque} Nm</div>
                    <span className="text-[11px] text-gray-500">Wind gust compensated</span>
                  </div>
                  <div className="p-5 bg-[#f8f9fa] border border-gray-200">
                    <span className="text-xs text-gray-500 font-medium">Estimated Cycle Duration</span>
                    <div className="text-3xl font-light text-[#ff3131] mt-1">{cycleTime} sec</div>
                    <span className="text-[11px] text-gray-500">0° to 90° full stroke</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-gray-700">
                  <div className="flex justify-between p-3.5 bg-[#f8f9fa] border border-gray-200">
                    <span className="text-gray-500 font-medium">Matched Counterbalance Pack:</span>
                    <span className="font-semibold text-gray-900">{counterbalanceSprings}</span>
                  </div>
                  <div className="flex justify-between p-3.5 bg-[#f8f9fa] border border-gray-200">
                    <span className="text-gray-500 font-medium">Recommended Motor Unit:</span>
                    <span className="font-semibold text-gray-900">{motorRating}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 mt-6">
                <span className="text-xs text-gray-500 font-medium">Matched to Indian Railways RDSO Norms</span>
                <a
                  href="#spec-drawer"
                  className="px-5 py-2.5 bg-[#ff3131] hover:bg-[#e02626] text-white text-xs font-medium tracking-wide transition-all shadow-sm flex items-center gap-1.5"
                >
                  <span>{lang === "hi" ? "ड्राइंग डाउनलोड करें" : "Export Mechanical DWG"}</span>
                  <span>↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 3: HARDWARE IMAGE GALLERY (Homepage DiscoverAramco Card Grid Style)
        =======================================================================
      */}
      <section className="w-full bg-white text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>{lang === "hi" ? "सक्रिय परिनियोजन" : "DEPLOYED HARDWARE"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#1e293b] font-sans mb-5">
              {lang === "hi" ? "विस्तृत निर्माण एवं फील्ड तस्वीरें" : "Assembly Engineering & Field Hardware"}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              {lang === "hi"
                ? "उच्च-घनत्व रेलवे कॉरिडोर और गंभीर मौसम स्थितियों में सक्रिय रूप से स्थापित सिस्टम।"
                : "Active field deployments under high-density railway corridors, heavy dust environments, and harsh weather conditions."}
            </p>
          </div>

          {/* 3 Full-Image Cards matching DiscoverAramco */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Railway Level Crossing Corridor",
                category: "HEAVY DUTY CONTINUOUS",
                image: "/images/boom_barrier_railway.jpg",
                desc: "Zero-failure level crossing vehicle control under 24/7 continuous operations."
              },
              {
                title: "Internal Torque & BLDC Drive",
                category: "SIL-2 RATED ACTUATION",
                image: "/images/fail_safe_boom.jpg",
                desc: "Precision brushless geared DC drive with instant mechanical fail-safe clutch."
              },
              {
                title: "IP66 Weatherproof Tested Cabinet",
                category: "ENVIRONMENTAL PROTECTION",
                image: "/images/weatherproof_enclosure.jpg",
                desc: "Marine-grade powder-coated cabinet tested against extreme monsoon and sandstorm ingress."
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
                    <span>Specification Verified</span>
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
        SECTION 4: TECHNICAL SPECIFICATION MATRIX (Clean Homepage Style)
        =======================================================================
      */}
      <section className="w-full bg-[#f8f9fa] text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="text-xs font-semibold tracking-widest text-[#ff3131] uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#ff3131]" />
              <span>{lang === "hi" ? "मानकीकृत विनिर्देश" : "STANDARDS COMPLIANCE"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#1e293b] font-sans mb-5">
              {lang === "hi" ? `${data.subCategoryTitleHi} तकनीकी डेटा` : `${data.subCategoryTitleEn} Technical Matrix`}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              {lang === "hi"
                ? "इंजीनियरिंग विनिर्देश और अंतरराष्ट्रीय सुरक्षा मानकों के अनुरूप परीक्षण किए गए पैरामीटर।"
                : "Comprehensive parametric limits verified according to RDSO standards and international electrical safety codes."}
            </p>
          </div>

          <div className="bg-white border border-gray-200 shadow-md overflow-hidden">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#1e293b] text-white text-xs uppercase tracking-wider font-medium">
                <tr>
                  <th className="p-4 sm:p-5">{lang === "hi" ? "पैरामीटर" : "Engineering Parameter"}</th>
                  <th className="p-4 sm:p-5">{lang === "hi" ? "रेटेड मान" : "Rated Value / Metric"}</th>
                  <th className="p-4 sm:p-5">{lang === "hi" ? "मानक" : "Applicable Standard"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {data.specsTable.map((sp, idx) => (
                  <tr key={idx} className="hover:bg-red-50/40 transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-[#1e293b]">
                      {lang === "hi" ? sp.parameterHi : sp.parameterEn}
                    </td>
                    <td className="p-4 sm:p-5 font-semibold text-[#ff3131]">
                      {lang === "hi" ? sp.valueHi : sp.valueEn}
                    </td>
                    <td className="p-4 sm:p-5">
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs border border-gray-200">
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
                    ? "सिविल फाउंडेशन लेआउट, 2D/3D DWG ड्राइंग्स और टेंडर कंप्लायंस शीट्स तुरंत प्राप्त करें।"
                    : "Instant access to anchor bolt civil foundation layouts, 2D DWG cad blueprints, and RDSO compliance statements."}
                </p>

                {/* Download Action Chips matching FinancialReports cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
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

                {downloadRequested && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 text-[#ff3131] text-xs font-medium flex items-center space-x-2">
                    <span className="font-bold">[CONFIRMED]</span>
                    <span>{lang === "hi" ? "दस्तावेज डाउनलोड प्रारंभ हो गया है।" : "Specification package download initiated."}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Direct Rail Hotline Card in Dark Corporate Styling */}
            <div className="lg:col-span-5 bg-[#1e293b] text-white p-8 sm:p-10 shadow-xl flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-semibold text-[#ff3131] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-5 h-[2px] bg-[#ff3131]" />
                  <span>{lang === "hi" ? "सीधा तकनीकी सहायता" : "DEDICATED RAILWAYS DESK"}</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-light text-white font-sans mt-2">
                  {lang === "hi" ? "रेलवे डिवीजन तकनीकी हॉटलाइन" : "Railway Systems Engineering Hotline"}
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed font-light">
                  {lang === "hi"
                    ? "इंटरफेसिंग, 24V बैकअप और ट्रैक इंटरलॉकिंग पर हमारे वरिष्ठ इंजीनियर से सीधे बात करें।"
                    : "Direct dialogue with Senior Signaling & Hardware Application Leads without sales gatekeepers."}
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
                    href="mailto:rail.engineering@global-safety.com"
                    className="w-full py-3.5 px-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-medium flex items-center justify-between transition-all"
                  >
                    <span>EMAIL: rail.engineering@global-safety.com</span>
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
                <span>{lang === "hi" ? "संबंधित उत्पाद एवं तकनीकें" : "Explore Related Railway Barrier Modules"}</span>
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

export default function RailwayBarrierSubpage({ data }: { data: RailwaySubpageProps }) {
  return (
    <LanguageProvider>
      <RailwaySubpageContent data={data} />
    </LanguageProvider>
  );
}

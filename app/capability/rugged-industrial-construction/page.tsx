"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import AramcoHeader from "../../components/AramcoHeader";
import NewsletterSection from "../../components/NewsletterSection";
import Footer from "../../components/Footer";
import { LanguageProvider, useLanguage } from "../../context/LanguageContext";

function RuggedIndustrialConstructionContent() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("metallurgy");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const SUBNAV_ITEMS = [
    { id: "metallurgy", label: lang === "hi" ? "धातु विज्ञान एवं कोटिंग" : "Metallurgy & Coating" },
    { id: "thermal", label: lang === "hi" ? "थर्मल एवं एंटी-कंडेनसेशन" : "Thermal Envelope" },
    { id: "ingress", label: lang === "hi" ? "IP66 वेदरप्रूफिंग" : "IP66 Ingress Protection" },
    { id: "vibration", label: lang === "hi" ? "कंपन एवं शॉक हार्डनिंग" : "Vibration & Shock" },
    { id: "environmental-matrix", label: lang === "hi" ? "पर्यावरणीय मैट्रिक्स" : "Environmental Matrix" },
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

  const ENV_MATRIX = [
    {
      test: lang === "hi" ? "धूल एवं जल इनग्रेस (Ingress)" : "Dust & Water Ingress Protection",
      standard: "IEC 60529 / IS 13947",
      rating: "IP66 Certified",
      evidence: lang === "hi" ? "100 kPa प्रेशर जेट एवं सूक्ष्म धूल चैंबर में 100% सीलबंद" : "Continuous seamless EPDM gasketing with labyrinth ventilation",
    },
    {
      test: lang === "hi" ? "साल्ट स्प्रे संक्षारण प्रतिरोध" : "Salt Spray Corrosion Resistance",
      standard: "ASTM B117 / ISO 9227",
      rating: "> 1,000 Hours",
      evidence: lang === "hi" ? "जिंक फॉस्फेटिंग + 100µm शुद्ध पॉलिएस्टर कोटिंग" : "Zero blister formation or edge rust on 3mm cold-rolled steel",
    },
    {
      test: lang === "hi" ? "तापमान परिचालन सीमा" : "Operating Thermal Range",
      standard: "IEC 60068-2-1 / 2",
      rating: "-25°C to +70°C",
      evidence: lang === "hi" ? "आंतरिक 50W PTC थर्मोस्टेटिक हीटर और ओवरटेम्प कटऑफ" : "Maintains stable internal electronics in desert heat & frost",
    },
    {
      test: lang === "hi" ? "यांत्रिक संघात प्रभाव" : "Mechanical Impact Resistance",
      standard: "EN 62262",
      rating: "IK10 (20 Joules)",
      evidence: lang === "hi" ? "3.0mm हेवी-गेज स्टील बॉडी, वेफर-वेल्डेड स्ट्रक्चर" : "Resists direct 5kg steel mass impact from 400mm height",
    },
    {
      test: lang === "hi" ? "ट्रेकसाइड कंपन एवं शॉक" : "Trackside Vibration & Shock",
      standard: "IEC 60068-2-6 / 27",
      rating: "10-150 Hz @ 0.5g / 30g Shock",
      evidence: lang === "hi" ? "एंटी-वाइब्रेशन आइसोलेटर माउंट्स व नायलॉक लॉकनट्स" : "Unaffected by high-tonnage 120km/h freight rail resonance",
    },
    {
      test: lang === "hi" ? "आंधी एवं पवन प्रतिरोध" : "Hurricane Wind Velocity",
      standard: "IS 875 (Part 3)",
      rating: "Up to 160 km/h",
      evidence: lang === "hi" ? "एरोडायनामिक बूम प्रोफाइल और सुदृढ़ कंक्रीट फाउंडेशन" : "Aerodynamic arm cross-section prevents shear stress buckling",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#ff3131] selection:text-white relative font-sans">
      {/* 1. Light Theme Header */}
      <AramcoHeader theme="light" />

      {/* 2. Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-[#f8f9fb] via-white to-white overflow-hidden pb-14 sm:pb-20 pt-28 sm:pt-36 border-b border-gray-100">
        {/* Subtle decorative accents */}
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
                  {lang === "hi" ? "मजबूत औद्योगिक निर्माण" : "Rugged Industrial Construction"}
                </span>
              </nav>

              {/* Eyebrow Badge */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-xs font-semibold text-[#ff3131] tracking-wider uppercase mb-5">
                <span className="w-2 h-2 rounded-full bg-[#ff3131] animate-pulse" />
                <span>
                  {lang === "hi"
                    ? "IP66 एवं IK10 कठोर पर्यावरण विशिष्टता"
                    : "IP66 & IK10 EXTREME-DUTY SPECIFICATION"}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-gray-950 leading-[1.12] mb-5">
                {lang === "hi" ? (
                  <>
                    अत्यधिक परिस्थितियों हेतु <br />
                    <span className="text-[#ff3131]">मजबूत औद्योगिक निर्माण</span>
                  </>
                ) : (
                  <>
                    Engineered for Extremes: <br />
                    <span className="text-[#ff3131]">Rugged Industrial Construction.</span>
                  </>
                )}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mb-8">
                {lang === "hi"
                  ? "3.0mm कोल्ड-रोल्ड स्टील, फॉस्फेटिंग एवं इलेक्ट्रोस्टैटिक कोटिंग के साथ तैयार। मूसलाधार मानसून, थार की धूल, और -25°C से +70°C तापमान में 24/7 निर्बाध परिचालन।"
                  : "Engineered from 3.0mm precision-formed cold-rolled steel, zinc-phosphated, and coated with 100µm pure polyester resin. Built to endure torrential monsoon rains, desert dust storms, and -25°C to +70°C thermal extremes without structural degradation."}
              </p>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                <div className="border-l-2 border-[#ff3131] pl-3">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-950">IP66</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                    {lang === "hi" ? "वेदरप्रूफ रेटिंग" : "Ingress Rating"}
                  </div>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-950">-25°C / +70°C</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                    {lang === "hi" ? "थर्मल रेंज" : "Thermal Envelope"}
                  </div>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-950">3.0 mm</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                    {lang === "hi" ? "स्टील मोटाई" : "Cold-Rolled Steel"}
                  </div>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-950">&gt; 1000h</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                    {lang === "hi" ? "साल्ट स्प्रे टेस्ट" : "Salt Fog Life"}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group bg-gray-100">
                <div
                  className="w-full h-[380px] sm:h-[460px] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: "url('/images/power_distribution_eld.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block px-3 py-1 rounded-md bg-[#ff3131] text-[11px] font-bold tracking-wider uppercase mb-2">
                    {lang === "hi" ? "भारी औद्योगिक एनक्लोजर" : "IP66 HEAVY CABINET"}
                  </span>
                  <h3 className="text-lg font-bold">
                    {lang === "hi" ? "वेदरप्रूफ एवं एंटी-संक्षारण निर्माण" : "Weatherproof Anti-Corrosion Metallurgy"}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1">
                    {lang === "hi" ? "भारतीय रेलवे की फील्ड आवश्यकताओं के अनुरूप प्रमाणित" : "Certified for open-air trackside and heavy plant substations"}
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
                {lang === "hi" ? "औद्योगिक निर्माण" : "RUGGED CONSTRUCTION"}
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

      {/* 4. Deep-Dive Section 1: Metallurgy & Coating */}
      <section id="metallurgy" className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff3131] mb-2 block">
                {lang === "hi" ? "चरण 01 : धातु विज्ञान एवं रसायन" : "STAGE 01 : METALLURGY & CHEMICAL TREATMENT"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-950 tracking-tight mb-5 leading-tight">
                {lang === "hi"
                  ? "3.0mm कोल्ड-रोल्ड स्टील एवं 7-टैंक जिंक फॉस्फेटिंग"
                  : "Cold-Rolled Structural Steel & 7-Tank Zinc Phosphating"}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 font-normal">
                {lang === "hi"
                  ? "पतले सामान्य शीट मेटल के विपरीत, हमारे कैबिनेट 3.0 मिमी उच्च-तनन कोल्ड-रोल्ड स्टील से सीएनसी लेजर कट और रोबोटिकली बेंट किए जाते हैं। इसके बाद रासायनिक डी-ग्रीसिंग, डि-रस्टिंग और जिंक फॉस्फेटिंग की 7-स्तरीय प्रक्रिया से स्टील के छिद्रों को पूरी तरह सील किया जाता है।"
                  : "Unlike commercial cabinets built from thin sheet metal, our structural housings use CNC laser-cut 3.0mm cold-rolled steel with reinforced internal gussets. Raw steel undergoes an automated 7-tank immersion sequence: alkaline degreasing, acid pickling, passivation, and micro-crystalline zinc phosphating before coating."}
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-gray-200 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-[#ff3131] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      {lang === "hi" ? "शुद्ध पॉलिएस्टर पाउडर कोटिंग (100µm)" : "Pure Polyester TGIC-Free Powder Coat (100µm)"}
                    </h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      {lang === "hi"
                        ? "200°C पर ओवन में पकाई गई कोटिंग पराबैंगनी (UV) किरणों और चाक-अप से पूर्ण सुरक्षा देती है।"
                        : "Cured at 200°C for exceptional UV degradation resistance, preventing gloss loss and surface chalking in harsh sun."}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-gray-200 flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-[#ff3131] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      {lang === "hi" ? "साल्ट स्प्रे ASTM B117 परीक्षण > 1000 घंटे" : "Salt Fog Endurance Exceeding 1,000 Hours"}
                    </h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      {lang === "hi"
                        ? "तटीय समुद्री खारे पानी और नमक की धुंध वाले क्षेत्रों में बिना जंग लगे दशकों तक टिकाऊ।"
                        : "Laboratory certified under 5% sodium chloride continuous fog, ensuring coastal railway line survival."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-[#f8f9fa] border border-gray-200 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">
                  {lang === "hi" ? "मल्टी-लेयर कोटिंग क्रॉस-सेक्शन" : "7-STAGE COATING CROSS-SECTION STACK"}
                </h3>
                <div className="space-y-3 font-sans text-xs">
                  <div className="p-3 bg-red-600 text-white rounded-xl shadow-sm flex items-center justify-between">
                    <span className="font-bold">Layer 4: Pure Polyester UV-Resistant Topcoat</span>
                    <span className="font-mono text-[11px] opacity-90">80 - 100 µm</span>
                  </div>
                  <div className="p-3 bg-red-100 text-red-950 rounded-xl border border-red-200 flex items-center justify-between">
                    <span className="font-bold">Layer 3: Micro-Crystalline Zinc Phosphate Conversion</span>
                    <span className="font-mono text-[11px]">3 - 5 µm</span>
                  </div>
                  <div className="p-3 bg-gray-200 text-gray-800 rounded-xl flex items-center justify-between">
                    <span className="font-bold">Layer 2: Passivated Chemical Etched Boundary</span>
                    <span className="font-mono text-[11px]">Molecular Bond</span>
                  </div>
                  <div className="p-4 bg-gray-900 text-white rounded-xl flex items-center justify-between">
                    <span className="font-bold text-sm">Layer 1: 3.0mm Heavy Cold-Rolled Structural Steel Core</span>
                    <span className="font-mono text-xs text-red-400 font-bold">3,000 µm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Deep-Dive Section 2: Thermal Management & Anti-Condensation */}
      <section id="thermal" className="py-16 sm:py-24 bg-[#f8f9fb] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3131] mb-2 block">
              {lang === "hi" ? "चरण 02 : थर्मल एवं कंडेनसेशन नियंत्रण" : "STAGE 02 : THERMAL MANAGEMENT & ANTI-CONDENSATION"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-950 tracking-tight">
              {lang === "hi"
                ? "सर्दियों में ओस बिंदु एवं गर्मियों में ओवरहीटिंग से पूर्ण सुरक्षा"
                : "-25°C Frost to +70°C Desert Ambient Regulation"}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              {lang === "hi"
                ? "इलेक्ट्रिकल सबस्टेशनों और खुले रेलवे ट्रैक पर सुबह और रात के तापमान में भारी अंतर के कारण आंतरिक नमी बनती है। हमारा थर्मोस्टेटिक हीटर ओस बिंदु को बनने से रोकता है।"
                : "Rapid day-to-night temperature swings cause internal enclosure condensation, which causes flashovers on sensitive control circuit boards. Our integrated self-regulating PTC heater maintains positive internal temperature and evaporates moisture before dew-point saturation occurs."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#ff3131] flex items-center justify-center font-bold mb-4">
                🔥
              </div>
              <h3 className="text-base font-bold text-gray-950 mb-2">
                {lang === "hi" ? "50W PTC थर्मोस्टेटिक हीटर" : "Self-Regulating PTC Heater"}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {lang === "hi"
                  ? "जैसे ही तापमान +5°C से नीचे जाता है, हीटर स्वतः सक्रिय होकर आंतरिक आर्द्रता को 40% से नीचे रखता है।"
                  : "Dynamic resistance automatically increases heat output as temperature plummets, preventing freezing of mechanical linkages."}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#ff3131] flex items-center justify-center font-bold mb-4">
                🌀
              </div>
              <h3 className="text-base font-bold text-gray-950 mb-2">
                {lang === "hi" ? "हाइड्रोफोबिक लैबिरिंथ वेंट" : "Hydrophobic Labyrinth Vents"}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {lang === "hi"
                  ? "हवा के दबाव को संतुलित करने के लिए विशेष भूलभुलैया वेंट जो पानी की तेज बौछार को अंदर नहीं जाने देते।"
                  : "Pressure compensation membranes permit internal thermal breathing while halting micro-droplets and driving rain."}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#ff3131] flex items-center justify-center font-bold mb-4">
                🛡️
              </div>
              <h3 className="text-base font-bold text-gray-950 mb-2">
                {lang === "hi" ? "सिलिकॉन कन्फॉर्मल कोटिंग" : "Silicone PCB Conformal Coating"}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {lang === "hi"
                  ? "सभी इलेक्ट्रॉनिक सर्किट बोर्ड्स पर मिलिट्री-ग्रेड सिलिकॉन कोटिंग नमी, कवक और संक्षारक गैसों से सुरक्षा देती है।"
                  : "All microcontroller boards are dip-coated with MIL-I-46058C approved silicone against sulfurous industrial atmospheres."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Deep-Dive Section 3: Ingress Hardening & IP66 Gasketing */}
      <section id="ingress" className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100">
                <div
                  className="w-full h-80 sm:h-96 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/boom_barrier_railway.jpg')" }}
                />
                <div className="p-5 bg-white border-t border-gray-200">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-900">
                    <span>IP66 CONTINUOUS JET WATER RESISTANCE</span>
                    <span className="text-[#ff3131]">100 kPa NO INGRESS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff3131] mb-2 block">
                {lang === "hi" ? "चरण 03 : धूल एवं जल सुरक्षा" : "STAGE 03 : INGRESS & MONSOON HARDENING"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-950 tracking-tight mb-5 leading-tight">
                {lang === "hi"
                  ? "IP66 डुअल सीमलेस EPDM सीलिंग एवं ब्रास कम्प्रेशन ग्लैंड्स"
                  : "Seamless CNC EPDM Gasketing & IP68 Nickel-Plated Glands"}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 font-normal">
                {lang === "hi"
                  ? "कैबिनेट के दरवाजे में सीएनसी रोबोट द्वारा डिस्पेंस्ड कंटीन्यूअस EPDM रबर गैसकेट लगाई जाती है। यह गैसकेट किसी जोड़ के बिना दरवाजे को चारों तरफ से कस कर सील करती है।"
                  : "Rather than hand-glued foam strips that peel and degrade over time, our cabinet doors utilize CNC-dispensed continuous foamed EPDM polyurethane gasketing. The door compresses against a raised water diversion gutter, preventing direct jet impact on the seal interface."}
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center space-x-3 text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">✓</span>
                  <span>{lang === "hi" ? "वाटर डाइवर्जन गटर डिजाइन - बारिश के पानी को सीधे दूर बहाता है" : "Raised rainwater shed channel routes water away from the door seam"}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">✓</span>
                  <span>{lang === "hi" ? "IP68 निकल-प्लेटेड ब्रास केबल ग्लैंड प्लेट" : "Heavy brass compression cable entry glands prevent insect and moisture entry"}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">✓</span>
                  <span>{lang === "hi" ? "3-पॉइंट कम्प्रेशन कैम-लॉक सिस्टम" : "3-point heavy cam mechanism applies uniform pressure across perimeter"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Deep-Dive Section 4: Vibration & Shock Hardening */}
      <section id="vibration" className="py-16 sm:py-24 bg-[#f8f9fb] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3131] mb-2 block">
              {lang === "hi" ? "चरण 04 : कंपन एवं यांत्रिक शॉक" : "STAGE 04 : VIBRATION & TRACKSIDE SHOCK HARDENING"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-950 tracking-tight">
              {lang === "hi"
                ? "ट्रेन की गड़गड़ाहट और भारी औद्योगिक झटकों का स्थायी समाधान"
                : "Resonant Ground Vibration Dampening to IEC 60068-2-6"}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              {lang === "hi"
                ? "जब 120 किमी/घंटा की गति से मालगाड़ी ट्रैक से गुजरती है, तो ट्रैकसाइड उपकरणों को निरंतर तीव्र कंपन का सामना करना पड़ता है। हमारी आइसोलेशन माउंटिंग टर्मिनलों के ढीले होने को रोकती है।"
                : "Trackside equipment endures continuous low-frequency harmonic resonance generated by heavy axle train bogies. Our internal components are mounted on elastomer vibration dampening bushings with thread-locking fasteners."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200">
              <h3 className="text-base font-bold text-gray-950 mb-3 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#ff3131]" />
                <span>{lang === "hi" ? "स्प्रिंग-लोडेड केज क्लैंप टर्मिनल्स" : "Vibration-Proof Cage Clamp Terminals"}</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {lang === "hi"
                  ? "पारंपरिक स्क्रू टर्मिनलों के विपरीत जो कंपन से ढीले हो जाते हैं, हमारे केज क्लैंप टर्मिनल्स निरंतर दबाव बनाए रखते हैं और कभी स्पार्किंग नहीं करते।"
                  : "Gas-tight cage clamp spring terminals maintain constant tension on wire strands regardless of shock, eliminating high-resistance contact arcs."}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200">
              <h3 className="text-base font-bold text-gray-950 mb-3 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#ff3131]" />
                <span>{lang === "hi" ? "IK10 यांत्रिक संघात प्रतिरोध" : "IK10 Impact Shielding (20 Joules)"}</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {lang === "hi"
                  ? "ट्रैक पर उड़ने वाली गिट्टी (बैलास्ट स्टोन) या सड़क पर आकस्मिक धक्कों से आंतरिक उपकरणों को कोई नुकसान नहीं पहुंचता।"
                  : "High-yield cold-rolled casing protects internal electronics against flying track ballast and vandalism up to 20 Joules of localized impact."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Environmental Matrix Table */}
      <section id="environmental-matrix" className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3131] mb-2 block">
              {lang === "hi" ? "परीक्षण एवं मानक" : "ENVIRONMENTAL COMPLIANCE MATRIX"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-950 tracking-tight">
              {lang === "hi"
                ? "पर्यावरणीय तनाव परीक्षण विनिर्देश तालिका"
                : "Environmental Stress Verification & Laboratory Ratings"}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {lang === "hi"
                ? "प्रत्येक पैरामीटर मान्यता प्राप्त प्रयोगशालाओं में कठोर परीक्षण के बाद प्रमाणित किया गया है।"
                : "All ratings independently validated in climate chambers in accordance with Indian Railway and global standards."}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-950 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-4 px-5">{lang === "hi" ? "पर्यावरणीय परीक्षण" : "Stress Test"}</th>
                  <th className="py-4 px-5">{lang === "hi" ? "परीक्षण मानक" : "Standard"}</th>
                  <th className="py-4 px-5">{lang === "hi" ? "रेटिंग" : "Rating"}</th>
                  <th className="py-4 px-5 text-[#ff3131]">{lang === "hi" ? "इंजीनियरिंग साक्ष्य" : "Verification Method"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {ENV_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-5 font-semibold text-gray-900">{row.test}</td>
                    <td className="py-4 px-5 text-gray-600 font-mono">{row.standard}</td>
                    <td className="py-4 px-5 font-bold text-gray-950">{row.rating}</td>
                    <td className="py-4 px-5 text-gray-700">{row.evidence}</td>
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
                  ? "कठिन पर्यावरण एनक्लोजर विनिर्देश एवं ड्राइंग प्राप्त करें"
                  : "Request Enclosure CAD Drawings & Environmental Test Reports"}
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                {lang === "hi"
                  ? "विशिष्ट तटीय, मरुस्थलीय अथवा अत्यधिक तापमान परियोजनाओं के लिए हमारे विशेषज्ञों से सलाह लें।"
                  : "Our mechanical systems engineers will provide 3D step models, foundation drawings, and coating certs for your project."}
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-green-50 border border-green-200 rounded-2xl text-center max-w-lg mx-auto">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-green-900 mb-2">
                  {lang === "hi" ? "अनुरोध सफलतापूर्वक भेजा गया!" : "Specification Request Dispatched"}
                </h3>
                <p className="text-xs sm:text-sm text-green-700">
                  {lang === "hi"
                    ? "हमारे एनक्लोजर इंजीनियरिंग विशेषज्ञ 24 व्यावसायिक घंटों के भीतर तकनीकी डॉक्स के साथ संपर्क करेंगे।"
                    : "A structural enclosure specialist will reach out with mechanical drawings within 24 business hours."}
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
                    placeholder="e.g. Alok Mishra"
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
                    placeholder="name@infrastructure.com"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#ff3131] focus:ring-1 focus:ring-[#ff3131]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    {lang === "hi" ? "कंपनी / विभाग *" : "Company / Division *"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tata Projects / RVNL"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#ff3131] focus:ring-1 focus:ring-[#ff3131]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    {lang === "hi" ? "पर्यावरणीय चुनौती *" : "Target Environmental Stress *"}
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#ff3131] focus:ring-1 focus:ring-[#ff3131]"
                  >
                    <option value="">Select Primary Condition</option>
                    <option value="coastal">Coastal / High Salinity (ASTM B117)</option>
                    <option value="desert">Desert / High Dust & Heat (+70°C)</option>
                    <option value="subzero">Sub-Zero Mountain Rail (-25°C Frost)</option>
                    <option value="chemical">Heavy Chemical Plant Splash</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    {lang === "hi" ? "विशिष्ट माउंटिंग एवं डायमेंशन नोट्स" : "Mounting, Plinth & Gland Requirements"}
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Detail foundation plinth specifications, cable entry gland sizes, or custom RAL color codes..."
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#ff3131] focus:ring-1 focus:ring-[#ff3131]"
                  />
                </div>
                <div className="sm:col-span-2 text-center pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#ff3131] hover:bg-[#d62828] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    {lang === "hi" ? "एनक्लोजर विनिर्देश प्राप्त करें" : "Request Enclosure Specifications"}
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

export default function RuggedIndustrialConstructionPage() {
  return (
    <LanguageProvider>
      <RuggedIndustrialConstructionContent />
    </LanguageProvider>
  );
}

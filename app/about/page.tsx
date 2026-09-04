"use client";

import React, { useState, useEffect } from "react";
import AramcoHeader from "../components/AramcoHeader";
import Footer from "../components/Footer";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";

function AboutUsContent() {
  const { lang } = useLanguage();
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Auto-redirect to Home page when user refreshes the page
  useEffect(() => {
    try {
      const navEntries = window.performance?.getEntriesByType?.("navigation");
      const isReload =
        (navEntries && navEntries.length > 0 && (navEntries[0] as PerformanceNavigationTiming).type === "reload") ||
        (window.performance && (window.performance as any).navigation?.type === 1);

      if (isReload) {
        window.location.replace("/");
      }
    } catch {
      // Ignore
    }
  }, []);

  const STATS = [
    {
      value: "90+",
      label: lang === "hi" ? "वर्षों की उत्कृष्टता और नेतृत्व" : "Years of Excellence",
      sub: lang === "hi" ? "1933 से" : "Since 1933",
    },
    {
      value: "70,000+",
      label: lang === "hi" ? "वैश्विक कार्यबल" : "Global Workforce",
      sub: lang === "hi" ? "कुशल पेशेवर" : "Skilled Professionals",
    },
    {
      value: "2,000+",
      label: lang === "hi" ? "वैश्विक पेटेंट और नवाचार" : "Global Patents",
      sub: lang === "hi" ? "उन्नत ऊर्जा प्रौद्योगिकी" : "Proprietary Tech",
    },
    {
      value: "50+",
      label: lang === "hi" ? "देशों में वैश्विक उपस्थिति" : "Countries Served",
      sub: lang === "hi" ? "विश्वसनीय आपूर्ति श्रृंखला" : "Worldwide Reach",
    },
  ];

  const LEADERS = [
    {
      id: "amin-nasser",
      name: lang === "hi" ? "अमीन एच. नासिर" : "Amin H. Nasser",
      title: lang === "hi" ? "अध्यक्ष एवं मुख्य कार्यकारी अधिकारी (CEO)" : "President & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "ziad-murshed",
      name: lang === "hi" ? "ज़ियाद टी. अल-मुर्शेद" : "Ziad T. Al-Murshed",
      title: lang === "hi" ? "कार्यकारी उपाध्यक्ष एवं मुख्य वित्तीय अधिकारी (CFO)" : "EVP & Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "nasir-naimi",
      name: lang === "hi" ? "नासिर के. अल-नईमी" : "Nasir K. Al-Naimi",
      title: lang === "hi" ? "अध्यक्ष, अपस्ट्रीम" : "President, Upstream",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "noura-qahtani",
      name: lang === "hi" ? "डॉ. नूरा अल-क़हतानी" : "Dr. Noura Al-Qahtani",
      title: lang === "hi" ? "उपाध्यक्ष, ऊर्जा दक्षता एवं स्थिरता" : "VP, Energy & Sustainability",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#100305] text-white font-sans selection:bg-red-600 selection:text-white">
      {/* 1. Transparent / Sticky Aramco Header */}
      <AramcoHeader />

      {/* 
        =======================================================================
        HERO SECTION: Rich Crimson-Maroon & Obsidian Gradient with White Accents
        =======================================================================
      */}
      <section className="relative w-full pt-36 sm:pt-44 pb-20 sm:pb-28 bg-gradient-to-b from-[#1a0407] via-[#2a060d] to-[#1a0407] text-white overflow-hidden">
        
        {/* Visible Ambient Crimson Glows & Starlight Pattern */}
        <div className="absolute top-10 left-1/4 w-[36rem] h-[26rem] bg-red-600/25 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[30rem] h-[24rem] bg-rose-700/20 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Breadcrumb with White & Red Shade */}
              <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-wider mb-6">
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  {lang === "hi" ? "मुख्य पृष्ठ" : "Home"}
                </a>
                <span className="text-red-400">/</span>
                <span className="text-white px-3 py-1 rounded-full bg-red-600/30 border border-red-500/50 font-medium shadow-md">
                  <span className="inline-block w-2 h-2 rounded-full bg-red-400 mr-2 animate-pulse" />
                  {lang === "hi" ? "हमारे बारे में" : "About Us"}
                </span>
              </div>

              {/* Title with White & Crimson Red Gradient */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15] text-white mb-6 font-sans">
                {lang === "hi" ? (
                  <>
                    प्रगति को गति देना और <br />
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-red-400">
                      ऊर्जा उत्कृष्टता
                    </span>
                  </>
                ) : (
                  <>
                    Powering Progress & <br />
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-200 to-red-400">
                      Energy Excellence
                    </span>
                  </>
                )}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl mb-8 font-light">
                {lang === "hi"
                  ? "अरामको में, हम मानव प्रगति को गति देने और समुदायों के उत्थान के लिए ऊर्जा की परिवर्तनकारी शक्ति में विश्वास करते हैं। हमारे विश्व स्तरीय कार्यबल और इंजीनियरिंग उत्कृष्टता के प्रति अटूट प्रतिबद्धता के साथ, हम विश्वसनीय और कम कार्बन ऊर्जा समाधान प्रदान करते हैं।"
                  : "At Aramco, we believe in the transformative power of energy to uplift communities and drive human progress worldwide. With our world-class workforce and unwavering commitment to engineering excellence, we deliver reliable, lower-carbon energy solutions that stand the test of time."}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#mission"
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-red-600 via-red-700 to-rose-800 text-white font-medium text-sm sm:text-base hover:brightness-110 transition-all shadow-xl shadow-red-950/60 border border-red-400/40 cursor-pointer"
                >
                  {lang === "hi" ? "हमारा मिशन और विजन देखें" : "Discover Our Mission"}
                </a>
                <a
                  href="#history"
                  className="px-6 py-3.5 rounded-full bg-white/10 border border-white/30 text-white font-medium text-sm sm:text-base hover:bg-white/20 transition-all shadow-md backdrop-blur-sm cursor-pointer"
                >
                  {lang === "hi" ? "हमारी विरासत" : "Our Heritage"}
                </a>
              </div>
            </div>

            {/* Right Image Composition with Red-Tinted Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Large Image */}
                <div className="w-full h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-2 border-red-500/40 relative group bg-[#1a0407]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                    alt="Aramco Refinery Operations"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0407]/90 via-transparent to-black/20" />
                </div>

                {/* Rotating Circular Seal / Badge with Vibrant Red & White Ring */}
                <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#1a0407] text-white shadow-2xl p-1.5 flex items-center justify-center border-2 border-red-500/70 z-20">
                  <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-red-600 via-rose-700 to-red-400 flex items-center justify-center text-white text-center p-2 shadow-inner">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-white drop-shadow-md animate-pulse" fill="currentColor">
                      <path d="M12 2L14.2 8.5L20.8 6.8L16.2 12L20.8 17.2L14.2 15.5L12 22L9.8 15.5L3.2 17.2L7.8 12L3.2 6.8L9.8 8.5L12 2Z" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 2: Big Mission Statement Banner + 4 Stats Grid (Rich Crimson Red)
        =======================================================================
      */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#1a0407] via-[#24060b] to-[#180305] border-y border-red-900/40 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-100 leading-relaxed font-light mb-16">
            {lang === "hi" ? (
              <>
                <span className="font-semibold text-white">अरामको</span> में, हम नवाचार, स्थिरता और विश्वसनीयता के साथ दुनिया को ऊर्जा प्रदान करने के लिए प्रतिबद्ध हैं। वैश्विक ऊर्जा आपूर्ति में एक सिद्ध ट्रैक रिकॉर्ड के साथ, हम{" "}
                <span className="font-semibold text-white border-b-2 border-red-500">अत्याधुनिक तकनीक</span>, कुशल इंजीनियरिंग विशेषज्ञता और ग्राहक-केंद्रित दृष्टिकोण का संयोजन करते हैं।
              </>
            ) : (
              <>
                At <span className="font-semibold text-white">Aramco</span>, we are committed to energizing the world with innovative, sustainable, and reliable energy solutions. With a proven track record in global energy supply, we combine{" "}
                <span className="font-semibold text-white border-b-2 border-red-500">state-of-the-art technology</span>, skilled engineering expertise, and customer-centric approaches to bring visions to life.
              </>
            )}
          </p>

          {/* 4 Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-10 border-t border-red-800/30">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-5 rounded-2xl bg-gradient-to-b from-[#2b080f]/80 to-[#180306]/90 border border-red-500/30 hover:border-red-400/50 transition-all shadow-xl backdrop-blur-sm"
              >
                <div className="text-4xl sm:text-5xl font-light tracking-tight mb-2 font-sans text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-red-400">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white text-center mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-gray-300 text-center">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 3: Our Mission (Left Blueprint + Right Mission Text)
        =======================================================================
      */}
      <section id="mission" className="py-20 sm:py-28 bg-gradient-to-b from-[#180305] via-[#22050a] to-[#160306] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Multi-Photo Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative">
                {/* Background Blueprint / Plant Card */}
                <div className="w-[85%] h-[280px] sm:h-[340px] rounded-3xl overflow-hidden shadow-2xl border-2 border-red-500/40 bg-[#1a0407]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                    alt="Energy Engineering Blueprint"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#160306]/80 via-transparent to-red-950/20" />
                </div>

                {/* Overlapping Foreground Card */}
                <div className="absolute -bottom-10 -right-2 sm:-right-6 w-[65%] h-[240px] sm:h-[290px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/40 bg-[#1a0407]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80"
                    alt="Aramco Offshore Engineers"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 pt-10 lg:pt-0">
              <span className="text-xs font-bold tracking-widest text-red-400 uppercase mb-3 block">
                {lang === "hi" ? "हमारा उद्देश्य" : "OUR PURPOSE"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-white leading-tight mb-6 font-sans">
                {lang === "hi" ? "हमारा मिशन" : "Our Mission"}
              </h2>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-8 font-light">
                {lang === "hi"
                  ? "निरंतर नवाचार और गुणवत्ता के माध्यम से ग्राहकों की अपेक्षाओं से बढ़कर विश्वसनीय, किफायती और टिकाऊ ऊर्जा और रासायनिक समाधान प्रदान करना। हम स्थायी साझेदारी बनाने और समुदायों के विकास में योगदान देने का प्रयास करते हैं।"
                  : "To provide reliable, affordable, and sustainable energy and chemical solutions that exceed client expectations through continuous innovation and quality. We aim to build lasting relationships that inspire and improve the lives of our global partners and communities."}
              </p>

              {/* Checklist Items */}
              <div className="space-y-4">
                {[
                  lang === "hi" ? "सतत विकास और कम कार्बन ऊर्जा को बढ़ावा देना" : "Fostering Sustainable Growth and Lower-Carbon Energy",
                  lang === "hi" ? "एक टिकाऊ और लचीले भविष्य के लिए निरंतर नवाचार" : "Innovating for a Sustainable & Resilient Future",
                  lang === "hi" ? "ग्राहक-केंद्रित आपूर्ति और वैश्विक साझेदारियां" : "Customer-Centric Supply & Global Partnerships",
                  lang === "hi" ? "समुदायों और औद्योगिक आपूर्ति श्रृंखलाओं का सशक्तिकरण" : "Empowering Communities & Industrial Supply Chains",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 p-3 rounded-xl bg-[#28070d]/60 border border-red-500/25 hover:border-red-400/40 transition-all">
                    <span className="w-5 h-5 rounded-full bg-red-600/30 text-red-400 border border-red-500/50 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-sm sm:text-base font-normal text-gray-100">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 4: Our Vision (Dual Layered Photos: Surveyors & Engineers)
        =======================================================================
      */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#160306] via-[#26060c] to-[#140305] overflow-hidden border-t border-red-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Text */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-widest text-red-400 uppercase mb-3 block">
                {lang === "hi" ? "वैश्विक दृष्टि" : "GLOBAL VISION"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-white leading-tight mb-6 font-sans">
                {lang === "hi" ? "हमारा विजन: एकीकृत ऊर्जा में अग्रणी" : "Our Vision"}
              </h2>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-8 font-light">
                {lang === "hi"
                  ? "हमारा दृष्टिकोण दुनिया का सबसे प्रमुख एकीकृत ऊर्जा और रसायन उद्यम बनना है, जो वैश्विक सामग्री संक्रमण का नेतृत्व करे और आने वाली पीढ़ियों के लिए सतत समृद्धि और मूल्य प्रदान करे।"
                  : "Our vision is to be the world's pre-eminent integrated energy and chemicals enterprise, leading the global materials transition and delivering sustainable prosperity for generations to come."}
              </p>

              {/* Checklist Items */}
              <div className="space-y-4">
                {[
                  lang === "hi" ? "उन्नत ऊर्जा अवसंरचना और इंजीनियरिंग में अग्रणी" : "Pioneering Advanced Energy Infrastructure",
                  lang === "hi" ? "गैर-धातु सामग्री और समग्र समाधानों का नेतृत्व" : "Advancing Non-Metallic Materials & Composite Solutions",
                  lang === "hi" ? "सटीक पेट्रोलियम भूवैज्ञानिक सर्वेक्षण और स्मार्ट अन्वेषण" : "Precision Petroleum Geological Surveying & Smart Exploration",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 p-3 rounded-xl bg-[#28070d]/60 border border-red-500/25 hover:border-red-400/40 transition-all">
                    <span className="w-5 h-5 rounded-full bg-red-600/30 text-red-400 border border-red-500/50 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-sm sm:text-base font-normal text-gray-100">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Photo Composition: Dual Layered Aramco Petroleum Geologists & Field Surveyors */}
            <div className="lg:col-span-6 relative">
              <div className="relative">
                
                {/* Main Card: Aramco Petroleum Geologists & Field Surveyors with Theodolite */}
                <div className="w-[90%] h-[340px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-2 border-red-500/50 relative group bg-[#1a0407]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/aramco_petroleum_surveyors.jpg"
                    alt="Aramco Petroleum Geologists & Field Surveyors"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-red-950/20" />

                  {/* Animated High-Tech Radar Scan Overlay */}
                  <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-red-500/80 flex items-center justify-center animate-ping pointer-events-none" />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-red-500/50 text-xs text-white flex items-center space-x-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                    <span>{lang === "hi" ? "सक्रिय भूवैज्ञानिक क्षेत्र सर्वेक्षण" : "Active Geological Field Survey"}</span>
                  </div>
                </div>

                {/* Overlapping Foreground Card */}
                <div className="absolute -bottom-8 -right-2 sm:-right-6 w-[62%] h-[220px] sm:h-[260px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/50 group bg-[#1a0407]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/aramco_refinery_engineers_laptop.jpg"
                    alt="Aramco Refinery Engineers Reviewing Data"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 5: Our History (Left Historic Crew + Right History Timeline)
        =======================================================================
      */}
      <section id="history" className="py-20 sm:py-28 bg-gradient-to-b from-[#140305] via-[#1e0509] to-[#120204] border-t border-red-900/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Photo Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative">
                <div className="w-full h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-2 border-red-500/40 bg-[#1a0407]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80"
                    alt="Aramco History and Drilling Legacy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-red-950/20" />
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-widest text-red-400 uppercase mb-3 block">
                {lang === "hi" ? "हमारी विरासत" : "OUR HERITAGE"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-white leading-tight mb-6 font-sans">
                {lang === "hi" ? "हमारा इतिहास: दशकों की उपलब्धि और नेतृत्व" : "Our History"}
              </h2>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-8 font-light">
                {lang === "hi"
                  ? "गुणवत्ता और नवाचार के प्रति प्रतिबद्धता पर स्थापित, अरामको की यात्रा 1933 में एक साहसिक दृष्टिकोण और 1938 में दम्माम वेल नंबर 7 की ऐतिहासिक खोज के साथ शुरू हुई। दशकों में, हम दुनिया के अग्रणी ऊर्जा उत्पादक बन गए हैं।"
                  : "Founded on a commitment to quality and innovation, Aramco began with a bold vision in 1933 and the discovery of prosperity at Dammam Well No. 7 in 1938. Over the decades, we have grown into the world's leading energy producer, delivering exceptional value and powering human progress worldwide."}
              </p>

              {/* Checklist */}
              <div className="space-y-4">
                {[
                  lang === "hi" ? "विनम्र शुरुआत और 1938 में दम्माम वेल नंबर 7 की खोज" : "Humble Beginnings & Dammam Well No. 7",
                  lang === "hi" ? "ऐतिहासिक मील के पत्थर और वैश्विक रासायनिक विस्तार" : "Milestones & Global Chemicals Expansions",
                  lang === "hi" ? "विश्वास और विश्वसनीयता की वैश्विक विरासत का निर्माण" : "Building a Worldwide Legacy of Trust",
                  lang === "hi" ? "विरासत की जड़ों के साथ ऊर्जा के भविष्य को आकार देना" : "Shaping the Energy Future, Rooted in Heritage",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 p-3 rounded-xl bg-[#28070d]/60 border border-red-500/25 hover:border-red-400/40 transition-all">
                    <span className="w-5 h-5 rounded-full bg-red-600/30 text-red-400 border border-red-500/50 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-sm sm:text-base font-normal text-gray-100">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 6: How We Work (Video Banner with Crimson Backdrop)
        =======================================================================
      */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#120204] via-[#20050a] to-[#100305] border-t border-red-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="text-xs font-bold tracking-widest text-red-400 uppercase mb-3 block">
            {lang === "hi" ? "परिचालन उत्कृष्टता" : "OPERATIONAL EXCELLENCE"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-white leading-tight mb-4 font-sans">
            {lang === "hi" ? "अरामको में हमारा कार्य मॉडल" : "How We Do Work"}
          </h2>
          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
            {lang === "hi"
              ? "हम सुरक्षित, पारदर्शी और सहयोगी प्रक्रियाओं का पालन करते हैं, जो भंडार की खोज से लेकर वैश्विक वितरण तक हर चरण में गुणवत्ता और सटीकता सुनिश्चित करती हैं।"
              : "We follow a collaborative, safe, and transparent process, ensuring clear execution at every stage from reservoir exploration to global delivery."}
          </p>

          {/* Featured Video / Photo Container */}
          <div
            onClick={() => setIsPlayingVideo(true)}
            className="relative w-full max-w-5xl mx-auto h-[340px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border-2 border-red-500/50 bg-[#1a0407]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=80"
              alt="How We Work Video Thumbnail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-red-950/30 group-hover:bg-black/40 transition-colors" />

            {/* Play Button with Crimson & White Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-red-600 via-red-500 to-rose-400 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform border-2 border-white/80">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 
        =======================================================================
        SECTION 7: Leadership Team (Crafting Excellence as a Team)
        =======================================================================
      */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#100305] via-[#1a0408] to-[#0c0204] border-t border-red-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14">
            <div>
              <span className="text-xs font-bold tracking-widest text-red-400 uppercase mb-2 block">
                {lang === "hi" ? "नेतृत्व" : "LEADERSHIP"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-white leading-tight font-sans">
                {lang === "hi" ? "एक टीम के रूप में उत्कृष्टता का निर्माण" : "Crafting Excellence as a Team"}
              </h2>
              <p className="text-sm text-gray-300 mt-2 max-w-xl font-light">
                {lang === "hi"
                  ? "हमारी सफलता हमारे कार्यकारी नेतृत्व के समर्पण और विशेषज्ञता पर आधारित है जो वैश्विक ऊर्जा पहलों का मार्गदर्शन करते हैं।"
                  : "Our success is built on the dedication and expertise of our executive leaders who steer global energy initiatives."}
              </p>
            </div>

            <a
              href="#leadership-all"
              className="mt-6 sm:mt-0 inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-rose-700 text-white text-xs sm:text-sm font-semibold hover:brightness-110 transition-all shadow-lg border border-red-400/40 self-start sm:self-auto cursor-pointer"
            >
              {lang === "hi" ? "सभी नेतृत्व देखें" : "Explore All Leadership"}
            </a>
          </div>

          {/* 4 Leaders Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERS.map((leader) => (
              <div
                key={leader.id}
                className="bg-gradient-to-b from-[#24060c] to-[#120204] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-950/60 transition-all duration-300 hover:-translate-y-1.5 border border-red-500/30 group flex flex-col justify-between"
              >
                <div className="w-full h-64 overflow-hidden relative bg-[#120204]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120204] via-transparent to-transparent opacity-70 group-hover:opacity-30 transition-opacity" />
                </div>

                <div className="p-6 text-start">
                  <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 leading-snug">
                    {leader.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Video Modal */}
      {isPlayingVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl bg-[#1a0407] rounded-2xl overflow-hidden shadow-2xl border-2 border-red-500/50">
            <button
              onClick={() => setIsPlayingVideo(false)}
              className="absolute top-4 right-4 z-20 text-white/80 hover:text-white bg-black/70 p-2 rounded-full hover:bg-black/90 transition-colors cursor-pointer"
              aria-label="Close video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative pt-[56.25%] w-full">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Aramco Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function AboutPage() {
  return (
    <LanguageProvider>
      <AboutUsContent />
    </LanguageProvider>
  );
}

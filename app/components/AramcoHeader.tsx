"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import GlobalLogo from "./GlobalLogo";

const REGIONS_LIST = [
  {
    name: "Global",
    languages: [
      { label: "English", code: "en" },
      { label: "العربية", code: "ar" },
    ],
  },
  {
    name: "Americas",
    languages: [{ label: "English", code: "en" }],
  },
  {
    name: "China",
    languages: [
      { label: "English", code: "en" },
      { label: "中文(中国)", code: "zh" },
    ],
  },
  {
    name: "Europe",
    languages: [{ label: "English", code: "en" }],
  },
  {
    name: "Poland",
    languages: [
      { label: "English", code: "en" },
      { label: "polski", code: "pl" },
    ],
  },
  {
    name: "India",
    languages: [{ label: "English", code: "en" }],
  },
  {
    name: "Japan",
    languages: [
      { label: "English", code: "en" },
      { label: "日本語", code: "ja" },
    ],
  },
  {
    name: "Korea",
    languages: [
      { label: "English", code: "en" },
      { label: "한국어", code: "ko" },
    ],
  },
  {
    name: "Malaysia",
    languages: [{ label: "English", code: "en" }],
  },
  {
    name: "Singapore",
    languages: [{ label: "English", code: "en" }],
  },
];

interface SubmenuItem {
  name: string;
  href: string;
  hasSubmenu: boolean;
}

interface MenuItem {
  id: string;
  name: string;
  href: string;
  hasSubmenu: boolean;
  submenuItems?: SubmenuItem[];
}

interface DrawerCategory {
  title: string;
  items: MenuItem[];
}

const DRAWER_DATA_EN: Record<string, DrawerCategory> = {
  "what-we-do": {
    title: "Our Products",
    items: [
      {
        id: "railway-barrier",
        name: "Railway Barrier System",
        href: "#elements",
        hasSubmenu: true,
        submenuItems: [
          { name: "Fail-Safe Boom Mechanism", href: "#elements", hasSubmenu: false },
          { name: "Obstacle Detection Integration", href: "#elements", hasSubmenu: false },
          { name: "Power Backup & Manual Override", href: "#elements", hasSubmenu: false },
          { name: "Weatherproof Enclosure", href: "#elements", hasSubmenu: false },
        ],
      },
      {
        id: "earth-leakage",
        name: "Digital Earth Leakage Detector",
        href: "#elements",
        hasSubmenu: true,
        submenuItems: [
          { name: "Continuous Insulation Monitoring", href: "#elements", hasSubmenu: false },
          { name: "True RMS Current Measurement", href: "#elements", hasSubmenu: false },
          { name: "Real-Time Digital Display", href: "#elements", hasSubmenu: false },
          { name: "Adjustable Trip Thresholds", href: "#elements", hasSubmenu: false },
        ],
      },
    ],
  },
  capability: {
    title: "Engineering & Safety",
    items: [
      { id: "fail-safe", name: "Fail-Safe Architecture", href: "#environmental", hasSubmenu: false },
      { id: "rugged-build", name: "Rugged Industrial Construction", href: "#environmental", hasSubmenu: false },
      { id: "diagnostics", name: "Diagnostics & System Integration", href: "#environmental", hasSubmenu: false },
    ],
  },
  "news-media": {
    title: "Applications & Sectors",
    items: [
      { id: "level-crossings", name: "Railway Level Crossings", href: "#believe", hasSubmenu: false },
      { id: "industrial-panels", name: "Industrial Electrical Panels", href: "#believe", hasSubmenu: false },
      { id: "signalling-infra", name: "Signalling & Access Control", href: "#believe", hasSubmenu: false },
    ],
  },
  contact: {
    title: "Contact",
    items: [
      { id: "engineering-team", name: "Talk to Engineering", href: "#banner", hasSubmenu: false },
      { id: "quote-req", name: "Request a Quote", href: "#banner", hasSubmenu: false },
    ],
  },
  support: {
    title: "Technical Resources",
    items: [
      { id: "datasheets", name: "Product Datasheets", href: "#case-study", hasSubmenu: false },
      { id: "specifications", name: "Technical Specifications", href: "#case-study", hasSubmenu: false },
      { id: "installation-guides", name: "Installation & Wiring Guides", href: "#case-study", hasSubmenu: false },
    ],
  },
};

const DRAWER_DATA_HI: Record<string, DrawerCategory> = {
  "what-we-do": {
    title: "हमारे उत्पाद",
    items: [
      {
        id: "railway-barrier",
        name: "रेलवे बैरियर सिस्टम",
        href: "#elements",
        hasSubmenu: true,
        submenuItems: [
          { name: "सुरक्षित बूम तंत्र", href: "#elements", hasSubmenu: false },
          { name: "अवरोध पहचान एकीकरण", href: "#elements", hasSubmenu: false },
          { name: "पावर बैकअप एवं मैनुअल ओवरराइड", href: "#elements", hasSubmenu: false },
          { name: "वेदरप्रूफ एनक्लोजर", href: "#elements", hasSubmenu: false },
        ],
      },
      {
        id: "earth-leakage",
        name: "डिजिटल अर्थ लीकेज डिटेक्टर",
        href: "#elements",
        hasSubmenu: true,
        submenuItems: [
          { name: "निरंतर इंसुलेशन निगरानी", href: "#elements", hasSubmenu: false },
          { name: "ट्रू RMS करंट मापन", href: "#elements", hasSubmenu: false },
          { name: "रीयल-टाइम डिजिटल डिस्प्ले", href: "#elements", hasSubmenu: false },
          { name: "एडजस्टेबल ट्रिप थ्रेसहोल्ड", href: "#elements", hasSubmenu: false },
        ],
      },
    ],
  },
  capability: {
    title: "इंजीनियरिंग एवं सुरक्षा",
    items: [
      { id: "fail-safe", name: "फेल-सेफ आर्किटेक्चर", href: "#environmental", hasSubmenu: false },
      { id: "rugged-build", name: "मजबूत औद्योगिक निर्माण", href: "#environmental", hasSubmenu: false },
      { id: "diagnostics", name: "डायग्नोस्टिक्स एवं एकीकरण", href: "#environmental", hasSubmenu: false },
    ],
  },
  "news-media": {
    title: "अनुप्रयोग एवं क्षेत्र",
    items: [
      { id: "level-crossings", name: "रेलवे लेवल क्रॉसिंग", href: "#believe", hasSubmenu: false },
      { id: "industrial-panels", name: "औद्योगिक पावर पैनल", href: "#believe", hasSubmenu: false },
      { id: "signalling-infra", name: "सिग्नलिंग एवं पहुंच नियंत्रण", href: "#believe", hasSubmenu: false },
    ],
  },
  contact: {
    title: "संपर्क",
    items: [
      { id: "engineering-team", name: "इंजीनियरिंग टीम से बात करें", href: "#banner", hasSubmenu: false },
      { id: "quote-req", name: "कोटेशन का अनुरोध करें", href: "#banner", hasSubmenu: false },
    ],
  },
  support: {
    title: "तकनीकी संसाधन",
    items: [
      { id: "datasheets", name: "उत्पाद डेटाशीट", href: "#case-study", hasSubmenu: false },
      { id: "specifications", name: "तकनीकी विनिर्देश", href: "#case-study", hasSubmenu: false },
      { id: "installation-guides", name: "इंस्टॉलेशन एवं वायरिंग गाइड", href: "#case-study", hasSubmenu: false },
    ],
  },
};

export default function AramcoHeader() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDrawerId, setActiveDrawerId] = useState<string | null>(null);
  const [activeSubmenuId, setActiveSubmenuId] = useState<string | null>(null);
  const regionDropdownRef = useRef<HTMLDivElement>(null);
  
  // Live Scroll Progress Tracker & Sticky State
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);
      const scrolled = scrollY > 40;
      setIsScrolled(scrolled);
      if (scrolled) {
        setIsRegionOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click Outside to close region dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        regionDropdownRef.current &&
        !regionDropdownRef.current.contains(event.target as Node)
      ) {
        setIsRegionOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDrawer = (id: string) => {
    if (activeDrawerId === id) {
      setActiveDrawerId(null);
      setActiveSubmenuId(null);
    } else {
      setActiveDrawerId(id);
      setActiveSubmenuId(null); // Initially single drawer opens directly below navbar!
    }
    setIsMobileMenuOpen(false);
  };

  const closeDrawer = () => {
    setActiveDrawerId(null);
    setActiveSubmenuId(null);
  };

  const handleSubmenuToggle = (item: MenuItem) => {
    if (item.hasSubmenu) {
      setActiveSubmenuId((prev) => (prev === item.id ? null : item.id));
    } else {
      closeDrawer();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDrawer();
        setIsSearchOpen(false);
        setIsRegionOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleLanguageClick = (code: string) => {
    if (code === "hi") {
      setLang("hi");
    } else {
      setLang("en");
    }
    setIsRegionOpen(false);
  };

  const drawerData = lang === "hi" ? DRAWER_DATA_HI : DRAWER_DATA_EN;
  const currentDrawer = activeDrawerId ? drawerData[activeDrawerId] : null;
  const activeMenuItem = currentDrawer?.items.find((it) => it.id === activeSubmenuId);
  const hasSecondColumn = !!(activeMenuItem && activeMenuItem.submenuItems && activeMenuItem.submenuItems.length > 0);

  return (
    <>
      {/* 
        =======================================================================
        TOP LIVE SCROLL PROGRESS TRACKER BAR (Aramco Energy Gradient Line)
        =======================================================================
      */}
      <div
        className="fixed top-0 left-0 right-0 h-[3.5px] z-50 pointer-events-none bg-transparent"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-[#ff3131] via-[#e02020] to-[#b31b1b] transition-all duration-75 ease-out shadow-[0_0_10px_rgba(255,49,49,0.6)]"
          style={{
            width: `${scrollProgress}%`,
          }}
        />
      </div>

      {/* 
        =======================================================================
        STICKY HEADER (Remains at Top Z-50 Above the Drawer)
        =======================================================================
      */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 font-sans select-none ${
          isScrolled || activeDrawerId || pathname !== "/"
            ? "bg-[#111113] shadow-2xl text-white border-b border-white/10"
            : "bg-transparent text-white"
        }`}
      >
        
        {/* 1. TOP UTILITY ROW */}
        <div
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? "max-h-0 opacity-0 border-b border-transparent py-0 pointer-events-none overflow-hidden"
              : "max-h-12 opacity-100 border-b border-white/10 overflow-visible relative z-50"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-xs sm:text-[13px] relative overflow-visible">
            
            {/* Language Switcher & Global Contacts */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className="flex items-center space-x-2 text-xs">
                <button
                  onClick={() => setLang("hi")}
                  className={`transition-colors duration-200 hover:text-[#ff3131] font-medium cursor-pointer ${
                    lang === "hi" ? "text-[#ff3131] font-bold" : "text-white"
                  }`}
                >
                  हिन्दी
                </button>
                <span className="text-white/40">|</span>
                <button
                  onClick={() => setLang("en")}
                  className={`transition-colors duration-200 hover:text-[#ff3131] font-medium cursor-pointer ${
                    lang === "en" ? "text-[#ff3131] font-bold" : "text-white"
                  }`}
                >
                  English
                </button>
              </div>

              <a
                href="#global-contacts"
                className="text-white/90 hover:text-[#ff3131] transition-colors duration-200 text-xs sm:text-[13px] font-normal"
              >
                {t.globalContacts}
              </a>
            </div>

            {/* Region Selector & Accessibility */}
            <div className="flex items-center space-x-4 sm:space-x-5 relative" ref={regionDropdownRef}>
              <div className="relative">
                <button
                  onClick={() => setIsRegionOpen(!isRegionOpen)}
                  className="flex items-center space-x-1.5 sm:space-x-2 text-white/90 hover:text-white group transition-colors duration-200 cursor-pointer"
                  aria-expanded={isRegionOpen}
                >
                  <span className="text-xs sm:text-[13px] hidden sm:inline-block font-normal">
                    {lang === "hi" ? "आप ग्लोबल में हैं" : "You are in Global"}
                  </span>
                  <span className="text-xs sm:hidden font-normal">Global</span>

                  {/* Globe Icon */}
                  <svg className="w-4 h-4 text-white/90 group-hover:text-[#ff3131] transition-colors" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>

                  {/* Dropdown Chevron */}
                  <svg className={`w-3 h-3 text-white/80 transition-transform duration-200 ${isRegionOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Exact Region Card */}
                {isRegionOpen && (
                  <div
                    className="absolute top-full mt-2 w-[310px] sm:w-[370px] max-w-[calc(100vw-24px)] bg-white text-gray-900 rounded-[22px] shadow-[0_25px_60px_rgba(0,0,0,0.35)] px-6 sm:px-7 py-6 border border-gray-100/90 z-[9999] animate-in fade-in zoom-in-95 duration-150 -right-2 sm:right-0 origin-top-right select-none"
                  >
                    <div className="flex flex-col space-y-3 sm:space-y-3.5">
                      {REGIONS_LIST.map((region) => (
                        <div
                          key={region.name}
                          className="flex items-center justify-between text-[13.5px] sm:text-[15px]"
                        >
                          <span className="text-[#374151] font-normal tracking-tight">
                            {region.name}
                          </span>

                          <div className="flex items-center space-x-1 font-normal">
                            {region.languages.map((item, idx) => (
                              <React.Fragment key={item.code + item.label}>
                                {idx > 0 && (
                                  <span className="text-[#64748b] text-xs font-light mx-1">
                                    |
                                  </span>
                                )}
                                <button
                                  type="button"
                                  onClick={() => handleLanguageClick(item.code)}
                                  className="text-[#0284c7] hover:text-[#0369a1] underline underline-offset-2 transition-colors cursor-pointer"
                                >
                                  {item.label}
                                </button>
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Accessibility Icon */}
              <button
                aria-label="Accessibility settings"
                className="p-1 rounded text-white/90 hover:text-[#ff3131] transition-colors duration-200 cursor-pointer"
                title="Accessibility"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <circle cx="12" cy="4.5" r="2.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 9h16" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v11" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 20l4.5-5 4.5 5" />
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* 2. MAIN NAVIGATION ROW */}
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
            
            <div className="flex items-center space-x-6 xl:space-x-8">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-full text-white/90 hover:text-[#ff3131] hover:bg-white/10 transition-all duration-200 cursor-pointer flex items-center space-x-1"
                aria-label="Search"
                title="Search"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 8a3 3 0 0 0-3 3" />
                </svg>
              </button>

              {/* Navigation Links */}
              <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                {/* 1. ABOUT US */}
                <li>
                  <a
                    href="/about"
                    className="text-xs tracking-wider font-bold uppercase transition-all duration-200 cursor-pointer py-1 text-white/90 hover:text-[#ff3131] border-b-2 border-transparent hover:border-[#ff3131]"
                  >
                    {t.nav.about}
                  </a>
                </li>

                {/* 2. WHAT WE DO */}
                <li>
                  <button
                    onClick={() => toggleDrawer("what-we-do")}
                    className={`text-xs tracking-wider font-bold uppercase transition-all duration-200 cursor-pointer py-1 ${
                      activeDrawerId === "what-we-do"
                        ? "text-[#ff3131] font-bold border-b-2 border-[#ff3131]"
                        : "text-white/90 hover:text-[#ff3131] border-b-2 border-transparent"
                    }`}
                  >
                    {t.nav.whatWeDo}
                  </button>
                </li>

                {/* 3. CAPABILITY */}
                <li>
                  <button
                    onClick={() => toggleDrawer("capability")}
                    className={`text-xs tracking-wider font-bold uppercase transition-all duration-200 cursor-pointer py-1 ${
                      activeDrawerId === "capability"
                        ? "text-[#ff3131] font-bold border-b-2 border-[#ff3131]"
                        : "text-white/90 hover:text-[#ff3131] border-b-2 border-transparent"
                    }`}
                  >
                    {t.nav.capability}
                  </button>
                </li>

                {/* 4. NEWS & MEDIA */}
                <li>
                  <button
                    onClick={() => toggleDrawer("news-media")}
                    className={`text-xs tracking-wider font-bold uppercase transition-all duration-200 cursor-pointer py-1 ${
                      activeDrawerId === "news-media"
                        ? "text-[#ff3131] font-bold border-b-2 border-[#ff3131]"
                        : "text-white/90 hover:text-[#ff3131] border-b-2 border-transparent"
                    }`}
                  >
                    {t.nav.newsMedia}
                  </button>
                </li>

                {/* 5. CONTACT */}
                <li>
                  <button
                    onClick={() => toggleDrawer("contact")}
                    className={`text-xs tracking-wider font-bold uppercase transition-all duration-200 cursor-pointer py-1 ${
                      activeDrawerId === "contact"
                        ? "text-[#ff3131] font-bold border-b-2 border-[#ff3131]"
                        : "text-white/90 hover:text-[#ff3131] border-b-2 border-transparent"
                    }`}
                  >
                    {t.nav.contact}
                  </button>
                </li>

                {/* 6. SUPPORT */}
                <li>
                  <button
                    onClick={() => toggleDrawer("support")}
                    className={`text-xs tracking-wider font-bold uppercase transition-all duration-200 cursor-pointer py-1 ${
                      activeDrawerId === "support"
                        ? "text-[#ff3131] font-bold border-b-2 border-[#ff3131]"
                        : "text-white/90 hover:text-[#ff3131] border-b-2 border-transparent"
                    }`}
                  >
                    {t.nav.support}
                  </button>
                </li>
              </ul>
            </div>

            {/* Right Side: GLOBAL. Logo + Employee Login */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              <a href="/" className="flex items-center group cursor-pointer" aria-label="GLOBAL. Home">
                <GlobalLogo theme="dark" size="md" />
              </a>

              {/* Employee Login Button (Pill-shaped style with user icon, slightly larger size) */}
              <a
                href="/login"
                className="inline-flex items-center space-x-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/10 hover:bg-[#ff3131] border border-white/20 hover:border-[#ff3131] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-[0_0_18px_rgba(255,49,49,0.6)] group cursor-pointer"
                title="Employee Login"
              >
                <svg className="w-4 h-4 text-red-400 group-hover:text-white transition-colors flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{lang === "hi" ? "लॉगिन" : "Login"}</span>
              </a>

              {/* Mobile Hamburger Menu */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-[#ff3131] focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Search Popup */}
        {isSearchOpen && (
          <div className="bg-black/90 backdrop-blur-md border-t border-white/10 px-4 sm:px-8 py-3 animate-in fade-in duration-200">
            <div className="max-w-4xl mx-auto flex items-center bg-white/10 rounded-full px-4 py-2 border border-white/20">
              <svg className="w-5 h-5 text-gray-400 mr-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className="bg-transparent text-white w-full focus:outline-none text-sm placeholder-gray-400"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-400 hover:text-white text-xs px-2 cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#141414]/98 backdrop-blur-xl border-t border-white/10 px-5 py-5 max-h-[calc(100dvh-5rem)] overflow-y-auto shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Quick Mobile Language Switcher */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                {lang === "hi" ? "भाषा चुनें" : "Language"}
              </span>
              <div className="flex items-center space-x-2 text-xs">
                <button
                  onClick={() => setLang("hi")}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    lang === "hi"
                      ? "bg-[#ff3131] text-white font-bold"
                      : "bg-white/10 text-white/80"
                  }`}
                >
                  हिन्दी
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    lang === "en"
                      ? "bg-[#ff3131] text-white font-bold"
                      : "bg-white/10 text-white/80"
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Direct About Link */}
            <a
              href="/about"
              className="block w-full text-left text-sm font-bold tracking-wider uppercase text-white/90 hover:text-[#ff3131] py-2.5 border-b border-white/5 flex items-center justify-between"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>{t.nav.about}</span>
              <span className="text-red-500 font-bold">→</span>
            </a>

            {/* Accordion Categories */}
            {["what-we-do", "capability", "news-media", "contact", "support"].map((id) => {
              const category = drawerData[id];
              const isExpanded = activeDrawerId === id;
              const name =
                id === "what-we-do"
                  ? t.nav.whatWeDo
                  : id === "capability"
                  ? t.nav.capability
                  : id === "news-media"
                  ? t.nav.newsMedia
                  : id === "contact"
                  ? t.nav.contact
                  : t.nav.support;

              return (
                <div key={id} className="border-b border-white/5">
                  <button
                    onClick={() => setActiveDrawerId((prev) => (prev === id ? null : id))}
                    className="w-full text-left text-sm font-bold tracking-wider uppercase text-white/90 hover:text-[#ff3131] py-3 flex items-center justify-between cursor-pointer"
                  >
                    <span>{name}</span>
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        isExpanded ? "rotate-180 text-[#ff3131]" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Accordion Content */}
                  {isExpanded && category && (
                    <div className="pl-3 pb-3 pt-1 space-y-2.5 animate-in fade-in duration-150">
                      {category.items.map((item) => (
                        <div key={item.id} className="text-start">
                          <a
                            href={item.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setActiveDrawerId(null);
                            }}
                            className="block text-xs font-semibold text-gray-200 hover:text-[#ff3131] py-1 transition-colors"
                          >
                            • {item.name}
                          </a>
                          {item.submenuItems && item.submenuItems.length > 0 && (
                            <div className="pl-3 mt-1 space-y-1 border-l border-white/10">
                              {item.submenuItems.map((sub) => (
                                <a
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setActiveDrawerId(null);
                                  }}
                                  className="block text-[11px] text-gray-400 hover:text-white py-0.5"
                                >
                                  - {sub.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Quick Action CTA in Mobile Drawer */}
            <div className="pt-4 mt-2 space-y-2">
              <a
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-center text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{lang === "hi" ? "कर्मचारी लॉगिन (Login)" : "Employee Login"}</span>
              </a>
              <a
                href="#contact-engineering"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-2.5 rounded-full bg-[#ff3131] hover:bg-[#d62828] text-white text-center text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                {lang === "hi" ? "इंजीनियरिंग से बात करें" : "Talk to Engineering"}
              </a>
            </div>
          </div>
        )}

      </header>

      {/* 
        =======================================================================
        3. TWO-COLUMN FLYOUT DRAWER (STARTS DIRECTLY BELOW THE NAVBAR)
        =======================================================================
      */}
      
      {/* Backdrop Dimming Overlay over Page (Starting directly below navbar) */}
      {currentDrawer && (
        <div
          onClick={closeDrawer}
          className={`fixed inset-x-0 bottom-0 z-30 bg-black/75 backdrop-blur-[2px] transition-opacity duration-300 animate-in fade-in ${
            isScrolled ? "top-16 sm:top-20" : "top-[104px] sm:top-[120px]"
          }`}
          aria-hidden="true"
        />
      )}

      {/* Slide-over Multi-Panel Drawer starting below Navbar */}
      <aside
        className={`fixed bottom-0 z-40 flex shadow-2xl border-white/10 transition-all duration-300 ease-out font-sans ${
          isScrolled ? "top-16 sm:top-20" : "top-[104px] sm:top-[120px]"
        } left-0 border-r ${currentDrawer ? "translate-x-0" : "-translate-x-full"}`}
        aria-label="Multi-level navigation drawer"
      >
        {/* COLUMN 1: Main Category List */}
        <div className="w-[300px] sm:w-[350px] bg-[#1a1a1a] text-white pt-8 sm:pt-10 p-7 sm:p-9 flex flex-col justify-between overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden border-r border-white/10">
          <div>
            {/* Top Row: Red Close 'X' Button on Right (Shown when only Column 1 is open) */}
            {!hasSecondColumn && (
              <div className="flex justify-end mb-4">
                <button
                  onClick={closeDrawer}
                  className="text-[#ff3131] hover:text-[#f87171] p-1.5 rounded-full hover:bg-white/5 transition-all cursor-pointer group"
                  aria-label="Close menu"
                  title="Close"
                >
                  <svg
                    className="w-6 h-6 transition-transform group-hover:rotate-90 duration-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}

            {/* Section Heading */}
            <h3 className="text-xl sm:text-2xl font-medium text-white mb-8 tracking-tight font-sans">
              {currentDrawer?.title}
            </h3>

            {/* Menu Items List */}
            <ul className="space-y-6">
              {currentDrawer?.items.map((item) => {
                const isSelected = activeSubmenuId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleSubmenuToggle(item)}
                      className={`w-full flex items-center justify-between text-sm sm:text-[15px] group transition-all duration-200 cursor-pointer text-start ${
                        isSelected
                          ? "text-[#ff3131] font-medium"
                          : "text-gray-300 hover:text-[#ff3131]"
                      }`}
                    >
                      <span className="transition-transform group-hover:translate-x-1">
                        {item.name}
                      </span>

                      {item.hasSubmenu && (
                        <svg
                          className={`w-4 h-4 flex-shrink-0 transition-colors ${
                            isSelected ? "text-[#ff3131]" : "text-gray-400 group-hover:text-[#ff3131]"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Drawer Bottom Branding */}
          <div className="pt-8 mt-6 border-t border-white/10 text-xs text-gray-400">
            <p>{lang === "hi" ? "ग्लोबल • विश्वसनीय रेलवे एवं विद्युत सुरक्षा समाधान" : "GLOBAL. • Dependable Railway & Electrical Safety Systems"}</p>
          </div>
        </div>

        {/* COLUMN 2: Submenu Panel (Opens when clicking any subcategory, e.g. Suppliers) */}
        {hasSecondColumn && (
          <div className="w-[300px] sm:w-[350px] bg-[#222222] text-white pt-8 sm:pt-10 p-7 sm:p-9 flex flex-col justify-between overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden border-r border-white/10 animate-in fade-in slide-in-from-left duration-200">
            <div>
              {/* Top Row: Red Close 'X' Button on Right of Column 2 */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={closeDrawer}
                  className="text-[#ff3131] hover:text-[#f87171] p-1.5 rounded-full hover:bg-white/5 transition-all cursor-pointer group"
                  aria-label="Close menu"
                  title="Close"
                >
                  <svg
                    className="w-6 h-6 transition-transform group-hover:rotate-90 duration-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Submenu Heading */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight font-sans">
                  {activeMenuItem?.name}
                </h3>
              </div>

              {/* Submenu Items */}
              <ul className="space-y-6">
                {activeMenuItem?.submenuItems?.map((subItem) => (
                  <li key={subItem.name}>
                    <a
                      href={subItem.href}
                      onClick={closeDrawer}
                      className="flex items-center justify-between text-sm sm:text-[15px] font-normal leading-snug text-gray-300 hover:text-[#ff3131] group transition-all duration-200 cursor-pointer"
                    >
                      <span className="font-normal group-hover:translate-x-1 transition-transform">
                        {subItem.name}
                      </span>

                      {subItem.hasSubmenu && (
                        <svg
                          className="w-4 h-4 text-gray-400 group-hover:text-[#ff3131] transition-colors flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}

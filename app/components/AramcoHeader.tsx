"use client";

import React, { useState, useEffect, useRef } from "react";
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
        href: "/products/railway-barrier",
        hasSubmenu: true,
        submenuItems: [
          { name: "Fail-Safe Boom Mechanism", href: "/products/railway-barrier/fail-safe-boom", hasSubmenu: false },
          { name: "Obstacle Detection Integration", href: "/products/railway-barrier/obstacle-detection", hasSubmenu: false },
          { name: "Power Backup & Manual Override", href: "/products/railway-barrier/power-backup", hasSubmenu: false },
          { name: "Weatherproof Enclosure", href: "/products/railway-barrier/weatherproof-enclosure", hasSubmenu: false },
        ],
      },
      {
        id: "earth-leakage",
        name: "Digital Earth Leakage Detector",
        href: "/products/earth-leakage",
        hasSubmenu: true,
        submenuItems: [
          { name: "Continuous Insulation Monitoring", href: "/products/earth-leakage/continuous-insulation", hasSubmenu: false },
          { name: "True RMS Current Measurement", href: "/products/earth-leakage/true-rms", hasSubmenu: false },
          { name: "Real-Time Digital Display", href: "/products/earth-leakage/realtime-display", hasSubmenu: false },
          { name: "Adjustable Trip Thresholds", href: "/products/earth-leakage/adjustable-thresholds", hasSubmenu: false },
        ],
      },
    ],
  },
  capability: {
    title: "Engineering & Safety",
    items: [
      { id: "fail-safe", name: "Fail-Safe Architecture", href: "/capability/fail-safe", hasSubmenu: false },
      { id: "rugged-build", name: "Rugged Industrial Construction", href: "/capability/rugged-build", hasSubmenu: false },
      { id: "diagnostics", name: "Diagnostics & System Integration", href: "/capability/diagnostics", hasSubmenu: false },
    ],
  },
  "news-media": {
    title: "Applications & Sectors",
    items: [
      { id: "level-crossings", name: "Railway Level Crossings", href: "/sectors/level-crossings", hasSubmenu: false },
      { id: "industrial-panels", name: "Industrial Electrical Panels", href: "/sectors/industrial-panels", hasSubmenu: false },
      { id: "signalling-infra", name: "Signalling & Access Control", href: "/sectors/signalling-infra", hasSubmenu: false },
    ],
  },
  contact: {
    title: "Contact",
    items: [
      { id: "engineering-team", name: "Talk to Engineering", href: "/contact/engineering-team", hasSubmenu: false },
      { id: "quote-req", name: "Request a Quote", href: "/contact/quote-req", hasSubmenu: false },
    ],
  },
  support: {
    title: "Technical Resources",
    items: [
      { id: "datasheets", name: "Product Datasheets", href: "/support/datasheets", hasSubmenu: false },
      { id: "specifications", name: "Technical Specifications", href: "/support/specifications", hasSubmenu: false },
      { id: "installation-guides", name: "Installation & Wiring Guides", href: "/support/installation-guides", hasSubmenu: false },
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
        href: "/products/railway-barrier",
        hasSubmenu: true,
        submenuItems: [
          { name: "सुरक्षित बूम तंत्र", href: "/products/railway-barrier/fail-safe-boom", hasSubmenu: false },
          { name: "अवरोध पहचान एकीकरण", href: "/products/railway-barrier/obstacle-detection", hasSubmenu: false },
          { name: "पावर बैकअप एवं मैनुअल ओवरराइड", href: "/products/railway-barrier/power-backup", hasSubmenu: false },
          { name: "वेदरप्रूफ एनक्लोजर", href: "/products/railway-barrier/weatherproof-enclosure", hasSubmenu: false },
        ],
      },
      {
        id: "earth-leakage",
        name: "डिजिटल अर्थ लीकेज डिटेक्टर",
        href: "/products/earth-leakage",
        hasSubmenu: true,
        submenuItems: [
          { name: "निरंतर इंसुलेशन निगरानी", href: "/products/earth-leakage/continuous-insulation", hasSubmenu: false },
          { name: "ट्रू RMS करंट मापन", href: "/products/earth-leakage/true-rms", hasSubmenu: false },
          { name: "रीयल-टाइम डिजिटल डिस्प्ले", href: "/products/earth-leakage/realtime-display", hasSubmenu: false },
          { name: "एडजस्टेबल ट्रिप थ्रेसहोल्ड", href: "/products/earth-leakage/adjustable-thresholds", hasSubmenu: false },
        ],
      },
    ],
  },
  capability: {
    title: "इंजीनियरिंग एवं सुरक्षा",
    items: [
      { id: "fail-safe", name: "फेल-सेफ आर्किटेक्चर", href: "/capability/fail-safe", hasSubmenu: false },
      { id: "rugged-build", name: "मजबूत औद्योगिक निर्माण", href: "/capability/rugged-build", hasSubmenu: false },
      { id: "diagnostics", name: "डायग्नोस्टिक्स एवं एकीकरण", href: "/capability/diagnostics", hasSubmenu: false },
    ],
  },
  "news-media": {
    title: "अनुप्रयोग एवं क्षेत्र",
    items: [
      { id: "level-crossings", name: "रेलवे लेवल क्रॉसिंग", href: "/sectors/level-crossings", hasSubmenu: false },
      { id: "industrial-panels", name: "औद्योगिक पावर पैनल", href: "/sectors/industrial-panels", hasSubmenu: false },
      { id: "signalling-infra", name: "सिग्नलिंग एवं पहुंच नियंत्रण", href: "/sectors/signalling-infra", hasSubmenu: false },
    ],
  },
  contact: {
    title: "संपर्क",
    items: [
      { id: "engineering-team", name: "इंजीनियरिंग टीम से बात करें", href: "/contact/engineering-team", hasSubmenu: false },
      { id: "quote-req", name: "कोटेशन का अनुरोध करें", href: "/contact/quote-req", hasSubmenu: false },
    ],
  },
  support: {
    title: "तकनीकी संसाधन",
    items: [
      { id: "datasheets", name: "उत्पाद डेटाशीट", href: "/support/datasheets", hasSubmenu: false },
      { id: "specifications", name: "तकनीकी विनिर्देश", href: "/support/specifications", hasSubmenu: false },
      { id: "installation-guides", name: "इंस्टॉलेशन एवं वायरिंग गाइड", href: "/support/installation-guides", hasSubmenu: false },
    ],
  },
};

interface AramcoHeaderProps {
  theme?: "dark" | "light";
}

export default function AramcoHeader({ theme = "dark" }: AramcoHeaderProps) {
  const { lang, setLang, t } = useLanguage();
  const [isRegionOpen, setIsRegionOpen] = useState(false);
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
          theme === "light"
            ? isScrolled || activeDrawerId
              ? "bg-white/95 backdrop-blur-md shadow-md text-gray-900 border-b border-gray-200"
              : "bg-white/95 backdrop-blur-md text-gray-900 border-b border-gray-200/80 shadow-sm"
            : isScrolled || activeDrawerId
              ? "bg-[#111113]/90 backdrop-blur-md shadow-2xl text-white border-b border-white/10"
              : "bg-gradient-to-b from-black/75 via-black/25 to-transparent text-white border-b border-transparent"
        }`}
      >
        
        {/* 1. TOP UTILITY ROW */}
        <div
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? "max-h-0 opacity-0 border-b border-transparent py-0 pointer-events-none overflow-hidden"
              : theme === "light"
                ? "max-h-12 opacity-100 border-b border-gray-200/80 overflow-visible relative z-50"
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
                    lang === "hi"
                      ? "text-[#ff3131] font-bold"
                      : theme === "light"
                      ? "text-gray-700 hover:text-[#ff3131]"
                      : "text-white"
                  }`}
                >
                  हिन्दी
                </button>
                <span className={theme === "light" ? "text-gray-300" : "text-white/40"}>|</span>
                <button
                  onClick={() => setLang("en")}
                  className={`transition-colors duration-200 hover:text-[#ff3131] font-medium cursor-pointer ${
                    lang === "en"
                      ? "text-[#ff3131] font-bold"
                      : theme === "light"
                      ? "text-gray-700 hover:text-[#ff3131]"
                      : "text-white"
                  }`}
                >
                  English
                </button>
              </div>

              <a
                href="#global-contacts"
                className={`transition-colors duration-200 text-xs sm:text-[13px] font-normal ${
                  theme === "light"
                    ? "text-gray-600 hover:text-[#ff3131]"
                    : "text-white/90 hover:text-[#ff3131]"
                }`}
              >
                {t.globalContacts}
              </a>
            </div>

            {/* Region Selector & Accessibility */}
            <div className="flex items-center space-x-4 sm:space-x-5 relative" ref={regionDropdownRef}>
              <div className="relative">
                <button
                  onClick={() => setIsRegionOpen(!isRegionOpen)}
                  className={`flex items-center space-x-1.5 sm:space-x-2 group transition-colors duration-200 cursor-pointer ${
                    theme === "light" ? "text-gray-700 hover:text-gray-950" : "text-white/90 hover:text-white"
                  }`}
                  aria-expanded={isRegionOpen}
                >
                  <span className="text-xs sm:text-[13px] hidden sm:inline-block font-normal">
                    {lang === "hi" ? "आप ग्लोबल में हैं" : "You are in Global"}
                  </span>
                  <span className="text-xs sm:hidden font-normal">Global</span>

                  {/* Globe Icon */}
                  <svg
                    className={`w-4 h-4 transition-colors ${
                      theme === "light" ? "text-gray-600 group-hover:text-[#ff3131]" : "text-white/90 group-hover:text-[#ff3131]"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>

                  {/* Dropdown Chevron */}
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${
                      theme === "light" ? "text-gray-500" : "text-white/80"
                    } ${isRegionOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
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
                                  className="text-[#ff3131] hover:text-[#dc2626] underline underline-offset-2 transition-colors cursor-pointer"
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
                className={`p-1 rounded transition-colors duration-200 cursor-pointer ${
                  theme === "light" ? "text-gray-700 hover:text-[#ff3131]" : "text-white/90 hover:text-[#ff3131]"
                }`}
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
            
            {/* Left Side: GLOBAL. Logo + Navigation Links */}
            <div className="flex items-center">
              <a href="/" className="flex items-center group cursor-pointer flex-shrink-0 mr-8 lg:mr-14 xl:mr-20" aria-label="GLOBAL. Home">
                <GlobalLogo theme={theme === "light" ? "light" : "dark"} size="md" />
              </a>

              {/* Navigation Links */}
              <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                {/* 1. ABOUT US */}
                <li>
                  <a
                    href="/about"
                    className={`text-xs tracking-wider font-bold uppercase transition-all duration-200 cursor-pointer py-1 border-b-2 border-transparent hover:border-[#ff3131] ${
                      theme === "light"
                        ? "text-gray-800 hover:text-[#ff3131]"
                        : "text-white/90 hover:text-[#ff3131]"
                    }`}
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
                        : theme === "light"
                        ? "text-gray-800 hover:text-[#ff3131] border-b-2 border-transparent"
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
                        : theme === "light"
                        ? "text-gray-800 hover:text-[#ff3131] border-b-2 border-transparent"
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
                        : theme === "light"
                        ? "text-gray-800 hover:text-[#ff3131] border-b-2 border-transparent"
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
                        : theme === "light"
                        ? "text-gray-800 hover:text-[#ff3131] border-b-2 border-transparent"
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
                        : theme === "light"
                        ? "text-gray-800 hover:text-[#ff3131] border-b-2 border-transparent"
                        : "text-white/90 hover:text-[#ff3131] border-b-2 border-transparent"
                    }`}
                  >
                    {t.nav.support}
                  </button>
                </li>
              </ul>
            </div>

            {/* Right Side: Employee Login + Mobile Hamburger */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              {/* Employee Login Button (Sharp industrial style with user icon) */}
              <a
                href="/login"
                className={`inline-flex items-center space-x-2 px-4 sm:px-5 py-2 rounded-none text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm group cursor-pointer ${
                  theme === "light"
                    ? "bg-red-600 hover:bg-[#d62828] text-white border border-red-600 hover:shadow-[0_0_18px_rgba(255,49,49,0.4)]"
                    : "bg-red-600 hover:bg-[#d62828] text-white border border-red-500 hover:shadow-[0_0_18px_rgba(255,49,49,0.6)]"
                }`}
                title="Employee Login"
              >
                <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{lang === "hi" ? "लॉगिन" : "Login"}</span>
              </a>

              {/* Mobile Hamburger Menu */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 hover:text-[#ff3131] focus:outline-none ${
                  theme === "light" ? "text-gray-900" : "text-white"
                }`}
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



        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden backdrop-blur-xl border-t px-5 py-5 max-h-[calc(100dvh-5rem)] overflow-y-auto shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 ${
            theme === "light"
              ? "bg-white/98 border-gray-200 text-gray-900"
              : "bg-[#141414]/98 border-white/10 text-white"
          }`}>
            {/* Quick Mobile Language Switcher */}
            <div className={`flex items-center justify-between pb-3 mb-3 border-b ${
              theme === "light" ? "border-gray-200" : "border-white/10"
            }`}>
              <span className={`text-xs font-medium uppercase tracking-wider ${
                theme === "light" ? "text-gray-500" : "text-gray-400"
              }`}>
                {lang === "hi" ? "भाषा चुनें" : "Language"}
              </span>
              <div className="flex items-center space-x-2 text-xs">
                <button
                  onClick={() => setLang("hi")}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    lang === "hi"
                      ? "bg-[#ff3131] text-white font-bold"
                      : theme === "light"
                      ? "bg-gray-100 text-gray-700"
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
                      : theme === "light"
                      ? "bg-gray-100 text-gray-700"
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
              className={`block w-full text-left text-sm font-bold tracking-wider uppercase py-2.5 border-b flex items-center justify-between hover:text-[#ff3131] ${
                theme === "light" ? "text-gray-900 border-gray-100" : "text-white/90 border-white/5"
              }`}
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
                <div key={id} className={`border-b ${theme === "light" ? "border-gray-100" : "border-white/5"}`}>
                  <button
                    onClick={() => setActiveDrawerId((prev) => (prev === id ? null : id))}
                    className={`w-full text-left text-sm font-bold tracking-wider uppercase hover:text-[#ff3131] py-3 flex items-center justify-between cursor-pointer ${
                      theme === "light" ? "text-gray-900" : "text-white/90"
                    }`}
                  >
                    <span>{name}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 text-gray-400 ${
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
                            className={`block text-xs font-semibold hover:text-[#ff3131] py-1 transition-colors ${
                              theme === "light" ? "text-gray-700" : "text-gray-200"
                            }`}
                          >
                            • {item.name}
                          </a>
                          {item.submenuItems && item.submenuItems.length > 0 && (
                            <div className={`pl-3 mt-1 space-y-1 border-l ${
                              theme === "light" ? "border-gray-200" : "border-white/10"
                            }`}>
                              {item.submenuItems.map((sub) => (
                                <a
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setActiveDrawerId(null);
                                  }}
                                  className={`block text-[11px] hover:text-[#ff3131] py-0.5 ${
                                    theme === "light" ? "text-gray-500" : "text-gray-400 hover:text-white"
                                  }`}
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
                className={`block w-full py-2.5 rounded-none text-center text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 border ${
                  theme === "light"
                    ? "bg-red-50 hover:bg-red-100 border-red-200 text-gray-900"
                    : "bg-white/10 hover:bg-white/20 border-white/20 text-white"
                }`}
              >
                <svg className="w-4 h-4 text-[#ff3131]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{lang === "hi" ? "कर्मचारी लॉगिन (Login)" : "Employee Login"}</span>
              </a>
              <a
                href="#contact-engineering"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-2.5 rounded-none bg-[#ff3131] hover:bg-[#d62828] text-white text-center text-xs font-bold uppercase tracking-wider transition-all shadow-md"
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
        className={`fixed bottom-0 z-40 flex shadow-2xl transition-all duration-300 ease-out font-sans ${
          theme === "light" ? "border-gray-200" : "border-white/10"
        } ${
          isScrolled ? "top-16 sm:top-20" : "top-[104px] sm:top-[120px]"
        } left-0 border-r ${currentDrawer ? "translate-x-0" : "-translate-x-full"}`}
        aria-label="Multi-level navigation drawer"
      >
        {/* COLUMN 1: Main Category List */}
        <div className={`w-[300px] sm:w-[350px] pt-6 sm:pt-7 p-7 sm:p-9 flex flex-col justify-between overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden border-r ${
          theme === "light" ? "bg-white text-gray-900 border-gray-200" : "bg-[#1a1a1a] text-white border-white/10"
        }`}>
          <div>
            {/* Heading row with close button on right when Column 2 is not open */}
            <div className="flex items-center justify-between mb-8">
              <h3 className={`text-xl sm:text-2xl font-medium tracking-tight font-sans ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}>
                {currentDrawer?.title}
              </h3>
              {!hasSecondColumn && (
                <button
                  onClick={closeDrawer}
                  className={`p-1.5 rounded-full transition-all cursor-pointer group flex-shrink-0 ${
                    theme === "light" ? "text-gray-600 hover:text-[#ff3131] hover:bg-gray-100" : "text-[#ff3131] hover:text-[#f87171] hover:bg-white/5"
                  }`}
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
              )}
            </div>

            {/* Menu Items List */}
            <ul className="space-y-6">
              {currentDrawer?.items.map((item) => {
                const isSelected = activeSubmenuId === item.id;
                return (
                  <li key={item.id}>
                    {item.hasSubmenu ? (
                      <button
                        onClick={() => handleSubmenuToggle(item)}
                        className={`w-full flex items-center justify-between text-sm sm:text-[15px] group transition-all duration-200 cursor-pointer text-start ${
                          isSelected
                            ? "text-[#ff3131] font-medium"
                            : theme === "light"
                            ? "text-gray-700 hover:text-[#ff3131]"
                            : "text-gray-300 hover:text-[#ff3131]"
                        }`}
                      >
                        <span className="transition-transform group-hover:translate-x-1">
                          {item.name}
                        </span>

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
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        onClick={closeDrawer}
                        className={`w-full flex items-center justify-between text-sm sm:text-[15px] group transition-all duration-200 cursor-pointer text-start ${
                          theme === "light" ? "text-gray-700 hover:text-[#ff3131]" : "text-gray-300 hover:text-[#ff3131]"
                        }`}
                      >
                        <span className="transition-transform group-hover:translate-x-1">
                          {item.name}
                        </span>
                        <span className="text-gray-500 group-hover:text-[#ff3131] text-xs transition-colors">→</span>
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Drawer Bottom Branding */}
          <div className={`pt-8 mt-6 pb-6 border-t text-xs ${
            theme === "light" ? "border-gray-200 text-gray-500" : "border-white/10 text-gray-400"
          }`}>
            <p>{lang === "hi" ? "ग्लोबल • विश्वसनीय रेलवे एवं विद्युत सुरक्षा समाधान" : "GLOBAL. • Dependable Railway & Electrical Safety Systems"}</p>
          </div>
        </div>

        {/* COLUMN 2: Submenu Panel (Opens when clicking any subcategory) */}
        {hasSecondColumn && (
          <div className={`w-[300px] sm:w-[350px] pt-6 sm:pt-7 p-7 sm:p-9 flex flex-col justify-between overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden border-r animate-in fade-in slide-in-from-left duration-200 ${
            theme === "light" ? "bg-[#f8f9fa] text-gray-900 border-gray-200" : "bg-[#222222] text-white border-white/10"
          }`}>
            <div>
              {/* Heading row with close button on right, perfectly aligned with Column 1 */}
              <div className="flex items-center justify-between mb-8">
                <a
                  href={activeMenuItem?.href}
                  onClick={closeDrawer}
                  className={`text-xl sm:text-2xl font-medium hover:text-[#ff3131] tracking-tight font-sans transition-colors group inline-flex items-center space-x-1.5 ${
                    theme === "light" ? "text-gray-900" : "text-white"
                  }`}
                  title={lang === "hi" ? "पूरा उत्पाद पृष्ठ देखें" : "View Full Product Page"}
                >
                  <span>{activeMenuItem?.name}</span>
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover:text-[#ff3131] group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <button
                  onClick={closeDrawer}
                  className={`p-1.5 rounded-full transition-all cursor-pointer group flex-shrink-0 ${
                    theme === "light" ? "text-gray-600 hover:text-[#ff3131] hover:bg-gray-100" : "text-[#ff3131] hover:text-[#f87171] hover:bg-white/5"
                  }`}
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

              {/* Submenu Items */}
              <ul className="space-y-6">
                {activeMenuItem?.submenuItems?.map((subItem) => (
                  <li key={subItem.name}>
                    <a
                      href={subItem.href}
                      onClick={closeDrawer}
                      className={`flex items-center justify-between text-sm sm:text-[15px] font-normal leading-snug group transition-all duration-200 cursor-pointer ${
                        theme === "light" ? "text-gray-700 hover:text-[#ff3131]" : "text-gray-300 hover:text-[#ff3131]"
                      }`}
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

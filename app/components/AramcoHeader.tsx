"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import GlobalLogo from "./GlobalLogo";

const REGIONS_LIST = [
  {
    name: "Global",
    languages: [
      { label: "English", code: "en" },
      { label: "हिन्दी", code: "hi" },
    ],
  },
  {
    name: "Global India",
    languages: [
      { label: "English", code: "en" },
      { label: "हिन्दी", code: "hi" },
    ],
  },
  {
    name: "Global Americas",
    languages: [{ label: "English", code: "en" }],
  },
  {
    name: "Global China",
    languages: [
      { label: "English", code: "en" },
      { label: "中文(中国)", code: "zh" },
    ],
  },
  {
    name: "Global Europe",
    languages: [{ label: "English", code: "en" }],
  },
  {
    name: "Global Japan",
    languages: [
      { label: "English", code: "en" },
      { label: "日本語", code: "ja" },
    ],
  },
  {
    name: "Global Singapore",
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
    title: "What we do",
    items: [
      {
        id: "energy-innovation",
        name: "Energy innovation",
        href: "#innovation",
        hasSubmenu: true,
        submenuItems: [
          { name: "Advancing energy solutions", href: "#advancing-solutions", hasSubmenu: true },
          { name: "Transportation", href: "#transportation", hasSubmenu: true },
          { name: "Nonmetallic solutions", href: "#nonmetallic", hasSubmenu: true },
          { name: "Digitalization", href: "#digitalization", hasSubmenu: true },
          { name: "Global research centers", href: "#research-centers", hasSubmenu: false },
          { name: "Innovation ecosystem", href: "#innovation-ecosystem", hasSubmenu: true },
        ],
      },
      {
        id: "energy-products",
        name: "Energy products",
        href: "#products",
        hasSubmenu: true,
        submenuItems: [
          { name: "Oil production", href: "#oil-production", hasSubmenu: false },
          { name: "Gas production", href: "#gas-production", hasSubmenu: false },
          { name: "Chemicals", href: "#chemicals", hasSubmenu: false },
          { name: "Refined products", href: "#refined-products", hasSubmenu: true },
          { name: "Retail fuels", href: "#retail-fuels", hasSubmenu: true },
        ],
      },
      {
        id: "operations",
        name: "Operations",
        href: "#operations",
        hasSubmenu: true,
        submenuItems: [
          { name: "Exploration", href: "#exploration", hasSubmenu: true },
          { name: "Unconventional resources", href: "#unconventional-resources", hasSubmenu: false },
          { name: "Global Power Company", href: "#sapco", hasSubmenu: false },
          { name: "Ports and Terminals", href: "#ports-terminals", hasSubmenu: false },
        ],
      },
      {
        id: "mega-projects",
        name: "Mega projects",
        href: "#mega-projects",
        hasSubmenu: true,
        submenuItems: [
          { name: "Shaybah oil field and recovery plant", href: "#shaybah", hasSubmenu: false },
          { name: "Manifa offshore oil field", href: "#manifa", hasSubmenu: false },
          { name: "Sadara petrochemicals facility", href: "#sadara", hasSubmenu: false },
          { name: "Fadhili Gas Plant", href: "#fadhili", hasSubmenu: false },
          { name: "Wasit Gas Plant", href: "#wasit", hasSubmenu: false },
        ],
      },
      {
        id: "technology-licensing",
        name: "Technology licensing",
        href: "#licensing",
        hasSubmenu: true,
        submenuItems: [
          { name: "About Global Tech Centers", href: "#about-satc-sautc", hasSubmenu: false },
          { name: "Digital technologies", href: "#digital-technologies", hasSubmenu: false },
          { name: "Upstream technologies", href: "#upstream-technologies", hasSubmenu: false },
          { name: "Downstream technologies", href: "#downstream-technologies", hasSubmenu: false },
          { name: "Sustainability technologies", href: "#sustainability-technologies", hasSubmenu: false },
        ],
      },
      {
        id: "commercial-ecosystems",
        name: "Commercial ecosystems",
        href: "#commercial",
        hasSubmenu: true,
        submenuItems: [
          { name: "iktva", href: "#iktva", hasSubmenu: false },
          { name: "Wa’ed Ventures", href: "#waed-ventures", hasSubmenu: false },
          { name: "Taleed", href: "#taleed", hasSubmenu: false },
          { name: "Namaat", href: "#namaat", hasSubmenu: false },
        ],
      },
      {
        id: "customers",
        name: "Customers",
        href: "#customers",
        hasSubmenu: true,
        submenuItems: [
          { name: "Becoming a customer", href: "#becoming-a-customer", hasSubmenu: false },
          { name: "Products and facilities", href: "#products-facilities", hasSubmenu: false },
        ],
      },
      {
        id: "suppliers",
        name: "Suppliers",
        href: "#suppliers",
        hasSubmenu: true,
        submenuItems: [
          { name: "Become a supplier", href: "#become-a-supplier", hasSubmenu: true },
          { name: "Existing suppliers", href: "#existing-suppliers", hasSubmenu: true },
          { name: "Supplier resources", href: "#supplier-resources", hasSubmenu: true },
          { name: "Contracting opportunities", href: "#contracting-opportunities", hasSubmenu: true },
          { name: "General Auditor Hotline", href: "#general-auditor-hotline", hasSubmenu: false },
        ],
      },
    ],
  },
  sustainability: {
    title: "Sustainability",
    items: [
      {
        id: "sustainability-report-2025",
        name: "Our 2025 Sustainability Report",
        href: "#sustainability-report-2025",
        hasSubmenu: true,
        submenuItems: [
          { name: "Climate change and the energy transition", href: "#climate-change", hasSubmenu: false },
          { name: "Safe operations and people development", href: "#safe-operations", hasSubmenu: false },
          { name: "Minimizing environmental impact", href: "#minimizing-impact", hasSubmenu: false },
          { name: "Growing societal value", href: "#societal-value", hasSubmenu: false },
          { name: "Governance", href: "#governance", hasSubmenu: false },
          { name: "Our data and assurance", href: "#data-assurance", hasSubmenu: false },
          { name: "Downloads", href: "#downloads", hasSubmenu: false },
        ],
      },
      { id: "climate-energy", name: "Climate and energy", href: "#climate-energy", hasSubmenu: true },
      { id: "people-safety", name: "People and safety", href: "#people-safety", hasSubmenu: true },
      { id: "environment", name: "Environment", href: "#environment", hasSubmenu: true },
      { id: "society", name: "Society", href: "#society", hasSubmenu: true },
      { id: "governance-oversight", name: "Governance and oversight", href: "#governance-oversight", hasSubmenu: false },
    ],
  },
  investors: {
    title: "Investors",
    items: [
      { id: "annual-rep", name: "Annual Report 2025", href: "#annual-report-2025", hasSubmenu: true },
      { id: "reports-pres", name: "Reports & Presentations", href: "#reports-presentations", hasSubmenu: false },
      { id: "key-fin", name: "Key financials", href: "#key-financials", hasSubmenu: false },
      { id: "company-fin", name: "Company financial summary", href: "#financial-summary", hasSubmenu: false },
      { id: "shareholder", name: "Shareholder information", href: "#shareholder-info", hasSubmenu: true },
      { id: "bond-sukuk", name: "Bond and Sukuk information", href: "#bond-sukuk", hasSubmenu: false },
      { id: "why-invest", name: "Why invest in Global", href: "#why-invest", hasSubmenu: false },
      { id: "esg-invest", name: "Environmental, social, and governance", href: "#esg", hasSubmenu: true },
      { id: "investor-news", name: "Investor news", href: "#investor-news", hasSubmenu: true },
      { id: "investor-contacts", name: "Investor contacts", href: "#investor-contacts", hasSubmenu: false },
    ],
  },
  "news-media": {
    title: "News & Media",
    items: [
      { id: "latest-news", name: "Latest news", href: "#latest-news", hasSubmenu: false },
      { id: "elements-mag", name: "Elements magazine", href: "#elements-magazine", hasSubmenu: false },
      { id: "speeches", name: "Speeches", href: "#speeches", hasSubmenu: false },
      { id: "publications", name: "Publications", href: "#publications", hasSubmenu: false },
      { id: "resources", name: "Resources for journalists", href: "#resources-journalists", hasSubmenu: false },
      { id: "media-gallery", name: "Media gallery", href: "#media-gallery", hasSubmenu: false },
      { id: "case-studies", name: "Case studies", href: "#case-studies", hasSubmenu: false },
    ],
  },
  careers: {
    title: "Careers",
    items: [
      { id: "country-opp", name: "Country specific opportunities", href: "#country-opportunities", hasSubmenu: false },
      { id: "investing-people", name: "Investing in our people", href: "#investing-in-people", hasSubmenu: false },
      { id: "equity-inclusion", name: "Equity and inclusion", href: "#equity-inclusion", hasSubmenu: false },
      { id: "intl-applicants", name: "For International applicants", href: "#international-applicants", hasSubmenu: true },
      { id: "life-aramco", name: "Life at Global", href: "#life-at-aramco", hasSubmenu: false },
    ],
  },
};

const DRAWER_DATA_HI: Record<string, DrawerCategory> = {
  "what-we-do": {
    title: "हम क्या करते हैं",
    items: [
      {
        id: "energy-innovation",
        name: "ऊर्जा नवाचार",
        href: "#innovation",
        hasSubmenu: true,
        submenuItems: [
          { name: "उन्नत ऊर्जा समाधान", href: "#advancing-solutions", hasSubmenu: true },
          { name: "परिवहन और मोबिलिटी", href: "#transportation", hasSubmenu: true },
          { name: "गैर-धातु समाधान", href: "#nonmetallic", hasSubmenu: true },
          { name: "डिजिटलीकरण और AI", href: "#digitalization", hasSubmenu: true },
          { name: "वैश्विक अनुसंधान केंद्र", href: "#research-centers", hasSubmenu: false },
          { name: "नवाचार इकोसिस्टम", href: "#innovation-ecosystem", hasSubmenu: true },
        ],
      },
      {
        id: "energy-products",
        name: "ऊर्जा उत्पाद",
        href: "#products",
        hasSubmenu: true,
        submenuItems: [
          { name: "तेल उत्पादन", href: "#oil-production", hasSubmenu: false },
          { name: "गैस उत्पादन", href: "#gas-production", hasSubmenu: false },
          { name: "रसायन (Chemicals)", href: "#chemicals", hasSubmenu: false },
          { name: "परिष्कृत उत्पाद (Refined products)", href: "#refined-products", hasSubmenu: true },
          { name: "खुदरा ईंधन और सेवा स्टेशन", href: "#retail-fuels", hasSubmenu: true },
        ],
      },
      {
        id: "operations",
        name: "संचालन और परिचालन",
        href: "#operations",
        hasSubmenu: true,
        submenuItems: [
          { name: "अन्वेषण (Exploration)", href: "#exploration", hasSubmenu: true },
          { name: "गैर-पारंपरिक संसाधन", href: "#unconventional-resources", hasSubmenu: false },
          { name: "पावर कंपनी", href: "#sapco", hasSubmenu: false },
          { name: "बंदरगाह और टर्मिनल", href: "#ports-terminals", hasSubmenu: false },
        ],
      },
      {
        id: "mega-projects",
        name: "मेगा परियोजनाएं",
        href: "#mega-projects",
        hasSubmenu: true,
        submenuItems: [
          { name: "शायबाह तेल क्षेत्र एवं गैस रिकवरी", href: "#shaybah", hasSubmenu: false },
          { name: "मनीफा अपतटीय तेल क्षेत्र", href: "#manifa", hasSubmenu: false },
          { name: "सादरा पेट्रोकेमिकल्स कॉम्प्लेक्स", href: "#sadara", hasSubmenu: false },
          { name: "फाधिली गैस प्लांट", href: "#fadhili", hasSubmenu: false },
          { name: "वासित गैस प्लांट", href: "#wasit", hasSubmenu: false },
        ],
      },
      {
        id: "technology-licensing",
        name: "प्रौद्योगिकी लाइसेंसिंग",
        href: "#licensing",
        hasSubmenu: true,
        submenuItems: [
          { name: "तकनीक केंद्र", href: "#about-satc-sautc", hasSubmenu: false },
          { name: "डिजिटल प्रौद्योगिकियां", href: "#digital-technologies", hasSubmenu: false },
          { name: "अपस्ट्रीम प्रौद्योगिकियां", href: "#upstream-technologies", hasSubmenu: false },
          { name: "डाउनस्ट्रीम प्रौद्योगिकियां", href: "#downstream-technologies", hasSubmenu: false },
          { name: "सतत ऊर्जा प्रौद्योगिकियां", href: "#sustainability-technologies", hasSubmenu: false },
        ],
      },
      {
        id: "commercial-ecosystems",
        name: "वाणिज्यिक इकोसिस्टम",
        href: "#commercial",
        hasSubmenu: true,
        submenuItems: [
          { name: "इक्तवा (iktva)", href: "#iktva", hasSubmenu: false },
          { name: "वाएद वेंचर्स (Wa’ed Ventures)", href: "#waed-ventures", hasSubmenu: false },
          { name: "तलीद (Taleed)", href: "#taleed", hasSubmenu: false },
          { name: "नमात (Namaat)", href: "#namaat", hasSubmenu: false },
        ],
      },
      {
        id: "customers",
        name: "ग्राहक एवं भागीदार",
        href: "#customers",
        hasSubmenu: true,
        submenuItems: [
          { name: "ग्राहक कैसे बनें", href: "#becoming-a-customer", hasSubmenu: false },
          { name: "उत्पाद और सुविधाएं", href: "#products-facilities", hasSubmenu: false },
        ],
      },
      {
        id: "suppliers",
        name: "आपूर्तिकर्ता (Suppliers)",
        href: "#suppliers",
        hasSubmenu: true,
        submenuItems: [
          { name: "आपूर्तिकर्ता बनें", href: "#become-a-supplier", hasSubmenu: true },
          { name: "मौजूदा आपूर्तिकर्ता", href: "#existing-suppliers", hasSubmenu: true },
          { name: "आपूर्तिकर्ता संसाधन गाइड", href: "#supplier-resources", hasSubmenu: true },
          { name: "अनुबंध एवं निविदा अवसर", href: "#contracting-opportunities", hasSubmenu: true },
          { name: "ऑडिटर हेल्पलाइन", href: "#general-auditor-hotline", hasSubmenu: false },
        ],
      },
    ],
  },
  sustainability: {
    title: "सतत विकास",
    items: [
      {
        id: "sustainability-report-2025",
        name: "हमारी 2025 सतत विकास रिपोर्ट",
        href: "#sustainability-report-2025",
        hasSubmenu: true,
        submenuItems: [
          { name: "जलवायु परिवर्तन और ऊर्जा संक्रमण", href: "#climate-change", hasSubmenu: false },
          { name: "सुरक्षित संचालन और मानव विकास", href: "#safe-operations", hasSubmenu: false },
          { name: "पर्यावरणीय प्रभाव को कम करना", href: "#minimizing-impact", hasSubmenu: false },
          { name: "सामाजिक मूल्य का निर्माण", href: "#societal-value", hasSubmenu: false },
          { name: "कॉर्पोरेट गवर्नेंस", href: "#governance", hasSubmenu: false },
          { name: "डेटा और प्रमाणन", href: "#data-assurance", hasSubmenu: false },
          { name: "रिपोर्ट डाउनलोड", href: "#downloads", hasSubmenu: false },
        ],
      },
      { id: "climate-energy", name: "जलवायु और ऊर्जा", href: "#climate-energy", hasSubmenu: true },
      { id: "people-safety", name: "सुरक्षा और मानव कल्याण", href: "#people-safety", hasSubmenu: true },
      { id: "environment", name: "प्राकृतिक पर्यावरण", href: "#environment", hasSubmenu: true },
      { id: "society", name: "समाज और विकास", href: "#society", hasSubmenu: true },
      { id: "governance-oversight", name: "शासन और निगरानी", href: "#governance-oversight", hasSubmenu: false },
    ],
  },
  investors: {
    title: "निवेशक",
    items: [
      { id: "annual-rep", name: "वार्षिक रिपोर्ट 2025", href: "#annual-report-2025", hasSubmenu: true },
      { id: "reports-pres", name: "रिपोर्ट्स एवं प्रस्तुतियां", href: "#reports-presentations", hasSubmenu: false },
      { id: "key-fin", name: "मुख्य वित्तीय आंकड़े", href: "#key-financials", hasSubmenu: false },
      { id: "company-fin", name: "वित्तीय सारांश", href: "#financial-summary", hasSubmenu: false },
      { id: "shareholder", name: "शेयरधारक जानकारी", href: "#shareholder-info", hasSubmenu: true },
      { id: "bond-sukuk", name: "बॉन्ड एवं सुकुक जानकारी", href: "#bond-sukuk", hasSubmenu: false },
      { id: "why-invest", name: "ग्लोबल में निवेश क्यों करें", href: "#why-invest", hasSubmenu: false },
      { id: "esg-invest", name: "पर्यावरण, सामाजिक और कॉर्पोरेट प्रशासन (ESG)", href: "#esg", hasSubmenu: true },
      { id: "investor-news", name: "निवेशक समाचार", href: "#investor-news", hasSubmenu: true },
      { id: "investor-contacts", name: "निवेशक संबंध संपर्क", href: "#investor-contacts", hasSubmenu: false },
    ],
  },
  "news-media": {
    title: "समाचार एवं मीडिया",
    items: [
      { id: "latest-news", name: "नवीनतम समाचार", href: "#latest-news", hasSubmenu: false },
      { id: "elements-mag", name: "एलिमेंट्स पत्रिका", href: "#elements-magazine", hasSubmenu: false },
      { id: "speeches", name: "भाषण एवं वक्तव्य", href: "#speeches", hasSubmenu: false },
      { id: "publications", name: "प्रकाशन एवं बुलेटिन", href: "#publications", hasSubmenu: false },
      { id: "resources", name: "पत्रकारों के लिए संसाधन", href: "#resources-journalists", hasSubmenu: false },
      { id: "media-gallery", name: "मीडिया गैलरी", href: "#media-gallery", hasSubmenu: false },
      { id: "case-studies", name: "केस स्टडीज", href: "#case-studies", hasSubmenu: false },
    ],
  },
  careers: {
    title: "करियर",
    items: [
      { id: "country-opp", name: "देश विशिष्ट अवसर", href: "#country-opportunities", hasSubmenu: false },
      { id: "investing-people", name: "मानव संसाधन विकास", href: "#investing-in-people", hasSubmenu: false },
      { id: "equity-inclusion", name: "समानता और समावेशिता", href: "#equity-inclusion", hasSubmenu: false },
      { id: "intl-applicants", name: "अंतर्राष्ट्रीय आवेदकों के लिए", href: "#international-applicants", hasSubmenu: true },
      { id: "life-aramco", name: "ग्लोबल में जीवन एवं संस्कृति", href: "#life-at-aramco", hasSubmenu: false },
    ],
  },
};

export default function AramcoHeader() {
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
      setIsScrolled(scrollY > 40);
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
          isScrolled || activeDrawerId
            ? "bg-[#141414] shadow-xl border-b border-white/10 text-white"
            : "bg-gradient-to-b from-black/95 via-black/80 to-transparent text-white"
        }`}
      >
        
        {/* 1. TOP UTILITY ROW */}
        <div
          className={`w-full border-b border-white/10 transition-all duration-300 overflow-visible ${
            isScrolled ? "max-h-0 opacity-0 border-transparent py-0 pointer-events-none" : "max-h-12 opacity-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-xs sm:text-[13px]">
            
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
            <div className="flex items-center space-x-4 sm:space-x-5" ref={regionDropdownRef}>
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
                    className="absolute mt-3 w-80 sm:w-96 bg-white text-gray-900 rounded-2xl shadow-2xl p-5 sm:p-6 border border-gray-100 z-50 animate-in fade-in duration-200 right-0"
                  >
                    <div className="divide-y divide-gray-100">
                      {REGIONS_LIST.map((region) => (
                        <div
                          key={region.name}
                          className="flex items-center justify-between py-2 sm:py-2.5 first:pt-0 last:pb-0"
                        >
                          <span className="text-xs sm:text-[14px] text-gray-800 font-normal">
                            {region.name}
                          </span>

                          <div className="flex items-center text-xs sm:text-[14px]">
                            {region.languages.map((item, idx) => (
                              <React.Fragment key={item.code + item.label}>
                                {idx > 0 && <span className="text-gray-400 mx-1.5">|</span>}
                                <button
                                  onClick={() => handleLanguageClick(item.code)}
                                  className="text-[#ff3131] hover:text-[#d62828] hover:underline transition-colors font-normal cursor-pointer"
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

                {/* 3. SUSTAINABILITY */}
                <li>
                  <button
                    onClick={() => toggleDrawer("sustainability")}
                    className={`text-xs tracking-wider font-bold uppercase transition-all duration-200 cursor-pointer py-1 ${
                      activeDrawerId === "sustainability"
                        ? "text-[#ff3131] font-bold border-b-2 border-[#ff3131]"
                        : "text-white/90 hover:text-[#ff3131] border-b-2 border-transparent"
                    }`}
                  >
                    {t.nav.sustainability}
                  </button>
                </li>

                {/* 4. INVESTORS */}
                <li>
                  <button
                    onClick={() => toggleDrawer("investors")}
                    className={`text-xs tracking-wider font-bold uppercase transition-all duration-200 cursor-pointer py-1 ${
                      activeDrawerId === "investors"
                        ? "text-[#ff3131] font-bold border-b-2 border-[#ff3131]"
                        : "text-white/90 hover:text-[#ff3131] border-b-2 border-transparent"
                    }`}
                  >
                    {t.nav.investors}
                  </button>
                </li>

                {/* 5. NEWS & MEDIA */}
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

                {/* 6. CAREERS */}
                <li>
                  <button
                    onClick={() => toggleDrawer("careers")}
                    className={`text-xs tracking-wider font-bold uppercase transition-all duration-200 cursor-pointer py-1 ${
                      activeDrawerId === "careers"
                        ? "text-[#ff3131] font-bold border-b-2 border-[#ff3131]"
                        : "text-white/90 hover:text-[#ff3131] border-b-2 border-transparent"
                    }`}
                  >
                    {t.nav.careers}
                  </button>
                </li>
              </ul>
            </div>

            {/* Right Side: GLOBAL. Logo */}
            <div className="flex items-center space-x-4">
              <a href="/" className="flex items-center group cursor-pointer" aria-label="GLOBAL. Home">
                <GlobalLogo theme="dark" size="md" />
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
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10 px-6 py-4 space-y-3">
            <a
              href="/about"
              className="block w-full text-left text-sm font-bold tracking-wider uppercase text-white/90 hover:text-[#ff3131] py-2 border-b border-white/5 flex items-center justify-between"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>{t.nav.about}</span>
              <span>→</span>
            </a>

            {["what-we-do", "sustainability", "investors", "news-media", "careers"].map((id) => {
              const name =
                id === "what-we-do"
                  ? t.nav.whatWeDo
                  : id === "sustainability"
                  ? t.nav.sustainability
                  : id === "investors"
                  ? t.nav.investors
                  : id === "news-media"
                  ? t.nav.newsMedia
                  : t.nav.careers;

              return (
                <button
                  key={id}
                  onClick={() => toggleDrawer(id)}
                  className="block w-full text-left text-sm font-bold tracking-wider uppercase text-white/90 hover:text-[#ff3131] py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{name}</span>
                  <span>→</span>
                </button>
              );
            })}
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
            <p>{lang === "hi" ? "ग्लोबल • जहां ऊर्जा एक अवसर है" : "GLOBAL. • Where Energy is Opportunity"}</p>
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

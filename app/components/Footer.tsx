"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import GlobalLogo from "./GlobalLogo";

const PRODUCTS_LINKS_EN = [
  { name: "Railway Barrier System", href: "/products/railway-barrier-system" },
  { name: "Digital Earth Leakage Detector", href: "/products/earth-leakage-detector" },
  { name: "Fail-Safe Architecture", href: "/capability/fail-safe-architecture" },
  { name: "Rugged Industrial Construction", href: "/capability/rugged-industrial-construction" },
  { name: "Diagnostics & System Integration", href: "/capability/diagnostics-system-integration" },
];

const COMPANY_LINKS_EN = [
  { name: "About Us", href: "/about" },
  { name: "Capabilities Overview", href: "/capability" },
  { name: "Contact Engineering", href: "#contact-engineering" },
  { name: "Request a Quote", href: "#contact-engineering" },
];

const LEGAL_SUPPORT_LINKS_EN = [
  { name: "Technical Support", href: "#contact-engineering" },
  { name: "Legal", href: "#legal" },
  { name: "Privacy Policy", href: "#privacy-policy" },
  { name: "Terms of Use", href: "#terms-of-use" },
];

const PRODUCTS_LINKS_HI = [
  { name: "रेलवे बैरियर सिस्टम", href: "/products/railway-barrier-system" },
  { name: "डिजिटल अर्थ लीकेज डिटेक्टर", href: "/products/earth-leakage-detector" },
  { name: "फेल-सेफ आर्किटेक्चर", href: "/capability/fail-safe-architecture" },
  { name: "मजबूत औद्योगिक निर्माण", href: "/capability/rugged-industrial-construction" },
  { name: "डायग्नोस्टिक्स एवं एकीकरण", href: "/capability/diagnostics-system-integration" },
];

const COMPANY_LINKS_HI = [
  { name: "हमारे बारे में", href: "/about" },
  { name: "क्षमताएं अवलोकन", href: "/capability" },
  { name: "संपर्क करें", href: "#contact-engineering" },
  { name: "कोटेशन प्राप्त करें", href: "#contact-engineering" },
];

const LEGAL_SUPPORT_LINKS_HI = [
  { name: "तकनीकी सहायता", href: "#contact-engineering" },
  { name: "कानूनी सूचना", href: "#legal" },
  { name: "गोपनीयता नीति", href: "#privacy-policy" },
  { name: "उपयोग की शर्तें", href: "#terms-of-use" },
];

export default function Footer() {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const productLinks = lang === "hi" ? PRODUCTS_LINKS_HI : PRODUCTS_LINKS_EN;
  const companyLinks = lang === "hi" ? COMPANY_LINKS_HI : COMPANY_LINKS_EN;
  const legalSupportLinks = lang === "hi" ? LEGAL_SUPPORT_LINKS_HI : LEGAL_SUPPORT_LINKS_EN;

  return (
    <footer className="w-full bg-white text-gray-900 pt-16 sm:pt-20 pb-12 border-t border-gray-200 font-sans select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Summary Banner */}
        <div className="mb-12 pb-10 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight font-sans">
              GLOBAL
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#ff3131] tracking-wider uppercase mt-0.5">
              {lang === "hi" ? "रेलवे एवं विद्युत सुरक्षा प्रणालियां" : "Railway & Electrical Safety Systems"}
            </div>
            <p className="text-xs sm:text-sm text-gray-600 font-light max-w-2xl mt-2 leading-relaxed">
              {lang === "hi"
                ? "सुरक्षित रेलवे क्रॉसिंग, विद्युत निगरानी और महत्वपूर्ण बुनियादी ढांचे के लिए व्यावहारिक समाधानों की इंजीनियरिंग।"
                : "Engineering practical solutions for safer railway crossings, electrical monitoring and critical infrastructure."}
            </p>
          </div>

          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-3">
            <a
              href="#contact-engineering"
              className="px-5 py-2.5 rounded-full bg-[#ff3131] hover:bg-[#d62828] text-white text-center text-xs sm:text-sm font-medium transition-all shadow-md"
            >
              {lang === "hi" ? "कोटेशन प्राप्त करें" : "Request a Quote"}
            </a>
            <a
              href="#contact-engineering"
              className="px-5 py-2.5 rounded-full border border-gray-300 hover:border-gray-900 text-gray-800 text-center text-xs sm:text-sm font-medium transition-all"
            >
              {lang === "hi" ? "तकनीकी सहायता" : "Technical Support"}
            </a>
          </div>
        </div>

        {/* Main Columns Grid: 3 Clean Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 pb-12 sm:pb-16">
          
          {/* Column 1: PRODUCTS */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4 sm:mb-6">
              {lang === "hi" ? "उत्पाद" : "Products"}
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-[13px] text-gray-700 hover:text-[#ff3131] transition-colors leading-relaxed block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: COMPANY */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4 sm:mb-6">
              {lang === "hi" ? "कंपनी" : "Company"}
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-[13px] text-gray-700 hover:text-[#ff3131] transition-colors leading-relaxed block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: LEGAL & SUPPORT */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4 sm:mb-6">
              {lang === "hi" ? "नीतियां एवं सहायता" : "Legal & Support"}
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {legalSupportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-[13px] text-gray-700 hover:text-[#ff3131] transition-colors leading-relaxed block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 sm:pt-10 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-center sm:text-left">
          
          <div className="text-xs text-gray-600 order-3 sm:order-1 font-normal">
            {t.footer.copyright}
          </div>

          <div className="order-1 sm:order-2">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#ff3131] flex items-center justify-center text-gray-800 hover:text-[#ff3131] hover:bg-[#ff3131]/5 transition-all shadow-sm cursor-pointer group"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>

          <div className="order-2 sm:order-3 flex items-center">
            <GlobalLogo theme="light" size="md" />
          </div>

        </div>

      </div>
    </footer>
  );
}

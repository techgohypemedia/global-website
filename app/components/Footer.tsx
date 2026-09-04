"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import GlobalLogo from "./GlobalLogo";

const PRODUCTS_LINKS_EN = [
  { name: "Railway Barrier System", href: "#railway-barrier-system" },
  { name: "Digital Earth Leakage Detector", href: "#earth-leakage-detector" },
  { name: "Controlled Railway Access", href: "#restricted-access" },
  { name: "Industrial Electrical Panels", href: "#industrial-panels" },
];

const COMPANY_LINKS_EN = [
  { name: "About GLOBAL", href: "/about" },
  { name: "Engineering", href: "#engineering" },
  { name: "Applications", href: "#applications" },
  { name: "Resources", href: "#specifications" },
  { name: "Contact", href: "#contact-engineering" },
];

const SUPPORT_LINKS_EN = [
  { name: "Technical Support", href: "#contact-engineering" },
  { name: "Product Documentation", href: "#specifications" },
  { name: "Request a Quote", href: "#contact-engineering" },
];

const PRODUCTS_LINKS_HI = [
  { name: "रेलवे बैरियर सिस्टम", href: "#railway-barrier-system" },
  { name: "डिजिटल अर्थ लीकेज डिटेक्टर", href: "#earth-leakage-detector" },
  { name: "नियंत्रित रेलवे पहुंच", href: "#restricted-access" },
  { name: "औद्योगिक विद्युत पैनल", href: "#industrial-panels" },
];

const COMPANY_LINKS_HI = [
  { name: "ग्लोबल के बारे में", href: "/about" },
  { name: "इंजीनियरिंग", href: "#engineering" },
  { name: "अनुप्रयोग", href: "#applications" },
  { name: "संसाधन", href: "#specifications" },
  { name: "संपर्क", href: "#contact-engineering" },
];

const SUPPORT_LINKS_HI = [
  { name: "तकनीकी सहायता", href: "#contact-engineering" },
  { name: "उत्पाद दस्तावेज़", href: "#specifications" },
  { name: "कोटेशन का अनुरोध करें", href: "#contact-engineering" },
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
  const supportLinks = lang === "hi" ? SUPPORT_LINKS_HI : SUPPORT_LINKS_EN;

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

        {/* Main Columns Grid: 2 columns on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-12 sm:pb-16">
          
          {/* Column 1: PRODUCTS */}
          <div className="col-span-1 lg:col-span-3">
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
          <div className="col-span-1 lg:col-span-3">
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

          {/* Column 3: SUPPORT */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4 sm:mb-6">
              {lang === "hi" ? "सहायता एवं सेवा" : "Support"}
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {supportLinks.map((link) => (
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

          {/* Column 4: SOCIAL CONNECT */}
          <div className="col-span-1 sm:col-span-3 lg:col-span-3 flex flex-col justify-start lg:items-end">
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4 sm:mb-6">
              {lang === "hi" ? "सोशल मीडिया" : "Connect"}
            </h4>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              
              {/* X (Twitter) */}
              <a
                href="#x"
                aria-label="X (Twitter)"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-800 hover:border-[#ff3131] hover:text-[#ff3131] hover:bg-[#ff3131]/5 transition-all shadow-sm cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-800 hover:border-[#ff3131] hover:text-[#ff3131] hover:bg-[#ff3131]/5 transition-all shadow-sm cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-800 hover:border-[#ff3131] hover:text-[#ff3131] hover:bg-[#ff3131]/5 transition-all shadow-sm cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-800 hover:border-[#ff3131] hover:text-[#ff3131] hover:bg-[#ff3131]/5 transition-all shadow-sm cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-800 hover:border-[#ff3131] hover:text-[#ff3131] hover:bg-[#ff3131]/5 transition-all shadow-sm cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

            </div>
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

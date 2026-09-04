"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import GlobalLogo from "./GlobalLogo";

const QUICK_LINKS_EN = [
  { name: "Careers", href: "#careers" },
  { name: "Investors", href: "#investors" },
  { name: "Suppliers", href: "#suppliers" },
  { name: "Supplier Portal login", href: "#supplier-portal" },
  { name: "Customers", href: "#customers" },
  { name: "Customer Engagement Hub login", href: "#customer-hub" },
  { name: "Technology licensing", href: "#technology-licensing" },
  { name: "Latest news", href: "#latest-news" },
  { name: "RSS feed", href: "#rss" },
  { name: "Auditor hotline", href: "#auditor-hotline" },
  { name: "Global contacts", href: "#global-contacts" },
];

const SITE_INFORMATION_EN = [
  { name: "Cookie consent", href: "#cookie-consent" },
  { name: "Cookie notices", href: "#cookie-notices" },
  { name: "Scam and fraud alert", href: "#scam-alert" },
  { name: "Terms and conditions", href: "#terms" },
  { name: "Privacy notice", href: "#privacy" },
  { name: "Disclaimers", href: "#disclaimers" },
  { name: "Accessibility", href: "#accessibility" },
  { name: "Sitemap", href: "#sitemap" },
];

const OTHER_WEBSITES_EN = [
  { name: "Aramco Trading Company", href: "#trading" },
  { name: "Aramco Ventures", href: "#ventures" },
  { name: "LAB7", href: "#lab7" },
  { name: "Taleed", href: "#taleed" },
  { name: "Wa’ed Ventures", href: "#waed" },
  { name: "Valvoline", href: "#valvoline" },
  { name: "Ithra", href: "#ithra" },
  { name: "Aramco Stadium", href: "#stadium" },
  { name: "Sports Sponsorship Hub", href: "#sponsorship" },
];

const QUICK_LINKS_HI = [
  { name: "करियर और अवसर", href: "#careers" },
  { name: "निवेशक", href: "#investors" },
  { name: "आपूर्तिकर्ता", href: "#suppliers" },
  { name: "आपूर्तिकर्ता पोर्टल लॉगिन", href: "#supplier-portal" },
  { name: "ग्राहक और भागीदार", href: "#customers" },
  { name: "ग्राहक सहभागिता हब लॉगिन", href: "#customer-hub" },
  { name: "प्रौद्योगिकी लाइसेंसिंग", href: "#technology-licensing" },
  { name: "नवीनतम समाचार", href: "#latest-news" },
  { name: "आरएसएस फ़ीड", href: "#rss" },
  { name: "ऑडिटर हॉटलाइन", href: "#auditor-hotline" },
  { name: "वैश्विक संपर्क", href: "#global-contacts" },
];

const SITE_INFORMATION_HI = [
  { name: "कुकी सहमति", href: "#cookie-consent" },
  { name: "कुकी सूचनाएं", href: "#cookie-notices" },
  { name: "धोखाधड़ी और घपला चेतावनी", href: "#scam-alert" },
  { name: "नियम एवं शर्तें", href: "#terms" },
  { name: "गोपनीयता सूचना", href: "#privacy" },
  { name: "अस्वीकरण", href: "#disclaimers" },
  { name: "पहुंच-योग्यता", href: "#accessibility" },
  { name: "साइटमैप", href: "#sitemap" },
];

const OTHER_WEBSITES_HI = [
  { name: "अरामको ट्रेडिंग कंपनी", href: "#trading" },
  { name: "अरामको वेंचर्स", href: "#ventures" },
  { name: "लैब 7 (LAB7)", href: "#lab7" },
  { name: "तालिद (Taleed)", href: "#taleed" },
  { name: "वाएद वेंचर्स (Wa’ed)", href: "#waed" },
  { name: "वाल्वोलिन (Valvoline)", href: "#valvoline" },
  { name: "इथरा (Ithra)", href: "#ithra" },
  { name: "अरामको स्टेडियम", href: "#stadium" },
  { name: "खेल प्रायोजन हब", href: "#sponsorship" },
];

export default function Footer() {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = lang === "hi" ? QUICK_LINKS_HI : QUICK_LINKS_EN;
  const siteInfo = lang === "hi" ? SITE_INFORMATION_HI : SITE_INFORMATION_EN;
  const otherWebsites = lang === "hi" ? OTHER_WEBSITES_HI : OTHER_WEBSITES_EN;

  return (
    <footer className="w-full bg-white text-gray-900 pt-16 sm:pt-20 pb-12 border-t border-gray-200 font-sans select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          
          {/* Column 1: QUICK LINKS */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-6">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-[13px] text-gray-700 hover:text-[#ff3131] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: SITE INFORMATION */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-6">
              {t.footer.siteInfo}
            </h4>
            <ul className="space-y-3">
              {siteInfo.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-[13px] text-gray-700 hover:text-[#ff3131] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: OTHER WEBSITES */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-6">
              {t.footer.otherWebsites}
            </h4>
            <ul className="space-y-3">
              {otherWebsites.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-[13px] text-gray-700 hover:text-[#ff3131] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Outlined Circular Social Icons */}
          <div className="lg:col-span-3 flex lg:justify-end">
            <div className="grid grid-cols-2 gap-3 w-fit h-fit">
              
              {/* X (Twitter) */}
              <a
                href="#x"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-800 hover:border-[#ff3131] hover:text-[#ff3131] hover:bg-[#ff3131]/5 transition-all shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Facebook (F) */}
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-800 hover:border-[#ff3131] hover:text-[#ff3131] hover:bg-[#ff3131]/5 transition-all shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* LinkedIn (in) */}
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-800 hover:border-[#ff3131] hover:text-[#ff3131] hover:bg-[#ff3131]/5 transition-all shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-800 hover:border-[#ff3131] hover:text-[#ff3131] hover:bg-[#ff3131]/5 transition-all shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-800 hover:border-[#ff3131] hover:text-[#ff3131] hover:bg-[#ff3131]/5 transition-all shadow-sm col-span-2 mx-auto"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-xs text-gray-600 order-2 md:order-1 font-normal">
            {t.footer.copyright}
          </div>

          <div className="order-1 md:order-2">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-800 hover:border-[#ff3131] hover:text-[#ff3131] hover:bg-[#ff3131]/5 transition-all shadow-sm cursor-pointer group"
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

          <div className="order-3 flex items-center">
            <GlobalLogo theme="light" size="md" />
          </div>

        </div>

      </div>
    </footer>
  );
}

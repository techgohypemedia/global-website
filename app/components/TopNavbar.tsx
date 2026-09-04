"use client";

import React, { useState } from "react";

export default function TopNavbar() {
  const [selectedLang, setSelectedLang] = useState<"hi" | "en">("en");
  const [isRegionOpen, setIsRegionOpen] = useState(false);

  return (
    <header className="w-full bg-black/80 backdrop-blur-sm text-white border-b border-white/10 text-xs sm:text-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">

        {/* Left Side: Language Switcher & Global Contacts */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Language Switcher */}
          <div className="flex items-center space-x-2 text-xs">
            <button
              onClick={() => setSelectedLang("hi")}
              className={`transition-colors duration-200 hover:text-red-400 font-medium ${
                selectedLang === "hi" ? "text-red-500 font-bold" : "text-white"
              }`}
            >
              हिन्दी
            </button>
            <span className="text-white/40 select-none">|</span>
            <button
              onClick={() => setSelectedLang("en")}
              className={`transition-colors duration-200 hover:text-red-400 font-medium ${
                selectedLang === "en" ? "text-red-500 font-bold" : "text-white"
              }`}
            >
              English
            </button>
          </div>

          {/* Global Contacts Link */}
          <a
            href="#global-contacts"
            className="text-white/90 hover:text-red-400 transition-colors duration-200 text-xs sm:text-sm font-normal"
          >
            Global contacts
          </a>
        </div>

        {/* Right Side: Region Selector & Accessibility */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          {/* Region Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => setIsRegionOpen(!isRegionOpen)}
              className="flex items-center space-x-2 text-white/90 hover:text-white group transition-colors duration-200"
              aria-expanded={isRegionOpen}
            >
              <span className="text-xs sm:text-sm hidden md:inline-block font-normal">
                You are in Aramco Global
              </span>
              <span className="text-xs sm:text-sm md:hidden font-normal">
                Global
              </span>

              {/* Globe Icon */}
              <svg
                className="w-4 h-4 text-white group-hover:text-red-400 transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>

              {/* Chevron Down Icon */}
              <svg
                className={`w-3 h-3 text-white/80 transition-transform duration-200 ${isRegionOpen ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Region Dropdown Menu */}
            {isRegionOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-[#1a1a1a] border border-white/10 rounded-md shadow-2xl py-2 z-50">
                <div className="px-4 py-2 text-xs text-white/50 uppercase tracking-wider font-semibold border-b border-white/10">
                  Select Region
                </div>
                <a
                  href="#global"
                  className="block px-4 py-2 text-sm text-red-400 bg-white/5 font-medium hover:bg-white/10"
                >
                  Aramco Global (Current)
                </a>
                <a
                  href="#americas"
                  className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5"
                >
                  Aramco Americas
                </a>
                <a
                  href="#asia"
                  className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5"
                >
                  Aramco Asia
                </a>
                <a
                  href="#europe"
                  className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5"
                >
                  Aramco Europe
                </a>
              </div>
            )}
          </div>

          {/* Accessibility Icon */}
          <button
            aria-label="Accessibility settings"
            className="p-1 rounded text-white/90 hover:text-red-400 transition-colors duration-200"
            title="Accessibility"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              viewBox="0 0 24 24"
            >
              {/* Human / Accessibility Silhouette */}
              <circle cx="12" cy="4.5" r="2.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 9h16" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v11" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 20l4.5-5 4.5 5" />
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
}

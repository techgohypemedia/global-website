"use client";

import React, { useState } from "react";
import GlobalLogo from "./GlobalLogo";

const NAV_LINKS = [
  { name: "ABOUT US", href: "#about-us" },
  { name: "WHAT WE DO", href: "#what-we-do" },
  { name: "SUSTAINABILITY", href: "#sustainability" },
  { name: "INVESTORS", href: "#investors" },
  { name: "NEWS & MEDIA", href: "#news-media" },
  { name: "CAREERS", href: "#careers" },
];

export default function MainNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black/80 backdrop-blur-md border-b border-white/10 text-white font-sans transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left Side: GLOBAL. Logo + Navigation Links */}
        <div className="flex items-center">
          <a href="/" className="flex items-center group cursor-pointer flex-shrink-0 mr-8 lg:mr-14 xl:mr-20" aria-label="GLOBAL. Home">
            <GlobalLogo theme="dark" size="md" />
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs tracking-wider font-semibold uppercase text-white/90 hover:text-[#ff3131] transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
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



      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 border-t border-white/10 px-6 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-sm font-semibold tracking-wider uppercase text-white/90 hover:text-[#ff3131] py-1 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}


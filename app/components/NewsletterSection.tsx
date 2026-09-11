"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function NewsletterSection() {
  const { lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    }
  };

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#f8f9fb] to-white text-gray-900 relative select-none border-t border-gray-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Fresh Newsletter Card with Soft Red/Slate Accents */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl bg-white border border-gray-200/90 shadow-[0_15px_45px_rgba(0,0,0,0.06)] p-7 sm:p-12 lg:p-14 overflow-hidden">
          
          {/* Subtle Decorative Ambient Accents */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-rose-500/[0.08] rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#ff3131]/[0.06] rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ff3131_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="relative z-10 max-w-3xl">
            
            {/* Main Headline */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-950 tracking-tight leading-[1.2] mb-6 sm:mb-7 font-sans">
              {lang === "hi" ? (
                <>
                  हमारी नवीनतम इंजीनियरिंग एवं <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-gray-800 to-[#ff3131]">
                    सुरक्षा जानकारियों से जुड़े रहें
                  </span>
                </>
              ) : (
                <>
                  Stay Inspired with Our <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-950 via-gray-800 to-[#ff3131]">
                    Engineering & Technical Updates
                  </span>
                </>
              )}
            </h3>

            {/* Subscribe Form */}
            {isSubmitted ? (
              <div className="p-4 sm:p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm sm:text-base font-medium flex items-center space-x-3 shadow-sm animate-in fade-in duration-300">
                <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>
                  {lang === "hi"
                    ? "सदस्यता लेने के लिए धन्यवाद! हम जल्द ही अपडेट भेजेंगे।"
                    : "Thank you for subscribing! We'll keep you updated with our latest releases."}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                
                {/* Email Input Field with Mail Icon */}
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com"
                    className="w-full pl-11 pr-4 py-3.5 sm:py-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#ff3131] focus:ring-4 focus:ring-[#ff3131]/10 transition-all text-sm sm:text-base shadow-sm"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="px-8 py-3.5 sm:py-4 rounded-xl bg-[#ff3131] hover:bg-[#d62828] text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-[0_4px_14px_rgba(255,49,49,0.35)] hover:shadow-[0_6px_20px_rgba(255,49,49,0.45)] flex items-center justify-center space-x-2 shrink-0 cursor-pointer group"
                >
                  <span>{lang === "hi" ? "अभी सब्सक्राइब करें" : "Subscribe Now"}</span>
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1.5 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

              </form>
            )}

            {/* Feature Checklist Below Form */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-600 font-medium pt-5">
              <span className="flex items-center space-x-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                <span>{lang === "hi" ? "कोई स्पैम नहीं" : "Zero Spam"}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                <span>{lang === "hi" ? "तकनीकी जानकारियां" : "Technical Bulletins"}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                <span>{lang === "hi" ? "कभी भी अनसब्सक्राइब करें" : "Unsubscribe Anytime"}</span>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

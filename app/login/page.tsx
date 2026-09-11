"use client";

import React, { useState } from "react";
import Link from "next/link";
import GlobalLogo from "../components/GlobalLogo";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";

function LoginContent() {
  const { lang, setLang } = useLanguage();
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!employeeId.trim() || !password.trim()) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#ff3131] selection:text-white font-sans">
      
      {/* Top Header Bar */}
      <header className="relative z-20 w-full border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group cursor-pointer" aria-label="GLOBAL. Home">
            <GlobalLogo theme="light" size="md" />
          </Link>

          {/* Right Header Controls */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-1.5 text-xs">
              <button
                type="button"
                onClick={() => setLang("hi")}
                className={`px-2.5 py-1 rounded-none transition-colors ${
                  lang === "hi" ? "text-[#ff3131] font-bold bg-red-50 border border-red-200" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                हिन्दी
              </button>
              <span className="text-gray-300">|</span>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-none transition-colors ${
                  lang === "en" ? "text-[#ff3131] font-bold bg-red-50 border border-red-200" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                English
              </button>
            </div>

            {/* Back to Home Link */}
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-xs sm:text-sm text-gray-700 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 border border-gray-300 px-4 py-1.5 rounded-none transition-all duration-200"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>{lang === "hi" ? "मुख्य पृष्ठ" : "Back to Website"}</span>
            </Link>
          </div>

        </div>
      </header>

      {/* Main Login Card Section */}
      <main className="relative z-10 flex-grow flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 bg-white">
        <div className="w-full max-w-md">
          
          {/* Clean Sharp White Card */}
          <div className="bg-white border border-gray-200 rounded-none p-8 sm:p-10 shadow-lg shadow-gray-100">
            
            {/* Card Title */}
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 font-sans">
                {lang === "hi" ? "कर्मचारी लॉगिन" : "Employee Login"}
              </h1>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* 1. Employee ID Field */}
              <div>
                <label className="block text-xs font-semibold text-gray-800 mb-2 tracking-wide uppercase">
                  {lang === "hi" ? "कर्मचारी आईडी (Employee ID)" : "Employee ID"}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="employee-id-input"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    placeholder="e.g. EMP-ENG-4028"
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-none text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#ff3131] focus:ring-1 focus:ring-[#ff3131] transition-all duration-150"
                    required
                    autoComplete="username"
                  />
                </div>
              </div>

              {/* 2. Password Field */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-semibold text-gray-800 tracking-wide uppercase">
                    {lang === "hi" ? "पासवर्ड (Password)" : "Password"}
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(true)}
                    className="text-xs text-[#ff3131] hover:text-[#d62828] hover:underline transition-colors cursor-pointer font-medium"
                  >
                    {lang === "hi" ? "पासवर्ड भूल गए?" : "Forgot Password?"}
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="11" width="18" height="11" rx="0" ry="0" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="employee-password-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-11 py-3 bg-white border border-gray-300 rounded-none text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#ff3131] focus:ring-1 focus:ring-[#ff3131] transition-all duration-150"
                    required
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center pt-1">
                <input
                  id="remember-me-checkbox"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded-none border border-gray-300 bg-white text-[#ff3131] focus:ring-0 accent-[#ff3131] cursor-pointer"
                />
                <label htmlFor="remember-me-checkbox" className="ml-2.5 text-xs text-gray-700 cursor-pointer select-none">
                  {lang === "hi" ? "इस डिवाइस पर याद रखें" : "Remember this device for 30 days"}
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                id="employee-login-submit-button"
                className="w-full py-3.5 px-4 rounded-none bg-[#ff3131] hover:bg-[#e02020] text-white font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-md shadow-red-500/20 active:translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed border border-[#ff3131]"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>{lang === "hi" ? "सत्यापित किया जा रहा है..." : "Authenticating..."}</span>
                  </>
                ) : (
                  <>
                    <span>{lang === "hi" ? "साइन इन करें" : "Sign In to Portal"}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>

            </form>

          </div>

        </div>
      </main>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-150">
          <div className="bg-white border border-gray-200 rounded-none max-w-sm w-full p-6 text-start shadow-2xl relative">
            <h3 className="text-lg font-bold text-gray-900 mb-2 font-sans">
              {lang === "hi" ? "पासवर्ड रीसेट सहायता" : "Password Reset Assistance"}
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              {lang === "hi"
                ? "सुरक्षा प्रोटोकॉल के अनुसार, कर्मचारी क्रेडेंशियल केवल आंतरिक सुरक्षा डेस्क या सिस्टम एडमिनिस्ट्रेटर द्वारा रीसेट किए जा सकते हैं।"
                : "For infrastructure safety, employee credentials can only be reset through your internal systems administrator or authorized IT security officer."}
            </p>
            <div className="p-3.5 bg-gray-50 rounded-none border border-gray-200 text-xs text-gray-600 mb-5">
              <p className="font-semibold text-gray-900 mb-1">
                {lang === "hi" ? "आंतरिक सहायता डेस्क:" : "Internal Help Desk:"}
              </p>
              <p>it-support@globalsystems.com</p>
              <p>Ext: +91 (0) 11-4098-SAFE</p>
            </div>
            <button
              type="button"
              onClick={() => setShowForgotModal(false)}
              className="w-full py-2.5 bg-[#ff3131] hover:bg-[#e02020] text-white font-bold text-xs uppercase tracking-wider rounded-none transition-all cursor-pointer"
            >
              {lang === "hi" ? "ठीक है, समझ गया" : "Understood"}
            </button>
          </div>
        </div>
      )}

      {/* Bottom Footer */}
      <footer className="relative z-10 w-full py-4 border-t border-gray-200 bg-gray-50 text-center text-xs text-gray-500">
        <p>© 2026 GLOBAL. Railway & Electrical Safety Systems. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default function LoginPage() {
  return (
    <LanguageProvider>
      <LoginContent />
    </LanguageProvider>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function OurHistoryVideo() {
  const { lang, t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      if (!containerRef.current || !cardRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress between entering viewport and reaching upper screen
      const start = windowHeight * 0.95;
      const end = windowHeight * 0.15;
      const raw = (start - rect.top) / (start - end);
      const progress = Math.min(Math.max(raw, 0), 1);

      // Direct GPU-accelerated style mutations (0 React state re-renders = 0 lag)
      const scale = 0.88 + progress * 0.12;
      const widthPercent = 82 + progress * 18;
      const radius = Math.max(0, 32 * (1 - progress));

      cardRef.current.style.width = `${widthPercent}%`;
      cardRef.current.style.transform = `scale(${scale})`;
      cardRef.current.style.borderRadius = `${radius}px`;
      cardRef.current.style.maxWidth = progress >= 0.98 ? "100%" : "1440px";

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="w-full bg-white text-gray-900 pt-16 sm:pt-24 pb-12 sm:pb-20 overflow-hidden border-t border-gray-100">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-widest text-[#ff3131] uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff3131] animate-pulse" />
              <span>{t.history.badge}</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1e293b] leading-tight font-sans">
              {t.history.titleLine1} <br className="hidden sm:inline" />
              {t.history.titleLine2}
            </h2>
          </div>

          <a
            href="#specifications"
            className="inline-flex items-center space-x-3 text-[#ff3131] hover:text-[#d62828] font-medium text-sm sm:text-base mt-6 sm:mt-0 group cursor-pointer transition-colors"
          >
            <span className="group-hover:underline font-semibold">{t.history.exploreHistory}</span>
            <span className="w-10 h-10 rounded-full border-2 border-[#ff3131] text-[#ff3131] flex items-center justify-center group-hover:bg-[#ff3131] group-hover:text-white transition-all duration-300 shadow-sm">
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Dynamic Scroll Expanding Video Container (Shows Only Video) */}
      <div
        ref={containerRef}
        className="w-full flex justify-center items-center overflow-hidden"
      >
        <div
          ref={cardRef}
          className="relative h-[260px] xs:h-[320px] sm:h-[540px] lg:h-[640px] overflow-hidden group shadow-2xl transition-[width,transform,border-radius] duration-150 ease-out will-change-transform bg-black"
          style={{
            width: "82%",
            transform: "scale(0.88)",
            borderRadius: "32px",
            maxWidth: "1440px",
          }}
          onClick={() => togglePlay()}
        >
          {/* Main Clean Video Player */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            poster="/images/crash_barrier_perimeter.jpg"
            className="w-full h-full object-cover cursor-pointer"
          >
            <source src="/vido_gwr_video_mvp.mp4" type="video/mp4" />
          </video>

          {/* Subtle Bottom Gradient for Text Legibility */}
          <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

          {/* Top Floating Badge */}
          <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20 pointer-events-none">
            <div className="inline-flex items-center space-x-1.5 sm:space-x-2 text-[9px] sm:text-xs font-semibold tracking-wider text-white uppercase bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/20 shadow-md">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff3131] animate-pulse" />
              <span>{lang === "hi" ? "इंजीनियरिंग शोकेस" : "ENGINEERING SHOWCASE"}</span>
            </div>
          </div>

          {/* Minimal Floating Controls (Top Right) */}
          <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 flex items-center space-x-2 opacity-90 group-hover:opacity-100 transition-opacity">
            {/* Play/Pause Toggle */}
            <button
              onClick={togglePlay}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 hover:border-[#ff3131] hover:bg-[#ff3131] transition-all flex items-center justify-center cursor-pointer shadow-lg"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Mute/Unmute Toggle */}
            <button
              onClick={toggleMute}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 hover:border-[#ff3131] hover:bg-[#ff3131] transition-all flex items-center justify-center cursor-pointer shadow-lg"
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? (
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
          </div>

          {/* Elegant Bottom Information Bar */}
          <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-8 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-3 pointer-events-none">
            <div className="max-w-xl">
              <h3 className="text-sm sm:text-2xl font-semibold text-white leading-tight sm:leading-snug drop-shadow-md font-sans">
                {t.history.legacyHeadline}
              </h3>
              <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-sm text-gray-200 font-light drop-shadow">
                {lang === "hi"
                  ? "रेलवे बैरियर सिस्टम • डिजिटल अर्थ लीकेज डिटेक्शन"
                  : "Railway Barrier Systems • Digital Earth Leakage Detection"}
              </p>
            </div>

            {/* Micro Spec Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[9px] sm:text-[11px] font-mono font-medium text-white/90">
                {lang === "hi" ? "फेल-सेफ" : "FAIL-SAFE"}
              </span>
              <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[9px] sm:text-[11px] font-mono font-medium text-white/90">
                {lang === "hi" ? "सतत निगरानी" : "CONTINUOUS"}
              </span>
              <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-[#ff3131]/90 backdrop-blur-md text-[9px] sm:text-[11px] font-mono font-semibold text-white">
                {lang === "hi" ? "फ़ील्ड-रेडी" : "FIELD-READY"}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}





"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function OurHistoryVideo() {
  const { t } = useLanguage();
  const [isPlayingModal, setIsPlayingModal] = useState(false);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!containerRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Animation starts when the top of the video container is at 90% of the viewport height
          // Animation completes (100% full size) when the top reaches 18% of viewport height
          const start = windowHeight * 0.9;
          const end = windowHeight * 0.18;
          const raw = (start - rect.top) / (start - end);
          const clamped = Math.min(Math.max(raw, 0), 1);

          setProgress(clamped);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Calculate dynamic dimensions based on scroll progress
  // Starts small (width 82%, scale 0.85, rounded 28px, height 440px)
  // Expands to full screen width (100%, scale 1.0, rounded 0px, height 700px)
  const currentWidthPercent = 82 + progress * 18; // 82% -> 100%
  const currentScale = 0.86 + progress * 0.14; // 0.86 -> 1.0
  const currentRadius = Math.max(0, 28 * (1 - progress)); // 28px -> 0px
  const currentHeight = 440 + progress * 240; // 440px -> 680px

  return (
    <section className="w-full bg-white text-gray-900 pt-16 sm:pt-24 pb-8 sm:pb-12 overflow-hidden border-t border-gray-100">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between">
          <div className="max-w-2xl">
            <span className="block text-xs sm:text-sm font-semibold tracking-widest text-[#ff3131] uppercase mb-3">
              {t.history.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1e293b] leading-tight font-sans">
              {t.history.titleLine1} <br className="hidden sm:inline" />
              {t.history.titleLine2}
            </h2>
          </div>

          <a
            href="#history"
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

      {/* Dynamic Scroll Expanding Container (Small -> Full Width) */}
      <div
        ref={containerRef}
        className="w-full flex justify-center items-center overflow-hidden transition-all duration-150 ease-out"
      >
        <div
          className="relative overflow-hidden cursor-pointer group shadow-2xl transition-[width,height,border-radius,transform] duration-200 ease-out"
          style={{
            width: `${currentWidthPercent}%`,
            height: `${currentHeight}px`,
            borderRadius: `${currentRadius}px`,
            transform: `scale(${currentScale})`,
            maxWidth: progress >= 0.98 ? "100%" : "1400px",
          }}
          onClick={() => setIsPlayingModal(true)}
        >
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/safaniyah_offshore.jpg"
            className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-1000 ease-out group-hover:scale-105"
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
              type="video/mp4"
            />
          </video>

          {/* Cinematic Dark Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

          {/* Signature Red Curve Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M 3,10 Q 3,92 97,92"
                stroke="url(#aramcoCurveGradient)"
                strokeWidth="0.8"
                vectorEffect="non-scaling-stroke"
              />
              <defs>
                <linearGradient id="aramcoCurveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff3131" />
                  <stop offset="50%" stopColor="#ff4d4d" />
                  <stop offset="100%" stopColor="#ff3131" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Center Overlay: Play Button & Title */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-12 text-center text-white z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/90 flex items-center justify-center mb-6 backdrop-blur-sm bg-black/40 group-hover:bg-[#ff3131] group-hover:text-white group-hover:border-[#ff3131] transition-all duration-300 transform group-hover:scale-110 shadow-2xl">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 ml-1 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-md font-sans max-w-2xl px-4">
              {t.history.legacyHeadline}
            </h3>

            <span className="mt-3 text-xs sm:text-sm text-gray-200 font-medium tracking-wide">
              {t.history.watchDoc}
            </span>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isPlayingModal && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <button
              onClick={() => setIsPlayingModal(false)}
              className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-20 text-white/80 hover:text-white bg-black/60 p-2 rounded-full hover:bg-black/90 transition-colors"
              aria-label="Close video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative pt-[56.25%] w-full">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Aramco History Documentary"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


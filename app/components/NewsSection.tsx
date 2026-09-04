"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function NewsSection() {
  const { lang, t } = useLanguage();

  const NEWS_LIST = [
    {
      id: "french-partnerships",
      category: t.news.news1Cat,
      title: t.news.news1Title,
      link: "#news-french-partnerships",
    },
    {
      id: "maaden-agreement",
      category: t.news.news2Cat,
      title: t.news.news2Title,
      link: "#news-maaden",
    },
    {
      id: "q2-results",
      category: t.news.news3Cat,
      title: t.news.news3Title,
      link: "#news-q2-results",
    },
    {
      id: "petronas-transfer",
      category: t.news.news4Cat,
      title: t.news.news4Title,
      link: "#news-petronas",
    },
  ];

  return (
    <section className="w-full bg-[#edf0f4] text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/70">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1e293b] leading-[1.2] font-sans">
              {t.news.titleLine1} <br />
              <span className="font-normal">{t.news.titleLine2}</span>
            </h2>
          </div>

          <a
            href="#all-news"
            className="inline-flex items-center space-x-3 text-red-600 hover:text-red-700 font-medium text-sm sm:text-base mt-6 sm:mt-0 group cursor-pointer"
          >
            <span className="group-hover:underline font-semibold">{t.news.readAll}</span>
            <span className="w-10 h-10 rounded-full border-2 border-red-600 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
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

        {/* 4 News Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS_LIST.map((news) => (
            <a
              key={news.id}
              href={news.link}
              className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 min-h-[380px] sm:min-h-[420px] flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-gray-100"
            >
              <div>
                <div className="text-[11px] sm:text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">
                  {news.category}
                </div>

                <h3 className="text-base sm:text-lg font-normal text-[#1e293b] group-hover:text-red-600 transition-colors leading-snug font-sans">
                  {news.title}
                </h3>
              </div>

              <div className="flex justify-end pt-6">
                <div className="w-9 h-9 rounded-full border-2 border-red-600 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

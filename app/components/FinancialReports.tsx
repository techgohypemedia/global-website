"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function FinancialReports() {
  const { lang, t } = useLanguage();
  const [savedItems, setSavedItems] = useState<string[]>([]);
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const REPORTS = [
    {
      id: "q2-2026",
      title: t.financial.doc1,
      date: lang === "hi" ? "04 अगस्त 2026" : "August 04, 2026",
      fileType: ".pdf",
      fileSize: "2.4MB",
      downloadUrl: "#download-q2-2026",
    },
    {
      id: "annual-2025",
      title: t.financial.doc2,
      date: lang === "hi" ? "10 मार्च 2026" : "March 10, 2026",
      fileType: ".pdf",
      fileSize: "16.9MB",
      downloadUrl: "#download-annual-2025",
    },
    {
      id: "sustainability-2025",
      title: t.financial.doc3,
      date: lang === "hi" ? "12 मई 2026" : "May 12, 2026",
      fileType: ".pdf",
      fileSize: "9.8MB",
      downloadUrl: "#download-sustainability-2025",
    },
  ];

  const toggleSave = (id: string) => {
    setSavedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleDownload = (name: string) => {
    setDownloadNotice(`${t.financial.downloadNotice}: ${name}`);
    setTimeout(() => setDownloadNotice(null), 3000);
  };

  return (
    <section className="w-full bg-[#edf0f4] text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/70">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1e293b] leading-[1.2] font-sans">
              {t.financial.titleLine1} <br />
              <span className="font-normal">{t.financial.titleLine2}</span>
            </h2>
          </div>

          <a
            href="#all-reports"
            className="inline-flex items-center space-x-3 text-red-600 hover:text-red-700 font-medium text-sm sm:text-base mt-6 sm:mt-0 group cursor-pointer"
          >
            <span className="group-hover:underline font-semibold">{t.financial.seeAll}</span>
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

        {/* Main White Card Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-gray-200/60">
          
          <h3 className="text-lg sm:text-xl font-normal text-[#1e293b] mb-8 pb-4 border-b border-gray-100 font-sans">
            {t.financial.keyDocs}
          </h3>

          <div className="divide-y divide-gray-200/70">
            {REPORTS.map((report) => {
              const isSaved = savedItems.includes(report.id);
              return (
                <div
                  key={report.id}
                  className="py-5 sm:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-gray-50/70 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-lg transition-colors"
                >
                  <div className="flex-1">
                    <a
                      href={report.downloadUrl}
                      onClick={(e) => {
                        e.preventDefault();
                        handleDownload(report.title);
                      }}
                      className="text-sm sm:text-base text-gray-900 group-hover:text-[#ff3131] transition-colors font-normal hover:underline cursor-pointer"
                    >
                      {report.title}
                    </a>
                  </div>

                  <div className="flex items-center justify-between md:justify-end space-x-6 sm:space-x-8 rtl:space-x-reverse text-xs sm:text-sm text-gray-500">
                    <span className="font-normal text-gray-500">
                      {report.date} • {report.fileType} • {report.fileSize}
                    </span>

                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <button
                        onClick={() => handleDownload(report.title)}
                        className="text-[#ff3131] hover:text-[#d62828] p-1.5 rounded-full hover:bg-[#ff3131]/10 transition-colors cursor-pointer"
                        title="Download document"
                        aria-label={`Download ${report.title}`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16" />
                        </svg>
                      </button>

                      <button
                        onClick={() => toggleSave(report.id)}
                        className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                          isSaved
                            ? "text-emerald-600 bg-emerald-50"
                            : "text-[#ff3131] hover:text-[#d62828] hover:bg-[#ff3131]/10"
                        }`}
                        title={isSaved ? "Saved" : "Add to list"}
                        aria-label="Add to list"
                      >
                        {isSaved ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
            <button
              onClick={() => handleDownload("All Reports (zip-file)")}
              className="inline-flex items-center space-x-2.5 rtl:space-x-reverse text-xs sm:text-sm font-semibold text-[#ff3131] hover:text-[#d62828] group cursor-pointer"
            >
              <span className="group-hover:underline">{t.financial.downloadZip}</span>
              <span className="w-8 h-8 rounded-full border-2 border-[#ff3131] text-[#ff3131] flex items-center justify-center group-hover:bg-[#ff3131] group-hover:text-white transition-all duration-300 shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v10m0 0l-3-3m3 3l3-3" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 18h14" />
                </svg>
              </span>
            </button>
          </div>

        </div>

        {downloadNotice && (
          <div className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-50 bg-[#140202] text-white px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-3 rtl:space-x-reverse border border-[#ff3131] animate-in fade-in duration-300">
            <svg className="w-5 h-5 text-[#ff3131] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="text-sm font-medium">{downloadNotice}</span>
          </div>
        )}

      </div>
    </section>
  );
}

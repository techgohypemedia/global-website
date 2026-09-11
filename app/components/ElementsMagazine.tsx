"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ElementsMagazine() {
  const { lang, t } = useLanguage();

  const PRODUCT_1 = {
    id: "railway-barrier-system",
    tag: lang === "hi" ? "उत्पाद 01 • रेलवे सुरक्षा" : "OUR SOLUTIONS • PRODUCT 01",
    name: lang === "hi" ? "रेलवे बैरियर सिस्टम" : "Railway Barrier System",
    heading: lang === "hi" ? "नियंत्रित क्रॉसिंग। सुरक्षित आवागमन।" : "Controlled crossings. Safer movement.",
    desc:
      lang === "hi"
        ? "ग्लोबल रेलवे बैरियर सिस्टम लेवल क्रॉसिंग और प्रतिबंधित क्षेत्रों में सड़क यातायात को नियंत्रित करने के लिए डिज़ाइन किए गए हैं। मजबूत यांत्रिक निर्माण और विश्वसनीय नियंत्रण वास्तुकला का संयोजन।"
        : "GLOBAL Railway Barrier Systems are designed to control road traffic at railway level crossings and restricted railway access areas. The system combines robust mechanical construction with dependable control architecture to support safe and consistent barrier operation. Designed for demanding outdoor environments, the barrier can be configured according to railway, infrastructure and project-specific requirements.",
    points:
      lang === "hi"
        ? [
            "विश्वसनीय संचालन",
            "मजबूत निर्माण",
            "नियंत्रण एकीकरण",
            "आपातकालीन संचालन",
            "कम रखरखाव डिज़ाइन",
            "परियोजना-आधारित कॉन्फ़िगरेशन",
          ]
        : [
            "Reliable Operation",
            "Robust Construction",
            "Control Integration",
            "Emergency Operation",
            "Low-Maintenance Design",
            "Project-Based Configuration",
          ],
    image: "/images/boom_barrier_hero.jpg",
    fallbackImage: "/images/crash_barrier_perimeter.jpg",
    link: "#railway-barrier-system",
    cta: lang === "hi" ? "रेलवे बैरियर सिस्टम देखें" : "Explore Railway Barrier System",
  };

  const SIDE_PRODUCTS = [
    {
      id: "earth-leakage-detector",
      tag: lang === "hi" ? "उत्पाद 02 • विद्युत सुरक्षा" : "OUR SOLUTIONS • PRODUCT 02",
      name: lang === "hi" ? "डिजिटल अर्थ लीकेज डिटेक्टर" : "Digital Earth Leakage Detector",
      heading:
        lang === "hi"
          ? "समस्या बढ़ने से पहले लीकेज का पता लगाएं।"
          : "Detect electrical leakage before it becomes a bigger problem.",
      desc:
        lang === "hi"
          ? "ग्लोबल डिजिटल अर्थ लीकेज डिटेक्टर विद्युत प्रणालियों में अनचाहे अर्थ लीकेज करंट की निरंतर निगरानी करते हैं। स्पष्ट डिजिटल डिस्प्ले त्वरित निरीक्षण और सुधारात्मक कार्रवाई में मदद करता है।"
          : "GLOBAL Digital Earth Leakage Detectors are designed to continuously monitor electrical systems for unwanted leakage current to earth. Clear digital indication helps operators and maintenance teams identify abnormal electrical conditions quickly.",
      points:
        lang === "hi"
          ? [
              "निरंतर निगरानी",
              "डिजिटल डिस्प्ले",
              "प्रारंभिक फॉल्ट पहचान",
              "पैनल एकीकरण",
            ]
          : [
              "Continuous Monitoring",
              "Digital Indication",
              "Early Fault Detection",
              "Panel Integration",
            ],
      image: "/images/earth_leakage_detector_hero.jpg",
      fallbackImage: "/images/power_distribution_eld.jpg",
      link: "#earth-leakage-detector",
      cta: lang === "hi" ? "डिजिटल अर्थ लीकेज डिटेक्टर देखें" : "Explore Digital Earth Leakage Detector",
    },
    {
      id: "engineering-reliability",
      tag: lang === "hi" ? "इंजीनियरिंग एवं विश्वसनीयता" : "ENGINEERING FOR THE FIELD",
      name: lang === "hi" ? "फ़ील्ड के लिए इंजीनियरिंग" : "Engineering for the Field",
      heading:
        lang === "hi"
          ? "ड्राइंग बोर्ड से परे प्रदर्शन के लिए डिज़ाइन।"
          : "Designed to perform beyond the drawing board.",
      desc:
        lang === "hi"
          ? "व्यावहारिक पहुंच, स्पष्ट डायग्नोस्टिक्स और संगत नियंत्रण वास्तुकला जो नियमित रखरखाव को सरल बनाती है और कठिन बाहरी वातावरण में विश्वसनीय संचालन सुनिश्चित करती है।"
          : "Practical access and clear diagnostics intended to simplify routine maintenance across compatible railway, electrical and control architecture.",
      points:
        lang === "hi"
          ? [
              "फेल-सेफ सोच",
              "मजबूत निर्माण",
              "स्पष्ट डायग्नोस्टिक्स",
              "अनुकूल रखरखाव",
            ]
          : [
              "Fail-Safe Thinking",
              "Robust Construction",
              "Clear Diagnostics",
              "Maintainable by Design",
            ],
      image: "/images/power_distribution_eld.jpg",
      fallbackImage: "/images/eld_engineering_lab.jpg",
      link: "#engineering-field",
      cta: lang === "hi" ? "इंजीनियरिंग दृष्टिकोण देखें" : "Explore Engineering Approach",
    },
  ];

  return (
    <section className="w-full bg-[#f8f9fa] text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80" id="our-solutions">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1e293b] leading-[1.2] font-sans mb-3">
              {lang === "hi" ? "दो विशेष प्रणालियां।" : "Two specialised systems."} <br />
              <span className="font-semibold text-gray-900">
                {lang === "hi" ? "सुरक्षा के प्रति एक प्रतिबद्धता।" : "One commitment to safety."}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl font-light mt-3">
              {lang === "hi"
                ? "ग्लोबल महत्वपूर्ण रेलवे और विद्युत बुनियादी ढांचे के समाधानों पर केंद्रित है जहां विश्वसनीय संचालन, स्पष्ट निगरानी और व्यावहारिक रखरखाव आवश्यक हैं।"
                : "GLOBAL focuses on solutions for critical railway and electrical infrastructure where dependable operation, clear monitoring and practical maintenance are essential."}
            </p>
          </div>

          <a
            href="#contact-engineering"
            className="inline-flex items-center space-x-3 text-gray-900 hover:text-[#ff3131] font-semibold text-sm sm:text-base mt-6 sm:mt-0 group cursor-pointer transition-colors"
          >
            <span className="group-hover:underline">
              {lang === "hi" ? "इंजीनियरिंग टीम से बात करें" : "Talk to Our Engineering Team"}
            </span>
            <span className="w-10 h-10 rounded-full border-2 border-gray-900 text-gray-900 flex items-center justify-center group-hover:bg-[#ff3131] group-hover:border-[#ff3131] group-hover:text-white transition-all duration-300 shadow-sm">
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Featured Article (Product 1) */}
          <div className="lg:col-span-7">
            <div className="group flex flex-col bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-500">
              {/* Image Container */}
              <div className="relative w-full h-[220px] sm:h-[380px] rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-100 shadow-sm group-hover:shadow-md transition-all duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={PRODUCT_1.image}
                  alt={PRODUCT_1.name}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== PRODUCT_1.fallbackImage) {
                      target.src = PRODUCT_1.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Text Below Image */}
              <div className="mt-5 sm:mt-6">
                <div className="text-xs sm:text-sm font-bold text-[#ff3131] uppercase tracking-wider mb-1">
                  {PRODUCT_1.name}
                </div>
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-normal text-[#1e293b] leading-snug group-hover:text-[#ff3131] transition-colors mb-2.5 sm:mb-3">
                  {PRODUCT_1.heading}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-4">
                  {PRODUCT_1.desc}
                </p>

                {/* Key Points Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                  {PRODUCT_1.points.map((point) => (
                    <span
                      key={point}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-gray-100 text-gray-700 text-[10px] sm:text-xs font-medium border border-gray-200"
                    >
                      ✓ {point}
                    </span>
                  ))}
                </div>

                <a
                  href={PRODUCT_1.link}
                  className="inline-flex items-center space-x-2 text-xs sm:text-base font-semibold text-[#ff3131] hover:text-[#d62828] group-hover:underline transition-all"
                >
                  <span>{PRODUCT_1.cta}</span>
                  <span className="text-base sm:text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Stacked Products */}
          <div className="lg:col-span-5 flex flex-col space-y-5 sm:space-y-8">
            {SIDE_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="group flex flex-col bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative w-full h-[160px] sm:h-[200px] rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-100 shadow-sm transition-all duration-500">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={prod.image}
                    alt={prod.name}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== prod.fallbackImage) {
                        target.src = prod.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Text Below Image */}
                <div className="mt-4">
                  <div className="text-xs font-bold text-[#ff3131] uppercase tracking-wider mb-1">
                    {prod.name}
                  </div>
                  <h4 className="text-base sm:text-lg font-normal text-[#1e293b] leading-snug group-hover:text-[#ff3131] transition-colors mb-2">
                    {prod.heading}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-3 line-clamp-3">
                    {prod.desc}
                  </p>

                  {/* Key Points Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {prod.points.map((point) => (
                      <span
                        key={point}
                        className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 text-[10px] sm:text-[11px] font-medium border border-gray-200"
                      >
                        ✓ {point}
                      </span>
                    ))}
                  </div>

                  <a
                    href={prod.link}
                    className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[#ff3131] hover:text-[#d62828] group-hover:underline transition-all"
                  >
                    <span>{prod.cta}</span>
                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}


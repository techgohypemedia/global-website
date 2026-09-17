"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

interface ShowcaseItem {
  title: string;
  description: string;
  year: string;
  link: string;
  image: string;
}

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

export default function AboutUsBanner() {
  const { lang, t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const items: ShowcaseItem[] = [
    {
      title:
        lang === "hi"
          ? "केंद्रित उत्पाद विशेषज्ञता"
          : "Focused Product Expertise",
      description:
        lang === "hi"
          ? "रेलवे बैरियर सिस्टम और डिजिटल अर्थ लीकेज डिटेक्टरों के लिए समर्पित लक्षित इंजीनियरिंग।"
          : "Focused engineering dedicated exclusively to railway barrier systems and digital earth leakage detectors.",
      year: lang === "hi" ? "उत्पाद विशेषज्ञता" : "Product Focus",
      link: "#our-solutions",
      image: "/images/boom_barrier_hero.jpg",
    },
    {
      title:
        lang === "hi"
          ? "अनुप्रयोग-उन्मुख इंजीनियरिंग"
          : "Application-Oriented Engineering",
      description:
        lang === "hi"
          ? "रेलवे लेवल क्रॉसिंग, सिग्नलिंग नेटवर्क और औद्योगिक विद्युत पैनलों के लिए विशेष रूप से कॉन्फ़िगर समाधान।"
          : "Solutions designed specifically around real railway level crossings, signalling installations, and industrial panels.",
      year: lang === "hi" ? "इंजीनियरिंग" : "Engineering",
      link: "#engineering",
      image: "/images/earth_leakage_detector_hero.jpg",
    },
    {
      title:
        lang === "hi"
          ? "व्यावहारिक रखरखाव एवं स्पष्ट डायग्नोस्टिक्स"
          : "Practical Maintenance & Clear Diagnostics",
      description:
        lang === "hi"
          ? "व्यावहारिक पहुंच और स्पष्ट डिजिटल डिस्प्ले जो नियमित रखरखाव और त्वरित समस्या निवारण को सरल बनाते हैं।"
          : "Practical access and clear digital indications designed to simplify routine maintenance and fast inspection.",
      year: lang === "hi" ? "रखरखाव" : "Maintenance",
      link: "#engineering",
      image: "/images/eld_engineering_lab.jpg",
    },
    {
      title:
        lang === "hi"
          ? "बुनियादी ढांचा मानसिकता एवं विश्वसनीयता"
          : "Infrastructure Mindset & Dependability",
      description:
        lang === "hi"
          ? "कठिन बाहरी वातावरण, बार-बार संचालन और विद्युत उतार-चढ़ाव को सहन करने के लिए निर्मित।"
          : "Engineered to withstand demanding outdoor environmental exposure and continuous mechanical operation.",
      year: lang === "hi" ? "विश्वसनीयता" : "Reliability",
      link: "#applications",
      image: "/images/boom_barrier_railway.jpg",
    },
    {
      title:
        lang === "hi"
          ? "प्रत्यक्ष इंजीनियरिंग सहायता"
          : "Direct Engineering Support",
      description:
        lang === "hi"
          ? "सिस्टम एकीकरण, वायरिंग विनिर्देशों और परियोजना-आधारित आवश्यकताओं के लिए तकनीकी सहयोग।"
          : "Collaborative technical guidance for system integration, wiring specifications, and project-based requirements.",
      year: lang === "hi" ? "तकनीकी सहायता" : "Engineering Support",
      link: "#contact-engineering",
      image: "/images/power_distribution_eld.jpg",
    },
  ];

  useEffect(() => {
    if (!isVisible) return;

    let animId: number;
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      setSmoothPosition((prev) => {
        const dx = Math.abs(prev.x - mousePosition.x);
        const dy = Math.abs(prev.y - mousePosition.y);
        if (dx < 0.1 && dy < 0.1) return prev;
        return {
          x: lerp(prev.x, mousePosition.x, 0.18),
          y: lerp(prev.y, mousePosition.y, 0.18),
        };
      });
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isVisible, mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsVisible(false);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full bg-white text-gray-900 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80 overflow-hidden"
      id="contact-engineering"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header: Exact Final CTA Copy */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1e293b] leading-tight font-sans mb-4">
            {lang === "hi"
              ? "क्या आपको रेलवे बैरियर या अर्थ लीकेज मॉनिटरिंग समाधान की आवश्यकता है?"
              : "Need a Railway Barrier or Earth Leakage Monitoring Solution?"}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light max-w-2xl mb-8">
            {lang === "hi"
              ? "अपनी स्थापना, परिचालन स्थितियों, एकीकरण आवश्यकताओं और तकनीकी विनिर्देशों के बारे में हमारी टीम से बात करें।"
              : "Talk to our team about your installation, operating conditions, integration requirements and technical specifications."}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3.5 sm:gap-6">
            <a
              href="#quote"
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-none bg-red-600 hover:bg-[#d62828] text-white font-medium text-center text-sm sm:text-base transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              {lang === "hi" ? "कोटेशन का अनुरोध करें" : "Request a Quote"}
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-none border-2 border-gray-900 hover:border-red-600 text-gray-900 hover:text-red-600 font-medium text-center text-sm sm:text-base transition-all cursor-pointer"
            >
              {lang === "hi" ? "इंजीनियरिंग से संपर्क करें" : "Contact Engineering"}
            </a>
          </div>
        </div>

        {/* Floating Mouse-Following Preview Card */}
        <div
          className="pointer-events-none absolute z-40 overflow-hidden rounded-none shadow-2xl border border-white/30 hidden md:block"
          style={{
            left: 0,
            top: 0,
            transform: `translate3d(${smoothPosition.x + 28}px, ${smoothPosition.y - 120}px, 0)`,
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.8,
            transition:
              "opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), scale 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div className="relative w-[320px] h-[210px] bg-neutral-900 rounded-none overflow-hidden shadow-2xl border border-white/20">
            {items.map((item, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={item.title}
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
                style={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  transform: hoveredIndex === index ? "scale(1)" : "scale(1.12)",
                  filter: hoveredIndex === index ? "none" : "blur(8px)",
                }}
              />
            ))}
            {/* Dark gradient overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
          </div>
        </div>

        {/* List of Items with Hover Effect */}
        <div className="space-y-0">
          {items.map((item, index) => (
            <a
              key={item.title}
              href={item.link}
              className="group block cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative py-7 border-t border-gray-200 transition-all duration-300 ease-out">
                {/* Background highlight on hover */}
                <div
                  className={`
                    absolute inset-0 -mx-4 px-4 bg-gray-50/90 rounded-xl
                    transition-all duration-300 ease-out
                    ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-98"}
                  `}
                />

                <div className="relative flex items-start justify-between gap-6">
                  <div className="flex-1 min-w-0 pr-4">
                    {/* Title with animated underline */}
                    <div className="inline-flex items-center gap-3">
                      <h3 className="text-gray-900 font-medium text-lg sm:text-xl tracking-tight group-hover:text-[#ff3131] transition-colors">
                        <span className="relative">
                          {item.title}
                          {/* Animated underline */}
                          <span
                            className={`
                              absolute left-0 -bottom-1 h-[2px] bg-[#ff3131]
                              transition-all duration-300 ease-out
                              ${hoveredIndex === index ? "w-full" : "w-0"}
                            `}
                          />
                        </span>
                      </h3>

                      {/* Arrow that slides in */}
                      <ArrowUpRight
                        className={`
                          w-5 h-5 text-[#ff3131]
                          transition-all duration-300 ease-out
                          ${
                            hoveredIndex === index
                              ? "opacity-100 translate-x-0 translate-y-0"
                              : "opacity-0 -translate-x-2 translate-y-2"
                          }
                        `}
                      />
                    </div>

                    {/* Description with fade effect */}
                    <p
                      className={`
                        text-sm sm:text-base mt-2 leading-relaxed font-light
                        transition-all duration-300 ease-out
                        ${hoveredIndex === index ? "text-gray-700 font-normal" : "text-gray-500"}
                      `}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Year / Tag badge */}
                  <span
                    className={`
                      text-xs sm:text-sm font-mono text-gray-400 tabular-nums whitespace-nowrap pt-1
                      transition-all duration-300 ease-out
                      ${hoveredIndex === index ? "text-[#ff3131] font-semibold" : ""}
                    `}
                  >
                    {item.year}
                  </span>
                </div>
              </div>
            </a>
          ))}

          {/* Bottom border for last item */}
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </section>
  );
}


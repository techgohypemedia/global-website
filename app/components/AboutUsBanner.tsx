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
          ? "वैश्विक सामग्री संक्रमण और उन्नत अनुसंधान"
          : "Advancing Global Materials Transition",
      description:
        lang === "hi"
          ? "कम कार्बन समाधान और अगली पीढ़ी के पॉलिमर नवाचारों का नेतृत्व।"
          : "Pioneering lower-carbon energy solutions and next-generation polymer technologies.",
      year: "2026 • Innovation",
      link: "#materials",
      image: "/images/aramco_refinery_engineers_laptop.jpg",
    },
    {
      title:
        lang === "hi"
          ? "कोर लैबोरेटरीज और सटीक भूगर्भीय अन्वेषण"
          : "Precision Subsurface Exploration & Core Labs",
      description:
        lang === "hi"
          ? "अत्याधुनिक तकनीक से भूगर्भीय मॉडलिंग और संसाधन विश्लेषण।"
          : "AI-assisted subsurface mapping delivering unprecedented geological precision.",
      year: "2026 • Technology",
      link: "#exploration",
      image: "/images/aramco_core_labs.jpg",
    },
    {
      title:
        lang === "hi"
          ? "सफ़ानिया: अपतटीय ऊर्जा उत्पादन में अग्रणी"
          : "Safaniyah Offshore Energy Operations",
      description:
        lang === "hi"
          ? "विश्व के सबसे बड़े अपतटीय समुद्री ऊर्जा नेटवर्क का संचालन।"
          : "Engineering the world's premier offshore marine energy and production network.",
      year: "2025 • Offshore",
      link: "#safaniyah",
      image: "/images/safaniyah_offshore.jpg",
    },
    {
      title:
        lang === "hi"
          ? "मैंग्रोव संरक्षण और जैव विविधता बहाली"
          : "Mangrove Conservation & Biodiversity Restoration",
      description:
        lang === "hi"
          ? "तटीय पारिस्थितिकी तंत्र की रक्षा के लिए लाखों मैंग्रोव का रोपण।"
          : "Restoring natural coastal habitats and protecting millions of native species.",
      year: "2025 • Sustainability",
      link: "#biodiversity",
      image: "/images/aramco_wetlands.jpg",
    },
    {
      title:
        lang === "hi"
          ? "मोटरस्पोर्ट इंजीनियरिंग और खेल उत्कृष्टता"
          : "Fuelling High-Performance Motorsport Engineering",
      description:
        lang === "hi"
          ? "फॉर्मूला 1 और वैश्विक एथलीटों के साथ सतत ईंधन का विकास।"
          : "Partnering in Formula 1® to develop sustainable next-generation fuels.",
      year: "2024 • Motorsport",
      link: "#motorsport",
      image: "/images/sporting_excellence.jpg",
    },
  ];

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

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
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-widest text-[#ff3131] uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ff3131] animate-pulse" />
            <span>
              {lang === "hi" ? "हमारे बारे में • मुख्य उपलब्धियां" : "ABOUT US • FEATURED INITIATIVES"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1e293b] leading-tight font-sans">
            {lang === "hi" ? "नवाचार और प्रभाव की" : "Discover our legacy of"}{" "}
            <span className="font-semibold text-gray-900">
              {lang === "hi" ? "प्रेरक कहानियां" : "innovation & impact"}
            </span>
          </h2>
        </div>

        {/* Floating Mouse-Following Preview Card */}
        <div
          className="pointer-events-none absolute z-40 overflow-hidden rounded-2xl shadow-2xl border border-white/30 hidden md:block"
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
          <div className="relative w-[320px] h-[210px] bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl">
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


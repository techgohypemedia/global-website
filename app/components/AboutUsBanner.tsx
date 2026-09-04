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
          ? "हैवी-ड्यूटी क्रैश-रेटेड स्वचालित बूम बैरियर"
          : "Heavy-Duty Crash-Rated Automated Boom Barrier",
      description:
        lang === "hi"
          ? "उच्च-सुरक्षा परिधि, टोल प्लाजा और औद्योगिक द्वारों के लिए टिकाऊ स्वचालित बैरियर।"
          : "Engineered with reinforced steel chassis, fast-acting motor drives, and intelligent access control integration.",
      year: "2026 • Flagship Product",
      link: "#boom-barrier",
      image: "/images/boom_barrier_original.png",
    },
    {
      title:
        lang === "hi"
          ? "16-चैनल अर्थ लीकेज डिटेक्टर एवं इन्सुलेशन मॉनिटर"
          : "Multi-Channel Earth Leakage Detector (ELD)",
      description:
        lang === "hi"
          ? "रेलवे सिग्नलिंग एवं पावर ग्रिड के लिए वास्तविक समय इन्सुलेशन प्रतिरोध निगरानी और फॉल्ट एनालिसिस।"
          : "Precision online electrical insulation resistance monitoring, analog meters, and digital fault totalizers.",
      year: "2026 • Railway Signaling",
      link: "#earth-leakage-detector",
      image: "/images/earth_leakage_detector_original.png",
    },
    {
      title:
        lang === "hi"
          ? "स्वचालित रेलवे लेवल क्रॉसिंग सुरक्षा गेट्स"
          : "Automated Railway Level Crossing Gates",
      description:
        lang === "hi"
          ? "ऑडियो-विजुअल एलईडी सिग्नलिंग, त्वरित प्रतिक्रिया और ट्रैक इंटरलॉकिंग से लैस सुरक्षित रेलवे गेट।"
          : "SIL-compliant fail-safe barrier mechanisms with integrated flashing LED signals and acoustic warnings.",
      year: "2025 • Rail Infrastructure",
      link: "#railway-crossing",
      image: "/images/boom_barrier_railway.jpg",
    },
    {
      title:
        lang === "hi"
          ? "इलेक्ट्रॉनिक्स आरएंडडी एवं उच्च-वोल्टेज परीक्षण लैब"
          : "Electronics R&D & High-Voltage Calibration Lab",
      description:
        lang === "hi"
          ? "कठोर पर्यावरणीय और विद्युत परीक्षणों से प्रमाणित विश्वसनीय सुरक्षा उपकरण।"
          : "Rigorous environmental stress screening and precision calibration ensuring zero false alarms.",
      year: "2025 • Quality & Testing",
      link: "#testing-lab",
      image: "/images/eld_engineering_lab.jpg",
    },
    {
      title:
        lang === "hi"
          ? "पावर सबस्टेशन इन्सुलेशन एवं ग्रिड सुरक्षा"
          : "Substation Insulation & Power Grid Protection",
      description:
        lang === "hi"
          ? "निरंतर ऑनलाइन इन्सुलेशन प्रतिरोध मापन जो शून्य डाउनटाइम और निर्बाध विद्युत प्रवाह सुनिश्चित करता है।"
          : "Continuous multi-point DC/AC insulation diagnostics preventing critical circuit failures and ensuring 24/7 uptime.",
      year: "2024 • Substation Power",
      link: "#substation-power",
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


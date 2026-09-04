"use client";

import React from "react";

interface GlobalLogoProps {
  className?: string;
  theme?: "dark" | "light" | "auto";
  size?: "sm" | "md" | "lg" | "xl";
  showDot?: boolean;
}

export default function GlobalLogo({
  className = "",
  theme = "dark",
  size = "md",
  showDot = true,
}: GlobalLogoProps) {
  // Determine text color based on theme
  const textColor =
    theme === "light"
      ? "text-black"
      : theme === "dark"
      ? "text-white"
      : "text-foreground";

  const sizeClasses = {
    sm: "text-xl sm:text-2xl",
    md: "text-2xl sm:text-3xl",
    lg: "text-3xl sm:text-4xl",
    xl: "text-4xl sm:text-5xl",
  };

  const dotSizeClasses = {
    sm: "w-1.5 h-1.5 sm:w-2 sm:h-2 mb-0.5 sm:mb-1",
    md: "w-2 h-2 sm:w-2.5 sm:h-2.5 mb-1 sm:mb-1.5",
    lg: "w-2.5 h-2.5 sm:w-3 sm:h-3 mb-1 sm:mb-2",
    xl: "w-3 h-3 sm:w-4 sm:h-4 mb-1.5 sm:mb-2",
  };

  return (
    <span
      className={`inline-flex items-baseline font-bold select-none transition-all duration-300 group/logo ${textColor} ${sizeClasses[size]} ${className}`}
      style={{
        fontFamily: "'Mokoto', 'Orbitron', 'Rajdhani', 'Eurostile', sans-serif",
        letterSpacing: "0.06em",
      }}
    >
      <span className="transition-colors duration-200">GLOBAL</span>
      {showDot && (
        <span
          className={`inline-block rounded-[1.5px] bg-[#ff3131] ml-0.5 transition-all duration-300 group-hover/logo:scale-125 group-hover/logo:shadow-[0_0_12px_#ff3131] ${dotSizeClasses[size]}`}
          style={{ backgroundColor: "#ff3131" }}
          aria-hidden="true"
        />
      )}
    </span>
  );
}

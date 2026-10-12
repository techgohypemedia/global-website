"use client";

/* The wordmark is the client-supplied artwork; a native image keeps it pixel-accurate. */
/* eslint-disable @next/next/no-img-element */

import React from "react";

interface GlobalLogoProps {
  className?: string;
  /** "dark" = placed on a dark background (white wordmark); "light" = on a light background (black wordmark). */
  theme?: "dark" | "light" | "auto";
  size?: "sm" | "md" | "lg" | "xl";
  showDot?: boolean;
}

const HEIGHT_CLASSES = {
  sm: "h-5 sm:h-6",
  md: "h-6 sm:h-7",
  lg: "h-8 sm:h-9",
  xl: "h-10 sm:h-12",
};

export default function GlobalLogo({
  className = "",
  theme = "dark",
  size = "md",
}: GlobalLogoProps) {
  const src =
    theme === "dark" ? "/logo/global-logo-light.png" : "/logo/global-logo-dark.png";

  return (
    <img
      src={src}
      alt="GLOBAL."
      draggable={false}
      className={`${HEIGHT_CLASSES[size]} w-auto select-none transition-opacity duration-200 hover:opacity-90 ${className}`}
    />
  );
}

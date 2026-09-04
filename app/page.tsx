"use client";

import { LanguageProvider } from "./context/LanguageContext";
import AramcoHeader from "./components/AramcoHeader";
import HeroSection from "./components/HeroSection";
import DiscoverAramco from "./components/DiscoverAramco";
import WhatWeBelieve from "./components/WhatWeBelieve";
import AtAGlance from "./components/AtAGlance";
import ElementsMagazine from "./components/ElementsMagazine";
import EnvironmentalProtection from "./components/EnvironmentalProtection";
import CaseStudyMaterials from "./components/CaseStudyMaterials";
import NewsSection from "./components/NewsSection";
import FinancialReports from "./components/FinancialReports";
import OurHistoryVideo from "./components/OurHistoryVideo";
import AboutUsBanner from "./components/AboutUsBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#ff3131] selection:text-white relative">
        {/* 1. Floating Transparent Header (Top Utility Bar + Main Navigation Bar overlaid on Hero) */}
        <AramcoHeader />

        {/* 2. Hero Carousel Slider (Background extends to top, 3s auto timer, 4 progress tabs) */}
        <HeroSection />

        {/* 3. Discover Aramco (White Background + 4 Cards Grid) */}
        <DiscoverAramco />

        {/* 4. What We Believe (Horizontal Story Slider with Extra Photos) */}
        <WhatWeBelieve />

        {/* 5. At A Glance (3 Key Metrics with Divider Lines) */}
        <AtAGlance />

        {/* 6. Elements Magazine (1 Large Feature Card + 2 Stacked Cards) */}
        <ElementsMagazine />

        {/* 7. Environmental Protection (Sustainability 3 Pillars Grid) */}
        <EnvironmentalProtection />

        {/* 8. Case Study (Advancing the materials transition) */}
        <CaseStudyMaterials />

        {/* 9. News Section (Darkish / Off-white background + 4 White News Cards) */}
        <NewsSection />

        {/* 10. Financial Statements and Key Reports (Key Documents, PDF Downloads) */}
        <FinancialReports />

        {/* 11. Our History (Scroll-Zoom Interactive Video Section) */}
        <OurHistoryVideo />

        {/* 12. About Us Banner (Flush Left 0px + Right Margin & Rounded Corner) */}
        <AboutUsBanner />

        {/* 13. Official Aramco White Footer */}
        <Footer />
      </main>
    </LanguageProvider>
  );
}

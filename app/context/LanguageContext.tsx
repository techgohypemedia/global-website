"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "hi";

export interface TranslationSchema {
  dir: "ltr" | "rtl";
  langLabel: string;
  otherLangLabel: string;
  globalContacts: string;
  youAreIn: string;
  regionGlobal: string;
  regionAmericas: string;
  regionAsia: string;
  regionEurope: string;
  selectRegion: string;
  searchPlaceholder: string;
  nav: {
    about: string;
    whatWeDo: string;
    sustainability: string;
    investors: string;
    newsMedia: string;
    careers: string;
  };
  hero: {
    tag: string;
    title: string;
    ctaText: string;
    elementsTitle: string;
    elementsCta: string;
    sustainabilityTitle: string;
    sustainabilityCta: string;
    resultsTitle: string;
    resultsCta1: string;
    resultsCta2: string;
    tabElements: string;
    tabPoweredByHow: string;
    tabSustainability: string;
    tabResults: string;
  };
  discover: {
    badge: string;
    headline: string;
    card1Cat: string;
    card1Title: string;
    card1Desc: string;
    card2Cat: string;
    card2Title: string;
    card2Desc: string;
    card3Cat: string;
    card3Title: string;
    card3Desc: string;
    card4Cat: string;
    card4Title: string;
    card4Desc: string;
    exploreMore: string;
  };
  whatWeBelieve: {
    badge: string;
    headline: string;
    learnMore: string;
    story1: string;
    story2: string;
    story3: string;
    story4: string;
    story5: string;
    story6: string;
    story7: string;
  };
  atAGlance: {
    title: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    stat3Number: string;
    stat3Label: string;
    stat3Sub?: string;
  };
  elementsMagazine: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    visitMagazine: string;
    readMore: string;
    article1: string;
    article1Desc: string;
    article1Tag: string;
    article2: string;
    article2Desc: string;
    article2Tag: string;
    article3: string;
    article3Desc: string;
    article3Tag: string;
  };
  environmental: {
    badge: string;
    title: string;
    desc: string;
    cta: string;
    readMore: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
  };
  caseStudy: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    cta: string;
  };
  news: {
    titleLine1: string;
    titleLine2: string;
    readAll: string;
    news1Cat: string;
    news1Title: string;
    news2Cat: string;
    news2Title: string;
    news3Cat: string;
    news3Title: string;
    news4Cat: string;
    news4Title: string;
  };
  financial: {
    titleLine1: string;
    titleLine2: string;
    seeAll: string;
    keyDocs: string;
    doc1: string;
    doc2: string;
    doc3: string;
    downloadZip: string;
    downloadNotice: string;
  };
  history: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    exploreHistory: string;
    legacyHeadline: string;
    watchDoc: string;
  };
  aboutBanner: {
    title: string;
    learnMore: string;
  };
  footer: {
    quickLinks: string;
    siteInfo: string;
    otherWebsites: string;
    copyright: string;
    tagline: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    dir: "ltr",
    langLabel: "English",
    otherLangLabel: "हिन्दी",
    globalContacts: "Global contacts",
    youAreIn: "You are in Global",
    regionGlobal: "Global (Current)",
    regionAmericas: "Global Americas",
    regionAsia: "Global Asia",
    regionEurope: "Global Europe",
    selectRegion: "Select Region",
    searchPlaceholder: "Search railway barriers, earth leakage detectors, technical specifications...",
    nav: {
      about: "ABOUT",
      whatWeDo: "PRODUCTS",
      sustainability: "ENGINEERING",
      investors: "APPLICATIONS",
      newsMedia: "RESOURCES",
      careers: "CONTACT",
    },
    hero: {
      tag: "RAILWAY & ELECTRICAL SAFETY SYSTEMS",
      title: "Engineering Safety Into Critical Infrastructure",
      ctaText: "Explore Our Products",
      elementsTitle: "Digital Earth Leakage Detector: Detect electrical leakage before it becomes a bigger problem",
      elementsCta: "Explore Digital Earth Leakage Detector",
      sustainabilityTitle: "Railway Barrier System: Controlled crossings, safer movement",
      sustainabilityCta: "Explore Railway Barrier System",
      resultsTitle: "Engineering practical solutions for safer railway crossings, electrical monitoring and critical infrastructure.",
      resultsCta1: "Request a Quote",
      resultsCta2: "Talk to Engineering",
      tabElements: "EARTH LEAKAGE DETECTOR",
      tabPoweredByHow: "RAILWAY BARRIERS",
      tabSustainability: "WHERE OUR SYSTEMS WORK",
      tabResults: "TECHNICAL SPECIFICATIONS",
    },
    discover: {
      badge: "ENGINEERED FOR CRITICAL OPERATIONS",
      headline:
        "Protection where reliability matters most. Infrastructure safety depends on systems that perform consistently when they are needed. GLOBAL develops focused railway and electrical safety solutions designed for practical operation in demanding environments.",
      card1Cat: "RAILWAY SAFETY",
      card1Title: "Railway Level Crossings",
      card1Desc:
        "Reliable barrier systems for controlling vehicular movement across railway tracks.",
      card2Cat: "ELECTRICAL MONITORING",
      card2Title: "Industrial Electrical Panels",
      card2Desc:
        "Continuous earth leakage monitoring for critical industrial electrical systems.",
      card3Cat: "ACCESS CONTROL",
      card3Title: "Restricted Infrastructure Access",
      card3Desc:
        "Barrier systems for railway yards, depots, maintenance areas and controlled infrastructure locations.",
      card4Cat: "SIGNALLING PROTECTION",
      card4Title: "Railway Signalling Infrastructure",
      card4Desc:
        "Electrical monitoring solutions for suitable railway signalling and control installations.",
      exploreMore: "Explore full range",
    },
    whatWeBelieve: {
      badge: "WHERE OUR SYSTEMS WORK",
      headline:
        "Designed around real infrastructure challenges across railway and electrical environments.",
      learnMore: "Learn more",
      story1: "Railway Level Crossings — Vehicular Access Control",
      story2: "Railway Signalling Infrastructure — Electrical Monitoring",
      story3: "Railway Control Panels — Digital Leakage Monitoring",
      story4: "Industrial Electrical Panels — Continuous Earth Monitoring",
      story5: "Restricted Infrastructure Access — Yards, Depots & Stations",
      story6: "Utility & Infrastructure Sites — Dependable Fault Visibility",
      story7: "Demanding Outdoor Environments — Robust Mechanical Operation",
    },
    atAGlance: {
      title: "At a glance",
      stat1Number: "2",
      stat1Label: "Specialised Product Lines",
      stat2Number: "100%",
      stat2Label: "Dedicated Safety Focus",
      stat3Number: "Field-Ready",
      stat3Label: "Built for Demanding Environments",
      stat3Sub: "Designed for dependable operation",
    },
    elementsMagazine: {
      badge: "OUR SOLUTIONS",
      titleLine1: "Two specialised systems.",
      titleLine2: "One commitment to safety.",
      visitMagazine: "Explore all solutions",
      readMore: "View details",
      article1: "Railway Barrier System — Controlled crossings. Safer movement.",
      article1Desc:
        "GLOBAL Railway Barrier Systems are designed to control road traffic at railway level crossings and restricted railway access areas. Robust mechanical construction combined with dependable control architecture.",
      article1Tag: "PRODUCT 01 • RAILWAY SAFETY",
      article2: "Digital Earth Leakage Detector",
      article2Desc:
        "Continuously monitor electrical systems for unwanted leakage current to earth. Clear digital indication helps operators identify abnormal conditions quickly.",
      article2Tag: "PRODUCT 02 • ELECTRICAL SAFETY",
      article3: "Engineering for the Field",
      article3Desc:
        "Practical access, clear diagnostics, and compatible control architecture intended to simplify routine maintenance and reliable operation.",
      article3Tag: "ENGINEERING & RELIABILITY",
    },
    environmental: {
      badge: "ENGINEERING FOR THE FIELD",
      title: "Designed to perform beyond the drawing board",
      desc: "Critical infrastructure equipment must operate reliably outside controlled laboratory conditions. GLOBAL products are developed around real operating requirements including environmental exposure, repeated mechanical operation, electrical variation, maintenance accessibility and system integration.",
      cta: "Engineering Approach",
      readMore: "Learn more",
      pillar1Title: "Fail-Safe Thinking",
      pillar1Desc: "Systems designed around predictable operation during abnormal conditions and emergency situations.",
      pillar2Title: "Robust Construction",
      pillar2Desc: "Products engineered for demanding outdoor railway and industrial infrastructure environments.",
      pillar3Title: "Clear Diagnostics & Integration",
      pillar3Desc: "Easy-to-understand indications and compatible railway, electrical and control architecture.",
    },
    caseStudy: {
      badge: "WHY GLOBAL",
      title: "Safety technology should work when it is needed most.",
      p1: "We believe critical infrastructure products should be engineered around real operational requirements instead of unnecessary complexity. Our approach combines practical design, focused engineering and application-specific configuration.",
      p2: "Our core principles: Focused Product Expertise • Application-Oriented Engineering • Practical Maintenance • Infrastructure Mindset • Direct Engineering Support.",
      cta: "Talk to Our Engineering Team",
    },
    news: {
      titleLine1: "Updates & technical insights from",
      titleLine2: "GLOBAL.",
      readAll: "Read all updates",
      news1Cat: "PRODUCT SPECIFICATION",
      news1Title: "Railway Barrier Systems: Configurable control architecture for level crossing installations",
      news2Cat: "ELECTRICAL SAFETY",
      news2Title: "Digital Earth Leakage Detector: Continuous insulation monitoring for industrial control panels",
      news3Cat: "APPLICATION GUIDE",
      news3Title: "Controlled railway access: Implementing reliable barrier systems in depots and maintenance yards",
      news4Cat: "ENGINEERING BRIEF",
      news4Title: "Early fault identification: How clear digital diagnostics support proactive infrastructure maintenance",
    },
    financial: {
      titleLine1: "Technical specifications and",
      titleLine2: "documentation",
      seeAll: "See all documents",
      keyDocs: "Key technical documents",
      doc1: "Railway Barrier System — Technical Specification & Installation Guide",
      doc2: "Digital Earth Leakage Detector — Technical Datasheet & Operation Manual",
      doc3: "Railway & Industrial Electrical Safety — Application Overview",
      downloadZip: "Download technical bundle (ZIP)",
      downloadNotice: "Downloading",
    },
    history: {
      badge: "ENGINEERING CAPABILITY",
      titleLine1: "Reliable safety systems built for",
      titleLine2: "demanding infrastructure",
      exploreHistory: "Explore capabilities",
      legacyHeadline: "Engineered for real operational requirements",
      watchDoc: "Click to watch product & engineering showcase",
    },
    aboutBanner: {
      title: "Why GLOBAL",
      learnMore: "Learn more",
    },
    footer: {
      quickLinks: "OUR PRODUCTS",
      siteInfo: "APPLICATIONS & ENGINEERING",
      otherWebsites: "SUPPORT & RESOURCES",
      copyright: "© 2026 GLOBAL. Railway & Electrical Safety Systems. All rights reserved.",
      tagline: "Engineering practical solutions for safer railway crossings, electrical monitoring and critical infrastructure.",
    },
  },

  hi: {
    dir: "ltr",
    langLabel: "हिन्दी",
    otherLangLabel: "English",
    globalContacts: "वैश्विक संपर्क",
    youAreIn: "आप ग्लोबल में हैं",
    regionGlobal: "ग्लोबल (वर्तमान)",
    regionAmericas: "ग्लोबल अमेरिका",
    regionAsia: "ग्लोबल एशिया",
    regionEurope: "ग्लोबल यूरोप",
    selectRegion: "क्षेत्र का चयन करें",
    searchPlaceholder: "रेलवे बैरियर, अर्थ लीकेज डिटेक्टर, तकनीकी विवरण खोजें...",
    nav: {
      about: "परिचय",
      whatWeDo: "उत्पाद",
      sustainability: "इंजीनियरिंग",
      investors: "उपयोग",
      newsMedia: "संसाधन",
      careers: "संपर्क",
    },
    hero: {
      tag: "रेलवे एवं विद्युत सुरक्षा प्रणालियां",
      title: "महत्वपूर्ण बुनियादी ढांचे में सुरक्षा की इंजीनियरिंग",
      ctaText: "हमारे उत्पाद देखें",
      elementsTitle: "डिजिटल अर्थ लीकेज डिटेक्टर: समस्या बढ़ने से पहले लीकेज का पता लगाएं",
      elementsCta: "अर्थ लीकेज डिटेक्टर देखें",
      sustainabilityTitle: "रेलवे बैरियर सिस्टम: नियंत्रित क्रॉसिंग, सुरक्षित आवागमन",
      sustainabilityCta: "रेलवे बैरियर सिस्टम देखें",
      resultsTitle: "सुरक्षित रेलवे क्रॉसिंग, विद्युत निगरानी और महत्वपूर्ण बुनियादी ढांचे के लिए व्यावहारिक समाधान।",
      resultsCta1: "कोटेशन का अनुरोध करें",
      resultsCta2: "इंजीनियरिंग टीम से बात करें",
      tabElements: "अर्थ लीकेज डिटेक्टर",
      tabPoweredByHow: "रेलवे बैरियर सिस्टम",
      tabSustainability: "उपयोग के क्षेत्र",
      tabResults: "तकनीकी विवरण",
    },
    discover: {
      badge: "कठिन परिस्थितियों के लिए निर्मित",
      headline:
        "सुरक्षा वहां, जहां विश्वसनीयता सबसे महत्वपूर्ण है। बुनियादी ढांचे की सुरक्षा उन प्रणालियों पर निर्भर करती है जो जरूरत के समय निरंतर काम करें। ग्लोबल व्यावहारिक संचालन के लिए लक्षित रेलवे और विद्युत सुरक्षा समाधान विकसित करता है।",
      card1Cat: "रेलवे सुरक्षा",
      card1Title: "रेलवे लेवल क्रॉसिंग",
      card1Desc:
        "रेल पटरियों पर वाहनों की आवाजाही को नियंत्रित करने के लिए विश्वसनीय बैरियर सिस्टम।",
      card2Cat: "विद्युत निगरानी",
      card2Title: "औद्योगिक विद्युत पैनल",
      card2Desc:
        "महत्वपूर्ण औद्योगिक विद्युत प्रणालियों के लिए निरंतर अर्थ लीकेज निगरानी।",
      card3Cat: "पहुंच नियंत्रण",
      card3Title: "प्रतिबंधित बुनियादी ढांचा पहुंच",
      card3Desc:
        "रेलवे यार्ड, डिपो, रखरखाव क्षेत्रों और नियंत्रित स्थानों के लिए बैरियर सिस्टम।",
      card4Cat: "सिग्नलिंग सुरक्षा",
      card4Title: "रेलवे सिग्नलिंग इंफ्रास्ट्रक्चर",
      card4Desc:
        "उपयुक्त रेलवे सिग्नलिंग और नियंत्रण प्रतिष्ठानों के लिए विद्युत निगरानी समाधान।",
      exploreMore: "सभी समाधान देखें",
    },
    whatWeBelieve: {
      badge: "हमारे सिस्टम कहां काम करते हैं",
      headline:
        "वास्तविक रेलवे और विद्युत बुनियादी ढांचे की चुनौतियों के समाधान के लिए निर्मित।",
      learnMore: "अधिक जानें",
      story1: "रेलवे लेवल क्रॉसिंग्स — वाहन आवाजाही नियंत्रण",
      story2: "रेलवे सिग्नलिंग इंफ्रास्ट्रक्चर — विद्युत निगरानी",
      story3: "रेलवे कंट्रोल पैनल — डिजिटल लीकेज मॉनिटरिंग",
      story4: "औद्योगिक विद्युत पैनल — सतत अर्थ लीकेज डिटेक्शन",
      story5: "प्रतिबंधित इंफ्रास्ट्रक्चर एक्सेस — यार्ड एवं डिपो",
      story6: "यूटिलिटी एवं इंफ्रास्ट्रक्चर साइट्स — स्पष्ट फॉल्ट दृश्यता",
      story7: "कठिन बाहरी वातावरण — मजबूत यांत्रिक संचालन",
    },
    atAGlance: {
      title: "एक नज़र में",
      stat1Number: "2",
      stat1Label: "विशेष उत्पाद श्रृंखलाएं",
      stat2Number: "100%",
      stat2Label: "सुरक्षा इंजीनियरिंग पर केंद्रित",
      stat3Number: "फील्ड-रेडी",
      stat3Label: "कठिन वातावरण के लिए निर्मित",
      stat3Sub: "विश्वसनीय संचालन के लिए डिज़ाइन",
    },
    elementsMagazine: {
      badge: "हमारे समाधान",
      titleLine1: "दो विशेष प्रणालियां।",
      titleLine2: "सुरक्षा के प्रति एक अटूट प्रतिबद्धता।",
      visitMagazine: "सभी समाधान देखें",
      readMore: "विवरण देखें",
      article1: "रेलवे बैरियर सिस्टम — नियंत्रित क्रॉसिंग, सुरक्षित आवागमन",
      article1Desc:
        "ग्लोबल रेलवे बैरियर सिस्टम लेवल क्रॉसिंग और प्रतिबंधित क्षेत्रों में सड़क यातायात को नियंत्रित करने के लिए डिज़ाइन किए गए हैं। मजबूत यांत्रिक संरचना और विश्वसनीय नियंत्रण वास्तुकला।",
      article1Tag: "उत्पाद 01 • रेलवे सुरक्षा",
      article2: "डिजिटल अर्थ लीकेज डिटेक्टर",
      article2Desc:
        "विद्युत प्रणालियों में अनचाहे अर्थ लीकेज करंट की निरंतर निगरानी। स्पष्ट डिजिटल डिस्प्ले ऑपरेटरों को असामान्य स्थितियों की त्वरित पहचान में मदद करता है।",
      article2Tag: "उत्पाद 02 • विद्युत सुरक्षा",
      article3: "फ़ील्ड के लिए इंजीनियरिंग",
      article3Desc:
        "व्यावहारिक पहुंच, स्पष्ट डायग्नोस्टिक्स और अनुकूल नियंत्रण वास्तुकला जो नियमित रखरखाव को सरल बनाती है।",
      article3Tag: "इंजीनियरिंग एवं विश्वसनीयता",
    },
    environmental: {
      badge: "फ़ील्ड के लिए इंजीनियरिंग",
      title: "ड्राइंग बोर्ड से परे प्रदर्शन के लिए डिज़ाइन",
      desc: "महत्वपूर्ण बुनियादी ढांचे के उपकरणों को नियंत्रित प्रयोगशाला स्थितियों से बाहर विश्वसनीय रूप से काम करना चाहिए। ग्लोबल उत्पाद पर्यावरणीय प्रभाव, बार-बार यांत्रिक संचालन, विद्युत उतार-चढ़ाव और रखरखाव पहुंच की वास्तविक आवश्यकताओं के आधार पर विकसित किए जाते हैं।",
      cta: "इंजीनियरिंग दृष्टिकोण",
      readMore: "अधिक जानें",
      pillar1Title: "फेल-सेफ सोच",
      pillar1Desc: "असामान्य स्थितियों और आपातकाल के दौरान पूर्वानुमेय संचालन के लिए डिज़ाइन की गई प्रणालियां।",
      pillar2Title: "मजबूत निर्माण",
      pillar2Desc: "कठिन बाहरी रेलवे और बुनियादी ढांचे के वातावरण के लिए इंजीनियर किए गए उत्पाद।",
      pillar3Title: "स्पष्ट डायग्नोस्टिक्स एवं एकीकरण",
      pillar3Desc: "समझने में आसान संकेत और संगत रेलवे, विद्युत तथा नियंत्रण वास्तुकला।",
    },
    caseStudy: {
      badge: "ग्लोबल क्यों",
      title: "सुरक्षा तकनीक को तब काम करना चाहिए जब इसकी सबसे ज्यादा जरूरत हो।",
      p1: "हमारा मानना है कि महत्वपूर्ण बुनियादी ढांचा उत्पादों को अनावश्यक जटिलता के बजाय वास्तविक परिचालन आवश्यकताओं के आधार पर इंजीनियर किया जाना चाहिए। हमारा दृष्टिकोण व्यावहारिक डिज़ाइन, केंद्रित इंजीनियरिंग और अनुप्रयोग-विशिष्ट कॉन्फ़िगरेशन को जोड़ता है।",
      p2: "हमारे मूल सिद्धांत: केंद्रित उत्पाद विशेषज्ञता • अनुप्रयोग-उन्मुख इंजीनियरिंग • व्यावहारिक रखरखाव • बुनियादी ढांचा मानसिकता • प्रत्यक्ष इंजीनियरिंग सहायता।",
      cta: "हमारी इंजीनियरिंग टीम से बात करें",
    },
    news: {
      titleLine1: "ग्लोबल से नवीनतम",
      titleLine2: "तकनीकी अपडेट",
      readAll: "सभी अपडेट देखें",
      news1Cat: "उत्पाद विनिर्देश",
      news1Title: "रेलवे बैरियर सिस्टम: लेवल क्रॉसिंग प्रतिष्ठानों के लिए कॉन्फ़िगर करने योग्य नियंत्रण वास्तुकला",
      news2Cat: "विद्युत सुरक्षा",
      news2Title: "डिजिटल अर्थ लीकेज डिटेक्टर: औद्योगिक नियंत्रण पैनलों के लिए निरंतर इन्सुलेशन निगरानी",
      news3Cat: "अनुप्रयोग गाइड",
      news3Title: "नियंत्रित रेलवे पहुंच: डिपो और रखरखाव यार्ड में विश्वसनीय बैरियर सिस्टम का उपयोग",
      news4Cat: "तकनीकी विवरण",
      news4Title: "प्रारंभिक फॉल्ट पहचान: डिजिटल डायग्नोस्टिक्स कैसे सक्रिय बुनियादी ढांचा रखरखाव का समर्थन करते हैं",
    },
    financial: {
      titleLine1: "तकनीकी विनिर्देश और",
      titleLine2: "दस्तावेज़",
      seeAll: "सभी दस्तावेज़ देखें",
      keyDocs: "प्रमुख तकनीकी दस्तावेज़",
      doc1: "रेलवे बैरियर सिस्टम — तकनीकी विनिर्देश एवं स्थापना गाइड",
      doc2: "डिजिटल अर्थ लीकेज डिटेक्टर — तकनीकी डेटाशीट एवं संचालन मैनुअल",
      doc3: "रेलवे एवं औद्योगिक विद्युत सुरक्षा — अनुप्रयोग अवलोकन",
      downloadZip: "तकनीकी बंडल डाउनलोड करें (ZIP)",
      downloadNotice: "डाउनलोड हो रहा है",
    },
    history: {
      badge: "इंजीनियरिंग क्षमताएं",
      titleLine1: "कठिन बुनियादी ढांचे के लिए",
      titleLine2: "निर्मित विश्वसनीय सुरक्षा प्रणालियां",
      exploreHistory: "क्षमताएं जानें",
      legacyHeadline: "वास्तविक परिचालन आवश्यकताओं के लिए इंजीनियर",
      watchDoc: "उत्पाद एवं इंजीनियरिंग शोकेस देखने के लिए क्लिक करें",
    },
    aboutBanner: {
      title: "ग्लोबल क्यों",
      learnMore: "और जानें",
    },
    footer: {
      quickLinks: "हमारे उत्पाद",
      siteInfo: "अनुप्रयोग एवं इंजीनियरिंग",
      otherWebsites: "सहायता एवं संसाधन",
      copyright: "© 2026 GLOBAL. रेलवे एवं विद्युत सुरक्षा प्रणालियां। सर्वाधिकार सुरक्षित।",
      tagline: "सुरक्षित रेलवे क्रॉसिंग, विद्युत निगरानी और महत्वपूर्ण बुनियादी ढांचे के लिए व्यावहारिक समाधान।",
    },
  },
};


interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  dir: "ltr" | "rtl";
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => { },
  dir: "ltr",
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof document !== "undefined") {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = newLang;
    }
  };

  const dir: "ltr" | "rtl" = "ltr";
  const t: TranslationSchema = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir, t }}>
      <div dir={dir} className="font-sans">
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

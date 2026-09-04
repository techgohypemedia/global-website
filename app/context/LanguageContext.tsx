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
    searchPlaceholder: "Search boom barriers, ELD systems, railway signaling, datasheets...",
    nav: {
      about: "ABOUT US",
      whatWeDo: "PRODUCTS & SYSTEMS",
      sustainability: "SAFETY & COMPLIANCE",
      investors: "SPECIFICATIONS",
      newsMedia: "NEWS & MEDIA",
      careers: "CAREERS",
    },
    hero: {
      tag: "AUTOMATION & SAFETY ENGINEERING",
      title: "How can our intelligent barrier & leakage detection systems protect your critical infrastructure?",
      ctaText: "Explore products",
      elementsTitle: "Multi-Channel Earth Leakage Detector: advanced power insulation diagnostics",
      elementsCta: "View ELD specs",
      sustainabilityTitle: "Heavy-Duty Crash-Rated Automated Boom Barriers",
      sustainabilityCta: "Discover barriers",
      resultsTitle: "GLOBAL. releases next-generation SIL-rated Railway Signaling & Safety Systems catalog.",
      resultsCta1: "Product catalog (PDF)",
      resultsCta2: "Technical specs",
      tabElements: "EARTH LEAKAGE DETECTOR",
      tabPoweredByHow: "BOOM BARRIER SYSTEMS",
      tabSustainability: "RAILWAY SIGNALING",
      tabResults: "TECHNICAL SPECIFICATIONS",
    },
    discover: {
      badge: "ENGINEERING EXCELLENCE",
      headline:
        "We are a leading manufacturer of automated heavy-duty boom barriers and precision multi-channel earth leakage detectors trusted by railways, defense, and industrial utilities worldwide.",
      card1Cat: "PERIMETER SECURITY",
      card1Title: "Automated Crash-Rated Boom Barriers & Gates",
      card1Desc:
        "Heavy-duty electro-hydraulic and motorized boom barriers engineered for extreme duty cycles, high-security perimeters, and railway crossings.",
      card2Cat: "ELECTRICAL SAFETY",
      card2Title: "Multi-Channel Earth Leakage Detectors (ELD)",
      card2Desc:
        "Precision insulation resistance monitoring and real-time fault totalization for railway signaling, substations, and critical DC/AC networks.",
      card3Cat: "RAILWAY AUTOMATION",
      card3Title: "Level Crossing & Signal Interlocking Systems",
      card3Desc:
        "Fail-safe automated barrier mechanisms with integrated LED signaling, obstacle detection, and remote diagnostic telemetry.",
      card4Cat: "POWER DISTRIBUTION",
      card4Title: "Substation Insulation & Power Grid Protection",
      card4Desc:
        "Continuous online insulation resistance measurement ensuring uninterrupted power transmission and zero unplanned downtime.",
      exploreMore: "Explore full range",
    },
    whatWeBelieve: {
      badge: "OUR CORE VALUES",
      headline:
        "We believe in zero-tolerance for failure when protecting human life, critical railway operations, and high-voltage power networks.",
      learnMore: "Learn more",
      story1: "SIL-4 Fail-Safe System Architecture",
      story2: "Precision Multi-Channel Leakage Analysis",
      story3: "Crash-Tested Anti-Ram Barrier Engineering",
      story4: "All-Weather Weatherproof Durability (IP67)",
      story5: "Microsecond Fault Isolation & Alarms",
      story6: "Railway Signaling Interlocking Standards",
      story7: "Continuous R&D in High-Voltage Protection",
    },
    atAGlance: {
      title: "At a glance",
      stat1Number: "30+",
      stat1Label: "Years of engineering",
      stat2Number: "50,000+",
      stat2Label: "Global installations",
      stat3Number: "99.999%",
      stat3Label: "Operational reliability",
      stat3Sub: "(tested over 2M cycles)",
    },
    elementsMagazine: {
      badge: "FLAGSHIP PRODUCTS • TECH HIGHLIGHTS",
      titleLine1: "Explore our engineered",
      titleLine2: "systems & products",
      visitMagazine: "View product catalog",
      readMore: "View details",
      article1: "Heavy-Duty Automated Boom Barrier Systems",
      article1Desc:
        "Engineered with reinforced steel chassis, fast-acting motor drives, reflective hazard striping, and intelligent access control integration.",
      article1Tag: "FLAGSHIP PRODUCT • CRASH-RATED",
      article2: "Multi-Channel Earth Leakage Detector (ELD)",
      article2Desc:
        "Continuous multi-point electrical insulation resistance monitoring, analog precision meters, and digital fault totalizers.",
      article2Tag: "RAILWAY SAFETY • 16-CHANNEL",
      article3: "Automated Railway Level Crossing Gates",
      article3Desc:
        "Fail-safe railway level crossing barrier systems with audio-visual flashing signals, redundant power backup, and remote interlocking.",
      article3Tag: "RAIL INFRASTRUCTURE • SIL COMPLIANT",
    },
    environmental: {
      badge: "SAFETY & QUALITY",
      title: "Certifications & compliance",
      desc: "Every boom barrier and Earth Leakage Detector undergoes rigorous type-testing, environmental stress screening, and high-voltage insulation tests.",
      cta: "Quality & Standards",
      readMore: "Learn more",
      pillar1Title: "Fail-safe electronics",
      pillar1Desc: "Redundant microprocessors and dual-isolated measurement circuits guaranteeing zero false alarms.",
      pillar2Title: "Crash-rated mechanics",
      pillar2Desc: "Heavy steel enclosures with anti-ram resistance tested to international perimeter security standards.",
      pillar3Title: "Harsh climate resilience",
      pillar3Desc: "IP66/IP67 rated enclosures operating flawlessly from -40°C to +75°C in high-dust and humid environments.",
    },
    caseStudy: {
      badge: "CASE STUDY:",
      title: "High-Speed Rail Signaling & Perimeter Protection",
      p1: "Discover how our integrated multi-channel Earth Leakage Detectors and automated barrier systems safeguard 1,200 km of high-speed railway corridor.",
      p2: "Learn how continuous insulation monitoring prevents signal track circuit failures while automated level-crossing boom barriers ensure total road-rail safety.",
      cta: "Read full case study",
    },
    news: {
      titleLine1: "News & innovations from",
      titleLine2: "GLOBAL.",
      readAll: "Read all updates",
      news1Cat: "PRODUCT RELEASE • 2026",
      news1Title: "Next-generation 16-Channel Earth Leakage Detector with IoT telemetry and cloud diagnostics launched",
      news2Cat: "CERTIFICATION • 2026",
      news2Title: "Heavy-Duty Crash Barrier series passes M50 / K12 anti-ram perimeter impact certification",
      news3Cat: "INFRASTRUCTURE CONTRACT",
      news3Title: "GLOBAL. awarded national railway contract for 450 automated level crossing barrier installations",
      news4Cat: "TECHNOLOGY MILESTONE",
      news4Title: "AI-powered predictive insulation degradation monitoring introduced in latest ELD-900 series",
    },
    financial: {
      titleLine1: "Technical specifications and",
      titleLine2: "datasheets",
      seeAll: "See all downloads",
      keyDocs: "Key documents",
      doc1: "ELD-900 Multi-Channel Earth Leakage Detector Datasheet",
      doc2: "Heavy-Duty Industrial Boom Barrier Technical Manual",
      doc3: "Railway Signaling Safety & Compliance Certificate",
      downloadZip: "Download technical bundle (ZIP)",
      downloadNotice: "Downloading",
    },
    history: {
      badge: "MANUFACTURING EXCELLENCE",
      titleLine1: "Powering safety & security",
      titleLine2: "across critical networks",
      exploreHistory: "Explore our capabilities",
      legacyHeadline: "Three decades of engineering precision",
      watchDoc: "Click to watch product testing & manufacturing documentary",
    },
    aboutBanner: {
      title: "About us",
      learnMore: "Learn more",
    },
    footer: {
      quickLinks: "PRODUCTS & SOLUTIONS",
      siteInfo: "TECHNICAL DATA",
      otherWebsites: "CERTIFICATIONS",
      copyright: "© 2026 GLOBAL. All rights reserved.",
      tagline: "Engineering Precision • Uncompromising Safety",
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
    searchPlaceholder: "बूम बैरियर, ईएलडी सिस्टम, रेलवे सिग्नलिंग, डेटाशीट खोजें...",
    nav: {
      about: "हमारे बारे में",
      whatWeDo: "उत्पाद एवं प्रणालियां",
      sustainability: "सुरक्षा एवं मानक",
      investors: "तकनीकी विवरण",
      newsMedia: "समाचार एवं मीडिया",
      careers: "करियर",
    },
    hero: {
      tag: "ऑटोमेशन एवं सुरक्षा इंजीनियरिंग",
      title: "हमारे स्वचालित बूम बैरियर और अर्थ लीकेज डिटेक्टर बुनियादी ढांचे की सुरक्षा कैसे सुनिश्चित करते हैं?",
      ctaText: "उत्पाद देखें",
      elementsTitle: "मल्टी-चैनल अर्थ लीकेज डिटेक्टर: उन्नत विद्युत इन्सुलेशन निगरानी",
      elementsCta: "ईएलडी विवरण देखें",
      sustainabilityTitle: "हैवी-ड्यूटी क्रैश-रेटेड स्वचालित बूम बैरियर",
      sustainabilityCta: "बूम बैरियर देखें",
      resultsTitle: "ग्लोबल ने नई पीढ़ी के रेलवे सिग्नलिंग एवं सुरक्षा उत्पाद कैटलॉग जारी किए।",
      resultsCta1: "उत्पाद कैटलॉग (PDF)",
      resultsCta2: "तकनीकी विवरण",
      tabElements: "अर्थ लीकेज डिटेक्टर",
      tabPoweredByHow: "बूम बैरियर सिस्टम",
      tabSustainability: "रेलवे सिग्नलिंग",
      tabResults: "तकनीकी विवरण",
    },
    discover: {
      badge: "उत्कृष्ट इंजीनियरिंग",
      headline:
        "हम स्वचालित हैवी-ड्यूटी बूम बैरियर और उच्च-सटीक मल्टी-चैनल अर्थ लीकेज डिटेक्टरों के प्रमुख निर्माता हैं, जिन पर रेलवे, रक्षा और औद्योगिक संयंत्र भरोसा करते हैं।",
      card1Cat: "सुरक्षा बैरियर",
      card1Title: "स्वचालित क्रैश-रेटेड बूम बैरियर एवं गेट्स",
      card1Desc:
        "उच्च-सुरक्षा परिसरों, टोल प्लाजा और रेलवे क्रॉसिंग के लिए अत्यधिक टिकाऊ इलेक्ट्रो-हाइड्रोलिक एवं मोटर चालित बूम बैरियर।",
      card2Cat: "विद्युत सुरक्षा",
      card2Title: "मल्टी-चैनल अर्थ लीकेज डिटेक्टर (ELD)",
      card2Desc:
        "रेलवे सिग्नलिंग, सबस्टेशन और महत्वपूर्ण पावर ग्रिड के लिए वास्तविक समय इन्सुलेशन प्रतिरोध निगरानी और फॉल्ट एनालिसिस।",
      card3Cat: "रेलवे ऑटोमेशन",
      card3Title: "लेवल क्रॉसिंग एवं सिग्नल इंटरलॉकिंग सिस्टम",
      card3Desc:
        "ऑडियो-विजुअल एलईडी सिग्नलिंग, वाहन सेंसर और रिमोट मॉनिटरिंग के साथ फेल-सेफ स्वचालित बैरियर सिस्टम।",
      card4Cat: "पावर ग्रिड सुरक्षा",
      card4Title: "सबस्टेशन इन्सुलेशन एवं पावर डिस्ट्रीब्यूशन",
      card4Desc:
        "निरंतर ऑनलाइन इन्सुलेशन प्रतिरोध मापन जो शून्य डाउनटाइम और निर्बाध विद्युत प्रवाह सुनिश्चित करता है।",
      exploreMore: "सभी उत्पाद देखें",
    },
    whatWeBelieve: {
      badge: "हमारा विश्वास",
      headline:
        "हम मानव जीवन, रेलवे परिचालन और उच्च-वोल्टेज बिजली नेटवर्क की सुरक्षा में 100% विश्वसनीयता और शून्य त्रुटि में विश्वास करते हैं।",
      learnMore: "अधिक जानें",
      story1: "SIL-4 फेल-सेफ सिस्टम आर्किटेक्चर",
      story2: "सटीक मल्टी-चैनल लीकेज मापन",
      story3: "क्रैश-टेस्टेड एंटी-रैम बैरियर इंजीनियरिंग",
      story4: "हर मौसम में टिकाऊ ऑल-वेदर बिल्ड (IP67)",
      story5: "माइक्रोसेकंड फॉल्ट डिटेक्शन एवं अलार्म",
      story6: "रेलवे सिग्नलिंग इंटरलॉकिंग मानक",
      story7: "उच्च-वोल्टेज सुरक्षा में निरंतर अनुसंधान",
    },
    atAGlance: {
      title: "एक नज़र में",
      stat1Number: "30+",
      stat1Label: "वर्षों का इंजीनियरिंग अनुभव",
      stat2Number: "50,000+",
      stat2Label: "वैश्विक स्थापनाएं",
      stat3Number: "99.999%",
      stat3Label: "परिचालन विश्वसनीयता",
      stat3Sub: "(20 लाख से अधिक चक्रों पर परीक्षित)",
    },
    elementsMagazine: {
      badge: "प्रमुख उत्पाद • मुख्य विशेषताएं",
      titleLine1: "हमारे प्रमुख इंजीनियरिंग",
      titleLine2: "उत्पाद एवं प्रणालियां",
      visitMagazine: "कैटलॉग देखें",
      readMore: "विवरण देखें",
      article1: "हैवी-ड्यूटी स्वचालित बूम बैरियर सिस्टम",
      article1Desc:
        "मजबूत स्टील चेसिस, हाई-स्पीड मोटर ड्राइव, चेतावनी पट्टियों और स्मार्ट एक्सेस कंट्रोल के साथ निर्मित।",
      article1Tag: "प्रमुख उत्पाद • क्रैश-रेटेड",
      article2: "मल्टी-चैनल अर्थ लीकेज डिटेक्टर (ELD)",
      article2Desc:
        "निरंतर बहु-बिंदु विद्युत इन्सुलेशन निगरानी, एनालॉग मीटर और डिजिटल फॉल्ट काउंटर।",
      article2Tag: "रेलवे सुरक्षा • 16-चैनल",
      article3: "स्वचालित रेलवे लेवल क्रॉसिंग बैरियर",
      article3Desc:
        "फ्लैशिंग सिग्नल लाइट, सुरक्षा अलार्म और ऑटोमैटिक इंटरलॉकिंग से लैस सुरक्षित रेलवे गेट।",
      article3Tag: "रेल इन्फ्रास्ट्रक्चर • SIL प्रमाणित",
    },
    environmental: {
      badge: "सुरक्षा एवं गुणवत्ता",
      title: "प्रमाणीकरण एवं मानक",
      desc: "प्रत्येक बूम बैरियर और अर्थ लीकेज डिटेक्टर कठोर पर्यावरणीय परीक्षणों और उच्च-वोल्टेज इन्सुलेशन टेस्ट से गुजरता है।",
      cta: "गुणवत्ता एवं मानक",
      readMore: "अधिक जानें",
      pillar1Title: "फेल-सेफ इलेक्ट्रॉनिक्स",
      pillar1Desc: "दोहरे आइसोलेटेड सर्किट जो शून्य गलत अलार्म और सटीक मापन सुनिश्चित करते हैं।",
      pillar2Title: "क्रैश-रेटेड मैकेनिक्स",
      pillar2Desc: "अंतर्राष्ट्रीय सुरक्षा मानकों के अनुरूप एंटी-रैम और हैवी-इम्पैक्ट टेस्टेड स्टील।",
      pillar3Title: "कठिन मौसम में टिकाऊपन",
      pillar3Desc: "IP66/IP67 प्रमाणित जो -40°C से +75°C तक अत्यधिक धूल और बारिश में सुचारू रूप से कार्य करता है।",
    },
    caseStudy: {
      badge: "केस स्टडी:",
      title: "हाई-स्पीड रेल सिग्नलिंग एवं क्रॉसिंग सुरक्षा",
      p1: "जानिए कैसे हमारे एकीकृत मल्टी-चैनल अर्थ लीकेज डिटेक्टर और स्वचालित बैरियर 1,200 किमी लंबे हाई-स्पीड रेलवे कॉरिडोर की सुरक्षा करते हैं।",
      p2: "निरंतर इन्सुलेशन निगरानी से सिग्नलिंग विफलताओं की रोकथाम और स्वचालित क्रॉसिंग बैरियर से सड़क-रेल क्रॉसिंग पर पूर्ण सुरक्षा।",
      cta: "पूरी केस स्टडी पढ़ें",
    },
    news: {
      titleLine1: "ग्लोबल की दुनिया से",
      titleLine2: "नवीनतम नवाचार",
      readAll: "सभी समाचार देखें",
      news1Cat: "नया उत्पाद • 2026",
      news1Title: "IoT टेलीमेट्री और क्लाउड डायग्नोस्टिक्स से लैस नई पीढ़ी का 16-चैनल अर्थ लीकेज डिटेक्टर लॉन्च",
      news2Cat: "प्रमाणीकरण • 2026",
      news2Title: "हैवी-ड्यूटी क्रैश बैरियर श्रृंखला ने M50 / K12 एंटी-रैम इम्पैक्ट सर्टिफिकेशन प्राप्त किया",
      news3Cat: "रेलवे अनुबंध",
      news3Title: "ग्लोबल को 450 स्वचालित रेलवे लेवल क्रॉसिंग बैरियर स्थापना का राष्ट्रीय अनुबंध मिला",
      news4Cat: "तकनीकी उपलब्धि",
      news4Title: "नवीनतम ELD-900 श्रृंखला में AI-आधारित प्रेडिक्टिव इन्सुलेशन डिग्रेडेशन मॉनिटरिंग शामिल",
    },
    financial: {
      titleLine1: "तकनीकी विवरण और उत्पाद",
      titleLine2: "डेटाशीट",
      seeAll: "सभी डाउनलोड देखें",
      keyDocs: "प्रमुख दस्तावेज़",
      doc1: "ELD-900 मल्टी-चैनल अर्थ लीकेज डिटेक्टर डेटाशीट",
      doc2: "हैवी-ड्यूटी इंडस्ट्रियल बूम बैरियर टेक्निकल मैनुअल",
      doc3: "रेलवे सिग्नलिंग सुरक्षा एवं अनुपालन प्रमाणपत्र",
      downloadZip: "तकनीकी बंडल डाउनलोड करें (ZIP)",
      downloadNotice: "डाउनलोड हो रहा है",
    },
    history: {
      badge: "विनिर्माण उत्कृष्टता",
      titleLine1: "महत्वपूर्ण नेटवर्कों में",
      titleLine2: "सुरक्षा का संचालन",
      exploreHistory: "हमारी क्षमताएं जानें",
      legacyHeadline: "इंजीनियरिंग सटीकता के तीन गौरवशाली दशक",
      watchDoc: "उत्पाद परीक्षण एवं विनिर्माण डॉक्यूमेंट्री देखने के लिए क्लिक करें",
    },
    aboutBanner: {
      title: "हमारे बारे में",
      learnMore: "और जानें",
    },
    footer: {
      quickLinks: "उत्पाद एवं समाधान",
      siteInfo: "तकनीकी डेटा",
      otherWebsites: "प्रमाणीकरण",
      copyright: "© 2026 GLOBAL. सर्वाधिकार सुरक्षित।",
      tagline: "सटीक इंजीनियरिंग • अटूट सुरक्षा",
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

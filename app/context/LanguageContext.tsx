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
    searchPlaceholder: "Search reports, sustainability, energy solutions...",
    nav: {
      about: "ABOUT US",
      whatWeDo: "WHAT WE DO",
      sustainability: "SUSTAINABILITY",
      investors: "INVESTORS",
      newsMedia: "NEWS & MEDIA",
      careers: "CAREERS",
    },
    hero: {
      tag: "POWERED BY HOW",
      title: "How can we help advance the global materials transition?",
      ctaText: "Discover how",
      elementsTitle: "Understanding the subsurface: inside our Core Laboratories Center",
      elementsCta: "Read more",
      sustainabilityTitle: "Wetlands Conservation",
      sustainabilityCta: "Learn more",
      resultsTitle: "Global published its half-year 2026 results on August 4, 2026.",
      resultsCta1: "Q2 Interim report",
      resultsCta2: "Press release",
      tabElements: "ELEMENTS MAGAZINE",
      tabPoweredByHow: "POWERED BY HOW",
      tabSustainability: "SUSTAINABILITY",
      tabResults: "RESULTS ANNOUNCEMENT",
    },
    discover: {
      badge: "DISCOVER GLOBAL",
      headline:
        "We are one of the leading producers of the energy and chemicals that drive global commerce and help enhance the lives of people around the globe.",
      card1Cat: "SUSTAINABILITY",
      card1Title: "We're working to reduce our GHG emissions",
      card1Desc:
        "Pioneering lower-carbon energy solutions and advancing environmental stewardship to meet future global demand sustainably.",
      card2Cat: "WHAT WE DO",
      card2Title: "From transportation fuels to advanced materials, innovation is key",
      card2Desc:
        "Delivering reliable integrated energy and innovative chemical solutions across global markets from upstream to downstream.",
      card3Cat: "CAREERS",
      card3Title: "We offer professional opportunities to make a positive difference",
      card3Desc:
        "Join a diverse workforce of global innovators driving pioneering technologies and building fulfilling careers.",
      card4Cat: "INVESTORS",
      card4Title: "Global is one of the world's largest integrated energy and chemicals companies",
      card4Desc:
        "Delivering long-term shareholder value with disciplined capital allocation and sustainable financial performance.",
      exploreMore: "Discover more",
    },
    whatWeBelieve: {
      badge: "WHAT WE BELIEVE",
      headline:
        "We believe in the power of energy to help transform lives, enhance communities, and advance human progress.",
      learnMore: "Learn more",
      story1: "Managing our emissions",
      story2: "The Manifa Story",
      story3: "Serving society",
      story4: "Global and Aston Martin Racing take on F1",
      story5: "Investing in innovation and energy technology",
      story6: "Preserving marine sanctuaries and mangrove habitats",
      story7: "Empowering the next generation through STEM",
    },
    atAGlance: {
      title: "At a glance",
      stat1Number: "93",
      stat1Label: "Years of experience",
      stat2Number: "76,000+",
      stat2Label: "Total workforce",
      stat3Number: "247.2",
      stat3Label: "Total hydrocarbon reserves",
      stat3Sub: "(billion boe)",
    },
    elementsMagazine: {
      badge: "ELEMENTS MAGAZINE • ISSUE HIGHLIGHTS",
      titleLine1: "Explore the latest from",
      titleLine2: "Elements magazine",
      visitMagazine: "Visit the magazine",
      readMore: "Read more",
      article1: "Meet Global’s precision drilling crew",
      article1Desc:
        "Discover how our specialized field teams navigate extreme subsurface depths using next-generation automated drilling technology and industry-leading safety protocols.",
      article1Tag: "FEATURE STORY • 6 MIN READ",
      article2: "Safaniyah: Global’s first step offshore",
      article2Desc:
        "The pioneering engineering journey behind the world’s largest offshore oilfield and marine production network in the Arabian Gulf.",
      article2Tag: "OFFSHORE INNOVATION • 4 MIN READ",
      article3: "How Global is driving sporting excellence",
      article3Desc:
        "Empowering world-class athletes, advancing cutting-edge motorsport engineering, and inspiring the next generation through global sponsorships.",
      article3Tag: "GLOBAL SPONSORSHIPS • 3 MIN READ",
    },
    environmental: {
      badge: "SUSTAINABILITY",
      title: "Environmental protection",
      desc: "As our business operations expand, so do the actions we undertake aimed at protecting ecosystems and supporting the energy and materials transitions.",
      cta: "Global & Sustainability",
      readMore: "Read more",
      pillar1Title: "Climate and energy",
      pillar1Desc: "Our efforts towards GHG emissions reduction and efficient resource utilization across our operations.",
      pillar2Title: "People and safety",
      pillar2Desc: "We strive to provide a safe and respectful working environment for all.",
      pillar3Title: "Biodiversity initiatives",
      pillar3Desc: "Investing in the conservation and restoration of our natural ecosystems.",
    },
    caseStudy: {
      badge: "CASE STUDY:",
      title: "Advancing the materials transition",
      p1: "This Case Study will dive deeper into how the materials transition is progressing around the globe and look at the opportunities it creates.",
      p2: "Learn about the role that Global is playing in helping to unlock the benefits of advanced materials, while also helping to deliver economic and societal gains.",
      cta: "Go to the Case Study",
    },
    news: {
      titleLine1: "News from the world of",
      titleLine2: "GLOBAL.",
      readAll: "Read all news",
      news1Cat: "NEWS • AUGUST 24, 2026",
      news1Title: "Global enhances its global partnership ecosystem through collaboration with French companies",
      news2Cat: "NEWS • AUGUST 18, 2026",
      news2Title: "Global signs shareholders’ agreement to form joint venture to unlock new frontiers in mineral exploration",
      news3Cat: "NEWS • AUGUST 04, 2026",
      news3Title: "Global announces second quarter and half year 2026 financial results",
      news4Cat: "NEWS • MAY 25, 2026",
      news4Title: "Global announces key strategic expansion and technological milestone",
    },
    financial: {
      titleLine1: "Financial statements and key",
      titleLine2: "reports",
      seeAll: "See all reports",
      keyDocs: "Key documents",
      doc1: "Q2 2026 interim report",
      doc2: "Annual Report 2025",
      doc3: "Sustainability Report 2025",
      downloadZip: "Download zip-file",
      downloadNotice: "Downloading",
    },
    history: {
      badge: "OUR HISTORY",
      titleLine1: "Helping to power progress",
      titleLine2: "around the world",
      exploreHistory: "Explore Global’s history",
      legacyHeadline: "Our legacy throughout the years",
      watchDoc: "Click to watch the documentary",
    },
    aboutBanner: {
      title: "About us",
      learnMore: "Learn more",
    },
    footer: {
      quickLinks: "QUICK LINKS",
      siteInfo: "SITE INFORMATION",
      otherWebsites: "OTHER WEBSITES",
      copyright: "© 2026 GLOBAL. All rights reserved.",
      tagline: "Where Energy is Opportunity",
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
    searchPlaceholder: "रिपोर्ट, सतत विकास, ऊर्जा समाधान खोजें...",
    nav: {
      about: "हमारे बारे में",
      whatWeDo: "हम क्या करते हैं",
      sustainability: "सतत विकास",
      investors: "निवेशक",
      newsMedia: "समाचार एवं मीडिया",
      careers: "करियर",
    },
    hero: {
      tag: "विचारों से प्रेरित",
      title: "हम वैश्विक सामग्री संक्रमण को आगे बढ़ाने में कैसे मदद कर सकते हैं?",
      ctaText: "जानिए कैसे",
      elementsTitle: "भूगर्भीय अन्वेषण: हमारे कोर लैबोरेटरीज केंद्र के भीतर",
      elementsCta: "और पढ़ें",
      sustainabilityTitle: "आर्द्रभूमि संरक्षण एवं जैव विविधता",
      sustainabilityCta: "अधिक जानें",
      resultsTitle: "ग्लोबल ने 4 अगस्त 2026 को अपने अर्ध-वार्षिक 2026 वित्तीय परिणाम प्रकाशित किए।",
      resultsCta1: "Q2 अंतरिम रिपोर्ट",
      resultsCta2: "प्रेस विज्ञप्ति",
      tabElements: "एलिमेंट्स पत्रिका",
      tabPoweredByHow: "विचारों से प्रेरित",
      tabSustainability: "सतत विकास",
      tabResults: "वित्तीय परिणाम घोषणा",
    },
    discover: {
      badge: "ग्लोबल को जानें",
      headline:
        "हम ऊर्जा और रसायनों के अग्रणी उत्पादकों में से एक हैं जो वैश्विक व्यापार को गति देते हैं और दुनिया भर के लोगों के जीवन को बेहतर बनाते हैं।",
      card1Cat: "सतत विकास",
      card1Title: "हम अपने GHG उत्सर्जन को कम करने के लिए निरंतर काम कर रहे हैं",
      card1Desc:
        "भविष्य की ऊर्जा मांग को पूरा करने के लिए कम कार्बन समाधान, सौर ऊर्जा और पर्यावरण संरक्षण को बढ़ावा देना।",
      card2Cat: "हम क्या करते हैं",
      card2Title: "परिवहन ईंधन से लेकर उन्नत सामग्री तक, नवाचार हमारी पहचान है",
      card2Desc:
        "अपस्ट्रीम से डाउनस्ट्रीम तक वैश्विक बाजारों में विश्वसनीय एकीकृत ऊर्जा और रासायनिक समाधान प्रदान करना।",
      card3Cat: "करियर",
      card3Title: "हम सकारात्मक बदलाव लाने के लिए उत्कृष्ट पेशेवर अवसर प्रदान करते हैं",
      card3Desc:
        "अग्रणी तकनीकों को संचालित करने और एक सफल व समृद्ध करियर बनाने वाले वैश्विक नवप्रवर्तकों के साथ जुड़ें।",
      card4Cat: "निवेशक",
      card4Title: "ग्लोबल दुनिया की सबसे बड़ी एकीकृत ऊर्जा और रसायन कंपनियों में से एक है",
      card4Desc:
        "अनुशासित पूंजी आवंटन, उच्च लाभांश और टिकाऊ वित्तीय प्रदर्शन के साथ दीर्घकालिक शेयरधारक मूल्य प्रदान करना।",
      exploreMore: "अधिक जानें",
    },
    whatWeBelieve: {
      badge: "हमारा विश्वास",
      headline:
        "हम जीवन को बदलने, समुदायों को सशक्त बनाने और मानव प्रगति को आगे बढ़ाने के लिए ऊर्जा की शक्ति में विश्वास करते हैं।",
      learnMore: "अधिक जानें",
      story1: "उत्सर्जन प्रबंधन और नियंत्रण",
      story2: "मनीफा की प्रेरक यात्रा",
      story3: "समाज और पर्यावरण की सेवा",
      story4: "फॉर्मूला 1 में ग्लोबल और एस्टन मार्टिन रेसिंग",
      story5: "नवाचार और ऊर्जा प्रौद्योगिकी में निवेश",
      story6: "समुद्री अभयारण्यों और मैंग्रोव का संरक्षण",
      story7: "STEM शिक्षा के माध्यम से नई पीढ़ी का सशक्तिकरण",
    },
    atAGlance: {
      title: "एक नज़र में",
      stat1Number: "93",
      stat1Label: "वर्षों का उत्कृष्ट अनुभव",
      stat2Number: "76,000+",
      stat2Label: "कुल वैश्विक कार्यबल",
      stat3Number: "247.2",
      stat3Label: "कुल हाइड्रोकार्बन भंडार",
      stat3Sub: "(अरब बीओई)",
    },
    elementsMagazine: {
      badge: "एलिमेंट्स पत्रिका • मुख्य आकर्षण",
      titleLine1: "एलिमेंट्स पत्रिका से",
      titleLine2: "नवीनतम लेख देखें",
      visitMagazine: "पत्रिका देखें",
      readMore: "पूरा लेख पढ़ें",
      article1: "ग्लोबल की विशेषज्ञ ड्रिलिंग टीम से मिलें",
      article1Desc:
        "जानिए कैसे हमारे समर्पित फील्ड इंजीनियर अत्याधुनिक तकनीक और उच्चतम सुरक्षा मानकों के साथ सटीक भूगर्भीय अन्वेषण को अंजाम देते हैं।",
      article1Tag: "प्रमुख लेख • 6 मिनट पठन",
      article2: "सफ़ानिया: अपतटीय क्षेत्र में पहला ऐतिहासिक कदम",
      article2Desc:
        "अरब की खाड़ी में दुनिया के सबसे बड़े अपतटीय तेल क्षेत्र और समुद्री ऊर्जा उत्पादन नेटवर्क के पीछे की अग्रणी इंजीनियरिंग यात्रा।",
      article2Tag: "अपतटीय नवाचार • 4 मिनट पठन",
      article3: "ग्लोबल कैसे खेल उत्कृष्टता को बढ़ावा दे रहा है",
      article3Desc:
        "विश्व स्तरीय एथलीटों को सशक्त बनाना, मोटरस्पोर्ट इंजीनियरिंग को आगे बढ़ाना और वैश्विक खेल आयोजनों से प्रशंसकों को जोड़ना।",
      article3Tag: "वैश्विक प्रायोजन • 3 मिनट पठन",
    },
    environmental: {
      badge: "सतत विकास",
      title: "पर्यावरण संरक्षण",
      desc: "जैसे-जैसे हमारे संचालन का विस्तार होता है, हम पारिस्थितिकी तंत्र की रक्षा और स्वच्छ ऊर्जा व सामग्री संक्रमण का समर्थन करने के लिए ठोस कदम उठाते हैं।",
      cta: "ग्लोबल और सतत विकास",
      readMore: "और पढ़ें",
      pillar1Title: "जलवायु और ऊर्जा",
      pillar1Desc: "हमारे संचालन में ग्रीनहाउस गैस उत्सर्जन में कमी और कुशल संसाधन उपयोग के निरंतर प्रयास।",
      pillar2Title: "सुरक्षा और मानव कल्याण",
      pillar2Desc: "हम सभी के लिए एक सुरक्षित, सम्मानजनक और समावेशी कार्य वातावरण प्रदान करते हैं।",
      pillar3Title: "जैव विविधता पहल",
      pillar3Desc: "हमारे प्राकृतिक पारिस्थितिक तंत्र के संरक्षण और पुनर्स्थापन में दीर्घकालिक निवेश।",
    },
    caseStudy: {
      badge: "केस स्टडी:",
      title: "सामग्री संक्रमण को आगे बढ़ाना",
      p1: "यह केस स्टडी विस्तार से बताती है कि दुनिया भर में सामग्री संक्रमण कैसे आगे बढ़ रहा है और यह किन नए अवसरों का सृजन कर रहा है।",
      p2: "जानिए कि ग्लोबल उन्नत सामग्रियों के लाभों को उजागर करने और आर्थिक व सामाजिक प्रगति सुनिश्चित करने में क्या महत्वपूर्ण भूमिका निभा रहा है।",
      cta: "केस स्टडी पढ़ें",
    },
    news: {
      titleLine1: "ग्लोबल की दुनिया से",
      titleLine2: "नवीनतम समाचार",
      readAll: "सभी समाचार देखें",
      news1Cat: "समाचार • 24 अगस्त 2026",
      news1Title: "ग्लोबल ने वैश्विक साझेदारियों के जरिए अपनी अंतर्राष्ट्रीय उपस्थिति को और मजबूत किया",
      news2Cat: "समाचार • 18 अगस्त 2026",
      news2Title: "खनिज अन्वेषण के नए अवसरों के लिए महत्वपूर्ण रणनीतिक संयुक्त उद्यम समझौता",
      news3Cat: "समाचार • 04 अगस्त 2026",
      news3Title: "ग्लोबल ने 2026 की दूसरी तिमाही और अर्ध-वार्षिक वित्तीय परिणाम घोषित किए",
      news4Cat: "समाचार • 25 मई 2026",
      news4Title: "रणनीतिक ऊर्जा परिवर्तन और सतत विकास पर नए समझौते की घोषणा",
    },
    financial: {
      titleLine1: "वित्तीय विवरण और मुख्य",
      titleLine2: "रिपोर्ट्स",
      seeAll: "सभी रिपोर्ट देखें",
      keyDocs: "प्रमुख दस्तावेज़",
      doc1: "Q2 2026 अंतरिम वित्तीय रिपोर्ट",
      doc2: "वार्षिक रिपोर्ट 2025",
      doc3: "सतत विकास रिपोर्ट 2025",
      downloadZip: "ज़िप फ़ाइल डाउनलोड करें",
      downloadNotice: "डाउनलोड हो रहा है",
    },
    history: {
      badge: "हमारा इतिहास",
      titleLine1: "विश्व भर में प्रगति को",
      titleLine2: "ऊर्जावान बनाना",
      exploreHistory: "ग्लोबल का इतिहास जानें",
      legacyHeadline: "वर्षों की हमारी गौरवशाली विरासत",
      watchDoc: "डॉक्यूमेंट्री देखने के लिए क्लिक करें",
    },
    aboutBanner: {
      title: "हमारे बारे में",
      learnMore: "और जानें",
    },
    footer: {
      quickLinks: "त्वरित लिंक",
      siteInfo: "साइट जानकारी",
      otherWebsites: "अन्य वेबसाइट्स",
      copyright: "© 2026 GLOBAL. सर्वाधिकार सुरक्षित।",
      tagline: "जहां ऊर्जा एक अवसर है",
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

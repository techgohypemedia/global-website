import { SubpageConfig } from "../components/SubpageLayout";

export const SUBPAGES_DATA: Record<string, SubpageConfig> = {
  // =========================================================================
  // 1. RAILWAY BARRIER PRODUCT FAMILY
  // =========================================================================
  "railway-barrier": {
    slug: "railway-barrier",
    categoryEn: "Our Products",
    categoryHi: "हमारे उत्पाद",
    categoryHref: "/products/railway-barrier",
    titleEn: "Railway Barrier System",
    titleHi: "रेलवे बैरियर सिस्टम",
    subtitleEn: "Heavy-duty electromechanical barrier automation engineered for railway level crossings, perimeter security corridors, and mission-critical vehicular access control.",
    subtitleHi: "रेलवे लेवल क्रॉसिंग, परिधि सुरक्षा गलियारों और महत्वपूर्ण वाहन पहुंच नियंत्रण के लिए इंजीनियर की गई अत्यधिक मजबूत इलेक्ट्रोमैकेनिकल बैरियर ऑटोमेशन प्रणाली।",
    bannerImage: "/images/boom_barrier_railway.jpg",
    heroBadgeEn: "PRODUCT DOMAIN 01 • RAILWAY SAFETY",
    heroBadgeHi: "उत्पाद डोमेन 01 • रेलवे सुरक्षा",
    stats: [
      { value: "100%", labelEn: "Fail-Safe Gravity Descent", labelHi: "100% फेल-सेफ ग्रेविटी ड्रॉप" },
      { value: "0.8 - 4.5s", labelEn: "Variable Operating Speed", labelHi: "परिवर्तनीय परिचालन गति" },
      { value: "IP66", labelEn: "Industrial Weather Rating", labelHi: "औद्योगिक वेदरप्रूफ रेटिंग" },
      { value: "5M+", labelEn: "Tested Duty Cycles", labelHi: "परीक्षित परिचालन चक्र" },
    ],
    overviewTitleEn: "Engineered for Uncompromising Level Crossing Safety",
    overviewTitleHi: "लेवल क्रॉसिंग सुरक्षा के लिए समर्पित सटीक इंजीनियरिंग",
    overviewTextEn: [
      "The GLOBAL Railway Barrier System is developed specifically to withstand intense round-the-clock railway operations and severe ambient environmental conditions. Built around high-torque brushless drive mechanisms and precision counterbalanced armatures, our systems deliver smooth, controlled operation during continuous duty cycles.",
      "Designed with default-to-safe architecture, the barrier integrates multi-layer safety protocols including immediate obstacle detection sensing, optical warning interlocks, power-loss auto-gravity drop or retention options, and direct integration with railway signaling relay systems.",
      "Every unit is manufactured using marine-grade powder-coated steel housings, precision laser-cut chassis structures, and weather-sealed drive compartments to ensure years of maintenance-free service."
    ],
    overviewTextHi: [
      "ग्लोबल रेलवे बैरियर सिस्टम को विशेष रूप से निरंतर 24/7 रेलवे संचालन और अत्यधिक प्रतिकूल मौसम परिस्थितियों का सामना करने के लिए विकसित किया गया है। हाई-टॉर्क ब्रशलेस ड्राइव मोटर और सटीक काउंटरबैलेंस आर्मेचर के साथ, यह प्रणाली निरंतर परिचालन में सहज और नियंत्रित कार्यक्षमता प्रदान करती है।",
      "डिफ़ॉल्ट-टू-सेफ आर्किटेक्चर के साथ निर्मित, बैरियर में तत्काल बाधा पहचान, ऑप्टिकल चेतावनी इंटरफेस, पावर-कट पर ऑटो-ड्रॉप और रेलवे सिग्नलिंग रिले सिस्टम के साथ सीधा एकीकरण शामिल है।",
      "प्रत्येक इकाई का निर्माण मरीन-ग्रेड पाउडर-कोटेड स्टील हाउसिंग और मौसम-सील ड्राइव कम्पार्टमेंट से किया गया है ताकि वर्षों तक रखरखाव-मुक्त सेवा सुनिश्चित हो सके।"
    ],
    complianceStandards: ["EN 50122-1", "EN 50126 (RAMS)", "IEC 60947", "RDSO Compatibility", "IP66 / NEMA 4X"],
    features: [
      {
        badgeEn: "MECHANICAL DRIVE",
        badgeHi: "मैकेनिकल ड्राइव",
        titleEn: "Heavy-Duty Brushless Torque Motor",
        titleHi: "हैवी-ड्यूटी ब्रशलेस टॉर्क मोटर",
        descEn: "Delivers maximum holding torque with ultra-low thermal dissipation, ensuring million-cycle endurance without overheating.",
        descHi: "अत्यधिक कम तापमान वृद्धि के साथ अधिकतम होल्डिंग टॉर्क प्रदान करता है, जिससे लाखों चक्रों तक बिना किसी समस्या के निरंतर संचालन होता है।"
      },
      {
        badgeEn: "FAIL-SAFE LOGIC",
        badgeHi: "फेल-सेफ लॉजिक",
        titleEn: "Dual-Channel Signaling Interlock",
        titleHi: "ड्यूल-चैनल सिग्नलिंग इंटरलॉक",
        descEn: "Directly pairs with station master track circuits and interlocking relays with microsecond fault feedback loop.",
        descHi: "स्टेशन मास्टर ट्रैक सर्किट और इंटरलॉकिंग रिले के साथ सीधे जुड़ता है तथा त्वरित फॉल्ट फीडबैक प्रदान करता है।"
      },
      {
        badgeEn: "SAFETY SENSING",
        badgeHi: "सुरक्षा सेंसिंग",
        titleEn: "Loop & Optical Obstacle Detection",
        titleHi: "लूप एवं ऑप्टिकल बाधा पहचान",
        descEn: "Integrated inductive loop detectors and infrared curtains auto-reverse boom travel if obstruction is detected in the safety envelope.",
        descHi: "इंटीग्रेटेड लूप डिटेक्टर और इन्फ्रारेड कर्टेन बाधा का पता चलने पर बूम की दिशा को तुरंत उलट देते हैं।"
      },
      {
        badgeEn: "DURABILITY",
        badgeHi: "मजबूती",
        titleEn: "Anti-Corrosion Marine Coated Housing",
        titleHi: "जंग-रोधी मरीन कोटेड हाउसिंग",
        descEn: "Phosphated and dual-layer electrostatic powder coating tested against heavy saline and industrial chemical exposure.",
        descHi: "फॉस्फेटेड और डुअल-लेयर पाउडर कोटिंग जो भारी खारे पानी और औद्योगिक रासायनिक वाष्प से पूर्ण सुरक्षा प्रदान करती है।"
      },
      {
        badgeEn: "POWER RELIABILITY",
        badgeHi: "पावर बैकअप",
        titleEn: "Seamless Battery Backup & Manual Override",
        titleHi: "बैटरी बैकअप एवं मैनुअल ओवरराइड",
        descEn: "Built-in intelligent 24V DC battery management with emergency mechanical release key for power outage situations.",
        descHi: "पावर कट की स्थिति में आपातकालीन मैकेनिकल रिलीज की और स्वचालित 24V डीसी बैटरी मैनेजमेंट सिस्टम।"
      },
      {
        badgeEn: "TELEMETRY",
        badgeHi: "टेलीमेट्री",
        titleEn: "RS-485 / Modbus Diagnostic Interface",
        titleHi: "RS-485 / मोडबस डायग्नोस्टिक इंटरफेस",
        descEn: "Real-time cycle counting, motor current analytics, limit switch status, and alarm reporting to central SCADA systems.",
        descHi: "रीयल-टाइम साइकिल काउंटिंग, मोटर करंट डायग्नोस्टिक्स और सेंट्रल SCADA सिस्टम को अलार्म रिपोर्टिंग।"
      }
    ],
    specs: [
      { labelEn: "Boom Length Options", labelHi: "बूम लंबाई विकल्प", valueEn: "3.0m to 8.0m (Single / Articulated)", valueHi: "3.0m से 8.0m (सिंगल / आर्टिकुलेटेड)" },
      { labelEn: "Operating Speed", labelHi: "परिचालन गति", valueEn: "1.2s to 4.5s (Field Programmable)", valueHi: "1.2s से 4.5s (प्रोग्रामेबल)" },
      { labelEn: "Input Power Supply", labelHi: "इनपुट पावर सप्लाई", valueEn: "110V / 230V AC ±15%, 50/60 Hz", valueHi: "110V / 230V AC ±15%, 50/60 Hz" },
      { labelEn: "Motor Type", labelHi: "मोटर का प्रकार", valueEn: "24V DC Brushless Torque Motor", valueHi: "24V DC ब्रशलेस टॉर्क मोटर" },
      { labelEn: "Ingress Protection", labelHi: "सुरक्षा श्रेणी", valueEn: "IP66 Weatherproof Sealed", valueHi: "IP66 वेदरप्रूफ सील" },
      { labelEn: "Operating Temperature", labelHi: "कार्यकारी तापमान", valueEn: "-25°C to +70°C", valueHi: "-25°C से +70°C" },
      { labelEn: "Duty Cycle Rating", labelHi: "ड्यूटी साइकिल", valueEn: "100% Continuous Duty", valueHi: "100% सतत ड्यूटी" }
    ],
    applications: [
      {
        tagEn: "RAILWAY CROSSINGS",
        tagHi: "रेलवे क्रॉसिंग",
        titleEn: "National & Regional Level Crossings",
        titleHi: "राष्ट्रीय एवं क्षेत्रीय लेवल क्रॉसिंग्स",
        descEn: "Safeguarding road-rail intersections with synchronized dual and quad-gate configurations.",
        descHi: "सिंक्रनाइज़्ड डुअल और क्वाड-गेट कॉन्फ़िगरेशन के साथ सड़क-रेलवे इंटरसेक्शन की सुरक्षा।"
      },
      {
        tagEn: "YARDS & DEPOTS",
        tagHi: "यार्ड एवं डिपो",
        titleEn: "Railway Maintenance Depots & Freight Yards",
        titleHi: "रेलवे डिपो एवं मालगाड़ी यार्ड",
        descEn: "Strict perimeter access control with vehicle tag validation and RFID interlocks.",
        descHi: "वाहन टैग सत्यापन और आरएफआईडी इंटरलॉक के साथ सुरक्षित परिधि पहुंच नियंत्रण।"
      },
      {
        tagEn: "INDUSTRIAL INFRA",
        tagHi: "औद्योगिक इंफ्रा",
        titleEn: "Heavy Industrial Plants & Siding Corridors",
        titleHi: "भारी औद्योगिक संयंत्र एवं साइडिंग कॉरिडोर",
        descEn: "Managing heavy truck movements across private siding tracks in thermal plants and mines.",
        descHi: "थर्मल पावर प्लांटों और खदानों में निजी साइडिंग पटरियों पर भारी ट्रकों की आवाजाही का सुरक्षित नियंत्रण।"
      }
    ],
    relatedLinks: [
      { titleEn: "Fail-Safe Boom Mechanism", titleHi: "फेल-सेफ बूम मैकेनिज्म", href: "/products/railway-barrier/fail-safe-boom", tagEn: "SUB-SYSTEM", tagHi: "सब-सिस्टम" },
      { titleEn: "Obstacle Detection Integration", titleHi: "बाधा पहचान एकीकरण", href: "/products/railway-barrier/obstacle-detection", tagEn: "SAFETY", tagHi: "सुरक्षा" },
      { titleEn: "Power Backup & Manual Override", titleHi: "पावर बैकअप एवं मैनुअल", href: "/products/railway-barrier/power-backup", tagEn: "RELIABILITY", tagHi: "बैकअप" },
      { titleEn: "Weatherproof Enclosure", titleHi: "वेदरप्रूफ एनक्लोजर", href: "/products/railway-barrier/weatherproof-enclosure", tagEn: "HARDWARE", tagHi: "हार्डवेयर" }
    ]
  },

  "railway-barrier/fail-safe-boom": {
    slug: "railway-barrier/fail-safe-boom",
    categoryEn: "Railway Barrier System",
    categoryHi: "रेलवे बैरियर सिस्टम",
    categoryHref: "/products/railway-barrier",
    titleEn: "Fail-Safe Boom Mechanism",
    titleHi: "फेल-सेफ बूम मैकेनिज्म",
    subtitleEn: "Gravity-assisted counterbalance geometry and electromagnetic clutch design guaranteeing predictable fail-to-safe barrier positioning under power loss or emergency signals.",
    subtitleHi: "ग्रेविटी-असिस्टेड काउंटरबैलेंस ज्योमेट्री और इलेक्ट्रोमैग्नेटिक क्लच डिज़ाइन जो पावर कट या इमरजेंसी सिग्नल पर बूम की पूर्वानुमेय सुरक्षित स्थिति सुनिश्चित करता है।",
    bannerImage: "/images/boom_barrier_hero.jpg",
    heroBadgeEn: "SAFETY CRITICAL • CORE DRIVE ARCHITECTURE",
    heroBadgeHi: "सुरक्षा क्रिटिकल • कोर ड्राइव आर्किटेक्चर",
    stats: [
      { value: "0 ms", labelEn: "Clutch Disengage Latency", labelHi: "क्लच डिसएंगेज लेटेंसी" },
      { value: "100%", labelEn: "Passive Gravitational Descent", labelHi: "निष्क्रिय गुरुत्वाकर्षण ड्रॉप" },
      { value: "SIL-2", labelEn: "Safety Integrity Compatible", labelHi: "सुरक्षा अखंडता अनुकूल" },
      { value: "±0.5°", labelEn: "Position Precision", labelHi: "स्थिति निर्धारण सटीकता" }
    ],
    overviewTitleEn: "Predictable, Default-to-Safe Mechanical Engineering",
    overviewTitleHi: "पूर्वानुमेय एवं डिफ़ॉल्ट-टू-सेफ मैकेनिकल इंजीनियरिंग",
    overviewTextEn: [
      "In critical railway applications, a mechanical barrier must respond safely under worst-case electrical failure scenarios. The GLOBAL Fail-Safe Boom Mechanism utilizes a proprietary dual-spring counterbalance system combined with a fast-release electromagnetic safety brake.",
      "Upon command loss, power blackout, or safety interlock trip, the brake effortlessly releases, allowing calibrated counterweights to glide the barrier into its default safe orientation at a controlled descent velocity dampening impact.",
      "The drive assembly includes precision dual-encoder feedback that reports boom trajectory with sub-degree accuracy directly to the local electronic controller."
    ],
    overviewTextHi: [
      "क्रिटिकल रेलवे अनुप्रयोगों में, किसी भी प्रकार की विद्युत विफलता में बैरियर को सुरक्षित रूप से कार्य करना चाहिए। ग्लोबल फेल-सेफ बूम मैकेनिज्म एक पेटेंटेड डुअल-स्प्रिंग काउंटरबैलेंस सिस्टम और फास्ट-रिलीज़ इलेक्ट्रोमैग्नेटिक सेफ्टी ब्रेक का उपयोग करता है।",
      "पावर कट या सिग्नल लॉस की स्थिति में, ब्रेक तुरंत रिलीज़ हो जाता है, जिससे काउंटरवेट्स बूम को नियंत्रित गति के साथ सुरक्षित स्थिति में पहुंचा देते हैं।",
      "ड्राइव असेंबली में सटीक डुअल-एनकोडर फीडबैक शामिल है जो बूम की गति और कोण की रीयल-टाइम रिपोर्ट सीधे कंट्रोलर को देता है।"
    ],
    complianceStandards: ["EN 50126", "EN 50129", "IEC 61508 SIL-2", "ISO 13849-1 Cat 3"],
    features: [
      {
        badgeEn: "GRAVITY CONTROL",
        badgeHi: "ग्रेविटी कंट्रोल",
        titleEn: "Calibrated Hydro-Pneumatic Damping",
        titleHi: "कैलिब्रेटेड हाइड्रो-न्यूमैटिक डैम्पिंग",
        descEn: "Eliminates mechanical shock and boom bounce at terminal positions during gravity drop.",
        descHi: "ग्रेविटी ड्रॉप के दौरान बूम के झटके और कंपन को पूरी तरह समाप्त करता है।"
      },
      {
        badgeEn: "CLUTCH SYSTEM",
        badgeHi: "क्लच सिस्टम",
        titleEn: "Zero-Wear Electromagnetic Release",
        titleHi: "जीरो-वियर इलेक्ट्रोमैग्नेटिक रिलीज़",
        descEn: "Fails open on power drop with instantaneous mechanical decoupling from motor gears.",
        descHi: "पावर कट होने पर तुरंत मोटर गियर से अलग होकर बूम को सुरक्षित नीचे ले आता है।"
      },
      {
        badgeEn: "PRECISION",
        badgeHi: "सटीकता",
        titleEn: "Absolute Optical Rotary Encoders",
        titleHi: "ऑप्टिकल रोटरी एनकोडर",
        descEn: "Retains exact boom angle without needing homing cycles after sudden power resets.",
        descHi: "पावर रीसेट के बाद भी बूम का सटीक कोण बनाए रखता है।"
      }
    ],
    specs: [
      { labelEn: "Descent Modulation", labelHi: "ड्रॉप मॉड्यूलेशन", valueEn: "Hydro-pneumatic regulated terminal brake", valueHi: "हाइड्रो-न्यूमैटिक नियंत्रित टर्मिनल ब्रेक" },
      { labelEn: "Emergency Release Torque", labelHi: "इमरजेंसी रिलीज़ टॉर्क", valueEn: "< 5 Nm manual effort", valueHi: "< 5 Nm आसान मैनुअल प्रयास" },
      { labelEn: "Spring Fatigue Rating", labelHi: "स्प्रिंग लाइफ रेटिंग", valueEn: "5,000,000 full mechanical cycles", valueHi: "50,00,000 पूर्ण मैकेनिकल चक्र" }
    ],
    relatedLinks: [
      { titleEn: "Obstacle Detection Integration", titleHi: "बाधा पहचान एकीकरण", href: "/products/railway-barrier/obstacle-detection", tagEn: "SAFETY", tagHi: "सुरक्षा" },
      { titleEn: "Power Backup & Manual Override", titleHi: "पावर बैकअप एवं मैनुअल", href: "/products/railway-barrier/power-backup", tagEn: "POWER", tagHi: "पावर" }
    ]
  },

  "railway-barrier/obstacle-detection": {
    slug: "railway-barrier/obstacle-detection",
    categoryEn: "Railway Barrier System",
    categoryHi: "रेलवे बैरियर सिस्टम",
    categoryHref: "/products/railway-barrier",
    titleEn: "Obstacle Detection Integration",
    titleHi: "बाधा पहचान एकीकरण",
    subtitleEn: "Multi-layered sensor integration combining inductive vehicle loops, infrared safety curtains, and dynamic torque feedback to protect vehicles and pedestrians.",
    subtitleHi: "वाहनों और पैदल यात्रियों की सुरक्षा के लिए इंडक्टिव व्हीकल लूप, इन्फ्रारेड सेफ्टी कर्टेन और डायनेमिक टॉर्क फीडबैक का बहुस्तरीय सेंसर एकीकरण।",
    bannerImage: "/images/crash_barrier_perimeter.jpg",
    heroBadgeEn: "SENSING & INTERLOCKS • VEHICLE PROTECTION",
    heroBadgeHi: "सेंसिंग एवं इंटरलॉक्स • वाहन सुरक्षा",
    stats: [
      { value: "< 25ms", labelEn: "Obstacle Reaction Time", labelHi: "बाधा प्रतिक्रिया समय" },
      { value: "Dual", labelEn: "Inductive Loop Channels", labelHi: "ड्यूल इंडक्टिव लूप चैनल्स" },
      { value: "IP67", labelEn: "Optical Sensor Rating", labelHi: "ऑप्टिकल सेंसर रेटिंग" },
      { value: "0-100%", labelEn: "Sensitivity Adjustment", labelHi: "संवेदनशीलता समायोजन" }
    ],
    overviewTitleEn: "Active & Passive Safety Sensor Synchronization",
    overviewTitleHi: "सक्रिय एवं निष्क्रिय सुरक्षा सेंसर सिंक्रनाइज़ेशन",
    overviewTextEn: [
      "Safety at level crossings requires instantaneous detection of stopped road vehicles, stray objects, or pedestrians trapped within the barrier zone. The GLOBAL obstacle detection suite provides 360-degree sensory coverage.",
      "The system monitors motor armature current in real time; if an unexpected resistance is encountered during boom lowering, the drive reverses instantly within 25 milliseconds to prevent damage or injury.",
      "Dual inductive loop detectors embedded under road pavement ensure that the barrier will never descend while vehicles are present on the track intersection area."
    ],
    overviewTextHi: [
      "लेवल क्रॉसिंग पर सुरक्षा के लिए सड़क पर रुके वाहनों या बैरियर क्षेत्र में फंसे व्यक्तियों की तत्काल पहचान आवश्यक है। ग्लोबल बाधा पहचान सूट 360-डिग्री सुरक्षा कवरेज प्रदान करता है।",
      "सिस्टम मोटर करंट की रीयल-टाइम निगरानी करता है; यदि बूम नीचे आते समय कोई बाधा आती है, तो ड्राइव 25 मिलीसेकंड के भीतर तुरंत विपरीत दिशा में घूम जाता है।",
      "सड़क के नीचे लगे डुअल इंडक्टिव लूप डिटेक्टर सुनिश्चित करते हैं कि ट्रैक क्षेत्र में वाहन मौजूद होने पर बैरियर कभी नीचे न आए।"
    ],
    complianceStandards: ["EN 12978", "ISO 13849-1", "IEC 61496 Type 4", "RDSO Crossings Norms"],
    features: [
      {
        badgeEn: "AUTO-REVERSE",
        badgeHi: "ऑटो-रिवर्स",
        titleEn: "Current-Sensing Impact Protection",
        titleHi: "करंट-सेंसिंग इम्पैक्ट प्रोटेक्शन",
        descEn: "Microcontroller monitors brushless motor torque fluctuations and triggers instantaneous lift upon soft physical contact.",
        descHi: "माइक्रोकंट्रोलर मोटर टॉर्क में हल्के बदलाव को भांपकर बूम को तुरंत ऊपर उठा देता है।"
      },
      {
        badgeEn: "IR CURTAIN",
        badgeHi: "IR कर्टेन",
        titleEn: "Multi-Beam Infrared Safety Barrier",
        titleHi: "मल्टी-बीम इन्फ्रारेड सेफ्टी बैरियर",
        descEn: "Weather-hardened optical columns unaffected by direct sunlight, rain, fog, or dust accumulation.",
        descHi: "धूप, बारिश, कोहरे या धूल से अप्रभावित रहने वाले मजबूत ऑप्टिकल सेफ्टी सेंसर।"
      },
      {
        badgeEn: "RADAR / LIDAR",
        badgeHi: "रडार / लिडार",
        titleEn: "High-Frequency 24GHz Radar Ready",
        titleHi: "24GHz माइक्रोवेव रडार इंटरफेस",
        descEn: "Direct plug-and-play interface for non-intrusive radar tracking across complex multi-lane level crossings.",
        descHi: "मल्टी-लेन लेवल क्रॉसिंग पर वाहनों की निरंतर ट्रैकिंग हेतु रडार इंटरफेस।"
      }
    ],
    specs: [
      { labelEn: "Optical Detection Range", labelHi: "ऑप्टिकल रेंज", valueEn: "Up to 15 meters across roadway", valueHi: "सड़क पर 15 मीटर तक" },
      { labelEn: "Loop Tuning", labelHi: "लूप ट्यूनिंग", valueEn: "Auto-calibrating 20 - 1000 µH", valueHi: "ऑटो-कैलिब्रेटिंग 20 - 1000 µH" },
      { labelEn: "Response Delay", labelHi: "प्रतिक्रिया समय", valueEn: "< 25 milliseconds", valueHi: "< 25 मिलीसेकंड" }
    ],
    relatedLinks: [
      { titleEn: "Fail-Safe Boom Mechanism", titleHi: "फेल-सेफ बूम मैकेनिज्म", href: "/products/railway-barrier/fail-safe-boom", tagEn: "DRIVE", tagHi: "ड्राइव" },
      { titleEn: "Weatherproof Enclosure", titleHi: "वेदरप्रूफ एनक्लोजर", href: "/products/railway-barrier/weatherproof-enclosure", tagEn: "HOUSING", tagHi: "हाउसिंग" }
    ]
  },

  "railway-barrier/power-backup": {
    slug: "railway-barrier/power-backup",
    categoryEn: "Railway Barrier System",
    categoryHi: "रेलवे बैरियर सिस्टम",
    categoryHref: "/products/railway-barrier",
    titleEn: "Power Backup & Manual Override",
    titleHi: "पावर बैकअप एवं मैनुअल ओवरराइड",
    subtitleEn: "Uninterrupted 24V DC battery management with emergency mechanical release keys to keep critical railway crossings operational through grid power blackouts.",
    subtitleHi: "पावर कट और ग्रिड विफलता के दौरान भी रेलवे क्रॉसिंग को चालू रखने के लिए 24V डीसी बैटरी मैनेजमेंट और इमरजेंसी मैकेनिकल रिलीज की।",
    bannerImage: "/images/power_distribution_eld.jpg",
    heroBadgeEn: "POWER ARCHITECTURE • CONTINUOUS AVAILABILITY",
    heroBadgeHi: "पावर आर्किटेक्चर • निरंतर उपलब्धता",
    stats: [
      { value: "500+", labelEn: "Full Battery Cycles", labelHi: "बैटरी पर पूर्ण ऑपरेशंस" },
      { value: "24V DC", labelEn: "Pure DC Architecture", labelHi: "शुद्ध डीसी आर्किटेक्चर" },
      { value: "3-Stage", labelEn: "Intelligent Float Charger", labelHi: "इंटेलिजेंट फ्लोट चार्जर" },
      { value: "0 sec", labelEn: "Switchover Latency", labelHi: "शून्य स्विचओवर समय" }
    ],
    overviewTitleEn: "Reliable Auxiliary Power for Zero Blackout Vulnerability",
    overviewTitleHi: "शून्य ब्लैकआउट जोखिम के लिए विश्वसनीय सहायक पावर सिस्टम",
    overviewTextEn: [
      "Remote railway outposts often suffer from fluctuating grid voltages, brownouts, and extended power outages. GLOBAL integrates industrial grade 24V DC battery modules directly within the barrier cabinet.",
      "The microcontroller power supply operates with seamless online switching; during AC mains loss, the barrier switches to internal deep-cycle batteries with zero microsecond transfer delay.",
      "In the event of complete battery depletion during extreme emergencies, a dedicated mechanical key unlocks the internal gearbox for effortless manual boom opening or closing by authorized gate personnel."
    ],
    overviewTextHi: [
      "दूरदराज के रेलवे क्रॉसिंग अक्सर ग्रिड वोल्टेज में उतार-चढ़ाव और लंबी बिजली कटौती का सामना करते हैं। ग्लोबल बैरियर कैबिनेट में सीधे 24V डीसी बैटरी मॉड्यूल को एकीकृत करता है।",
      "पावर सप्लाई शून्य स्विचओवर विलंब के साथ काम करती है; एसी मेन्स फेल होने पर बैरियर बिना किसी रुकावट के आंतरिक बैटरी पर चलने लगता है।",
      "अत्यधिक आपात स्थिति में बैटरी पूरी तरह समाप्त होने पर, एक समर्पित मैकेनिकल की के माध्यम से गेट ऑपरेटर बूम को आसानी से मैनुअल संचालित कर सकते हैं।"
    ],
    complianceStandards: ["IEEE 1184", "IEC 60896", "EN 50272-2", "CE Safety Certified"],
    features: [
      {
        badgeEn: "BATTERY HEALTH",
        badgeHi: "बैटरी हेल्थ",
        titleEn: "Smart Microprocessor Float Charger",
        titleHi: "स्मार्ट माइक्रोप्रोसेसर फ्लोट चार्जर",
        descEn: "Temperature-compensated pulse charging extends battery operational lifespan up to 5+ years.",
        descHi: "तापमान-मुआवजा पल्स चार्जिंग जो बैटरी जीवन को 5+ वर्षों तक बढ़ाती है।"
      },
      {
        badgeEn: "MANUAL RELEASE",
        badgeHi: "मैनुअल रिलीज",
        titleEn: "Ergonomic Mechanical Key Override",
        titleHi: "आसान मैकेनिकल की ओवरराइड",
        descEn: "High-security cylinder lock on cabinet side permits station master to manually balance and lock boom in open/closed position.",
        descHi: "कैबिनेट पर लगा हाई-सिक्योरिटी लॉक जिसके जरिए बूम को आसानी से मैनुअल लॉक किया जा सकता है।"
      },
      {
        badgeEn: "TELEMETRY",
        badgeHi: "टेलीमेट्री",
        titleEn: "Low Battery Warning Telemetry",
        titleHi: "लो-बैटरी टेलीमेट्री अलार्म",
        descEn: "Sends early SMS / Modbus alerts to control room when battery voltage drops below safe threshold.",
        descHi: "बैटरी कम होने पर कंट्रोल रूम को तुरंत ऑटोमैटिक अलर्ट भेजता है।"
      }
    ],
    specs: [
      { labelEn: "Battery Capacity", labelHi: "बैटरी क्षमता", valueEn: "Dual 12V 18Ah / 26Ah VRLA AGM batteries", valueHi: "ड्यूल 12V 18Ah / 26Ah VRLA बैटरी" },
      { labelEn: "Backup Endurance", labelHi: "बैकअप क्षमता", valueEn: "Up to 500 complete open/close cycles", valueHi: "500 पूर्ण ओपन/क्लोज चक्र तक" },
      { labelEn: "Recharge Time", labelHi: "चार्जिंग समय", valueEn: "< 4 hours to 90% capacity", valueHi: "< 4 घंटे में 90% चार्ज" }
    ],
    relatedLinks: [
      { titleEn: "Railway Barrier System", titleHi: "रेलवे बैरियर सिस्टम", href: "/products/railway-barrier", tagEn: "SYSTEM", tagHi: "सिस्टम" },
      { titleEn: "Weatherproof Enclosure", titleHi: "वेदरप्रूफ एनक्लोजर", href: "/products/railway-barrier/weatherproof-enclosure", tagEn: "HOUSING", tagHi: "हाउसिंग" }
    ]
  },

  "railway-barrier/weatherproof-enclosure": {
    slug: "railway-barrier/weatherproof-enclosure",
    categoryEn: "Railway Barrier System",
    categoryHi: "रेलवे बैरियर सिस्टम",
    categoryHref: "/products/railway-barrier",
    titleEn: "Weatherproof Industrial Enclosure",
    titleHi: "वेदरप्रूफ औद्योगिक एनक्लोजर",
    subtitleEn: "IP66 certified dual-sealed structural steel housing engineered to withstand corrosive coastal air, monsoon deluges, desert dust storms, and extreme vibration.",
    subtitleHi: "IP66 प्रमाणित डुअल-सील स्ट्रक्चरल स्टील हाउसिंग जो तटीय खारे वातावरण, भारी बारिश, रेगिस्तानी धूल और अत्यधिक कंपन से पूर्ण सुरक्षा प्रदान करती है।",
    bannerImage: "/images/boom_barrier_railway.jpg",
    heroBadgeEn: "MECHANICAL PROTECTION • CORROSION IMMUNITY",
    heroBadgeHi: "मैकेनिकल प्रोटेक्शन • जंग रोधी क्षमता",
    stats: [
      { value: "IP66", labelEn: "Ingress Protection Rating", labelHi: "इनग्रेस प्रोटेक्शन रेटिंग" },
      { value: "2.5 mm", labelEn: "Cold Rolled Steel Gauge", labelHi: "कोल्ड रोल्ड स्टील मोटाई" },
      { value: "1000 hrs", labelEn: "Salt Spray ASTM B117 Tested", labelHi: "सॉल्ट स्प्रे टेस्टेड" },
      { value: "IK10", labelEn: "Mechanical Impact Resistance", labelHi: "इम्पैक्ट रेजिस्टेंस IK10" }
    ],
    overviewTitleEn: "Built for Extreme Field Exposure",
    overviewTitleHi: "अत्यधिक कठिन बाहरी वातावरण के लिए निर्मित",
    overviewTextEn: [
      "Level crossing barriers operate continuously in unfiltered open-air conditions, ranging from high-salinity coastal areas to freezing alpine and scorching desert tracks. GLOBAL enclosures feature heavy-duty 2.5mm cold-rolled steel construction with cataphoresis and polyester powder coat finishing.",
      "Dual neoprene gaskets line all access doors and cable entry glands, completely sealing internal electronic motor drives and logic boards against pressurized water jets, micro-dust, and insect ingress.",
      "Internal thermostatically controlled anti-condensation heaters ensure electronic circuitry remains free of moisture build-up during rapid day-to-night temperature swings."
    ],
    overviewTextHi: [
      "लेवल क्रॉसिंग बैरियर खुले वातावरण में काम करते हैं, जहां तटीय खारा पानी, भारी बारिश और अत्यधिक गर्मी होती है। ग्लोबल एनक्लोजर 2.5 मिमी मजबूत स्टील और पॉलिएस्टर पाउडर कोटिंग से निर्मित हैं।",
      "सभी दरवाजों और केबल ग्लैंड्स पर डुअल नियोप्रिन गैसकेट लगे हैं जो धूल, पानी और कीड़ों को अंदर जाने से रोकते हैं।",
      "आंतरिक थर्मोस्टेटिक एंटी-कंडेनसेशन हीटर तापमान में अचानक बदलाव के दौरान इलेक्ट्रॉनिक्स में नमी जमने से रोकते हैं।"
    ],
    complianceStandards: ["IEC 60529 (IP66)", "IEC 62262 (IK10)", "ASTM B117 Salt Spray", "ISO 12944 C5-M"],
    features: [
      {
        badgeEn: "COATING",
        badgeHi: "कोटिंग",
        titleEn: "Electrophoretic Anti-Rust Priming",
        titleHi: "इलेक्ट्रोफोरेटिक एंटी-रस्ट प्राइमर",
        descEn: "Deep zinc phosphate immersion prevents rust undercutting even if exterior paint is scratched.",
        descHi: "डीप जिंक फॉस्फेट कोटिंग जो खरोंच आने पर भी जंग लगने से बचाती है।"
      },
      {
        badgeEn: "SEALING",
        badgeHi: "सीलिंग",
        titleEn: "Continuous EPDM Gasket System",
        titleHi: "सतत EPDM गैसकेट सील",
        descEn: "Automotive-grade synthetic rubber perimeter seal maintains elasticity over 15+ years of UV exposure.",
        descHi: "ऑटोमोटिव ग्रेड रबर सील जो 15+ वर्षों तक धूप और बारिश में अपनी मजबूती बनाए रखती है।"
      },
      {
        badgeEn: "CLIMATE CONTROL",
        badgeHi: "जलवायु नियंत्रण",
        titleEn: "Thermostatic Anti-Condensation Heating",
        titleHi: "थर्मोस्टैटिक एंटी-कंडेनसेशन हीटर",
        descEn: "Automatically turns on when internal humidity or temperature reaches dew point.",
        descHi: "नमी बढ़ने पर स्वचालित रूप से चालू होकर आंतरिक इलेक्ट्रॉनिक्स को सूखा रखता है।"
      }
    ],
    specs: [
      { labelEn: "Material Grade", labelHi: "सामग्री का प्रकार", valueEn: "2.5mm CRCA Steel / 304 Stainless Steel Option", valueHi: "2.5mm CRCA स्टील / SS 304 विकल्प" },
      { labelEn: "Protection Standard", labelHi: "प्रोटेक्शन मानक", valueEn: "IP66 dust-tight & water-jet proof", valueHi: "IP66 डस्ट-टाइट एवं वाटर-जेट प्रूफ" },
      { labelEn: "Impact Rating", labelHi: "इम्पैक्ट रेटिंग", valueEn: "IK10 vandal and impact resistant", valueHi: "IK10 वंडल एवं इम्पैक्ट प्रतिरोधी" }
    ],
    relatedLinks: [
      { titleEn: "Railway Barrier System", titleHi: "रेलवे बैरियर सिस्टम", href: "/products/railway-barrier", tagEn: "SYSTEM", tagHi: "सिस्टम" },
      { titleEn: "Obstacle Detection Integration", titleHi: "बाधा पहचान", href: "/products/railway-barrier/obstacle-detection", tagEn: "SAFETY", tagHi: "सुरक्षा" }
    ]
  },

  // =========================================================================
  // 2. DIGITAL EARTH LEAKAGE DETECTOR FAMILY
  // =========================================================================
  "earth-leakage": {
    slug: "earth-leakage",
    categoryEn: "Our Products",
    categoryHi: "हमारे उत्पाद",
    categoryHref: "/products/earth-leakage",
    titleEn: "Digital Earth Leakage Detector",
    titleHi: "डिजिटल अर्थ लीकेज डिटेक्टर",
    subtitleEn: "High-precision microprocessor-based True RMS residual current monitoring and insulation diagnostic instruments for industrial switchboards and railway signalling power supplies.",
    subtitleHi: "औद्योगिक स्विचबोर्ड और रेलवे सिग्नलिंग पावर सप्लाई के लिए उच्च-सटीक माइक्रोप्रोसेसर आधारित ट्रू RMS अर्थ लीकेज और इंसुलेशन डायग्नोस्टिक उपकरण।",
    bannerImage: "/images/earth_leakage_detector_hero.jpg",
    heroBadgeEn: "PRODUCT DOMAIN 02 • ELECTRICAL PROTECTION",
    heroBadgeHi: "उत्पाद डोमेन 02 • विद्युत सुरक्षा",
    stats: [
      { value: "True RMS", labelEn: "Harmonic-Filtered Measurement", labelHi: "हार्मोनिक-फिल्टर्ड ट्रू RMS" },
      { value: "10mA - 30A", labelEn: "Wide Trip Adjustment Range", labelHi: "विस्तृत ट्रिप थ्रेसहोल्ड रेंज" },
      { value: "0 - 10.0s", labelEn: "Configurable Time Delay", labelHi: "समायोज्य ट्रिप टाइम डिले" },
      { value: "< 20ms", labelEn: "Ultra-Fast Trip Response", labelHi: "अति-त्वरित ट्रिप प्रतिक्रिया" }
    ],
    overviewTitleEn: "Proactive Electrical Insulation Diagnostics",
    overviewTitleHi: "सक्रिय विद्युत इंसुलेशन डायग्नोस्टिक्स एवं सुरक्षा",
    overviewTextEn: [
      "Electrical fires, unexpected transformer trips, and dangerous ground fault voltages often stem from slow, unnoticed insulation breakdown. The GLOBAL Digital Earth Leakage Detector continuously tracks micro-leakages in power distribution networks before catastrophic short circuits occur.",
      "Equipped with advanced 32-bit DSP processors and high-permeability Core Balance Current Transformers (CBCT), our detectors accurately compute True RMS residual current even in harmonic-distorted industrial environments containing VFDs and UPS inverters.",
      "Clear OLED/digital displays provide immediate local visibility into real-time leakage currents, fault history logs, and trip countdown timers, while Modbus RS-485 telemetry transmits live telemetry to central SCADA consoles."
    ],
    overviewTextHi: [
      "विद्युत आग, अप्रत्याशित ट्रांसफार्मर ट्रिप और खतरनाक ग्राउंड फॉल्ट्स आमतौर पर इंसुलेशन के धीरे-धीरे कमजोर होने से होते हैं। ग्लोबल डिजिटल अर्थ लीकेज डिटेक्टर गंभीर शॉर्ट सर्किट होने से पहले ही सूक्ष्म लीकेज की निरंतर निगरानी करता है।",
      "32-बिट डीएसपी प्रोसेसर और हाई-परमिएबिलिटी कोर बैलेंस करंट ट्रांसफॉर्मर (CBCT) से लैस, यह डिटेक्टर वीएफडी और यूपीएस इन्वर्टर वाले वातावरण में भी सटीक ट्रू RMS लीकेज मापता है।",
      "स्पष्ट डिजिटल डिस्प्ले ऑपरेटरों को रीयल-टाइम लीकेज करंट, फॉल्ट हिस्ट्री और ट्रिप टाइमर की स्पष्ट जानकारी देता है, जबकि मोडबस RS-485 टेलीमेट्री रीयल-टाइम डेटा केंद्रीय SCADA को भेजती है।"
    ],
    complianceStandards: ["IEC 60947-2 Annex M", "IEC 60755", "EN 61008 / 61009", "RDSO/SPN/256/2002", "CE Marking"],
    features: [
      {
        badgeEn: "TRUE RMS",
        badgeHi: "ट्रू RMS",
        titleEn: "Harmonic-Immune Current Sensing",
        titleHi: "हार्मोनिक-इम्यून करंट सेंसिंग",
        descEn: "Measures fundamental and distorted waveforms accurately, filtering out nuisance nuisance trips caused by high-frequency inverter noise.",
        descHi: "हार्मोनिक विकृति और इन्वर्टर नॉइज़ को फिल्टर करके केवल वास्तविक फॉल्ट करंट को सटीक रूप से मापता है।"
      },
      {
        badgeEn: "DISPLAY",
        badgeHi: "डिस्प्ले",
        titleEn: "High-Contrast Digital Metering",
        titleHi: "हाई-कंट्रास्ट डिजिटल मीटरिंग",
        descEn: "Displays live leakage in mA/A with dedicated fault memory logging timestamp, peak leakage, and trip history.",
        descHi: "रीयल-टाइम लीकेज करंट (mA/A), फॉल्ट मेमोरी, पीक लीकेज और ट्रिप इतिहास को स्पष्ट दिखाता है।"
      },
      {
        badgeEn: "CONFIGURABILITY",
        badgeHi: "कॉन्फ़िगरेशन",
        titleEn: "Independently Adjustable Current & Time",
        titleHi: "स्वतंत्र रूप से समायोज्य करंट एवं समय",
        descEn: "16-step rotary or digital push-button setup allowing precise discrimination with upstream and downstream circuit breakers.",
        descHi: "16-स्टेप रोटरी या डिजिटल बटन सेटअप जो मेन और सब-ब्रेकर्स के साथ सटीक समन्वय की अनुमति देता है।"
      },
      {
        badgeEn: "RELAYS",
        badgeHi: "रिले",
        titleEn: "Fail-Safe Dual Relay Outputs",
        titleHi: "फेल-सेफ डुअल रिले आउटपुट",
        descEn: "Separate potential-free contacts for pre-alarm warning (50% threshold) and main shunt trip breaker actuation.",
        descHi: "प्री-अलार्म चेतावनी (50% थ्रेसहोल्ड) और मुख्य शंट ट्रिप ब्रेकर संचालन के लिए अलग-अलग रिले कॉन्टैक्ट्स।"
      },
      {
        badgeEn: "CONNECTIVITY",
        badgeHi: "कनेक्टिविटी",
        titleEn: "Isolated RS-485 Modbus-RTU",
        titleHi: "आइसोलेटेड RS-485 मोडबस-RTU",
        descEn: "Enables continuous remote logging of insulation degradation trends in energy management systems.",
        descHi: "एनर्जी मैनेजमेंट और SCADA सिस्टम में इंसुलेशन क्षरण के रुझानों की रिमोट निगरानी की अनुमति देता है।"
      },
      {
        badgeEn: "HOUSING",
        badgeHi: "हाउसिंग",
        titleEn: "Standard 96x96 DIN Panel Mount Form",
        titleHi: "मानक 96x96 DIN पैनल माउंटिंग",
        descEn: "Compact flush-mount standard enclosure with IP54 front membrane fascia for industrial control panels.",
        descHi: "औद्योगिक पावर कंट्रोल पैनलों के लिए IP54 फ्रंट मेम्ब्रेन के साथ कॉम्पैक्ट फ्लश-माउंट फॉर्म फैक्टर।"
      }
    ],
    specs: [
      { labelEn: "Sensing Range", labelHi: "मापन रेंज", valueEn: "10 mA to 30 A True RMS", valueHi: "10 mA से 30 A ट्रू RMS" },
      { labelEn: "Trip Time Delay", labelHi: "ट्रिप टाइम डिले", valueEn: "Instantaneous (0.02s) to 10.0s adjustable", valueHi: "त्वरित (0.02s) से 10.0s समायोज्य" },
      { labelEn: "Auxiliary Supply", labelHi: "सहायक सप्लाई", valueEn: "85 - 265V AC / DC Universal", valueHi: "85 - 265V AC / DC यूनिवर्सल" },
      { labelEn: "Relay Rating", labelHi: "रिले रेटिंग", valueEn: "5A @ 250V AC / 30V DC Resistive", valueHi: "5A @ 250V AC / 30V DC" },
      { labelEn: "Measurement Accuracy", labelHi: "मापन सटीकता", valueEn: "±2% of full scale", valueHi: "फुल स्केल का ±2%" },
      { labelEn: "Dimensions", labelHi: "आकार", valueEn: "96 x 96 x 75 mm DIN Flush Cutout", valueHi: "96 x 96 x 75 mm DIN कटआउट" }
    ],
    applications: [
      {
        tagEn: "RAILWAY SIGNALLING",
        tagHi: "रेलवे सिग्नलिंग",
        titleEn: "Signalling Power Distribution Boards",
        titleHi: "सिग्नलिंग पावर डिस्ट्रीब्यूशन बोर्ड",
        descEn: "Monitoring IPS (Integrated Power Supply) feeds supplying critical track circuits and electronic interlockings.",
        descHi: "ट्रैक सर्किट और इलेक्ट्रॉनिक इंटरलॉकिंग को पावर देने वाली IPS आपूर्ति की निरंतर निगरानी।"
      },
      {
        tagEn: "MOTOR CONTROL",
        tagHi: "मोटर नियंत्रण",
        titleEn: "Heavy Motor Control Centres (MCC)",
        titleHi: "हैवी मोटर कंट्रोल सेंटर (MCC)",
        descEn: "Preventing costly stator ground faults in high-power industrial pumps, compressors, and conveyors.",
        descHi: "औद्योगिक पंपों, कम्प्रेसर और कन्वेयर में स्टेटर ग्राउंड फॉल्ट और आग के जोखिम की रोकथाम।"
      },
      {
        tagEn: "DATA CENTRES",
        tagHi: "डेटा सेंटर",
        titleEn: "Mission-Critical UPS Distribution",
        titleHi: "क्रिटिकल UPS पावर डिस्ट्रीब्यूशन",
        descEn: "Early insulation fault warning to avoid uncoordinated blackouts in high-availability compute facilities.",
        descHi: "डेटा सेंटरों में अप्रत्याशित बिजली कटौती से बचने के लिए प्रारंभिक इंसुलेशन फॉल्ट चेतावनी।"
      }
    ],
    relatedLinks: [
      { titleEn: "Continuous Insulation Monitoring", titleHi: "इंसुलेशन मॉनिटरिंग", href: "/products/earth-leakage/continuous-insulation", tagEn: "DIAGNOSTIC", tagHi: "डायग्नोस्टिक" },
      { titleEn: "True RMS Current Measurement", titleHi: "ट्रू RMS करंट मापन", href: "/products/earth-leakage/true-rms", tagEn: "ACCURACY", tagHi: "सटीकता" },
      { titleEn: "Real-Time Digital Display", titleHi: "डिजिटल डिस्प्ले", href: "/products/earth-leakage/realtime-display", tagEn: "UI / DISPLAY", tagHi: "डिस्प्ले" },
      { titleEn: "Adjustable Trip Thresholds", titleHi: "एडजस्टेबल ट्रिप थ्रेसहोल्ड", href: "/products/earth-leakage/adjustable-thresholds", tagEn: "CONTROL", tagHi: "कंट्रोल" }
    ]
  },

  "earth-leakage/continuous-insulation": {
    slug: "earth-leakage/continuous-insulation",
    categoryEn: "Digital Earth Leakage Detector",
    categoryHi: "डिजिटल अर्थ लीकेज डिटेक्टर",
    categoryHref: "/products/earth-leakage",
    titleEn: "Continuous Insulation Monitoring",
    titleHi: "निरंतर इंसुलेशन निगरानी (Insulation Monitoring)",
    subtitleEn: "Proactive online insulation resistance monitoring detecting minute cable degradation before catastrophic short circuits and equipment fires occur.",
    subtitleHi: "सक्रिय ऑनलाइन इंसुलेशन प्रतिरोध निगरानी जो केबल और उपकरणों के सूक्ष्म क्षरण का पता लगाकर आग और शॉर्ट सर्किट के जोखिम को समाप्त करती है।",
    bannerImage: "/images/eld_engineering_lab.jpg",
    heroBadgeEn: "PREDICTIVE MAINTENANCE • ELECTRICAL SAFETY",
    heroBadgeHi: "प्रेडिक्टिव मेंटेनेंस • विद्युत सुरक्षा",
    stats: [
      { value: "24/7", labelEn: "Online Non-Intrusive Monitoring", labelHi: "24/7 ऑनलाइन निगरानी" },
      { value: "0.1kΩ", labelEn: "Insulation Resolution", labelHi: "इंसुलेशन रेजोल्यूशन" },
      { value: "Dual", labelEn: "Pre-Alarm & Trip Thresholds", labelHi: "प्री-अलार्म एवं ट्रिप थ्रेसहोल्ड" },
      { value: "1000V", labelEn: "System Voltage Capability", labelHi: "1000V सिस्टम वोल्टेज क्षमता" }
    ],
    overviewTitleEn: "Catching Faults Long Before Breakers Trip",
    overviewTitleHi: "ब्रेकर ट्रिप होने से बहुत पहले ही फॉल्ट की सटीक पहचान",
    overviewTextEn: [
      "Traditional circuit breakers only trip after a solid, high-energy fault has already damaged equipment or caused sparking. Continuous insulation monitoring analyzes microscopic leakage current trends to identify damp cables, cracked wire insulation, and aging motor windings.",
      "The system computes online insulation impedance without requiring maintenance personnel to de-energize the circuit or carry out manual megger testing.",
      "With configurable 2-stage warning thresholds, maintenance teams receive early alerts at 50% insulation degradation, giving ample time for scheduled corrective action during routine shifts."
    ],
    overviewTextHi: [
      "पारंपरिक सर्किट ब्रेकर तभी ट्रिप होते हैं जब गंभीर फॉल्ट पहले ही उपकरण को नुकसान पहुंचा चुका होता है। निरंतर इंसुलेशन निगरानी नम केबलों, फटे इंसुलेशन और पुरानी वाइंडिंग की पहचान करने के लिए सूक्ष्म लीकेज करंट के रुझान का विश्लेषण करती है।",
      "सिस्टम बिजली बंद किए बिना या मैनुअल मेगर टेस्टिंग किए बिना ऑनलाइन इंसुलेशन प्रतिरोध की गणना करता है।",
      "2-स्टेज चेतावनी थ्रेसहोल्ड के साथ, मेंटेनेंस टीम को 50% इंसुलेशन खराब होने पर ही प्रारंभिक अलर्ट मिल जाता है, जिससे मरम्मत के लिए पर्याप्त समय मिलता है।"
    ],
    complianceStandards: ["IEC 61557-8", "IEC 60364-4-41", "IEEE Standard 142"],
    features: [
      {
        badgeEn: "PREDICTIVE",
        badgeHi: "प्रेडिक्टिव",
        titleEn: "Early Warning Pre-Alarm Relay",
        titleHi: "अर्ली वॉर्निंग प्री-अलार्म रिले",
        descEn: "Fires a distinct alert contact when leakage surpasses warning level without disconnecting critical loads.",
        descHi: "महत्वपूर्ण लोड को बंद किए बिना वॉर्निंग लेवल पार होने पर अलग से अलार्म सक्रिय करता है।"
      },
      {
        badgeEn: "SAFETY",
        badgeHi: "सुरक्षा",
        titleEn: "High-Voltage Galvanic Isolation",
        titleHi: "हाई-वोल्टेज गैल्वेनिक आइसोलेशन",
        descEn: "3.5kV optical and magnetic isolation protects sensitive control microchips from line surges.",
        descHi: "3.5kV आइसोलेशन जो संवेदनशील माइक्रोचिप्स को लाइन सर्ज से पूरी तरह सुरक्षित रखता है।"
      },
      {
        badgeEn: "LOGGING",
        badgeHi: "लॉगिंग",
        titleEn: "Non-Volatile Degradation History",
        titleHi: "नॉन-वोलेटाइल फॉल्ट हिस्ट्री मेमोरी",
        descEn: "Stores date-stamped leakage trends so maintenance teams can trace seasonal moisture effects.",
        descHi: "लीकेज के ऐतिहासिक डेटा को सुरक्षित रखता है जिससे मौसमी नमी के प्रभावों का विश्लेषण किया जा सके।"
      }
    ],
    specs: [
      { labelEn: "Insulation Range", labelHi: "इंसुलेशन रेंज", valueEn: "1 kΩ to 10 MΩ continuous measurement", valueHi: "1 kΩ से 10 MΩ निरंतर मापन" },
      { labelEn: "Pre-Alarm Setting", labelHi: "प्री-अलार्म सेटिंग", valueEn: "50% to 90% of trip threshold", valueHi: "ट्रिप थ्रेसहोल्ड का 50% से 90%" },
      { labelEn: "Isolation Rating", labelHi: "आइसोलेशन रेटिंग", valueEn: "3.5 kVrms for 1 minute", valueHi: "1 मिनट के लिए 3.5 kVrms" }
    ],
    relatedLinks: [
      { titleEn: "True RMS Current Measurement", titleHi: "ट्रू RMS मापन", href: "/products/earth-leakage/true-rms", tagEn: "ACCURACY", tagHi: "सटीकता" },
      { titleEn: "Adjustable Trip Thresholds", titleHi: "एडजस्टेबल थ्रेसहोल्ड", href: "/products/earth-leakage/adjustable-thresholds", tagEn: "TRIP", tagHi: "ट्रिप" }
    ]
  },

  "earth-leakage/true-rms": {
    slug: "earth-leakage/true-rms",
    categoryEn: "Digital Earth Leakage Detector",
    categoryHi: "डिजिटल अर्थ लीकेज डिटेक्टर",
    categoryHref: "/products/earth-leakage",
    titleEn: "True RMS Current Measurement",
    titleHi: "ट्रू RMS करंट मापन (True RMS)",
    subtitleEn: "Digital signal processing engine accurately measuring fundamental and harmonic residual currents to eliminate false nuisance tripping in noisy VFD and inverter environments.",
    subtitleHi: "डिजिटल सिग्नल प्रोसेसिंग इंजन जो हार्मोनिक लीकेज करंट को सटीक रूप से मापकर वीएफडी और इन्वर्टर वाले वातावरण में अनावश्यक फॉल्स ट्रिपिंग को समाप्त करता है।",
    bannerImage: "/images/earth_leakage_detector_hero.jpg",
    heroBadgeEn: "HARMONIC FILTERING • PRECISION DSP",
    heroBadgeHi: "हार्मोनिक फिल्टरिंग • प्रिसिजन DSP",
    stats: [
      { value: "True RMS", labelEn: "Active Harmonic Integration", labelHi: "सक्रिय हार्मोनिक इंटीग्रेशन" },
      { value: "Up to 31st", labelEn: "Harmonic Sampling Range", labelHi: "31वें हार्मोनिक तक सैंपलिंग" },
      { value: "< 1%", labelEn: "Measurement Linearity Error", labelHi: "मापन रैखिकता त्रुटि < 1%" },
      { value: "32-bit", labelEn: "DSP Architecture Engine", labelHi: "32-बिट DSP इंजन" }
    ],
    overviewTitleEn: "Eliminating Costly Nuisance Trips",
    overviewTitleHi: "अनावश्यक और महंगे फॉल्स ट्रिप्स का पूर्ण निवारण",
    overviewTextEn: [
      "Modern industrial networks and railway signaling systems contain numerous non-linear loads including Variable Frequency Drives (VFDs), LED drivers, and switching power supplies. Standard average-sensing leakage relays misread high-frequency switching spikes as real earth faults, triggering unwanted power outages.",
      "GLOBAL Digital ELD incorporates high-speed 32-bit digital signal processors (DSP) that continuously sample the incoming waveform at kilohertz rates, computing true mathematical RMS energy.",
      "Specialized programmable low-pass filter algorithms isolate dangerous 50Hz/60Hz fault currents from benign parasitic capacitive charging currents, delivering absolute operational dependability."
    ],
    overviewTextHi: [
      "आधुनिक औद्योगिक नेटवर्क और रेलवे सिग्नलिंग सिस्टम में वेरिएबल फ्रीक्वेंसी ड्राइव (VFD), एलईडी ड्राइवर और एसएमपीएस जैसे नॉन-लीनियर लोड होते हैं। पारंपरिक रिले हाई-फ्रीक्वेंसी स्पाइक्स को वास्तविक फॉल्ट मानकर गलत ट्रिप कर देते हैं।",
      "ग्लोबल डिजिटल ईएलडी हाई-स्पीड 32-बिट डीएसपी प्रोसेसर का उपयोग करता है जो वेवफॉर्म का निरंतर विश्लेषण करके वास्तविक गणितीय ट्रू RMS ऊर्जा की गणना करता है।",
      "प्रोग्रामेबल लो-पास फिल्टर खतरनाक 50Hz/60Hz फॉल्ट करंट को परजीवी कैपेसिटिव करंट से अलग करते हैं, जिससे गलत ट्रिपिंग पूरी तरह समाप्त हो जाती है।"
    ],
    complianceStandards: ["IEC 60947-2 Annex M", "IEC 61000-4-7", "IEEE 519 Harmonic Norms"],
    features: [
      {
        badgeEn: "DSP ENGINE",
        badgeHi: "DSP इंजन",
        titleEn: "16-Bit High Speed ADC Sampling",
        titleHi: "16-बिट हाई-स्पीड ADC सैंपलिंग",
        descEn: "Samples full waveform across positive and negative half-cycles with zero dead-band.",
        descHi: "शून्य डेड-बैंड के साथ सकारात्मक और नकारात्मक दोनों हाफ-साइकिल में वेवफॉर्म का सटीक विश्लेषण।"
      },
      {
        badgeEn: "FILTERING",
        badgeHi: "फिल्टरिंग",
        titleEn: "Selectable High-Frequency Filter",
        titleHi: "चयन करने योग्य हाई-फ्रीक्वेंसी फिल्टर",
        descEn: "Attenuates switching noise from motor PWM drives above 400 Hz according to IEC guidelines.",
        descHi: "आईईसी दिशानिर्देशों के अनुसार 400 हर्ट्ज से ऊपर के मोटर पीडब्लूएम स्विचिंग नॉइज़ को फिल्टर करता है।"
      },
      {
        badgeEn: "WIDE FREQ",
        badgeHi: "फ्रीक्वेंसी",
        titleEn: "Wide Frequency Bandwidth (40Hz - 1kHz)",
        titleHi: "विस्तृत फ्रीक्वेंसी बैंडविड्थ (40Hz - 1kHz)",
        descEn: "Accurate across railway 16.7Hz / 50Hz and aviation 400Hz distribution networks.",
        descHi: "रेलवे और औद्योगिक 50Hz/60Hz विद्युत वितरण नेटवर्क में समान रूप से सटीक।"
      }
    ],
    specs: [
      { labelEn: "Sampling Frequency", labelHi: "सैंपलिंग फ्रीक्वेंसी", valueEn: "3.2 kHz per channel", valueHi: "3.2 kHz प्रति चैनल" },
      { labelEn: "Harmonic Rejection", labelHi: "हार्मोनिक रिजेक्शन", valueEn: "> 40 dB @ 5th & 7th harmonics", valueHi: "> 40 dB @ 5th एवं 7th हार्मोनिक्स" },
      { labelEn: "Crest Factor", labelHi: "क्रेस्ट फैक्टर क्षमता", valueEn: "Supports Crest Factor up to 5.0", valueHi: "5.0 तक क्रेस्ट फैक्टर सपोर्ट" }
    ],
    relatedLinks: [
      { titleEn: "Real-Time Digital Display", titleHi: "डिजिटल डिस्प्ले", href: "/products/earth-leakage/realtime-display", tagEn: "METERING", tagHi: "मीटरिंग" },
      { titleEn: "Digital Earth Leakage Detector", titleHi: "अर्थ लीकेज डिटेक्टर", href: "/products/earth-leakage", tagEn: "PRODUCT", tagHi: "उत्पाद" }
    ]
  },

  "earth-leakage/realtime-display": {
    slug: "earth-leakage/realtime-display",
    categoryEn: "Digital Earth Leakage Detector",
    categoryHi: "डिजिटल अर्थ लीकेज डिटेक्टर",
    categoryHref: "/products/earth-leakage",
    titleEn: "Real-Time Digital Display & Telemetry",
    titleHi: "रीयल-टाइम डिजिटल डिस्प्ले एवं टेलीमेट्री",
    subtitleEn: "High-contrast daylight-visible digital metering panel providing live leakage values, trip bar-graphs, diagnostic codes, and fault memory review.",
    subtitleHi: "उच्च-कंट्रास्ट स्पष्ट डिजिटल मीटरिंग पैनल जो रीयल-टाइम लीकेज मान, ट्रिप बार-ग्राफ, डायग्नोस्टिक कोड और फॉल्ट मेमोरी की स्पष्ट जानकारी देता है।",
    bannerImage: "/images/power_distribution_eld.jpg",
    heroBadgeEn: "USER INTERFACE • LOCAL & SCADA VISIBILITY",
    heroBadgeHi: "यूजर इंटरफेस • लोकल एवं SCADA दृश्यता",
    stats: [
      { value: "OLED / 7-Seg", labelEn: "High-Contrast Display Facia", labelHi: "हाई-कंट्रास्ट डिस्प्ले" },
      { value: "10-Bar", labelEn: "Dynamic % Leakage Bar Graph", labelHi: "10-बार डायनेमिक ग्राफ" },
      { value: "5 Faults", labelEn: "Non-Volatile Trip Memory", labelHi: "5 फॉल्ट्स विस्तृत मेमोरी" },
      { value: "Modbus", labelEn: "RS-485 Serial Protocol", labelHi: "मोडबस RS-485 सीरियल" }
    ],
    overviewTitleEn: "Complete Field Visibility for Fast Maintenance Response",
    overviewTitleHi: "त्वरित मेंटेनेंस रिस्पॉन्स हेतु सम्पूर्ण फील्ड दृश्यता",
    overviewTextEn: [
      "When an electrical trip occurs, maintenance engineers need immediate information on what happened, which phase leaked, and what the peak current reached. The GLOBAL Real-Time Digital Display provides instant clarity right at the panel face.",
      "A dynamic 10-segment LED bar graph shows live leakage as a percentage of the programmed trip limit, allowing technicians to spot rising trends during routine panel walkthroughs before any trip happens.",
      "The intuitive 3-button keypad allows quick retrieval of the last 5 trip events, displaying the exact timestamp, trip leakage magnitude, and duration of fault current."
    ],
    overviewTextHi: [
      "विद्युत ट्रिप होने पर मेंटेनेंस इंजीनियरों को तुरंत यह जानने की आवश्यकता होती है कि क्या हुआ, किस फेज में लीकेज हुआ और फॉल्ट करंट कितना था। ग्लोबल डिजिटल डिस्प्ले पैनल के सामने ही पूरी स्पष्टता प्रदान करता है।",
      "डायनामिक 10-सेगमेंट बार ग्राफ सेट ट्रिप सीमा के प्रतिशत के रूप में लाइव लीकेज दिखाता है, जिससे तकनीशियन नियमित राउंड के दौरान ही बढ़ते लीकेज को पहचान लेते हैं।",
      "सहज 3-बटन कीपैड पिछले 5 ट्रिप इवेंट्स को तुरंत देखने की अनुमति देता है, जिसमें सटीक समय, फॉल्ट करंट और अवधि दर्ज होती है।"
    ],
    complianceStandards: ["IEC 60051 (Display Accuracy)", "IEC 61010-1", "RoHS Compliant"],
    features: [
      {
        badgeEn: "BAR-GRAPH",
        badgeHi: "बार-ग्राफ",
        titleEn: "Dynamic % Load Bar Graph",
        titleHi: "डायनामिक % लोड बार ग्राफ",
        descEn: "10-segment LED bar visualizes rising leakage at a glance from across the electrical room.",
        descHi: "इलेक्ट्रिकल रूम में दूर से ही लीकेज की स्थिति को स्पष्ट रूप से देखने की सुविधा।"
      },
      {
        badgeEn: "MEMORY",
        badgeHi: "मेमोरी",
        titleEn: "Last 5 Faults Non-Volatile Log",
        titleHi: "अंतिम 5 फॉल्ट्स का विस्तृत रिकॉर्ड",
        descEn: "Retains fault magnitude and trip duration even if auxiliary supply is completely disconnected.",
        descHi: "सहायक पावर कट होने पर भी फॉल्ट करंट और समय का विवरण हमेशा सुरक्षित रहता है।"
      },
      {
        badgeEn: "TEST / RESET",
        badgeHi: "टेस्ट / रीसेट",
        titleEn: "Front Membrane Test & Reset Keys",
        titleHi: "फ्रंट मेम्ब्रेन टेस्ट एवं रीसेट बटन",
        descEn: "Facilitates quick monthly relay operational checks without opening panel doors.",
        descHi: "पैनल का दरवाजा खोले बिना मासिक रिले परीक्षण और तुरंत रीसेट की आसान सुविधा।"
      }
    ],
    specs: [
      { labelEn: "Display Type", labelHi: "डिस्प्ले प्रकार", valueEn: "High-brightness 4-digit 7-segment + 10-LED bar", valueHi: "हाई-ब्राइटनेस 4-डिजिट + 10-एलईडी बार" },
      { labelEn: "Refresh Rate", labelHi: "रिफ्रेश रेट", valueEn: "3 updates per second", valueHi: "3 अपडेट प्रति सेकंड" },
      { labelEn: "Front Protection", labelHi: "फ्रंट प्रोटेक्शन", valueEn: "IP54 water/dust resistant membrane", valueHi: "IP54 वाटर/डस्ट प्रतिरोधी मेम्ब्रेन" }
    ],
    relatedLinks: [
      { titleEn: "Adjustable Trip Thresholds", titleHi: "एडजस्टेबल थ्रेसहोल्ड", href: "/products/earth-leakage/adjustable-thresholds", tagEn: "SETTINGS", tagHi: "सेटिंग्स" },
      { titleEn: "Continuous Insulation Monitoring", titleHi: "इंसुलेशन मॉनिटरिंग", href: "/products/earth-leakage/continuous-insulation", tagEn: "DIAGNOSTICS", tagHi: "डायग्नोस्टिक्स" }
    ]
  },

  "earth-leakage/adjustable-thresholds": {
    slug: "earth-leakage/adjustable-thresholds",
    categoryEn: "Digital Earth Leakage Detector",
    categoryHi: "डिजिटल अर्थ लीकेज डिटेक्टर",
    categoryHref: "/products/earth-leakage",
    titleEn: "Adjustable Trip Thresholds & Discrimination",
    titleHi: "एडजस्टेबल ट्रिप थ्रेसहोल्ड एवं डिस्क्रिमिनेशन",
    subtitleEn: "Multi-range current trip threshold adjustments and programmable time delay curves enabling precise selectivity and coordination across distribution cascades.",
    subtitleHi: "मल्टी-रेंज करंट ट्रिप थ्रेसहोल्ड और प्रोग्रामेबल टाइम डिले कर्व्स जो सम्पूर्ण वितरण नेटवर्क में सटीक सुरक्षा समन्वय प्रदान करते हैं।",
    bannerImage: "/images/earth_leakage_detector_hero.jpg",
    heroBadgeEn: "COORDINATION & DISCRIMINATION • SYSTEM SELECTIVITY",
    heroBadgeHi: "सुरक्षा समन्वय • सिस्टम सेलेक्टिविटी",
    stats: [
      { value: "16-Step", labelEn: "Rotary Current Settings", labelHi: "16-स्टेप करंट सेटिंग्स" },
      { value: "0 - 10s", labelEn: "Programmable Time Delay", labelHi: "समायोज्य टाइम डिले" },
      { value: "Class A/B", labelEn: "Residual Current Characteristic", labelHi: "क्लास A/B आरसीडी प्रकार" },
      { value: "100%", labelEn: "Selectivity Coordination", labelHi: "100% सेलेक्टिविटी समन्वय" }
    ],
    overviewTitleEn: "Tailored Protection Cascades for Power Distribution",
    overviewTitleHi: "विद्युत वितरण के लिए अनुकूलित सुरक्षा समन्वय",
    overviewTextEn: [
      "In complex industrial and railway power distributions, an earth fault on a sub-feeder must never trip the main incomer breaker. The GLOBAL Digital Earth Leakage Detector features wide-range independent current sensitivity ($I_{\\Delta n}$) and time delay ($\Delta t$) adjustments.",
      "By staging upstream incomers with time delays (e.g., 500ms at 1A) and branch feeders with instantaneous trip settings (30mA at 0ms), complete discrimination is achieved — keeping healthy circuits alive while isolating only the faulted line.",
      "Tamper-proof transparent covers and digital password protection prevent unauthorized modifications to safety settings by field operators."
    ],
    overviewTextHi: [
      "जटिल औद्योगिक और रेलवे विद्युत वितरण में, किसी सब-फीडर पर फॉल्ट होने पर मेन इनकमर ब्रेकर कभी ट्रिप नहीं होना चाहिए। ग्लोबल डिजिटल ईएलडी में स्वतंत्र करंट सेंसिटिविटी और टाइम डिले सेटिंग्स हैं।",
      "मेन इनकमर पर टाइम डिले (जैसे 500ms @ 1A) और सब-फीडर पर त्वरित सेटिंग (30mA @ 0ms) सेट करके पूर्ण समन्वय प्राप्त होता है — जिससे स्वस्थ सर्किट बिना रुकावट चालू रहते हैं।",
      "टैम्पर-प्रूफ कवर और डिजिटल पासवर्ड सुरक्षा सेटिंग्स में अनधिकृत बदलाव को रोकते हैं।"
    ],
    complianceStandards: ["IEC 60947-2 Annex M", "IEC 60364-5-53", "IS 3043 (Earthing Guide)"],
    features: [
      {
        badgeEn: "WIDE RANGE",
        badgeHi: "विस्तृत रेंज",
        titleEn: "10mA to 30A Current Range",
        titleHi: "10mA से 30A विस्तृत करंट रेंज",
        descEn: "Supports sensitive human protection (30mA) up to heavy industrial transformer protection (30A).",
        descHi: "मानव सुरक्षा (30mA) से लेकर भारी ट्रांसफार्मर सुरक्षा (30A) तक सभी अनुप्रयोगों के लिए उपयुक्त।"
      },
      {
        badgeEn: "TIME DELAY",
        badgeHi: "टाइम डिले",
        titleEn: "Definite-Time Programmable Delay",
        titleHi: "डेफिनिट-टाइम प्रोग्रामेबल डिले",
        descEn: "Steps from 0.02s to 10.0s allow perfect grading with upstream air circuit breakers (ACBs) and MCCBs.",
        descHi: "0.02s से 10.0s तक के स्टेप्स जो एसीबी और एमसीसीबी ब्रेकर्स के साथ सटीक समन्वय सुनिश्चित करते हैं।"
      },
      {
        badgeEn: "SECURITY",
        badgeHi: "सुरक्षा",
        titleEn: "Tamper-Proof Lockable Cover",
        titleHi: "टैम्पर-प्रूफ लॉक करने योग्य कवर",
        descEn: "Physical wire-sealable clear cover prevents unauthorized field alterations of safety limits.",
        descHi: "पारदर्शी लॉक करने योग्य कवर जो फील्ड में सुरक्षा सीमाओं के अनधिकृत बदलाव को रोकता है।"
      }
    ],
    specs: [
      { labelEn: "Current Steps ($I_{\\Delta n}$)", labelHi: "करंट स्टेप्स", valueEn: "30mA, 50mA, 100mA, 300mA, 500mA, 1A, 3A, 5A, 10A, 30A", valueHi: "30mA, 50mA, 100mA, 300mA, 500mA, 1A, 3A, 5A, 10A, 30A" },
      { labelEn: "Time Delay ($\Delta t$)", labelHi: "टाइम डिले", valueEn: "Instantaneous, 60ms, 100ms, 200ms, 500ms, 1.0s, 2.0s, 5.0s, 10.0s", valueHi: "Instantaneous, 60ms, 100ms, 200ms, 500ms, 1.0s, 2.0s, 5.0s, 10.0s" },
      { labelEn: "Reset Mode", labelHi: "रीसेट मोड", valueEn: "Auto / Manual / Remote Electrical Reset", valueHi: "ऑटो / मैनुअल / रिमोट इलेक्ट्रिकल रीसेट" }
    ],
    relatedLinks: [
      { titleEn: "Digital Earth Leakage Detector", titleHi: "अर्थ लीकेज डिटेक्टर", href: "/products/earth-leakage", tagEn: "SYSTEM", tagHi: "सिस्टम" },
      { titleEn: "Continuous Insulation Monitoring", titleHi: "इंसुलेशन मॉनिटरिंग", href: "/products/earth-leakage/continuous-insulation", tagEn: "DIAGNOSTICS", tagHi: "डायग्नोस्टिक्स" }
    ]
  },

  // =========================================================================
  // 3. CAPABILITY (ENGINEERING & SAFETY) FAMILY
  // =========================================================================
  capability: {
    slug: "capability",
    categoryEn: "Capability",
    categoryHi: "क्षमताएं",
    categoryHref: "/capability",
    titleEn: "Engineering & Safety Capabilities",
    titleHi: "इंजीनियरिंग एवं सुरक्षा क्षमताएं",
    subtitleEn: "A disciplined, engineer-first approach to infrastructure hardware, incorporating fail-safe control logic, extreme environmental stress validation, and deep diagnostic integration.",
    subtitleHi: "इन्फ्रास्ट्रक्चर हार्डवेयर के प्रति एक अनुशासित इंजीनियरिंग दृष्टिकोण, जिसमें फेल-सेफ कंट्रोल लॉजिक, कठोर पर्यावरणीय तनाव परीक्षण और गहन डायग्नोस्टिक एकीकरण शामिल है।",
    bannerImage: "/images/eld_engineering_lab.jpg",
    heroBadgeEn: "ENGINEERING EXCELLENCE • INFRASTRUCTURE MINDSET",
    heroBadgeHi: "इंजीनियरिंग उत्कृष्टता • बुनियादी ढांचा मानसिकता",
    stats: [
      { value: "100%", labelEn: "Factory Bench Testing", labelHi: "100% फैक्ट्री बेंच टेस्टिंग" },
      { value: "SIL-2/4", labelEn: "Safety Standard Readiness", labelHi: "SIL-2/4 सुरक्षा मानक" },
      { value: "ISO 9001", labelEn: "Certified Quality System", labelHi: "ISO 9001 प्रमाणित गुणवत्ता" },
      { value: "24/7", labelEn: "Engineering Field Support", labelHi: "24/7 तकनीकी फील्ड सहयोग" }
    ],
    overviewTitleEn: "Built Beyond the Laboratory Benchmark",
    overviewTitleHi: "प्रयोगशाला मानकों से कहीं आगे फील्ड के लिए निर्मित",
    overviewTextEn: [
      "Critical infrastructure equipment must perform flawlessly outside controlled environments. At GLOBAL, we design, prototype, and manufacture safety mechanisms engineered to conquer severe thermal swings, high vibration, electromagnetic noise, and corrosive atmospheric pollutants.",
      "Our multi-disciplinary engineering teams combine precision electromechanical design with high-speed digital DSP electronics, ensuring every railway barrier and earth leakage detector functions with absolute predictability.",
      "Through contract manufacturing, OEM customizations, and on-site engineering consultations, we collaborate closely with major system integrators and railway authorities worldwide."
    ],
    overviewTextHi: [
      "क्रिटिकल इंफ्रास्ट्रक्चर उपकरणों को नियंत्रित प्रयोगशाला स्थितियों से बाहर भी त्रुटिहीन रूप से काम करना चाहिए। ग्लोबल में, हम तापमान के बड़े उतार-चढ़ाव, कंपन, इलेक्ट्रोमैग्नेटिक नॉइज़ और जंग का सामना करने के लिए सुरक्षा प्रणालियों का निर्माण करते हैं।",
      "हमारी बहु-विषयक इंजीनियरिंग टीम सटीक इलेक्ट्रोमैकेनिकल डिज़ाइन और हाई-स्पीड डिजिटल इलेक्ट्रॉनिक्स को जोड़ती है, जिससे प्रत्येक उत्पाद पूर्ण विश्वसनीयता प्रदान करता है।",
      "अनुबंध निर्माण (Contract Manufacturing), ओईएम अनुकूलन और ऑन-साइट इंजीनियरिंग सहायता के माध्यम से हम दुनिया भर के प्रमुख सिस्टम इंटीग्रेटर्स के साथ मिलकर काम करते हैं।"
    ],
    complianceStandards: ["ISO 9001:2015", "EN 50126 (RAMS)", "IEC 61508", "IEC 60068 (Environmental)"],
    features: [
      {
        badgeEn: "ARCHITECTURE",
        badgeHi: "आर्किटेक्चर",
        titleEn: "Fail-Safe Default Architecture",
        titleHi: "फेल-सेफ डिफ़ॉल्ट आर्किटेक्चर",
        descEn: "Systems default to the safest possible state during power loss, sensor failure, or abnormal operational events.",
        descHi: "पावर कट या किसी भी असामान्यता की स्थिति में सिस्टम स्वचालित रूप से सबसे सुरक्षित अवस्था में आ जाता है।"
      },
      {
        badgeEn: "DURABILITY",
        badgeHi: "मजबूती",
        titleEn: "Rugged Industrial Construction",
        titleHi: "मजबूत औद्योगिक निर्माण",
        descEn: "Heavy-gauge steel enclosures, marine-grade anti-corrosive finishes, and sealed sub-assemblies for hostile outdoor sites.",
        descHi: "कठिन बाहरी वातावरण के लिए भारी स्टील एनक्लोजर, मरीन-ग्रेड एंटी-रस्ट कोटिंग और वेदरप्रूफ असेंबली।"
      },
      {
        badgeEn: "INTEGRATION",
        badgeHi: "एकीकरण",
        titleEn: "Diagnostics & System Integration",
        titleHi: "डायग्नोस्टिक्स एवं सिस्टम एकीकरण",
        descEn: "Native RS-485 Modbus, opto-isolated relay outputs, and intuitive digital interfaces for seamless connection with central SCADA consoles.",
        descHi: "सेंट्रल SCADA और रिले सिस्टम के साथ निर्बाध जुड़ाव के लिए मोडबस RS-485 और आइसोलेटेड आउटपुट।"
      }
    ],
    relatedLinks: [
      { titleEn: "Fail-Safe Architecture", titleHi: "फेल-सेफ आर्किटेक्चर", href: "/capability/fail-safe", tagEn: "PILLAR 01", tagHi: "स्तंभ 01" },
      { titleEn: "Rugged Industrial Construction", titleHi: "मजबूत औद्योगिक निर्माण", href: "/capability/rugged-build", tagEn: "PILLAR 02", tagHi: "स्तंभ 02" },
      { titleEn: "Diagnostics & Integration", titleHi: "डायग्नोस्टिक्स एवं एकीकरण", href: "/capability/diagnostics", tagEn: "PILLAR 03", tagHi: "स्तंभ 03" }
    ]
  },

  "capability/fail-safe": {
    slug: "capability/fail-safe",
    categoryEn: "Capability",
    categoryHi: "क्षमताएं",
    categoryHref: "/capability",
    titleEn: "Fail-Safe Architecture",
    titleHi: "फेल-सेफ आर्किटेक्चर (Fail-Safe Architecture)",
    subtitleEn: "Engineering methodology ensuring that any unexpected component degradation, wire break, or power outage causes the system to revert immediately to its pre-defined safe state.",
    subtitleHi: "इंजीनियरिंग पद्धति जो सुनिश्चित करती है कि किसी भी घटक विफलता, तार टूटने या बिजली कटौती पर सिस्टम तुरंत अपनी पूर्व-निर्धारित सुरक्षित अवस्था में आ जाए।",
    bannerImage: "/images/boom_barrier_hero.jpg",
    heroBadgeEn: "SAFETY ENGINEERING • ZERO ACCIDENT PHILOSOPHY",
    heroBadgeHi: "सुरक्षा इंजीनियरिंग • शून्य दुर्घटना सिद्धांत",
    stats: [
      { value: "100%", labelEn: "Predictable Fail Safe State", labelHi: "100% पूर्वानुमेय सुरक्षित अवस्था" },
      { value: "Dual", labelEn: "Redundant Sensor Verification", labelHi: "ड्यूल रिडंडेंट सेंसर सत्यापन" },
      { value: "SIL-2", labelEn: "Functional Safety Rating", labelHi: "कार्यात्मक सुरक्षा SIL-2" },
      { value: "< 10ms", labelEn: "Fault Detection Time", labelHi: "फॉल्ट पहचान समय < 10ms" }
    ],
    overviewTitleEn: "Predictability in Abnormal Conditions",
    overviewTitleHi: "असामान्य परिस्थितियों में पूर्वानुमेय सुरक्षा",
    overviewTextEn: [
      "In mission-critical infrastructure, a partial or unpredictable system response during an emergency is unacceptable. GLOBAL designs all control loops and mechanical drives around proven fail-safe principles.",
      "Whether through gravity-assisted mechanical descent in railway barriers or de-energize-to-trip safety relay outputs in earth leakage detectors, our architectures guarantee that power cuts or broken wires default to safety.",
      "Redundant dual-channel microcontrollers continuously cross-verify sensor readings, executing self-health checks every few milliseconds."
    ],
    overviewTextHi: [
      "महत्वपूर्ण बुनियादी ढांचे में आपातकाल के दौरान किसी भी प्रणाली की अप्रत्याशित प्रतिक्रिया अस्वीकार्य है। ग्लोबल सभी कंट्रोल लूप और ड्राइव को प्रमाणित फेल-सेफ सिद्धांतों पर डिजाइन करता है।",
      "चाहे वह रेलवे बैरियर में ग्रेविटी ड्रॉप हो या अर्थ लीकेज डिटेक्टर में डी-एनर्जाइज-टू-ट्रिप रिले आउटपुट, हमारे सिस्टम हमेशा सुरक्षित स्थिति में आते हैं।",
      "रिडंडेंट डुअल-चैनल माइक्रोकंट्रोलर सेंसर रीडिंग का निरंतर सत्यापन करते हैं और हर कुछ मिलीसेकंड में सेल्फ-हेल्थ चेक करते हैं।"
    ],
    complianceStandards: ["IEC 61508", "EN 50129", "ISO 13849-1", "IEEE 1012"],
    features: [
      {
        badgeEn: "REDUNDANCY",
        badgeHi: "रिडंडेंसी",
        titleEn: "Dual-Channel Hardware Supervision",
        titleHi: "ड्यूल-चैनल हार्डवेयर सुपरविजन",
        descEn: "Independent watchdogs reset controller into safe mode if processor heartbeat slows or freezes.",
        descHi: "स्वतंत्र वॉचडॉग जो प्रोसेसर में रुकावट आने पर कंट्रोलर को तुरंत सुरक्षित मोड में लाते हैं।"
      },
      {
        badgeEn: "PASSIVE",
        badgeHi: "निष्क्रिय",
        titleEn: "Passive Gravitational Descent",
        titleHi: "निष्क्रिय गुरुत्वाकर्षण ड्रॉप",
        descEn: "Relies on universal physics (gravity counterweight) rather than stored electrical energy to close barriers.",
        descHi: "बैरियर को सुरक्षित बंद करने के लिए बिजली के बजाय प्राकृतिक गुरुत्वाकर्षण बल का उपयोग करता है।"
      },
      {
        badgeEn: "ISOLATION",
        badgeHi: "आइसोलेशन",
        titleEn: "Galvanic Signal Isolation",
        titleHi: "गैल्वेनिक सिग्नल आइसोलेशन",
        descEn: "High-voltage surge barriers isolate control electronics from high-energy field lightning strikes.",
        descHi: "हाई-वोल्टेज सर्ज बैरियर जो इलेक्ट्रॉनिक्स को फील्ड में गिरने वाली आकाशीय बिजली से बचाते हैं।"
      }
    ],
    relatedLinks: [
      { titleEn: "Rugged Industrial Construction", titleHi: "मजबूत निर्माण", href: "/capability/rugged-build", tagEn: "BUILD", tagHi: "निर्माण" },
      { titleEn: "Diagnostics & System Integration", titleHi: "डायग्नोस्टिक्स", href: "/capability/diagnostics", tagEn: "DIAGNOSTIC", tagHi: "डायग्नोस्टिक" }
    ]
  },

  "capability/rugged-build": {
    slug: "capability/rugged-build",
    categoryEn: "Capability",
    categoryHi: "क्षमताएं",
    categoryHref: "/capability",
    titleEn: "Rugged Industrial Construction",
    titleHi: "मजबूत औद्योगिक निर्माण (Rugged Construction)",
    subtitleEn: "Heavy-gauge structural enclosures, thermal stress validation, and vibration-proof sub-assemblies built to survive demanding industrial and railway environments.",
    subtitleHi: "भारी स्ट्रक्चरल स्टील एनक्लोजर, थर्मल तनाव परीक्षण और कंपन-रोधी असेंबली जो कठिन औद्योगिक और रेलवे वातावरण में लंबे समय तक टिकते हैं।",
    bannerImage: "/images/crash_barrier_perimeter.jpg",
    heroBadgeEn: "STRUCTURAL INTEGRITY • FIELD DURABILITY",
    heroBadgeHi: "स्ट्रक्चरल मजबूती • फील्ड टिकाऊपन",
    stats: [
      { value: "IK10", labelEn: "Impact Resistance", labelHi: "इम्पैक्ट रेजिस्टेंस IK10" },
      { value: "-25°C to 70°C", labelEn: "Thermal Operating Range", labelHi: "थर्मल ऑपरेटिंग रेंज" },
      { value: "1000h", labelEn: "ASTM B117 Salt Fog Tested", labelHi: "सॉल्ट फॉग टेस्टेड" },
      { value: "100%", labelEn: "Welded CNC Steel Chassis", labelHi: "वेल्डेड CNC स्टील चेसिस" }
    ],
    overviewTitleEn: "Engineered to Endure Severe Environmental Abuse",
    overviewTitleHi: "अत्यधिक कठिन पर्यावरणीय परिस्थितियों का सामना करने के लिए निर्मित",
    overviewTextEn: [
      "Field equipment is routinely subjected to extreme environmental stresses: scorching summer heat, freezing winters, driving torrential rain, heavy industrial vibration, and corrosive airborne chemicals. At GLOBAL, we build our hardware for decades of continuous operation.",
      "Our enclosures use laser-cut, robotically welded cold-rolled steel treated with multi-stage zinc phosphate pre-treatment and UV-resistant outdoor architectural powder coats.",
      "Internal electronic modules are conformally coated against moisture, dust accumulation, and electrolytic corrosion, ensuring maximum mean time between failures (MTBF)."
    ],
    overviewTextHi: [
      "फील्ड उपकरण भीषण गर्मी, कड़ाके की ठंड, भारी बारिश, कंपन और रासायनिक गैसों के निरंतर संपर्क में रहते हैं। ग्लोबल में, हम अपने हार्डवेयर को दशकों की सेवा के लिए मजबूत बनाते हैं।",
      "हमारे एनक्लोजर लेजर-कट और रोबोटिक वेल्डेड स्टील से बने हैं जिन पर जिंक फॉस्फेट प्राइमर और यूवी-प्रतिरोधी पाउडर कोटिंग की जाती है।",
      "आंतरिक इलेक्ट्रॉनिक सर्किट पर नमी और धूल से सुरक्षा के लिए स्पेशल कन्फॉर्मल कोटिंग की जाती है, जिससे उत्पाद का जीवनकाल काफी बढ़ जाता है।"
    ],
    complianceStandards: ["IEC 60068-2 (Shock & Vibration)", "IEC 60529 (IP Rating)", "ASTM B117", "ISO 12944"],
    features: [
      {
        badgeEn: "CORROSION",
        badgeHi: "जंग-रोधी",
        titleEn: "Multi-Layer Surface Protection",
        titleHi: "मल्टी-लेयर सतह संरक्षण",
        descEn: "Immersion pre-treatment followed by high-bake thermoset polyester powder coating.",
        descHi: "इमर्शन प्री-ट्रीटमेंट और हाई-बेक थर्मोसेट पॉलिएस्टर पाउडर कोटिंग।"
      },
      {
        badgeEn: "VIBRATION",
        badgeHi: "कंपन-रोधी",
        titleEn: "Shock & Vibration Isolated Mounting",
        titleHi: "शॉक एवं कंपन आइसोलेटेड माउंटिंग",
        descEn: "Rubber dampening bushings isolate internal micro-electronics from track vibration.",
        descHi: "रबर डैम्पिंग बुशिंग्स जो ट्रैक के भारी कंपन से इलेक्ट्रॉनिक्स को सुरक्षित रखती हैं।"
      },
      {
        badgeEn: "ELECTRONICS",
        badgeHi: "इलेक्ट्रॉनिक्स",
        titleEn: "Mil-Spec Conformal Coating",
        titleHi: "मिल-स्पेक कन्फॉर्मल कोटिंग",
        descEn: "Silicone-based moisture barrier prevents conductive tracking across PCB traces.",
        descHi: "सिलिकॉन आधारित नमी अवरोधक जो पीसीबी पर नमी जमने से रोकता है।"
      }
    ],
    relatedLinks: [
      { titleEn: "Fail-Safe Architecture", titleHi: "फेल-सेफ आर्किटेक्चर", href: "/capability/fail-safe", tagEn: "SAFETY", tagHi: "सुरक्षा" },
      { titleEn: "Diagnostics & System Integration", titleHi: "डायग्नोस्टिक्स", href: "/capability/diagnostics", tagEn: "INTEGRATION", tagHi: "एकीकरण" }
    ]
  },

  "capability/diagnostics": {
    slug: "capability/diagnostics",
    categoryEn: "Capability",
    categoryHi: "क्षमताएं",
    categoryHref: "/capability",
    titleEn: "Diagnostics & System Integration",
    titleHi: "डायग्नोस्टिक्स एवं सिस्टम एकीकरण",
    subtitleEn: "Standardized industrial communication protocols, clear local status indicators, and remote telemetry enabling seamless integration into railway and SCADA networks.",
    subtitleHi: "मानकीकृत औद्योगिक संचार प्रोटोकॉल, स्पष्ट स्थानीय स्थिति संकेतक और रिमोट टेलीमेट्री जो रेलवे और SCADA नेटवर्क के साथ आसान एकीकरण सक्षम बनाते हैं।",
    bannerImage: "/images/power_distribution_eld.jpg",
    heroBadgeEn: "CONNECTIVITY • SCADA & TELEMETRY",
    heroBadgeHi: "कनेक्टिविटी • SCADA एवं टेलीमेट्री",
    stats: [
      { value: "Modbus", labelEn: "Standard RS-485 RTU", labelHi: "मानक RS-485 RTU" },
      { value: "Dual", labelEn: "Isolated Relay Contacts", labelHi: "ड्यूल आइसोलेटेड रिले" },
      { value: "100%", labelEn: "SCADA & PLC Compatible", labelHi: "SCADA एवं PLC अनुकूल" },
      { value: "< 50ms", labelEn: "Telemetry Poll Rate", labelHi: "टेलीमेट्री पोल रेट" }
    ],
    overviewTitleEn: "Open Protocols for Connected Infrastructure",
    overviewTitleHi: "कनेक्टेड इंफ्रास्ट्रक्चर के लिए ओपन प्रोटोकॉल एकीकरण",
    overviewTextEn: [
      "Modern railway networks and industrial plants cannot afford isolated 'black box' hardware. Operators require real-time visibility into equipment health, cycle counts, electrical parameters, and fault alerts.",
      "GLOBAL products come natively equipped with isolated RS-485 serial ports supporting the industry-standard Modbus-RTU protocol. Every register is clearly documented for straightforward integration into PLC, DCS, or centralized railway SCADA software.",
      "Potential-free auxiliary relay outputs provide fail-safe hardwired interlocks for critical signaling circuits and emergency tripping mechanisms."
    ],
    overviewTextHi: [
      "आधुनिक रेलवे नेटवर्क और औद्योगिक संयंत्रों में अलग-थलग काम करने वाले उपकरणों की जगह एकीकृत समाधानों की आवश्यकता है। ऑपरेटरों को उपकरण की स्थिति, साइकिल काउंट और फॉल्ट अलर्ट की रीयल-टाइम जानकारी चाहिए।",
      "ग्लोबल उत्पाद मानकीकृत मोडबस-RTU प्रोटोकॉल का समर्थन करने वाले आइसोलेटेड RS-485 सीरियल पोर्ट से लैस हैं। प्रत्येक रजिस्टर को पीएलसी, डीसीएस या रेलवे SCADA सॉफ्टवेयर में आसान एकीकरण के लिए स्पष्ट रूप से प्रलेखित किया गया है।",
      "पोटेंशियल-फ्री रिले आउटपुट महत्वपूर्ण सिग्नलिंग सर्किट और इमरजेंसी ट्रिपिंग सिस्टम के लिए मजबूत हार्डवायर्ड इंटरलॉक प्रदान करते हैं।"
    ],
    complianceStandards: ["Modbus Organization Certified", "IEC 61158", "EIA-485", "IEEE 802.3 Ethernet Ready"],
    features: [
      {
        badgeEn: "MODBUS",
        badgeHi: "मोडबस",
        titleEn: "Standard Modbus-RTU Protocol",
        titleHi: "मानक मोडबस-RTU प्रोटोकॉल",
        descEn: "Exposes all live voltages, leakage values, boom states, and diagnostic error codes.",
        descHi: "सभी लाइव वोल्टेज, लीकेज करंट, बूम की स्थिति और एरर कोड को तुरंत उपलब्ध कराता है।"
      },
      {
        badgeEn: "RELAYS",
        badgeHi: "रिले",
        titleEn: "Potential-Free Alarm Contacts",
        titleHi: "पोटेंशियल-फ्री अलार्म कॉन्टैक्ट्स",
        descEn: "Dry contacts rated 5A 250VAC for direct integration with control room annunciator panels.",
        descHi: "कंट्रोल रूम पैनल और हूटर्स से सीधे जुड़ने के लिए 5A 250VAC रेटेड ड्राई कॉन्टैक्ट्स।"
      },
      {
        badgeEn: "STATUS",
        badgeHi: "स्टेटस",
        titleEn: "Intuitive Multi-Color LED Diagnostics",
        titleHi: "मल्टी-कलर एलईडी डायग्नोस्टिक्स",
        descEn: "Clear tri-color status LEDs allow maintenance engineers to diagnose system state in seconds.",
        descHi: "स्पष्ट ट्राई-कलर एलईडी जिसके जरिए फील्ड इंजीनियर कुछ ही सेकंड में सिस्टम की स्थिति समझ लेते हैं।"
      }
    ],
    relatedLinks: [
      { titleEn: "Engineering Capabilities", titleHi: "इंजीनियरिंग क्षमताएं", href: "/capability", tagEn: "OVERVIEW", tagHi: "अवलोकन" },
      { titleEn: "Fail-Safe Architecture", titleHi: "फेल-सेफ आर्किटेक्चर", href: "/capability/fail-safe", tagEn: "SAFETY", tagHi: "सुरक्षा" }
    ]
  },

  // =========================================================================
  // 4. APPLICATIONS & SECTORS FAMILY
  // =========================================================================
  sectors: {
    slug: "sectors",
    categoryEn: "Applications & Sectors",
    categoryHi: "अनुप्रयोग एवं क्षेत्र",
    categoryHref: "/sectors",
    titleEn: "Applications & Industry Sectors",
    titleHi: "अनुप्रयोग एवं उद्योग क्षेत्र",
    subtitleEn: "Proven safety installations across heavy railway divisions, power distribution utilities, process manufacturing plants, and high-security infrastructure.",
    subtitleHi: "भारी रेलवे डिवीजनों, विद्युत वितरण कंपनियों, विनिर्माण संयंत्रों और उच्च-सुरक्षा बुनियादी ढांचों में सिद्ध सुरक्षा समाधान।",
    bannerImage: "/images/boom_barrier_railway.jpg",
    heroBadgeEn: "FIELD DEPLOYMENTS • MISSION CRITICAL SECTORS",
    heroBadgeHi: "फील्ड अनुप्रयोग • महत्वपूर्ण उद्योग क्षेत्र",
    stats: [
      { value: "3+", labelEn: "Core Application Domains", labelHi: "3+ प्रमुख अनुप्रयोग क्षेत्र" },
      { value: "100%", labelEn: "Continuous Duty Ready", labelHi: "100% सतत ड्यूटी सक्षम" },
      { value: "Zero", labelEn: "Failure Tolerance Target", labelHi: "शून्य विफलता लक्ष्य" },
      { value: "Pan-India", labelEn: "Supply & Integration Reach", labelHi: "व्यापक आपूर्ति नेटवर्क" }
    ],
    overviewTitleEn: "Protection Where Reliability Matters Most",
    overviewTitleHi: "सुरक्षा वहां, जहां विश्वसनीयता सबसे महत्वपूर्ण है",
    overviewTextEn: [
      "Infrastructure safety relies on hardware that works consistently under high-traffic and demanding operating loads. GLOBAL delivers application-specific engineered systems tailored to distinct sector environments.",
      "From busy multi-lane railway level crossings requiring synchronized quad-barrier interlocks to sensitive industrial motor control panels requiring True RMS earth leakage diagnostics, our equipment ensures seamless operations.",
      "Explore our primary application sectors below to understand how our hardware integrates into real-world electrical and signaling networks."
    ],
    overviewTextHi: [
      "बुनियादी ढांचे की सुरक्षा उन उपकरणों पर निर्भर करती है जो भारी यातायात और कठिन परिचालन परिस्थितियों में निरंतर काम करें। ग्लोबल विभिन्न क्षेत्रों के लिए विशेष रूप से अनुकूलित सुरक्षा प्रणालियां प्रदान करता है।",
      "व्यस्त रेलवे लेवल क्रॉसिंग पर सिंक्रनाइज़्ड बैरियर इंटरलॉक्स से लेकर औद्योगिक पावर पैनलों में ट्रू RMS अर्थ लीकेज निगरानी तक, हमारे उपकरण निर्बाध संचालन सुनिश्चित करते हैं।",
      "नीचे हमारे मुख्य अनुप्रयोग क्षेत्रों का अन्वेषण करें और जानें कि हमारा हार्डवेयर वास्तविक नेटवर्क में कैसे एकीकृत होता है।"
    ],
    features: [
      {
        badgeEn: "RAILWAY",
        badgeHi: "रेलवे",
        titleEn: "Railway Level Crossings",
        titleHi: "रेलवे लेवल क्रॉसिंग्स",
        descEn: "Heavy-duty vehicular control, obstacle interlocks, and fail-safe signaling interface.",
        descHi: "भारी वाहन नियंत्रण, बाधा इंटरलॉक और फेल-सेफ सिग्नलिंग इंटरफेस।"
      },
      {
        badgeEn: "ELECTRICAL",
        badgeHi: "विद्युत",
        titleEn: "Industrial Electrical Panels",
        titleHi: "औद्योगिक विद्युत पैनल",
        descEn: "Continuous insulation tracking and True RMS leakage monitoring for MCCs and switchboards.",
        descHi: "एमसीसी और स्विचबोर्ड के लिए निरंतर इंसुलेशन निगरानी और ट्रू RMS लीकेज डिटेक्शन।"
      },
      {
        badgeEn: "SIGNALLING",
        badgeHi: "सिग्नलिंग",
        titleEn: "Signalling & Access Control",
        titleHi: "सिग्नलिंग एवं पहुंच नियंत्रण",
        descEn: "Perimeter access control for railway maintenance yards, depots, and power sub-stations.",
        descHi: "रेलवे यार्ड, डिपो और पावर सब-स्टेशनों के लिए परिधि पहुंच सुरक्षा।"
      }
    ],
    relatedLinks: [
      { titleEn: "Railway Level Crossings", titleHi: "रेलवे लेवल क्रॉसिंग", href: "/sectors/level-crossings", tagEn: "SECTOR 01", tagHi: "क्षेत्र 01" },
      { titleEn: "Industrial Electrical Panels", titleHi: "औद्योगिक पावर पैनल", href: "/sectors/industrial-panels", tagEn: "SECTOR 02", tagHi: "क्षेत्र 02" },
      { titleEn: "Signalling & Access Control", titleHi: "सिग्नलिंग एवं नियंत्रण", href: "/sectors/signalling-infra", tagEn: "SECTOR 03", tagHi: "क्षेत्र 03" }
    ]
  },

  "sectors/level-crossings": {
    slug: "sectors/level-crossings",
    categoryEn: "Applications & Sectors",
    categoryHi: "अनुप्रयोग एवं क्षेत्र",
    categoryHref: "/sectors",
    titleEn: "Railway Level Crossings",
    titleHi: "रेलवे लेवल क्रॉसिंग्स (Level Crossings)",
    subtitleEn: "Heavy-duty boom barrier systems engineered specifically for high-density road-rail intersections with synchronized gate interlocking and road signal coordination.",
    subtitleHi: "उच्च-घनत्व वाले सड़क-रेलवे चौराहों के लिए विशेष रूप से इंजीनियर की गई हैवी-ड्यूटी बूम बैरियर प्रणाली, जिसमें सिंक्रनाइज़्ड गेट इंटरलॉकिंग और सिग्नल समन्वय शामिल है।",
    bannerImage: "/images/boom_barrier_railway.jpg",
    heroBadgeEn: "SECTOR APPLICATION 01 • LEVEL CROSSINGS",
    heroBadgeHi: "क्षेत्र अनुप्रयोग 01 • लेवल क्रॉसिंग्स",
    stats: [
      { value: "4-Gate", labelEn: "Synchronized Interlock Support", labelHi: "4-गेट सिंक्रनाइज़्ड इंटरलॉक" },
      { value: "< 3.0s", labelEn: "Rapid Operating Cycle", labelHi: "त्वरित परिचालन चक्र" },
      { value: "100%", labelEn: "Track Circuit Fail-Safe", labelHi: "100% ट्रैक सर्किट फेल-सेफ" },
      { value: "24/7", labelEn: "Continuous Duty Rating", labelHi: "24/7 सतत ड्यूटी रेटिंग" }
    ],
    overviewTitleEn: "Safe Vehicular & Train Movement Synchronization",
    overviewTitleHi: "सड़क वाहनों एवं ट्रेनों के सुरक्षित आवागमन का समन्वय",
    overviewTextEn: [
      "Level crossings represent one of the most critical safety interfaces in modern transportation networks. Road traffic must be stopped reliably before an approaching train enters the block section, and clear feedback must reach the station interlocking.",
      "GLOBAL barrier systems provide millisecond-fast relay confirmation to the railway signaling system once barriers are fully lowered and locked in the horizontal position.",
      "Equipped with bright LED boom lights, electronic hooters, and optical obstacle sensors, our installations prevent vehicles from being trapped while maintaining smooth road flow."
    ],
    overviewTextHi: [
      "लेवल क्रॉसिंग आधुनिक परिवहन नेटवर्क में सबसे संवेदनशील सुरक्षा बिंदुओं में से एक है। ट्रेन के ब्लॉक सेक्शन में प्रवेश करने से पहले सड़क यातायात को सुरक्षित रूप से रोका जाना चाहिए और स्टेशन मास्टर को स्पष्ट फीडबैक मिलना चाहिए।",
      "ग्लोबल बैरियर सिस्टम बूम पूरी तरह नीचे लॉक होने पर रेलवे सिग्नलिंग सिस्टम को मिलीसेकंड में स्पष्ट पुष्टि रिले भेजते हैं।",
      "ब्राइट एलईडी बूम लाइट्स, इलेक्ट्रॉनिक हूटर्स और ऑप्टिकल सेंसर से लैस, हमारी प्रणालियां वाहनों को बीच में फंसने से रोकती हैं और सड़क यातायात को सुरक्षित बनाती हैं।"
    ],
    complianceStandards: ["RDSO Level Crossing Norms", "EN 50126", "IEC 60947", "IRC Highway Standards"],
    features: [
      {
        badgeEn: "INTERLOCK",
        badgeHi: "इंटरलॉक",
        titleEn: "Direct Track Circuit & Signal Interlock",
        titleHi: "डायरेक्ट ट्रैक सर्किट एवं सिग्नल इंटरलॉक",
        descEn: "Interlocks with railway home and advance starter signals ensuring train signals cannot show green until barriers are locked down.",
        descHi: "ट्रेन सिग्नलों के साथ इंटरलॉक जो सुनिश्चित करता है कि जब तक बैरियर पूरी तरह बंद न हों, ट्रेन को हरा सिग्नल न मिले।"
      },
      {
        badgeEn: "WARNING",
        badgeHi: "चेतावनी",
        titleEn: "Audible & Visual Traffic Warnings",
        titleHi: "ऑडियो एवं विजुअल ट्रैफिक चेतावनी",
        descEn: "Ultra-bright LED boom arm strip lights and high-decibel hooters alert motorists ahead of barrier descent.",
        descHi: "बूम पर लगी चमकीली एलईडी स्ट्रिप्स और लाउड हूटर्स जो बैरियर गिरने से पहले ही वाहन चालकों को सतर्क करते हैं।"
      },
      {
        badgeEn: "DURABILITY",
        badgeHi: "मजबूती",
        titleEn: "High-Traffic Continuous Endurance",
        titleHi: "अत्यधिक व्यस्त यातायात में निरंतर सहनशीलता",
        descEn: "Engineered for 500+ daily open-close cycles in busy urban and semi-urban crossing locations.",
        descHi: "व्यस्त शहरी और ग्रामीण क्रॉसिंग पर रोजाना 500+ ऑपरेशंस के लिए पूरी तरह सक्षम।"
      }
    ],
    relatedLinks: [
      { titleEn: "Railway Barrier System", titleHi: "रेलवे बैरियर सिस्टम", href: "/products/railway-barrier", tagEn: "PRODUCT", tagHi: "उत्पाद" },
      { titleEn: "Signalling & Access Control", titleHi: "सिग्नलिंग एवं नियंत्रण", href: "/sectors/signalling-infra", tagEn: "SECTOR", tagHi: "क्षेत्र" }
    ]
  },

  "sectors/industrial-panels": {
    slug: "sectors/industrial-panels",
    categoryEn: "Applications & Sectors",
    categoryHi: "अनुप्रयोग एवं क्षेत्र",
    categoryHref: "/sectors",
    titleEn: "Industrial Electrical Panels & Switchboards",
    titleHi: "औद्योगिक विद्युत पैनल एवं स्विचबोर्ड",
    subtitleEn: "Continuous True RMS earth leakage and insulation monitoring protecting Motor Control Centres (MCCs), Power Distribution Boards (PDBs), and critical factory drives.",
    subtitleHi: "मोटर कंट्रोल सेंटर (MCC), पावर डिस्ट्रीब्यूशन बोर्ड (PDB) और महत्वपूर्ण फैक्ट्री ड्राइव्स की सुरक्षा के लिए निरंतर ट्रू RMS अर्थ लीकेज और इंसुलेशन निगरानी।",
    bannerImage: "/images/power_distribution_eld.jpg",
    heroBadgeEn: "SECTOR APPLICATION 02 • INDUSTRIAL SWITCHGEAR",
    heroBadgeHi: "क्षेत्र अनुप्रयोग 02 • औद्योगिक स्विचगियर",
    stats: [
      { value: "100%", labelEn: "Fire Hazard Prevention", labelHi: "विद्युत आग जोखिम रोकथाम" },
      { value: "96x96", labelEn: "Standard DIN Panel Cutout", labelHi: "मानक DIN पैनल कटआउट" },
      { value: "0.01A - 30A", labelEn: "Scalable Current Trip Range", labelHi: "स्केलेबल करंट ट्रिप रेंज" },
      { value: "RS-485", labelEn: "Energy SCADA Telemetry", labelHi: "एनर्जी SCADA टेलीमेट्री" }
    ],
    overviewTitleEn: "Eliminating Unscheduled Factory Shutdowns",
    overviewTitleHi: "कारखानों में अप्रत्याशित शटडाउन और नुकसान की रोकथाम",
    overviewTextEn: [
      "In heavy manufacturing plants, process refineries, and automated assembly lines, an undetected ground fault can rapidly escalate into an arc flash explosion, cable fire, or catastrophic motor stator blowout.",
      "Installing GLOBAL Digital Earth Leakage Detectors in Power Distribution Boards (PDB) and Motor Control Centers (MCC) provides continuous real-time diagnostic visibility.",
      "The pre-alarm warning relay alerts plant electrical engineers the moment insulation resistance starts degrading, allowing repairs during scheduled maintenance windows rather than suffering emergency shutdowns."
    ],
    overviewTextHi: [
      "भारी विनिर्माण संयंत्रों, रिफाइनरियों और स्वचालित असेंबली लाइनों में, किसी अनसुलझे ग्राउंड फॉल्ट से आग लग सकती है या मोटर जल सकती है।",
      "पावर डिस्ट्रीब्यूशन बोर्ड (PDB) और मोटर कंट्रोल सेंटर (MCC) में ग्लोबल डिजिटल अर्थ लीकेज डिटेक्टर लगाने से निरंतर रीयल-टाइम डायग्नोस्टिक दृश्यता मिलती है।",
      "प्री-अलार्म रिले इंसुलेशन खराब होते ही प्लांट इंजीनियरों को सचेत कर देता है, जिससे आपातकालीन शटडाउन के बजाय सामान्य मेंटेनेंस के दौरान ही समस्या हल हो जाती है।"
    ],
    complianceStandards: ["IEC 60947-2 Annex M", "IEC 60364-4-42 (Fire Protection)", "NFPA 70E", "IS 3043"],
    features: [
      {
        badgeEn: "MOTOR CARE",
        badgeHi: "मोटर सुरक्षा",
        titleEn: "Stator & Winding Insulation Guard",
        titleHi: "स्टेटर एवं वाइंडिंग इंसुलेशन सुरक्षा",
        descEn: "Detects moisture accumulation in motor windings before energization to prevent explosive startup burnout.",
        descHi: "मोटर चालू करने से पहले ही वाइंडिंग में नमी की पहचान करके स्टार्ट-अप पर जलने से बचाता है।"
      },
      {
        badgeEn: "FIRE PROOF",
        badgeHi: "आग से बचाव",
        titleEn: "Electrical Fire Risk Elimination",
        titleHi: "विद्युत आग के जोखिम का पूर्ण निवारण",
        descEn: "Trips feeder breakers before low-level persistent arcing faults ignite dust or combustible building materials.",
        descHi: "आर्किंग फॉल्ट्स से आग लगने से पहले ही फीडर ब्रेकर को सुरक्षित ट्रिप कर देता है।"
      },
      {
        badgeEn: "SCADA",
        badgeHi: "SCADA",
        titleEn: "Central Plant SCADA Telemetry",
        titleHi: "सेंट्रल प्लांट SCADA टेलीमेट्री",
        descEn: "Modbus network integration feeds live leakage trends directly to plant control room displays.",
        descHi: "मोडबस नेटवर्क के जरिए सीधे प्लांट कंट्रोल रूम में लाइव लीकेज डेटा प्रदर्शित करता है।"
      }
    ],
    relatedLinks: [
      { titleEn: "Digital Earth Leakage Detector", titleHi: "अर्थ लीकेज डिटेक्टर", href: "/products/earth-leakage", tagEn: "PRODUCT", tagHi: "उत्पाद" },
      { titleEn: "True RMS Current Measurement", titleHi: "ट्रू RMS मापन", href: "/products/earth-leakage/true-rms", tagEn: "FEATURE", tagHi: "फीचर" }
    ]
  },

  "sectors/signalling-infra": {
    slug: "sectors/signalling-infra",
    categoryEn: "Applications & Sectors",
    categoryHi: "अनुप्रयोग एवं क्षेत्र",
    categoryHref: "/sectors",
    titleEn: "Signalling Infrastructure & Access Control",
    titleHi: "सिग्नलिंग इंफ्रास्ट्रक्चर एवं पहुंच नियंत्रण",
    subtitleEn: "Integrated electrical diagnostic instruments and heavy perimeter barrier solutions protecting railway relay rooms, electronic interlockings, and yard corridors.",
    subtitleHi: "रेलवे रिले रूम, इलेक्ट्रॉनिक इंटरलॉकिंग और यार्ड कॉरिडोर की सुरक्षा के लिए एकीकृत विद्युत डायग्नोस्टिक उपकरण और हैवी परिधि बैरियर समाधान।",
    bannerImage: "/images/bollards_perimeter.jpg",
    heroBadgeEn: "SECTOR APPLICATION 03 • RAILWAY INFRASTRUCTURE",
    heroBadgeHi: "क्षेत्र अनुप्रयोग 03 • रेलवे इंफ्रास्ट्रक्चर",
    stats: [
      { value: "SIL-2/4", labelEn: "Signaling Safety Compatibility", labelHi: "सिग्नलिंग सुरक्षा अनुकूलता" },
      { value: "100%", labelEn: "Opto-Isolated Interfaces", labelHi: "ऑप्टो-आइसोलेटेड इंटरफेस" },
      { value: "RFID / ANPR", labelEn: "Access System Ready", labelHi: "RFID / ANPR एक्सेस सक्षम" },
      { value: "24/7", labelEn: "Critical Asset Guarding", labelHi: "24/7 क्रिटिकल एसेट सुरक्षा" }
    ],
    overviewTitleEn: "Protecting Critical Railway Control Corridors",
    overviewTitleHi: "क्रिटिकल रेलवे कंट्रोल कॉरिडोर और संपत्तियों की सुरक्षा",
    overviewTextEn: [
      "Railway signaling rooms and traction sub-stations contain millions of dollars in sensitive electronic interlockings (EI) and point machine power supplies. Electrical leakage on signaling cables can lead to dangerous signal false-clearing.",
      "GLOBAL delivers tailored Earth Leakage Detectors specifically approved for railway signalling power supplies (IPS), continuously verifying that signal cables maintain high insulation integrity to ground.",
      "Complementing this, our heavy-duty access barriers safeguard perimeter gates to freight yards, maintenance sheds, and loco depots with biometric and RFID vehicle validation."
    ],
    overviewTextHi: [
      "रेलवे सिग्नलिंग रूम और सब-स्टेशनों में अत्यंत संवेदनशील इलेक्ट्रॉनिक इंटरलॉकिंग (EI) और पॉइंट मशीन पावर सप्लाई होती है। सिग्नल केबलों में लीकेज से खतरनाक सिग्नल विफलता हो सकती है।",
      "ग्लोबल विशेष रूप से रेलवे सिग्नलिंग इंटीग्रेटेड पावर सप्लाई (IPS) के लिए प्रमाणित अर्थ लीकेज डिटेक्टर प्रदान करता है, जो सिग्नलिंग केबलों के इंसुलेशन की निरंतर जांच करते हैं।",
      "इसके साथ ही, हमारे बैरियर सिस्टम रेलवे यार्डों, शेड्स और लोको डिपो के गेटों पर सुरक्षित वाहन पहुंच नियंत्रण प्रदान करते हैं।"
    ],
    complianceStandards: ["RDSO/SPN/256", "EN 50122 Railway Standard", "CENELEC EN 50129", "IP66 Enclosures"],
    features: [
      {
        badgeEn: "IPS MONITORING",
        badgeHi: "IPS मॉनिटरिंग",
        titleEn: "Integrated Power Supply (IPS) Leakage Guard",
        titleHi: "इंटीग्रेटेड पावर सप्लाई (IPS) लीकेज गार्ड",
        descEn: "Protects 110V DC point machines and signal lamp feeds from unnoticed ground faults.",
        descHi: "110V डीसी पॉइंट मशीनों और सिग्नल लैंप फीड को ग्राउंड फॉल्ट से सुरक्षित रखता है।"
      },
      {
        badgeEn: "ACCESS CONTROL",
        badgeHi: "एक्सेस कंट्रोल",
        titleEn: "Authorized Vehicle & Depot Access",
        titleHi: "अधिकृत वाहन एवं डिपो एक्सेस नियंत्रण",
        descEn: "Integrates with railway RFID tags and UHF transponders for automated locomotive and service vehicle passage.",
        descHi: "रेलवे आरएफआईडी टैग और सेंसर के साथ जुड़कर अधिकृत वाहनों के स्वचालित प्रवेश की अनुमति देता है।"
      },
      {
        badgeEn: "LIGHTNING",
        badgeHi: "सर्ज प्रोटेक्शन",
        titleEn: "Traction Surge & Lightning Immunity",
        titleHi: "ट्रैक्शन सर्ज एवं तड़ित सुरक्षा",
        descEn: "High-grade surge suppression protects detectors from overhead 25kV traction line fault induction.",
        descHi: "25kV ओवरहेड ट्रैक्शन लाइन के सर्ज और आकाशीय बिजली से उपकरणों की सुरक्षा।"
      }
    ],
    relatedLinks: [
      { titleEn: "Railway Level Crossings", titleHi: "रेलवे लेवल क्रॉसिंग", href: "/sectors/level-crossings", tagEn: "SECTOR", tagHi: "क्षेत्र" },
      { titleEn: "Digital Earth Leakage Detector", titleHi: "अर्थ लीकेज डिटेक्टर", href: "/products/earth-leakage", tagEn: "PRODUCT", tagHi: "उत्पाद" }
    ]
  },

  // =========================================================================
  // 5. TECHNICAL RESOURCES & SUPPORT FAMILY
  // =========================================================================
  support: {
    slug: "support",
    categoryEn: "Support",
    categoryHi: "सहायता",
    categoryHref: "/support",
    titleEn: "Technical Resources & Engineering Hub",
    titleHi: "तकनीकी संसाधन एवं इंजीनियरिंग हब",
    subtitleEn: "Access technical product datasheets, installation schematics, wiring diagrams, and engineering compliance documentation for all GLOBAL safety systems.",
    subtitleHi: "सभी ग्लोबल सुरक्षा प्रणालियों के लिए उत्पाद डेटाशीट, इंस्टॉलेशन आरेख, वायरिंग आरेख और इंजीनियरिंग अनुपालन दस्तावेज़ प्राप्त करें।",
    bannerImage: "/images/eld_engineering_lab.jpg",
    heroBadgeEn: "TECHNICAL HUB • DOCUMENTATION & SUPPORT",
    heroBadgeHi: "तकनीकी हब • दस्तावेजीकरण एवं सहायता",
    stats: [
      { value: "PDF", labelEn: "Instant Datasheet Downloads", labelHi: "त्वरित डेटाशीट डाउनलोड" },
      { value: "CAD", labelEn: "Wiring & Dimensions Drawings", labelHi: "वायरिंग एवं आयाम चित्र" },
      { value: "100%", labelEn: "Engineer-Verified Manuals", labelHi: "इंजीनियर सत्यापित मैनुअल" },
      { value: "Direct", labelEn: "Technical Desk Access", labelHi: "प्रत्यक्ष तकनीकी सहायता" }
    ],
    overviewTitleEn: "Everything Engineers Need for Design & Deployment",
    overviewTitleHi: "डिजाइन और इंस्टॉलेशन के लिए इंजीनियरों हेतु आवश्यक संपूर्ण सामग्री",
    overviewTextEn: [
      "We believe comprehensive, transparent documentation is essential for seamless project execution. Whether you are sizing boom barrier foundation civil work or configuring RS-485 Modbus registers for an electrical switchboard, our resources provide precise technical guidance.",
      "Browse our downloadable PDF bundles, review exact dimensional drawings, or download step-by-step wiring schematics below.",
      "For custom project specifications, OEM adaptations, or direct technical consultation, contact our engineering desk directly."
    ],
    overviewTextHi: [
      "हमारा मानना है कि सफल परियोजना निष्पादन के लिए व्यापक और पारदर्शी दस्तावेजीकरण आवश्यक है। चाहे आप बैरियर के फाउंडेशन का सिविल कार्य कर रहे हों या स्विचबोर्ड के लिए मोडबस रजिस्टर कॉन्फ़िगर कर रहे हों, हमारे संसाधन सटीक तकनीकी मार्गदर्शन प्रदान करते हैं।",
      "नीचे हमारे डाउनलोड करने योग्य पीडीएफ बंडल देखें, सटीक आयाम चित्र देखें या स्टेप-बाय-स्टेप वायरिंग आरेख डाउनलोड करें।",
      "कस्टम प्रोजेक्ट विनिर्देशों या प्रत्यक्ष तकनीकी परामर्श के लिए सीधे हमारी इंजीनियरिंग डेस्क से संपर्क करें।"
    ],
    features: [
      {
        badgeEn: "DATASHEETS",
        badgeHi: "डेटाशीट",
        titleEn: "Product Technical Datasheets",
        titleHi: "उत्पाद तकनीकी डेटाशीट",
        descEn: "Full electrical, mechanical, and environmental specifications in printable high-resolution PDF format.",
        descHi: "प्रिंट करने योग्य उच्च-रिज़ॉल्यूशन पीडीएफ प्रारूप में सभी विद्युत और यांत्रिक विनिर्देश।"
      },
      {
        badgeEn: "SPECS",
        badgeHi: "विनिर्देश",
        titleEn: "Engineering Specifications",
        titleHi: "इंजीनियरिंग विनिर्देश",
        descEn: "Detailed compliance parameters, terminal wiring pinouts, and relay contact ratings.",
        descHi: "विस्तृत अनुपालन पैरामीटर, टर्मिनल पिनआउट और रिले रेटिंग।"
      },
      {
        badgeEn: "MANUALS",
        badgeHi: "गाइड",
        titleEn: "Installation & Wiring Guides",
        titleHi: "स्थापना एवं वायरिंग गाइड",
        descEn: "Step-by-step commissioning guidelines, mounting templates, and troubleshooting matrices.",
        descHi: "कदम-दर-कदम कमीशनिंग दिशानिर्देश, माउंटिंग टेम्प्लेट और समस्या निवारण चार्ट।"
      }
    ],
    relatedLinks: [
      { titleEn: "Product Datasheets", titleHi: "उत्पाद डेटाशीट", href: "/support/datasheets", tagEn: "DOWNLOADS", tagHi: "डाउनलोड" },
      { titleEn: "Technical Specifications", titleHi: "तकनीकी विनिर्देश", href: "/support/specifications", tagEn: "SPECS", tagHi: "विनिर्देश" },
      { titleEn: "Installation & Wiring Guides", titleHi: "स्थापना गाइड", href: "/support/installation-guides", tagEn: "MANUALS", tagHi: "मैनुअल" }
    ]
  },

  "support/datasheets": {
    slug: "support/datasheets",
    categoryEn: "Support",
    categoryHi: "सहायता",
    categoryHref: "/support",
    titleEn: "Product Datasheets & Downloads",
    titleHi: "उत्पाद डेटाशीट एवं डाउनलोड",
    subtitleEn: "Official technical product datasheets, specification sheets, and certification documents for GLOBAL Railway Barriers and Digital Earth Leakage Detectors.",
    subtitleHi: "ग्लोबल रेलवे बैरियर और डिजिटल अर्थ लीकेज डिटेक्टरों के लिए आधिकारिक तकनीकी डेटाशीट, विनिर्देश पत्र और प्रमाणन दस्तावेज़।",
    bannerImage: "/images/power_distribution_eld.jpg",
    heroBadgeEn: "DOCUMENTATION • SPECIFICATION SHEETS",
    heroBadgeHi: "दस्तावेजीकरण • विनिर्देश पत्र",
    stats: [
      { value: "PDF", labelEn: "High-Resolution Datasheets", labelHi: "हाई-रेजोल्यूशन डेटाशीट" },
      { value: "2026", labelEn: "Latest Revision Available", labelHi: "नवीनतम 2026 संस्करण" },
      { value: "Free", labelEn: "Direct Engineering Access", labelHi: "निःशुल्क तकनीकी एक्सेस" },
      { value: "100%", labelEn: "Factory Certified Specs", labelHi: "फैक्ट्री प्रमाणित विनिर्देश" }
    ],
    overviewTitleEn: "Download Official Technical Documentation",
    overviewTitleHi: "आधिकारिक तकनीकी दस्तावेज़ डाउनलोड करें",
    overviewTextEn: [
      "Our engineering datasheets contain comprehensive product breakdowns, wiring schematics, dimensional blueprints, electrical parameters, and environmental tolerances.",
      "Select the relevant product bundle below to download high-resolution PDF technical files directly to your device.",
      "If your tender or project demands custom OEM parameters or stamped compliance declarations, please request custom datasheets via our engineering form."
    ],
    overviewTextHi: [
      "हमारी इंजीनियरिंग डेटाशीट में संपूर्ण उत्पाद विवरण, वायरिंग आरेख, आयामी ब्लूप्रिंट, विद्युत पैरामीटर और पर्यावरणीय सहनशीलता शामिल हैं।",
      "अपने डिवाइस पर सीधे उच्च-रिज़ॉल्यूशन पीडीएफ फाइलें डाउनलोड करने के लिए नीचे दिए गए उत्पाद बंडल का चयन करें।",
      "यदि आपके टेंडर या प्रोजेक्ट के लिए कस्टम ओईएम मापदंडों की आवश्यकता है, तो कृपया हमारे फॉर्म के माध्यम से संपर्क करें।"
    ],
    features: [
      {
        badgeEn: "DOC 01",
        badgeHi: "दस्तावेज़ 01",
        titleEn: "Railway Barrier System Specification (PDF)",
        titleHi: "रेलवे बैरियर सिस्टम विनिर्देश (PDF)",
        descEn: "Complete technical breakdown covering brushless drive motor, fail-safe counterbalance geometry, and IP66 housing.",
        descHi: "ब्रशलेस मोटर, फेल-सेफ काउंटरबैलेंस और IP66 हाउसिंग का पूरा तकनीकी विवरण।"
      },
      {
        badgeEn: "DOC 02",
        badgeHi: "दस्तावेज़ 02",
        titleEn: "Digital Earth Leakage Detector Datasheet (PDF)",
        titleHi: "डिजिटल अर्थ लीकेज डिटेक्टर डेटाशीट (PDF)",
        descEn: "True RMS sensing specifications, CBCT current transformer sizing tables, and Modbus register maps.",
        descHi: "ट्रू RMS सेंसिंग विनिर्देश, CBCT ट्रांसफॉर्मर टेबल और मोडबस रजिस्टर मैप।"
      },
      {
        badgeEn: "DOC 03",
        badgeHi: "दस्तावेज़ 03",
        titleEn: "Railway Electrical Safety Application Guide (PDF)",
        titleHi: "रेलवे विद्युत सुरक्षा अनुप्रयोग गाइड (PDF)",
        descEn: "Best practices for level crossings, signalling power boards, and traction sub-station earthing protection.",
        descHi: "लेवल क्रॉसिंग, सिग्नलिंग पावर बोर्ड और ट्रैक्शन अर्थिंग सुरक्षा के लिए दिशानिर्देश।"
      }
    ],
    relatedLinks: [
      { titleEn: "Technical Specifications", titleHi: "तकनीकी विनिर्देश", href: "/support/specifications", tagEn: "SPECS", tagHi: "विनिर्देश" },
      { titleEn: "Installation Guides", titleHi: "स्थापना गाइड", href: "/support/installation-guides", tagEn: "MANUALS", tagHi: "मैनुअल" }
    ]
  },

  "support/specifications": {
    slug: "support/specifications",
    categoryEn: "Support",
    categoryHi: "सहायता",
    categoryHref: "/support",
    titleEn: "Technical Specifications & Pinouts",
    titleHi: "तकनीकी विनिर्देश एवं पिनआउट्स",
    subtitleEn: "Detailed electrical characteristics, terminal pin configurations, dimensional cutouts, and environmental operating tolerances.",
    subtitleHi: "विस्तृत विद्युत विशेषताएं, टर्मिनल पिन कॉन्फ़िगरेशन, आयामी कटआउट और पर्यावरणीय ऑपरेटिंग सीमाएं।",
    bannerImage: "/images/earth_leakage_detector_hero.jpg",
    heroBadgeEn: "TECHNICAL DATA • ELECTRICAL PARAMETERS",
    heroBadgeHi: "तकनीकी डेटा • विद्युत पैरामीटर्स",
    stats: [
      { value: "±2%", labelEn: "Measurement Accuracy", labelHi: "मापन सटीकता ±2%" },
      { value: "IP66/54", labelEn: "Ingress Protection Grades", labelHi: "सुरक्षा श्रेणियां" },
      { value: "Universal", labelEn: "Auxiliary Supply Range", labelHi: "यूनिवर्सल पावर सप्लाई" },
      { value: "100%", labelEn: "Factory Bench Tested", labelHi: "100% फैक्ट्री टेस्टेड" }
    ],
    overviewTitleEn: "Precision Engineering Parameters & Standards",
    overviewTitleHi: "सटीक इंजीनियरिंग पैरामीटर्स एवं मानक",
    overviewTextEn: [
      "Every GLOBAL product is manufactured to rigorous industrial specifications and tested 100% before dispatch. Below is a summary of standard operational parameters across our primary product lines.",
      "Review input supply ranges, relay ratings, isolation voltages, and operating temperatures below.",
      "For customized operating ranges (such as high-temperature desert builds or specialized railway voltages), contact our technical applications team."
    ],
    overviewTextHi: [
      "प्रत्येक ग्लोबल उत्पाद का निर्माण कड़े औद्योगिक मानकों के अनुसार किया जाता है और भेजने से पहले 100% परीक्षण किया जाता है। नीचे मुख्य परिचालन मापदंडों का सारांश दिया गया है।",
      "इनपुट वोल्टेज, रिले रेटिंग, आइसोलेशन वोल्टेज और ऑपरेटिंग तापमान की समीक्षा करें।",
      "कस्टम ऑपरेटिंग रेंज (जैसे अत्यधिक तापमान या विशेष रेलवे वोल्टेज) के लिए हमारी तकनीकी टीम से संपर्क करें।"
    ],
    specs: [
      { labelEn: "ELD Sensing Method", labelHi: "ELD सेंसिंग विधि", valueEn: "True RMS via external Core Balance CT (CBCT)", valueHi: "बाहरी CBCT के माध्यम से ट्रू RMS" },
      { labelEn: "ELD Operating Voltage", labelHi: "ELD ऑपरेटिंग वोल्टेज", valueEn: "85 - 265V AC / DC Universal Supply", valueHi: "85 - 265V AC / DC यूनिवर्सल" },
      { labelEn: "Barrier Drive Power", labelHi: "बैरियर मोटर पावर", valueEn: "24V DC Brushless, 150W Peak Torque", valueHi: "24V DC ब्रशलेस, 150W पीक टॉर्क" },
      { labelEn: "Barrier Operating Temperature", labelHi: "बैरियर ऑपरेटिंग तापमान", valueEn: "-25°C to +70°C ambient", valueHi: "-25°C से +70°C परिवेशी" },
      { labelEn: "Barrier Ingress Rating", labelHi: "बैरियर सुरक्षा रेटिंग", valueEn: "IP66 Weatherproof Enclosure", valueHi: "IP66 वेदरप्रूफ एनक्लोजर" },
      { labelEn: "Relay Output Rating", labelHi: "रिले आउटपुट रेटिंग", valueEn: "5A @ 250V AC / 30V DC Potential-Free", valueHi: "5A @ 250V AC / 30V DC पोटेंशियल-फ्री" }
    ],
    features: [
      {
        badgeEn: "TERMINALS",
        badgeHi: "टर्मिनल्स",
        titleEn: "Heavy-Duty Pluggable Screw Terminals",
        titleHi: "प्लग करने योग्य स्क्रू टर्मिनल्स",
        descEn: "Supports up to 2.5 mm² stranded control wire with vibration-resistant retention clamps.",
        descHi: "कंपन-प्रतिरोधी क्लैंप के साथ 2.5 मिमी² तक के कंट्रोल वायर का समर्थन।"
      },
      {
        badgeEn: "ISOLATION",
        badgeHi: "आइसोलेशन",
        titleEn: "3.5kV Galvanic Isolation",
        titleHi: "3.5kV गैल्वेनिक आइसोलेशन",
        descEn: "Maintains absolute safety between high-voltage power mains and low-voltage digital telemetry ports.",
        descHi: "हाई-वोल्टेज मेन्स और लो-वोल्टेज डिजिटल टेलीमेट्री के बीच पूर्ण सुरक्षा बनाए रखता है।"
      },
      {
        badgeEn: "PROTECTION",
        badgeHi: "सुरक्षा",
        titleEn: "Internal MOV Surge Protection",
        titleHi: "आंतरिक MOV सर्ज प्रोटेक्शन",
        descEn: "Integrated metal-oxide varistors clamp high-energy line voltage spikes instantly.",
        descHi: "इंटीग्रेटेड मेटल-ऑक्साइड वैरिस्टर जो लाइन सर्ज को तुरंत रोकते हैं।"
      }
    ],
    relatedLinks: [
      { titleEn: "Product Datasheets", titleHi: "डेटाशीट डाउनलोड", href: "/support/datasheets", tagEn: "DOWNLOADS", tagHi: "डाउनलोड" },
      { titleEn: "Installation Guides", titleHi: "स्थापना गाइड", href: "/support/installation-guides", tagEn: "MANUALS", tagHi: "मैनुअल" }
    ]
  },

  "support/installation-guides": {
    slug: "support/installation-guides",
    categoryEn: "Support",
    categoryHi: "सहायता",
    categoryHref: "/support",
    titleEn: "Installation & Wiring Guides",
    titleHi: "स्थापना एवं वायरिंग गाइड",
    subtitleEn: "Step-by-step commissioning guidelines, foundation civil layout blueprints, and terminal wiring schematics for seamless site deployment.",
    subtitleHi: "कदम-दर-कदम कमीशनिंग दिशानिर्देश, फाउंडेशन सिविल लेआउट ब्लूप्रिंट और साइट पर आसान स्थापना के लिए टर्मिनल वायरिंग आरेख।",
    bannerImage: "/images/boom_barrier_railway.jpg",
    heroBadgeEn: "FIELD COMMISSIONING • WIRING SCHEMATICS",
    heroBadgeHi: "फील्ड कमीशनिंग • वायरिंग आरेख",
    stats: [
      { value: "Step-by-Step", labelEn: "Clear Illustrated Manuals", labelHi: "चित्रित स्पष्ट मैनुअल" },
      { value: "Civil", labelEn: "Foundation & Conduit Blueprints", labelHi: "फाउंडेशन एवं कंड्यूट ब्लूप्रिंट" },
      { value: "Wiring", labelEn: "CBCT & Relay Schematics", labelHi: "CBCT एवं रिले आरेख" },
      { value: "Direct", labelEn: "Commissioning Phone Support", labelHi: "ऑन-कॉल तकनीकी सहायता" }
    ],
    overviewTitleEn: "Engineered for Simple, Error-Free Field Deployment",
    overviewTitleHi: "सरल और त्रुटि-रहित फील्ड स्थापना के लिए निर्मित",
    overviewTextEn: [
      "Proper installation and wiring are crucial to ensuring long-term reliability of infrastructure safety systems. GLOBAL provides clear, illustrated installation manuals for electrical contractors and field engineers.",
      "Our barrier guides detail exact foundation depth, anchor bolt templates, conduit routing, counterweight balancing, and safety sensor alignments.",
      "For earth leakage detectors, our wiring schematics clarify correct CBCT cable passing techniques, grounding shielding, and terminal connections to shunt trip breakers."
    ],
    overviewTextHi: [
      "सुरक्षा प्रणालियों की दीर्घकालिक विश्वसनीयता सुनिश्चित करने के लिए सही स्थापना और वायरिंग अत्यंत महत्वपूर्ण है। ग्लोबल इलेक्ट्रिकल ठेकेदारों और फील्ड इंजीनियरों के लिए सचित्र मैनुअल प्रदान करता है।",
      "हमारे बैरियर गाइड में फाउंडेशन की गहराई, एंकर बोल्ट टेम्पलेट, केबल कंड्यूट और काउंटरवेट बैलेंसिंग का पूरा विवरण दिया गया है।",
      "अर्थ लीकेज डिटेक्टरों के लिए हमारे वायरिंग आरेख CBCT केबल पासिंग तकनीकों, अर्थिंग शील्डिंग और शंट ट्रिप ब्रेकर कनेक्शन को स्पष्ट करते हैं।"
    ],
    features: [
      {
        badgeEn: "GUIDE 01",
        badgeHi: "गाइड 01",
        titleEn: "Barrier Foundation & Mounting Guide",
        titleHi: "बैरियर फाउंडेशन एवं माउंटिंग गाइड",
        descEn: "Concrete mix specifications, anchor bolt layouts, and drainage conduit provisions for level crossing sites.",
        descHi: "लेवल क्रॉसिंग साइटों के लिए कंक्रीट मिक्स विनिर्देश, एंकर बोल्ट लेआउट और ड्रेनेज प्रावधान।"
      },
      {
        badgeEn: "GUIDE 02",
        badgeHi: "गाइड 02",
        titleEn: "CBCT Current Transformer Wiring Manual",
        titleHi: "CBCT करंट ट्रांसफॉर्मर वायरिंग मैनुअल",
        descEn: "Rules for passing 3-phase + neutral conductors through CBCT cores with proper earth shield termination.",
        descHi: "उचित अर्थ शील्ड टर्मिनेशन के साथ CBCT कोर से 3-फेज + न्यूट्रल कंडक्टर पास करने के नियम।"
      },
      {
        badgeEn: "GUIDE 03",
        badgeHi: "गाइड 03",
        titleEn: "Commissioning & Diagnostic Test Procedures",
        titleHi: "कमीशनिंग एवं परीक्षण प्रक्रियाएं",
        descEn: "Pre-power-on verification checklists and push-button test protocols for site acceptance sign-off.",
        descHi: "पावर चालू करने से पहले की चेकलिस्ट और साइट स्वीकृति के लिए टेस्ट प्रोटोकॉल।"
      }
    ],
    relatedLinks: [
      { titleEn: "Product Datasheets", titleHi: "डेटाशीट डाउनलोड", href: "/support/datasheets", tagEn: "DOWNLOADS", tagHi: "डाउनलोड" },
      { titleEn: "Talk to Engineering", titleHi: "इंजीनियरिंग टीम से बात करें", href: "/contact/engineering-team", tagEn: "SUPPORT", tagHi: "सहायता" }
    ]
  },

  // =========================================================================
  // 6. CONTACT FAMILY
  // =========================================================================
  contact: {
    slug: "contact",
    categoryEn: "Contact",
    categoryHi: "संपर्क",
    categoryHref: "/contact",
    titleEn: "Contact GLOBAL Engineering",
    titleHi: "ग्लोबल इंजीनियरिंग से संपर्क करें",
    subtitleEn: "Connect directly with our engineering specialists, application consultants, and technical quote desks for your infrastructure project requirements.",
    subtitleHi: "अपनी बुनियादी ढांचा परियोजना आवश्यकताओं के लिए हमारे वरिष्ठ इंजीनियरिंग विशेषज्ञों, अनुप्रयोग सलाहकारों और तकनीकी डेस्क से सीधे जुड़ें।",
    bannerImage: "/images/eld_engineering_lab.jpg",
    heroBadgeEn: "DIRECT ENGINEERING SUPPORT • GLOBAL ASSISTANCE",
    heroBadgeHi: "प्रत्यक्ष तकनीकी सहायता • वैश्विक संपर्क",
    stats: [
      { value: "< 24h", labelEn: "Standard Response Time", labelHi: "24 घंटे में तकनीकी जवाब" },
      { value: "Direct", labelEn: "Senior Engineer Consultation", labelHi: "वरिष्ठ इंजीनियर परामर्श" },
      { value: "OEM/ODM", labelEn: "Custom Build Availability", labelHi: "कस्टम निर्माण सुविधा" },
      { value: "100%", labelEn: "Application-Specific Sizing", labelHi: "अनुप्रयोग-विशिष्ट समाधान" }
    ],
    overviewTitleEn: "Direct Engineer-to-Engineer Collaboration",
    overviewTitleHi: "प्रत्यक्ष इंजीनियर-टू-इंजीनियर तकनीकी सहयोग",
    overviewTextEn: [
      "Unlike generic distributor portals, at GLOBAL you speak directly with technical application engineers who understand railway signalling protocols, level crossing duty cycles, and industrial earth leakage harmonics.",
      "Whether you need custom mechanical boom dimensions, specific relay output logic, OEM brand labeling, or tender documentation support, our specialists are ready to assist.",
      "Submit your requirements through our online consultation form below or reach our technical support teams directly."
    ],
    overviewTextHi: [
      "सामान्य डिस्ट्रीब्यूटरों के विपरीत, ग्लोबल में आप सीधे तकनीकी इंजीनियरों से बात करते हैं जो रेलवे सिग्नलिंग प्रोटोकॉल, बूम बैरियर ड्यूटी साइकिल और अर्थ लीकेज हार्मोनिक्स को गहराई से समझते हैं।",
      "चाहे आपको कस्टम बूम आयाम, विशिष्ट रिले लॉजिक, ओईएम ब्रांड लेबलिंग या टेंडर दस्तावेजीकरण में सहयोग की आवश्यकता हो, हमारे विशेषज्ञ सहायता के लिए तैयार हैं।",
      "नीचे दिए गए हमारे फॉर्म के माध्यम से अपनी आवश्यकताएं साझा करें या सीधे हमारी तकनीकी टीम से संपर्क करें।"
    ],
    features: [
      {
        badgeEn: "ENGINEERING",
        badgeHi: "इंजीनियरिंग",
        titleEn: "Talk to Engineering Team",
        titleHi: "इंजीनियरिंग टीम से बात करें",
        descEn: "Consult directly on circuit design, installation challenges, and technical specifications.",
        descHi: "सर्किट डिज़ाइन, इंस्टॉलेशन चुनौतियों और तकनीकी विनिर्देशों पर सीधे परामर्श लें।"
      },
      {
        badgeEn: "QUOTATION",
        badgeHi: "कोटेशन",
        titleEn: "Request a Technical Quote",
        titleHi: "तकनीकी कोटेशन का अनुरोध करें",
        descEn: "Receive itemized technical pricing, delivery timelines, and tender compliance documents.",
        descHi: "विस्तृत तकनीकी मूल्य निर्धारण, डिलीवरी समय और टेंडर अनुपालन दस्तावेज़ प्राप्त करें।"
      }
    ],
    relatedLinks: [
      { titleEn: "Talk to Engineering", titleHi: "इंजीनियरिंग से बात करें", href: "/contact/engineering-team", tagEn: "CONSULTATION", tagHi: "परामर्श" },
      { titleEn: "Request a Quote", titleHi: "कोटेशन प्राप्त करें", href: "/contact/quote-req", tagEn: "QUOTATION", tagHi: "कोटेशन" }
    ]
  },

  "contact/engineering-team": {
    slug: "contact/engineering-team",
    categoryEn: "Contact",
    categoryHi: "संपर्क",
    categoryHref: "/contact",
    titleEn: "Talk to Engineering",
    titleHi: "इंजीनियरिंग टीम से बात करें",
    subtitleEn: "Direct technical consultation with our systems and application engineers for product integration, custom dimensions, and field compatibility analysis.",
    subtitleHi: "उत्पाद एकीकरण, कस्टम आयामों और फील्ड अनुकूलता विश्लेषण के लिए हमारे सिस्टम और अनुप्रयोग इंजीनियरों के साथ प्रत्यक्ष तकनीकी परामर्श।",
    bannerImage: "/images/eld_engineering_lab.jpg",
    heroBadgeEn: "ENGINEERING CONSULTATION • DIRECT DIALOGUE",
    heroBadgeHi: "इंजीनियरिंग परामर्श • प्रत्यक्ष संवाद",
    stats: [
      { value: "Direct", labelEn: "No Sales Gatekeepers", labelHi: "सीधा इंजीनियर से संपर्क" },
      { value: "< 24h", labelEn: "Guaranteed Response Window", labelHi: "24 घंटे में तकनीकी समाधान" },
      { value: "100%", labelEn: "Custom Application Guidance", labelHi: "100% अनुकूलित मार्गदर्शन" },
      { value: "Free", labelEn: "Initial Technical Feasibility", labelHi: "निःशुल्क तकनीकी मूल्यांकन" }
    ],
    overviewTitleEn: "Dedicated Technical Support for Project Integrators",
    overviewTitleHi: "प्रोजेक्ट इंटीग्रेटर्स के लिए समर्पित तकनीकी सहायता",
    overviewTextEn: [
      "Deploying safety systems in railway corridors and industrial power panels requires meticulous technical planning. Our senior engineering team is ready to evaluate your electrical schematics, duty cycles, and environmental constraints.",
      "We provide customized wiring diagrams, Modbus register integration guidance, and fail-safe mechanical counterbalance calculations tailored to your exact site layout.",
      "Fill out the engineering consultation form below with your project parameters, and a senior technical lead will contact you within 24 business hours."
    ],
    overviewTextHi: [
      "रेलवे कॉरिडोर और औद्योगिक पैनलों में सुरक्षा प्रणालियों की स्थापना के लिए सावधानीपूर्वक तकनीकी योजना की आवश्यकता होती है। हमारी वरिष्ठ इंजीनियरिंग टीम आपके इलेक्ट्रिकल आरेखों और फील्ड परिस्थितियों का मूल्यांकन करने के लिए तैयार है।",
      "हम आपके प्रोजेक्ट लेआउट के अनुसार कस्टमाइज्ड वायरिंग आरेख, मोडबस रजिस्टर गाइड और मैकेनिकल काउंटरबैलेंस गणना प्रदान करते हैं।",
      "नीचे दिए गए फॉर्म में अपने प्रोजेक्ट पैरामीटर साझा करें, और हमारे तकनीकी विशेषज्ञ 24 घंटों के भीतर आपसे संपर्क करेंगे।"
    ],
    features: [
      {
        badgeEn: "FEASIBILITY",
        badgeHi: "मूल्यांकन",
        titleEn: "Site Compatibility & Feasibility Review",
        titleHi: "साइट अनुकूलता एवं व्यवहार्यता समीक्षा",
        descEn: "Reviewing available power supplies, conduit distances, and railway signaling interlocks.",
        descHi: "उपलब्ध पावर सप्लाई, केबल दूरी और रेलवे सिग्नलिंग इंटरलॉक्स की विस्तृत समीक्षा।"
      },
      {
        badgeEn: "CUSTOM OEM",
        badgeHi: "कस्टम OEM",
        titleEn: "Custom OEM / ODM Modifications",
        titleHi: "कस्टम OEM / ODM संशोधन",
        descEn: "Special housing colors, boom arm lighting lengths, and firmware register adjustments.",
        descHi: "विशेष एनक्लोजर रंग, बूम लाइट की लंबाई और फर्मवेयर रजिस्टर अनुकूलन।"
      },
      {
        badgeEn: "COMMISSIONING",
        badgeHi: "कमीशनिंग",
        titleEn: "On-Site & Remote Commissioning Support",
        titleHi: "ऑन-साइट एवं रिमोट कमीशनिंग सहायता",
        descEn: "Live technical phone assistance for field technicians during site installation and sign-off.",
        descHi: "साइट इंस्टॉलेशन के दौरान फील्ड तकनीशियनों के लिए ऑन-कॉल तकनीकी सहायता।"
      }
    ],
    relatedLinks: [
      { titleEn: "Request a Quote", titleHi: "कोटेशन प्राप्त करें", href: "/contact/quote-req", tagEn: "PRICING", tagHi: "मूल्य" },
      { titleEn: "Technical Specifications", titleHi: "तकनीकी विनिर्देश", href: "/support/specifications", tagEn: "SPECS", tagHi: "विनिर्देश" }
    ]
  },

  "contact/quote-req": {
    slug: "contact/quote-req",
    categoryEn: "Contact",
    categoryHi: "संपर्क",
    categoryHref: "/contact",
    titleEn: "Request a Technical Quote",
    titleHi: "तकनीकी कोटेशन का अनुरोध करें",
    subtitleEn: "Receive official itemized technical pricing, delivery lead times, shipping estimates, and tender compliance packs tailored to your bill of materials.",
    subtitleHi: "अपनी परियोजना आवश्यकताओं के अनुसार आधिकारिक आइटमवार तकनीकी मूल्य, डिलीवरी समय और टेंडर अनुपालन दस्तावेज प्राप्त करें।",
    bannerImage: "/images/boom_barrier_railway.jpg",
    heroBadgeEn: "COMMERCIAL & TECHNICAL QUOTES • FAST DELIVERY",
    heroBadgeHi: "व्यावसायिक एवं तकनीकी कोटेशन • त्वरित डिलीवरी",
    stats: [
      { value: "Itemized", labelEn: "Transparent Technical Quotes", labelHi: "पारदर्शी आइटमवार कोटेशन" },
      { value: "Same-Day", labelEn: "Standard Estimate Dispatch", labelHi: "त्वरित कोटेशन प्रेषण" },
      { value: "Pan-India", labelEn: "Direct Freight Logistics", labelHi: "अखिल भारतीय डिलीवरी" },
      { value: "OEM", labelEn: "Volume Pricing Discounts", labelHi: "थोक वॉल्यूम डिस्काउंट" }
    ],
    overviewTitleEn: "Rapid, Accurate Commercial & Technical Proposals",
    overviewTitleHi: "त्वरित, सटीक व्यावसायिक एवं तकनीकी प्रस्ताव",
    overviewTextEn: [
      "Whether you are preparing a formal railway tender submission, pricing an industrial switchboard contract, or procuring spare safety units for plant maintenance, our sales engineering desk delivers fast, itemized proposals.",
      "All quotations include full technical compliance statements, dimensional drawings, testing certifications, and transparent delivery schedules.",
      "Submit your required quantities, product models, and delivery location in the form below to receive your official quotation."
    ],
    overviewTextHi: [
      "चाहे आप औपचारिक रेलवे टेंडर तैयार कर रहे हों, औद्योगिक स्विचबोर्ड अनुबंध का मूल्य निर्धारण कर रहे हों या मेंटेनेंस के लिए सुरक्षा उपकरण खरीद रहे हों, हमारी डेस्क त्वरित और पारदर्शी प्रस्ताव तैयार करती है।",
      "सभी कोटेशन में पूर्ण तकनीकी अनुपालन विवरण, ड्राइंग, परीक्षण प्रमाण पत्र और स्पष्ट डिलीवरी कार्यक्रम शामिल होते हैं।",
      "आधिकारिक कोटेशन प्राप्त करने के लिए नीचे दिए गए फॉर्म में आवश्यक मात्रा, उत्पाद मॉडल और डिलीवरी स्थान साझा करें।"
    ],
    features: [
      {
        badgeEn: "TENDERS",
        badgeHi: "टेंडर",
        titleEn: "Tender Compliance Packs",
        titleHi: "टेंडर अनुपालन दस्तावेज",
        descEn: "Includes clause-by-clause technical compliance statements and test certificates.",
        descHi: "क्लॉज-दर-क्लॉज तकनीकी अनुपालन विवरण और परीक्षण प्रमाण पत्र शामिल।"
      },
      {
        badgeEn: "VOLUME",
        badgeHi: "वॉल्यूम",
        titleEn: "Tiered Project Volume Pricing",
        titleHi: "परियोजना वॉल्यूम डिस्काउंट",
        descEn: "Special discounted project tariffs for bulk rail division upgrades and large OEM switchboard builders.",
        descHi: "थोक रेलवे अपग्रेड और बड़े ओईएम स्विचबोर्ड निर्माताओं के लिए विशेष रियायती दरें।"
      },
      {
        badgeEn: "WARRANTY",
        badgeHi: "वारंटी",
        titleEn: "Standard & Extended Warranty Options",
        titleHi: "मानक एवं विस्तारित वारंटी विकल्प",
        descEn: "12-month standard factory warranty with optional extended 36-month lifecycle support contracts.",
        descHi: "12 महीने की मानक वारंटी और 36 महीने के विस्तारित सपोर्ट अनुबंध।"
      }
    ],
    relatedLinks: [
      { titleEn: "Talk to Engineering", titleHi: "इंजीनियरिंग से बात करें", href: "/contact/engineering-team", tagEn: "CONSULT", tagHi: "परामर्श" },
      { titleEn: "Product Datasheets", titleHi: "डेटाशीट डाउनलोड", href: "/support/datasheets", tagEn: "DOWNLOADS", tagHi: "डाउनलोड" }
    ]
  }
};

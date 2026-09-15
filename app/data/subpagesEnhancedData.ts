import { RailwaySubpageProps } from "../components/RailwayBarrierSubpage";
import { EarthLeakageSubpageProps } from "../components/EarthLeakageSubpage";
import { CapabilitySubpageProps } from "../components/CapabilitySubpage";
import { SectorsSubpageProps } from "../components/SectorsSubpage";
import { SupportSubpageProps } from "../components/SupportSubpage";
import { ContactSubpageProps } from "../components/ContactSubpage";

// ============================================================================
// 1. RAILWAY BARRIER PRODUCT FAMILY DATA
// ============================================================================
export const RAILWAY_SUBPAGES: Record<string, RailwaySubpageProps> = {
  "fail-safe-boom": {
    slug: "fail-safe-boom",
    subCategoryTitleEn: "Fail-Safe Boom Mechanism",
    subCategoryTitleHi: "फेल-सेफ बूम मैकेनिज्म",
    badgeEn: "SAFETY INTEGRITY SIL-2 • CORE DRIVE ARCHITECTURE",
    badgeHi: "सुरक्षा अखंडता SIL-2 • कोर ड्राइव आर्किटेक्चर",
    heroHeadlineEn: "Gravity-Assisted Default-to-Safe Boom Drive Geometry",
    heroHeadlineHi: "गुरुत्वाकर्षण-सहायक डिफ़ॉल्ट-टू-सेफ बूम ड्राइव तकनीक",
    heroSubtitleEn: "Precision engineered counterbalance armatures and zero-wear electromagnetic safety clutch guaranteeing predictable barrier positioning under total power blackout or emergency interlock trip.",
    heroSubtitleHi: "सटीक काउंटरबैलेंस आर्मेचर और शून्य-घिसाव इलेक्ट्रोमैग्नेटिक सेफ्टी क्लच जो बिजली गुल होने या आपातकालीन इंटरलॉक ट्रिप होने पर बूम की सुरक्षित स्थिति की गारंटी देता है।",
    bannerImage: "/images/fail_safe_boom.jpg",
    secondaryBannerImage: "/images/boom_barrier_hero.jpg",
    fieldBannerImage: "/images/boom_barrier_railway.jpg",
    stats: [
      { value: "0 ms", labelEn: "Clutch Decouple Latency", labelHi: "क्लच डिसएंगेज लेटेंसी", subEn: "Instantaneous physical release", subHi: "तात्कालिक मैकेनिकल रिलीज" },
      { value: "100%", labelEn: "Gravity Safe Descent", labelHi: "गुरुत्वाकर्षण सुरक्षित ड्रॉप", subEn: "Zero power required to close", subHi: "बंद होने के लिए बिजली की आवश्यकता नहीं" },
      { value: "5M+", labelEn: "Fatigue Life Cycles", labelHi: "परीक्षित परिचालन चक्र", subEn: "Tempered dual-spring pack", subHi: "हाई-टेम्पर्ड डुअल स्प्रिंग्स" },
      { value: "±0.5°", labelEn: "Angle Encoding Precision", labelHi: "स्थिति निर्धारण सटीकता", subEn: "Dual optical rotary encoders", subHi: "ऑप्टिकल रोटरी एनकोडर" }
    ],
    deepDiveTitleEn: "Uncompromising Passive Safety Through Calibrated Mechanics",
    deepDiveTitleHi: "कैलिब्रेटेड मैकेनिक्स के माध्यम से अटूट निष्क्रिय सुरक्षा",
    deepDiveParasEn: [
      "Level crossing safety demands that even in the worst-case scenario — complete electrical substation blackout, severed control wiring, or lightning strike damage — road traffic is prevented from entering the danger zone of an approaching train.",
      "The GLOBAL Fail-Safe Boom Mechanism relies on fundamental physics rather than stored battery energy. A calibrated dual-spring counterbalance geometry works in unison with an electromagnetic clutch.",
      "Upon command loss or safety trigger, the clutch seamlessly releases in under 10 milliseconds, allowing calibrated counterweights to glide the barrier into its locked horizontal position with hydro-pneumatic terminal dampening."
    ],
    deepDiveParasHi: [
      "लेवल क्रॉसिंग सुरक्षा यह मांग करती है कि सबसे गंभीर विफलता की स्थिति में भी — जैसे पूर्ण बिजली कटौती या केबल कटने पर — सड़क यातायात को सुरक्षित रूप से रोका जाए।",
      "ग्लोबल फेल-सेफ बूम मैकेनिज्म बैटरी पावर के बजाय गुरुत्वाकर्षण और स्प्रिंग भौतिकी पर निर्भर करता है। एक कैलिब्रेटेड डुअल-स्प्रिंग काउंटरबैलेंस सिस्टम इलेक्ट्रोमैग्नेटिक क्लच के साथ मिलकर काम करता है।",
      "सिग्नल कटते ही क्लच 10 मिलीसेकंड के भीतर रिलीज हो जाता है, जिससे काउंटरवेट्स हाइड्रो-न्यूमैटिक डैम्पिंग के साथ बूम को नियंत्रित गति से सुरक्षित नीचे ले आते हैं।"
    ],
    highlights: [
      {
        badge: "HYDRO-DAMPING",
        titleEn: "Hydro-Pneumatic Terminal Damping",
        titleHi: "हाइड्रो-न्यूमैटिक टर्मिनल डैम्पिंग",
        descEn: "Prevents boom bounce and structural whipping shock during rapid gravity drop at terminal positions.",
        descHi: "ग्रेविटी ड्रॉप के दौरान बूम के झटके और कंपन को पूरी तरह समाप्त करता है।"
      },
      {
        badge: "ZERO-WEAR CLUTCH",
        titleEn: "Electromagnetic Disengage Clutch",
        titleHi: "इलेक्ट्रोमैग्नेटिक डिसएंगेज क्लच",
        descEn: "Fails open instantly on signal interruption, mechanically isolating motor gearbox from the main armature.",
        descHi: "पावर कट होने पर तुरंत मोटर गियरबॉक्स से अलग होकर बूम को सुरक्षित नीचे ले आता है।"
      },
      {
        badge: "OPTICAL ENCODER",
        titleEn: "Absolute Rotary Optical Encoders",
        titleHi: "ऑप्टिकल रोटरी एनकोडर",
        descEn: "Retains sub-degree angle precision continuously without needing manual calibration runs after power resets.",
        descHi: "पावर रीसेट के बाद भी बिना किसी मैनुअल कैलिब्रेशन के बूम का सटीक कोण बनाए रखता है।"
      }
    ],
    specsTable: [
      { parameterEn: "Mechanical Life Rating", parameterHi: "मैकेनिकल लाइफ रेटिंग", valueEn: "5,000,000 continuous full cycles", valueHi: "50,00,000 पूर्ण परिचालन चक्र", standard: "EN 50126 RAMS" },
      { parameterEn: "Gravity Descent Velocity", parameterHi: "ग्रेविटी ड्रॉप गति", valueEn: "2.5 - 4.0s (Field Adjustable)", valueHi: "2.5 - 4.0s (समायोज्य)", standard: "RDSO LC Norms" },
      { parameterEn: "Counterbalance Mechanism", parameterHi: "काउंटरबैलेंस प्रकार", valueEn: "Dual helical high-tensile spring pack", valueHi: "डुअल हाई-टेंसिल हेलीकल स्प्रिंग्स", standard: "DIN 2095" },
      { parameterEn: "Operating Temperature", parameterHi: "कार्यकारी तापमान", valueEn: "-25°C to +70°C ambient", valueHi: "-25°C से +70°C", standard: "IEC 60068" },
      { parameterEn: "Emergency Manual Torque", parameterHi: "मैनुअल रिलीज़ टॉर्क", valueEn: "< 5.0 Nm manual effort", valueHi: "< 5.0 Nm आसान प्रयास", standard: "ISO 13849" }
    ],
    caseStudies: [
      {
        titleEn: "High-Traffic Suburban Crossing",
        titleHi: "व्यस्त उपनगरीय लेवल क्रॉसिंग",
        siteEn: "Northern Railway Division (LC-42)",
        siteHi: "उत्तर रेलवे डिवीजन (LC-42)",
        descEn: "Continuous operation with 480 daily train and vehicular crossing cycles with zero gravity drop failures over 36 months.",
        descHi: "36 महीनों में 480 दैनिक ट्रेन और वाहन क्रॉसिंग के साथ शून्य विफलता रिकॉर्ड।",
        metric: "100% Availability Verified"
      },
      {
        titleEn: "Heavy Coastal Freight Corridor",
        titleHi: "तटीय मालगाड़ी कॉरिडोर",
        siteEn: "Adani Mundra Rail Siding",
        siteHi: "मुंद्रा पोर्ट रेल साइडिंग",
        descEn: "Withstood high saline sea air and heavy truck traffic without clutch slippage or spring fatigue.",
        descHi: "खारे समुद्री वातावरण और भारी डंपर ट्रकों के बीच बिना किसी खराबी के निरंतर सेवा।",
        metric: "Zero Corrosion Defects"
      },
      {
        titleEn: "Automated Depot Gate Access",
        titleHi: "स्वचालित डिपो गेट एक्सेस",
        siteEn: "Vande Bharat Maintenance Yard",
        siteHi: "वंदे भारत मेंटेनेंस यार्ड",
        descEn: "Synchronized dual-gate interlock controlling electric locomotive movement with optical feedback.",
        descHi: "इलेक्ट्रिक लोकोमोटिव आवागमन हेतु सिंक्रनाइज़्ड डुअल-गेट इंटरलॉक।",
        metric: "SIL-2 Interlock Certified"
      }
    ],
    relatedSublinks: [
      { titleEn: "Obstacle Detection Integration", titleHi: "बाधा पहचान एकीकरण", href: "/products/railway-barrier/obstacle-detection", tag: "RADAR SENSING" },
      { titleEn: "Power Backup & Manual Override", titleHi: "पावर बैकअप एवं मैनुअल", href: "/products/railway-barrier/power-backup", tag: "24V AUXILIARY" },
      { titleEn: "Weatherproof Enclosure", titleHi: "वेदरप्रूफ एनक्लोजर", href: "/products/railway-barrier/weatherproof-enclosure", tag: "IP66 HOUSING" }
    ]
  },

  "obstacle-detection": {
    slug: "obstacle-detection",
    subCategoryTitleEn: "Obstacle Detection Integration",
    subCategoryTitleHi: "बाधा पहचान एकीकरण",
    badgeEn: "SAFETY SENSING • RADAR & ACTIVE IR CURTAIN",
    badgeHi: "सुरक्षा सेंसिंग • रडार एवं एक्टिव IR कर्टेन",
    heroHeadlineEn: "360-Degree Sensory Coverage Preventing Vehicle Trapping",
    heroHeadlineHi: "360-डिग्री सेंसर कवरेज जो वाहनों को बीच में फंसने से रोकता है",
    heroSubtitleEn: "Multi-layered sensor synchronization combining 24GHz microwave radar, dual inductive road loops, and active infrared safety curtains to protect pedestrians and vehicles.",
    heroSubtitleHi: "पैदल यात्रियों और वाहनों की सुरक्षा के लिए 24GHz माइक्रोवेव रडार, डुअल इंडक्टिव रोड लूप और एक्टिव इन्फ्रारेड सेफ्टी कर्टेन का बहुस्तरीय एकीकरण।",
    bannerImage: "/images/obstacle_detection.jpg",
    secondaryBannerImage: "/images/crash_barrier_perimeter.jpg",
    fieldBannerImage: "/images/road_blocker_barrier.jpg",
    stats: [
      { value: "< 25ms", labelEn: "Obstacle Reaction Latency", labelHi: "बाधा प्रतिक्रिया समय", subEn: "Instant motor direction reversal", subHi: "तात्कालिक मोटर रिवर्सल" },
      { value: "24 GHz", labelEn: "Frequency Modulated Radar", labelHi: "माइक्रोवेव रडार फ्रीक्वेंसी", subEn: "Tracks stationary & moving vehicles", subHi: "स्थिर एवं गतिशील वाहनों की ट्रैकिंग" },
      { value: "Dual", labelEn: "Inductive Loop Channels", labelHi: "ड्यूल इंडक्टिव लूप चैनल्स", subEn: "Auto-tuning road pavement sensors", subHi: "सड़क के नीचे ऑटो-ट्यूनिंग लूप्स" },
      { value: "IP67", labelEn: "Weatherproof Sensor Rating", labelHi: "ऑप्टिकल सेंसर वेदरप्रूफ रेटिंग", subEn: "Impervious to heavy rain & dust", subHi: "भारी बारिश एवं धूल से अप्रभावित" }
    ],
    deepDiveTitleEn: "Multi-Sensory Redundancy Across the Road-Rail Interface",
    deepDiveTitleHi: "सड़क-रेलवे इंटरफेस पर बहु-स्तरीय सेंसर रिडंडेंसी",
    deepDiveParasEn: [
      "In high-density traffic intersections, motorists frequently misjudge barrier closure intervals, resulting in trapped vehicles across the rail corridor. The GLOBAL Obstacle Detection suite eliminates this danger through synchronous active sensing.",
      "A 24GHz FMCW microwave radar scans the entire road crossing grid, reporting stationary vehicle positions regardless of monsoon deluges, thick fog, or direct blinding sunlight.",
      "Complementing the radar, active infrared multi-beam columns create an invisible perimeter curtain, while the brushless motor driver monitors armature current fluctuations to execute instant auto-reversal upon soft physical contact in under 25 milliseconds."
    ],
    deepDiveParasHi: [
      "उच्च-घनत्व वाले चौराहों पर वाहन चालक अक्सर बैरियर बंद होने के समय का गलत अनुमान लगा लेते हैं, जिससे ट्रैक पर वाहन फंसने का जोखिम रहता है। ग्लोबल बाधा पहचान सूट सक्रिय सेंसिंग के माध्यम से इस खतरे को समाप्त करता है।",
      "24GHz माइक्रोवेव रडार पूरे क्रॉसिंग क्षेत्र को स्कैन करता है और भारी बारिश, कोहरे या तेज धूप में भी खड़े वाहनों की सटीक जानकारी देता है।",
      "इसके साथ ही, मल्टी-बीम इन्फ्रारेड कर्टेन और मोटर का करंट-सेंसिंग एल्गोरिद्म किसी भी संपर्क पर 25 मिलीसेकंड के भीतर बूम को तुरंत ऊपर उठा देते हैं।"
    ],
    highlights: [
      {
        badge: "24GHZ RADAR",
        titleEn: "FMCW 24GHz Microwave Radar Column",
        titleHi: "24GHz माइक्रोवेव रडार कॉलम",
        descEn: "Non-intrusive overhead radar detects both moving and stationary vehicles up to 25 meters across multi-lane tracks.",
        descHi: "मल्टी-लेन ट्रैक पर 25 मीटर तक स्थिर और गतिशील वाहनों की सटीक ट्रैकिंग।"
      },
      {
        badge: "LOOP SENSING",
        titleEn: "Sub-Pavement Dual Inductive Loops",
        titleHi: "सड़क के नीचे डुअल इंडक्टिव लूप्स",
        descEn: "Interlocks with barrier logic to prevent boom descent whenever a vehicle chassis is positioned over crossing tracks.",
        descHi: "ट्रैक क्षेत्र में वाहन मौजूद होने पर बैरियर को नीचे गिरने से रोकता है।"
      },
      {
        badge: "TORQUE SENSE",
        titleEn: "High-Speed Microsecond Torque Auto-Reverse",
        titleHi: "माइक्रोसेकंड टॉर्क ऑटो-रिवर्स",
        descEn: "Brushless drive continuously monitors motor stator current, executing instantaneous lift if gentle obstacle contact occurs.",
        descHi: "मोटर करंट में हल्के बदलाव को भांपकर बूम को तुरंत ऊपर उठा देता है।"
      }
    ],
    specsTable: [
      { parameterEn: "Radar Detection Range", parameterHi: "रडार डिटेक्शन रेंज", valueEn: "0.5m to 25.0m configurable zone", valueHi: "0.5m से 25.0m कॉन्फ़िगर करने योग्य", standard: "EN 300440" },
      { parameterEn: "Response Time", parameterHi: "प्रतिक्रिया समय", valueEn: "< 25 milliseconds to reverse drive", valueHi: "< 25 मिलीसेकंड", standard: "ISO 13849-1" },
      { parameterEn: "Optical Sensor Ingress", parameterHi: "ऑप्टिकल सेंसर सुरक्षा", valueEn: "IP67 hermetically sealed casing", valueHi: "IP67 वाटरप्रूफ सील", standard: "IEC 60529" },
      { parameterEn: "Loop Tuning Inductance", parameterHi: "लूप ट्यूनिंग इंडक्टेंस", valueEn: "20 µH to 1000 µH automatic tuning", valueHi: "20 µH से 1000 µH ऑटो-ट्यून", standard: "NEMA TS2" }
    ],
    caseStudies: [
      {
        titleEn: "Quad-Gate Level Crossing",
        titleHi: "क्वाड-गेट लेवल क्रॉसिंग (LC-18)",
        siteEn: "Southern Railway Mainline",
        siteHi: "दक्षिण रेलवे मेनलाइन",
        descEn: "Zero trapped vehicle incidents recorded over 24 months across 4-lane busy highway crossing.",
        descHi: "4-लेन व्यस्त हाईवे क्रॉसिंग पर 24 महीनों में शून्य वाहन फंसने की घटना।",
        metric: "Zero Trapped Incidents"
      },
      {
        titleEn: "Industrial Steel Plant Ingress",
        titleHi: "स्टील प्लांट भारी वाहन इनग्रेस",
        siteEn: "Tata Steel Kalinganagar",
        siteHi: "टाटा स्टील कलिंगानगर",
        descEn: "Safely coordinated 100-ton slag carrier crossings with automatic optical safety interlocking.",
        descHi: "100-टन वजनी वाहनों के आवागमन का सुरक्षित ऑप्टिकल इंटरलॉकिंग समन्वय।",
        metric: "100% Damage Free"
      }
    ],
    relatedSublinks: [
      { titleEn: "Fail-Safe Boom Mechanism", titleHi: "फेल-सेफ बूम मैकेनिज्म", href: "/products/railway-barrier/fail-safe-boom", tag: "CORE DRIVE" },
      { titleEn: "Weatherproof Enclosure", titleHi: "वेदरप्रूफ एनक्लोजर", href: "/products/railway-barrier/weatherproof-enclosure", tag: "HOUSING" }
    ]
  },

  "power-backup": {
    slug: "power-backup",
    subCategoryTitleEn: "Power Backup & Manual Override",
    subCategoryTitleHi: "पावर बैकअप एवं मैनुअल ओवरराइड",
    badgeEn: "CONTINUOUS AVAILABILITY • 24V AUXILIARY UPS",
    badgeHi: "निरंतर उपलब्धता • 24V सहायक UPS",
    heroHeadlineEn: "Zero Blackout Downtime with Smart 24V DC Battery Integration",
    heroHeadlineHi: "स्मार्ट 24V डीसी बैटरी बैकअप के साथ शून्य ब्लैकआउट डाउनटाइम",
    heroSubtitleEn: "Intelligent microprocessor float charging and seamless online DC power switching keeping railway level crossings operational through prolonged power outages.",
    heroSubtitleHi: "लंबी बिजली कटौती के दौरान भी रेलवे लेवल क्रॉसिंग को चालू रखने के लिए इंटेलिजेंट माइक्रोप्रोसेसर फ्लोट चार्जिंग और सीमलेस ऑनलाइन डीसी पावर स्विचिंग।",
    bannerImage: "/images/power_backup.jpg",
    secondaryBannerImage: "/images/signalling_relay_room.jpg",
    fieldBannerImage: "/images/power_distribution_eld.jpg",
    stats: [
      { value: "500+", labelEn: "Full Battery Duty Cycles", labelHi: "बैटरी पर पूर्ण ऑपरेशंस", subEn: "Deep-cycle VRLA AGM cells", subHi: "डीप-साइकिल VRLA बैटरी" },
      { value: "0 sec", labelEn: "Mains Switchover Delay", labelHi: "शून्य स्विचओवर समय", subEn: "Seamless online DC rail", subHi: "शून्य मिलीसेकंड विलंब" },
      { value: "3-Stage", labelEn: "Smart Float Charger", labelHi: "स्मार्ट 3-स्टेज चार्जर", subEn: "Extends battery life up to 5 yrs", subHi: "बैटरी जीवन 5+ वर्ष तक बढ़ाता है" },
      { value: "Keyed", labelEn: "Mechanical Override", labelHi: "मैकेनिकल की ओवरराइड", subEn: "Effortless manual gate operation", subHi: "आसान मैनुअल गेट संचालन" }
    ],
    deepDiveTitleEn: "Uninterrupted Operation When Grid Power Drops",
    deepDiveTitleHi: "ग्रिड पावर ब्लैकआउट के दौरान भी निर्बाध संचालन",
    deepDiveParasEn: [
      "Remote railway outposts and rural level crossings frequently endure fluctuating grid voltages, brownouts, and extended power cuts. Under these conditions, barriers must never freeze in an intermediate unsafe state.",
      "GLOBAL integrates industrial-grade 24V DC battery modules directly within the weather-sealed cabinet, regulated by an intelligent 3-stage pulse-width modulated (PWM) float charger.",
      "If utility AC mains power fails, the system switches to battery reserve with zero delay. In extreme emergency situations where batteries become fully exhausted, an ergonomic manual release key decouples internal drive gears allowing manual boom locking."
    ],
    deepDiveParasHi: [
      "दूरदराज के रेलवे क्रॉसिंग अक्सर वोल्टेज में उतार-चढ़ाव और लंबी बिजली कटौती का सामना करते हैं। ऐसी स्थितियों में बैरियर कभी भी बीच में असुरक्षित स्थिति में नहीं रुकना चाहिए।",
      "ग्लोबल कैबिनेट के भीतर 24V डीसी बैटरी मॉड्यूल को एकीकृत करता है, जिसे 3-स्टेज स्मार्ट फ्लोट चार्जर द्वारा नियंत्रित किया जाता है।",
      "पावर कट होने पर सिस्टम बिना किसी रुकावट के तुरंत आंतरिक बैटरी पर चलने लगता है। आपातकाल में बैटरी समाप्त होने पर समर्पित मैकेनिकल की के माध्यम से बूम को आसानी से मैनुअल लॉक किया जा सकता है।"
    ],
    highlights: [
      {
        badge: "SMART CHARGER",
        titleEn: "Temperature-Compensated Float Charger",
        titleHi: "तापमान-मुआवजा फ्लोट चार्जर",
        descEn: "Monitors battery temperature in real-time, preventing thermal runaway and extending cell lifespan.",
        descHi: "बैटरी तापमान की निगरानी करके ओवरहीटिंग रोकता है और बैटरी जीवनकाल बढ़ाता है।"
      },
      {
        badge: "MANUAL RELEASE",
        titleEn: "High-Security Mechanical Key Override",
        titleHi: "हाई-सिक्योरिटी मैकेनिकल की ओवरराइड",
        descEn: "Side-mounted keylock allows station master to manually raise and balance boom in under 10 seconds.",
        descHi: "गेट ऑपरेटर को 10 सेकंड के भीतर बूम को मैनुअल लॉक करने की सुविधा देता है।"
      },
      {
        badge: "TELEMETRY",
        titleEn: "Low-Battery Early Warning Telemetry",
        titleHi: "लो-बैटरी अर्ली वॉर्निंग टेलीमेट्री",
        descEn: "Transmits early SMS and Modbus alerts to station master when battery voltage drops below 22V DC.",
        descHi: "बैटरी कम होने पर कंट्रोल रूम को तुरंत ऑटोमैटिक अलर्ट भेजता है।"
      }
    ],
    specsTable: [
      { parameterEn: "Battery Configuration", parameterHi: "बैटरी कॉन्फ़िगरेशन", valueEn: "Dual 12V 18Ah / 26Ah VRLA AGM maintenance-free", valueHi: "ड्यूल 12V 18Ah / 26Ah VRLA AGM", standard: "IEC 60896" },
      { parameterEn: "Endurance Capacity", parameterHi: "बैकअप क्षमता", valueEn: "Up to 500 complete open/close cycles", valueHi: "500 पूर्ण ऑपरेशंस तक", standard: "IEEE 1184" },
      { parameterEn: "Recharge Time", parameterHi: "चार्जिंग समय", valueEn: "< 4.0 hours to 90% capacity", valueHi: "< 4 घंटे में 90% चार्ज", standard: "DIN 41773" },
      { parameterEn: "Manual Override Effort", parameterHi: "मैनुअल प्रयास", valueEn: "< 5.0 Nm torque on release key", valueHi: "< 5.0 Nm टॉर्क", standard: "ISO 13849" }
    ],
    caseStudies: [
      {
        titleEn: "Rural Monsoonal Outpost",
        titleHi: "ग्रामीण लेवल क्रॉसिंग (LC-89)",
        siteEn: "North Western Railway",
        siteHi: "उत्तर पश्चिम रेलवे",
        descEn: "Maintained continuous crossing operations through an 18-hour grid blackout with zero traffic disruption.",
        descHi: "18 घंटे की लंबी बिजली कटौती के दौरान भी बिना किसी रुकावट के सफल संचालन।",
        metric: "18h Blackout Resilience"
      }
    ],
    relatedSublinks: [
      { titleEn: "Railway Barrier System", titleHi: "रेलवे बैरियर सिस्टम", href: "/products/railway-barrier", tag: "MAIN PRODUCT" },
      { titleEn: "Weatherproof Enclosure", titleHi: "वेदरप्रूफ एनक्लोजर", href: "/products/railway-barrier/weatherproof-enclosure", tag: "HOUSING" }
    ]
  },

  "weatherproof-enclosure": {
    slug: "weatherproof-enclosure",
    subCategoryTitleEn: "Weatherproof Industrial Enclosure",
    subCategoryTitleHi: "वेदरप्रूफ औद्योगिक एनक्लोजर",
    badgeEn: "MECHANICAL PROTECTION • IP66 & IK10 CERTIFIED",
    badgeHi: "मैकेनिकल प्रोटेक्शन • IP66 एवं IK10 प्रमाणित",
    heroHeadlineEn: "IP66 Dual-Sealed Steel Housing Built for Hostile Field Environments",
    heroHeadlineHi: "IP66 डुअल-सील स्टील हाउसिंग जो कठिनतम वातावरण में टिकती है",
    heroSubtitleEn: "2.5mm cold-rolled heavy gauge structural steel housing with electrophoretic anti-corrosion priming, continuous EPDM gaskets, and thermostatic anti-condensation heaters.",
    heroSubtitleHi: "2.5 मिमी भारी स्टील संरचना, इलेक्ट्रोफोरेटिक एंटी-रस्ट प्राइमर, निरंतर EPDM गैसकेट सील और थर्मोस्टेटिक हीटर के साथ निर्मित मजबूत कैबिनेट।",
    bannerImage: "/images/weatherproof_enclosure.jpg",
    secondaryBannerImage: "/images/bollards_perimeter.jpg",
    fieldBannerImage: "/images/fail_safe_boom.jpg",
    stats: [
      { value: "IP66", labelEn: "Ingress Protection Grade", labelHi: "इनग्रेस प्रोटेक्शन रेटिंग", subEn: "Dust-tight & high-pressure water jet proof", subHi: "डस्ट-टाइट एवं वाटर-जेट प्रूफ" },
      { value: "IK10", labelEn: "Mechanical Impact Rating", labelHi: "इम्पैक्ट रेजिस्टेंस IK10", subEn: "Resists 20 Joules direct vandalism", subHi: "20 जूल प्रत्यक्ष आघात प्रतिरोधी" },
      { value: "2.5 mm", labelEn: "Cold Rolled Steel Gauge", labelHi: "स्टील शीट की मोटाई", subEn: "Laser-cut CNC welded structure", subHi: "लेजर-कट CNC रोबोटिक वेल्डेड" },
      { value: "1000h", labelEn: "ASTM B117 Salt Fog Tested", labelHi: "सॉल्ट फॉग टेस्टेड", subEn: "Dual-coat marine thermoset finish", subHi: "मरीन ग्रेड पाउडर कोटिंग" }
    ],
    deepDiveTitleEn: "Maximum Protection Against Coastal Salinity, Dust, and Water Ingress",
    deepDiveTitleHi: "तटीय खारे पानी, धूल और पानी के प्रवेश से पूर्ण सुरक्षा",
    deepDiveParasEn: [
      "Level crossing barrier enclosures stand directly in unfiltered outdoor elements for decades: driving monsoon downpours, coastal salt sprays, extreme summer heat up to 55°C, and freezing winter frost.",
      "GLOBAL enclosures are crafted from 2.5mm heavy-gauge cold-rolled carbon steel (or optional 304/316 stainless steel for offshore sidings), undergoing complete zinc phosphate pre-treatment and electrophoretic coating before receiving a high-bake architectural polyester finish.",
      "Continuous automotive-grade EPDM synthetic rubber gaskets seal all access hatches and cable entry glands, while internal thermostatically regulated anti-condensation heaters keep internal electronics dry."
    ],
    deepDiveParasHi: [
      "लेवल क्रॉसिंग बैरियर एनक्लोजर दशकों तक खुले वातावरण में खड़े रहते हैं: भारी बारिश, तटीय खारा पानी, 55°C तक भीषण गर्मी और कड़ाके की ठंड।",
      "ग्लोबल एनक्लोजर 2.5 मिमी मजबूत स्टील से निर्मित हैं जिन पर जिंक फॉस्फेट प्राइमर और हाई-बेक पॉलिएस्टर पाउडर कोटिंग की जाती है।",
      "सतत EPDM गैसकेट सील पानी और धूल को अंदर जाने से रोकती है, जबकि आंतरिक थर्मोस्टेटिक हीटर इलेक्ट्रॉनिक्स में नमी जमने नहीं देते।"
    ],
    highlights: [
      {
        badge: "EPDM GASKET",
        titleEn: "Continuous Seamless EPDM Perimeter Seal",
        titleHi: "सतत सीमलेस EPDM गैसकेट सील",
        descEn: "Maintains elasticity across -30°C to +80°C, ensuring IP66 water-jet proofing remains intact over 15+ years.",
        descHi: "धूप और बारिश में 15+ वर्षों तक अपनी लोच और वाटरप्रूफिंग बनाए रखती है।"
      },
      {
        badge: "ANTI-RUST",
        titleEn: "Multi-Stage Cathodic Electrocoating",
        titleHi: "मल्टी-स्टेज कैथोडिक इलेक्ट्रोकोट प्राइमर",
        descEn: "Complete dip passivation prevents underfilm corrosion creeping even if exterior paint is chipped.",
        descHi: "खरोंच आने पर भी अंदरूनी स्टील पर जंग लगने से पूरी तरह बचाती है।"
      },
      {
        badge: "ANTI-CONDENSATION",
        titleEn: "Thermostatic Anti-Condensation Heating",
        titleHi: "थर्मोस्टैटिक एंटी-कंडेनसेशन हीटर",
        descEn: "Automatically turns on when internal humidity or temperature nears the ambient dew point.",
        descHi: "नमी बढ़ने पर स्वचालित रूप से चालू होकर आंतरिक इलेक्ट्रॉनिक्स को सूखा रखता है।"
      }
    ],
    specsTable: [
      { parameterEn: "Housing Material", parameterHi: "हाउसिंग सामग्री", valueEn: "2.5mm CRCA Steel / 304 Stainless Steel", valueHi: "2.5mm CRCA स्टील / SS 304 विकल्प", standard: "IS 513" },
      { parameterEn: "Ingress Protection", parameterHi: "सुरक्षा श्रेणी", valueEn: "IP66 dust-tight & heavy water jets", valueHi: "IP66 डस्ट-टाइट एवं वाटर-जेट प्रूफ", standard: "IEC 60529" },
      { parameterEn: "Impact Resistance", parameterHi: "इम्पैक्ट रेटिंग", valueEn: "IK10 (20 Joules mechanical impact)", valueHi: "IK10 (20 जूल इम्पैक्ट प्रतिरोधी)", standard: "IEC 62262" },
      { parameterEn: "Salt Spray Corrosion", parameterHi: "सॉल्ट स्प्रे टेस्ट", valueEn: "1000 hours ASTM B117 salt fog endurance", valueHi: "1000 घंटे सॉल्ट स्प्रे टेस्टेड", standard: "ASTM B117" }
    ],
    caseStudies: [
      {
        titleEn: "Coastal Saline Port Crossing",
        titleHi: "तटीय खारा पोर्ट कॉरिडोर",
        siteEn: "Paradip Port Rail Siding",
        siteHi: "पारादीप पोर्ट रेल साइडिंग",
        descEn: "Zero rust or moisture ingress recorded after 4 years of continuous exposure to marine winds and monsoon cyclones.",
        descHi: "समुद्री हवाओं और चक्रवातों के बीच 4 वर्षों में शून्य जंग या नमी का प्रवेश।",
        metric: "Zero Corrosion Verified"
      }
    ],
    relatedSublinks: [
      { titleEn: "Railway Barrier System", titleHi: "रेलवे बैरियर सिस्टम", href: "/products/railway-barrier", tag: "MAIN SYSTEM" },
      { titleEn: "Obstacle Detection Integration", titleHi: "बाधा पहचान", href: "/products/railway-barrier/obstacle-detection", tag: "RADAR SENSORS" }
    ]
  }
};

// ============================================================================
// 2. DIGITAL EARTH LEAKAGE DETECTOR FAMILY DATA
// ============================================================================
export const ELD_SUBPAGES: Record<string, EarthLeakageSubpageProps> = {
  "continuous-insulation": {
    slug: "continuous-insulation",
    subCategoryTitleEn: "Continuous Insulation Monitoring",
    subCategoryTitleHi: "निरंतर इंसुलेशन निगरानी (Insulation Monitoring)",
    badgeEn: "PREDICTIVE MAINTENANCE • REAL-TIME OHMIC DIAGNOSTICS",
    badgeHi: "प्रेडिक्टिव मेंटेनेंस • रीयल-टाइम इंसुलेशन डायग्नोस्टिक्स",
    heroHeadlineEn: "Online Insulation Resistance Tracking Catching Micro-Faults Early",
    heroHeadlineHi: "ऑनलाइन इंसुलेशन प्रतिरोध ट्रैकिंग जो प्रारंभिक फॉल्ट्स को तुरंत पकड़ती है",
    heroSubtitleEn: "Proactive online insulation impedance monitoring detecting minute cable degradation, moisture ingress, and motor stator breakdown before destructive short circuits and electrical fires ignite.",
    heroSubtitleHi: "विनाशकारी शॉर्ट सर्किट और आग लगने से पहले ही केबल के क्षरण, नमी और मोटर वाइंडिंग की खराबी का पता लगाने वाली उन्नत ऑनलाइन इंसुलेशन निगरानी प्रणाली।",
    bannerImage: "/images/continuous_insulation.jpg",
    secondaryBannerImage: "/images/power_distribution_eld.jpg",
    fieldBannerImage: "/images/earth_leakage_detector_hero.jpg",
    stats: [
      { value: "24/7", labelEn: "Online Non-Intrusive Monitoring", labelHi: "24/7 ऑनलाइन निगरानी", subEn: "No de-energization needed", subHi: "बिजली बंद किए बिना निरंतर जांच" },
      { value: "1kΩ - 10MΩ", labelEn: "Insulation Measurement Range", labelHi: "इंसुलेशन मापन सीमा", subEn: "High-precision ohmic resolution", subHi: "अत्यधिक सटीक रेजोल्यूशन" },
      { value: "Dual", labelEn: "Warning & Trip Relays", labelHi: "प्री-अलार्म एवं ट्रिप रिले", subEn: "Separate 50% warning threshold", subHi: "50% क्षरण पर प्रारंभिक चेतावनी" },
      { value: "3.5 kV", labelEn: "Galvanic Isolation Surge Rating", labelHi: "गैल्वेनिक आइसोलेशन रेटिंग", subEn: "Protects sensitive telemetry", subHi: "सर्ज और स्पाइक्स से पूर्ण सुरक्षा" }
    ],
    deepDiveTitleEn: "Catching Insulation Breakdown Long Before Circuit Breakers Trip",
    deepDiveTitleHi: "सर्किट ब्रेकर ट्रिप होने से बहुत पहले ही इंसुलेशन खराबी की पहचान",
    deepDiveParasEn: [
      "Traditional circuit breakers only trip after a catastrophic phase-to-ground fault has already occurred — resulting in equipment destruction, fire hazards, and unplanned plant blackouts.",
      "GLOBAL Continuous Insulation Monitoring continuously calculates ohmic resistance to earth in energized networks. By superimposing a calibrated low-frequency diagnostic pulse, it evaluates cable insulation without disconnecting loads.",
      "When insulation resistance drops below 50% of the safety baseline due to humidity or aging, the pre-alarm warning contact activates, giving maintenance engineers ample time to rectify the issue during planned maintenance shifts."
    ],
    deepDiveParasHi: [
      "पारंपरिक सर्किट ब्रेकर तभी ट्रिप होते हैं जब गंभीर फॉल्ट पहले ही उपकरण को नुकसान पहुंचा चुका होता है और शटडाउन हो चुका होता है।",
      "ग्लोबल निरंतर इंसुलेशन निगरानी बिजली बंद किए बिना चालू नेटवर्क में इंसुलेशन प्रतिरोध की सटीक गणना करती है।",
      "नमी या पुरानी केबल के कारण जब इंसुलेशन 50% कमजोर होता है, तो प्री-अलार्म रिले तुरंत चेतावनी दे देता है, जिससे सामान्य शिफ्ट में ही मरम्मत संभव हो जाती है।"
    ],
    features: [
      {
        badge: "PREDICTIVE ALARM",
        titleEn: "Early Warning Pre-Alarm Potential-Free Relay",
        titleHi: "अर्ली वॉर्निंग प्री-अलार्म पोटेंशियल-फ्री रिले",
        descEn: "Fires distinct warning contacts without disconnecting critical production loads.",
        descHi: "महत्वपूर्ण लोड को बंद किए बिना वॉर्निंग लेवल पार होने पर अलग से अलार्म सक्रिय करता है।"
      },
      {
        badge: "HIGH ISOLATION",
        titleEn: "3.5kV Galvanic Optical & Magnetic Isolation",
        titleHi: "3.5kV गैल्वेनिक ऑप्टिकल एवं मैग्नेटिक आइसोलेशन",
        descEn: "Protects internal 32-bit DSP microprocessors from severe industrial high-voltage surges.",
        descHi: "आंतरिक 32-बिट डीएसपी प्रोसेसर को लाइन सर्ज से पूरी तरह सुरक्षित रखता है।"
      },
      {
        badge: "HISTORICAL LOG",
        titleEn: "Non-Volatile Trending History Memory",
        titleHi: "नॉन-वोलेटाइल इंसुलेशन ट्रेंडिंग मेमोरी",
        descEn: "Logs insulation degradation trends allowing engineering teams to correlate seasonal humidity effects.",
        descHi: "इंसुलेशन क्षरण के ऐतिहासिक डेटा को सुरक्षित रखता है जिससे मौसमी नमी के प्रभावों का विश्लेषण किया जा सके।"
      }
    ],
    specsTable: [
      { parameterEn: "Measurement Range", parameterHi: "मापन रेंज", valueEn: "1 kΩ to 10 MΩ continuous tracking", valueHi: "1 kΩ से 10 MΩ निरंतर मापन", standard: "IEC 61557-8" },
      { parameterEn: "Pre-Alarm Setting", parameterHi: "प्री-अलार्म सेटिंग", valueEn: "50% to 90% of trip threshold", valueHi: "ट्रिप थ्रेसहोल्ड का 50% से 90%", standard: "IEC 60364-4-41" },
      { parameterEn: "Auxiliary Supply", parameterHi: "सहायक सप्लाई", valueEn: "85 - 265V AC / DC Universal", valueHi: "85 - 265V AC / DC यूनिवर्सल", standard: "IEC 61010" },
      { parameterEn: "Relay Contact Rating", parameterHi: "रिले कॉन्टैक्ट रेटिंग", valueEn: "5A @ 250V AC / 30V DC Resistive", valueHi: "5A @ 250V AC / 30V DC", standard: "IEC 60947-5-1" }
    ],
    cbctSelectionTable: [
      { cbctModel: "CBCT-35", windowDia: "35 mm", cableMax: "Up to 3x50 mm² + E", primaryRated: "Up to 125 A" },
      { cbctModel: "CBCT-70", windowDia: "70 mm", cableMax: "Up to 3x185 mm² + E", primaryRated: "Up to 250 A" },
      { cbctModel: "CBCT-120", windowDia: "120 mm", cableMax: "Up to 3x300 mm² + E", primaryRated: "Up to 630 A" },
      { cbctModel: "CBCT-210", windowDia: "210 mm", cableMax: "Busbar / Multi-Cable", primaryRated: "Up to 1600 A" }
    ],
    relatedSublinks: [
      { titleEn: "True RMS Current Measurement", titleHi: "ट्रू RMS करंट मापन", href: "/products/earth-leakage/true-rms", tag: "HARMONIC FILTER" },
      { titleEn: "Real-Time Digital Display", titleHi: "डिजिटल डिस्प्ले", href: "/products/earth-leakage/realtime-display", tag: "OLED METERS" },
      { titleEn: "Adjustable Trip Thresholds", titleHi: "एडजस्टेबल ट्रिप थ्रेसहोल्ड", href: "/products/earth-leakage/adjustable-thresholds", tag: "DISCRIMINATION" }
    ]
  },

  "true-rms": {
    slug: "true-rms",
    subCategoryTitleEn: "True RMS Current Measurement",
    subCategoryTitleHi: "ट्रू RMS करंट मापन (True RMS)",
    badgeEn: "HARMONIC IMMUNITY • 32-BIT DIGITAL SIGNAL PROCESSING",
    badgeHi: "हार्मोनिक इम्यूनिटी • 32-बिट डिजिटल सिग्नल प्रोसेसिंग",
    heroHeadlineEn: "Mathematical True RMS Residual Current Sensing",
    heroHeadlineHi: "सटीक गणितीय ट्रू RMS अवशिष्ट करंट सेंसिंग",
    heroSubtitleEn: "High-speed DSP measurement engine computing true mathematical RMS energy across fundamental and distorted harmonic waveforms, eliminating nuisance tripping in variable frequency drive (VFD) environments.",
    heroSubtitleHi: "हाई-स्पीड डीएसपी इंजन जो हार्मोनिक विकृति वाले वातावरण में भी वास्तविक गणितीय ट्रू RMS ऊर्जा की गणना करता है और अनावश्यक फॉल्स ट्रिपिंग को समाप्त करता है।",
    bannerImage: "/images/earth_leakage_detector_hero.jpg",
    secondaryBannerImage: "/images/continuous_insulation.jpg",
    fieldBannerImage: "/images/power_distribution_eld.jpg",
    stats: [
      { value: "True RMS", labelEn: "Harmonic Filtered Computation", labelHi: "हार्मोनिक-फिल्टर्ड मापन", subEn: "Active mathematical RMS integration", subHi: "सटीक गणितीय RMS गणना" },
      { value: "31st", labelEn: "Harmonic Frequency Sampling", labelHi: "31वें हार्मोनिक तक सैंपलिंग", subEn: "Handles VFD & UPS switching", subHi: "VFD और इन्वर्टर नॉइज़ को फिल्टर करता है" },
      { value: "< 1%", labelEn: "Linearity Error Accuracy", labelHi: "मापन रैखिकता सटीकता", subEn: "Class 1.0 metering grade", subHi: "क्लास 1.0 मीटरिंग ग्रेड" },
      { value: "3.2 kHz", labelEn: "DSP Continuous Sample Rate", labelHi: "DSP सैंपलिंग फ्रीक्वेंसी", subEn: "Zero dead-band detection", subHi: "शून्य डेड-बैंड डिटेक्शन" }
    ],
    deepDiveTitleEn: "Eliminating Costly Nuisance Tripping in Inverter-Heavy Networks",
    deepDiveTitleHi: "इन्वर्टर और वीएफडी युक्त नेटवर्क में फॉल्स ट्रिपिंग का पूर्ण निवारण",
    deepDiveParasEn: [
      "Modern industrial networks and railway signaling systems contain extensive non-linear electronics including Variable Frequency Drives (VFDs), solar inverters, and switching power supplies (SMPS). Standard average-sensing relays mistakenly interpret high-frequency parasitic spikes as earth faults.",
      "GLOBAL Digital Earth Leakage Detectors utilize high-speed 32-bit DSP processors sampling at 3.2 kHz across both positive and negative half-cycles. By applying mathematical root-mean-square calculation, it measures genuine fault energy.",
      "Selectable low-pass filters attenuate motor PWM carrier frequencies above 400 Hz according to IEC 60947-2 Annex M, delivering dependable protection without nuisance factory interruptions."
    ],
    deepDiveParasHi: [
      "आधुनिक औद्योगिक नेटवर्क में वेरिएबल फ्रीक्वेंसी ड्राइव (VFD), सोलर इन्वर्टर और एसएमपीएस होते हैं। पारंपरिक रिले हाई-फ्रीक्वेंसी स्पाइक्स को फॉल्ट मानकर गलत ट्रिप कर देते हैं।",
      "ग्लोबल डिजिटल ईएलडी हाई-स्पीड 32-बिट डीएसपी प्रोसेसर का उपयोग करता है जो वेवफॉर्म का निरंतर विश्लेषण करके वास्तविक गणितीय ट्रू RMS ऊर्जा की गणना करता है।",
      "प्रोग्रामेबल लो-पास फिल्टर मोटर पीडब्लूएम स्विचिंग नॉइज़ को फिल्टर करते हैं, जिससे गलत ट्रिपिंग पूरी तरह समाप्त हो जाती है।"
    ],
    features: [
      {
        badge: "DSP ENGINE",
        titleEn: "16-Bit High-Speed ADC Sampling Engine",
        titleHi: "16-बिट हाई-स्पीड ADC सैंपलिंग",
        descEn: "Samples full waveform across positive and negative cycles with zero dead-band.",
        descHi: "शून्य डेड-बैंड के साथ सकारात्मक और नकारात्मक दोनों हाफ-साइकिल में वेवफॉर्म का विश्लेषण।"
      },
      {
        badge: "FILTERING",
        titleEn: "Selectable High-Frequency Inverter Filter",
        titleHi: "चयन करने योग्य हाई-फ्रीक्वेंसी फिल्टर",
        descEn: "Attenuates switching noise from motor PWM drives above 400 Hz according to IEC guidelines.",
        descHi: "आईईसी दिशानिर्देशों के अनुसार 400 हर्ट्ज से ऊपर के मोटर पीडब्लूएम स्विचिंग नॉइज़ को फिल्टर करता है।"
      },
      {
        badge: "WIDE BAND",
        titleEn: "Wide Frequency Bandwidth (40Hz - 1kHz)",
        titleHi: "विस्तृत फ्रीक्वेंसी बैंडविड्थ",
        descEn: "Accurate across railway 16.7Hz / 50Hz and aviation 400Hz distribution networks.",
        descHi: "रेलवे और औद्योगिक 50Hz/60Hz विद्युत वितरण नेटवर्क में समान रूप से सटीक।"
      }
    ],
    specsTable: [
      { parameterEn: "Sampling Frequency", parameterHi: "सैंपलिंग फ्रीक्वेंसी", valueEn: "3.2 kHz per channel simultaneous", valueHi: "3.2 kHz प्रति चैनल", standard: "IEC 61000-4-7" },
      { parameterEn: "Harmonic Rejection", parameterHi: "हार्मोनिक रिजेक्शन", valueEn: "> 40 dB @ 5th & 7th harmonics", valueHi: "> 40 dB @ 5th एवं 7th हार्मोनिक्स", standard: "IEEE 519" },
      { parameterEn: "Crest Factor Tolerance", parameterHi: "क्रेस्ट फैक्टर क्षमता", valueEn: "Up to 5.0 without measurement clipping", valueHi: "5.0 तक क्रेस्ट फैक्टर सपोर्ट", standard: "IEC 60947-2" }
    ],
    cbctSelectionTable: [
      { cbctModel: "CBCT-35", windowDia: "35 mm", cableMax: "Up to 3x50 mm² + E", primaryRated: "Up to 125 A" },
      { cbctModel: "CBCT-70", windowDia: "70 mm", cableMax: "Up to 3x185 mm² + E", primaryRated: "Up to 250 A" },
      { cbctModel: "CBCT-120", windowDia: "120 mm", cableMax: "Up to 3x300 mm² + E", primaryRated: "Up to 630 A" },
      { cbctModel: "CBCT-210", windowDia: "210 mm", cableMax: "Busbar / Multi-Cable", primaryRated: "Up to 1600 A" }
    ],
    relatedSublinks: [
      { titleEn: "Continuous Insulation Monitoring", titleHi: "इंसुलेशन मॉनिटरिंग", href: "/products/earth-leakage/continuous-insulation", tag: "PREDICTIVE" },
      { titleEn: "Real-Time Digital Display", titleHi: "डिजिटल डिस्प्ले", href: "/products/earth-leakage/realtime-display", tag: "LOCAL HUD" }
    ]
  },

  "realtime-display": {
    slug: "realtime-display",
    subCategoryTitleEn: "Real-Time Digital Display & Telemetry",
    subCategoryTitleHi: "रीयल-टाइम डिजिटल डिस्प्ले एवं टेलीमेट्री",
    badgeEn: "LOCAL & SCADA HUD • DAYLIGHT VISIBLE METERS",
    badgeHi: "लोकल एवं SCADA मीटरिंग • हाई-कंट्रास्ट डिस्प्ले",
    heroHeadlineEn: "High-Contrast Digital Metering & Modbus RS-485 Telemetry",
    heroHeadlineHi: "हाई-कंट्रास्ट डिजिटल मीटरिंग एवं मोडबस RS-485 टेलीमेट्री",
    heroSubtitleEn: "Live residual current readouts, dynamic % load bar graphs, non-volatile fault memory, and Modbus-RTU connectivity for seamless integration into plant SCADA systems.",
    heroSubtitleHi: "रीयल-टाइम लीकेज करंट मान, डायनामिक % लोड बार-ग्राफ, नॉन-वोलेटाइल फॉल्ट मेमोरी और प्लांट SCADA के साथ निर्बाध जुड़ाव हेतु मोडबस-RTU कनेक्टिविटी।",
    bannerImage: "/images/power_distribution_eld.jpg",
    secondaryBannerImage: "/images/earth_leakage_detector_hero.jpg",
    fieldBannerImage: "/images/continuous_insulation.jpg",
    stats: [
      { value: "OLED / LED", labelEn: "High-Brightness Display", labelHi: "हाई-ब्राइटनेस डिस्प्ले", subEn: "Daylight readable from 5m", subHi: "5 मीटर दूर से भी स्पष्ट पठनीय" },
      { value: "10-Bar", labelEn: "Dynamic % Leakage Bar Graph", labelHi: "10-बार डायनेमिक ग्राफ", subEn: "Spot rising trends instantly", subHi: "लीकेज वृद्धि को तुरंत देखें" },
      { value: "5 Events", labelEn: "Trip Memory Log", labelHi: "5 ट्रिप इवेंट्स विस्तृत रिकॉर्ड", subEn: "Timestamp, current & duration", subHi: "समय, करंट एवं अवधि दर्ज" },
      { value: "RS-485", labelEn: "Isolated Modbus-RTU Port", labelHi: "आइसोलेटेड मोडबस पोर्ट", subEn: "Live energy SCADA telemetry", subHi: "सेंट्रल SCADA टेलीमेट्री" }
    ],
    deepDiveTitleEn: "Immediate Field Visibility for Rapid Fault Localization",
    deepDiveTitleHi: "त्वरित फॉल्ट निवारण हेतु स्पष्ट स्थानीय दृश्यता",
    deepDiveParasEn: [
      "When an electrical protection relay trips, maintenance crews must know instantly which feeder leaked, what the peak fault magnitude reached, and how long the fault persisted.",
      "The GLOBAL Real-Time Digital Display provides instant local clarity on the switchboard front panel. A 10-segment dynamic LED bar graph shows live leakage as a percentage of the programmed trip limit.",
      "The intuitive 3-button keypad allows quick retrieval of the last 5 trip events from non-volatile memory, displaying the exact timestamp, peak fault current, and trip delay duration even after auxiliary power has been restored."
    ],
    deepDiveParasHi: [
      "विद्युत ट्रिप होने पर मेंटेनेंस इंजीनियरों को तुरंत यह जानने की आवश्यकता होती है कि क्या हुआ, किस फेज में लीकेज हुआ और फॉल्ट करंट कितना था।",
      "ग्लोबल डिजिटल डिस्प्ले पैनल के सामने ही पूरी स्पष्टता प्रदान करता है। डायनामिक 10-सेगमेंट बार ग्राफ सेट ट्रिप सीमा के प्रतिशत के रूप में लाइव लीकेज दिखाता है।",
      "सहज 3-बटन कीपैड पिछले 5 ट्रिप इवेंट्स को तुरंत देखने की अनुमति देता है, जिसमें सटीक समय, फॉल्ट करंट और अवधि दर्ज होती है।"
    ],
    features: [
      {
        badge: "DYNAMIC BAR",
        titleEn: "Dynamic % Residual Load Bar Graph",
        titleHi: "डायनामिक % लोड बार ग्राफ",
        descEn: "10-segment LED bar visualizes rising leakage at a glance from across the electrical room.",
        descHi: "इलेक्ट्रिकल रूम में दूर से ही लीकेज की स्थिति को स्पष्ट रूप से देखने की सुविधा।"
      },
      {
        badge: "EVENT LOG",
        titleEn: "Last 5 Faults Non-Volatile Memory Log",
        titleHi: "अंतिम 5 फॉल्ट्स का विस्तृत रिकॉर्ड",
        descEn: "Retains fault magnitude and trip duration even if auxiliary power is completely disconnected.",
        descHi: "सहायक पावर कट होने पर भी फॉल्ट करंट और समय का विवरण हमेशा सुरक्षित रहता है।"
      },
      {
        badge: "MEMBRANE KEYS",
        titleEn: "Front Membrane Test & Reset Buttons",
        titleHi: "फ्रंट मेम्ब्रेन टेस्ट एवं रीसेट बटन",
        descEn: "Facilitates quick monthly relay operational checks without opening panel doors.",
        descHi: "पैनल का दरवाजा खोले बिना मासिक रिले परीक्षण और तुरंत रीसेट की आसान सुविधा।"
      }
    ],
    specsTable: [
      { parameterEn: "Display Type", parameterHi: "डिस्प्ले प्रकार", valueEn: "High-contrast 4-digit numeric + 10-LED bar", valueHi: "हाई-कंट्रास्ट 4-डिजिट + 10-एलईडी बार", standard: "IEC 60051" },
      { parameterEn: "Telemetry Interface", parameterHi: "टेलीमेट्री इंटरफेस", valueEn: "RS-485 Modbus-RTU 9600-115200 baud", valueHi: "RS-485 मोडबस-RTU", standard: "EIA-485" },
      { parameterEn: "Front Panel Ingress", parameterHi: "फ्रंट पैनल सुरक्षा", valueEn: "IP54 water/dust resistant membrane", valueHi: "IP54 वाटर/डस्ट प्रतिरोधी मेम्ब्रेन", standard: "IEC 60529" }
    ],
    cbctSelectionTable: [
      { cbctModel: "CBCT-35", windowDia: "35 mm", cableMax: "Up to 3x50 mm² + E", primaryRated: "Up to 125 A" },
      { cbctModel: "CBCT-70", windowDia: "70 mm", cableMax: "Up to 3x185 mm² + E", primaryRated: "Up to 250 A" },
      { cbctModel: "CBCT-120", windowDia: "120 mm", cableMax: "Up to 3x300 mm² + E", primaryRated: "Up to 630 A" }
    ],
    relatedSublinks: [
      { titleEn: "Adjustable Trip Thresholds", titleHi: "एडजस्टेबल थ्रेसहोल्ड", href: "/products/earth-leakage/adjustable-thresholds", tag: "SETTINGS" },
      { titleEn: "Continuous Insulation Monitoring", titleHi: "इंसुलेशन मॉनिटरिंग", href: "/products/earth-leakage/continuous-insulation", tag: "DIAGNOSTICS" }
    ]
  },

  "adjustable-thresholds": {
    slug: "adjustable-thresholds",
    subCategoryTitleEn: "Adjustable Trip Thresholds & Discrimination",
    subCategoryTitleHi: "एडजस्टेबल ट्रिप थ्रेसहोल्ड एवं डिस्क्रिमिनेशन",
    badgeEn: "PROTECTION COORDINATION • CASCADED SELECTIVITY",
    badgeHi: "सुरक्षा समन्वय • सेलेक्टिविटी डिस्क्रिमिनेशन",
    heroHeadlineEn: "Multi-Range Sensitivity & Time-Graded Selectivity",
    heroHeadlineHi: "मल्टी-रेंज संवेदनशीलता एवं टाइम-ग्रेडेड सेलेक्टिविटी",
    heroSubtitleEn: "16-step current threshold adjustment (IΔn) and programmable definite time delay (Δt) curves enabling perfect discrimination across electrical switchboards.",
    heroSubtitleHi: "16-स्टेप करंट थ्रेसहोल्ड और प्रोग्रामेबल टाइम डिले जो संपूर्ण पावर डिस्ट्रीब्यूशन नेटवर्क में पूर्ण सेलेक्टिविटी और सुरक्षा समन्वय प्रदान करते हैं।",
    bannerImage: "/images/eld_engineering_lab.jpg",
    secondaryBannerImage: "/images/continuous_insulation.jpg",
    fieldBannerImage: "/images/power_distribution_eld.jpg",
    stats: [
      { value: "10mA - 30A", labelEn: "Wide Current Adjustment", labelHi: "विस्तृत करंट समायोजन", subEn: "16 discrete rotary switch steps", subHi: "16-स्टेप रोटरी स्विच" },
      { value: "0 - 10.0s", labelEn: "Programmable Time Delay", labelHi: "समायोज्य टाइम डिले", subEn: "Definite-time grading curve", subHi: "डेफिनिट-टाइम समन्वय कर्व" },
      { value: "Class A/B", labelEn: "Residual Current Class", labelHi: "RCD सुरक्षा क्लास", subEn: "AC & pulsating DC sensitivity", subHi: "AC एवं पल्सेटिंग DC सेंसिटिविटी" },
      { value: "100%", labelEn: "Cascade Selectivity", labelHi: "100% सेलेक्टिविटी समन्वय", subEn: "Isolate only faulted sub-feeder", subHi: "केवल फॉल्ट वाले फीडर को अलग करता है" }
    ],
    deepDiveTitleEn: "Tailored Protection Cascades for Complex Power Networks",
    deepDiveTitleHi: "जटिल विद्युत वितरण नेटवर्क के लिए अनुकूलित सुरक्षा समन्वय",
    deepDiveParasEn: [
      "In heavy industrial plants, a ground fault occurring on an individual motor branch must never cause the main substation incomer breaker to trip, shutting down the entire plant.",
      "GLOBAL Digital Earth Leakage Detectors incorporate wide-range independent current sensitivity (IΔn) and time delay (Δt) dials. By staging incomers with time delays (e.g. 500ms at 1A) and branch feeders with instantaneous trips (30mA at 0ms), complete discrimination is achieved.",
      "Tamper-proof lockable transparent covers prevent unauthorized adjustments to safety settings by field operators."
    ],
    deepDiveParasHi: [
      "औद्योगिक संयंत्रों में, किसी मोटर पर फॉल्ट होने पर मेन सबस्टेशन इनकमर ब्रेकर कभी ट्रिप नहीं होना चाहिए।",
      "ग्लोबल डिजिटल ईएलडी में स्वतंत्र करंट सेंसिटिविटी और टाइम डिले सेटिंग्स हैं। मेन इनकमर पर टाइम डिले और सब-फीडर पर त्वरित सेटिंग सेट करके पूर्ण समन्वय प्राप्त होता है।",
      "टैम्पर-प्रूफ पारदर्शी कवर फील्ड में सुरक्षा सीमाओं के अनधिकृत बदलाव को रोकता है।"
    ],
    features: [
      {
        badge: "CURRENT STEPS",
        titleEn: "16 Discrete Current Threshold Steps",
        titleHi: "16-स्टेप करंट थ्रेसहोल्ड सेटिंग्स",
        descEn: "Ranging from 30mA for direct human touch safety to 30A for heavy industrial transformer feeds.",
        descHi: "मानव सुरक्षा (30mA) से लेकर भारी ट्रांसफार्मर सुरक्षा (30A) तक सभी के लिए उपयुक्त।"
      },
      {
        badge: "TIME GRADING",
        titleEn: "Definite Time-Graded Delay Curves",
        titleHi: "डेफिनिट टाइम-ग्रेडेड डिले कर्व्स",
        descEn: "Steps from 0.02s to 10.0s allow perfect coordination with upstream Air Circuit Breakers (ACBs).",
        descHi: "0.02s से 10.0s तक के स्टेप्स जो एसीबी और एमसीसीबी ब्रेकर्स के साथ सटीक समन्वय सुनिश्चित करते हैं।"
      },
      {
        badge: "SECURITY",
        titleEn: "Tamper-Proof Lockable Enclosure Cover",
        titleHi: "टैम्पर-प्रूफ लॉक करने योग्य कवर",
        descEn: "Physical wire-sealable clear cover prevents unauthorized field alterations of safety limits.",
        descHi: "पारदर्शी लॉक करने योग्य कवर जो फील्ड में सुरक्षा सीमाओं के अनधिकृत बदलाव को रोकता है।"
      }
    ],
    specsTable: [
      { parameterEn: "Current Steps (IΔn)", parameterHi: "करंट स्टेप्स", valueEn: "30mA, 50mA, 100mA, 300mA, 500mA, 1A, 3A, 5A, 10A, 30A", valueHi: "30mA, 50mA, 100mA, 300mA, 500mA, 1A, 3A, 5A, 10A, 30A", standard: "IEC 60947-2 Annex M" },
      { parameterEn: "Time Delay (Δt)", parameterHi: "टाइम डिले", valueEn: "0.02s, 0.06s, 0.1s, 0.2s, 0.5s, 1.0s, 2.0s, 5.0s, 10.0s", valueHi: "0.02s, 0.06s, 0.1s, 0.2s, 0.5s, 1.0s, 2.0s, 5.0s, 10.0s", standard: "IEC 60364-5-53" }
    ],
    cbctSelectionTable: [
      { cbctModel: "CBCT-35", windowDia: "35 mm", cableMax: "Up to 3x50 mm² + E", primaryRated: "Up to 125 A" },
      { cbctModel: "CBCT-70", windowDia: "70 mm", cableMax: "Up to 3x185 mm² + E", primaryRated: "Up to 250 A" },
      { cbctModel: "CBCT-120", windowDia: "120 mm", cableMax: "Up to 3x300 mm² + E", primaryRated: "Up to 630 A" }
    ],
    relatedSublinks: [
      { titleEn: "Continuous Insulation Monitoring", titleHi: "इंसुलेशन मॉनिटरिंग", href: "/products/earth-leakage/continuous-insulation", tag: "PREDICTIVE" },
      { titleEn: "True RMS Current Measurement", titleHi: "ट्रू RMS मापन", href: "/products/earth-leakage/true-rms", tag: "ACCURACY" }
    ]
  }
};

// ============================================================================
// 3. CAPABILITY FAMILY DATA
// ============================================================================
export const CAPABILITY_SUBPAGES: Record<string, CapabilitySubpageProps> = {
  "fail-safe": {
    slug: "fail-safe",
    subCategoryTitleEn: "Fail-Safe Architecture",
    subCategoryTitleHi: "फेल-सेफ आर्किटेक्चर (Fail-Safe Architecture)",
    badgeEn: "SAFETY INTEGRITY • PREDICTABLE BEHAVIOR",
    badgeHi: "सुरक्षा अखंडता • पूर्वानुमेय व्यवहार",
    heroHeadlineEn: "Engineering Default-to-Safe Logic for Zero Failure Tolerance",
    heroHeadlineHi: "शून्य विफलता सहनशीलता हेतु डिफ़ॉल्ट-टू-सेफ लॉजिक की इंजीनियरिंग",
    heroSubtitleEn: "Methodology ensuring any unexpected electrical failure, signal disruption, or mechanical shock forces the system immediately into a certified safe default state.",
    heroSubtitleHi: "इंजीनियरिंग पद्धति जो सुनिश्चित करती है कि किसी भी घटक विफलता, तार टूटने या बिजली कटौती पर सिस्टम तुरंत अपनी पूर्व-निर्धारित सुरक्षित अवस्था में आ जाए।",
    bannerImage: "/images/fail_safe_boom.jpg",
    secondaryBannerImage: "/images/signalling_relay_room.jpg",
    fieldBannerImage: "/images/boom_barrier_railway.jpg",
    stats: [
      { value: "100%", labelEn: "Default-to-Safe Guarantee", labelHi: "100% सुरक्षित स्थिति गारंटी", subEn: "Gravity & de-energize logic", subHi: "ग्रेविटी एवं डी-एनर्जाइज लॉजिक" },
      { value: "SIL-2", labelEn: "Safety Integrity Rating", labelHi: "कार्यात्मक सुरक्षा रेटिंग", subEn: "CENELEC EN 50129 ready", subHi: "रेलवे सिग्नलिंग मानकों के अनुसार" },
      { value: "Dual", labelEn: "Redundant Channel Verification", labelHi: "ड्यूल चैनल सत्यापन", subEn: "Cross-checking microcontrollers", subHi: "माइक्रोकंट्रोलर क्रॉस-चेक" },
      { value: "< 10ms", labelEn: "Internal Fault Reaction", labelHi: "आंतरिक फॉल्ट प्रतिक्रिया", subEn: "Sub-cycle safety actuation", subHi: "माइक्रोसेकंड फॉल्ट रिस्पॉन्स" }
    ],
    deepDiveTitleEn: "Predictability in Abnormal Conditions",
    deepDiveTitleHi: "असामान्य परिस्थितियों में पूर्वानुमेय सुरक्षा",
    deepDiveParasEn: [
      "In mission-critical infrastructure, an unpredictable response during an emergency is unacceptable. GLOBAL designs all control loops and mechanical drives around proven fail-safe principles.",
      "Whether through gravity-assisted mechanical descent in railway barriers or de-energize-to-trip safety relay outputs in earth leakage detectors, our architectures guarantee that power cuts or broken wires default to safety.",
      "Redundant dual-channel microcontrollers continuously cross-verify sensor readings, executing self-health checks every few milliseconds."
    ],
    deepDiveParasHi: [
      "महत्वपूर्ण बुनियादी ढांचे में आपातकाल के दौरान किसी भी प्रणाली की अप्रत्याशित प्रतिक्रिया अस्वीकार्य है। ग्लोबल सभी कंट्रोल लूप और ड्राइव को प्रमाणित फेल-सेफ सिद्धांतों पर डिजाइन करता है।",
      "चाहे वह रेलवे बैरियर में ग्रेविटी ड्रॉप हो या अर्थ लीकेज डिटेक्टर में डी-एनर्जाइज-टू-ट्रिप रिले आउटपुट, हमारे सिस्टम हमेशा सुरक्षित स्थिति में आते हैं।",
      "रिडंडेंट डुअल-चैनल माइक्रोकंट्रोलर सेंसर रीडिंग का निरंतर सत्यापन करते हैं और हर कुछ मिलीसेकंड में सेल्फ-हेल्थ चेक करते हैं।"
    ],
    pillars: [
      { badge: "GRAVITY", titleEn: "Passive Gravity Drop", titleHi: "निष्क्रिय गुरुत्वाकर्षण ड्रॉप", descEn: "Relies on gravity counterweights rather than battery energy to close barriers.", descHi: "बैरियर बंद करने के लिए बिजली के बजाय प्राकृतिक गुरुत्वाकर्षण का उपयोग।" },
      { badge: "ISOLATION", titleEn: "3.5kV Galvanic Surge Barrier", titleHi: "3.5kV गैल्वेनिक सर्ज सुरक्षा", descEn: "Protects sensitive microchips from overhead line lightning induction.", descHi: "ओवरहेड ट्रैक्शन लाइन के सर्ज से इलेक्ट्रॉनिक्स को पूर्ण सुरक्षा।" },
      { badge: "WATCHDOG", titleEn: "Dual Independent Hardware Watchdogs", titleHi: "ड्यूल स्वतंत्र वॉचडॉग", descEn: "Resets controller into safe mode if processor execution halts.", descHi: "प्रोसेसर में रुकावट आने पर कंट्रोलर को तुरंत सुरक्षित मोड में लाते हैं।" }
    ],
    lifecycleSteps: [
      { step: "01", titleEn: "Hazard & Risk Tree Analysis", titleHi: "जोखिम एवं खतरा विश्लेषण", descEn: "Evaluating every potential component failure mode under extreme environmental conditions.", descHi: "कठिन फील्ड परिस्थितियों में प्रत्येक घटक की विफलता का पूर्व-विश्लेषण।" },
      { step: "02", titleEn: "Redundant Circuit Simulation", titleHi: "रिडंडेंट सर्किट सिमुलेशन", descEn: "Simulating broken signal lines, shorted gate transistors, and power dropouts.", descHi: "केबल कटने और वोल्टेज ड्रॉप का सिमुलेशन परीक्षण।" },
      { step: "03", titleEn: "100% Factory Stress Validation", titleHi: "100% फैक्ट्री तनाव परीक्षण", descEn: "Bench-testing every production unit under thermal and electrical stress.", descHi: "थर्मल और इलेक्ट्रिकल तनाव के तहत प्रत्येक यूनिट का 100% परीक्षण।" },
      { step: "04", titleEn: "Field Commissioning Verification", titleHi: "फील्ड कमीशनिंग सत्यापन", descEn: "Site acceptance testing in accordance with railway safety protocols.", descHi: "रेलवे सुरक्षा प्रोटोकॉल के अनुसार साइट स्वीकृति परीक्षण।" }
    ],
    complianceList: ["CENELEC EN 50126 (RAMS)", "CENELEC EN 50129", "IEC 61508 SIL-2", "ISO 13849-1 Cat 3", "RDSO Signalling Norms"],
    relatedSublinks: [
      { titleEn: "Rugged Industrial Construction", titleHi: "मजबूत औद्योगिक निर्माण", href: "/capability/rugged-build", tag: "BUILD" },
      { titleEn: "Diagnostics & System Integration", titleHi: "डायग्नोस्टिक्स एवं एकीकरण", href: "/capability/diagnostics", tag: "INTEGRATION" }
    ]
  },

  "rugged-build": {
    slug: "rugged-build",
    subCategoryTitleEn: "Rugged Industrial Construction",
    subCategoryTitleHi: "मजबूत औद्योगिक निर्माण (Rugged Construction)",
    badgeEn: "MECHANICAL DURABILITY • CNC ROBOTIC WELDED CHASSIS",
    badgeHi: "मैकेनिकल मजबूती • CNC रोबोटिक वेल्डेड चेसिस",
    heroHeadlineEn: "Built to Endure Decades of Harsh Outdoor Environmental Abuse",
    heroHeadlineHi: "दशकों की कठोर बाहरी परिस्थितियों का सामना करने के लिए निर्मित",
    heroSubtitleEn: "Heavy-gauge structural steel enclosures, cathodic electrophoretic anti-corrosion priming, and vibration-isolated sub-assemblies built for railway and heavy industry.",
    heroSubtitleHi: "भारी स्ट्रक्चरल स्टील एनक्लोजर, कैथोडिक इलेक्ट्रोफोरेटिक एंटी-रस्ट प्राइमर और कंपन-रोधी असेंबली जो कठिन औद्योगिक और रेलवे वातावरण में लंबे समय तक टिकते हैं।",
    bannerImage: "/images/crash_barrier_perimeter.jpg",
    secondaryBannerImage: "/images/weatherproof_enclosure.jpg",
    fieldBannerImage: "/images/bollards_perimeter.jpg",
    stats: [
      { value: "IK10", labelEn: "Mechanical Impact Rating", labelHi: "इम्पैक्ट रेजिस्टेंस IK10", subEn: "20 Joules direct strike resistant", subHi: "20 जूल प्रत्यक्ष आघात प्रतिरोधी" },
      { value: "-25°C to 70°C", labelEn: "Operating Temperature", labelHi: "थर्मल ऑपरेटिंग रेंज", subEn: "Scorching desert to freezing alpine", subHi: "भीषण गर्मी से कड़ाके की ठंड तक" },
      { value: "1000h", labelEn: "ASTM B117 Salt Fog Tested", labelHi: "सॉल्ट फॉग टेस्टेड", subEn: "Marine-grade dual powder coat", subHi: "मरीन-ग्रेड पाउडर कोटिंग" },
      { value: "2.5 mm", labelEn: "Cold Rolled Steel Gauge", labelHi: "स्टील शीट की मोटाई", subEn: "Robotically seam-welded housing", subHi: "मजबूत सीम-वेल्डेड ढांचा" }
    ],
    deepDiveTitleEn: "Engineered to Endure Extreme Environmental Abuse",
    deepDiveTitleHi: "अत्यधिक कठिन पर्यावरणीय परिस्थितियों का सामना करने के लिए निर्मित",
    deepDiveParasEn: [
      "Field equipment is routinely subjected to extreme environmental stresses: scorching summer heat, freezing winters, driving torrential rain, heavy industrial vibration, and corrosive airborne chemicals. At GLOBAL, we build our hardware for decades of continuous operation.",
      "Our enclosures use laser-cut, robotically welded cold-rolled steel treated with multi-stage zinc phosphate pre-treatment and UV-resistant outdoor architectural powder coats.",
      "Internal electronic modules are conformally coated against moisture, dust accumulation, and electrolytic corrosion, ensuring maximum mean time between failures (MTBF)."
    ],
    deepDiveParasHi: [
      "फील्ड उपकरण भीषण गर्मी, कड़ाके की ठंड, भारी बारिश, कंपन और रासायनिक गैसों के निरंतर संपर्क में रहते हैं। ग्लोबल में, हम अपने हार्डवेयर को दशकों की सेवा के लिए मजबूत बनाते हैं।",
      "हमारे एनक्लोजर लेजर-कट और रोबोटिक वेल्डेड स्टील से बने हैं जिन पर जिंक फॉस्फेट प्राइमर और यूवी-प्रतिरोधी पाउडर कोटिंग की जाती है।",
      "आंतरिक इलेक्ट्रॉनिक सर्किट पर नमी और धूल से सुरक्षा के लिए स्पेशल कन्फॉर्मल कोटिंग की जाती है, जिससे उत्पाद का जीवनकाल काफी बढ़ जाता है।"
    ],
    pillars: [
      { badge: "CORROSION", titleEn: "Multi-Layer Surface Protection", titleHi: "मल्टी-लेयर सतह संरक्षण", descEn: "Immersion pre-treatment followed by high-bake thermoset polyester powder coating.", descHi: "इमर्शन प्री-ट्रीटमेंट और हाई-बेक थर्मोसेट पॉलिएस्टर पाउडर कोटिंग।" },
      { badge: "VIBRATION", titleEn: "Shock & Vibration Isolated Mounting", titleHi: "शॉक एवं कंपन आइसोलेटेड माउंटिंग", descEn: "Rubber dampening bushings isolate internal micro-electronics from track vibration.", descHi: "रबर डैम्पिंग बुशिंग्स जो ट्रैक के भारी कंपन से इलेक्ट्रॉनिक्स को सुरक्षित रखती हैं।" },
      { badge: "ELECTRONICS", titleEn: "Mil-Spec Conformal Coating", titleHi: "मिल-स्पेक कन्फॉर्मल कोटिंग", descEn: "Silicone-based moisture barrier prevents conductive tracking across PCB traces.", descHi: "सिलिकॉन आधारित नमी अवरोधक जो पीसीबी पर नमी जमने से रोकता है।" }
    ],
    lifecycleSteps: [
      { step: "01", titleEn: "Laser-Cut Structural Fabrication", titleHi: "लेजर-कट स्ट्रक्चरल फैब्रिकेशन", descEn: "Precision CNC bending and robotic seam welding of 2.5mm steel plates.", descHi: "2.5 मिमी स्टील प्लेटों की सटीक सीएनसी बेंडिंग और रोबोटिक वेल्डिंग।" },
      { step: "02", titleEn: "Multi-Stage Chemical Passivation", titleHi: "केमिकल पैसिवेशन एवं कोटिंग", descEn: "Deep zinc phosphate immersion before high-bake architectural powder coating.", descHi: "जिंक फॉस्फेट प्राइमर और हाई-बेक पाउडर कोटिंग।" },
      { step: "03", titleEn: "IK10 Impact & IP66 Water Spray", titleHi: "IK10 एवं IP66 टेस्टिंग", descEn: "High-pressure water jet spraying and 20 Joules mechanical drop testing.", descHi: "हाई-प्रेशर वाटर जेट और 20 जूल इम्पैक्ट टेस्टिंग।" },
      { step: "04", titleEn: "Environmental Chamber Burn-In", titleHi: "पर्यावरणीय चैम्बर बर्न-इन", descEn: "72-hour thermal cycling from -25°C to +70°C at 95% relative humidity.", descHi: "72 घंटे का तापमान और आर्द्रता बर्न-इन परीक्षण।" }
    ],
    complianceList: ["IEC 60068-2 (Shock & Vibration)", "IEC 60529 (IP66)", "IEC 62262 (IK10)", "ASTM B117 (Salt Spray)", "ISO 12944 C5-M"],
    relatedSublinks: [
      { titleEn: "Fail-Safe Architecture", titleHi: "फेल-सेफ आर्किटेक्चर", href: "/capability/fail-safe", tag: "SAFETY" },
      { titleEn: "Diagnostics & System Integration", titleHi: "डायग्नोस्टिक्स", href: "/capability/diagnostics", tag: "INTEGRATION" }
    ]
  },

  "diagnostics": {
    slug: "diagnostics",
    subCategoryTitleEn: "Diagnostics & System Integration",
    subCategoryTitleHi: "डायग्नोस्टिक्स एवं सिस्टम एकीकरण",
    badgeEn: "CONNECTIVITY • MODBUS-RTU & SCADA TELEMETRY",
    badgeHi: "कनेक्टिविटी • मोडबस-RTU एवं SCADA टेलीमेट्री",
    heroHeadlineEn: "Standardized Open Protocols for Connected Railway Infrastructure",
    heroHeadlineHi: "कनेक्टेड रेलवे इंफ्रास्ट्रक्चर के लिए मानकीकृत ओपन प्रोटोकॉल",
    heroSubtitleEn: "Native RS-485 Modbus telemetry, opto-isolated relay outputs, and intuitive digital interfaces providing real-time operational health visibility directly into central SCADA consoles.",
    heroSubtitleHi: "सेंट्रल SCADA और रिले सिस्टम के साथ निर्बाध जुड़ाव के लिए मोडबस RS-485 और आइसोलेटेड आउटपुट जो रीयल-टाइम उपकरण स्वास्थ्य दृश्यता प्रदान करते हैं।",
    bannerImage: "/images/signalling_relay_room.jpg",
    secondaryBannerImage: "/images/power_backup.jpg",
    fieldBannerImage: "/images/power_distribution_eld.jpg",
    stats: [
      { value: "Modbus", labelEn: "Standard RS-485 RTU", labelHi: "मानक RS-485 RTU", subEn: "Fully documented register map", subHi: "स्पष्ट रजिस्टर मैप" },
      { value: "Dual", labelEn: "Isolated Relay Contacts", labelHi: "ड्यूल आइसोलेटेड रिले", subEn: "Potential-free 5A contacts", subHi: "5A पोटेंशियल-फ्री आउटपुट" },
      { value: "100%", labelEn: "SCADA & PLC Compatible", labelHi: "SCADA एवं PLC अनुकूल", subEn: "Plug-and-play telemetry", subHi: "प्लग-एंड-प्ले एकीकरण" },
      { value: "< 50ms", labelEn: "Telemetry Poll Rate", labelHi: "टेलीमेट्री पोल रेट", subEn: "Real-time fault reporting", subHi: "रीयल-टाइम फॉल्ट रिपोर्टिंग" }
    ],
    deepDiveTitleEn: "Open Protocols for Connected Infrastructure",
    deepDiveTitleHi: "कनेक्टेड इंफ्रास्ट्रक्चर के लिए ओपन प्रोटोकॉल एकीकरण",
    deepDiveParasEn: [
      "Modern railway networks and industrial plants cannot afford isolated 'black box' hardware. Operators require real-time visibility into equipment health, cycle counts, electrical parameters, and fault alerts.",
      "GLOBAL products come natively equipped with isolated RS-485 serial ports supporting the industry-standard Modbus-RTU protocol. Every register is clearly documented for straightforward integration into PLC, DCS, or centralized railway SCADA software.",
      "Potential-free auxiliary relay outputs provide fail-safe hardwired interlocks for critical signaling circuits and emergency tripping mechanisms."
    ],
    deepDiveParasHi: [
      "आधुनिक रेलवे नेटवर्क और औद्योगिक संयंत्रों में अलग-थलग काम करने वाले उपकरणों की जगह एकीकृत समाधानों की आवश्यकता है। ऑपरेटरों को उपकरण की स्थिति, साइकिल काउंट और फॉल्ट अलर्ट की रीयल-टाइम जानकारी चाहिए।",
      "ग्लोबल उत्पाद मानकीकृत मोडबस-RTU प्रोटोकॉल का समर्थन करने वाले आइसोलेटेड RS-485 सीरियल पोर्ट से लैस हैं। प्रत्येक रजिस्टर को पीएलसी, डीसीएस या रेलवे SCADA सॉफ्टवेयर में आसान एकीकरण के लिए स्पष्ट रूप से प्रलेखित किया गया है।",
      "पोटेंशियल-फ्री रिले आउटपुट महत्वपूर्ण सिग्नलिंग सर्किट और इमरजेंसी ट्रिपिंग सिस्टम के लिए मजबूत हार्डवायर्ड इंटरलॉक प्रदान करते हैं।"
    ],
    pillars: [
      { badge: "MODBUS", titleEn: "Standard Modbus-RTU Protocol", titleHi: "मानक मोडबस-RTU प्रोटोकॉल", descEn: "Exposes live voltages, leakage values, boom states, and diagnostic error codes.", descHi: "सभी लाइव वोल्टेज, लीकेज करंट और बूम की स्थिति को तुरंत उपलब्ध कराता है।" },
      { badge: "RELAYS", titleEn: "Potential-Free Alarm Contacts", titleHi: "पोटेंशियल-फ्री अलार्म कॉन्टैक्ट्स", descEn: "Dry contacts rated 5A 250VAC for direct integration with control room annunciator panels.", descHi: "कंट्रोल रूम पैनल और हूटर्स से सीधे जुड़ने के लिए 5A 250VAC रेटेड ड्राई कॉन्टैक्ट्स।" },
      { badge: "STATUS", titleEn: "Intuitive Multi-Color LED Diagnostics", titleHi: "मल्टी-कलर एलईडी डायग्नोस्टिक्स", descEn: "Clear tri-color status LEDs allow maintenance engineers to diagnose system state in seconds.", descHi: "स्पष्ट ट्राई-कलर एलईडी जिसके जरिए फील्ड इंजीनियर कुछ ही सेकंड में सिस्टम की स्थिति समझ लेते हैं।" }
    ],
    lifecycleSteps: [
      { step: "01", titleEn: "Protocol Standardization", titleHi: "प्रोटोकॉल मानकीकरण", descEn: "Implementing standard Modbus function codes (03 Read, 06 Write).", descHi: "मानक मोडबस फंक्शन कोड्स का कार्यान्वयन।" },
      { step: "02", titleEn: "Galvanic Port Isolation", titleHi: "गैल्वेनिक पोर्ट आइसोलेशन", descEn: "Opto-isolated transceivers prevent ground loops between panels and central SCADA.", descHi: "ग्राउंड लूप्स को रोकने के लिए ऑप्टो-आइसोलेटेड ट्रांससीवर्स।" },
      { step: "03", titleEn: "Interoperability Testing", titleHi: "इंटरऑपरेबिलिटी परीक्षण", descEn: "Verified across Siemens, Schneider, and ABB PLC platforms.", descHi: "प्रमुख पीएलसी और SCADA प्लेटफॉर्म्स पर परीक्षित।" },
      { step: "04", titleEn: "Live Field Dashboard Integration", titleHi: "लाइव फील्ड डैशबोर्ड इंटीग्रेशन", descEn: "Deployment of intuitive SCADA visualization templates.", descHi: "सहज SCADA विज़ुअलाइज़ेशन टेम्प्लेट का परिनियोजन।" }
    ],
    complianceList: ["Modbus.org Compliance", "IEC 61158 Fieldbus", "EIA-485 Standard", "IEEE 802.3 Ethernet Ready"],
    relatedSublinks: [
      { titleEn: "Fail-Safe Architecture", titleHi: "फेल-सेफ आर्किटेक्चर", href: "/capability/fail-safe", tag: "SAFETY" },
      { titleEn: "Rugged Industrial Construction", titleHi: "मजबूत निर्माण", href: "/capability/rugged-build", tag: "BUILD" }
    ]
  }
};

// ============================================================================
// 4. APPLICATIONS & SECTORS FAMILY DATA
// ============================================================================
export const SECTORS_SUBPAGES: Record<string, SectorsSubpageProps> = {
  "level-crossings": {
    slug: "level-crossings",
    subCategoryTitleEn: "Railway Level Crossings",
    subCategoryTitleHi: "रेलवे लेवल क्रॉसिंग्स (Level Crossings)",
    badgeEn: "INFRASTRUCTURE SECTOR 01 • HIGH DENSITY CORRIDORS",
    badgeHi: "इन्फ्रास्ट्रक्चर सेक्टर 01 • उच्च घनत्व कॉरिडोर",
    heroHeadlineEn: "Controlled Vehicular & Train Movement at Road-Rail Intersections",
    heroHeadlineHi: "सड़क-रेलवे चौराहों पर नियंत्रित एवं सुरक्षित आवागमन",
    heroSubtitleEn: "Heavy-duty boom barrier systems engineered specifically for high-density railway level crossings with synchronized quad-gate interlocking and road traffic signal coordination.",
    heroSubtitleHi: "उच्च-घनत्व वाले सड़क-रेलवे चौराहों के लिए विशेष रूप से इंजीनियर की गई हैवी-ड्यूटी बूम बैरियर प्रणाली, जिसमें सिंक्रनाइज़्ड गेट इंटरलॉकिंग और सिग्नल समन्वय शामिल है।",
    bannerImage: "/images/boom_barrier_railway.jpg",
    secondaryBannerImage: "/images/obstacle_detection.jpg",
    fieldBannerImage: "/images/boom_barrier_hero.jpg",
    stats: [
      { value: "4-Gate", labelEn: "Synchronized Interlock Support", labelHi: "4-गेट सिंक्रनाइज़्ड इंटरलॉक", subEn: "Quad-barrier sequence control", subHi: "सीक्वेंस गेट संचालन" },
      { value: "< 3.0s", labelEn: "Rapid Operating Cycle", labelHi: "त्वरित परिचालन चक्र", subEn: "Minimizes highway congestion", subHi: "सड़क जाम को कम करता है" },
      { value: "100%", labelEn: "Track Circuit Fail-Safe", labelHi: "100% ट्रैक सर्किट फेल-सेफ", subEn: "Interlocks with home signals", subHi: "होम सिग्नलों के साथ इंटरलॉक" },
      { value: "24/7", labelEn: "Continuous Duty Endurance", labelHi: "24/7 सतत ड्यूटी रेटिंग", subEn: "500+ daily actuations", subHi: "दैनिक 500+ चक्र" }
    ],
    deepDiveTitleEn: "Synchronized Gate Operation Safeguarding High-Speed Corridors",
    deepDiveTitleHi: "हाई-स्पीड रेल मार्गों पर सिंक्रनाइज़्ड गेट संचालन एवं सुरक्षा",
    deepDiveParasEn: [
      "Level crossings represent the most critical interface between roadway vehicles and fast-moving rail transport. A failure to drop barriers or a vehicle trapped on the tracks can lead to catastrophic collisions.",
      "GLOBAL delivers complete Level Crossing Automation Packages: heavy electromechanical barrier units, sequenced quad-gate logic ensuring exit gates stay open slightly longer to clear trapped vehicles, and optical obstacle radar integration.",
      "Direct hardwired relay interlocks communicate with the station master's interlocking desk, ensuring train signals cannot display green until all barriers are locked in the horizontal position."
    ],
    deepDiveParasHi: [
      "लेवल क्रॉसिंग सड़क वाहनों और ट्रेनों के बीच सबसे संवेदनशील संपर्क बिंदु है। बैरियर बंद न होने या वाहन फंसने पर गंभीर दुर्घटना हो सकती है।",
      "ग्लोबल संपूर्ण लेवल क्रॉसिंग ऑटोमेशन पैकेज प्रदान करता है: हैवी बैरियर इकाइयां, 4-गेट सीक्वेंस लॉजिक जो निकास द्वार को थोड़ा देर से बंद करता है ताकि फंसे वाहन निकल सकें, और रडार सेंसिंग।",
      "स्टेशन मास्टर के इंटरलॉकिंग सिस्टम के साथ डायरेक्ट रिले इंटरलॉक यह सुनिश्चित करता है कि जब तक सभी बैरियर लॉक न हों, ट्रेन को हरा सिग्नल न मिले।"
    ],
    riskMitigations: [
      {
        titleEn: "Trapped Vehicle Hazard",
        titleHi: "ट्रैक पर वाहन फंसने का खतरा",
        riskEn: "Motorist entering intersection as barriers commence descent.",
        riskHi: "बैरियर गिरते समय वाहन का बीच में फंस जाना।",
        solutionEn: "24GHz FMCW radar detects vehicle and pauses descent sequence automatically.",
        solutionHi: "24GHz रडार वाहन की पहचान कर बूम को तुरंत ऊपर उठा देता है।"
      },
      {
        titleEn: "Substation Power Blackout",
        titleHi: "सबस्टेशन बिजली कटौती",
        riskEn: "Loss of AC mains during train approach.",
        riskHi: "ट्रेन आते समय अचानक बिजली गुल हो जाना।",
        solutionEn: "Instant 0ms switchover to internal 24V DC battery backup.",
        solutionHi: "आंतरिक 24V डीसी बैटरी पर शून्य विलंब स्विचओवर।"
      },
      {
        titleEn: "Mechanical Impact Collision",
        titleHi: "वाहन द्वारा बूम को टक्कर मारना",
        riskEn: "Speeding car ramming closed barrier.",
        riskHi: "तेज रफ्तार गाड़ी द्वारा बूम को टक्कर मारना।",
        solutionEn: "Breakaway shear-pin boom design absorbs impact, protecting main gearbox.",
        solutionHi: "ब्रेकअवे शियर-पिन डिज़ाइन जो मुख्य गियरबॉक्स को नुकसान से बचाता है।"
      }
    ],
    caseStudies: [
      {
        titleEn: "High-Traffic National Highway Crossing",
        titleHi: "राष्ट्रीय राजमार्ग लेवल क्रॉसिंग (LC-54)",
        locationEn: "Delhi - Mumbai Freight Corridor",
        locationHi: "दिल्ली-मुंबई फ्रेट कॉरिडोर",
        outcomeEn: "Zero trapped vehicle events and zero signal delays across 3 years of continuous operation.",
        outcomeHi: "3 वर्षों में शून्य वाहन फंसने की घटना और 100% परिचालन समय।",
        tag: "HIGHWAY"
      }
    ],
    relatedSublinks: [
      { titleEn: "Railway Barrier System", titleHi: "रेलवे बैरियर सिस्टम", href: "/products/railway-barrier", tag: "PRODUCT" },
      { titleEn: "Signalling Infrastructure & Access", titleHi: "सिग्नलिंग इंफ्रास्ट्रक्चर", href: "/sectors/signalling-infra", tag: "ACCESS" }
    ]
  },

  "industrial-panels": {
    slug: "industrial-panels",
    subCategoryTitleEn: "Industrial Electrical Panels",
    subCategoryTitleHi: "औद्योगिक विद्युत पैनल एवं स्विचबोर्ड",
    badgeEn: "INFRASTRUCTURE SECTOR 02 • POWER DISTRIBUTION",
    badgeHi: "इन्फ्रास्ट्रक्चर सेक्टर 02 • विद्युत वितरण",
    heroHeadlineEn: "Continuous Insulation & True RMS Leakage Protection for Switchboards",
    heroHeadlineHi: "स्विचबोर्ड्स एवं मोटर कंट्रोल पैनलों हेतु निरंतर इंसुलेशन सुरक्षा",
    heroSubtitleEn: "Continuous monitoring of Motor Control Centres (MCCs), Power Distribution Boards (PDBs), and critical factory drives eliminating electrical fires and unscheduled plant shutdowns.",
    heroSubtitleHi: "मोटर कंट्रोल सेंटर (MCC), पावर डिस्ट्रीब्यूशन बोर्ड (PDB) और महत्वपूर्ण फैक्ट्री ड्राइव्स की सुरक्षा के लिए निरंतर ट्रू RMS अर्थ लीकेज और इंसुलेशन निगरानी।",
    bannerImage: "/images/power_distribution_eld.jpg",
    secondaryBannerImage: "/images/earth_leakage_detector_hero.jpg",
    fieldBannerImage: "/images/continuous_insulation.jpg",
    stats: [
      { value: "100%", labelEn: "Fire Hazard Prevention", labelHi: "विद्युत आग जोखिम रोकथाम", subEn: "Trips before arcing ignites", subHi: "आग लगने से पहले ट्रिप" },
      { value: "96x96", labelEn: "Standard DIN Panel Cutout", labelHi: "मानक DIN पैनल कटआउट", subEn: "Flush mount membrane front", subHi: "फ्लश माउंट मेम्ब्रेन" },
      { value: "0.01A - 30A", labelEn: "Scalable Current Trip Range", labelHi: "स्केलेबल करंट ट्रिप रेंज", subEn: "Branch socket to main incomer", subHi: "सॉकेट से मुख्य इनकमर तक" },
      { value: "RS-485", labelEn: "Energy SCADA Telemetry", labelHi: "एनर्जी SCADA टेलीमेट्री", subEn: "Live Modbus-RTU registers", subHi: "लाइव मोडबस रजिस्टर" }
    ],
    deepDiveTitleEn: "Eliminating Unscheduled Factory Shutdowns and Electrical Fires",
    deepDiveTitleHi: "कारखानों में अप्रत्याशित शटडाउन और आग के जोखिम का पूर्ण निवारण",
    deepDiveParasEn: [
      "In modern manufacturing plants, petrochemical refineries, and heavy steel mills, an undetected ground fault can rapidly escalate into an explosive arc flash, destroying expensive switchgear and halting production.",
      "GLOBAL Digital Earth Leakage Detectors continuously measure residual leakage currents through Core Balance CTs. Advanced DSP True RMS algorithms filter out high-frequency inverter noise while tracking real fundamental insulation degradation.",
      "The pre-alarm warning contact alerts maintenance technicians the moment leakage surpasses 50%, enabling corrective maintenance during planned windows without emergency plant shutdowns."
    ],
    deepDiveParasHi: [
      "विनिर्माण संयंत्रों और रिफाइनरियों में एक अनसुलझा ग्राउंड फॉल्ट आग लगने या मोटर जलने का कारण बन सकता है।",
      "ग्लोबल डिजिटल ईएलडी कोर बैलेंस सीटी के माध्यम से रीयल-टाइम लीकेज करंट मापता है और वीएफडी नॉइज़ को फिल्टर करता है।",
      "प्री-अलार्म रिले इंसुलेशन खराब होते ही प्लांट इंजीनियरों को सचेत कर देता है, जिससे आपातकालीन शटडाउन के बजाय सामान्य मेंटेनेंस में ही सुधार हो जाता है।"
    ],
    riskMitigations: [
      {
        titleEn: "Motor Stator Burnout",
        titleHi: "मोटर स्टेटर जलने का खतरा",
        riskEn: "Moisture accumulation in motor windings causing dead ground fault on startup.",
        riskHi: "स्टार्टअप पर वाइंडिंग में नमी के कारण मोटर जलना।",
        solutionEn: "Online continuous insulation tracking alerts engineers before energizing motor.",
        solutionHi: "मोटर चालू करने से पहले ही इंसुलेशन की जांच कर अलर्ट भेजता है।"
      },
      {
        titleEn: "Harmonic Inverter Nuisance Tripping",
        titleHi: "हार्मोनिक फॉल्स ट्रिपिंग",
        riskEn: "VFD switching spikes falsely tripping sensitive conventional relays.",
        riskHi: "वीएफडी स्पाइक्स के कारण गलत ट्रिप होना।",
        solutionEn: "32-bit DSP True RMS engine filters switching noise up to the 31st harmonic.",
        solutionHi: "32-बिट डीएसपी ट्रू RMS इंजन 31वें हार्मोनिक तक नॉइज़ को फिल्टर करता है।"
      }
    ],
    caseStudies: [
      {
        titleEn: "Automated Automobile Assembly Plant",
        titleHi: "ऑटोमोबाइल असेंबली प्लांट",
        locationEn: "Hyundai Motor Manufacturing",
        locationHi: "हुंडई मोटर मैन्युफैक्चरिंग",
        outcomeEn: "Saved an estimated 48 hours of assembly line downtime across 2 years through pre-alarm alerts.",
        outcomeHi: "प्री-अलार्म अलर्ट्स के जरिए असेंबली लाइन के 48 घंटे के संभावित शटडाउन की बचत।",
        tag: "AUTOMOTIVE"
      }
    ],
    relatedSublinks: [
      { titleEn: "Digital Earth Leakage Detector", titleHi: "अर्थ लीकेज डिटेक्टर", href: "/products/earth-leakage", tag: "PRODUCT" },
      { titleEn: "True RMS Current Measurement", titleHi: "ट्रू RMS मापन", href: "/products/earth-leakage/true-rms", tag: "ACCURACY" }
    ]
  },

  "signalling-infra": {
    slug: "signalling-infra",
    subCategoryTitleEn: "Signalling Infrastructure & Access Control",
    subCategoryTitleHi: "सिग्नलिंग इंफ्रास्ट्रक्चर एवं पहुंच नियंत्रण",
    badgeEn: "INFRASTRUCTURE SECTOR 03 • ASSET PERIMETER SECURITY",
    badgeHi: "इन्फ्रास्ट्रक्चर सेक्टर 03 • परिधि सुरक्षा एवं सिग्नलिंग",
    heroHeadlineEn: "Guarding Critical Railway Relay Rooms and Yard Corridors",
    heroHeadlineHi: "रेलवे रिले रूम, यार्ड और सिग्नलिंग कॉरिडोर की सुरक्षा",
    heroSubtitleEn: "Specialized electrical insulation monitoring instruments for railway Integrated Power Supplies (IPS) paired with heavy-duty automated perimeter access barrier gates.",
    heroSubtitleHi: "रेलवे इंटीग्रेटेड पावर सप्लाई (IPS) के लिए विशेष इंसुलेशन डायग्नोस्टिक्स और भारी स्वचालित परिधि बैरियर गेट्स।",
    bannerImage: "/images/signalling_relay_room.jpg",
    secondaryBannerImage: "/images/road_blocker_barrier.jpg",
    fieldBannerImage: "/images/turnstile_security.jpg",
    stats: [
      { value: "SIL-2/4", labelEn: "Signalling Safety Compatibility", labelHi: "सिग्नलिंग सुरक्षा अनुकूलता", subEn: "RDSO SPN/256 compliant", subHi: "RDSO मानकों के अनुसार" },
      { value: "100%", labelEn: "Galvanic Opto-Isolation", labelHi: "ऑप्टो-आइसोलेटेड इंटरफेस", subEn: "Immune to 25kV traction induction", subHi: "25kV ट्रैक्शन सर्ज से सुरक्षित" },
      { value: "RFID / ANPR", labelEn: "Access System Ready", labelHi: "RFID / ANPR एक्सेस सक्षम", subEn: "Authorized locomotive entry", subHi: "अधिकृत वाहन प्रवेश नियंत्रण" },
      { value: "24/7", labelEn: "Critical Asset Guarding", labelHi: "24/7 क्रिटिकल एसेट सुरक्षा", subEn: "Depots, yards, sub-stations", subHi: "डिपो एवं सबस्टेशन सुरक्षा" }
    ],
    deepDiveTitleEn: "Protecting Critical Railway Control Assets",
    deepDiveTitleHi: "क्रिटिकल रेलवे कंट्रोल संपत्तियों की सुरक्षा",
    deepDiveParasEn: [
      "Railway signaling rooms and traction sub-stations contain millions of dollars in electronic interlockings (EI) and point machine power supplies. Electrical leakage on signaling cables can lead to dangerous signal false-clearing.",
      "GLOBAL delivers tailored Earth Leakage Detectors specifically approved for railway signalling power supplies (IPS), continuously verifying that signal cables maintain high insulation integrity to ground.",
      "Complementing this, our heavy-duty access barriers safeguard perimeter gates to freight yards, maintenance sheds, and loco depots with biometric and RFID vehicle validation."
    ],
    deepDiveParasHi: [
      "रेलवे सिग्नलिंग रूम और सब-स्टेशनों में अत्यंत संवेदनशील इलेक्ट्रॉनिक इंटरलॉकिंग (EI) और पॉइंट मशीन पावर सप्लाई होती है। सिग्नल केबलों में लीकेज से खतरनाक सिग्नल विफलता हो सकती है।",
      "ग्लोबल विशेष रूप से रेलवे सिग्नलिंग इंटीग्रेटेड पावर सप्लाई (IPS) के लिए प्रमाणित अर्थ लीकेज डिटेक्टर प्रदान करता है, जो सिग्नलिंग केबलों के इंसुलेशन की निरंतर जांच करते हैं।",
      "इसके साथ ही, हमारे बैरियर सिस्टम रेलवे यार्डों, शेड्स और लोको डिपो के गेटों पर सुरक्षित वाहन पहुंच नियंत्रण प्रदान करते हैं।"
    ],
    riskMitigations: [
      {
        titleEn: "Signal False Clearing Hazard",
        titleHi: "सिग्नल फॉल्स क्लीयरिंग का खतरा",
        riskEn: "Ground leakage in point machine wiring causing improper green signal indication.",
        riskHi: "वायरिंग में लीकेज के कारण गलत हरा सिग्नल प्रदर्शित होना।",
        solutionEn: "Continuous online IPS earth leakage detection with millisecond fault isolation.",
        solutionHi: "मिलीसेकंड फॉल्ट आइसोलेशन के साथ निरंतर ऑनलाइन IPS लीकेज डिटेक्शन।"
      }
    ],
    caseStudies: [
      {
        titleEn: "Electric Locomotive Maintenance Depot",
        titleHi: "इलेक्ट्रिक लोकोमोटिव मेंटेनेंस शेड",
        locationEn: "Ghaziabad Loco Shed, Northern Railway",
        locationHi: "गाजियाबाद लोको शेड, उत्तर रेलवे",
        outcomeEn: "Automated RFID perimeter barrier gate and IPS electrical monitoring operating continuously with zero downtime.",
        outcomeHi: "स्वचालित आरएफआईडी बैरियर गेट और IPS विद्युत निगरानी का सफल संचालन।",
        tag: "RAIL DEPOT"
      }
    ],
    relatedSublinks: [
      { titleEn: "Railway Level Crossings", titleHi: "रेलवे लेवल क्रॉसिंग", href: "/sectors/level-crossings", tag: "CROSSINGS" },
      { titleEn: "Industrial Electrical Panels", titleHi: "औद्योगिक विद्युत पैनल", href: "/sectors/industrial-panels", tag: "SWITCHGEAR" }
    ]
  }
};

// ============================================================================
// 5. TECHNICAL RESOURCES & SUPPORT FAMILY DATA
// ============================================================================
export const SUPPORT_SUBPAGES: Record<string, SupportSubpageProps> = {
  "datasheets": {
    slug: "datasheets",
    subCategoryTitleEn: "Product Datasheets & Downloads",
    subCategoryTitleHi: "उत्पाद डेटाशीट एवं डाउनलोड",
    badgeEn: "OFFICIAL SPECIFICATION REPOSITORY • 2026 REVISION",
    badgeHi: "आधिकारिक विनिर्देश रिपॉजिटरी • 2026 संस्करण",
    heroHeadlineEn: "Download Official Technical Product Datasheets & PDF Bundles",
    heroHeadlineHi: "आधिकारिक तकनीकी उत्पाद डेटाशीट एवं पीडीएफ बंडल डाउनलोड करें",
    heroSubtitleEn: "Access printable engineering datasheets, CAD dimensional drawings, circuit wiring schematics, and factory compliance certifications for all GLOBAL systems.",
    heroSubtitleHi: "सभी ग्लोबल प्रणालियों के लिए प्रिंट करने योग्य इंजीनियरिंग डेटाशीट, सीएडी आयाम चित्र, सर्किट वायरिंग आरेख और फैक्ट्री प्रमाणन दस्तावेज़ प्राप्त करें।",
    bannerImage: "/images/weatherproof_enclosure.jpg",
    secondaryBannerImage: "/images/power_distribution_eld.jpg",
    fieldBannerImage: "/images/boom_barrier_railway.jpg",
    stats: [
      { value: "PDF", labelEn: "Print-Ready Vector Datasheets", labelHi: "प्रिंट-रेडी वेक्टर डेटाशीट", subEn: "High-resolution schematics", subHi: "हाई-रिज़ॉल्यूशन आरेख" },
      { value: "CAD", labelEn: "2D/3D Dimensional Blueprints", labelHi: "2D/3D आयामी ब्लूप्रिंट", subEn: "DWG and STEP format", subHi: "DWG एवं STEP प्रारूप" },
      { value: "2026", labelEn: "Latest Firmware Revision", labelHi: "नवीनतम 2026 संस्करण", subEn: "Updated standards compliance", subHi: "अपडेटेड मानक अनुपालन" },
      { value: "Free", labelEn: "Direct Engineering Access", labelHi: "निःशुल्क तकनीकी एक्सेस", subEn: "Instant download links", subHi: "त्वरित डाउनलोड लिंक" }
    ],
    deepDiveTitleEn: "Comprehensive Documentation for Project Integrators",
    deepDiveTitleHi: "प्रोजेक्ट इंटीग्रेटर्स के लिए व्यापक दस्तावेजीकरण",
    deepDiveParasEn: [
      "Our engineering datasheets contain comprehensive product breakdowns, wiring schematics, dimensional blueprints, electrical parameters, and environmental tolerances.",
      "Select the relevant product bundle below to download high-resolution PDF technical files directly to your device.",
      "If your tender or project demands custom OEM parameters or stamped compliance declarations, please request custom datasheets via our engineering form."
    ],
    deepDiveParasHi: [
      "हमारी इंजीनियरिंग डेटाशीट में संपूर्ण उत्पाद विवरण, वायरिंग आरेख, आयामी ब्लूप्रिंट, विद्युत पैरामीटर और पर्यावरणीय सहनशीलता शामिल हैं।",
      "अपने डिवाइस पर सीधे उच्च-रिज़ॉल्यूशन पीडीएफ फाइलें डाउनलोड करने के लिए नीचे दिए गए उत्पाद बंडल का चयन करें।",
      "यदि आपके टेंडर या प्रोजेक्ट के लिए कस्टम ओईएम मापदंडों की आवश्यकता है, तो कृपया हमारे फॉर्म के माध्यम से संपर्क करें।"
    ],
    documents: [
      { code: "DS-RBS-2026", format: "PDF", size: "3.4 MB", category: "BARRIER", titleEn: "Railway Barrier System Technical Datasheet", titleHi: "रेलवे बैरियर सिस्टम तकनीकी डेटाशीट", descEn: "Full mechanical, electrical, and drive motor specifications with foundation dimensional layouts.", descHi: "फाउंडेशन लेआउट के साथ संपूर्ण मैकेनिकल और इलेक्ट्रिकल विनिर्देश।" },
      { code: "DS-ELD-2026", format: "PDF", size: "2.8 MB", category: "LEAKAGE", titleEn: "Digital Earth Leakage Detector Datasheet", titleHi: "डिजिटल अर्थ लीकेज डिटेक्टर डेटाशीट", descEn: "True RMS sensing specifications, CBCT current transformer sizing tables, and Modbus register maps.", descHi: "ट्रू RMS सेंसिंग विनिर्देश, CBCT ट्रांसफॉर्मर टेबल और मोडबस रजिस्टर मैप।" },
      { code: "MAN-LC-2026", format: "PDF", size: "5.1 MB", category: "MANUAL", titleEn: "Level Crossing Installation & Commissioning Manual", titleHi: "लेवल क्रॉसिंग इंस्टॉलेशन एवं कमीशनिंग मैनुअल", descEn: "Step-by-step foundation civil work, counterbalance adjustment, and optical sensor alignment.", descHi: "फाउंडेशन सिविल कार्य, काउंटरवेट बैलेंसिंग और ऑप्टिकल सेंसर अलाइनमेंट।" },
      { code: "APP-IPS-2026", format: "PDF", size: "2.1 MB", category: "SPEC", titleEn: "Railway Signalling IPS Electrical Safety Guide", titleHi: "रेलवे सिग्नलिंग IPS विद्युत सुरक्षा गाइड", descEn: "Best practices for point machine wiring, track circuit isolation, and surge suppression.", descHi: "पॉइंट मशीन वायरिंग, ट्रैक सर्किट आइसोलेशन और सर्ज सुरक्षा हेतु गाइड।" }
    ],
    faqs: [
      { questionEn: "Are CAD dimensional drawings available for civil contractors?", questionHi: "क्या सिविल ठेकेदारों के लिए सीएडी ड्राइंग उपलब्ध हैं?", answerEn: "Yes, 2D DWG anchor bolt layouts and 3D STEP models are available upon request through the engineering desk.", answerHi: "हाँ, 2D DWG एंकर बोल्ट लेआउट और 3D STEP मॉडल अनुरोध पर तुरंत प्रदान किए जाते हैं।" },
      { questionEn: "Do datasheets include tender compliance clauses?", questionHi: "क्या डेटाशीट में टेंडर अनुपालन क्लॉज शामिल हैं?", answerEn: "Our technical bundle includes clause-by-clause compliance statements against RDSO and IEC standards.", answerHi: "हमारे तकनीकी बंडल में RDSO और IEC मानकों के अनुसार क्लॉज-दर-क्लॉज अनुपालन विवरण शामिल हैं।" }
    ],
    relatedSublinks: [
      { titleEn: "Technical Specifications", titleHi: "तकनीकी विनिर्देश", href: "/support/specifications", tag: "SPECS" },
      { titleEn: "Installation Guides", titleHi: "स्थापना गाइड", href: "/support/installation-guides", tag: "MANUALS" }
    ]
  },

  "specifications": {
    slug: "specifications",
    subCategoryTitleEn: "Technical Specifications & Pinouts",
    subCategoryTitleHi: "तकनीकी विनिर्देश एवं पिनआउट्स",
    badgeEn: "ELECTRICAL DATA • PARAMETRIC LIMITS & PIN CONFIGURATIONS",
    badgeHi: "तकनीकी डेटा • इलेक्ट्रिकल पैरामीटर्स एवं पिन कॉन्फ़िगरेशन",
    heroHeadlineEn: "Parametric Engineering Tolerances and Terminal Pinouts",
    heroHeadlineHi: "पैरामीट्रिक इंजीनियरिंग सहिष्णुता एवं टर्मिनल पिनआउट्स",
    heroSubtitleEn: "Detailed terminal strip configurations, relay contact ratings, galvanic isolation levels, and environmental operating boundaries.",
    heroSubtitleHi: "विस्तृत टर्मिनल स्ट्रिप कॉन्फ़िगरेशन, रिले कॉन्टैक्ट रेटिंग, गैल्वेनिक आइसोलेशन स्तर और पर्यावरणीय ऑपरेटिंग सीमाएं।",
    bannerImage: "/images/crash_barrier_perimeter.jpg",
    secondaryBannerImage: "/images/earth_leakage_detector_hero.jpg",
    fieldBannerImage: "/images/power_backup.jpg",
    stats: [
      { value: "±2%", labelEn: "Measurement Accuracy", labelHi: "मापन सटीकता ±2%", subEn: "Full scale True RMS accuracy", subHi: "फुल स्केल ट्रू RMS सटीकता" },
      { value: "IP66/54", labelEn: "Protection Enclosure Rating", labelHi: "सुरक्षा श्रेणी", subEn: "Outdoor housing & panel front", subHi: "आउटडोर हाउसिंग एवं पैनल फ्रंट" },
      { value: "Universal", labelEn: "Auxiliary Voltage Supply", labelHi: "यूनिवर्सल पावर सप्लाई", subEn: "85 - 265V AC / DC input", subHi: "85 - 265V AC / DC इनपुट" },
      { value: "100%", labelEn: "Factory Bench Tested", labelHi: "100% फैक्ट्री टेस्टेड", subEn: "Zero defect quality control", subHi: "शून्य दोष गुणवत्ता नियंत्रण" }
    ],
    deepDiveTitleEn: "Precision Engineering Tolerances & Electrical Characteristics",
    deepDiveTitleHi: "सटीक इंजीनियरिंग पैरामीटर्स एवं विद्युत विशेषताएं",
    deepDiveParasEn: [
      "Every GLOBAL product is manufactured to rigorous industrial specifications and tested 100% before dispatch. Below is a summary of standard operational parameters across our primary product lines.",
      "Review input supply ranges, relay ratings, isolation voltages, and operating temperatures below.",
      "For customized operating ranges (such as high-temperature desert builds or specialized railway voltages), contact our technical applications team."
    ],
    deepDiveParasHi: [
      "प्रत्येक ग्लोबल उत्पाद का निर्माण कड़े औद्योगिक मानकों के अनुसार किया जाता है और भेजने से पहले 100% परीक्षण किया जाता है। नीचे मुख्य परिचालन मापदंडों का सारांश दिया गया है।",
      "इनपुट वोल्टेज, रिले रेटिंग, आइसोलेशन वोल्टेज और ऑपरेटिंग तापमान की समीक्षा करें।",
      "कस्टम ऑपरेटिंग रेंज (जैसे अत्यधिक तापमान या विशेष रेलवे वोल्टेज) के लिए हमारी तकनीकी टीम से संपर्क करें।"
    ],
    documents: [
      { code: "SPEC-TABLE-2026", format: "PDF", size: "1.4 MB", category: "SPEC", titleEn: "Comprehensive Parametric Matrix (PDF)", titleHi: "विस्तृत पैरामीट्रिक मैट्रिक्स (PDF)", descEn: "Complete table of terminal torque ratings, wire gauges, and internal power consumptions.", descHi: "टर्मिनल टॉर्क रेटिंग, वायर गेज और पावर खपत की पूरी तालिका।" }
    ],
    wiringPinouts: [
      { pin: "TB1 - Pin 1 & 2", functionEn: "Auxiliary Power Input", functionHi: "सहायक पावर इनपुट", rating: "85 - 265V AC/DC", notes: "Universal polarity-insensitive auxiliary supply" },
      { pin: "TB1 - Pin 3 & 4", functionEn: "CBCT Sensor Input (S1/S2)", functionHi: "CBCT सेंसर इनपुट (S1/S2)", rating: "< 5V RMS Signal", notes: "Use twisted shielded cable, shield grounded at relay end only" },
      { pin: "TB2 - Pin 5 & 6", functionEn: "Pre-Alarm Relay Contact (NO)", functionHi: "प्री-अलार्म रिले कॉन्टैक्ट (NO)", rating: "5A @ 250V AC", notes: "Potential-free dry contact, fires at 50% threshold" },
      { pin: "TB2 - Pin 7 & 8", functionEn: "Main Trip Relay Contact (CO)", functionHi: "मेन ट्रिप रिले कॉन्टैक्ट (CO)", rating: "5A @ 250V AC", notes: "Connects to breaker shunt trip coil" },
      { pin: "TB3 - Pin 9 & 10", functionEn: "RS-485 Modbus Port (A+/B-)", functionHi: "RS-485 मोडबस पोर्ट (A+/B-)", rating: "EIA-485 Standard", notes: "120Ω termination resistor on last node" }
    ],
    faqs: [
      { questionEn: "What wire gauge is recommended for CBCT connections?", questionHi: "CBCT कनेक्शन के लिए कौन सा वायर गेज अनुशंसित है?", answerEn: "We recommend 1.0 mm² to 1.5 mm² twisted-pair shielded copper cable with maximum distance up to 50 meters.", answerHi: "हम 1.0 मिमी² से 1.5 मिमी² ट्विस्टेड-पेयर शील्डेड कॉपर केबल (अधिकतम 50 मीटर) की सिफारिश करते हैं।" }
    ],
    relatedSublinks: [
      { titleEn: "Product Datasheets", titleHi: "उत्पाद डेटाशीट", href: "/support/datasheets", tag: "DOWNLOADS" },
      { titleEn: "Installation Guides", titleHi: "स्थापना गाइड", href: "/support/installation-guides", tag: "MANUALS" }
    ]
  },

  "installation-guides": {
    slug: "installation-guides",
    subCategoryTitleEn: "Installation & Wiring Guides",
    subCategoryTitleHi: "स्थापना एवं वायरिंग गाइड",
    badgeEn: "FIELD COMMISSIONING • SITE INSTALLATION BLUEPRINTS",
    badgeHi: "फील्ड कमीशनिंग • साइट इंस्टॉलेशन ब्लूप्रिंट",
    heroHeadlineEn: "Step-by-Step Installation Schematics & Commissioning Blueprints",
    heroHeadlineHi: "कदम-दर-कदम इंस्टॉलेशन आरेख एवं कमीशनिंग ब्लूप्रिंट",
    heroSubtitleEn: "Civil foundation layout templates, CBCT conductor passing guidelines, and electrical startup verification checklists for contractors and site engineers.",
    heroSubtitleHi: "ठेकेदारों और साइट इंजीनियरों के लिए सिविल फाउंडेशन लेआउट टेम्प्लेट, CBCT कंडक्टर पासिंग गाइड और इलेक्ट्रिकल कमीशनिंग चेकलिस्ट।",
    bannerImage: "/images/road_blocker_barrier.jpg",
    secondaryBannerImage: "/images/weatherproof_enclosure.jpg",
    fieldBannerImage: "/images/turnstile_security.jpg",
    stats: [
      { value: "Step-by-Step", labelEn: "Illustrated Manuals", labelHi: "सचित्र स्पष्ट मैनुअल", subEn: "Clear field schematics", subHi: "स्पष्ट फील्ड आरेख" },
      { value: "Civil", labelEn: "Foundation & Conduit Guides", labelHi: "फाउंडेशन एवं कंड्यूट गाइड", subEn: "Anchor template included", subHi: "एंकर बोल्ट टेम्पलेट शामिल" },
      { value: "Wiring", labelEn: "CBCT & Relay Diagrams", labelHi: "CBCT एवं रिले आरेख", subEn: "Correct conductor routing", subHi: "सटीक केबल रूटिंग" },
      { value: "Hotline", labelEn: "Live Site Phone Support", labelHi: "लाइव साइट फोन सहायता", subEn: "Direct engineer assistance", subHi: "सीधा इंजीनियर से संपर्क" }
    ],
    deepDiveTitleEn: "Simple, Error-Free Field Deployment and Commissioning",
    deepDiveTitleHi: "सरल और त्रुटि-रहित फील्ड स्थापना एवं कमीशनिंग",
    deepDiveParasEn: [
      "Proper mechanical alignment and correct electrical wiring are crucial to ensuring decades of faultless operation. GLOBAL provides illustrated, step-by-step installation guides.",
      "Our barrier manuals detail exact foundation concrete mix proportions, conduit entry locations, counterweight balance tuning, and optical obstacle radar alignment.",
      "For earth leakage detectors, our wiring guides clarify correct core balance conductor passing techniques, earthing shield terminations, and shunt-trip wiring to switchboard circuit breakers."
    ],
    deepDiveParasHi: [
      "सुरक्षा प्रणालियों की दीर्घकालिक विश्वसनीयता सुनिश्चित करने के लिए सही स्थापना और वायरिंग अत्यंत महत्वपूर्ण है। ग्लोबल सचित्र मैनुअल प्रदान करता है।",
      "हमारे बैरियर गाइड में फाउंडेशन की गहराई, एंकर बोल्ट टेम्पलेट, केबल कंड्यूट और काउंटरवेट बैलेंसिंग का पूरा विवरण दिया गया है।",
      "अर्थ लीकेज डिटेक्टरों के लिए हमारे वायरिंग आरेख CBCT केबल पासिंग तकनीकों, अर्थिंग शील्डिंग और शंट ट्रिप ब्रेकर कनेक्शन को स्पष्ट करते हैं।"
    ],
    documents: [
      { code: "GUIDE-RBS-2026", format: "PDF", size: "4.2 MB", category: "MANUAL", titleEn: "Barrier Foundation & Mounting Guide (PDF)", titleHi: "बैरियर फाउंडेशन एवं माउंटिंग गाइड (PDF)", descEn: "Concrete mix specifications, anchor bolt templates, and drainage conduit layout.", descHi: "कंक्रीट मिक्स विनिर्देश, एंकर बोल्ट टेम्पलेट और ड्रेनेज लेआउट।" },
      { code: "GUIDE-CBCT-2026", format: "PDF", size: "2.1 MB", category: "MANUAL", titleEn: "CBCT Current Transformer Wiring Manual (PDF)", titleHi: "CBCT ट्रांसफॉर्मर वायरिंग मैनुअल (PDF)", descEn: "Rules for passing 3-phase + neutral conductors through CBCT cores with proper earth shield termination.", descHi: "उचित अर्थ शील्ड के साथ CBCT कोर से 3-फेज + न्यूट्रल कंडक्टर पास करने के नियम।" }
    ],
    faqs: [
      { questionEn: "Should the earth grounding conductor pass through the CBCT core?", questionHi: "क्या अर्थिंग वायर को CBCT कोर से होकर गुजरना चाहिए?", answerEn: "NO. Only active phase conductors (L1, L2, L3) and the neutral conductor (N) must pass through the CBCT core. The protective earth (PE) must NEVER pass through the CBCT window.", answerHi: "नहीं! केवल फेज (L1, L2, L3) और न्यूट्रल (N) तार ही CBCT से गुजरने चाहिए। अर्थिंग वायर (PE) को कभी भी CBCT के अंदर से नहीं गुजारना चाहिए।" }
    ],
    relatedSublinks: [
      { titleEn: "Product Datasheets", titleHi: "उत्पाद डेटाशीट", href: "/support/datasheets", tag: "DOWNLOADS" },
      { titleEn: "Talk to Engineering", titleHi: "इंजीनियरिंग टीम से बात करें", href: "/contact/engineering-team", tag: "SUPPORT" }
    ]
  }
};

// ============================================================================
// 6. CONTACT FAMILY DATA
// ============================================================================
export const CONTACT_SUBPAGES: Record<string, ContactSubpageProps> = {
  "engineering-team": {
    slug: "engineering-team",
    subCategoryTitleEn: "Talk to Engineering",
    subCategoryTitleHi: "इंजीनियरिंग टीम से बात करें",
    badgeEn: "DIRECT CONSULTATION • TECHNICAL APPLICATION SPECIALISTS",
    badgeHi: "प्रत्यक्ष तकनीकी संवाद • सिस्टम विशेषज्ञ",
    heroHeadlineEn: "Direct Dialogue with Senior Systems & Hardware Engineers",
    heroHeadlineHi: "वरिष्ठ सिस्टम्स एवं हार्डवेयर इंजीनियरों के साथ प्रत्यक्ष संवाद",
    heroSubtitleEn: "Consult directly on circuit design, level crossing duty cycles, custom boom dimensions, and field compatibility without sales intermediaries.",
    heroSubtitleHi: "सर्किट डिज़ाइन, लेवल क्रॉसिंग ड्यूटी साइकिल, कस्टम बूम आयाम और फील्ड अनुकूलता पर सीधे वरिष्ठ इंजीनियरों से परामर्श लें।",
    bannerImage: "/images/turnstile_security.jpg",
    secondaryBannerImage: "/images/signalling_relay_room.jpg",
    fieldBannerImage: "/images/boom_barrier_hero.jpg",
    stats: [
      { value: "Direct", labelEn: "No Sales Gatekeepers", labelHi: "सीधा इंजीनियर से संपर्क", subEn: "Senior application leads", subHi: "वरिष्ठ तकनीकी विशेषज्ञ" },
      { value: "< 24h", labelEn: "Guaranteed Response Time", labelHi: "24 घंटे में तकनीकी समाधान", subEn: "Fast technical feedback", subHi: "त्वरित तकनीकी जवाब" },
      { value: "100%", labelEn: "Custom Engineering Review", labelHi: "100% अनुकूलित मूल्यांकन", subEn: "Circuit & site analysis", subHi: "सर्किट एवं साइट विश्लेषण" },
      { value: "Free", labelEn: "Preliminary Feasibility Review", labelHi: "निःशुल्क तकनीकी व्यवहार्यता", subEn: "Tender spec matching", subHi: "टेंडर विनिर्देश मिलान" }
    ],
    deepDiveTitleEn: "Dedicated Technical Partnership for Systems Integrators",
    deepDiveTitleHi: "सिस्टम्स इंटीग्रेटर्स के लिए समर्पित तकनीकी साझेदारी",
    deepDiveParasEn: [
      "Deploying safety systems in railway corridors and industrial power panels requires meticulous technical planning. Our senior engineering team is ready to evaluate your electrical schematics, duty cycles, and environmental constraints.",
      "We provide customized wiring diagrams, Modbus register integration guidance, and fail-safe mechanical counterbalance calculations tailored to your exact site layout.",
      "Fill out the engineering consultation form below with your project parameters, and a senior technical lead will contact you within 24 business hours."
    ],
    deepDiveParasHi: [
      "रेलवे कॉरिडोर और औद्योगिक पैनलों में सुरक्षा प्रणालियों की स्थापना के लिए सावधानीपूर्वक तकनीकी योजना की आवश्यकता होती है। हमारी वरिष्ठ इंजीनियरिंग टीम आपके इलेक्ट्रिकल आरेखों और फील्ड परिस्थितियों का मूल्यांकन करने के लिए तैयार है।",
      "हम आपके प्रोजेक्ट लेआउट के अनुसार कस्टमाइज्ड वायरिंग आरेख, मोडबस रजिस्टर गाइड और मैकेनिकल काउंटरबैलेंस गणना प्रदान करते हैं।",
      "नीचे दिए गए फॉर्म में अपने प्रोजेक्ट पैरामीटर साझा करें, और हमारे तकनीकी विशेषज्ञ 24 घंटों के भीतर आपसे संपर्क करेंगे।"
    ],
    contactPillars: [
      { icon: "OEM", titleEn: "Custom OEM Adaptation", titleHi: "कस्टम OEM अनुकूलन", descEn: "Special housing colors, boom arm lengths, and customized Modbus register firmware.", descHi: "विशेष एनक्लोजर रंग, बूम लाइट की लंबाई और फर्मवेयर रजिस्टर अनुकूलन।" },
      { icon: "SCHEMATIC", titleEn: "Schematic & Feasibility Review", titleHi: "सर्किट एवं व्यवहार्यता समीक्षा", descEn: "Evaluating auxiliary voltage supplies, CBCT sizing, and signaling relay interlocks.", descHi: "उपलब्ध पावर सप्लाई, केबल दूरी और रेलवे सिग्नलिंग इंटरलॉक्स की विस्तृत समीक्षा।" },
      { icon: "COMMISSION", titleEn: "On-Site Commissioning Support", titleHi: "ऑन-साइट कमीशनिंग सहायता", descEn: "Live technical assistance for field technicians during site installation and sign-off.", descHi: "साइट इंस्टॉलेशन के दौरान फील्ड तकनीशियनों के लिए ऑन-कॉल तकनीकी सहायता।" }
    ],
    regionalOffices: [
      { cityEn: "New Delhi (HQ / Rail Division)", cityHi: "नई दिल्ली (मुख्यालय / रेलवे)", roleEn: "Railway Signalling & Systems Engineering", roleHi: "रेलवे सिग्नलिंग एवं सिस्टम्स इंजीनियरिंग", phone: "+91 11 4988 7700", email: "rail.engineering@global-safety.com" },
      { cityEn: "Mumbai (Industrial Hub)", cityHi: "मुंबई (औद्योगिक हब)", roleEn: "Power Distribution & Switchgear Systems", roleHi: "विद्युत वितरण एवं स्विचगियर सिस्टम्स", phone: "+91 22 6122 8800", email: "industrial.eld@global-safety.com" },
      { cityEn: "Bengaluru (Tech / R&D)", cityHi: "बेंगलुरु (तकनीक / R&D)", roleEn: "DSP Electronics & Firmware Architecture", roleHi: "डीएसपी इलेक्ट्रॉनिक्स एवं फर्मवेयर", phone: "+91 80 4311 9900", email: "rd.firmware@global-safety.com" }
    ],
    relatedSublinks: [
      { titleEn: "Request a Technical Quote", titleHi: "कोटेशन का अनुरोध करें", href: "/contact/quote-req", tag: "COMMERCIAL" },
      { titleEn: "Product Datasheets", titleHi: "उत्पाद डेटाशीट", href: "/support/datasheets", tag: "DOCS" }
    ]
  },

  "quote-req": {
    slug: "quote-req",
    subCategoryTitleEn: "Request a Technical Quote",
    subCategoryTitleHi: "तकनीकी कोटेशन का अनुरोध करें",
    badgeEn: "COMMERCIAL & TENDER DESK • ITEMISED PROPOSALS",
    badgeHi: "व्यावसायिक एवं टेंडर डेस्क • विस्तृत प्रस्ताव",
    heroHeadlineEn: "Fast, Itemized Commercial Quotations & Tender Compliance Packs",
    heroHeadlineHi: "त्वरित, आइटमवार व्यावसायिक कोटेशन एवं टेंडर अनुपालन दस्तावेज",
    heroSubtitleEn: "Receive official project pricing, delivery timelines, shipping schedules, and clause-by-clause compliance statements tailored to your bill of quantities.",
    heroSubtitleHi: "अपनी परियोजना आवश्यकताओं के अनुसार आधिकारिक आइटमवार तकनीकी मूल्य, डिलीवरी समय और टेंडर अनुपालन दस्तावेज प्राप्त करें।",
    bannerImage: "/images/bollards_perimeter.jpg",
    secondaryBannerImage: "/images/crash_barrier_perimeter.jpg",
    fieldBannerImage: "/images/road_blocker_barrier.jpg",
    stats: [
      { value: "Same-Day", labelEn: "Standard Estimate Dispatch", labelHi: "त्वरित कोटेशन प्रेषण", subEn: "Fast commercial turnaround", subHi: "तेज व्यावसायिक प्रतिक्रिया" },
      { value: "Itemized", labelEn: "Transparent Technical Quotes", labelHi: "पारदर्शी आइटमवार कोटेशन", subEn: "Detailed bill of materials", subHi: "विस्तृत सामग्री सूची" },
      { value: "Pan-India", labelEn: "Direct Freight Logistics", labelHi: "अखिल भारतीय डिलीवरी", subEn: "Safe crated road dispatch", subHi: "सुरक्षित क्रेटेड डिलीवरी" },
      { value: "OEM", labelEn: "Volume Tier Discounts", labelHi: "थोक वॉल्यूम डिस्काउंट", subEn: "Special project tariffs", subHi: "विशेष परियोजना दरें" }
    ],
    deepDiveTitleEn: "Rapid, Accurate Proposals for Projects & Tenders",
    deepDiveTitleHi: "परियोजनाओं और टेंडरों के लिए त्वरित एवं सटीक प्रस्ताव",
    deepDiveParasEn: [
      "Whether you are preparing a formal railway tender submission, pricing an industrial switchboard contract, or procuring spare safety units for plant maintenance, our sales engineering desk delivers fast, itemized proposals.",
      "All quotations include full technical compliance statements, dimensional drawings, testing certifications, and transparent delivery schedules.",
      "Submit your required quantities, product models, and delivery location in the form below to receive your official quotation."
    ],
    deepDiveParasHi: [
      "चाहे आप औपचारिक रेलवे टेंडर तैयार कर रहे हों, औद्योगिक स्विचबोर्ड अनुबंध का मूल्य निर्धारण कर रहे हों या मेंटेनेंस के लिए सुरक्षा उपकरण खरीद रहे हों, हमारी डेस्क त्वरित और पारदर्शी प्रस्ताव तैयार करती है।",
      "सभी कोटेशन में पूर्ण तकनीकी अनुपालन विवरण, ड्राइंग, परीक्षण प्रमाण पत्र और स्पष्ट डिलीवरी कार्यक्रम शामिल होते हैं।",
      "आधिकारिक कोटेशन प्राप्त करने के लिए नीचे दिए गए फॉर्म में आवश्यक मात्रा, उत्पाद मॉडल और डिलीवरी स्थान साझा करें।"
    ],
    contactPillars: [
      { icon: "COMPLIANCE", titleEn: "Tender Compliance Packs", titleHi: "टेंडर अनुपालन दस्तावेज", descEn: "Includes clause-by-clause technical compliance statements and test certificates.", descHi: "क्लॉज-दर-क्लॉज तकनीकी अनुपालन विवरण और परीक्षण प्रमाण पत्र शामिल।" },
      { icon: "VOLUME", titleEn: "Tiered Project Volume Pricing", titleHi: "परियोजना वॉल्यूम डिस्काउंट", descEn: "Special discounted project tariffs for bulk rail division upgrades and large OEM switchboard builders.", descHi: "थोक रेलवे अपग्रेड और बड़े ओईएम स्विचबोर्ड निर्माताओं के लिए विशेष रियायती दरें।" },
      { icon: "WARRANTY", titleEn: "Standard & Extended Warranty", titleHi: "मानक एवं विस्तारित वारंटी विकल्प", descEn: "12-month standard factory warranty with optional extended 36-month lifecycle support contracts.", descHi: "12 महीने की मानक वारंटी और 36 महीने के विस्तारित सपोर्ट अनुबंध।" }
    ],
    regionalOffices: [
      { cityEn: "National Tenders Desk", cityHi: "राष्ट्रीय टेंडर डेस्क", roleEn: "Railway Division & Metro Turnkey Projects", roleHi: "रेलवे डिवीजन एवं मेट्रो टर्नकी प्रोजेक्ट्स", phone: "+91 11 4988 7750", email: "tenders@global-safety.com" },
      { cityEn: "Commercial OEM Sales", cityHi: "व्यावसायिक OEM बिक्री", roleEn: "Switchboard Builders & Industrial Contractors", roleHi: "स्विचबोर्ड निर्माता एवं ठेकेदार", phone: "+91 22 6122 8850", email: "commercial@global-safety.com" }
    ],
    relatedSublinks: [
      { titleEn: "Talk to Engineering", titleHi: "इंजीनियरिंग से बात करें", href: "/contact/engineering-team", tag: "CONSULT" },
      { titleEn: "Product Datasheets", titleHi: "डेटाशीट डाउनलोड", href: "/support/datasheets", tag: "DOCS" }
    ]
  }
};

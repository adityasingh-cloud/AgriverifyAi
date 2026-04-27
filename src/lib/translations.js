export const LANGUAGES = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
];

export const translations = {
  "en": {
    "nav": {
      "home": "Home",
      "problem": "Problem",
      "features": "Features",
      "demo": "Demo",
      "blogs": "Blogs",
      "contact": "Contact",
      "tryDemo": "Try Demo"
    },
    "hero": {
      "badge": "Live on Polygon Mainnet · 12,847 Crops Verified",
      "title1": "Bringing Science",
      "title2": "to the Mandi.",
      "subtitle": "An AI-driven ecosystem for world-standard crop grading and fair price discovery. Built for India's 140 million farmers. Powered by blockchain transparency.",
      "btnDemo": "🔬 Try Live Demo",
      "btnWhitepaper": "⛓️ View Whitepaper"
    },
    "stats": {
      "farmers": "Farmers Targeted",
      "accuracy": "Grade Accuracy",
      "languages": "Languages",
      "prices": "Better Prices"
    },
    "marquee": [
      "🌾 ResNet-50 AI Grading",
      "⛓️ Polygon Blockchain",
      "🗣️ Bhashini Voice API",
      "📊 e-NAM Price Sync",
      "🔐 Photo-Digital Twins",
      "🌍 22 Indian Languages",
      "📱 Offline-First Architecture",
      "💚 AGMARK Certified",
      "🛡️ Anti-Fraud QR Seals",
      "⚡ Edge Computing"
    ],
    "problem": {
      "badge": "🚨 The Real Crisis",
      "title": "The Gap in the System",
      "subtitle": "Every harvest season, millions of Indian farmers lose what they've rightfully earned. Here's the anatomy of exploitation.",
      "items": [
        {
          "icon": "⚖️",
          "title": "Subjective Exploitation",
          "stat": "₹92,651 Cr",
          "statLabel": "Lost to biased grading annually",
          "desc": "Commission agents visually grade crops with zero standards — a 60-year-old unchecked conflict of interest that costs farmers everything.",
          "points": [
            "No standardized grading protocols",
            "Agents control weighing & pricing",
            "Zero farmer appeal mechanism"
          ]
        },
        {
          "icon": "📡",
          "title": "Information Asymmetry",
          "stat": "10×",
          "statLabel": "Farm-to-consumer price gap",
          "desc": "Farmers arrive at the mandi without knowing real prices. Buyers coordinate daily. A blindfolded farmer cannot negotiate against organized buyers.",
          "points": [
            "Zero real-time market intelligence",
            "Buyers in daily coordination",
            "Farmer negotiates in the dark"
          ]
        },
        {
          "icon": "🗣️",
          "title": "Language Barriers",
          "stat": "62%",
          "statLabel": "Rural Indians non-literate in English",
          "desc": "Every digital agricultural service assumes the user can read English. 500 million Indians speak neither English nor Hindi as their first language.",
          "points": [
            "Apps require English literacy",
            "No dialect-level voice support",
            "Women farmers most excluded"
          ]
        }
      ]
    },
    "features": {
      "badge": "⚗️ The Secret Sauce",
      "title": "Engineered for Fairness",
      "subtitle": "Four interlocking technologies that close every loophole of exploitation.",
      "items": [
        {
          "icon": "🧠",
          "title": "Edge-AI Grading",
          "sub": "ResNet-50 Visual Intelligence",
          "tags": [
            "ResNet-50",
            "TensorFlow Lite",
            "Offline-First",
            "±2% Accuracy"
          ],
          "desc": "Offline visual inspection fine-tuned on 500,000+ Indian crop images. Runs on ₹8,000 Android phones. Delivers objective grades in under 3 seconds."
        },
        {
          "icon": "🗣️",
          "title": "Vernacular Voice",
          "sub": "Bhashini API Integration",
          "tags": [
            "Bhashini API",
            "22 Languages",
            "Dialect Support",
            "Zero Literacy"
          ],
          "desc": "Zero-literacy interaction across 22 Indian languages and regional dialects. Farmers speak and receive responses in their mother tongue."
        },
        {
          "icon": "⛓️",
          "title": "Blockchain Passport",
          "sub": "Polygon · ERC-721 NFT",
          "tags": [
            "Polygon Network",
            "ERC-721 NFT",
            "IPFS Storage",
            "QR Verification"
          ],
          "desc": "Every verified crop receives a tamper-proof quality certificate on Polygon — QR-sealed, instantly verifiable, legally defensible."
        },
        {
          "icon": "📊",
          "title": "Real-time Discovery",
          "sub": "Direct e-NAM Price Syncing",
          "tags": [
            "e-NAM API",
            "1000+ Mandis",
            "15-min Updates",
            "Regional Compare"
          ],
          "desc": "Live market price feeds from 1,000+ mandis synced every 15 minutes. Farmers see true market value before entering the mandi."
        }
      ]
    },
    "demo": {
      "badge": "🔬 Interactive Demo",
      "title": "Try AgriVerify AI",
      "subtitle": "Upload any crop photo — watch our AI analyze, grade, and price it instantly",
      "terminal": "agriverify-ai // crop-scanner v2.4.1 // polygon:mainnet",
      "live": "LIVE",
      "idle": {
        "title": "Instant Crop Intelligence",
        "desc": "Upload wheat, rice, cotton, tomato or any crop. Our ResNet-50 model analyzes quality against AGMARK standards and fetches real mandi prices.",
        "points": [
          "Visual quality inspection in 3 seconds",
          "Moisture via spectral reflection analysis",
          "Live prices from 1,000+ mandis",
          "Blockchain certificate on Polygon"
        ],
        "btn": "📤 Upload Crop Image",
        "drop": "Drop your crop image here",
        "types": "JPG · PNG · WEBP supported"
      },
      "scan": {
        "title": "AI Vision Analysis",
        "desc": "Analyzing grain morphology, color distribution, and damage markers..."
      },
      "result": {
        "title": "Verified Crop Passport",
        "sub": "Minted on Polygon",
        "grade": "Grade",
        "price": "Market Price",
        "val": "Est. Value",
        "btn": "Scan Another Crop"
      }
    },
    "authenticity": {
      "badge": "🌍 Global Authenticity & Compliance Engine",
      "title1": "Immutable Verification.",
      "title2": "Global Standards.",
      "subtitle": "Every harvest is certified against Codex Alimentarius (FAO/WHO) and ISO 22000 international standards. The Polygon blockchain provides an Immutable Audit Trail, ensuring that quality data recorded at the farm-gate cannot be altered.",
      "stats": {
        "minted": "Certificates Minted",
        "cost": "Cost Efficiency",
        "accuracy": "Compliance Accuracy",
        "tampering": "Tampering Incidents"
      },
      "searchPlaceholder": "Enter Certificate ID (e.g. 0x7E3A...)",
      "btnVerify": "Verify Now",
      "cert": {
        "title": "Digital Trust Certificate",
        "idLabel": "CERTIFICATE ID",
        "cropLabel": "CROP TYPE",
        "cropVal": "Premium Wheat (Triticum aestivum)",
        "gradeLabel": "QUALITY GRADE",
        "gradeVal": "Class I / Grade A",
        "timeLabel": "TIMESTAMP",
        "statusLabel": "STATUS",
        "statusVal": "VERIFIED & IMMUTABLE"
      }
    },
    "blogs": {
      "badge": "📝 Research & Insights",
      "title": "The Indian Farmer's Crisis",
      "subtitle": "In-depth research on the systemic challenges facing India's 140 million farming families."
    },
    "team": {
      "badge": "👥 The Team",
      "title": "Built by Believers"
    },
    "contact": {
      "title": "Ready to Transform Agriculture?",
      "sub": "Join the waitlist to get early access to AgriVerify AI.",
      "btn": "🚀 Start Free Trial"
    },
    "footer": {
      "copy": "© 2025 AgriVerify AI · Built on",
      "scroll": "Scroll"
    }
  },
  "hi": {
    "nav": {
      "home": "मुख्य पृष्ठ",
      "problem": "समस्या",
      "features": "विशेषताएं",
      "demo": "डेमो",
      "blogs": "ब्लॉग",
      "contact": "संपर्क",
      "tryDemo": "डेमो देखें"
    },
    "hero": {
      "badge": "पॉलीगॉन मेननेट पर लाइव · 12,847 फसलें सत्यापित",
      "title1": "मंडी में",
      "title2": "विज्ञान लाना।",
      "subtitle": "विश्व-मानक फसल ग्रेडिंग और उचित मूल्य खोज के लिए एआई-संचालित पारिस्थितिकी तंत्र। भारत के 14 करोड़ किसानों के लिए निर्मित। ब्लॉकचेन द्वारा समर्थित।",
      "btnDemo": "🔬 लाइव डेमो देखें",
      "btnWhitepaper": "⛓️ व्हाइटपेपर देखें"
    },
    "stats": {
      "farmers": "लक्षित किसान",
      "accuracy": "ग्रेड सटीकता",
      "languages": "भाषाएँ",
      "prices": "बेहतर मूल्य"
    },
    "marquee": [
      "🌾 ResNet-50 AI Grading",
      "⛓️ Polygon Blockchain",
      "🗣️ Bhashini Voice API",
      "📊 e-NAM Price Sync",
      "🔐 Photo-Digital Twins",
      "🌍 22 Indian Languages",
      "📱 Offline-First Architecture",
      "💚 AGMARK Certified",
      "🛡️ Anti-Fraud QR Seals",
      "⚡ Edge Computing"
    ],
    "problem": {
      "badge": "🚨 असली संकट",
      "title": "सिस्टम में खामी",
      "subtitle": "हर फसल के मौसम में, लाखों भारतीय किसान अपनी मेहनत की कमाई खो देते हैं। शोषण की शारीरिक रचना यहाँ दी गई है।",
      "items": [
        {
          "icon": "⚖️",
          "title": "व्यक्तिगत शोषण",
          "stat": "₹92,651 Cr",
          "statLabel": "प्रति वर्ष पक्षपाती ग्रेडिंग से नुकसान",
          "desc": "कमीशन एजेंट बिना किसी मानक के फसलों को ग्रेड करते हैं - एक 60 साल पुराना अनियंत्रित हित-टकराव।",
          "points": [
            "कोई मानकीकृत ग्रेडिंग प्रोटोकॉल नहीं",
            "एजेंट वजन और मूल्य निर्धारण को नियंत्रित करते हैं",
            "कोई किसान अपील तंत्र नहीं"
          ]
        },
        {
          "icon": "📡",
          "title": "सूचना विषमता",
          "stat": "10×",
          "statLabel": "खेत से उपभोक्ता मूल्य का अंतर",
          "desc": "किसान वास्तविक कीमतों को जाने बिना मंडी पहुंच जाते हैं। खरीदार दैनिक समन्वय करते हैं।",
          "points": [
            "शून्य वास्तविक समय बाजार बुद्धिमत्ता",
            "दैनिक समन्वय में खरीदार",
            "अंधेरे में किसान की बातचीत"
          ]
        },
        {
          "icon": "🗣️",
          "title": "भाषा बाधाएं",
          "stat": "62%",
          "statLabel": "ग्रामीण भारतीय अंग्रेजी में गैर-साक्षर",
          "desc": "हर कृषि ऐप मानता है कि उपयोगकर्ता अंग्रेजी पढ़ सकता है। 50 करोड़ भारतीय पहली भाषा के रूप में ना अंग्रेजी ना हिंदी बोलते हैं।",
          "points": [
            "ऐप्स को अंग्रेजी साक्षरता की आवश्यकता",
            "कोई क्षेत्रीय आवाज समर्थन नहीं",
            "महिला किसान सबसे अधिक बहिष्कृत"
          ]
        }
      ]
    },
    "features": {
      "badge": "⚗️ मुख्य तकनीक",
      "title": "निष्पक्षता के लिए डिज़ाइन",
      "subtitle": "चार इंटरलॉकिंग प्रौद्योगिकियां जो शोषण के हर बचाव के रास्ते को बंद कर देती हैं।",
      "items": [
        {
          "icon": "🧠",
          "title": "एज-एआई ग्रेडिंग",
          "sub": "ResNet-50 Visual Intelligence",
          "tags": [
            "ResNet-50",
            "TensorFlow Lite",
            "Offline-First",
            "±2% Accuracy"
          ],
          "desc": "500,000+ भारतीय फसल छवियों पर प्रशिक्षित ऑफ़लाइन दृश्य निरीक्षण।"
        },
        {
          "icon": "🗣️",
          "title": "स्थानीय भाषा की आवाज़",
          "sub": "Bhashini API Integration",
          "tags": [
            "Bhashini API",
            "22 Languages",
            "Dialect Support",
            "Zero Literacy"
          ],
          "desc": "22 भारतीय भाषाओं और क्षेत्रीय बोलियों में शून्य-साक्षरता बातचीत।"
        },
        {
          "icon": "⛓️",
          "title": "ब्लॉकचेन पासपोर्ट",
          "sub": "Polygon · ERC-721 NFT",
          "tags": [
            "Polygon Network",
            "ERC-721 NFT",
            "IPFS Storage",
            "QR Verification"
          ],
          "desc": "प्रत्येक सत्यापित फसल को पॉलीगॉन पर छेड़छाड़-प्रूफ गुणवत्ता प्रमाणपत्र मिलता है।"
        },
        {
          "icon": "📊",
          "title": "रीयल-टाइम डिस्कवरी",
          "sub": "Direct e-NAM Price Syncing",
          "tags": [
            "e-NAM API",
            "1000+ Mandis",
            "15-min Updates",
            "Regional Compare"
          ],
          "desc": "हर 15 मिनट में 1,000+ मंडियों से लाइव बाजार मूल्य फ़ीड सिंक।"
        }
      ]
    },
    "demo": {
      "badge": "🔬 संवादात्मक डेमो",
      "title": "एग्रीवेरिफाई एआई आज़माएं",
      "subtitle": "कोई भी फसल फोटो अपलोड करें - देखें कि हमारा एआई इसका विश्लेषण कैसे करता है",
      "terminal": "agriverify-ai // crop-scanner v2.4.1 // polygon:mainnet",
      "live": "लाइव",
      "idle": {
        "title": "त्वरित फसल बुद्धिमत्ता",
        "desc": "गेहूं, चावल, कपास या कोई भी फसल अपलोड करें। हमारा मॉडल एगमार्क मानकों के खिलाफ गुणवत्ता का विश्लेषण करता है।",
        "points": [
          "3 सेकंड में दृश्य गुणवत्ता निरीक्षण",
          "नमी विश्लेषण",
          "1,000+ मंडियों से लाइव कीमतें",
          "पॉलीगॉन पर प्रमाणपत्र"
        ],
        "btn": "📤 फसल की तस्वीर अपलोड करें",
        "drop": "अपनी फसल की छवि यहां छोड़ें",
        "types": "JPG · PNG · WEBP समर्थित"
      },
      "scan": {
        "title": "एआई विजन विश्लेषण",
        "desc": "अनाज आकारिकी, रंग वितरण और क्षति मार्करों का विश्लेषण..."
      },
      "result": {
        "title": "सत्यापित फसल पासपोर्ट",
        "sub": "पॉलीगॉन पर मिंटेड",
        "grade": "ग्रेड",
        "price": "बाजार मूल्य",
        "val": "अनुमानित मूल्य",
        "btn": "दूसरी फसल स्कैन करें"
      }
    },
    "authenticity": {
      "badge": "🌍 वैश्विक प्रामाणिकता और अनुपालन इंजन",
      "title1": "अपरिवर्तनीय सत्यापन।",
      "title2": "वैश्विक मानक।",
      "subtitle": "प्रत्येक फसल को कोडेक्स एलिमेंटेरियस और ISO 22000 अंतरराष्ट्रीय मानकों के खिलाफ प्रमाणित किया जाता है। पॉलीगॉन ब्लॉकचेन एक अपरिवर्तनीय ऑडिट ट्रेल प्रदान करता है।",
      "stats": {
        "minted": "प्रमाणपत्र जारी किए गए",
        "cost": "लागत दक्षता",
        "accuracy": "अनुपालन सटीकता",
        "tampering": "छेड़छाड़ की घटनाएं"
      },
      "searchPlaceholder": "प्रमाणपत्र आईडी दर्ज करें",
      "btnVerify": "अभी सत्यापित करें",
      "cert": {
        "title": "डिजिटल ट्रस्ट प्रमाणपत्र",
        "idLabel": "प्रमाणपत्र आईडी",
        "cropLabel": "फसल का प्रकार",
        "cropVal": "प्रीमियम गेहूं",
        "gradeLabel": "गुणवत्ता ग्रेड",
        "gradeVal": "ग्रेड ए",
        "timeLabel": "समय",
        "statusLabel": "स्थिति",
        "statusVal": "सत्यापित"
      }
    },
    "blogs": {
      "badge": "📝 शोध और अंतर्दृष्टि",
      "title": "भारतीय किसान का संकट",
      "subtitle": "भारत के 14 करोड़ किसान परिवारों के सामने आने वाली प्रणालीगत चुनौतियों पर गहन शोध।"
    },
    "team": {
      "badge": "👥 टीम",
      "title": "विश्वास करने वालों द्वारा निर्मित"
    },
    "contact": {
      "title": "कृषि को बदलने के लिए तैयार हैं?",
      "sub": "एग्रीवेरिफाई एआई तक जल्दी पहुंच पाने के लिए प्रतीक्षा सूची में शामिल हों।",
      "btn": "🚀 फ्री ट्रायल शुरू करें"
    },
    "footer": {
      "copy": "© 2025 एग्रीवेरिफाई एआई · पॉलीगॉन पर निर्मित",
      "scroll": "स्क्रॉल"
    }
  },
  "bn": {
    "nav": {
      "home": "হোম",
      "problem": "সমস্যা",
      "features": "বৈশিষ্ট্য",
      "demo": "ডেমো",
      "blogs": "ব্লগ",
      "contact": "যোগাযোগ",
      "tryDemo": "ডেমো দেখুন"
    },
    "hero": {
      "badge": "পলিগন মেইননেটে লাইভ · ১২,৮৪৭ ফসল যাচাইকৃত",
      "title1": "মন্ডিতে",
      "title2": "বিজ্ঞান আনা।",
      "subtitle": "বিশ্বমানের ফসল গ্রেডিং এবং সঠিক দামের জন্য এআই চালিত ইকোসিস্টেম। ভারতের ১৪ কোটি কৃষকের জন্য তৈরি। ব্লকচেইন দ্বারা চালিত।",
      "btnDemo": "🔬 লাইভ ডেমো দেখুন",
      "btnWhitepaper": "⛓️ শ্বেতপত্র দেখুন"
    },
    "stats": {
      "farmers": "লক্ষ্যযুক্ত কৃষক",
      "accuracy": "গ্রেড নির্ভুলতা",
      "languages": "ভাষা",
      "prices": "ভালো দাম"
    },
    "marquee": [
      "🌾 ResNet-50 AI Grading",
      "⛓️ Polygon Blockchain",
      "🗣️ Bhashini Voice API",
      "📊 e-NAM Price Sync",
      "🔐 Photo-Digital Twins",
      "🌍 22 Indian Languages",
      "📱 Offline-First Architecture",
      "💚 AGMARK Certified",
      "🛡️ Anti-Fraud QR Seals",
      "⚡ Edge Computing"
    ],
    "problem": {
      "badge": "🚨 বাস্তব সংকট",
      "title": "সিস্টেমের ব্যবধান",
      "subtitle": "প্রতি ফসল মৌসুমে, লক্ষ লক্ষ ভারতীয় কৃষক তাদের উপার্জন হারায়।",
      "items": [
        {
          "icon": "⚖️",
          "title": "व्यक्तिगत शोषण",
          "stat": "₹92,651 Cr",
          "statLabel": "प्रति वर्ष पक्षपाती ग्रेडिंग से नुकसान",
          "desc": "कमीशन एजेंट बिना किसी मानक के फसलों को ग्रेड करते हैं - एक 60 साल पुराना अनियंत्रित हित-टकराव।",
          "points": [
            "कोई मानकीकृत ग्रेडिंग प्रोटोकॉल नहीं",
            "एजेंट वजन और मूल्य निर्धारण को नियंत्रित करते हैं",
            "कोई किसान अपील तंत्र नहीं"
          ]
        },
        {
          "icon": "📡",
          "title": "सूचना विषमता",
          "stat": "10×",
          "statLabel": "खेत से उपभोक्ता मूल्य का अंतर",
          "desc": "किसान वास्तविक कीमतों को जाने बिना मंडी पहुंच जाते हैं। खरीदार दैनिक समन्वय करते हैं।",
          "points": [
            "शून्य वास्तविक समय बाजार बुद्धिमत्ता",
            "दैनिक समन्वय में खरीदार",
            "अंधेरे में किसान की बातचीत"
          ]
        },
        {
          "icon": "🗣️",
          "title": "भाषा बाधाएं",
          "stat": "62%",
          "statLabel": "ग्रामीण भारतीय अंग्रेजी में गैर-साक्षर",
          "desc": "हर कृषि ऐप मानता है कि उपयोगकर्ता अंग्रेजी पढ़ सकता है। 50 करोड़ भारतीय पहली भाषा के रूप में ना अंग्रेजी ना हिंदी बोलते हैं।",
          "points": [
            "ऐप्स को अंग्रेजी साक्षरता की आवश्यकता",
            "कोई क्षेत्रीय आवाज समर्थन नहीं",
            "महिला किसान सबसे अधिक बहिष्कृत"
          ]
        }
      ]
    },
    "features": {
      "badge": "⚗️ মূল প্রযুক্তি",
      "title": "ন্যায্যতার জন্য ডিজাইন",
      "subtitle": "চারটি প্রযুক্তি যা শোষণের প্রতিটি পথ বন্ধ করে দেয়।",
      "items": [
        {
          "icon": "🧠",
          "title": "एज-एआई ग्रेडिंग",
          "sub": "ResNet-50 Visual Intelligence",
          "tags": [
            "ResNet-50",
            "TensorFlow Lite",
            "Offline-First",
            "±2% Accuracy"
          ],
          "desc": "500,000+ भारतीय फसल छवियों पर प्रशिक्षित ऑफ़लाइन दृश्य निरीक्षण।"
        },
        {
          "icon": "🗣️",
          "title": "स्थानीय भाषा की आवाज़",
          "sub": "Bhashini API Integration",
          "tags": [
            "Bhashini API",
            "22 Languages",
            "Dialect Support",
            "Zero Literacy"
          ],
          "desc": "22 भारतीय भाषाओं और क्षेत्रीय बोलियों में शून्य-साक्षरता बातचीत।"
        },
        {
          "icon": "⛓️",
          "title": "ब्लॉकचेन पासपोर्ट",
          "sub": "Polygon · ERC-721 NFT",
          "tags": [
            "Polygon Network",
            "ERC-721 NFT",
            "IPFS Storage",
            "QR Verification"
          ],
          "desc": "प्रत्येक सत्यापित फसल को पॉलीगॉन पर छेड़छाड़-प्रूफ गुणवत्ता प्रमाणपत्र मिलता है।"
        },
        {
          "icon": "📊",
          "title": "रीयल-टाइम डिस्कवरी",
          "sub": "Direct e-NAM Price Syncing",
          "tags": [
            "e-NAM API",
            "1000+ Mandis",
            "15-min Updates",
            "Regional Compare"
          ],
          "desc": "हर 15 मिनट में 1,000+ मंडियों से लाइव बाजार मूल्य फ़ीड सिंक।"
        }
      ]
    },
    "demo": {
      "badge": "🔬 ডেমো",
      "title": "অ্যাগ্রিভেরিফাই এআই চেষ্টা করুন",
      "subtitle": "যেকোনো ফসলের ছবি আপলোড করুন।",
      "terminal": "agriverify-ai // crop-scanner v2.4.1 // polygon:mainnet",
      "live": "लाइव",
      "idle": {
        "title": "त्वरित फसल बुद्धिमत्ता",
        "desc": "गेहूं, चावल, कपास या कोई भी फसल अपलोड करें। हमारा मॉडल एगमार्क मानकों के खिलाफ गुणवत्ता का विश्लेषण करता है।",
        "points": [
          "3 सेकंड में दृश्य गुणवत्ता निरीक्षण",
          "नमी विश्लेषण",
          "1,000+ मंडियों से लाइव कीमतें",
          "पॉलीगॉन पर प्रमाणपत्र"
        ],
        "btn": "📤 फसल की तस्वीर अपलोड करें",
        "drop": "अपनी फसल की छवि यहां छोड़ें",
        "types": "JPG · PNG · WEBP समर्थित"
      },
      "scan": {
        "title": "एआई विजन विश्लेषण",
        "desc": "अनाज आकारिकी, रंग वितरण और क्षति मार्करों का विश्लेषण..."
      },
      "result": {
        "title": "सत्यापित फसल पासपोर्ट",
        "sub": "पॉलीगॉन पर मिंटेड",
        "grade": "ग्रेड",
        "price": "बाजार मूल्य",
        "val": "अनुमानित मूल्य",
        "btn": "दूसरी फसल स्कैन करें"
      }
    },
    "authenticity": {
      "badge": "🌍 গ্লোবাল অথেণ্টিসিটি",
      "title1": "অপরিবর্তনীয় যাচাইকরণ।",
      "title2": "গ্লোবাল স্ট্যান্ডার্ড।",
      "subtitle": "प्रत्येक फसल को कोडेक्स एलिमेंटेरियस और ISO 22000 अंतरराष्ट्रीय मानकों के खिलाफ प्रमाणित किया जाता है। पॉलीगॉन ब्लॉकचेन एक अपरिवर्तनीय ऑडिट ट्रेल प्रदान करता है।",
      "stats": {
        "minted": "प्रमाणपत्र जारी किए गए",
        "cost": "लागत दक्षता",
        "accuracy": "अनुपालन सटीकता",
        "tampering": "छेड़छाड़ की घटनाएं"
      },
      "searchPlaceholder": "प्रमाणपत्र आईडी दर्ज करें",
      "btnVerify": "যাচাই করুন",
      "cert": {
        "title": "डिजिटल ट्रस्ट प्रमाणपत्र",
        "idLabel": "प्रमाणपत्र आईडी",
        "cropLabel": "फसल का प्रकार",
        "cropVal": "प्रीमियम गेहूं",
        "gradeLabel": "गुणवत्ता ग्रेड",
        "gradeVal": "ग्रेड ए",
        "timeLabel": "समय",
        "statusLabel": "स्थिति",
        "statusVal": "सत्यापित"
      }
    },
    "blogs": {
      "badge": "📝 গবেষণা",
      "title": "ভারতীয় কৃষকের সংকট",
      "subtitle": "ভারতের ১৪ কোটি কৃষক পরিবারের গভীর গবেষণা।"
    },
    "team": {
      "badge": "👥 टीम",
      "title": "विश्वास करने वालों द्वारा निर्मित"
    },
    "contact": {
      "title": "কৃষি রূপান্তর করতে প্রস্তুত?",
      "sub": "প্রারম্ভিক অ্যাক্সেস পেতে যোগ দিন।",
      "btn": "🚀 ফ্রি ট্রায়াল শুরু করুন"
    },
    "footer": {
      "copy": "© 2025 অ্যাগ্রিভেরিফাই এআই · পলিগনে নির্মিত",
      "scroll": "স্ক্রোল"
    }
  },
  "mr": {
    "nav": {
      "home": "मुख्यपृष्ठ",
      "problem": "समस्या",
      "features": "वैशिष्ट्ये",
      "demo": "डेमो",
      "blogs": "ब्लॉग",
      "contact": "संपर्क",
      "tryDemo": "डेमो पहा"
    },
    "hero": {
      "badge": "पॉलिगॉन मेननेटवर लाईव्ह · १२,८४७ पिके सत्यापित",
      "title1": "मंडीत",
      "title2": "विज्ञान आणणे.",
      "subtitle": "जागतिक दर्जाच्या पीक प्रतवारी आणि योग्य किंमतीसाठी एआय-संचलित परिसंस्था. भारताच्या १४ कोटी शेतकऱ्यांसाठी बनवली.",
      "btnDemo": "🔬 लाईव्ह डेमो पहा",
      "btnWhitepaper": "⛓️ व्हाईटपेपर पहा"
    },
    "stats": {
      "farmers": "लक्षित शेतकरी",
      "accuracy": "ग्रेड अचूकता",
      "languages": "भाषा",
      "prices": "उत्तम भाव"
    },
    "marquee": [
      "🌾 ResNet-50 AI Grading",
      "⛓️ Polygon Blockchain",
      "🗣️ Bhashini Voice API",
      "📊 e-NAM Price Sync",
      "🔐 Photo-Digital Twins",
      "🌍 22 Indian Languages",
      "📱 Offline-First Architecture",
      "💚 AGMARK Certified",
      "🛡️ Anti-Fraud QR Seals",
      "⚡ Edge Computing"
    ],
    "problem": {
      "badge": "🚨 खरे संकट",
      "title": "व्यवस्थेतील त्रुटी",
      "subtitle": "प्रत्येक हंगामात लाखो भारतीय शेतकरी आपली कमाई गमावतात.",
      "items": [
        {
          "icon": "⚖️",
          "title": "व्यक्तिगत शोषण",
          "stat": "₹92,651 Cr",
          "statLabel": "प्रति वर्ष पक्षपाती ग्रेडिंग से नुकसान",
          "desc": "कमीशन एजेंट बिना किसी मानक के फसलों को ग्रेड करते हैं - एक 60 साल पुराना अनियंत्रित हित-टकराव।",
          "points": [
            "कोई मानकीकृत ग्रेडिंग प्रोटोकॉल नहीं",
            "एजेंट वजन और मूल्य निर्धारण को नियंत्रित करते हैं",
            "कोई किसान अपील तंत्र नहीं"
          ]
        },
        {
          "icon": "📡",
          "title": "सूचना विषमता",
          "stat": "10×",
          "statLabel": "खेत से उपभोक्ता मूल्य का अंतर",
          "desc": "किसान वास्तविक कीमतों को जाने बिना मंडी पहुंच जाते हैं। खरीदार दैनिक समन्वय करते हैं।",
          "points": [
            "शून्य वास्तविक समय बाजार बुद्धिमत्ता",
            "दैनिक समन्वय में खरीदार",
            "अंधेरे में किसान की बातचीत"
          ]
        },
        {
          "icon": "🗣️",
          "title": "भाषा बाधाएं",
          "stat": "62%",
          "statLabel": "ग्रामीण भारतीय अंग्रेजी में गैर-साक्षर",
          "desc": "हर कृषि ऐप मानता है कि उपयोगकर्ता अंग्रेजी पढ़ सकता है। 50 करोड़ भारतीय पहली भाषा के रूप में ना अंग्रेजी ना हिंदी बोलते हैं।",
          "points": [
            "ऐप्स को अंग्रेजी साक्षरता की आवश्यकता",
            "कोई क्षेत्रीय आवाज समर्थन नहीं",
            "महिला किसान सबसे अधिक बहिष्कृत"
          ]
        }
      ]
    },
    "features": {
      "badge": "⚗️ मुख्य तंत्रज्ञान",
      "title": "न्याय्यतेसाठी तयार",
      "subtitle": "शोषणाची सर्व दारे बंद करणारे तंत्रज्ञान.",
      "items": [
        {
          "icon": "🧠",
          "title": "एज-एआई ग्रेडिंग",
          "sub": "ResNet-50 Visual Intelligence",
          "tags": [
            "ResNet-50",
            "TensorFlow Lite",
            "Offline-First",
            "±2% Accuracy"
          ],
          "desc": "500,000+ भारतीय फसल छवियों पर प्रशिक्षित ऑफ़लाइन दृश्य निरीक्षण।"
        },
        {
          "icon": "🗣️",
          "title": "स्थानीय भाषा की आवाज़",
          "sub": "Bhashini API Integration",
          "tags": [
            "Bhashini API",
            "22 Languages",
            "Dialect Support",
            "Zero Literacy"
          ],
          "desc": "22 भारतीय भाषाओं और क्षेत्रीय बोलियों में शून्य-साक्षरता बातचीत।"
        },
        {
          "icon": "⛓️",
          "title": "ब्लॉकचेन पासपोर्ट",
          "sub": "Polygon · ERC-721 NFT",
          "tags": [
            "Polygon Network",
            "ERC-721 NFT",
            "IPFS Storage",
            "QR Verification"
          ],
          "desc": "प्रत्येक सत्यापित फसल को पॉलीगॉन पर छेड़छाड़-प्रूफ गुणवत्ता प्रमाणपत्र मिलता है।"
        },
        {
          "icon": "📊",
          "title": "रीयल-टाइम डिस्कवरी",
          "sub": "Direct e-NAM Price Syncing",
          "tags": [
            "e-NAM API",
            "1000+ Mandis",
            "15-min Updates",
            "Regional Compare"
          ],
          "desc": "हर 15 मिनट में 1,000+ मंडियों से लाइव बाजार मूल्य फ़ीड सिंक।"
        }
      ]
    },
    "demo": {
      "badge": "🔬 डेमो",
      "title": "AgriVerify AI वापरून पहा",
      "subtitle": "कोणताही पीक फोटो अपलोड करा.",
      "terminal": "agriverify-ai // crop-scanner v2.4.1 // polygon:mainnet",
      "live": "लाइव",
      "idle": {
        "title": "त्वरित फसल बुद्धिमत्ता",
        "desc": "गेहूं, चावल, कपास या कोई भी फसल अपलोड करें। हमारा मॉडल एगमार्क मानकों के खिलाफ गुणवत्ता का विश्लेषण करता है।",
        "points": [
          "3 सेकंड में दृश्य गुणवत्ता निरीक्षण",
          "नमी विश्लेषण",
          "1,000+ मंडियों से लाइव कीमतें",
          "पॉलीगॉन पर प्रमाणपत्र"
        ],
        "btn": "📤 फसल की तस्वीर अपलोड करें",
        "drop": "अपनी फसल की छवि यहां छोड़ें",
        "types": "JPG · PNG · WEBP समर्थित"
      },
      "scan": {
        "title": "एआई विजन विश्लेषण",
        "desc": "अनाज आकारिकी, रंग वितरण और क्षति मार्करों का विश्लेषण..."
      },
      "result": {
        "title": "सत्यापित फसल पासपोर्ट",
        "sub": "पॉलीगॉन पर मिंटेड",
        "grade": "ग्रेड",
        "price": "बाजार मूल्य",
        "val": "अनुमानित मूल्य",
        "btn": "दूसरी फसल स्कैन करें"
      }
    },
    "authenticity": {
      "badge": "🌍 जागतिक प्रामाणिकता",
      "title1": "अपरिवर्तनीय पडताळणी.",
      "title2": "जागतिक मानके.",
      "subtitle": "प्रत्येक फसल को कोडेक्स एलिमेंटेरियस और ISO 22000 अंतरराष्ट्रीय मानकों के खिलाफ प्रमाणित किया जाता है। पॉलीगॉन ब्लॉकचेन एक अपरिवर्तनीय ऑडिट ट्रेल प्रदान करता है।",
      "stats": {
        "minted": "प्रमाणपत्र जारी किए गए",
        "cost": "लागत दक्षता",
        "accuracy": "अनुपालन सटीकता",
        "tampering": "छेड़छाड़ की घटनाएं"
      },
      "searchPlaceholder": "प्रमाणपत्र आईडी दर्ज करें",
      "btnVerify": "आता पडताळणी करा",
      "cert": {
        "title": "डिजिटल ट्रस्ट प्रमाणपत्र",
        "idLabel": "प्रमाणपत्र आईडी",
        "cropLabel": "फसल का प्रकार",
        "cropVal": "प्रीमियम गेहूं",
        "gradeLabel": "गुणवत्ता ग्रेड",
        "gradeVal": "ग्रेड ए",
        "timeLabel": "समय",
        "statusLabel": "स्थिति",
        "statusVal": "सत्यापित"
      }
    },
    "blogs": {
      "badge": "📝 संशोधन",
      "title": "भारतीय शेतकऱ्यांचे संकट",
      "subtitle": "भारतातील १४ कोटी शेतकरी कुटुंबांवरील सखोल संशोधन."
    },
    "team": {
      "badge": "👥 टीम",
      "title": "विश्वास करने वालों द्वारा निर्मित"
    },
    "contact": {
      "title": "शेती बदलण्यास तयार आहात?",
      "sub": "लवकर प्रवेश मिळवण्यासाठी सामील व्हा.",
      "btn": "🚀 फ्री ट्रायल सुरू करा"
    },
    "footer": {
      "copy": "© 2025 AgriVerify AI · पॉलिगॉनवर निर्मित",
      "scroll": "स्क्रोल"
    }
  },
  "te": {
    "nav": {
      "home": "హోమ్",
      "problem": "సమస్య",
      "features": "లక్షణాలు",
      "demo": "డెమో",
      "blogs": "బ్లాగులు",
      "contact": "సంప్రదించండి",
      "tryDemo": "డెమో చూడండి"
    },
    "hero": {
      "badge": "పాలిగాన్ మెయిన్ నెట్‌లో లైవ్ · 12,847 పంటలు ధృవీకరించబడ్డాయి",
      "title1": "మండీకి",
      "title2": "సైన్స్‌ని తీసుకురావడం.",
      "subtitle": "ప్రపంచ-స్థాయి పంట గ్రేడింగ్ మరియు సరసమైన ధరల కోసం AI-ఆధారిత పర్యావరణ వ్యవస్థ.",
      "btnDemo": "🔬 డెమో చూడండి",
      "btnWhitepaper": "⛓️ వైట్‌పేపర్ చూడండి"
    },
    "stats": {
      "farmers": "లక్ష్య రైతులు",
      "accuracy": "గ్రేడ్ ఖచ్చితత్వం",
      "languages": "భాషలు",
      "prices": "మెరుగైన ధరలు"
    },
    "marquee": [
      "🌾 ResNet-50 AI Grading",
      "⛓️ Polygon Blockchain",
      "🗣️ Bhashini Voice API",
      "📊 e-NAM Price Sync",
      "🔐 Photo-Digital Twins",
      "🌍 22 Indian Languages",
      "📱 Offline-First Architecture",
      "💚 AGMARK Certified",
      "🛡️ Anti-Fraud QR Seals",
      "⚡ Edge Computing"
    ],
    "problem": {
      "badge": "🚨 అసలు సంక్షోభం",
      "title": "వ్యవస్థలో లోపం",
      "subtitle": "ప్రతి సీజన్‌లో లక్షలాది రైతులు నష్టపోతున్నారు.",
      "items": [
        {
          "icon": "⚖️",
          "title": "व्यक्तिगत शोषण",
          "stat": "₹92,651 Cr",
          "statLabel": "प्रति वर्ष पक्षपाती ग्रेडिंग से नुकसान",
          "desc": "कमीशन एजेंट बिना किसी मानक के फसलों को ग्रेड करते हैं - एक 60 साल पुराना अनियंत्रित हित-टकराव।",
          "points": [
            "कोई मानकीकृत ग्रेडिंग प्रोटोकॉल नहीं",
            "एजेंट वजन और मूल्य निर्धारण को नियंत्रित करते हैं",
            "कोई किसान अपील तंत्र नहीं"
          ]
        },
        {
          "icon": "📡",
          "title": "सूचना विषमता",
          "stat": "10×",
          "statLabel": "खेत से उपभोक्ता मूल्य का अंतर",
          "desc": "किसान वास्तविक कीमतों को जाने बिना मंडी पहुंच जाते हैं। खरीदार दैनिक समन्वय करते हैं।",
          "points": [
            "शून्य वास्तविक समय बाजार बुद्धिमत्ता",
            "दैनिक समन्वय में खरीदार",
            "अंधेरे में किसान की बातचीत"
          ]
        },
        {
          "icon": "🗣️",
          "title": "भाषा बाधाएं",
          "stat": "62%",
          "statLabel": "ग्रामीण भारतीय अंग्रेजी में गैर-साक्षर",
          "desc": "हर कृषि ऐप मानता है कि उपयोगकर्ता अंग्रेजी पढ़ सकता है। 50 करोड़ भारतीय पहली भाषा के रूप में ना अंग्रेजी ना हिंदी बोलते हैं।",
          "points": [
            "ऐप्स को अंग्रेजी साक्षरता की आवश्यकता",
            "कोई क्षेत्रीय आवाज समर्थन नहीं",
            "महिला किसान सबसे अधिक बहिष्कृत"
          ]
        }
      ]
    },
    "features": {
      "badge": "⚗️ ప్రధాన సాంకేతికత",
      "title": "న్యాయం కోసం డిజైన్",
      "subtitle": "దోపిడీని ఆపే నాలుగు సాంకేతికతలు.",
      "items": [
        {
          "icon": "🧠",
          "title": "एज-एआई ग्रेडिंग",
          "sub": "ResNet-50 Visual Intelligence",
          "tags": [
            "ResNet-50",
            "TensorFlow Lite",
            "Offline-First",
            "±2% Accuracy"
          ],
          "desc": "500,000+ भारतीय फसल छवियों पर प्रशिक्षित ऑफ़लाइन दृश्य निरीक्षण।"
        },
        {
          "icon": "🗣️",
          "title": "स्थानीय भाषा की आवाज़",
          "sub": "Bhashini API Integration",
          "tags": [
            "Bhashini API",
            "22 Languages",
            "Dialect Support",
            "Zero Literacy"
          ],
          "desc": "22 भारतीय भाषाओं और क्षेत्रीय बोलियों में शून्य-साक्षरता बातचीत।"
        },
        {
          "icon": "⛓️",
          "title": "ब्लॉकचेन पासपोर्ट",
          "sub": "Polygon · ERC-721 NFT",
          "tags": [
            "Polygon Network",
            "ERC-721 NFT",
            "IPFS Storage",
            "QR Verification"
          ],
          "desc": "प्रत्येक सत्यापित फसल को पॉलीगॉन पर छेड़छाड़-प्रूफ गुणवत्ता प्रमाणपत्र मिलता है।"
        },
        {
          "icon": "📊",
          "title": "रीयल-टाइम डिस्कवरी",
          "sub": "Direct e-NAM Price Syncing",
          "tags": [
            "e-NAM API",
            "1000+ Mandis",
            "15-min Updates",
            "Regional Compare"
          ],
          "desc": "हर 15 मिनट में 1,000+ मंडियों से लाइव बाजार मूल्य फ़ीड सिंक।"
        }
      ]
    },
    "demo": {
      "badge": "🔬 డెమో",
      "title": "AgriVerify AI ప్రయత్నించండి",
      "subtitle": "పంట ఫోటోను అప్‌లోడ్ చేయండి.",
      "terminal": "agriverify-ai // crop-scanner v2.4.1 // polygon:mainnet",
      "live": "लाइव",
      "idle": {
        "title": "त्वरित फसल बुद्धिमत्ता",
        "desc": "गेहूं, चावल, कपास या कोई भी फसल अपलोड करें। हमारा मॉडल एगमार्क मानकों के खिलाफ गुणवत्ता का विश्लेषण करता है।",
        "points": [
          "3 सेकंड में दृश्य गुणवत्ता निरीक्षण",
          "नमी विश्लेषण",
          "1,000+ मंडियों से लाइव कीमतें",
          "पॉलीगॉन पर प्रमाणपत्र"
        ],
        "btn": "📤 फसल की तस्वीर अपलोड करें",
        "drop": "अपनी फसल की छवि यहां छोड़ें",
        "types": "JPG · PNG · WEBP समर्थित"
      },
      "scan": {
        "title": "एआई विजन विश्लेषण",
        "desc": "अनाज आकारिकी, रंग वितरण और क्षति मार्करों का विश्लेषण..."
      },
      "result": {
        "title": "सत्यापित फसल पासपोर्ट",
        "sub": "पॉलीगॉन पर मिंटेड",
        "grade": "ग्रेड",
        "price": "बाजार मूल्य",
        "val": "अनुमानित मूल्य",
        "btn": "दूसरी फसल स्कैन करें"
      }
    },
    "authenticity": {
      "badge": "🌍 గ్లోబల్ ప్రామాణికత",
      "title1": "స్థిరమైన ధృవీకరణ.",
      "title2": "ప్రపంచ ప్రమాణాలు.",
      "subtitle": "प्रत्येक फसल को कोडेक्स एलिमेंटेरियस और ISO 22000 अंतरराष्ट्रीय मानकों के खिलाफ प्रमाणित किया जाता है। पॉलीगॉन ब्लॉकचेन एक अपरिवर्तनीय ऑडिट ट्रेल प्रदान करता है।",
      "stats": {
        "minted": "प्रमाणपत्र जारी किए गए",
        "cost": "लागत दक्षता",
        "accuracy": "अनुपालन सटीकता",
        "tampering": "छेड़छाड़ की घटनाएं"
      },
      "searchPlaceholder": "प्रमाणपत्र आईडी दर्ज करें",
      "btnVerify": "ఇప్పుడే ధృవీకరించండి",
      "cert": {
        "title": "डिजिटल ट्रस्ट प्रमाणपत्र",
        "idLabel": "प्रमाणपत्र आईडी",
        "cropLabel": "फसल का प्रकार",
        "cropVal": "प्रीमियम गेहूं",
        "gradeLabel": "गुणवत्ता ग्रेड",
        "gradeVal": "ग्रेड ए",
        "timeLabel": "समय",
        "statusLabel": "स्थिति",
        "statusVal": "सत्यापित"
      }
    },
    "blogs": {
      "badge": "📝 పరిశోధన",
      "title": "భారతీయ రైతుల సంక్షోభం",
      "subtitle": "14 కోట్ల రైతు కుటుంబాలపై లోతైన పరిశోధన."
    },
    "team": {
      "badge": "👥 टीम",
      "title": "विश्वास करने वालों द्वारा निर्मित"
    },
    "contact": {
      "title": "వ్యవసాయాన్ని మార్చడానికి సిద్ధంగా ఉన్నారా?",
      "sub": "ముందుగా యాక్సెస్ పొందడానికి చేరండి.",
      "btn": "🚀 ఉచిత ట్రయల్ ప్రారంభించండి"
    },
    "footer": {
      "copy": "© 2025 AgriVerify AI · పాలిగాన్‌పై నిర్మించబడింది",
      "scroll": "స్క్రోల్"
    }
  },
  "ta": {
    "nav": {
      "home": "முகப்பு",
      "problem": "சிக்கல்",
      "features": "அம்சங்கள்",
      "demo": "டெமோ",
      "blogs": "வலைப்பதிவு",
      "contact": "தொடர்பு",
      "tryDemo": "டெமோ காண்க"
    },
    "hero": {
      "badge": "பாலிகான் மெயின்நெட்டில் நேரலை · 12,847 பயிர்கள் சரிபார்க்கப்பட்டன",
      "title1": "மண்டிக்கு",
      "title2": "அறிவியலைக் கொண்டு வருதல்.",
      "subtitle": "உலகத் தர பயிர் தரப்படுத்தல் மற்றும் நியாயமான விலைக்கான AI அமைப்பு.",
      "btnDemo": "🔬 நேரடி டெமோவைக் காண்க",
      "btnWhitepaper": "⛓️ வெள்ளை அறிக்கை காண்க"
    },
    "stats": {
      "farmers": "இலக்கு விவசாயிகள்",
      "accuracy": "தர துல்லியம்",
      "languages": "மொழிகள்",
      "prices": "சிறந்த விலை"
    },
    "marquee": [
      "🌾 ResNet-50 AI Grading",
      "⛓️ Polygon Blockchain",
      "🗣️ Bhashini Voice API",
      "📊 e-NAM Price Sync",
      "🔐 Photo-Digital Twins",
      "🌍 22 Indian Languages",
      "📱 Offline-First Architecture",
      "💚 AGMARK Certified",
      "🛡️ Anti-Fraud QR Seals",
      "⚡ Edge Computing"
    ],
    "problem": {
      "badge": "🚨 உண்மையான நெருக்கடி",
      "title": "அமைப்பில் உள்ள இடைவெளி",
      "subtitle": "ஒவ்வொரு பருவத்திலும் லட்சக்கணக்கான விவசாயிகள் இழக்கின்றனர்.",
      "items": [
        {
          "icon": "⚖️",
          "title": "व्यक्तिगत शोषण",
          "stat": "₹92,651 Cr",
          "statLabel": "प्रति वर्ष पक्षपाती ग्रेडिंग से नुकसान",
          "desc": "कमीशन एजेंट बिना किसी मानक के फसलों को ग्रेड करते हैं - एक 60 साल पुराना अनियंत्रित हित-टकराव।",
          "points": [
            "कोई मानकीकृत ग्रेडिंग प्रोटोकॉल नहीं",
            "एजेंट वजन और मूल्य निर्धारण को नियंत्रित करते हैं",
            "कोई किसान अपील तंत्र नहीं"
          ]
        },
        {
          "icon": "📡",
          "title": "सूचना विषमता",
          "stat": "10×",
          "statLabel": "खेत से उपभोक्ता मूल्य का अंतर",
          "desc": "किसान वास्तविक कीमतों को जाने बिना मंडी पहुंच जाते हैं। खरीदार दैनिक समन्वय करते हैं।",
          "points": [
            "शून्य वास्तविक समय बाजार बुद्धिमत्ता",
            "दैनिक समन्वय में खरीदार",
            "अंधेरे में किसान की बातचीत"
          ]
        },
        {
          "icon": "🗣️",
          "title": "भाषा बाधाएं",
          "stat": "62%",
          "statLabel": "ग्रामीण भारतीय अंग्रेजी में गैर-साक्षर",
          "desc": "हर कृषि ऐप मानता है कि उपयोगकर्ता अंग्रेजी पढ़ सकता है। 50 करोड़ भारतीय पहली भाषा के रूप में ना अंग्रेजी ना हिंदी बोलते हैं।",
          "points": [
            "ऐप्स को अंग्रेजी साक्षरता की आवश्यकता",
            "कोई क्षेत्रीय आवाज समर्थन नहीं",
            "महिला किसान सबसे अधिक बहिष्कृत"
          ]
        }
      ]
    },
    "features": {
      "badge": "⚗️ முக்கிய தொழில்நுட்பம்",
      "title": "நியாயத்திற்கான வடிவமைப்பு",
      "subtitle": "சுரண்டலை நிறுத்தும் நான்கு தொழில்நுட்பங்கள்.",
      "items": [
        {
          "icon": "🧠",
          "title": "एज-एआई ग्रेडिंग",
          "sub": "ResNet-50 Visual Intelligence",
          "tags": [
            "ResNet-50",
            "TensorFlow Lite",
            "Offline-First",
            "±2% Accuracy"
          ],
          "desc": "500,000+ भारतीय फसल छवियों पर प्रशिक्षित ऑफ़लाइन दृश्य निरीक्षण।"
        },
        {
          "icon": "🗣️",
          "title": "स्थानीय भाषा की आवाज़",
          "sub": "Bhashini API Integration",
          "tags": [
            "Bhashini API",
            "22 Languages",
            "Dialect Support",
            "Zero Literacy"
          ],
          "desc": "22 भारतीय भाषाओं और क्षेत्रीय बोलियों में शून्य-साक्षरता बातचीत।"
        },
        {
          "icon": "⛓️",
          "title": "ब्लॉकचेन पासपोर्ट",
          "sub": "Polygon · ERC-721 NFT",
          "tags": [
            "Polygon Network",
            "ERC-721 NFT",
            "IPFS Storage",
            "QR Verification"
          ],
          "desc": "प्रत्येक सत्यापित फसल को पॉलीगॉन पर छेड़छाड़-प्रूफ गुणवत्ता प्रमाणपत्र मिलता है।"
        },
        {
          "icon": "📊",
          "title": "रीयल-टाइम डिस्कवरी",
          "sub": "Direct e-NAM Price Syncing",
          "tags": [
            "e-NAM API",
            "1000+ Mandis",
            "15-min Updates",
            "Regional Compare"
          ],
          "desc": "हर 15 मिनट में 1,000+ मंडियों से लाइव बाजार मूल्य फ़ीड सिंक।"
        }
      ]
    },
    "demo": {
      "badge": "🔬 டெமோ",
      "title": "AgriVerify AI ஐ முயற்சிக்கவும்",
      "subtitle": "பயிர் புகைப்படத்தை பதிவேற்றவும்.",
      "terminal": "agriverify-ai // crop-scanner v2.4.1 // polygon:mainnet",
      "live": "लाइव",
      "idle": {
        "title": "त्वरित फसल बुद्धिमत्ता",
        "desc": "गेहूं, चावल, कपास या कोई भी फसल अपलोड करें। हमारा मॉडल एगमार्क मानकों के खिलाफ गुणवत्ता का विश्लेषण करता है।",
        "points": [
          "3 सेकंड में दृश्य गुणवत्ता निरीक्षण",
          "नमी विश्लेषण",
          "1,000+ मंडियों से लाइव कीमतें",
          "पॉलीगॉन पर प्रमाणपत्र"
        ],
        "btn": "📤 फसल की तस्वीर अपलोड करें",
        "drop": "अपनी फसल की छवि यहां छोड़ें",
        "types": "JPG · PNG · WEBP समर्थित"
      },
      "scan": {
        "title": "एआई विजन विश्लेषण",
        "desc": "अनाज आकारिकी, रंग वितरण और क्षति मार्करों का विश्लेषण..."
      },
      "result": {
        "title": "सत्यापित फसल पासपोर्ट",
        "sub": "पॉलीगॉन पर मिंटेड",
        "grade": "ग्रेड",
        "price": "बाजार मूल्य",
        "val": "अनुमानित मूल्य",
        "btn": "दूसरी फसल स्कैन करें"
      }
    },
    "authenticity": {
      "badge": "🌍 உலகளாவிய நம்பகத்தன்மை",
      "title1": "மாற்ற முடியாத சரிபார்ப்பு.",
      "title2": "உலகளாவிய தரநிலைகள்.",
      "subtitle": "प्रत्येक फसल को कोडेक्स एलिमेंटेरियस और ISO 22000 अंतरराष्ट्रीय मानकों के खिलाफ प्रमाणित किया जाता है। पॉलीगॉन ब्लॉकचेन एक अपरिवर्तनीय ऑडिट ट्रेल प्रदान करता है।",
      "stats": {
        "minted": "प्रमाणपत्र जारी किए गए",
        "cost": "लागत दक्षता",
        "accuracy": "अनुपालन सटीकता",
        "tampering": "छेड़छाड़ की घटनाएं"
      },
      "searchPlaceholder": "प्रमाणपत्र आईडी दर्ज करें",
      "btnVerify": "இப்போது சரிபார்க்கவும்",
      "cert": {
        "title": "डिजिटल ट्रस्ट प्रमाणपत्र",
        "idLabel": "प्रमाणपत्र आईडी",
        "cropLabel": "फसल का प्रकार",
        "cropVal": "प्रीमियम गेहूं",
        "gradeLabel": "गुणवत्ता ग्रेड",
        "gradeVal": "ग्रेड ए",
        "timeLabel": "समय",
        "statusLabel": "स्थिति",
        "statusVal": "सत्यापित"
      }
    },
    "blogs": {
      "badge": "📝 ஆராய்ச்சி",
      "title": "விவசாயிகளின் நெருக்கடி",
      "subtitle": "14 கோடி விவசாய குடும்பங்கள் பற்றிய ஆழமான ஆராய்ச்சி."
    },
    "team": {
      "badge": "👥 टीम",
      "title": "विश्वास करने वालों द्वारा निर्मित"
    },
    "contact": {
      "title": "விவசாயத்தை மாற்ற தயாரா?",
      "sub": "முன்கூட்டியே அணுக சேரவும்.",
      "btn": "🚀 இலவச சோதனையைத் தொடங்கு"
    },
    "footer": {
      "copy": "© 2025 AgriVerify AI · பாலிகானில் உருவாக்கப்பட்டது",
      "scroll": "ஸ்க்ரோல்"
    }
  },
  "kn": {
    "nav": {
      "home": "ಮುಖಪುಟ",
      "problem": "ಸಮಸ್ಯೆ",
      "features": "ವೈಶಿಷ್ಟ್ಯಗಳು",
      "demo": "ಡೆಮೊ",
      "blogs": "ಬ್ಲಾಗ್‌ಗಳು",
      "contact": "ಸಂಪರ್ಕ",
      "tryDemo": "ಡೆಮೊ ನೋಡಿ"
    },
    "hero": {
      "badge": "ಪಾಲಿಗಾನ್ ಮೇನ್‌ನೆಟ್‌ನಲ್ಲಿ ಲೈವ್ · 12,847 ಬೆಳೆಗಳನ್ನು ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
      "title1": "ಮಂಡಿಗೆ",
      "title2": "ವಿಜ್ಞಾನವನ್ನು ತರುವುದು.",
      "subtitle": "ವಿಶ್ವ-ಮಟ್ಟದ ಬೆಳೆ ಶ್ರೇಣೀಕರಣ ಮತ್ತು ನ್ಯಾಯೋಚಿತ ಬೆಲೆಗಾಗಿ AI-ಚಾಲಿತ ಪರಿಸರ ವ್ಯವಸ್ಥೆ.",
      "btnDemo": "🔬 ಡೆಮೊ ನೋಡಿ",
      "btnWhitepaper": "⛓️ ಶ್ವೇತಪತ್ರ ನೋಡಿ"
    },
    "stats": {
      "farmers": "ಗುರಿ ರೈತರು",
      "accuracy": "ಗ್ರೇಡ್ ನಿಖರತೆ",
      "languages": "ಭಾಷೆಗಳು",
      "prices": "ಉತ್ತಮ ಬೆಲೆಗಳು"
    },
    "marquee": [
      "🌾 ResNet-50 AI Grading",
      "⛓️ Polygon Blockchain",
      "🗣️ Bhashini Voice API",
      "📊 e-NAM Price Sync",
      "🔐 Photo-Digital Twins",
      "🌍 22 Indian Languages",
      "📱 Offline-First Architecture",
      "💚 AGMARK Certified",
      "🛡️ Anti-Fraud QR Seals",
      "⚡ Edge Computing"
    ],
    "problem": {
      "badge": "🚨 ನೈಜ ಬಿಕ್ಕಟ್ಟು",
      "title": "ವ್ಯವಸ್ಥೆಯಲ್ಲಿನ ಅಂತರ",
      "subtitle": "ಪ್ರತಿ ಋತುವಿನಲ್ಲಿ ಲಕ್ಷಾಂತರ ರೈತರು ನಷ್ಟ ಅನುಭವಿಸುತ್ತಾರೆ.",
      "items": [
        {
          "icon": "⚖️",
          "title": "व्यक्तिगत शोषण",
          "stat": "₹92,651 Cr",
          "statLabel": "प्रति वर्ष पक्षपाती ग्रेडिंग से नुकसान",
          "desc": "कमीशन एजेंट बिना किसी मानक के फसलों को ग्रेड करते हैं - एक 60 साल पुराना अनियंत्रित हित-टकराव।",
          "points": [
            "कोई मानकीकृत ग्रेडिंग प्रोटोकॉल नहीं",
            "एजेंट वजन और मूल्य निर्धारण को नियंत्रित करते हैं",
            "कोई किसान अपील तंत्र नहीं"
          ]
        },
        {
          "icon": "📡",
          "title": "सूचना विषमता",
          "stat": "10×",
          "statLabel": "खेत से उपभोक्ता मूल्य का अंतर",
          "desc": "किसान वास्तविक कीमतों को जाने बिना मंडी पहुंच जाते हैं। खरीदार दैनिक समन्वय करते हैं।",
          "points": [
            "शून्य वास्तविक समय बाजार बुद्धिमत्ता",
            "दैनिक समन्वय में खरीदार",
            "अंधेरे में किसान की बातचीत"
          ]
        },
        {
          "icon": "🗣️",
          "title": "भाषा बाधाएं",
          "stat": "62%",
          "statLabel": "ग्रामीण भारतीय अंग्रेजी में गैर-साक्षर",
          "desc": "हर कृषि ऐप मानता है कि उपयोगकर्ता अंग्रेजी पढ़ सकता है। 50 करोड़ भारतीय पहली भाषा के रूप में ना अंग्रेजी ना हिंदी बोलते हैं।",
          "points": [
            "ऐप्स को अंग्रेजी साक्षरता की आवश्यकता",
            "कोई क्षेत्रीय आवाज समर्थन नहीं",
            "महिला किसान सबसे अधिक बहिष्कृत"
          ]
        }
      ]
    },
    "features": {
      "badge": "⚗️ ಮುಖ್ಯ ತಂತ್ರಜ್ಞಾನ",
      "title": "ನ್ಯಾಯಕ್ಕಾಗಿ ವಿನ್ಯಾಸ",
      "subtitle": "ಶೋಷಣೆಯನ್ನು ನಿಲ್ಲಿಸುವ ನಾಲ್ಕು ತಂತ್ರಜ್ಞಾನಗಳು.",
      "items": [
        {
          "icon": "🧠",
          "title": "एज-एआई ग्रेडिंग",
          "sub": "ResNet-50 Visual Intelligence",
          "tags": [
            "ResNet-50",
            "TensorFlow Lite",
            "Offline-First",
            "±2% Accuracy"
          ],
          "desc": "500,000+ भारतीय फसल छवियों पर प्रशिक्षित ऑफ़लाइन दृश्य निरीक्षण।"
        },
        {
          "icon": "🗣️",
          "title": "स्थानीय भाषा की आवाज़",
          "sub": "Bhashini API Integration",
          "tags": [
            "Bhashini API",
            "22 Languages",
            "Dialect Support",
            "Zero Literacy"
          ],
          "desc": "22 भारतीय भाषाओं और क्षेत्रीय बोलियों में शून्य-साक्षरता बातचीत।"
        },
        {
          "icon": "⛓️",
          "title": "ब्लॉकचेन पासपोर्ट",
          "sub": "Polygon · ERC-721 NFT",
          "tags": [
            "Polygon Network",
            "ERC-721 NFT",
            "IPFS Storage",
            "QR Verification"
          ],
          "desc": "प्रत्येक सत्यापित फसल को पॉलीगॉन पर छेड़छाड़-प्रूफ गुणवत्ता प्रमाणपत्र मिलता है।"
        },
        {
          "icon": "📊",
          "title": "रीयल-टाइम डिस्कवरी",
          "sub": "Direct e-NAM Price Syncing",
          "tags": [
            "e-NAM API",
            "1000+ Mandis",
            "15-min Updates",
            "Regional Compare"
          ],
          "desc": "हर 15 मिनट में 1,000+ मंडियों से लाइव बाजार मूल्य फ़ीड सिंक।"
        }
      ]
    },
    "demo": {
      "badge": "🔬 ಡೆಮೊ",
      "title": "AgriVerify AI ಪ್ರಯತ್ನಿಸಿ",
      "subtitle": "ಬೆಳೆಯ ಫೋಟೋವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
      "terminal": "agriverify-ai // crop-scanner v2.4.1 // polygon:mainnet",
      "live": "लाइव",
      "idle": {
        "title": "त्वरित फसल बुद्धिमत्ता",
        "desc": "गेहूं, चावल, कपास या कोई भी फसल अपलोड करें। हमारा मॉडल एगमार्क मानकों के खिलाफ गुणवत्ता का विश्लेषण करता है।",
        "points": [
          "3 सेकंड में दृश्य गुणवत्ता निरीक्षण",
          "नमी विश्लेषण",
          "1,000+ मंडियों से लाइव कीमतें",
          "पॉलीगॉन पर प्रमाणपत्र"
        ],
        "btn": "📤 फसल की तस्वीर अपलोड करें",
        "drop": "अपनी फसल की छवि यहां छोड़ें",
        "types": "JPG · PNG · WEBP समर्थित"
      },
      "scan": {
        "title": "एआई विजन विश्लेषण",
        "desc": "अनाज आकारिकी, रंग वितरण और क्षति मार्करों का विश्लेषण..."
      },
      "result": {
        "title": "सत्यापित फसल पासपोर्ट",
        "sub": "पॉलीगॉन पर मिंटेड",
        "grade": "ग्रेड",
        "price": "बाजार मूल्य",
        "val": "अनुमानित मूल्य",
        "btn": "दूसरी फसल स्कैन करें"
      }
    },
    "authenticity": {
      "badge": "🌍 ಜಾಗತಿಕ ಅಧಿಕೃತತೆ",
      "title1": "ಬದಲಾಯಿಸಲಾಗದ ಪರಿಶೀಲನೆ.",
      "title2": "ಜಾಗತಿಕ ಮಾನದಂಡಗಳು.",
      "subtitle": "प्रत्येक फसल को कोडेक्स एलिमेंटेरियस और ISO 22000 अंतरराष्ट्रीय मानकों के खिलाफ प्रमाणित किया जाता है। पॉलीगॉन ब्लॉकचेन एक अपरिवर्तनीय ऑडिट ट्रेल प्रदान करता है।",
      "stats": {
        "minted": "प्रमाणपत्र जारी किए गए",
        "cost": "लागत दक्षता",
        "accuracy": "अनुपालन सटीकता",
        "tampering": "छेड़छाड़ की घटनाएं"
      },
      "searchPlaceholder": "प्रमाणपत्र आईडी दर्ज करें",
      "btnVerify": "ಈಗ ಪರಿಶೀಲಿಸಿ",
      "cert": {
        "title": "डिजिटल ट्रस्ट प्रमाणपत्र",
        "idLabel": "प्रमाणपत्र आईडी",
        "cropLabel": "फसल का प्रकार",
        "cropVal": "प्रीमियम गेहूं",
        "gradeLabel": "गुणवत्ता ग्रेड",
        "gradeVal": "ग्रेड ए",
        "timeLabel": "समय",
        "statusLabel": "स्थिति",
        "statusVal": "सत्यापित"
      }
    },
    "blogs": {
      "badge": "📝 ಸಂಶೋಧನೆ",
      "title": "ರೈತರ ಬಿಕ್ಕಟ್ಟು",
      "subtitle": "14 ಕೋಟಿ ರೈತ ಕುಟುಂಬಗಳ ಬಗ್ಗೆ ಆಳವಾದ ಸಂಶೋಧನೆ."
    },
    "team": {
      "badge": "👥 टीम",
      "title": "विश्वास करने वालों द्वारा निर्मित"
    },
    "contact": {
      "title": "ಕೃಷಿಯನ್ನು ಬದಲಾಯಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
      "sub": "ಮೊದಲೇ ಪ್ರವೇಶ ಪಡೆಯಲು ಸೇರಿಕೊಳ್ಳಿ.",
      "btn": "🚀 ಉಚಿತ ಪ್ರಯೋಗ ಪ್ರಾರಂಭಿಸಿ"
    },
    "footer": {
      "copy": "© 2025 AgriVerify AI · ಪಾಲಿಗಾನ್‌ನಲ್ಲಿ ನಿರ್ಮಿಸಲಾಗಿದೆ",
      "scroll": "ಸ್ಕ್ರಾಲ್"
    }
  }
};
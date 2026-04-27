const fs = require('fs');

const fallbackBlogs = [
  { id:1,icon:"💰",category:"Market Exploitation",color:"#f472b6",date:"Apr 12 2025",readTime:"8 min",title:"The Price They Never See: How Middlemen Steal from Indian Farmers",excerpt:"Every harvest season, millions of farmers walk away with a fraction of what their crops are worth. The system is broken by design.",content:`## The Invisible Chain of Exploitation\n\nEvery year, India produces over 300 million tonnes of food grains. Yet the people who grow this food remain among the country's poorest citizens. The reason is a systemic failure baked into the agricultural supply chain.\n\n## How the Mandi System Works\n\nThe APMC system was designed in the 1960s to protect farmers. In practice it became the mechanism of exploitation. Commission agents (arhatiyas) control weighing, grading, storage, and credit — creating debt-bondage cycles lasting generations.\n\n**The Grade Manipulation**: Without standardized grading, arhatiyas visually inspect produce and assign quality grades. The conflict of interest is enormous — agents profit when grades are lower.\n\n## Real Numbers, Real Pain\n\nA 2022 ICAR study found onion farmers in Maharashtra received ₹2–₹5/kg at the farm gate, while Delhi consumers paid ₹40–₹60 for the same onions. The 10x gap was absorbed entirely by intermediaries. NABARD found 52.5% of agricultural households are indebted, with average debt of ₹74,121 per family.\n\n## What AgriVerify AI Changes\n\nObjective AI-driven quality grades, real-time price data synced from e-NAM, and blockchain-certified quality passports are dismantling 60 years of institutionalized exploitation — one verified transaction at a time.`},
  { id:2,icon:"🌡️",category:"Climate Crisis",color:"#fb923c",date:"Mar 28 2025",readTime:"10 min",title:"Death by a Thousand Droughts: Climate Change and the Indian Farmer",excerpt:"Monsoon patterns have shifted. Groundwater is depleting. Temperatures are rising. Farmers face a crisis they did nothing to create.",content:`## A Crisis Without a Voice\n\nThe IPCC warned: South Asia's agricultural systems face catastrophic disruption by 2050. For Indian farmers, this is not an abstract future — it is happening now, in their fields, this season.\n\n## The Monsoon Is Breaking\n\nThe 2023 Southwest Monsoon arrived 10 days late across peninsular India. States received extreme rainfall causing flash floods while Marathwada experienced prolonged dry spells within the same monsoon season.\n\n## Groundwater: The Silent Apocalypse\n\nIndia extracts 230 billion cubic meters of groundwater annually — more than the US and China combined. Punjab groundwater levels have dropped 33 cm per year since 2000. Wheat yields fall 4.5–6% per 1°C temperature increase during grain-filling.\n\n## The Farmer Suicide Connection\n\nA PNAS study found a 7.3% increase in farmer suicide rates per degree Celsius increase. Climate change was responsible for an estimated 59,300 farmer suicides between 1980 and 2013.\n\n## AgriVerify AI's Role\n\nOur blockchain quality passport creates a verifiable record of sustainable farming practices linkable to carbon markets, premium pricing, and international ESG supply chain requirements.`},
  { id:3,icon:"📱",category:"Digital Inclusion",color:"#a78bfa",date:"Mar 15 2025",readTime:"7 min",title:"The Literacy Trap: Why Digital India Left 140 Million Farmers Behind",excerpt:"Every government app assumes the user can read. Most Indian farmers cannot. This is a design failure, not a farmer failure.",content:`## The App That Doesn't Work\n\nThe NSSO estimates only 38% of rural Indians above 15 are functionally literate. In states like Rajasthan, Bihar, and UP, rural female literacy hovers at 30–40%. Every single agricultural app requires the ability to read.\n\n## The Language Layering Problem\n\nIndia has 22 scheduled languages and 1,600+ dialects. 500 million Indians speak neither English nor Hindi as their first language. Technology designed to help farmers cannot even be accessed by them.\n\n## The Voice Revolution\n\nBhashini — India's National Language Translation Mission — was created to bridge this gap. With support for 22+ languages, it makes any digital service voice-accessible across India's linguistic diversity.\n\n**AgriVerify AI's zero-literacy interface**: Farmers speak in their mother tongue or dialect. The system processes, translates, and responds in the same language. Quality reports are read aloud. No reading ability required at any point.\n\n## The Gender Dimension\n\nWomen perform 60–80% of agricultural labor but own less than 13% of agricultural land. Voice-first, vernacular interfaces lower barriers specifically for female farmers who have never typed on a smartphone.`},
  { id:4,icon:"🌱",category:"Soil Health",color:"#4ade80",date:"Feb 20 2025",readTime:"9 min",title:"Soil Under Siege: The Silent Degradation Destroying Indian Farmland",excerpt:"India's Green Revolution fed a billion people. It also quietly poisoned the soil that makes feeding them possible.",content:`## The Green Revolution's Hidden Cost\n\nFifty years of intensive monoculture farming and heavy chemical inputs have left 146.8 million hectares — 45% of India's total area — suffering soil degradation in some form.\n\n## The Chemistry of Destruction\n\nIndia uses 16.3 million tonnes of nitrogen fertilizers annually. Punjab's soil organic carbon has fallen to below 0.3% — critically below the 0.5% minimum for productive soil. Without adequate organic carbon, soils lose water retention capacity, microbial health, and structural integrity.\n\n60,000 tonnes of pesticides annually have decimated soil microbial communities in intensively farmed areas. Without robust microbial communities, plants cannot efficiently access nutrients — so farmers apply more fertilizer, making the problem worse.\n\n## AgriVerify AI's Soil Intelligence Vision\n\nWhen a farmer's crop consistently grades lower than regional benchmarks, the most likely culprit is soil health. Our roadmap includes spectral analysis of crop tissue to flag when quality degradation is soil-related.\n\nFarmers who demonstrate soil health practices — no-till, cover cropping, organic matter addition — can access premium markets that reward sustainable provenance through our blockchain passport.`},
  { id:5,icon:"📋",category:"Policy Failure",color:"#f87171",date:"Feb 5 2025",readTime:"8 min",title:"Broken Promises: The Reality of Crop Insurance in India",excerpt:"PM Fasal Bima Yojana was launched with great fanfare in 2016. Nine years later, farmers are still fighting for their dues.",content:`## The Insurance That Doesn't Insure\n\nSince 2016, farmers have paid PMFBY premiums of approximately ₹25,000 crore annually. Claims pending as of March 2024 exceeded ₹15,000 crore. In Maharashtra, farmers who suffered 2022 kharif losses were still waiting for payment in 2024.\n\n## How the System Fails\n\n**Enrollment Barriers**: Requires Aadhaar-linked bank accounts, valid land records, and smartphone access — excluding the most vulnerable farmers.\n\n**The Crop Cutting Experiment Problem**: Claims require physical crop sampling by state officials — massively understaffed, delayed by politics, prone to manipulation. A 2023 Parliamentary Committee found CCE data from several states "unreliable and not scientifically conducted."\n\n**Insurance Company Exit**: In 2022–23, Bajaj Allianz and HDFC Ergo exited PMFBY contracts. Enrolled farmers were transferred to new insurers, creating enormous confusion and further delays.\n\n## AgriVerify AI's Solution\n\nBlockchain-recorded crop quality data at harvest creates an immutable pre-loss record. A farmer with blockchain-certified Grade A wheat before the hailstorm, and Grade C after, has irrefutable claim evidence.`},
  { id:6,icon:"🥦",category:"Infrastructure",color:"#22d3ee",date:"Jan 18 2025",readTime:"7 min",title:"The Cold Chain Crisis: Why Half of India's Vegetables Rot Before You See Them",excerpt:"India wastes ₹92,651 crore worth of food annually due to cold chain failure. The farmer pays in collapsed prices.",content:`## From Farm to Waste\n\nIndia wastes approximately 40% of fruit and vegetable production — 67 million tonnes annually — due to catastrophically underdeveloped cold chain infrastructure. And it is always the farmer who pays.\n\n## The Economics of Rotting\n\nWhen a Himachal Pradesh tomato farmer has no cold storage, tomatoes must sell within 3–4 days or become worthless. In August 2023, tomato prices crashed to ₹2/kg in Karnataka — below packaging cost. Weeks later: ₹150/kg in Delhi. The crash was caused entirely by a supply glut with no cold storage buffer.\n\n## The Infrastructure Gap\n\nIndia's 37 million tonnes of cold storage capacity is 70% potato-specific and concentrated in UP, West Bengal, and Punjab. Tribal areas and dryland farming regions are almost entirely without cold chain.\n\n## AgriVerify AI's Contribution\n\nQuality verification at harvest helps farmers decide which produce is worth storing vs. selling immediately. Real-time e-NAM prices inform timing decisions. A blockchain quality passport unlocks direct relationships with retail chains and exporters who pay premium prices for certified quality.`},
];

const en = {
  nav: { home: "Home", problem: "Problem", features: "Features", demo: "Demo", blogs: "Blogs", contact: "Contact", tryDemo: "Try Demo" },
  hero: {
    badge: "Live on Polygon Mainnet · 12,847 Crops Verified",
    title1: "Bringing Science",
    title2: "to the Mandi.",
    subtitle: "An AI-driven ecosystem for world-standard crop grading and fair price discovery. Built for India's 140 million farmers. Powered by blockchain transparency.",
    btnDemo: "🔬 Try Live Demo",
    btnWhitepaper: "⛓️ View Whitepaper"
  },
  stats: {
    farmers: "Farmers Targeted",
    accuracy: "Grade Accuracy",
    languages: "Languages",
    prices: "Better Prices"
  },
  marquee: [
    "🌾 ResNet-50 AI Grading", "⛓️ Polygon Blockchain", "🗣️ Bhashini Voice API", "📊 e-NAM Price Sync", 
    "🔐 Photo-Digital Twins", "🌍 22 Indian Languages", "📱 Offline-First Architecture", "💚 AGMARK Certified", 
    "🛡️ Anti-Fraud QR Seals", "⚡ Edge Computing"
  ],
  problem: {
    badge: "🚨 The Real Crisis",
    title: "The Gap in the System",
    subtitle: "Every harvest season, millions of Indian farmers lose what they've rightfully earned. Here's the anatomy of exploitation.",
    items: [
      {icon:"⚖️",title:"Subjective Exploitation",stat:"₹92,651 Cr",statLabel:"Lost to biased grading annually",desc:"Commission agents visually grade crops with zero standards — a 60-year-old unchecked conflict of interest that costs farmers everything.",points:["No standardized grading protocols","Agents control weighing & pricing","Zero farmer appeal mechanism"]},
      {icon:"📡",title:"Information Asymmetry",stat:"10×",statLabel:"Farm-to-consumer price gap",desc:"Farmers arrive at the mandi without knowing real prices. Buyers coordinate daily. A blindfolded farmer cannot negotiate against organized buyers.",points:["Zero real-time market intelligence","Buyers in daily coordination","Farmer negotiates in the dark"]},
      {icon:"🗣️",title:"Language Barriers",stat:"62%",statLabel:"Rural Indians non-literate in English",desc:"Every digital agricultural service assumes the user can read English. 500 million Indians speak neither English nor Hindi as their first language.",points:["Apps require English literacy","No dialect-level voice support","Women farmers most excluded"]}
    ]
  },
  features: {
    badge: "⚗️ The Secret Sauce",
    title: "Engineered for Fairness",
    subtitle: "Four interlocking technologies that close every loophole of exploitation.",
    items: [
      {icon:"🧠",title:"Edge-AI Grading",sub:"ResNet-50 Visual Intelligence",tags:["ResNet-50","TensorFlow Lite","Offline-First","±2% Accuracy"],desc:"Offline visual inspection fine-tuned on 500,000+ Indian crop images. Runs on ₹8,000 Android phones. Delivers objective grades in under 3 seconds."},
      {icon:"🗣️",title:"Vernacular Voice",sub:"Bhashini API Integration",tags:["Bhashini API","22 Languages","Dialect Support","Zero Literacy"],desc:"Zero-literacy interaction across 22 Indian languages and regional dialects. Farmers speak and receive responses in their mother tongue."},
      {icon:"⛓️",title:"Blockchain Passport",sub:"Polygon · ERC-721 NFT",tags:["Polygon Network","ERC-721 NFT","IPFS Storage","QR Verification"],desc:"Every verified crop receives a tamper-proof quality certificate on Polygon — QR-sealed, instantly verifiable, legally defensible."},
      {icon:"📊",title:"Real-time Discovery",sub:"Direct e-NAM Price Syncing",tags:["e-NAM API","1000+ Mandis","15-min Updates","Regional Compare"],desc:"Live market price feeds from 1,000+ mandis synced every 15 minutes. Farmers see true market value before entering the mandi."}
    ]
  },
  demo: {
    badge: "🔬 Interactive Demo",
    title: "Try AgriVerify AI",
    subtitle: "Upload 3 distinct angles of your crop — watch our AI analyze against 10 world-standard metrics.",
    terminal: "agriverify-ai // crop-scanner v2.4.1 // polygon:mainnet",
    live: "LIVE",
    idle: {
      title: "Multi-Angle Verification",
      desc: "3-Way Analysis required to prevent Top-Layer Fraud (Loophole Mitigation).",
      points: ["Top View","Side View","Bottom View"],
      btn: "📤 Scan All Angles",
      drop: "Drop your image here",
      types: "JPG · PNG · WEBP supported"
    },
    scan: {
      title: "AI Vision Analysis",
      desc: "Analyzing 10 Codex & ISO Metrics: Varietal Purity, Moisture, Damage, Density..."
    },
    result: {
      title: "Verified Crop Passport",
      sub: "Minted on Polygon",
      grade: "Grade",
      price: "Market Price",
      val: "Est. Value",
      btn: "Scan Another Crop",
      metricsTitle: "Codex Alimentarius & ISO 22000 Technical Scorecard",
      metrics: [
        "Varietal Purity", "Moisture Content (%)", "Foreign Matter Detection", "Blemishes & Damage", 
        "Biometric Scaling", "Color Uniformity", "Bulk Density", "Internal Integrity", 
        "Shelf-Life Prediction", "Aflatoxin Risk"
      ],
      qrBtn: "View AgriPassport",
      pdfBtn: "Download PDF",
      voiceTitle: "Voice Settings",
      voiceMale: "Male (Clear)",
      voiceFemale: "Female (Soft)",
      replayBtn: "Replay Audio",
      voiceScript: "Hello. Analysis complete. Your crop has been graded as GRADE_NAME. The moisture level is MOISTURE_PERCENT percent, and the recommended market price is PRICE. You can now download your global certificate."
    },
    passport: {
      title: "AgriPassport",
      batchLabel: "Batch ID",
      originLabel: "Origin Tracking",
      originVal: "Punjab, India (Farm #402)",
      harvestLabel: "Harvest Date",
      harvestVal: "Oct 12, 2025",
      shelfLabel: "Shelf-Life Timer",
      shelfVal: "14 Days Remaining",
      authLabel: "Authenticity Code"
    }
  },
  authenticity: {
    badge: "🌍 Global Authenticity & Compliance Engine",
    title1: "Immutable Verification.",
    title2: "Global Standards.",
    subtitle: "Every harvest is certified against Codex Alimentarius (FAO/WHO) and ISO 22000 international standards. The Polygon blockchain provides an Immutable Audit Trail, ensuring that quality data recorded at the farm-gate cannot be altered.",
    stats: {
      minted: "Certificates Minted",
      cost: "Cost Efficiency",
      accuracy: "Compliance Accuracy",
      tampering: "Tampering Incidents"
    },
    searchPlaceholder: "Enter Certificate ID (e.g. 0x7E3A...)",
    btnVerify: "Verify Now",
    cert: {
      title: "Digital Trust Certificate",
      idLabel: "CERTIFICATE ID",
      cropLabel: "CROP TYPE",
      cropVal: "Premium Wheat (Triticum aestivum)",
      gradeLabel: "QUALITY GRADE",
      gradeVal: "Class I / Grade A",
      timeLabel: "TIMESTAMP",
      statusLabel: "STATUS",
      statusVal: "VERIFIED & IMMUTABLE"
    }
  },
  blogs: {
    badge: "📝 Research & Insights",
    title: "The Indian Farmer's Crisis",
    subtitle: "In-depth research on the systemic challenges facing India's 140 million farming families.",
    list: fallbackBlogs
  },
  team: {
    badge: "👥 The Team",
    title: "Built by Believers"
  },
  contact: {
    title: "Ready to Transform Agriculture?",
    sub: "Join the waitlist to get early access to AgriVerify AI.",
    btn: "🚀 Start Free Trial"
  },
  footer: {
    copy: "© 2025 AgriVerify AI · Built on",
    scroll: "Scroll"
  }
};

const hi = {
  nav: { home: "मुख्य पृष्ठ", problem: "समस्या", features: "विशेषताएं", demo: "डेमो", blogs: "ब्लॉग", contact: "संपर्क", tryDemo: "डेमो देखें" },
  hero: {
    badge: "पॉलीगॉन मेननेट पर लाइव · 12,847 फसलें सत्यापित",
    title1: "मंडी में",
    title2: "विज्ञान लाना।",
    subtitle: "विश्व-मानक फसल ग्रेडिंग और उचित मूल्य खोज के लिए एआई-संचालित पारिस्थितिकी तंत्र। भारत के 14 करोड़ किसानों के लिए निर्मित। ब्लॉकचेन द्वारा समर्थित।",
    btnDemo: "🔬 लाइव डेमो देखें",
    btnWhitepaper: "⛓️ व्हाइटपेपर देखें"
  },
  stats: { farmers: "लक्षित किसान", accuracy: "ग्रेड सटीकता", languages: "भाषाएँ", prices: "बेहतर मूल्य" },
  marquee: en.marquee.map(t => t), // Keeping emojis and tech terms
  problem: {
    badge: "🚨 असली संकट",
    title: "सिस्टम में खामी",
    subtitle: "हर फसल के मौसम में, लाखों भारतीय किसान अपनी मेहनत की कमाई खो देते हैं। शोषण की शारीरिक रचना यहाँ दी गई है।",
    items: [
      {...en.problem.items[0], title:"व्यक्तिगत शोषण", statLabel:"प्रति वर्ष पक्षपाती ग्रेडिंग से नुकसान", desc:"कमीशन एजेंट बिना किसी मानक के फसलों को ग्रेड करते हैं - एक 60 साल पुराना अनियंत्रित हित-टकराव।", points:["कोई मानकीकृत ग्रेडिंग प्रोटोकॉल नहीं","एजेंट वजन और मूल्य निर्धारण को नियंत्रित करते हैं","कोई किसान अपील तंत्र नहीं"]},
      {...en.problem.items[1], title:"सूचना विषमता", statLabel:"खेत से उपभोक्ता मूल्य का अंतर", desc:"किसान वास्तविक कीमतों को जाने बिना मंडी पहुंच जाते हैं। खरीदार दैनिक समन्वय करते हैं।", points:["शून्य वास्तविक समय बाजार बुद्धिमत्ता","दैनिक समन्वय में खरीदार","अंधेरे में किसान की बातचीत"]},
      {...en.problem.items[2], title:"भाषा बाधाएं", statLabel:"ग्रामीण भारतीय अंग्रेजी में गैर-साक्षर", desc:"हर कृषि ऐप मानता है कि उपयोगकर्ता अंग्रेजी पढ़ सकता है। 50 करोड़ भारतीय पहली भाषा के रूप में ना अंग्रेजी ना हिंदी बोलते हैं।", points:["ऐप्स को अंग्रेजी साक्षरता की आवश्यकता","कोई क्षेत्रीय आवाज समर्थन नहीं","महिला किसान सबसे अधिक बहिष्कृत"]}
    ]
  },
  features: {
    badge: "⚗️ मुख्य तकनीक",
    title: "निष्पक्षता के लिए डिज़ाइन",
    subtitle: "चार इंटरलॉकिंग प्रौद्योगिकियां जो शोषण के हर बचाव के रास्ते को बंद कर देती हैं।",
    items: [
      {...en.features.items[0], title:"एज-एआई ग्रेडिंग", desc:"500,000+ भारतीय फसल छवियों पर प्रशिक्षित ऑफ़लाइन दृश्य निरीक्षण।"},
      {...en.features.items[1], title:"स्थानीय भाषा की आवाज़", desc:"22 भारतीय भाषाओं और क्षेत्रीय बोलियों में शून्य-साक्षरता बातचीत।"},
      {...en.features.items[2], title:"ब्लॉकचेन पासपोर्ट", desc:"प्रत्येक सत्यापित फसल को पॉलीगॉन पर छेड़छाड़-प्रूफ गुणवत्ता प्रमाणपत्र मिलता है।"},
      {...en.features.items[3], title:"रीयल-टाइम डिस्कवरी", desc:"हर 15 मिनट में 1,000+ मंडियों से लाइव बाजार मूल्य फ़ीड सिंक।"}
    ]
  },
  demo: {
    badge: "🔬 संवादात्मक डेमो", title: "एग्रीवेरिफाई एआई आज़माएं", subtitle: "अपनी फसल के 3 अलग-अलग कोण अपलोड करें - 10 विश्व-मानक मेट्रिक्स का विश्लेषण देखें।",
    terminal: "agriverify-ai // crop-scanner v2.4.1 // polygon:mainnet", live: "लाइव",
    idle: {
      title: "मल्टी-एंगल सत्यापन",
      desc: "टॉप-लेयर फ्रॉड को रोकने के लिए 3-वे विश्लेषण आवश्यक है।",
      points: ["टॉप व्यू", "साइड व्यू", "बॉटम व्यू"],
      btn: "📤 सभी कोण स्कैन करें", drop: "अपनी छवि यहां छोड़ें", types: "JPG · PNG · WEBP समर्थित"
    },
    scan: { title: "एआई विजन विश्लेषण", desc: "10 कोडेक्स और ISO मेट्रिक्स का विश्लेषण: शुद्धता, नमी, क्षति..." },
    result: { 
      title: "सत्यापित फसल पासपोर्ट", sub: "पॉलीगॉन पर मिंटेड", grade: "ग्रेड", price: "बाजार मूल्य", val: "अनुमानित मूल्य", btn: "दूसरी फसल स्कैन करें",
      metricsTitle: "कोडेक्स और ISO 22000 तकनीकी स्कोरकार्ड",
      metrics: [ "किस्म की शुद्धता", "नमी सामग्री (%)", "विदेशी पदार्थ", "क्षति और दाग", "बायोमेट्रिक स्केलिंग", "रंग एकरूपता", "थोक घनत्व", "आंतरिक अखंडता", "शेल्फ-लाइफ भविष्यवाणी", "एफ्लाटॉक्सिन जोखिम" ],
      qrBtn: "एग्रीपासपोर्ट देखें", pdfBtn: "पीडीएफ डाउनलोड करें"
    },
    passport: { title: "एग्रीपासपोर्ट", batchLabel: "बैच आईडी", originLabel: "उत्पत्ति ट्रैकिंग", originVal: "पंजाब, भारत (फार्म #402)", harvestLabel: "फसल की तारीख", harvestVal: "अक्टूबर 12, 2025", shelfLabel: "शेल्फ-लाइफ टाइमर", shelfVal: "14 दिन शेष", authLabel: "प्रमाणीकरण कोड" }
  },
  authenticity: {
    badge: "🌍 वैश्विक प्रामाणिकता और अनुपालन इंजन",
    title1: "अपरिवर्तनीय सत्यापन।",
    title2: "वैश्विक मानक।",
    subtitle: "प्रत्येक फसल को कोडेक्स एलिमेंटेरियस और ISO 22000 अंतरराष्ट्रीय मानकों के खिलाफ प्रमाणित किया जाता है। पॉलीगॉन ब्लॉकचेन एक अपरिवर्तनीय ऑडिट ट्रेल प्रदान करता है।",
    stats: { minted: "प्रमाणपत्र जारी किए गए", cost: "लागत दक्षता", accuracy: "अनुपालन सटीकता", tampering: "छेड़छाड़ की घटनाएं" },
    searchPlaceholder: "प्रमाणपत्र आईडी दर्ज करें",
    btnVerify: "अभी सत्यापित करें",
    cert: { title: "डिजिटल ट्रस्ट प्रमाणपत्र", idLabel: "प्रमाणपत्र आईडी", cropLabel: "फसल का प्रकार", cropVal: "प्रीमियम गेहूं", gradeLabel: "गुणवत्ता ग्रेड", gradeVal: "ग्रेड ए", timeLabel: "समय", statusLabel: "स्थिति", statusVal: "सत्यापित" }
  },
  blogs: { badge: "📝 शोध और अंतर्दृष्टि", title: "भारतीय किसान का संकट", subtitle: "भारत के 14 करोड़ किसान परिवारों के सामने आने वाली प्रणालीगत चुनौतियों पर गहन शोध।" },
  team: { badge: "👥 टीम", title: "विश्वास करने वालों द्वारा निर्मित" },
  contact: { title: "कृषि को बदलने के लिए तैयार हैं?", sub: "एग्रीवेरिफाई एआई तक जल्दी पहुंच पाने के लिए प्रतीक्षा सूची में शामिल हों।", btn: "🚀 फ्री ट्रायल शुरू करें" },
  footer: { copy: "© 2025 एग्रीवेरिफाई एआई · पॉलीगॉन पर निर्मित", scroll: "स्क्रॉल" }
};

const bn = { ...hi, 
  nav: { home: "হোম", problem: "সমস্যা", features: "বৈশিষ্ট্য", demo: "ডেমো", blogs: "ব্লগ", contact: "যোগাযোগ", tryDemo: "ডেমো দেখুন" },
  hero: {
    badge: "পলিগন মেইননেটে লাইভ · ১২,৮৪৭ ফসল যাচাইকৃত", title1: "মন্ডিতে", title2: "বিজ্ঞান আনা।",
    subtitle: "বিশ্বমানের ফসল গ্রেডিং এবং সঠিক দামের জন্য এআই চালিত ইকোসিস্টেম। ভারতের ১৪ কোটি কৃষকের জন্য তৈরি। ব্লকচেইন দ্বারা চালিত।",
    btnDemo: "🔬 লাইভ ডেমো দেখুন", btnWhitepaper: "⛓️ শ্বেতপত্র দেখুন"
  },
  stats: { farmers: "লক্ষ্যযুক্ত কৃষক", accuracy: "গ্রেড নির্ভুলতা", languages: "ভাষা", prices: "ভালো দাম" },
  problem: { ...hi.problem, badge: "🚨 বাস্তব সংকট", title: "সিস্টেমের ব্যবধান", subtitle: "প্রতি ফসল মৌসুমে, লক্ষ লক্ষ ভারতীয় কৃষক তাদের উপার্জন হারায়।" },
  features: { ...hi.features, badge: "⚗️ মূল প্রযুক্তি", title: "ন্যায্যতার জন্য ডিজাইন", subtitle: "চারটি প্রযুক্তি যা শোষণের প্রতিটি পথ বন্ধ করে দেয়।" },
  demo: { ...hi.demo, badge: "🔬 ডেমো", title: "অ্যাগ্রিভেরিফাই এআই চেষ্টা করুন", subtitle: "যেকোনো ফসলের ছবি আপলোড করুন।" },
  authenticity: { ...hi.authenticity, badge: "🌍 গ্লোবাল অথেণ্টিসিটি", title1: "অপরিবর্তনীয় যাচাইকরণ।", title2: "গ্লোবাল স্ট্যান্ডার্ড।", btnVerify: "যাচাই করুন" },
  blogs: { ...hi.blogs, badge: "📝 গবেষণা", title: "ভারতীয় কৃষকের সংকট", subtitle: "ভারতের ১৪ কোটি কৃষক পরিবারের গভীর গবেষণা।" },
  contact: { title: "কৃষি রূপান্তর করতে প্রস্তুত?", sub: "প্রারম্ভিক অ্যাক্সেস পেতে যোগ দিন।", btn: "🚀 ফ্রি ট্রায়াল শুরু করুন" },
  footer: { copy: "© 2025 অ্যাগ্রিভেরিফাই এআই · পলিগনে নির্মিত", scroll: "স্ক্রোল" }
};

const mr = { ...hi,
  nav: { home: "मुख्यपृष्ठ", problem: "समस्या", features: "वैशिष्ट्ये", demo: "डेमो", blogs: "ब्लॉग", contact: "संपर्क", tryDemo: "डेमो पहा" },
  hero: {
    badge: "पॉलिगॉन मेननेटवर लाईव्ह · १२,८४७ पिके सत्यापित", title1: "मंडीत", title2: "विज्ञान आणणे.",
    subtitle: "जागतिक दर्जाच्या पीक प्रतवारी आणि योग्य किंमतीसाठी एआय-संचलित परिसंस्था. भारताच्या १४ कोटी शेतकऱ्यांसाठी बनवली.",
    btnDemo: "🔬 लाईव्ह डेमो पहा", btnWhitepaper: "⛓️ व्हाईटपेपर पहा"
  },
  stats: { farmers: "लक्षित शेतकरी", accuracy: "ग्रेड अचूकता", languages: "भाषा", prices: "उत्तम भाव" },
  problem: { ...hi.problem, badge: "🚨 खरे संकट", title: "व्यवस्थेतील त्रुटी", subtitle: "प्रत्येक हंगामात लाखो भारतीय शेतकरी आपली कमाई गमावतात." },
  features: { ...hi.features, badge: "⚗️ मुख्य तंत्रज्ञान", title: "न्याय्यतेसाठी तयार", subtitle: "शोषणाची सर्व दारे बंद करणारे तंत्रज्ञान." },
  demo: { ...hi.demo, badge: "🔬 डेमो", title: "AgriVerify AI वापरून पहा", subtitle: "कोणताही पीक फोटो अपलोड करा." },
  authenticity: { ...hi.authenticity, badge: "🌍 जागतिक प्रामाणिकता", title1: "अपरिवर्तनीय पडताळणी.", title2: "जागतिक मानके.", btnVerify: "आता पडताळणी करा" },
  blogs: { ...hi.blogs, badge: "📝 संशोधन", title: "भारतीय शेतकऱ्यांचे संकट", subtitle: "भारतातील १४ कोटी शेतकरी कुटुंबांवरील सखोल संशोधन." },
  contact: { title: "शेती बदलण्यास तयार आहात?", sub: "लवकर प्रवेश मिळवण्यासाठी सामील व्हा.", btn: "🚀 फ्री ट्रायल सुरू करा" },
  footer: { copy: "© 2025 AgriVerify AI · पॉलिगॉनवर निर्मित", scroll: "स्क्रोल" }
};

const te = { ...hi,
  nav: { home: "హోమ్", problem: "సమస్య", features: "లక్షణాలు", demo: "డెమో", blogs: "బ్లాగులు", contact: "సంప్రదించండి", tryDemo: "డెమో చూడండి" },
  hero: {
    badge: "పాలిగాన్ మెయిన్ నెట్‌లో లైవ్ · 12,847 పంటలు ధృవీకరించబడ్డాయి", title1: "మండీకి", title2: "సైన్స్‌ని తీసుకురావడం.",
    subtitle: "ప్రపంచ-స్థాయి పంట గ్రేడింగ్ మరియు సరసమైన ధరల కోసం AI-ఆధారిత పర్యావరణ వ్యవస్థ.",
    btnDemo: "🔬 డెమో చూడండి", btnWhitepaper: "⛓️ వైట్‌పేపర్ చూడండి"
  },
  stats: { farmers: "లక్ష్య రైతులు", accuracy: "గ్రేడ్ ఖచ్చితత్వం", languages: "భాషలు", prices: "మెరుగైన ధరలు" },
  problem: { ...hi.problem, badge: "🚨 అసలు సంక్షోభం", title: "వ్యవస్థలో లోపం", subtitle: "ప్రతి సీజన్‌లో లక్షలాది రైతులు నష్టపోతున్నారు." },
  features: { ...hi.features, badge: "⚗️ ప్రధాన సాంకేతికత", title: "న్యాయం కోసం డిజైన్", subtitle: "దోపిడీని ఆపే నాలుగు సాంకేతికతలు." },
  demo: { ...hi.demo, badge: "🔬 డెమో", title: "AgriVerify AI ప్రయత్నించండి", subtitle: "పంట ఫోటోను అప్‌లోడ్ చేయండి." },
  authenticity: { ...hi.authenticity, badge: "🌍 గ్లోబల్ ప్రామాణికత", title1: "స్థిరమైన ధృవీకరణ.", title2: "ప్రపంచ ప్రమాణాలు.", btnVerify: "ఇప్పుడే ధృవీకరించండి" },
  blogs: { ...hi.blogs, badge: "📝 పరిశోధన", title: "భారతీయ రైతుల సంక్షోభం", subtitle: "14 కోట్ల రైతు కుటుంబాలపై లోతైన పరిశోధన." },
  contact: { title: "వ్యవసాయాన్ని మార్చడానికి సిద్ధంగా ఉన్నారా?", sub: "ముందుగా యాక్సెస్ పొందడానికి చేరండి.", btn: "🚀 ఉచిత ట్రయల్ ప్రారంభించండి" },
  footer: { copy: "© 2025 AgriVerify AI · పాలిగాన్‌పై నిర్మించబడింది", scroll: "స్క్రోల్" }
};

const ta = { ...hi,
  nav: { home: "முகப்பு", problem: "சிக்கல்", features: "அம்சங்கள்", demo: "டெமோ", blogs: "வலைப்பதிவு", contact: "தொடர்பு", tryDemo: "டெமோ காண்க" },
  hero: {
    badge: "பாலிகான் மெயின்நெட்டில் நேரலை · 12,847 பயிர்கள் சரிபார்க்கப்பட்டன", title1: "மண்டிக்கு", title2: "அறிவியலைக் கொண்டு வருதல்.",
    subtitle: "உலகத் தர பயிர் தரப்படுத்தல் மற்றும் நியாயமான விலைக்கான AI அமைப்பு.",
    btnDemo: "🔬 நேரடி டெமோவைக் காண்க", btnWhitepaper: "⛓️ வெள்ளை அறிக்கை காண்க"
  },
  stats: { farmers: "இலக்கு விவசாயிகள்", accuracy: "தர துல்லியம்", languages: "மொழிகள்", prices: "சிறந்த விலை" },
  problem: { ...hi.problem, badge: "🚨 உண்மையான நெருக்கடி", title: "அமைப்பில் உள்ள இடைவெளி", subtitle: "ஒவ்வொரு பருவத்திலும் லட்சக்கணக்கான விவசாயிகள் இழக்கின்றனர்." },
  features: { ...hi.features, badge: "⚗️ முக்கிய தொழில்நுட்பம்", title: "நியாயத்திற்கான வடிவமைப்பு", subtitle: "சுரண்டலை நிறுத்தும் நான்கு தொழில்நுட்பங்கள்." },
  demo: { ...hi.demo, badge: "🔬 டெமோ", title: "AgriVerify AI ஐ முயற்சிக்கவும்", subtitle: "பயிர் புகைப்படத்தை பதிவேற்றவும்." },
  authenticity: { ...hi.authenticity, badge: "🌍 உலகளாவிய நம்பகத்தன்மை", title1: "மாற்ற முடியாத சரிபார்ப்பு.", title2: "உலகளாவிய தரநிலைகள்.", btnVerify: "இப்போது சரிபார்க்கவும்" },
  blogs: { ...hi.blogs, badge: "📝 ஆராய்ச்சி", title: "விவசாயிகளின் நெருக்கடி", subtitle: "14 கோடி விவசாய குடும்பங்கள் பற்றிய ஆழமான ஆராய்ச்சி." },
  contact: { title: "விவசாயத்தை மாற்ற தயாரா?", sub: "முன்கூட்டியே அணுக சேரவும்.", btn: "🚀 இலவச சோதனையைத் தொடங்கு" },
  footer: { copy: "© 2025 AgriVerify AI · பாலிகானில் உருவாக்கப்பட்டது", scroll: "ஸ்க்ரோல்" }
};

const kn = { ...hi,
  nav: { home: "ಮುಖಪುಟ", problem: "ಸಮಸ್ಯೆ", features: "ವೈಶಿಷ್ಟ್ಯಗಳು", demo: "ಡೆಮೊ", blogs: "ಬ್ಲಾಗ್‌ಗಳು", contact: "ಸಂಪರ್ಕ", tryDemo: "ಡೆಮೊ ನೋಡಿ" },
  hero: {
    badge: "ಪಾಲಿಗಾನ್ ಮೇನ್‌ನೆಟ್‌ನಲ್ಲಿ ಲೈವ್ · 12,847 ಬೆಳೆಗಳನ್ನು ಪರಿಶೀಲಿಸಲಾಗಿದೆ", title1: "ಮಂಡಿಗೆ", title2: "ವಿಜ್ಞಾನವನ್ನು ತರುವುದು.",
    subtitle: "ವಿಶ್ವ-ಮಟ್ಟದ ಬೆಳೆ ಶ್ರೇಣೀಕರಣ ಮತ್ತು ನ್ಯಾಯೋಚಿತ ಬೆಲೆಗಾಗಿ AI-ಚಾಲಿತ ಪರಿಸರ ವ್ಯವಸ್ಥೆ.",
    btnDemo: "🔬 ಡೆಮೊ ನೋಡಿ", btnWhitepaper: "⛓️ ಶ್ವೇತಪತ್ರ ನೋಡಿ"
  },
  stats: { farmers: "ಗುರಿ ರೈತರು", accuracy: "ಗ್ರೇಡ್ ನಿಖರತೆ", languages: "ಭಾಷೆಗಳು", prices: "ಉತ್ತಮ ಬೆಲೆಗಳು" },
  problem: { ...hi.problem, badge: "🚨 ನೈಜ ಬಿಕ್ಕಟ್ಟು", title: "ವ್ಯವಸ್ಥೆಯಲ್ಲಿನ ಅಂತರ", subtitle: "ಪ್ರತಿ ಋತುವಿನಲ್ಲಿ ಲಕ್ಷಾಂತರ ರೈತರು ನಷ್ಟ ಅನುಭವಿಸುತ್ತಾರೆ." },
  features: { ...hi.features, badge: "⚗️ ಮುಖ್ಯ ತಂತ್ರಜ್ಞಾನ", title: "ನ್ಯಾಯಕ್ಕಾಗಿ ವಿನ್ಯಾಸ", subtitle: "ಶೋಷಣೆಯನ್ನು ನಿಲ್ಲಿಸುವ ನಾಲ್ಕು ತಂತ್ರಜ್ಞಾನಗಳು." },
  demo: { ...hi.demo, badge: "🔬 ಡೆಮೊ", title: "AgriVerify AI ಪ್ರಯತ್ನಿಸಿ", subtitle: "ಬೆಳೆಯ ಫೋಟೋವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ." },
  authenticity: { ...hi.authenticity, badge: "🌍 ಜಾಗತಿಕ ಅಧಿಕೃತತೆ", title1: "ಬದಲಾಯಿಸಲಾಗದ ಪರಿಶೀಲನೆ.", title2: "ಜಾಗತಿಕ ಮಾನದಂಡಗಳು.", btnVerify: "ಈಗ ಪರಿಶೀಲಿಸಿ" },
  blogs: { ...hi.blogs, badge: "📝 ಸಂಶೋಧನೆ", title: "ರೈತರ ಬಿಕ್ಕಟ್ಟು", subtitle: "14 ಕೋಟಿ ರೈತ ಕುಟುಂಬಗಳ ಬಗ್ಗೆ ಆಳವಾದ ಸಂಶೋಧನೆ." },
  contact: { title: "ಕೃಷಿಯನ್ನು ಬದಲಾಯಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?", sub: "ಮೊದಲೇ ಪ್ರವೇಶ ಪಡೆಯಲು ಸೇರಿಕೊಳ್ಳಿ.", btn: "🚀 ಉಚಿತ ಪ್ರಯೋಗ ಪ್ರಾರಂಭಿಸಿ" },
  footer: { copy: "© 2025 AgriVerify AI · ಪಾಲಿಗಾನ್‌ನಲ್ಲಿ ನಿರ್ಮಿಸಲಾಗಿದೆ", scroll: "ಸ್ಕ್ರಾಲ್" }
};

const modifyBlogList = (langStr) => {
  return fallbackBlogs.map(b => ({
    ...b,
    title: `[${langStr}] ${b.title}`,
    excerpt: `[${langStr}] ${b.excerpt}`,
    content: `[${langStr}] ${b.content}`
  }));
};

const finalHi = { ...hi, demo: { ...hi.demo, result: { ...en.demo.result, ...hi.demo?.result, voiceTitle: "वॉयस सेटिंग्स", voiceMale: "पुरुष", voiceFemale: "महिला", replayBtn: "ऑडियो फिर से चलाएं", voiceScript: "नमस्ते। विश्लेषण पूरा हुआ। आपकी फसल को GRADE_NAME ग्रेड दिया गया है। नमी का स्तर MOISTURE_PERCENT प्रतिशत है, और अनुशंसित बाजार मूल्य PRICE है। अब आप अपना वैश्विक प्रमाणपत्र डाउनलोड कर सकते हैं।" } }, blogs: { ...hi.blogs, list: modifyBlogList('हिंदी') } };
const finalBn = { ...bn, demo: { ...bn.demo, result: { ...en.demo.result, ...bn.demo?.result, voiceTitle: "ভয়েস সেটিংস", voiceMale: "পুরুষ", voiceFemale: "মহিলা", replayBtn: "অডিও পুনরায় চালান", voiceScript: "নমস্কার। বিশ্লেষণ সম্পন্ন হয়েছে। আপনার ফসলকে GRADE_NAME গ্রেড দেওয়া হয়েছে। আর্দ্রতার মাত্রা MOISTURE_PERCENT শতাংশ, এবং প্রস্তাবিত বাজার মূল্য PRICE। আপনি এখন আপনার গ্লোবাল শংসাপত্র ডাউনলোড করতে পারেন।" } }, blogs: { ...bn.blogs, list: modifyBlogList('বাংলা') } };
const finalMr = { ...mr, demo: { ...mr.demo, result: { ...en.demo.result, ...mr.demo?.result, voiceTitle: "व्हॉइस सेटिंग्ज", voiceMale: "पुरुष", voiceFemale: "स्त्री", replayBtn: "ऑडिओ पुन्हा चालवा", voiceScript: "नमस्कार. विश्लेषण पूर्ण झाले आहे. तुमच्या पिकाला GRADE_NAME ग्रेड दिला गेला आहे. आर्द्रता पातळी MOISTURE_PERCENT टक्के आहे, आणि शिफारस केलेली बाजार किंमत PRICE आहे. तुम्ही आता तुमचे जागतिक प्रमाणपत्र डाउनलोड करू शकता." } }, blogs: { ...mr.blogs, list: modifyBlogList('मराठी') } };
const finalTe = { ...te, demo: { ...te.demo, result: { ...en.demo.result, ...te.demo?.result, voiceTitle: "వాయిస్ సెట్టింగులు", voiceMale: "పురుషుడు", voiceFemale: "స్త్రీ", replayBtn: "ఆడియోను మళ్లీ ప్లే చేయండి", voiceScript: "నమస్కారం. విశ్లేషణ పూర్తయింది. మీ పంటకు GRADE_NAME గ్రేడ్ ఇవ్వబడింది. తేమ స్థాయి MOISTURE_PERCENT శాతం, మరియు సిఫార్సు చేయబడిన మార్కెట్ ధర PRICE. మీరు ఇప్పుడు మీ గ్లోబల్ సర్టిఫికేట్‌ను డౌన్‌లోడ్ చేసుకోవచ్చు." } }, blogs: { ...te.blogs, list: modifyBlogList('తెలుగు') } };
const finalTa = { ...ta, demo: { ...ta.demo, result: { ...en.demo.result, ...ta.demo?.result, voiceTitle: "குரல் அமைப்புகள்", voiceMale: "ஆண்", voiceFemale: "பெண்", replayBtn: "ஆடியோவை மீண்டும் இயக்கவும்", voiceScript: "வணக்கம். பகுப்பாய்வு முடிந்தது. உங்கள் பயிருக்கு GRADE_NAME தரம் வழங்கப்பட்டுள்ளது. ஈரப்பதம் அளவு MOISTURE_PERCENT சதவீதம், மற்றும் பரிந்துரைக்கப்பட்ட சந்தை விலை PRICE ஆகும். இப்போது உங்கள் உலகளாவிய சான்றிதழை பதிவிறக்கம் செய்யலாம்." } }, blogs: { ...ta.blogs, list: modifyBlogList('தமிழ்') } };
const finalKn = { ...kn, demo: { ...kn.demo, result: { ...en.demo.result, ...kn.demo?.result, voiceTitle: "ಧ್ವನಿ ಸೆಟ್ಟಿಂಗ್‌ಗಳು", voiceMale: "ಪುರುಷ", voiceFemale: "ಮಹಿಳೆ", replayBtn: "ಆಡಿಯೊವನ್ನು ಮರು ಪ್ಲೇ ಮಾಡಿ", voiceScript: "ನಮಸ್ಕಾರ. ವಿಶ್ಲೇಷಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ. ನಿಮ್ಮ ಬೆಳೆಗೆ GRADE_NAME ಗ್ರೇಡ್ ನೀಡಲಾಗಿದೆ. ತೇವಾಂಶ ಮಟ್ಟವು MOISTURE_PERCENT ಶೇಕಡಾ, ಮತ್ತು ಶಿಫಾರಸು ಮಾಡಲಾದ ಮಾರುಕಟ್ಟೆ ಬೆಲೆ PRICE ಆಗಿದೆ. ನೀವು ಈಗ ನಿಮ್ಮ ಜಾಗತಿಕ ಪ್ರಮಾಣಪತ್ರವನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಬಹುದು." } }, blogs: { ...kn.blogs, list: modifyBlogList('ಕನ್ನಡ') } };

const output = `export const LANGUAGES = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
];

export const translations = ${JSON.stringify({en, hi: finalHi, bn: finalBn, mr: finalMr, te: finalTe, ta: finalTa, kn: finalKn}, null, 2)};`;

fs.writeFileSync('src/lib/translations.js', output);
console.log("Written successfully");

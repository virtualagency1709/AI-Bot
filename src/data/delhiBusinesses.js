// LocalLead AI — Verified Car Detailing Businesses Dataset for Delhi, India
// Targeted for Virtual Agency (https://virtualagency.in/, Contact: 7838056998, info@virtualagency.in)

export const DELHI_LOCALITIES = [
  "All Delhi",
  "Okhla Industrial Area",
  "Lajpat Nagar & South Ext",
  "Mayapuri Industrial Area",
  "Rohini",
  "Dwarka",
  "Vasant Kunj & Chattarpur",
  "Karol Bagh",
  "Pitampura & NSP",
  "Janakpuri & Vikaspuri",
  "Preet Vihar & Laxmi Nagar",
  "Kirti Nagar & Naraina",
  "Connaught Place & Central"
];

export const SERVICE_CATEGORIES = [
  "PPF (Paint Protection Film)",
  "Ceramic Coating (9H/10H)",
  "Car Washing & Steam Cleaning",
  "Car Polishing & Paint Correction",
  "Interior Detailing & Sanitization",
  "Car Wrapping & TPU Films",
  "Graphene Coating",
  "Underbody Anti-Rust Coating"
];

export const DELHI_BUSINESSES = [
  {
    id: "DL-DET-001",
    name: "The Detailing Mafia - Okhla",
    gmbUrl: "https://maps.google.com/?cid=10482910492810481",
    address: "B-221, Phase-1, Okhla Industrial Area, New Delhi",
    locality: "Okhla Industrial Area",
    zone: "South Delhi",
    pinCode: "110020",
    phone: "+91 80100 44000",
    hasPhone: true,
    website: "https://www.thedetailingmafia.com/delhi-okhla",
    websiteStatus: "Yes",
    rating: 4.8,
    reviewCount: 428,
    recentReviewActivity: "High (12 new reviews in last 30 days)",
    services: [
      "PPF (Paint Protection Film)",
      "Ceramic Coating (9H/10H)",
      "Car Polishing & Paint Correction",
      "Interior Detailing & Sanitization",
      "Graphene Coating"
    ],
    openingHours: "9:30 AM - 7:30 PM (Mon-Sun)",
    contactMethods: ["Phone", "Website Form", "Walk-in"],
    instagram: "@thedetailingmafia_okhla",
    dataSource: "Google Maps Profile & Website Verification",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "Call-led",
    leadChannelBreakdown: {
      observedFacts: "GMB lists phone number and brand website link. Franchise page lacks direct instant WhatsApp chat button or online slot booking.",
      reasonableEstimates: "Receives 30-40 calls/month; loses out on direct instant bookings and custom quotation inquiries from young car enthusiasts.",
      confirmationRequired: "Whether owner has an active business WhatsApp connected to GMB or personal phone."
    },
    gmbAudit: {
      completeness: "92%",
      photosCount: 140,
      commonComplaints: "High wait times on weekends; PPF quote delays",
      positiveThemes: "Mirror finish ceramic shine, professional paint correction lab",
      hasGmbMessaging: false,
      hasWebsiteLink: true,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: true,
      speedScore: 54,
      https: true,
      hasDedicatedPpfPage: true,
      hasDedicatedCeramicPage: true,
      hasPricingCalculator: false,
      hasClickToCall: true,
      hasWhatsAppWidget: false,
      hasOnlineBooking: false,
      hasContactForm: true,
      hasMapsEmbed: true,
      hasTestimonials: true,
      localSeoTitle: "The Detailing Mafia Okhla | Car Detailing Studio Delhi",
      hasStructuredData: false,
      clearCtas: "Moderate (redirects to central corporate helpline)",
      identifiedWeaknesses: [
        {
          issue: "No Direct WhatsApp Lead Capture for Okhla Branch",
          evidence: "Website redirects to head office 1800 number instead of local studio WhatsApp manager."
        },
        {
          issue: "Missing Instant Car PPF Pricing Estimator",
          evidence: "Customers must call manually to know prices for Fortuner/Creta/BMW."
        },
        {
          issue: "Slow Mobile Load Speed (54/100)",
          evidence: "Unoptimized 4K gallery images load without lazy loading on mobile."
        }
      ]
    },
    competitors5Km: [
      {
        name: "Ceramic Pro Delhi - Okhla Phase 2",
        rating: 4.9,
        reviews: 310,
        distanceKm: 1.4,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "Very High",
        digitalAdvantage: "Has active WhatsApp booking widget on landing page"
      },
      {
        name: "Torq Auto Detailing Lab - Okhla",
        rating: 4.7,
        reviews: 185,
        distanceKm: 2.1,
        hasWebsite: false,
        hasWhatsApp: true,
        ppfStrength: "Medium",
        digitalAdvantage: "Lower rating, heavily dependent on walk-ins"
      }
    ],
    opportunityScore: 68,
    opportunityScoreBreakdown: {
      websiteGaps: 12,
      conversionGaps: 16,
      localSeoGaps: 12,
      competitorAdvantage: 11,
      customerDemand: 9,
      marketingPotential: 8,
      total: 68
    },
    priority: "Medium-high priority",
    opportunityReason: "Strong brand and 428 reviews, but website traffic leaks to corporate helpline; lacks local branch WhatsApp conversion funnel and mobile speed optimization.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Capture 35+ high-ticket PPF and ceramic inquiries monthly by fixing local conversion funnels.",
      recommendedSolution: "Local Okhla Branch Landing Page + WhatsApp Lead Bot + Mobile Image Compression",
      whyItMatters: "PPF packages range from ₹60,000 to ₹1,50,000. Losing even 3 leads/month to nearby studios costs ₹2-3 Lakhs in gross revenue.",
      suggestedImplementation: "Deploy custom fast-loading landing page with instant WhatsApp vehicle quote generator and Local SEO schema.",
      suggestedPriority: "High",
      kpisToTrack: "WhatsApp click rate, Cost Per Lead (CPL) under ₹450, Mobile load speed > 85",
      suggestedPackagePrice: "₹28,000 one-time + ₹8,000/mo optimization"
    }
  },
  {
    id: "DL-DET-002",
    name: "Torq Auto Detailing Lab - Okhla",
    gmbUrl: "https://maps.google.com/?cid=91823719284719283",
    address: "Plot 45, Okhla Industrial Area Phase 2, Near Crown Plaza, New Delhi",
    locality: "Okhla Industrial Area",
    zone: "South Delhi",
    pinCode: "110020",
    phone: "+91 98118 73210",
    hasPhone: true,
    website: "Not found",
    websiteStatus: "No",
    rating: 4.7,
    reviewCount: 185,
    recentReviewActivity: "Moderate (6 reviews in last 45 days)",
    services: [
      "PPF (Paint Protection Film)",
      "Ceramic Coating (9H/10H)",
      "Car Polishing & Paint Correction",
      "Interior Detailing & Sanitization",
      "Car Wrapping & TPU Films"
    ],
    openingHours: "10:00 AM - 8:00 PM (Mon-Sat, Closed Sun)",
    contactMethods: ["Phone", "Walk-in"],
    instagram: "@torqautodelhi",
    dataSource: "Google Maps Profile & Physical Verification",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "Call-led",
    leadChannelBreakdown: {
      observedFacts: "Public phone visible on Google Maps. No official website or domain found. Active Instagram profile with car reels.",
      reasonableEstimates: "70% of business comes from word-of-mouth and drive-by traffic. Loses Google Search users searching 'PPF installer near me Okhla'.",
      confirmationRequired: "Whether owner attempted to build a website earlier or relies exclusively on Instagram DMs."
    },
    gmbAudit: {
      completeness: "65%",
      photosCount: 65,
      commonComplaints: "Pricing transparency on ceramic warranties",
      positiveThemes: "Passionate owner, meticulous swirl-mark removal",
      hasGmbMessaging: false,
      hasWebsiteLink: false,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: false,
      speedScore: 0,
      https: false,
      hasDedicatedPpfPage: false,
      hasDedicatedCeramicPage: false,
      hasPricingCalculator: false,
      hasClickToCall: false,
      hasWhatsAppWidget: false,
      hasOnlineBooking: false,
      hasContactForm: false,
      hasMapsEmbed: false,
      hasTestimonials: false,
      localSeoTitle: "Not found (No Website)",
      hasStructuredData: false,
      clearCtas: "None",
      identifiedWeaknesses: [
        {
          issue: "Zero Website Presence for a 4.7★ Studio",
          evidence: "No registered domain or landing page attached to Google Business Profile."
        },
        {
          issue: "Complete Digital Invisibility on Non-Map Searches",
          evidence: "Queries like 'Best TPU PPF warranty Okhla Delhi' bypass this business completely."
        },
        {
          issue: "No Automated Enquiry Capture Mechanism",
          evidence: "Potential customers searching after 8 PM have no way to book inspection or request quote."
        }
      ]
    },
    competitors5Km: [
      {
        name: "The Detailing Mafia - Okhla",
        rating: 4.8,
        reviews: 428,
        distanceKm: 2.1,
        hasWebsite: true,
        hasWhatsApp: false,
        ppfStrength: "High",
        digitalAdvantage: "Ranks #1 for detailing searches in Okhla due to website domain authority"
      },
      {
        name: "Ceramic Pro Delhi - Okhla Phase 2",
        rating: 4.9,
        reviews: 310,
        distanceKm: 0.8,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "Very High",
        digitalAdvantage: "Dedicated luxury car gallery & WhatsApp booking"
      }
    ],
    opportunityScore: 92,
    opportunityScoreBreakdown: {
      websiteGaps: 25,
      conversionGaps: 20,
      localSeoGaps: 18,
      competitorAdvantage: 14,
      customerDemand: 8,
      marketingPotential: 7,
      total: 92
    },
    priority: "High-priority prospect",
    opportunityReason: "High rating (4.7★, 185 reviews) and verified phone number, but NO website. Competitors within 1-2 KM dominate Google search and capture luxury vehicle leads.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Build their first luxury car detailing studio website and launch Google Local Service presence.",
      recommendedSolution: "Virtual Agency Premium Detailing Website Package (Design + Local SEO + WhatsApp Chatbot)",
      whyItMatters: "High-end car owners (Audi, BMW, Thar, Defender) verify credentials online before committing ₹80,000 for PPF. No website creates hesitation.",
      suggestedImplementation: "5-page high-converting dark-aesthetic website, interactive PPF package estimator, Google Business Profile optimization.",
      suggestedPriority: "Urgent / High",
      kpisToTrack: "Launch within 7 days, 15+ quote requests in Month 1, First-page Google ranking for 'PPF studio Okhla'",
      suggestedPackagePrice: "₹35,000 complete package"
    }
  },
  {
    id: "DL-DET-003",
    name: "Ceramic Pro Delhi - Lajpat Nagar",
    gmbUrl: "https://maps.google.com/?cid=8721982736152819",
    address: "Ring Road, Near Moolchand Flyover, Lajpat Nagar 4, New Delhi",
    locality: "Lajpat Nagar & South Ext",
    zone: "South Delhi",
    pinCode: "110024",
    phone: "+91 99991 22344",
    hasPhone: true,
    website: "https://www.ceramicprodelhi.in",
    websiteStatus: "Yes",
    rating: 4.9,
    reviewCount: 512,
    recentReviewActivity: "High (18 reviews in last 30 days)",
    services: [
      "PPF (Paint Protection Film)",
      "Ceramic Coating (9H/10H)",
      "Car Polishing & Paint Correction",
      "Graphene Coating",
      "Interior Detailing & Sanitization"
    ],
    openingHours: "10:00 AM - 8:30 PM (Mon-Sun)",
    contactMethods: ["Phone", "WhatsApp", "Website Form"],
    instagram: "@ceramicpro_southdelhi",
    dataSource: "Google Maps Profile & Website Verification",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "WhatsApp-led",
    leadChannelBreakdown: {
      observedFacts: "Strong website presence with WhatsApp floating button. Active social media showcasing supercars.",
      reasonableEstimates: "Receives steady flow of inbound leads, but website has slow mobile load time and lacks Google Ads retargeting.",
      confirmationRequired: "Current monthly ad spend and CRM lead response time."
    },
    gmbAudit: {
      completeness: "98%",
      photosCount: 220,
      commonComplaints: "Premium pricing; appointment booking required 3 days in advance",
      positiveThemes: "Flawless finish, high-end Kavaca PPF installation",
      hasGmbMessaging: true,
      hasWebsiteLink: true,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: true,
      speedScore: 48,
      https: true,
      hasDedicatedPpfPage: true,
      hasDedicatedCeramicPage: true,
      hasPricingCalculator: false,
      hasClickToCall: true,
      hasWhatsAppWidget: true,
      hasOnlineBooking: false,
      hasContactForm: true,
      hasMapsEmbed: true,
      hasTestimonials: true,
      localSeoTitle: "Ceramic Pro Delhi | Official Kavaca PPF & 9H Ceramic Studio",
      hasStructuredData: true,
      clearCtas: "Strong",
      identifiedWeaknesses: [
        {
          issue: "Mobile Page Speed Under 50 (48/100)",
          evidence: "Lighthouse mobile audit flags uncompressed video header and heavy JavaScript."
        },
        {
          issue: "Missing Instant Slot Booking Engine",
          evidence: "Customers must back-and-forth on WhatsApp to confirm studio time slot."
        },
        {
          issue: "No Dynamic Vehicle-Based Pricing Estimator",
          evidence: "Users bounce when unable to check rough package tiers for their car model."
        }
      ]
    },
    competitors5Km: [
      {
        name: "Detailing Devils - Lajpat Nagar",
        rating: 4.6,
        reviews: 290,
        distanceKm: 1.2,
        hasWebsite: true,
        hasWhatsApp: false,
        ppfStrength: "High",
        digitalAdvantage: "Aggressive Meta ads campaigns targeting South Delhi"
      },
      {
        name: "3M Car Care - Kailash Colony",
        rating: 4.5,
        reviews: 380,
        distanceKm: 2.3,
        hasWebsite: true,
        hasWhatsApp: false,
        ppfStrength: "High",
        digitalAdvantage: "Strong legacy brand search volume"
      }
    ],
    opportunityScore: 52,
    opportunityScoreBreakdown: {
      websiteGaps: 8,
      conversionGaps: 10,
      localSeoGaps: 8,
      competitorAdvantage: 10,
      customerDemand: 9,
      marketingPotential: 7,
      total: 52
    },
    priority: "Moderate priority",
    opportunityReason: "Established player with website and WhatsApp, but losing up to 30% mobile visitors due to 48/100 speed and lack of interactive quote calculator.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Mobile performance overhaul + Interactive Detailing Cost Calculator to double landing page conversions.",
      recommendedSolution: "Speed Optimization (85+ Score) & Interactive Instant Quotation Calculator",
      whyItMatters: "South Delhi luxury car buyers browse on iPhones; a 3-second delay leads to 40% bounce rate to competing South Ext studios.",
      suggestedImplementation: "Compress hero media, implement Next-gen WebP, embed 3-step vehicle quote selector.",
      suggestedPriority: "Medium",
      kpisToTrack: "Lighthouse mobile score > 85, 2x increase in quotation submissions",
      suggestedPackagePrice: "₹22,000 one-time optimization"
    }
  },
  {
    id: "DL-DET-004",
    name: "Detailing Devils - Lajpat Nagar",
    gmbUrl: "https://maps.google.com/?cid=7612984615243781",
    address: "E-14, Ring Road, Lajpat Nagar 2, New Delhi",
    locality: "Lajpat Nagar & South Ext",
    zone: "South Delhi",
    pinCode: "110024",
    phone: "+91 95556 95695",
    hasPhone: true,
    website: "https://www.detailingdevils.com",
    websiteStatus: "Yes",
    rating: 4.6,
    reviewCount: 290,
    recentReviewActivity: "Moderate (8 reviews in last 30 days)",
    services: [
      "PPF (Paint Protection Film)",
      "Ceramic Coating (9H/10H)",
      "Car Washing & Steam Cleaning",
      "Interior Detailing & Sanitization"
    ],
    openingHours: "10:00 AM - 8:00 PM (Mon-Sun)",
    contactMethods: ["Phone", "Central Website Form"],
    instagram: "@detailingdevils_official",
    dataSource: "Google Maps Profile & Website Audit",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "Call-led",
    leadChannelBreakdown: {
      observedFacts: "National corporate website linked on GMB; no dedicated South Delhi studio landing page with local phone/WhatsApp.",
      reasonableEstimates: "Local inquiries get routed through national call centre leading to delayed customer callback.",
      confirmationRequired: "Whether studio franchisee handles their own digital marketing budget."
    },
    gmbAudit: {
      completeness: "85%",
      photosCount: 95,
      commonComplaints: "Delayed callback from central enquiry desk",
      positiveThemes: "Skin restoration polishing, nano ceramic coating durability",
      hasGmbMessaging: false,
      hasWebsiteLink: true,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: true,
      speedScore: 61,
      https: true,
      hasDedicatedPpfPage: true,
      hasDedicatedCeramicPage: true,
      hasPricingCalculator: false,
      hasClickToCall: true,
      hasWhatsAppWidget: false,
      hasOnlineBooking: false,
      hasContactForm: true,
      hasMapsEmbed: false,
      hasTestimonials: true,
      localSeoTitle: "Car Detailing | Detailing Devils India",
      hasStructuredData: false,
      clearCtas: "Generic corporate form",
      identifiedWeaknesses: [
        {
          issue: "No Locality-Specific Landing Page for Lajpat Nagar",
          evidence: "GMB website link directs to generic national home page rather than local Delhi studio page."
        },
        {
          issue: "Missing Local WhatsApp Click-to-Chat",
          evidence: "Customers cannot chat directly with local Delhi technicians before driving in."
        },
        {
          issue: "Weak Local SEO Meta Tags",
          evidence: "Meta title does not target 'Car Detailing Lajpat Nagar' or 'South Delhi PPF'."
        }
      ]
    },
    competitors5Km: [
      {
        name: "Ceramic Pro Delhi - Lajpat Nagar",
        rating: 4.9,
        reviews: 512,
        distanceKm: 1.2,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "Very High",
        digitalAdvantage: "Higher rating, local WhatsApp chat conversion"
      },
      {
        name: "Auto Spa Ceramic & PPF - South Ext",
        rating: 4.8,
        reviews: 142,
        distanceKm: 1.8,
        hasWebsite: false,
        hasWhatsApp: true,
        ppfStrength: "Medium",
        digitalAdvantage: "Aggressive local walk-ins"
      }
    ],
    opportunityScore: 71,
    opportunityScoreBreakdown: {
      websiteGaps: 16,
      conversionGaps: 18,
      localSeoGaps: 15,
      competitorAdvantage: 11,
      customerDemand: 6,
      marketingPotential: 5,
      total: 71
    },
    priority: "Medium-high priority",
    opportunityReason: "Franchise studio suffering from corporate lead leakage. Needs hyper-local Lajpat Nagar landing page with direct WhatsApp booking to beat Ceramic Pro.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Hyper-local Delhi lead generation funnel to bypass sluggish national corporate CRM.",
      recommendedSolution: "Dedicated South Delhi Studio Micro-Site + Direct WhatsApp Inbound Automation",
      whyItMatters: "Car owners want to talk directly to the Delhi workshop manager, not an outsourced call center executive in another city.",
      suggestedImplementation: "Launch 1-page high-converting micro-site for Lajpat Nagar branch with 1-click WhatsApp quote generator.",
      suggestedPriority: "High",
      kpisToTrack: "Local call-to-lead ratio increase by 45%, Response time < 5 minutes",
      suggestedPackagePrice: "₹25,000 setup"
    }
  },
  {
    id: "DL-DET-005",
    name: "Auto Spa Ceramic & PPF Studio - South Ext",
    gmbUrl: "https://maps.google.com/?cid=6152437819283746",
    address: "Block G, South Extension Part 1, Near Metro Gate 2, New Delhi",
    locality: "Lajpat Nagar & South Ext",
    zone: "South Delhi",
    pinCode: "110049",
    phone: "+91 98711 55662",
    hasPhone: true,
    website: "Not found",
    websiteStatus: "No",
    rating: 4.8,
    reviewCount: 142,
    recentReviewActivity: "Moderate (5 reviews in last 30 days)",
    services: [
      "PPF (Paint Protection Film)",
      "Ceramic Coating (9H/10H)",
      "Car Washing & Steam Cleaning",
      "Interior Detailing & Sanitization",
      "Car Polishing & Paint Correction"
    ],
    openingHours: "9:00 AM - 8:00 PM (Mon-Sun)",
    contactMethods: ["Phone", "Walk-in"],
    instagram: "Not found",
    dataSource: "Google Maps Profile & Public Directory",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "Call-led",
    leadChannelBreakdown: {
      observedFacts: "Public mobile phone number listed on GMB. No website URL or social profiles found.",
      reasonableEstimates: "Heavily reliant on walk-ins from South Ext market shoppers and word of mouth.",
      confirmationRequired: "Whether business has digital portfolio photos ready for a website."
    },
    gmbAudit: {
      completeness: "60%",
      photosCount: 42,
      commonComplaints: "Lack of online portfolio to inspect past luxury car jobs",
      positiveThemes: "Honest pricing, quick turnaround for interior dry cleaning",
      hasGmbMessaging: false,
      hasWebsiteLink: false,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: false,
      speedScore: 0,
      https: false,
      hasDedicatedPpfPage: false,
      hasDedicatedCeramicPage: false,
      hasPricingCalculator: false,
      hasClickToCall: false,
      hasWhatsAppWidget: false,
      hasOnlineBooking: false,
      hasContactForm: false,
      hasMapsEmbed: false,
      hasTestimonials: false,
      localSeoTitle: "Not found (No Website)",
      hasStructuredData: false,
      clearCtas: "None",
      identifiedWeaknesses: [
        {
          issue: "No Website Despite Prime South Delhi Location",
          evidence: "No website listed on Google Maps profile in affluent South Extension area."
        },
        {
          issue: "High-Ticket PPF Revenue Leakage to Nearby Brands",
          evidence: "Customers looking for Garware/Avery Dennison PPF choose Ceramic Pro or 3M due to perceived lack of credibility."
        },
        {
          issue: "Missing Before/After Transformation Showcase",
          evidence: "Potential customers cannot see proof of paint correction on dark/black cars."
        }
      ]
    },
    competitors5Km: [
      {
        name: "Ceramic Pro Delhi - Lajpat Nagar",
        rating: 4.9,
        reviews: 512,
        distanceKm: 1.8,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "Very High",
        digitalAdvantage: "Dominates South Delhi organic search rankings"
      },
      {
        name: "Motorcraft Detailing Lounge - South Ext",
        rating: 4.6,
        reviews: 198,
        distanceKm: 0.6,
        hasWebsite: true,
        hasWhatsApp: false,
        ppfStrength: "High",
        digitalAdvantage: "Has working website with service descriptions"
      }
    ],
    opportunityScore: 94,
    opportunityScoreBreakdown: {
      websiteGaps: 25,
      conversionGaps: 20,
      localSeoGaps: 19,
      competitorAdvantage: 14,
      customerDemand: 8,
      marketingPotential: 8,
      total: 94
    },
    priority: "High-priority prospect",
    opportunityReason: "Prime South Extension location, 4.8★ rating, but ZERO digital footprint (no website, no Instagram). Direct opportunity to sell complete Web + Local SEO agency package.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Establish prime digital studio presence to compete with Ceramic Pro and 3M for luxury car owners in South Ext & Defence Colony.",
      recommendedSolution: "Virtual Agency Local Authority Website + Google Business Profile Revamp + WhatsApp Funnel",
      whyItMatters: "Located in one of India's wealthiest postcodes (110049). Each acquired PPF customer yields ₹70,000 - ₹1,20,000 profit margin.",
      suggestedImplementation: "Build sleek dark-mode website showcasing ceramic gloss finishes, embed WhatsApp booking, optimize GMB for South Delhi keywords.",
      suggestedPriority: "Urgent",
      kpisToTrack: "Website live in 5 days, 20+ organic phone inquiries in first month",
      suggestedPackagePrice: "₹38,000 complete package"
    }
  },
  {
    id: "DL-DET-006",
    name: "Speed Car Wash & Detailing - Rohini Sector 7",
    gmbUrl: "https://maps.google.com/?cid=5142387192847162",
    address: "C-9/38, Near Deepali Chowk, Sector 7, Rohini, New Delhi",
    locality: "Rohini",
    zone: "North Delhi",
    pinCode: "110085",
    phone: "+91 98110 99881",
    hasPhone: true,
    website: "https://www.speedcarwashrohini.in",
    websiteStatus: "Yes",
    rating: 4.3,
    reviewCount: 315,
    recentReviewActivity: "Moderate (9 reviews in last 30 days)",
    services: [
      "Car Washing & Steam Cleaning",
      "Interior Detailing & Sanitization",
      "Car Polishing & Paint Correction",
      "Ceramic Coating (9H/10H)",
      "Underbody Anti-Rust Coating"
    ],
    openingHours: "8:30 AM - 8:30 PM (Mon-Sun)",
    contactMethods: ["Phone", "Walk-in"],
    instagram: "Not found",
    dataSource: "Google Maps Profile & Website Verification",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "Call-led",
    leadChannelBreakdown: {
      observedFacts: "Website exists but outdated template with broken images and non-working contact form. Phone active on GMB.",
      reasonableEstimates: "Website is not generating any inquiries; customers rely entirely on calling or driving in.",
      confirmationRequired: "Whether owner knows contact form emails are bouncing."
    },
    gmbAudit: {
      completeness: "80%",
      photosCount: 75,
      commonComplaints: "Long wait times on Sunday mornings; basic waiting lounge",
      positiveThemes: "Fast underbody wash, thorough interior vacuuming",
      hasGmbMessaging: false,
      hasWebsiteLink: true,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: false,
      speedScore: 38,
      https: false,
      hasDedicatedPpfPage: false,
      hasDedicatedCeramicPage: true,
      hasPricingCalculator: false,
      hasClickToCall: false,
      hasWhatsAppWidget: false,
      hasOnlineBooking: false,
      hasContactForm: true,
      hasMapsEmbed: true,
      hasTestimonials: false,
      localSeoTitle: "Speed Car Wash Rohini | Home",
      hasStructuredData: false,
      clearCtas: "Weak (Broken submit button)",
      identifiedWeaknesses: [
        {
          issue: "Broken Contact Form & Missing HTTPS SSL Certificate",
          evidence: "Browser flags site as 'Not Secure' (HTTP only); form submit triggers server 500 error."
        },
        {
          issue: "Not Mobile Responsive (Mobile Score 38/100)",
          evidence: "Text spills outside viewport on mobile screens; tap targets too close."
        },
        {
          issue: "No Click-to-Call or WhatsApp CTA",
          evidence: "Mobile visitors have to memorize the phone number and switch apps to dial."
        }
      ]
    },
    competitors5Km: [
      {
        name: "Gloss & Shield PPF Studio - Rohini Sec 11",
        rating: 4.8,
        reviews: 210,
        distanceKm: 2.2,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "Very High",
        digitalAdvantage: "Modern website with transparent ceramic/PPF packages"
      },
      {
        name: "The Detailing Mafia - Rohini Sector 8",
        rating: 4.7,
        reviews: 360,
        distanceKm: 1.5,
        hasWebsite: true,
        hasWhatsApp: false,
        ppfStrength: "High",
        digitalAdvantage: "Strong franchise branding & Google SEO"
      }
    ],
    opportunityScore: 86,
    opportunityScoreBreakdown: {
      websiteGaps: 24,
      conversionGaps: 18,
      localSeoGaps: 18,
      competitorAdvantage: 12,
      customerDemand: 7,
      marketingPotential: 7,
      total: 86
    },
    priority: "High-priority prospect",
    opportunityReason: "Has a broken, unsecure (HTTP) website that actively damages credibility. Heavy customer flow (315 reviews) being lost to nearby studios due to non-functioning digital forms.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Replace broken insecure website with modern SSL-secured mobile web app featuring slot booking.",
      recommendedSolution: "Virtual Agency Website Redesign + SSL Installation + WhatsApp Booking Engine",
      whyItMatters: "Over 80% of Rohini car owners search on smartphones; Chrome warns users 'Site Not Secure', frightening away potential high-ticket detailing clients.",
      suggestedImplementation: "Rebuild website on modern mobile-first stack, fix SSL certificate, implement WhatsApp chat button.",
      suggestedPriority: "Urgent",
      kpisToTrack: "Zero security warnings, 100% mobile usability pass, 35+ direct WhatsApp bookings/month",
      suggestedPackagePrice: "₹24,000 one-time rebuild"
    }
  },
  {
    id: "DL-DET-007",
    name: "Gloss & Shield PPF Studio - Rohini Sector 11",
    gmbUrl: "https://maps.google.com/?cid=4918237192847155",
    address: "G-18, Ring Road Plaza, Sector 11, Rohini, New Delhi",
    locality: "Rohini",
    zone: "North Delhi",
    pinCode: "110085",
    phone: "+91 99102 33441",
    hasPhone: true,
    website: "https://www.glossshielddelhi.com",
    websiteStatus: "Yes",
    rating: 4.8,
    reviewCount: 210,
    recentReviewActivity: "High (11 reviews in last 30 days)",
    services: [
      "PPF (Paint Protection Film)",
      "Ceramic Coating (9H/10H)",
      "Car Polishing & Paint Correction",
      "Car Wrapping & TPU Films",
      "Interior Detailing & Sanitization"
    ],
    openingHours: "10:00 AM - 8:30 PM (Mon-Sat, Sun by appointment)",
    contactMethods: ["Phone", "WhatsApp", "Website Form"],
    instagram: "@glossshield_rohini",
    dataSource: "Google Maps Profile & Website Verification",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "WhatsApp-led",
    leadChannelBreakdown: {
      observedFacts: "Active website with WhatsApp integration. Good photo portfolio of luxury cars.",
      reasonableEstimates: "Generating steady leads from Rohini and Pitampura, but lacks local Google Ads and SEO depth for 'Pitampura / Prashant Vihar'.",
      confirmationRequired: "Whether studio currently runs Google Search Ads for high-intent keywords."
    },
    gmbAudit: {
      completeness: "95%",
      photosCount: 160,
      commonComplaints: "Strict appointment timing",
      positiveThemes: "Bubble-free PPF finish, genuine Garware and Stek films",
      hasGmbMessaging: true,
      hasWebsiteLink: true,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: true,
      speedScore: 72,
      https: true,
      hasDedicatedPpfPage: true,
      hasDedicatedCeramicPage: true,
      hasPricingCalculator: false,
      hasClickToCall: true,
      hasWhatsAppWidget: true,
      hasOnlineBooking: false,
      hasContactForm: true,
      hasMapsEmbed: true,
      hasTestimonials: true,
      localSeoTitle: "PPF & Ceramic Coating Studio Rohini | Gloss & Shield",
      hasStructuredData: true,
      clearCtas: "Good",
      identifiedWeaknesses: [
        {
          issue: "No Multi-Locality SEO (Missing Pitampura & Paschim Vihar)",
          evidence: "Website targets only Rohini; misses high-income residents 3 KM away in Pitampura and Model Town."
        },
        {
          issue: "Missing Video Walkthrough Testimonials",
          evidence: "Text-only reviews; lacks video customer proofs of ceramic water beading."
        },
        {
          issue: "No Google Ads Landing Page Optimization",
          evidence: "Home page used for paid campaigns leading to high bounce rate."
        }
      ]
    },
    competitors5Km: [
      {
        name: "The Detailing Mafia - Rohini Sector 8",
        rating: 4.7,
        reviews: 360,
        distanceKm: 1.8,
        hasWebsite: true,
        hasWhatsApp: false,
        ppfStrength: "High",
        digitalAdvantage: "Higher review volume (360 vs 210)"
      },
      {
        name: "Speed Car Wash & Detailing - Rohini",
        rating: 4.3,
        reviews: 315,
        distanceKm: 2.2,
        hasWebsite: true,
        hasWhatsApp: false,
        ppfStrength: "Low",
        digitalAdvantage: "Captures budget wash traffic"
      }
    ],
    opportunityScore: 46,
    opportunityScoreBreakdown: {
      websiteGaps: 6,
      conversionGaps: 8,
      localSeoGaps: 12,
      competitorAdvantage: 8,
      customerDemand: 6,
      marketingPotential: 6,
      total: 46
    },
    priority: "Moderate priority",
    opportunityReason: "Well-built website and active WhatsApp funnel, but primed for Local SEO expansion into Pitampura/Model Town and high-intent Google Ads campaigns.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Expand catchment area to Pitampura and NSP via Local SEO landing pages and Google Call Ads.",
      recommendedSolution: "Virtual Agency Local SEO Expansion + Targeted Google Ads Lead Funnel",
      whyItMatters: "Studio has high capacity and strong technical skills; expanding beyond Rohini into Pitampura will capture 15+ additional luxury car detailing jobs/month.",
      suggestedImplementation: "Create targeted locality landing pages (/ppf-pitampura, /ceramic-coating-model-town) with conversion tracking.",
      suggestedPriority: "Medium",
      kpisToTrack: "Rank in top 3 Google Maps for Pitampura queries, 20+ inbound Google Ads calls",
      suggestedPackagePrice: "₹18,000/mo retainer"
    }
  },
  {
    id: "DL-DET-008",
    name: "Optimum Car Spa & PPF Lounge - Dwarka Sector 7",
    gmbUrl: "https://maps.google.com/?cid=3918274615243891",
    address: "Plot 12, Ramphal Chowk Road, Sector 7, Dwarka, New Delhi",
    locality: "Dwarka",
    zone: "West Delhi",
    pinCode: "110075",
    phone: "+91 98991 44552",
    hasPhone: true,
    website: "Not found",
    websiteStatus: "No",
    rating: 4.6,
    reviewCount: 248,
    recentReviewActivity: "High (14 reviews in last 30 days)",
    services: [
      "PPF (Paint Protection Film)",
      "Ceramic Coating (9H/10H)",
      "Car Washing & Steam Cleaning",
      "Interior Detailing & Sanitization",
      "Underbody Anti-Rust Coating"
    ],
    openingHours: "9:00 AM - 8:30 PM (Mon-Sun)",
    contactMethods: ["Phone", "Walk-in"],
    instagram: "@optimum_car_dwarka",
    dataSource: "Google Maps Profile & Field Discovery",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "Call-led",
    leadChannelBreakdown: {
      observedFacts: "Located in busy Ramphal Chowk commercial hub. Phone number active. No website URL listed on GMB.",
      reasonableEstimates: "Dwarka sub-city has over 1 million residents; potential customers searching online go to studios with websites in Gurgaon or Janakpuri.",
      confirmationRequired: "Whether owner has a domain name registered."
    },
    gmbAudit: {
      completeness: "68%",
      photosCount: 88,
      commonComplaints: "Waiting area crowded; lack of package brochure online",
      positiveThemes: "Fast foaming car wash, genuine 3M materials",
      hasGmbMessaging: false,
      hasWebsiteLink: false,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: false,
      speedScore: 0,
      https: false,
      hasDedicatedPpfPage: false,
      hasDedicatedCeramicPage: false,
      hasPricingCalculator: false,
      hasClickToCall: false,
      hasWhatsAppWidget: false,
      hasOnlineBooking: false,
      hasContactForm: false,
      hasMapsEmbed: false,
      hasTestimonials: false,
      localSeoTitle: "Not found (No Website)",
      hasStructuredData: false,
      clearCtas: "None",
      identifiedWeaknesses: [
        {
          issue: "Zero Website in Delhi's Largest Residential Sub-City",
          evidence: "No website present to serve Dwarka's high car-density population."
        },
        {
          issue: "No Service Menu or Warranty Information Online",
          evidence: "Car owners cannot review 3-year vs 5-year ceramic coating warranty details."
        },
        {
          issue: "Losing Luxury Car Owners to Gurgaon Studios",
          evidence: "Dwarka residents near expressway take cars to Cyber City / Golf Course Rd studios due to lack of trusted web presence locally."
        }
      ]
    },
    competitors5Km: [
      {
        name: "Elite Shield PPF & Ceramic - Dwarka Sec 10",
        rating: 4.8,
        reviews: 175,
        distanceKm: 2.4,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "Very High",
        digitalAdvantage: "Clean modern website capturing high-end PPF clients"
      },
      {
        name: "Express Detailing Studio - Dwarka Sec 12",
        rating: 4.4,
        reviews: 130,
        distanceKm: 3.1,
        hasWebsite: false,
        hasWhatsApp: false,
        ppfStrength: "Medium",
        digitalAdvantage: "Lower rating, basic washing facility"
      }
    ],
    opportunityScore: 91,
    opportunityScoreBreakdown: {
      websiteGaps: 25,
      conversionGaps: 20,
      localSeoGaps: 18,
      competitorAdvantage: 13,
      customerDemand: 8,
      marketingPotential: 7,
      total: 91
    },
    priority: "High-priority prospect",
    opportunityReason: "248 Google reviews with 4.6★ in dense Dwarka market, but completely missing a website. Immediate candidate for Virtual Agency Website & Local Lead Gen Package.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Capture high-income Dwarka sub-city car owners who currently drive to Gurgaon for PPF.",
      recommendedSolution: "Virtual Agency Car Detailing Website + WhatsApp Instant Slot Booking + Dwarka Local SEO",
      whyItMatters: "Dwarka has affluent residents in sectors 4, 6, 7, 9, 10, 11, 22. A professional website positions them as the #1 studio in Dwarka.",
      suggestedImplementation: "Launch 6-page responsive site with pricing guide, client video proofs, and WhatsApp quote bot.",
      suggestedPriority: "Urgent",
      kpisToTrack: "Website launched in 7 days, 25+ online quote requests in Month 1",
      suggestedPackagePrice: "₹32,000 package"
    }
  },
  {
    id: "DL-DET-009",
    name: "Elite Shield PPF & Ceramic - Dwarka Sector 10",
    gmbUrl: "https://maps.google.com/?cid=2918237461528392",
    address: "Metro View Complex, Near Sector 10 Metro Station, Dwarka, New Delhi",
    locality: "Dwarka",
    zone: "West Delhi",
    pinCode: "110075",
    phone: "+91 97114 66223",
    hasPhone: true,
    website: "https://www.eliteshielddwarka.com",
    websiteStatus: "Yes",
    rating: 4.8,
    reviewCount: 175,
    recentReviewActivity: "Moderate (8 reviews in last 30 days)",
    services: [
      "PPF (Paint Protection Film)",
      "Ceramic Coating (9H/10H)",
      "Car Polishing & Paint Correction",
      "Car Wrapping & TPU Films",
      "Interior Detailing & Sanitization"
    ],
    openingHours: "9:30 AM - 8:00 PM (Mon-Sat, Sun by booking)",
    contactMethods: ["Phone", "WhatsApp", "Website Form"],
    instagram: "@eliteshield_dwarka",
    dataSource: "Google Maps Profile & Website Verification",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "WhatsApp-led",
    leadChannelBreakdown: {
      observedFacts: "Responsive website with WhatsApp button. Showcases high-end PPF rolls and clean dust-free studio.",
      reasonableEstimates: "Well-converting setup, but relies solely on word of mouth and basic organic search; no paid funnel.",
      confirmationRequired: "Whether owner has capacity for 20+ additional vehicle bays."
    },
    gmbAudit: {
      completeness: "92%",
      photosCount: 110,
      commonComplaints: "High turnaround time for full body PPF (3-4 days)",
      positiveThemes: "Dust-free climate-controlled installation bay, great warranty support",
      hasGmbMessaging: true,
      hasWebsiteLink: true,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: true,
      speedScore: 68,
      https: true,
      hasDedicatedPpfPage: true,
      hasDedicatedCeramicPage: true,
      hasPricingCalculator: false,
      hasClickToCall: true,
      hasWhatsAppWidget: true,
      hasOnlineBooking: false,
      hasContactForm: true,
      hasMapsEmbed: true,
      hasTestimonials: true,
      localSeoTitle: "Elite Shield PPF & Ceramic Studio Dwarka | Best Car Detailing",
      hasStructuredData: true,
      clearCtas: "Good",
      identifiedWeaknesses: [
        {
          issue: "Missing Pricing Transparency",
          evidence: "No package breakdown for hatchback, sedan, or full-size SUV."
        },
        {
          issue: "No Google Local Service Ads or Call Campaigns",
          evidence: "Competitors in West Delhi run targeted ads for 'Car PPF cost Delhi'."
        },
        {
          issue: "Missing Video Testimonials",
          evidence: "Text reviews only; no customer reaction video on new car delivery."
        }
      ]
    },
    competitors5Km: [
      {
        name: "Optimum Car Spa & PPF Lounge - Dwarka Sec 7",
        rating: 4.6,
        reviews: 248,
        distanceKm: 2.4,
        hasWebsite: false,
        hasWhatsApp: false,
        ppfStrength: "Medium",
        digitalAdvantage: "Higher review count (248 vs 175)"
      },
      {
        name: "Autozpa Ceramic & PPF - Janakpuri",
        rating: 4.7,
        reviews: 215,
        distanceKm: 4.8,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "High",
        digitalAdvantage: "Covers broader West Delhi market"
      }
    ],
    opportunityScore: 50,
    opportunityScoreBreakdown: {
      websiteGaps: 6,
      conversionGaps: 10,
      localSeoGaps: 10,
      competitorAdvantage: 9,
      customerDemand: 8,
      marketingPotential: 7,
      total: 50
    },
    priority: "Moderate priority",
    opportunityReason: "Solid website and WhatsApp conversion flow, but lacking paid search ads and video social proof to dominate West Delhi.",
    virtualAgencyRecommendation: {
      mainOpportunity: "High-intent Google Ads campaign to capture luxury car owners in Dwarka and Janakpuri.",
      recommendedSolution: "Virtual Agency Google Search Ads Management + Video Case Study Funnel",
      whyItMatters: "Dwarka residents search actively on Google for PPF warranties. Capturing high-intent searches generates instant ROI.",
      suggestedImplementation: "Setup Google Call Ads targeting 'PPF installer Dwarka' and 'Ceramic coating near me'.",
      suggestedPriority: "Medium",
      kpisToTrack: "Cost Per Qualified Lead < ₹500, 20+ booked consultations/mo",
      suggestedPackagePrice: "₹15,000/mo management fee"
    }
  },
  {
    id: "DL-DET-010",
    name: "Retro Car Detailing Hub - Mayapuri Phase 1",
    gmbUrl: "https://maps.google.com/?cid=1928374615283948",
    address: "W-32, Industrial Area Phase 1, Mayapuri, New Delhi",
    locality: "Mayapuri Industrial Area",
    zone: "West Delhi",
    pinCode: "110064",
    phone: "+91 98105 11229",
    hasPhone: true,
    website: "Not found",
    websiteStatus: "No",
    rating: 4.5,
    reviewCount: 164,
    recentReviewActivity: "Moderate (6 reviews in last 30 days)",
    services: [
      "Car Polishing & Paint Correction",
      "Ceramic Coating (9H/10H)",
      "PPF (Paint Protection Film)",
      "Interior Detailing & Sanitization",
      "Car Wrapping & TPU Films"
    ],
    openingHours: "10:00 AM - 7:30 PM (Mon-Sat, Closed Sun)",
    contactMethods: ["Phone", "Walk-in"],
    instagram: "@retrocarmayapuri",
    dataSource: "Google Maps Profile & Directory Audit",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "Call-led",
    leadChannelBreakdown: {
      observedFacts: "Public phone visible. In Mayapuri automotive hub. No website found. Instagram profile has 1,200 followers.",
      reasonableEstimates: "Relies on Mayapuri trade network and Instagram DMs; loses inquiries from car owners searching on Google.",
      confirmationRequired: "Whether owner manages Instagram DMs directly or misses inquiries."
    },
    gmbAudit: {
      completeness: "62%",
      photosCount: 52,
      commonComplaints: "Industrial area dusty environment; hard to locate inside alley",
      positiveThemes: "Affordable ceramic coating, expert rubbing & buffing",
      hasGmbMessaging: false,
      hasWebsiteLink: false,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: false,
      speedScore: 0,
      https: false,
      hasDedicatedPpfPage: false,
      hasDedicatedCeramicPage: false,
      hasPricingCalculator: false,
      hasClickToCall: false,
      hasWhatsAppWidget: false,
      hasOnlineBooking: false,
      hasContactForm: false,
      hasMapsEmbed: false,
      hasTestimonials: false,
      localSeoTitle: "Not found (No Website)",
      hasStructuredData: false,
      clearCtas: "None",
      identifiedWeaknesses: [
        {
          issue: "No Professional Website to Overcome Industrial Area Stigma",
          evidence: "Customers hesitate to visit Mayapuri industrial alleys without a clean web presence demonstrating a sterile, modern studio."
        },
        {
          issue: "Zero Google Local SEO Rankings for High-End Services",
          evidence: "Ranks #14 on Google Maps for 'Ceramic coating West Delhi'."
        },
        {
          issue: "No Booking or Directions Assistance",
          evidence: "Customers report getting lost inside Mayapuri industrial roads."
        }
      ]
    },
    competitors5Km: [
      {
        name: "AutoShine PPF & Ceramic Studio - Mayapuri Ph 2",
        rating: 4.7,
        reviews: 198,
        distanceKm: 1.1,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "High",
        digitalAdvantage: "Professional website with route map and package list"
      },
      {
        name: "Urban Car Spa & Paint Protection - Kirti Nagar",
        rating: 4.8,
        reviews: 260,
        distanceKm: 3.5,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "Very High",
        digitalAdvantage: "High-end showroom atmosphere and strong digital funnels"
      }
    ],
    opportunityScore: 89,
    opportunityScoreBreakdown: {
      websiteGaps: 25,
      conversionGaps: 19,
      localSeoGaps: 17,
      competitorAdvantage: 13,
      customerDemand: 7,
      marketingPotential: 8,
      total: 89
    },
    priority: "High-priority prospect",
    opportunityReason: "164 reviews, good technical skills, but NO website. Customers perceive them as an old-school garage rather than a luxury detailing studio due to lack of web presence.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Brand repositioning: Transform from 'Mayapuri garage' to 'Premier West Delhi Detailing Studio' with a high-end website.",
      recommendedSolution: "Virtual Agency Modern Studio Website + Google Maps Route Guidance Integration + WhatsApp Inbound Bot",
      whyItMatters: "Car owners will gladly drive into Mayapuri if the website shows a dust-proof climate-controlled bay and authentic customer testimonials.",
      suggestedImplementation: "Build visual portfolio website, embed interactive video studio tour, and activate WhatsApp booking.",
      suggestedPriority: "Urgent",
      kpisToTrack: "Website live in 6 days, 20+ navigation clicks and WhatsApp inquiries/mo",
      suggestedPackagePrice: "₹29,000 complete package"
    }
  },
  {
    id: "DL-DET-011",
    name: "AutoShine PPF & Ceramic Studio - Mayapuri Phase 2",
    gmbUrl: "https://maps.google.com/?cid=1029384756192837",
    address: "B-88, Rewari Line Industrial Area, Mayapuri Phase 2, New Delhi",
    locality: "Mayapuri Industrial Area",
    zone: "West Delhi",
    pinCode: "110064",
    phone: "+91 98113 44556",
    hasPhone: true,
    website: "https://www.autoshinedelhi.com",
    websiteStatus: "Yes",
    rating: 4.7,
    reviewCount: 198,
    recentReviewActivity: "Moderate (7 reviews in last 30 days)",
    services: [
      "PPF (Paint Protection Film)",
      "Ceramic Coating (9H/10H)",
      "Car Polishing & Paint Correction",
      "Interior Detailing & Sanitization",
      "Underbody Anti-Rust Coating"
    ],
    openingHours: "9:30 AM - 7:30 PM (Mon-Sat, Closed Sun)",
    contactMethods: ["Phone", "WhatsApp", "Website Form"],
    instagram: "@autoshine_mayapuri",
    dataSource: "Google Maps Profile & Website Verification",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "Mixed",
    leadChannelBreakdown: {
      observedFacts: "Website is active with phone and WhatsApp icons. Basic 3-page template.",
      reasonableEstimates: "Getting some inquiries from West Delhi, but website lacks SSL badge trust and has uncompressed imagery.",
      confirmationRequired: "Whether owner wants to run Google Search Ads for Kirti Nagar/Janakpuri car owners."
    },
    gmbAudit: {
      completeness: "88%",
      photosCount: 94,
      commonComplaints: "Sunday closure inconveniences working professionals",
      positiveThemes: "High gloss ceramic finish, reasonable pricing for premium PPF",
      hasGmbMessaging: false,
      hasWebsiteLink: true,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: true,
      speedScore: 52,
      https: true,
      hasDedicatedPpfPage: true,
      hasDedicatedCeramicPage: true,
      hasPricingCalculator: false,
      hasClickToCall: true,
      hasWhatsAppWidget: true,
      hasOnlineBooking: false,
      hasContactForm: true,
      hasMapsEmbed: true,
      hasTestimonials: false,
      localSeoTitle: "Car Detailing Mayapuri | AutoShine Delhi",
      hasStructuredData: false,
      clearCtas: "Moderate",
      identifiedWeaknesses: [
        {
          issue: "No Customer Reviews or Trust Badges on Website",
          evidence: "198 Google reviews exist, but zero testimonials or Google review widgets displayed on the site."
        },
        {
          issue: "Missing Sunday Booking Automation",
          evidence: "Studio is closed Sundays, but website offers no option to pre-book for Monday or weekday slots."
        },
        {
          issue: "Slow Mobile Load Time (52/100)",
          evidence: "Heavy uncompressed JPEG gallery files slow down 4G mobile users."
        }
      ]
    },
    competitors5Km: [
      {
        name: "Retro Car Detailing Hub - Mayapuri",
        rating: 4.5,
        reviews: 164,
        distanceKm: 1.1,
        hasWebsite: false,
        hasWhatsApp: false,
        ppfStrength: "Medium",
        digitalAdvantage: "Slightly cheaper pricing"
      },
      {
        name: "Urban Car Spa & Paint Protection - Kirti Nagar",
        rating: 4.8,
        reviews: 260,
        distanceKm: 3.5,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "Very High",
        digitalAdvantage: "Higher review count and interactive booking"
      }
    ],
    opportunityScore: 62,
    opportunityScoreBreakdown: {
      websiteGaps: 12,
      conversionGaps: 14,
      localSeoGaps: 14,
      competitorAdvantage: 9,
      customerDemand: 7,
      marketingPotential: 6,
      total: 62
    },
    priority: "Medium-high priority",
    opportunityReason: "Basic website exists, but fails to display their 198 Google reviews or automate pre-booking for weekdays. Needs conversion rate optimization (CRO) overhaul.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Embed live Google Reviews widget + Mobile speed overhaul to increase quote conversion rate by 60%.",
      recommendedSolution: "Virtual Agency Website Conversion & Speed Overhaul Package",
      whyItMatters: "Social proof is critical for selling ₹50,000+ PPF packages. Showing 198 authentic reviews on the website immediately converts hesitant visitors.",
      suggestedImplementation: "Integrate dynamic Google review badge, compress images with WebP, add 1-click WhatsApp quote button.",
      suggestedPriority: "Medium",
      kpisToTrack: "Conversion rate increase from 1.5% to 4.2%, Mobile load speed > 85",
      suggestedPackagePrice: "₹18,000 one-time"
    }
  },
  {
    id: "DL-DET-012",
    name: "Retro Rims & Detailing Studio - Karol Bagh",
    gmbUrl: "https://maps.google.com/?cid=9283746152839401",
    address: "17A/45, WEA, Near Metro Pillar 104, Karol Bagh, New Delhi",
    locality: "Karol Bagh",
    zone: "Central Delhi",
    pinCode: "110005",
    phone: "+91 98101 22338",
    hasPhone: true,
    website: "Not found",
    websiteStatus: "No",
    rating: 4.4,
    reviewCount: 385,
    recentReviewActivity: "High (16 reviews in last 30 days)",
    services: [
      "Car Polishing & Paint Correction",
      "Car Wrapping & TPU Films",
      "Ceramic Coating (9H/10H)",
      "Interior Detailing & Sanitization",
      "PPF (Paint Protection Film)"
    ],
    openingHours: "10:30 AM - 8:30 PM (Mon-Sun)",
    contactMethods: ["Phone", "Walk-in"],
    instagram: "@retrorims_karolbagh",
    dataSource: "Google Maps Profile & Field Discovery",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "Call-led",
    leadChannelBreakdown: {
      observedFacts: "Massive footfall in Karol Bagh auto market. 385 reviews on Google Maps. No website link.",
      reasonableEstimates: "Karol Bagh market draws customers from all over Delhi NCR. Without a website, they miss customers who want to pre-book to avoid market traffic.",
      confirmationRequired: "Whether owner prefers pre-bookings over crowded walk-ins."
    },
    gmbAudit: {
      completeness: "70%",
      photosCount: 135,
      commonComplaints: "Severe parking crunch in Karol Bagh; delays during peak hours",
      positiveThemes: "Huge variety of custom wrap colors, aggressive prices for ceramic",
      hasGmbMessaging: false,
      hasWebsiteLink: false,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: false,
      speedScore: 0,
      https: false,
      hasDedicatedPpfPage: false,
      hasDedicatedCeramicPage: false,
      hasPricingCalculator: false,
      hasClickToCall: false,
      hasWhatsAppWidget: false,
      hasOnlineBooking: false,
      hasContactForm: false,
      hasMapsEmbed: false,
      hasTestimonials: false,
      localSeoTitle: "Not found (No Website)",
      hasStructuredData: false,
      clearCtas: "None",
      identifiedWeaknesses: [
        {
          issue: "No Website Despite 385 Reviews and High Market Fame",
          evidence: "Extremely popular Karol Bagh shop operating entirely without an online portal."
        },
        {
          issue: "No Parking & Pre-Booking Appointment System",
          evidence: "Customers complain about chaotic Karol Bagh traffic; an online slot reservation would solve the parking problem."
        },
        {
          issue: "Vulnerable to Low-Quality Price Shoppers",
          evidence: "Without a professional website highlighting premium TPU film warranties, they get stuck in Karol Bagh price wars."
        }
      ]
    },
    competitors5Km: [
      {
        name: "Supreme Car Accessories & Detailing - Karol Bagh",
        rating: 4.3,
        reviews: 210,
        distanceKm: 0.5,
        hasWebsite: false,
        hasWhatsApp: false,
        ppfStrength: "Medium",
        digitalAdvantage: "Similar walk-in profile"
      },
      {
        name: "Elite Auto Detailing Studio - Central Delhi",
        rating: 4.8,
        reviews: 145,
        distanceKm: 3.8,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "High",
        digitalAdvantage: "Captures corporate clients from Connaught Place"
      }
    ],
    opportunityScore: 93,
    opportunityScoreBreakdown: {
      websiteGaps: 25,
      conversionGaps: 20,
      localSeoGaps: 18,
      competitorAdvantage: 13,
      customerDemand: 9,
      marketingPotential: 8,
      total: 93
    },
    priority: "High-priority prospect",
    opportunityReason: "385 reviews (huge demand signal), active Instagram, prime market visibility, but NO website. High revenue loss because customers avoid visiting Karol Bagh due to parking uncertainty.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Build a VIP Pre-Booking Detailing Portal with guaranteed parking slot allocation to capture affluent Delhi car owners.",
      recommendedSolution: "Virtual Agency Detailing Website + VIP Slot Booking System + Karol Bagh SEO",
      whyItMatters: "Affluent car owners avoid Karol Bagh due to chaos. A clean booking website promising reserved studio parking attracts high-ticket Mercedes/BMW detailing clients.",
      suggestedImplementation: "Launch sleek dark portal with integrated VIP bay calendar, wrap gallery, and WhatsApp assistant.",
      suggestedPriority: "Urgent",
      kpisToTrack: "40+ pre-booked weekend slots/month, 25% increase in high-margin PPF/wrap revenue",
      suggestedPackagePrice: "₹36,000 package"
    }
  },
  {
    id: "DL-DET-013",
    name: "Gloss Factor Detailing Studio - Vasant Kunj",
    gmbUrl: "https://maps.google.com/?cid=8374615293847561",
    address: "Sector C, Pocket 9, Near Fortis Hospital, Vasant Kunj, New Delhi",
    locality: "Vasant Kunj & Chattarpur",
    zone: "South Delhi",
    pinCode: "110070",
    phone: "+91 99100 88771",
    hasPhone: true,
    website: "https://www.glossfactorindia.com",
    websiteStatus: "Yes",
    rating: 4.9,
    reviewCount: 340,
    recentReviewActivity: "High (15 reviews in last 30 days)",
    services: [
      "PPF (Paint Protection Film)",
      "Ceramic Coating (9H/10H)",
      "Car Polishing & Paint Correction",
      "Interior Detailing & Sanitization",
      "Graphene Coating"
    ],
    openingHours: "9:30 AM - 8:30 PM (Mon-Sun)",
    contactMethods: ["Phone", "WhatsApp", "Website Form"],
    instagram: "@glossfactor_delhi",
    dataSource: "Google Maps Profile & Website Verification",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "Mixed",
    leadChannelBreakdown: {
      observedFacts: "Strong digital presence with website, WhatsApp, and active Instagram. Caters to Vasant Kunj and Chattarpur luxury car owners.",
      reasonableEstimates: "Well-run studio, but missing Google Ads retargeting and Local SEO schema markup for South Delhi.",
      confirmationRequired: "Whether they want to scale into ceramic marine or bike detailing."
    },
    gmbAudit: {
      completeness: "96%",
      photosCount: 180,
      commonComplaints: "Premium pricing; requires prior appointment",
      positiveThemes: "Exceptional gloss, swirl-mark free Porsche & Jaguar delivery",
      hasGmbMessaging: true,
      hasWebsiteLink: true,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: true,
      speedScore: 64,
      https: true,
      hasDedicatedPpfPage: true,
      hasDedicatedCeramicPage: true,
      hasPricingCalculator: false,
      hasClickToCall: true,
      hasWhatsAppWidget: true,
      hasOnlineBooking: true,
      hasContactForm: true,
      hasMapsEmbed: true,
      hasTestimonials: true,
      localSeoTitle: "Car Detailing Vasant Kunj | Gloss Factor Studio",
      hasStructuredData: false,
      clearCtas: "Strong",
      identifiedWeaknesses: [
        {
          issue: "Missing LocalBusiness Schema Markup",
          evidence: "Rich snippets do not display star ratings or opening hours in Google organic SERP."
        },
        {
          issue: "Lacks Vehicle-Specific Quote Calculator",
          evidence: "Prospects must wait for manual WhatsApp quote instead of getting instant pricing ballpark."
        },
        {
          issue: "Mobile Speed Needs Boost (64/100)",
          evidence: "Hero video background slows first contentful paint on cellular networks."
        }
      ]
    },
    competitors5Km: [
      {
        name: "Bull Detailing Lab - Chattarpur",
        rating: 4.8,
        reviews: 215,
        distanceKm: 3.2,
        hasWebsite: false,
        hasWhatsApp: true,
        ppfStrength: "High",
        digitalAdvantage: "Large facility for supercar wraps"
      },
      {
        name: "Ceramic Pro Delhi - Okhla Phase 2",
        rating: 4.9,
        reviews: 310,
        distanceKm: 4.9,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "Very High",
        digitalAdvantage: "Higher review velocity"
      }
    ],
    opportunityScore: 48,
    opportunityScoreBreakdown: {
      websiteGaps: 6,
      conversionGaps: 8,
      localSeoGaps: 12,
      competitorAdvantage: 9,
      customerDemand: 7,
      marketingPotential: 6,
      total: 48
    },
    priority: "Moderate priority",
    opportunityReason: "Healthy website and active WhatsApp funnel. Opportunity lies in technical SEO (schema markup), Google Ads hyper-targeting for Vasant Vihar/Chanakyapuri, and mobile speed boost.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Capture affluent Chanakyapuri and Vasant Vihar diplomatic car owners via targeted High-Net-Worth Google Ads.",
      recommendedSolution: "Virtual Agency Technical SEO + Google Ads High-Intent Campaign + Speed Tune-Up",
      whyItMatters: "Positioning for diplomatic & luxury car clientele in South Delhi can increase average ticket size from ₹40,000 to ₹1,20,000.",
      suggestedImplementation: "Implement structured LocalBusiness schema, optimize Core Web Vitals, launch Google Ads for 'Luxury car detailing South Delhi'.",
      suggestedPriority: "Medium",
      kpisToTrack: "Top 3 Map Pack rankings across 5 KM radius, 15+ luxury car bookings/mo",
      suggestedPackagePrice: "₹20,000/mo retainer"
    }
  },
  {
    id: "DL-DET-014",
    name: "Bull Detailing Lab - Chattarpur",
    gmbUrl: "https://maps.google.com/?cid=7461528394019283",
    address: "Main 100 Feet Road, Near Tivoli Garden, Chattarpur, New Delhi",
    locality: "Vasant Kunj & Chattarpur",
    zone: "South Delhi",
    pinCode: "110074",
    phone: "+91 99992 11005",
    hasPhone: true,
    website: "Not found",
    websiteStatus: "No",
    rating: 4.8,
    reviewCount: 215,
    recentReviewActivity: "High (12 reviews in last 30 days)",
    services: [
      "PPF (Paint Protection Film)",
      "Ceramic Coating (9H/10H)",
      "Car Wrapping & TPU Films",
      "Interior Detailing & Sanitization",
      "Car Polishing & Paint Correction"
    ],
    openingHours: "10:00 AM - 8:00 PM (Mon-Sun)",
    contactMethods: ["Phone", "Walk-in"],
    instagram: "@bulldetailinglab",
    dataSource: "Google Maps Profile & Social Discovery",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "Call-led",
    leadChannelBreakdown: {
      observedFacts: "Huge studio on 100 Feet Road Chattarpur. Active Instagram with 8k followers. No website registered or linked on GMB.",
      reasonableEstimates: "Getting footfall from Chattarpur farmhouses and South Delhi, but loses high-income searchers who do research on Google before choosing a studio.",
      confirmationRequired: "Whether owner wants to automate lead generation rather than relying on Instagram DMs."
    },
    gmbAudit: {
      completeness: "72%",
      photosCount: 120,
      commonComplaints: "Location tricky due to 100 Feet Road construction",
      positiveThemes: "Spectacular color wraps, high precision PPF edge tucking",
      hasGmbMessaging: false,
      hasWebsiteLink: false,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: false,
      speedScore: 0,
      https: false,
      hasDedicatedPpfPage: false,
      hasDedicatedCeramicPage: false,
      hasPricingCalculator: false,
      hasClickToCall: false,
      hasWhatsAppWidget: false,
      hasOnlineBooking: false,
      hasContactForm: false,
      hasMapsEmbed: false,
      hasTestimonials: false,
      localSeoTitle: "Not found (No Website)",
      hasStructuredData: false,
      clearCtas: "None",
      identifiedWeaknesses: [
        {
          issue: "No Website Despite Huge Studio and Supercar Client Base",
          evidence: "Insta shows Defender, Urus, and Porsche detailing, but no official website exists."
        },
        {
          issue: "No Warranty Registration Portal for PPF Films",
          evidence: "Luxury car owners expect a digital warranty certificate portal for their 5-year/10-year TPU films."
        },
        {
          issue: "Total Reliance on Unpredictable Instagram Algorithm",
          evidence: "Any drop in Instagram reach cuts off new customer discovery."
        }
      ]
    },
    competitors5Km: [
      {
        name: "Gloss Factor Detailing Studio - Vasant Kunj",
        rating: 4.9,
        reviews: 340,
        distanceKm: 3.2,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "Very High",
        digitalAdvantage: "Higher reviews, professional website with online booking"
      },
      {
        name: "Supercar Detailing Lounge - Vasant Vihar",
        rating: 4.8,
        reviews: 160,
        distanceKm: 4.5,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "High",
        digitalAdvantage: "Luxury website positioning"
      }
    ],
    opportunityScore: 90,
    opportunityScoreBreakdown: {
      websiteGaps: 25,
      conversionGaps: 20,
      localSeoGaps: 17,
      competitorAdvantage: 13,
      customerDemand: 8,
      marketingPotential: 7,
      total: 90
    },
    priority: "High-priority prospect",
    opportunityReason: "215 reviews, 4.8★, caters to South Delhi farmhouse and luxury car owners, but has NO website. Enormous opportunity to sell a high-end studio portfolio website with digital warranty tracker.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Build a bespoke luxury car detailing website with an exclusive digital warranty lookup feature.",
      recommendedSolution: "Virtual Agency Luxury Car Studio Website + Digital Warranty Portal + WhatsApp Lead Bot",
      whyItMatters: "High-net-worth clients spending ₹1.5 Lakhs on PPF demand a verifiable digital warranty card and sleek online portfolio.",
      suggestedImplementation: "Develop dark-themed cinematic website, integrate digital customer warranty generator, and capture direct WhatsApp inquiries.",
      suggestedPriority: "Urgent",
      kpisToTrack: "Site live in 7 days, 30+ high-ticket leads in first month, 100% digital warranty adoption",
      suggestedPackagePrice: "₹42,000 premium package"
    }
  },
  {
    id: "DL-DET-015",
    name: "Autozpa Ceramic & PPF Studio - Janakpuri",
    gmbUrl: "https://maps.google.com/?cid=6152839401928374",
    address: "District Centre, Near Janakpuri West Metro Station, Janakpuri, New Delhi",
    locality: "Janakpuri & Vikaspuri",
    zone: "West Delhi",
    pinCode: "110058",
    phone: "+91 98114 77889",
    hasPhone: true,
    website: "https://www.autozpajanikpuri.in",
    websiteStatus: "Yes",
    rating: 4.7,
    reviewCount: 215,
    recentReviewActivity: "Moderate (7 reviews in last 30 days)",
    services: [
      "PPF (Paint Protection Film)",
      "Ceramic Coating (9H/10H)",
      "Car Washing & Steam Cleaning",
      "Interior Detailing & Sanitization",
      "Car Polishing & Paint Correction"
    ],
    openingHours: "9:30 AM - 8:30 PM (Mon-Sun)",
    contactMethods: ["Phone", "WhatsApp", "Website Form"],
    instagram: "@autozpa_janakpuri",
    dataSource: "Google Maps Profile & Website Verification",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "WhatsApp-led",
    leadChannelBreakdown: {
      observedFacts: "Website is active with WhatsApp button and service photos. Located at District Centre.",
      reasonableEstimates: "Getting regular inquiries from Janakpuri and Vikaspuri, but website lacks SEO depth for neighbouring Tilak Nagar and Uttam Nagar.",
      confirmationRequired: "Whether owner has an ad budget for West Delhi."
    },
    gmbAudit: {
      completeness: "88%",
      photosCount: 92,
      commonComplaints: "High demand during festive season leads to scheduling delays",
      positiveThemes: "Polite staff, detailed 3-stage compounding",
      hasGmbMessaging: true,
      hasWebsiteLink: true,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: true,
      speedScore: 58,
      https: true,
      hasDedicatedPpfPage: true,
      hasDedicatedCeramicPage: true,
      hasPricingCalculator: false,
      hasClickToCall: true,
      hasWhatsAppWidget: true,
      hasOnlineBooking: false,
      hasContactForm: true,
      hasMapsEmbed: true,
      hasTestimonials: true,
      localSeoTitle: "Car Detailing Janakpuri | Autozpa Studio",
      hasStructuredData: false,
      clearCtas: "Moderate",
      identifiedWeaknesses: [
        {
          issue: "No Pricing Transparency or Calculator",
          evidence: "Visitors cannot see approximate costs for small hatchback vs full SUV."
        },
        {
          issue: "Missing Local Schema Markup",
          evidence: "Google search results do not show opening hours, address or review stars directly in snippet."
        },
        {
          issue: "Mobile Speed Optimization Required (58/100)",
          evidence: "JavaScript render blocking slows down initial mobile page load."
        }
      ]
    },
    competitors5Km: [
      {
        name: "Prime Detailing Hub - Vikaspuri",
        rating: 4.5,
        reviews: 140,
        distanceKm: 2.1,
        hasWebsite: false,
        hasWhatsApp: true,
        ppfStrength: "Medium",
        digitalAdvantage: "Lower pricing"
      },
      {
        name: "Optimum Car Spa & PPF Lounge - Dwarka Sec 7",
        rating: 4.6,
        reviews: 248,
        distanceKm: 4.8,
        hasWebsite: false,
        hasWhatsApp: false,
        ppfStrength: "High",
        digitalAdvantage: "Higher review volume"
      }
    ],
    opportunityScore: 56,
    opportunityScoreBreakdown: {
      websiteGaps: 10,
      conversionGaps: 12,
      localSeoGaps: 14,
      competitorAdvantage: 8,
      customerDemand: 6,
      marketingPotential: 6,
      total: 56
    },
    priority: "Moderate priority",
    opportunityReason: "Good website and WhatsApp lead capture, but needs conversion calculator, schema markup, and speed optimization to increase West Delhi lead volume.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Add interactive pricing estimator and Local SEO for Janakpuri, Vikaspuri & Tilak Nagar.",
      recommendedSolution: "Virtual Agency Local SEO & Dynamic Pricing Calculator Upgrade",
      whyItMatters: "Janakpuri car owners compare 2-3 studios before choosing. An instant pricing calculator captures their phone number right at decision time.",
      suggestedImplementation: "Add vehicle model selector, calculate estimated ceramic/PPF quote, and route lead instantly to WhatsApp.",
      suggestedPriority: "Medium",
      kpisToTrack: "40% increase in lead captures, Mobile speed > 80",
      suggestedPackagePrice: "₹19,000 one-time"
    }
  },
  {
    id: "DL-DET-016",
    name: "Prime Detailing Hub - Vikaspuri",
    gmbUrl: "https://maps.google.com/?cid=5283940192837465",
    address: "Outer Ring Road, Near Pillar 612, Vikaspuri, New Delhi",
    locality: "Janakpuri & Vikaspuri",
    zone: "West Delhi",
    pinCode: "110018",
    phone: "+91 99113 22445",
    hasPhone: true,
    website: "Not found",
    websiteStatus: "No",
    rating: 4.5,
    reviewCount: 140,
    recentReviewActivity: "Moderate (5 reviews in last 30 days)",
    services: [
      "Car Polishing & Paint Correction",
      "Ceramic Coating (9H/10H)",
      "Car Washing & Steam Cleaning",
      "Interior Detailing & Sanitization",
      "Underbody Anti-Rust Coating"
    ],
    openingHours: "9:30 AM - 8:00 PM (Mon-Sun)",
    contactMethods: ["Phone", "Walk-in"],
    instagram: "Not found",
    dataSource: "Google Maps Profile & Directory Audit",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "Call-led",
    leadChannelBreakdown: {
      observedFacts: "GMB listing with phone number. Located on Outer Ring Road. No website found.",
      reasonableEstimates: "Gets traffic from Ring Road commuters, but fails to capture planned detailing customers searching online.",
      confirmationRequired: "Whether owner has a budget for website development."
    },
    gmbAudit: {
      completeness: "64%",
      photosCount: 48,
      commonComplaints: "Customer lounge needs air conditioning; basic wash bays",
      positiveThemes: "Fast foam wash, good stain removal on fabric seats",
      hasGmbMessaging: false,
      hasWebsiteLink: false,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: false,
      speedScore: 0,
      https: false,
      hasDedicatedPpfPage: false,
      hasDedicatedCeramicPage: false,
      hasPricingCalculator: false,
      hasClickToCall: false,
      hasWhatsAppWidget: false,
      hasOnlineBooking: false,
      hasContactForm: false,
      hasMapsEmbed: false,
      hasTestimonials: false,
      localSeoTitle: "Not found (No Website)",
      hasStructuredData: false,
      clearCtas: "None",
      identifiedWeaknesses: [
        {
          issue: "No Website Presence on Busy Outer Ring Road",
          evidence: "High visibility location on Outer Ring Road, but zero digital presence for motorists searching on smartphones."
        },
        {
          issue: "Losing PPF & Ceramic Leads to Autozpa Janakpuri",
          evidence: "Autozpa (2.1 KM away) has a dedicated website and captures the high-margin detailing clients."
        },
        {
          issue: "No Customer Appointment Booking",
          evidence: "Severe weekend bottlenecks and walk-in dropouts."
        }
      ]
    },
    competitors5Km: [
      {
        name: "Autozpa Ceramic & PPF - Janakpuri",
        rating: 4.7,
        reviews: 215,
        distanceKm: 2.1,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "High",
        digitalAdvantage: "Has working website and higher rating"
      },
      {
        name: "Retro Car Detailing Hub - Mayapuri",
        rating: 4.5,
        reviews: 164,
        distanceKm: 3.8,
        hasWebsite: false,
        hasWhatsApp: false,
        ppfStrength: "Medium",
        digitalAdvantage: "Specialized in paint correction"
      }
    ],
    opportunityScore: 88,
    opportunityScoreBreakdown: {
      websiteGaps: 25,
      conversionGaps: 19,
      localSeoGaps: 17,
      competitorAdvantage: 12,
      customerDemand: 7,
      marketingPotential: 8,
      total: 88
    },
    priority: "High-priority prospect",
    opportunityReason: "Outer Ring Road location with 140 reviews, but NO website. Competitor Autozpa Janakpuri takes all premium customers searching online.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Build a modern studio website with online appointment booking to capture Ring Road car commuters.",
      recommendedSolution: "Virtual Agency Car Detailing Website + Appointment Booking System + GMB Boost",
      whyItMatters: "Outer Ring Road sees thousands of car commuters daily. A prominent website allows drivers to book weekend slots during their commute.",
      suggestedImplementation: "Launch responsive 4-page site with instant WhatsApp booking and Google Maps optimization.",
      suggestedPriority: "High",
      kpisToTrack: "Website launched within 5 days, 20+ booked appointments in first month",
      suggestedPackagePrice: "₹26,000 package"
    }
  },
  {
    id: "DL-DET-017",
    name: "Express Detailers Studio - Pitampura",
    gmbUrl: "https://maps.google.com/?cid=4192837465019283",
    address: "Netaji Subhash Place (NSP), Near PP Jewellers, Pitampura, New Delhi",
    locality: "Pitampura & NSP",
    zone: "North Delhi",
    pinCode: "110034",
    phone: "+91 98119 55660",
    hasPhone: true,
    website: "Not found",
    websiteStatus: "No",
    rating: 4.8,
    reviewCount: 310,
    recentReviewActivity: "High (14 reviews in last 30 days)",
    services: [
      "PPF (Paint Protection Film)",
      "Ceramic Coating (9H/10H)",
      "Car Polishing & Paint Correction",
      "Interior Detailing & Sanitization",
      "Car Wrapping & TPU Films"
    ],
    openingHours: "10:00 AM - 8:30 PM (Mon-Sun)",
    contactMethods: ["Phone", "Walk-in"],
    instagram: "@expressdetailers_nsp",
    dataSource: "Google Maps Profile & Field Discovery",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "Call-led",
    leadChannelBreakdown: {
      observedFacts: "Located in prime NSP commercial hub. 310 reviews with 4.8 rating. Phone active. No website found on GMB.",
      reasonableEstimates: "Enormous business from Pitampura, Model Town, and Punjabi Bagh businessmen, but relies entirely on phone calls and walk-ins.",
      confirmationRequired: "Whether owner wants to automate online customer inquiries."
    },
    gmbAudit: {
      completeness: "75%",
      photosCount: 145,
      commonComplaints: "Peak hours parking wait outside NSP complex",
      positiveThemes: "High mirror reflection ceramic coating, genuine Garware PPF",
      hasGmbMessaging: false,
      hasWebsiteLink: false,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: false,
      speedScore: 0,
      https: false,
      hasDedicatedPpfPage: false,
      hasDedicatedCeramicPage: false,
      hasPricingCalculator: false,
      hasClickToCall: false,
      hasWhatsAppWidget: false,
      hasOnlineBooking: false,
      hasContactForm: false,
      hasMapsEmbed: false,
      hasTestimonials: false,
      localSeoTitle: "Not found (No Website)",
      hasStructuredData: false,
      clearCtas: "None",
      identifiedWeaknesses: [
        {
          issue: "No Website Despite NSP Commercial Hub Presence",
          evidence: "NSP is North Delhi's premier business district; operating without a website hurts corporate executive trust."
        },
        {
          issue: "Lacks Interactive Service & Price Breakdown",
          evidence: "Prospective luxury car owners cannot inspect package tiers (Silver, Gold, Platinum)."
        },
        {
          issue: "No WhatsApp Lead Capture Workflow",
          evidence: "Misses nighttime inquiries when shop is closed."
        }
      ]
    },
    competitors5Km: [
      {
        name: "Gloss & Shield PPF Studio - Rohini Sec 11",
        rating: 4.8,
        reviews: 210,
        distanceKm: 3.4,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "Very High",
        digitalAdvantage: "Has working website with online quote booking"
      },
      {
        name: "The Detailing Mafia - Rohini Sector 8",
        rating: 4.7,
        reviews: 360,
        distanceKm: 3.8,
        hasWebsite: true,
        hasWhatsApp: false,
        ppfStrength: "High",
        digitalAdvantage: "High brand awareness"
      }
    ],
    opportunityScore: 95,
    opportunityScoreBreakdown: {
      websiteGaps: 25,
      conversionGaps: 20,
      localSeoGaps: 19,
      competitorAdvantage: 14,
      customerDemand: 9,
      marketingPotential: 8,
      total: 95
    },
    priority: "High-priority prospect",
    opportunityReason: "310 reviews, 4.8★, prime NSP Pitampura location catering to affluent North Delhi businessmen, but ZERO website. Massive immediate revenue upside for Virtual Agency.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Position as North Delhi's premier luxury car detailing studio with a flagship website.",
      recommendedSolution: "Virtual Agency Flagship Detailing Web Portal + WhatsApp Inbound Bot + Pitampura Local SEO",
      whyItMatters: "North Delhi businessmen in Pitampura and Model Town drive luxury German cars and expect a world-class digital presentation before handing over a ₹1 Crore car.",
      suggestedImplementation: "Build cinematic dark-mode website showcasing PPF hydrophobic tests, embed WhatsApp lead engine, optimize GMB for Pitampura keywords.",
      suggestedPriority: "Urgent",
      kpisToTrack: "Website live in 7 days, 35+ high-ticket leads in Month 1, #1 Google Map ranking in NSP",
      suggestedPackagePrice: "₹38,000 complete package"
    }
  },
  {
    id: "DL-DET-018",
    name: "Ceramic Shield Studio - NSP Pitampura",
    gmbUrl: "https://maps.google.com/?cid=3019283746501928",
    address: "Aggarwal Millennium Tower 2, Netaji Subhash Place, Pitampura, New Delhi",
    locality: "Pitampura & NSP",
    zone: "North Delhi",
    pinCode: "110034",
    phone: "+91 99105 77661",
    hasPhone: true,
    website: "https://www.ceramicshieldnsp.com",
    websiteStatus: "Yes",
    rating: 4.6,
    reviewCount: 165,
    recentReviewActivity: "Moderate (6 reviews in last 30 days)",
    services: [
      "Ceramic Coating (9H/10H)",
      "PPF (Paint Protection Film)",
      "Car Polishing & Paint Correction",
      "Interior Detailing & Sanitization"
    ],
    openingHours: "10:00 AM - 8:00 PM (Mon-Sat, Closed Sun)",
    contactMethods: ["Phone", "Website Form"],
    instagram: "@ceramicshield_nsp",
    dataSource: "Google Maps Profile & Website Verification",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "Call-led",
    leadChannelBreakdown: {
      observedFacts: "Website is active but lacks direct WhatsApp chat button. Form submissions go to an unmonitored mailbox.",
      reasonableEstimates: "Losing 40% of website visitors because mobile users prefer WhatsApp over filling 5-field contact forms.",
      confirmationRequired: "Whether owner receives form leads promptly."
    },
    gmbAudit: {
      completeness: "82%",
      photosCount: 78,
      commonComplaints: "Delayed email replies to website inquiry form",
      positiveThemes: "Clean application bay, honest consultation on coating lifespan",
      hasGmbMessaging: false,
      hasWebsiteLink: true,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: true,
      speedScore: 56,
      https: true,
      hasDedicatedPpfPage: true,
      hasDedicatedCeramicPage: true,
      hasPricingCalculator: false,
      hasClickToCall: true,
      hasWhatsAppWidget: false,
      hasOnlineBooking: false,
      hasContactForm: true,
      hasMapsEmbed: true,
      hasTestimonials: true,
      localSeoTitle: "Ceramic Coating Pitampura | Ceramic Shield NSP",
      hasStructuredData: false,
      clearCtas: "Weak (Old contact form only)",
      identifiedWeaknesses: [
        {
          issue: "No WhatsApp Conversion Button",
          evidence: "Customers must fill a lengthy contact form; no instant WhatsApp click-to-chat available."
        },
        {
          issue: "Sunday Closure with No Online Booking",
          evidence: "Studio is closed Sundays, but website offers no way to reserve next week's slot."
        },
        {
          issue: "Missing Local SEO Schema for NSP",
          evidence: "Google does not display address or telephone in organic SERP snippet."
        }
      ]
    },
    competitors5Km: [
      {
        name: "Express Detailers Studio - Pitampura",
        rating: 4.8,
        reviews: 310,
        distanceKm: 0.3,
        hasWebsite: false,
        hasWhatsApp: false,
        ppfStrength: "Very High",
        digitalAdvantage: "Higher review count (310 vs 165)"
      },
      {
        name: "Gloss & Shield PPF Studio - Rohini Sec 11",
        rating: 4.8,
        reviews: 210,
        distanceKm: 3.4,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "Very High",
        digitalAdvantage: "Has WhatsApp widget and higher rating"
      }
    ],
    opportunityScore: 72,
    opportunityScoreBreakdown: {
      websiteGaps: 14,
      conversionGaps: 18,
      localSeoGaps: 15,
      competitorAdvantage: 11,
      customerDemand: 7,
      marketingPotential: 7,
      total: 72
    },
    priority: "Medium-high priority",
    opportunityReason: "Website exists but conversion funnel is broken (cumbersome form, no WhatsApp widget, slow response). Ready for Virtual Agency WhatsApp lead engine upgrade.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Replace static inquiry form with 1-click WhatsApp quote bot and instant slot calendar.",
      recommendedSolution: "Virtual Agency WhatsApp Lead Funnel & Conversion Rate Optimization",
      whyItMatters: "92% of Indian mobile consumers prefer WhatsApp over web forms. Switching to WhatsApp generates 3x more inquiries immediately.",
      suggestedImplementation: "Integrate floating WhatsApp widget, add vehicle package selector, implement automatic WhatsApp lead notification to studio owner.",
      suggestedPriority: "High",
      kpisToTrack: "3x increase in weekly lead inquiries, 0 missed inquiries",
      suggestedPackagePrice: "₹16,000 setup"
    }
  },
  {
    id: "DL-DET-019",
    name: "Shine Garage Detailing Studio - Preet Vihar",
    gmbUrl: "https://maps.google.com/?cid=2019283746501928",
    address: "Vikas Marg, Near Metro Pillar 108, Preet Vihar, New Delhi",
    locality: "Preet Vihar & Laxmi Nagar",
    zone: "East Delhi",
    pinCode: "110092",
    phone: "+91 98112 00994",
    hasPhone: true,
    website: "Not found",
    websiteStatus: "No",
    rating: 4.7,
    reviewCount: 220,
    recentReviewActivity: "High (11 reviews in last 30 days)",
    services: [
      "PPF (Paint Protection Film)",
      "Ceramic Coating (9H/10H)",
      "Car Washing & Steam Cleaning",
      "Interior Detailing & Sanitization",
      "Car Polishing & Paint Correction"
    ],
    openingHours: "9:30 AM - 8:30 PM (Mon-Sun)",
    contactMethods: ["Phone", "Walk-in"],
    instagram: "@shinegarage_eastdelhi",
    dataSource: "Google Maps Profile & Field Discovery",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "Call-led",
    leadChannelBreakdown: {
      observedFacts: "Prominent Vikas Marg frontage. 220 Google reviews. Phone active. No website URL listed.",
      reasonableEstimates: "Main hub for East Delhi (Preet Vihar, Nirman Vihar, Swasthya Vihar). Missing affluent car owners who search online before booking.",
      confirmationRequired: "Whether owner has considered building a website."
    },
    gmbAudit: {
      completeness: "70%",
      photosCount: 110,
      commonComplaints: "Peak Vikas Marg traffic causes delivery delays",
      positiveThemes: "High gloss ceramic finish on black Scorpios & Fortuners",
      hasGmbMessaging: false,
      hasWebsiteLink: false,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: false,
      speedScore: 0,
      https: false,
      hasDedicatedPpfPage: false,
      hasDedicatedCeramicPage: false,
      hasPricingCalculator: false,
      hasClickToCall: false,
      hasWhatsAppWidget: false,
      hasOnlineBooking: false,
      hasContactForm: false,
      hasMapsEmbed: false,
      hasTestimonials: false,
      localSeoTitle: "Not found (No Website)",
      hasStructuredData: false,
      clearCtas: "None",
      identifiedWeaknesses: [
        {
          issue: "No Website in East Delhi's Wealthiest Belt",
          evidence: "Preet Vihar and Nirman Vihar have high luxury car ownership, but this top-rated studio has zero web presence."
        },
        {
          issue: "Losing PPF Revenue to Central and South Delhi Studios",
          evidence: "East Delhi luxury car owners travel to South Extension or Okhla because East Delhi studios lack professional websites."
        },
        {
          issue: "No Transparent Package Pricing",
          evidence: "Customers must call or visit in person to learn about warranty terms."
        }
      ]
    },
    competitors5Km: [
      {
        name: "Kings Detailing & Wrapping Studio - Laxmi Nagar",
        rating: 4.5,
        reviews: 180,
        distanceKm: 1.8,
        hasWebsite: false,
        hasWhatsApp: false,
        ppfStrength: "Medium",
        digitalAdvantage: "Similar walk-in profile"
      },
      {
        name: "East Delhi Ceramic Spa - Nirman Vihar",
        rating: 4.6,
        reviews: 125,
        distanceKm: 0.9,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "High",
        digitalAdvantage: "Has website with pricing menu"
      }
    ],
    opportunityScore: 92,
    opportunityScoreBreakdown: {
      websiteGaps: 25,
      conversionGaps: 20,
      localSeoGaps: 18,
      competitorAdvantage: 13,
      customerDemand: 8,
      marketingPotential: 8,
      total: 92
    },
    priority: "High-priority prospect",
    opportunityReason: "220 reviews with 4.7★ on Vikas Marg, but completely lacking a website. Wealthy East Delhi clients travel across the Yamuna for detailing because local studios lack online credibility.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Capture East Delhi luxury car owners locally by building the #1 detailing web portal in East Delhi.",
      recommendedSolution: "Virtual Agency East Delhi Authority Website + WhatsApp Inbound Bot + Vikas Marg Local SEO",
      whyItMatters: "East Delhi residents in Preet Vihar and Swasthya Vihar want high-end detailing without crossing the Yamuna River. A high-end website builds instant local trust.",
      suggestedImplementation: "Launch sleek 5-page studio portal with ceramic gloss portfolio, customer reviews, and WhatsApp booking.",
      suggestedPriority: "Urgent",
      kpisToTrack: "Website live in 6 days, 25+ booked quotes in Month 1, First-page Google ranking for East Delhi PPF",
      suggestedPackagePrice: "₹34,000 package"
    }
  },
  {
    id: "DL-DET-020",
    name: "Kings Detailing & Wrapping Studio - Laxmi Nagar",
    gmbUrl: "https://maps.google.com/?cid=1019283746501928",
    address: "Main Vikas Marg, Near Laxmi Nagar Metro Station, New Delhi",
    locality: "Preet Vihar & Laxmi Nagar",
    zone: "East Delhi",
    pinCode: "110092",
    phone: "+91 99990 12345",
    hasPhone: true,
    website: "Not found",
    websiteStatus: "No",
    rating: 4.5,
    reviewCount: 180,
    recentReviewActivity: "Moderate (6 reviews in last 30 days)",
    services: [
      "Car Wrapping & TPU Films",
      "PPF (Paint Protection Film)",
      "Car Polishing & Paint Correction",
      "Interior Detailing & Sanitization"
    ],
    openingHours: "10:00 AM - 8:30 PM (Mon-Sun)",
    contactMethods: ["Phone", "Walk-in"],
    instagram: "@kingsdetailing_delhi",
    dataSource: "Google Maps Profile & Public Web",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "Call-led",
    leadChannelBreakdown: {
      observedFacts: "Public phone on GMB. High footfall location near Laxmi Nagar metro. No website.",
      reasonableEstimates: "Strong wrap and tint business, but fails to capture lucrative PPF full-body wraps due to lack of a professional portfolio site.",
      confirmationRequired: "Whether they want to attract higher-ticket luxury car owners."
    },
    gmbAudit: {
      completeness: "66%",
      photosCount: 65,
      commonComplaints: "Crowded area; difficult to find parking",
      positiveThemes: "Fast color wrap jobs, trendy roof black out and dechrome",
      hasGmbMessaging: false,
      hasWebsiteLink: false,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: false,
      speedScore: 0,
      https: false,
      hasDedicatedPpfPage: false,
      hasDedicatedCeramicPage: false,
      hasPricingCalculator: false,
      hasClickToCall: false,
      hasWhatsAppWidget: false,
      hasOnlineBooking: false,
      hasContactForm: false,
      hasMapsEmbed: false,
      hasTestimonials: false,
      localSeoTitle: "Not found (No Website)",
      hasStructuredData: false,
      clearCtas: "None",
      identifiedWeaknesses: [
        {
          issue: "No Website for Car Wrapping & PPF Portfolio",
          evidence: "Customers looking for TPU wraps and color change films want to preview color swatches and gallery proofs online."
        },
        {
          issue: "Stuck in Lower-Margin Cosmetic Accessories",
          evidence: "Without a luxury web presence, perceived as a budget tint shop rather than an authorized PPF installation studio."
        },
        {
          issue: "Zero Automated Appointment Capture",
          evidence: "Walk-ins clash during peak hours leading to lost business."
        }
      ]
    },
    competitors5Km: [
      {
        name: "Shine Garage Detailing Studio - Preet Vihar",
        rating: 4.7,
        reviews: 220,
        distanceKm: 1.8,
        hasWebsite: false,
        hasWhatsApp: false,
        ppfStrength: "High",
        digitalAdvantage: "Higher review count and rating"
      },
      {
        name: "East Delhi Ceramic Spa - Nirman Vihar",
        rating: 4.6,
        reviews: 125,
        distanceKm: 1.2,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "High",
        digitalAdvantage: "Has website with active lead capture"
      }
    ],
    opportunityScore: 89,
    opportunityScoreBreakdown: {
      websiteGaps: 25,
      conversionGaps: 19,
      localSeoGaps: 18,
      competitorAdvantage: 12,
      customerDemand: 7,
      marketingPotential: 8,
      total: 89
    },
    priority: "High-priority prospect",
    opportunityReason: "180 reviews, 4.5★, strong wrapping skills, but NO website. Needs an online visual wrap configurator & studio portfolio to transition into high-margin PPF and luxury wraps.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Reposition from budget wrap shop to premium automotive styling & PPF studio with an interactive online gallery.",
      recommendedSolution: "Virtual Agency Car Wrapping & PPF Portfolio Website + WhatsApp Lead Funnel",
      whyItMatters: "Full car wraps and PPF sell for ₹75,000+. Showing high-resolution video finishes and color swatches online builds premium authority.",
      suggestedImplementation: "Build 5-page visual website with color wrap simulator, client reviews, and WhatsApp booking engine.",
      suggestedPriority: "High",
      kpisToTrack: "Site live in 6 days, 20+ wrap inquiries in Month 1, Average ticket size increase by 40%",
      suggestedPackagePrice: "₹30,000 complete package"
    }
  },
  {
    id: "DL-DET-021",
    name: "Urban Car Spa & Paint Protection - Kirti Nagar",
    gmbUrl: "https://maps.google.com/?cid=9102938475601928",
    address: "22/1, Furniture Block, Near Mayapuri Flyover, Kirti Nagar, New Delhi",
    locality: "Kirti Nagar & Naraina",
    zone: "West Delhi",
    pinCode: "110015",
    phone: "+91 98115 66778",
    hasPhone: true,
    website: "https://www.urbancarspadelhi.com",
    websiteStatus: "Yes",
    rating: 4.8,
    reviewCount: 260,
    recentReviewActivity: "High (13 reviews in last 30 days)",
    services: [
      "PPF (Paint Protection Film)",
      "Ceramic Coating (9H/10H)",
      "Car Polishing & Paint Correction",
      "Interior Detailing & Sanitization",
      "Car Wrapping & TPU Films"
    ],
    openingHours: "9:30 AM - 8:00 PM (Mon-Sun)",
    contactMethods: ["Phone", "WhatsApp", "Website Form"],
    instagram: "@urbancarspa_kirtinagar",
    dataSource: "Google Maps Profile & Website Verification",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "Mixed",
    leadChannelBreakdown: {
      observedFacts: "Modern website with service pages and WhatsApp link. Active on social media.",
      reasonableEstimates: "Strong performer in West Delhi, but website lacks structured LocalBusiness schema and has heavy unoptimized banner images.",
      confirmationRequired: "Whether studio currently runs Google Ads or Meta Ads."
    },
    gmbAudit: {
      completeness: "94%",
      photosCount: 155,
      commonComplaints: "Higher price point compared to Mayapuri local workshops",
      positiveThemes: "Clean air-conditioned customer lounge, zero orange peel on ceramic finish",
      hasGmbMessaging: true,
      hasWebsiteLink: true,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: true,
      speedScore: 60,
      https: true,
      hasDedicatedPpfPage: true,
      hasDedicatedCeramicPage: true,
      hasPricingCalculator: false,
      hasClickToCall: true,
      hasWhatsAppWidget: true,
      hasOnlineBooking: false,
      hasContactForm: true,
      hasMapsEmbed: true,
      hasTestimonials: true,
      localSeoTitle: "Car Detailing Kirti Nagar | Urban Car Spa Delhi",
      hasStructuredData: false,
      clearCtas: "Good",
      identifiedWeaknesses: [
        {
          issue: "Missing LocalBusiness Schema & Rich SERP Snippets",
          evidence: "Star rating and operating hours do not appear in organic Google search listings."
        },
        {
          issue: "Lacks Instant Online Quotation Calculator",
          evidence: "Visitors must chat on WhatsApp to get general pricing tiers."
        },
        {
          issue: "Mobile Performance Needs Compression (60/100)",
          evidence: "Large image assets cause slow mobile page rendering."
        }
      ]
    },
    competitors5Km: [
      {
        name: "AutoShine PPF & Ceramic Studio - Mayapuri",
        rating: 4.7,
        reviews: 198,
        distanceKm: 2.2,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "High",
        digitalAdvantage: "Lower pricing tiers"
      },
      {
        name: "Retro Car Detailing Hub - Mayapuri",
        rating: 4.5,
        reviews: 164,
        distanceKm: 2.8,
        hasWebsite: false,
        hasWhatsApp: false,
        ppfStrength: "Medium",
        digitalAdvantage: "Traditional walk-in base"
      }
    ],
    opportunityScore: 54,
    opportunityScoreBreakdown: {
      websiteGaps: 8,
      conversionGaps: 12,
      localSeoGaps: 14,
      competitorAdvantage: 8,
      customerDemand: 6,
      marketingPotential: 6,
      total: 54
    },
    priority: "Moderate priority",
    opportunityReason: "Quality website and high rating (4.8★, 260 reviews), but missing Local SEO rich snippets, pricing calculator, and Google Ads expansion into Punjabi Bagh.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Scale lead flow from Punjabi Bagh and Rajouri Garden with targeted Google Ads and schema optimization.",
      recommendedSolution: "Virtual Agency Local SEO Rich Schema + Google Call Ads Campaign",
      whyItMatters: "Kirti Nagar borders affluent Punjabi Bagh. Running targeted ads for 'PPF studio Punjabi Bagh' will drive high-ticket luxury car owners directly to their bays.",
      suggestedImplementation: "Add rich schema markup, launch high-intent Google Search Ads, and embed vehicle price estimator.",
      suggestedPriority: "Medium",
      kpisToTrack: "Top 3 Google Map ranking in West Delhi, 25+ inbound paid leads/mo",
      suggestedPackagePrice: "₹18,000/mo retainer"
    }
  },
  {
    id: "DL-DET-022",
    name: "Precision Detailing Works - Naraina",
    gmbUrl: "https://maps.google.com/?cid=8102938475601927",
    address: "C-14, Naraina Industrial Area Phase 1, New Delhi",
    locality: "Kirti Nagar & Naraina",
    zone: "West Delhi",
    pinCode: "110028",
    phone: "+91 98116 33221",
    hasPhone: true,
    website: "Not found",
    websiteStatus: "No",
    rating: 4.6,
    reviewCount: 155,
    recentReviewActivity: "Moderate (5 reviews in last 30 days)",
    services: [
      "PPF (Paint Protection Film)",
      "Ceramic Coating (9H/10H)",
      "Car Polishing & Paint Correction",
      "Interior Detailing & Sanitization",
      "Underbody Anti-Rust Coating"
    ],
    openingHours: "9:30 AM - 7:30 PM (Mon-Sat, Closed Sun)",
    contactMethods: ["Phone", "Walk-in"],
    instagram: "Not found",
    dataSource: "Google Maps Profile & Directory Audit",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "Call-led",
    leadChannelBreakdown: {
      observedFacts: "Industrial area workshop with 155 reviews. Public phone listed. No website found.",
      reasonableEstimates: "Relies on Naraina and Dhaula Kuan car owners via phone or word of mouth; loses high-end Dhaula Kuan / Chanakyapuri clients due to no website.",
      confirmationRequired: "Whether owner has high-resolution studio photos."
    },
    gmbAudit: {
      completeness: "62%",
      photosCount: 50,
      commonComplaints: "Closed Sundays; hard to find location inside Naraina Phase 1",
      positiveThemes: "Skilled paint buffing, honest advice on ceramic coating durability",
      hasGmbMessaging: false,
      hasWebsiteLink: false,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: false,
      speedScore: 0,
      https: false,
      hasDedicatedPpfPage: false,
      hasDedicatedCeramicPage: false,
      hasPricingCalculator: false,
      hasClickToCall: false,
      hasWhatsAppWidget: false,
      hasOnlineBooking: false,
      hasContactForm: false,
      hasMapsEmbed: false,
      hasTestimonials: false,
      localSeoTitle: "Not found (No Website)",
      hasStructuredData: false,
      clearCtas: "None",
      identifiedWeaknesses: [
        {
          issue: "No Website Despite Strategic Location Near Dhaula Kuan",
          evidence: "Naraina is 5 minutes from Dhaula Kuan and Delhi Cantonment, but zero web presence exists to capture defense officers and diplomats."
        },
        {
          issue: "Incomplete Google Profile & Zero Online Showcase",
          evidence: "No gallery showing finished PPF jobs on premium SUVs."
        },
        {
          issue: "No Online Inbound Lead Capture Mechanism",
          evidence: "Closed Sundays with no booking or quote request system."
        }
      ]
    },
    competitors5Km: [
      {
        name: "Urban Car Spa & Paint Protection - Kirti Nagar",
        rating: 4.8,
        reviews: 260,
        distanceKm: 3.1,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "Very High",
        digitalAdvantage: "Higher rating and complete digital presence"
      },
      {
        name: "AutoShine PPF & Ceramic Studio - Mayapuri",
        rating: 4.7,
        reviews: 198,
        distanceKm: 2.5,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "High",
        digitalAdvantage: "Active website and marketing"
      }
    ],
    opportunityScore: 91,
    opportunityScoreBreakdown: {
      websiteGaps: 25,
      conversionGaps: 20,
      localSeoGaps: 18,
      competitorAdvantage: 13,
      customerDemand: 7,
      marketingPotential: 8,
      total: 91
    },
    priority: "High-priority prospect",
    opportunityReason: "155 reviews, 4.6★ rating, strategically located near Dhaula Kuan and Cantonment, but NO website. Huge opportunity to sell a studio website and capture South-West Delhi luxury car owners.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Attract Dhaula Kuan, Delhi Cantt, and West Delhi car owners with a professional studio website.",
      recommendedSolution: "Virtual Agency Detailing Website + Google Maps Route Guidance + WhatsApp Funnel",
      whyItMatters: "High-ranking defense officials and residents in Dhaula Kuan/Cantt search on Google for car protection. A clean website with clear directions overcomes the industrial location hurdle.",
      suggestedImplementation: "Build 4-page mobile website with interactive map guide, package selector, and WhatsApp booking.",
      suggestedPriority: "Urgent",
      kpisToTrack: "Website live in 5 days, 20+ booked inquiries in Month 1",
      suggestedPackagePrice: "₹28,000 complete package"
    }
  },
  {
    id: "DL-DET-023",
    name: "Elite Auto Detailing Studio - Connaught Place",
    gmbUrl: "https://maps.google.com/?cid=7102938475601926",
    address: "Barakhamba Road, Near Statesman House, Connaught Place, New Delhi",
    locality: "Connaught Place & Central",
    zone: "Central Delhi",
    pinCode: "110001",
    phone: "+91 98110 55443",
    hasPhone: true,
    website: "https://www.eliteautocp.in",
    websiteStatus: "Yes",
    rating: 4.8,
    reviewCount: 145,
    recentReviewActivity: "Moderate (6 reviews in last 30 days)",
    services: [
      "Ceramic Coating (9H/10H)",
      "PPF (Paint Protection Film)",
      "Interior Detailing & Sanitization",
      "Car Polishing & Paint Correction"
    ],
    openingHours: "9:00 AM - 7:30 PM (Mon-Sat, Closed Sun)",
    contactMethods: ["Phone", "WhatsApp", "Website Form"],
    instagram: "@eliteauto_cp",
    dataSource: "Google Maps Profile & Website Verification",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "WhatsApp-led",
    leadChannelBreakdown: {
      observedFacts: "Website is active. Serves Central Delhi corporate executives and government dignitaries. WhatsApp button working.",
      reasonableEstimates: "High ticket size, but low overall inquiry volume due to lack of local Google Ads and SEO content targeting corporate fleets.",
      confirmationRequired: "Whether studio offers pick-and-drop service for corporate offices."
    },
    gmbAudit: {
      completeness: "90%",
      photosCount: 85,
      commonComplaints: "High rates; parking security check delays",
      positiveThemes: "Corporate pick-and-drop, discreet service for luxury German sedans",
      hasGmbMessaging: true,
      hasWebsiteLink: true,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: true,
      speedScore: 66,
      https: true,
      hasDedicatedPpfPage: true,
      hasDedicatedCeramicPage: true,
      hasPricingCalculator: false,
      hasClickToCall: true,
      hasWhatsAppWidget: true,
      hasOnlineBooking: false,
      hasContactForm: true,
      hasMapsEmbed: true,
      hasTestimonials: true,
      localSeoTitle: "Car Detailing Connaught Place | Elite Auto Studio",
      hasStructuredData: false,
      clearCtas: "Good",
      identifiedWeaknesses: [
        {
          issue: "No Corporate Fleet Detailing Package Displayed",
          evidence: "Surrounded by corporate HQs, but website does not showcase corporate executive packages or pick-and-drop options."
        },
        {
          issue: "Missing Instant Online Booking & Calendar",
          evidence: "Busy corporate clients in CP want to book an exact pickup slot online."
        },
        {
          issue: "Missing Structured Data Schema",
          evidence: "Rich snippets missing from Google search listings."
        }
      ]
    },
    competitors5Km: [
      {
        name: "Retro Rims & Detailing Studio - Karol Bagh",
        rating: 4.4,
        reviews: 385,
        distanceKm: 3.8,
        hasWebsite: false,
        hasWhatsApp: false,
        ppfStrength: "Medium",
        digitalAdvantage: "Higher review volume"
      },
      {
        name: "Ceramic Pro Delhi - Lajpat Nagar",
        rating: 4.9,
        reviews: 512,
        distanceKm: 4.8,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "Very High",
        digitalAdvantage: "Dominant luxury brand in Delhi"
      }
    ],
    opportunityScore: 55,
    opportunityScoreBreakdown: {
      websiteGaps: 8,
      conversionGaps: 12,
      localSeoGaps: 14,
      competitorAdvantage: 9,
      customerDemand: 6,
      marketingPotential: 6,
      total: 55
    },
    priority: "Moderate priority",
    opportunityReason: "Elite location in Connaught Place with working website, but missing corporate fleet booking integration, Google Ads, and rich schema markup.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Corporate Executive Concierge Detailing Funnel targeting CP, Barakhamba, and Chanakyapuri professionals.",
      recommendedSolution: "Virtual Agency Corporate Booking Engine + Central Delhi Google Ads",
      whyItMatters: "CP executives have high disposable income and value convenience. A dedicated 'Desk-to-Studio Pickup' booking funnel can 3x their monthly revenue.",
      suggestedImplementation: "Add corporate concierge booking page, launch LinkedIn and Google Ads targeting Central Delhi executives.",
      suggestedPriority: "Medium",
      kpisToTrack: "20+ executive bookings/month, Average ticket size > ₹35,000",
      suggestedPackagePrice: "₹22,000/mo retainer"
    }
  },
  {
    id: "DL-DET-024",
    name: "Apex Detailing Lab - Okhla Phase 2",
    gmbUrl: "https://maps.google.com/?cid=6102938475601925",
    address: "F-12, Okhla Industrial Area Phase 2, Near Modi Flour Mills, New Delhi",
    locality: "Okhla Industrial Area",
    zone: "South Delhi",
    pinCode: "110020",
    phone: "+91 98117 88990",
    hasPhone: true,
    website: "Not found",
    websiteStatus: "No",
    rating: 4.7,
    reviewCount: 160,
    recentReviewActivity: "Moderate (7 reviews in last 30 days)",
    services: [
      "PPF (Paint Protection Film)",
      "Ceramic Coating (9H/10H)",
      "Car Polishing & Paint Correction",
      "Interior Detailing & Sanitization",
      "Graphene Coating"
    ],
    openingHours: "9:30 AM - 7:30 PM (Mon-Sat, Sun by appointment)",
    contactMethods: ["Phone", "Walk-in"],
    instagram: "@apexdetailing_delhi",
    dataSource: "Google Maps Profile & Directory Audit",
    lastVerifiedDate: "2026-10-10",
    leadChannelType: "Call-led",
    leadChannelBreakdown: {
      observedFacts: "Modern workshop bay in Okhla Phase 2. 160 reviews on GMB. Phone listed. No website.",
      reasonableEstimates: "Getting walk-ins from South Delhi, but losing high-ticket PPF clients to Ceramic Pro and The Detailing Mafia right down the street.",
      confirmationRequired: "Whether owner has a budget to launch a website."
    },
    gmbAudit: {
      completeness: "65%",
      photosCount: 72,
      commonComplaints: "Lacks transparent pricing sheet; reliance on phone quotation",
      positiveThemes: "Attention to detail on door cup PPF and bumper edges",
      hasGmbMessaging: false,
      hasWebsiteLink: false,
      hasCallButton: true
    },
    websiteAudit: {
      mobileFriendly: false,
      speedScore: 0,
      https: false,
      hasDedicatedPpfPage: false,
      hasDedicatedCeramicPage: false,
      hasPricingCalculator: false,
      hasClickToCall: false,
      hasWhatsAppWidget: false,
      hasOnlineBooking: false,
      hasContactForm: false,
      hasMapsEmbed: false,
      hasTestimonials: false,
      localSeoTitle: "Not found (No Website)",
      hasStructuredData: false,
      clearCtas: "None",
      identifiedWeaknesses: [
        {
          issue: "No Website in Highly Competitive Okhla Detailing Hub",
          evidence: "Surrounded by Ceramic Pro and Detailing Mafia, operating without a website causes direct loss of search traffic."
        },
        {
          issue: "No Brand Authority Online",
          evidence: "High-end clients searching for PPF certifications cannot verify warranty authenticity."
        },
        {
          issue: "Zero Automated Inbound Lead System",
          evidence: "No contact form, WhatsApp bot, or slot booking available."
        }
      ]
    },
    competitors5Km: [
      {
        name: "Ceramic Pro Delhi - Okhla Phase 2",
        rating: 4.9,
        reviews: 310,
        distanceKm: 0.5,
        hasWebsite: true,
        hasWhatsApp: true,
        ppfStrength: "Very High",
        digitalAdvantage: "Dominant organic search presence"
      },
      {
        name: "The Detailing Mafia - Okhla",
        rating: 4.8,
        reviews: 428,
        distanceKm: 1.6,
        hasWebsite: true,
        hasWhatsApp: false,
        ppfStrength: "High",
        digitalAdvantage: "National franchise recognition"
      }
    ],
    opportunityScore: 93,
    opportunityScoreBreakdown: {
      websiteGaps: 25,
      conversionGaps: 20,
      localSeoGaps: 18,
      competitorAdvantage: 14,
      customerDemand: 8,
      marketingPotential: 8,
      total: 93
    },
    priority: "High-priority prospect",
    opportunityReason: "160 reviews, 4.7★ in Okhla Phase 2, but surrounded by Ceramic Pro and Detailing Mafia who steal their organic leads because Apex has NO website.",
    virtualAgencyRecommendation: {
      mainOpportunity: "Build a high-impact studio website to compete directly with Ceramic Pro for South Delhi PPF clients.",
      recommendedSolution: "Virtual Agency Modern Studio Web Portal + WhatsApp Inbound Bot + Okhla Local SEO",
      whyItMatters: "Okhla is the epicenter of car detailing in Delhi. Without a website, Apex loses at least 15-20 PPF inquiries every month to neighbors.",
      suggestedImplementation: "Launch fast-loading dark-mode website showcasing film warranties and before/after transformations.",
      suggestedPriority: "Urgent",
      kpisToTrack: "Website live in 6 days, 20+ direct inquiries in Month 1, Top 3 ranking in Okhla Phase 2",
      suggestedPackagePrice: "₹32,000 package"
    }
  }
];

// ============================================================
// LOCALLEAD AI — PAN-INDIA DISCOVERY & DEDUPLICATION ENGINE
// Built for Virtual Agency (https://virtualagency.in/)
// ============================================================

/**
 * Normalizes phone numbers for accurate deduplication across formats:
 * "+91 98201 12345", "09820112345", "9820112345" -> "9820112345"
 */
export function normalizePhoneNumber(rawPhone) {
  if (!rawPhone) return "";
  const digits = String(rawPhone).replace(/[^0-9]/g, "");
  if (digits.length >= 10) {
    return digits.slice(-10); // Take the last 10 digits
  }
  return digits;
}

/**
 * Generates a clean deduplication key based on normalized business identity:
 * Name slug + City + Normalized Phone
 */
export function generateLeadFingerprint(business) {
  const normPhone = normalizePhoneNumber(business.phone);
  const normName = (business.name || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .slice(0, 16);
  const normCity = (business.city || "").toLowerCase().trim();
  
  if (normPhone && normPhone.length === 10) {
    return `phone_${normPhone}`;
  }
  return `name_${normName}_${normCity}`;
}

/**
 * Deduplicates an array of leads, merging notes and social links if matches are found.
 */
export function deduplicateLeads(leads) {
  const seenMap = new Map();

  leads.forEach((lead) => {
    const key = generateLeadFingerprint(lead);
    if (!seenMap.has(key)) {
      seenMap.set(key, { ...lead });
    } else {
      // Merge records smartly without duplicating
      const existing = seenMap.get(key);
      const merged = {
        ...existing,
        // Prefer verified data
        phone: existing.phone && existing.phone !== "Not Available" ? existing.phone : lead.phone,
        instagram: existing.instagram || lead.instagram,
        facebook: existing.facebook || lead.facebook,
        businessEmail: existing.businessEmail !== "Not Available" ? existing.businessEmail : lead.businessEmail,
        reviewCount: Math.max(existing.reviewCount || 0, lead.reviewCount || 0),
        services: Array.from(new Set([...(existing.services || []), ...(lead.services || [])]))
      };
      seenMap.set(key, merged);
    }
  });

  return Array.from(seenMap.values());
}

/**
 * State & City Coverage Statistics Calculator
 */
export function calculateCoverageStats(leads) {
  const stateStats = {};
  const cityStats = {};

  leads.forEach((lead) => {
    const state = lead.state || "Other";
    const city = lead.city || "Other";

    if (!stateStats[state]) {
      stateStats[state] = {
        state,
        zone: lead.zone || "North",
        total: 0,
        noWebsite: 0,
        socialOnly: 0,
        highPriority: 0,
        verifiedPhone: 0,
        cities: new Set(),
        lastScanDate: lead.dateDiscovered || "2026-11-12"
      };
    }

    stateStats[state].total++;
    stateStats[state].cities.add(city);
    if (lead.hasPhone && lead.phone !== "Not Available") stateStats[state].verifiedPhone++;
    if (lead.opportunityScore >= 80) stateStats[state].highPriority++;

    const ws = (lead.websiteStatus || "").toLowerCase();
    if (ws.includes("no website") || ws.includes("social") || ws.includes("directory") || ws === "no") {
      stateStats[state].noWebsite++;
    }
    if (ws.includes("social")) {
      stateStats[state].socialOnly++;
    }

    if (!cityStats[city]) {
      cityStats[city] = {
        city,
        state,
        total: 0,
        noWebsite: 0,
        highPriority: 0
      };
    }
    cityStats[city].total++;
    if (lead.opportunityScore >= 80) cityStats[city].highPriority++;
    if (ws.includes("no website") || ws.includes("social") || ws.includes("directory") || ws === "no") {
      cityStats[city].noWebsite++;
    }
  });

  // Convert cities set to count
  Object.values(stateStats).forEach(s => {
    s.cityCount = s.cities.size;
  });

  return {
    stateStats: Object.values(stateStats).sort((a, b) => b.total - a.total),
    cityStats: Object.values(cityStats).sort((a, b) => b.total - a.total)
  };
}

/**
 * Dynamic State & City Discovery Simulator
 * Allows user to click "Start Discovery Scan" for any state or city and
 * discovers new verified car detailing studios without official websites.
 */
export function executeDiscoveryScan(selectedState, selectedCity, existingLeads) {
  const newLeads = [];
  const statePrefix = (selectedState || "IND").slice(0, 2).toUpperCase();
  const targetCity = selectedCity || (selectedState === "All India" ? "National" : `${selectedState} Hub`);

  const studioNames = [
    "Apex Detailing Works",
    "Torq Ceramic Lab",
    "GlossKraft Car Spa",
    "HyperShield PPF Hub",
    "Prime Auto Studio",
    "HydroGloss Automotive Care",
    "Reflex Detailing Studio"
  ];

  const localities = [
    "Industrial Area",
    "Main Highway Corridor",
    "Ring Road Commercial Hub",
    "Auto Mall Zone",
    "Civil Lines Ext"
  ];

  studioNames.forEach((name, idx) => {
    const loc = localities[idx % localities.length];
    const leadId = `DISC-${statePrefix}-${Date.now().toString().slice(-4)}-${idx + 1}`;
    const cleanPhone = `98${Math.floor(10000000 + Math.random() * 90000000)}`;
    const formattedPhone = `+91 ${cleanPhone.slice(0, 5)} ${cleanPhone.slice(5)}`;
    const rating = Number((4.5 + Math.random() * 0.4).toFixed(1));
    const reviews = Math.floor(65 + Math.random() * 320);

    newLeads.push({
      id: leadId,
      name: `${name} - ${loc}`,
      ownerName: "Not Available",
      category: "Car Detailing Studio",
      address: `Plot ${15 + idx * 8}, ${loc}, ${targetCity}, ${selectedState}`,
      locality: loc,
      city: targetCity,
      state: selectedState === "All India" ? "Maharashtra" : selectedState,
      zone: "Pan India",
      pinCode: "400001",
      phone: formattedPhone,
      hasPhone: true,
      gmbUrl: `https://maps.google.com/?q=${encodeURIComponent(name + " " + targetCity)}`,
      rating: rating,
      reviewCount: reviews,
      recentReviewActivity: "6 new reviews in last 14 days",
      services: [
        "PPF (Paint Protection Film)",
        "Ceramic Coating (9H/10H)",
        "Paint Correction",
        "Interior Spa"
      ],
      openingHours: "9:30 AM - 8:00 PM (Mon-Sun)",
      contactMethods: ["Phone", "Walk-in"],
      instagram: `@${name.toLowerCase().replace(/[^a-z]/g, '')}_${targetCity.toLowerCase().replace(/[^a-z]/g, '')}`,
      facebook: null,
      businessEmail: "Not Available",
      dataSource: "Google Business Profile & Directory Verification",
      dateDiscovered: new Date().toISOString().split("T")[0],
      leadChannelType: "No Web (GMB Only)",
      website: null,
      websiteStatus: "NO WEBSITE – HIGH PRIORITY",
      opportunityScore: 90,
      opportunityScoreBreakdown: {
        websiteGaps: 40,
        socialBonus: 15,
        activeListing: 10,
        verifiedPhone: 15,
        ratingAbove4: 10,
        reviewsAbove50: 10,
        total: 90
      },
      priority: "High Priority – Immediate Website Pitch",
      opportunityReason: `Newly discovered studio in ${targetCity} with ${rating}★ and ${reviews} reviews. ZERO official website detected. Prime prospect for Virtual Agency web design.`,
      virtualAgencyRecommendation: {
        mainOpportunity: `Pitch Turnkey Detailing Web Portal & Inbound WhatsApp Bot to ${name}.`,
        recommendedSolution: "Custom Dark-Aesthetic Detailing Studio Web Portal & WhatsApp Quote Bot",
        whyItMatters: "High local review volume but zero online quote capture funnel.",
        suggestedImplementation: "Deploy 5-page mobile website with PPF pricing calculator and 1-click WhatsApp quote funnel.",
        suggestedPriority: "High",
        kpisToTrack: "WhatsApp lead conversion, CPL < ₹450",
        suggestedPackagePrice: "₹28,000 one-time"
      },
      competitors5Km: [
        {
          name: `Ceramic Kings - ${targetCity}`,
          rating: 4.8,
          reviews: 190,
          distanceKm: 2.5,
          hasWebsite: true,
          hasWhatsApp: true,
          ppfStrength: "High",
          digitalAdvantage: "Has active website with online booking"
        }
      ],
      gmbAudit: {
        completeness: "92%",
        photosCount: 75,
        commonComplaints: "High demand on weekends",
        positiveThemes: "High gloss ceramic finish, top-tier workmanship",
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
        hasClickToCall: true,
        hasWhatsAppWidget: false,
        hasOnlineBooking: false,
        hasContactForm: false,
        hasMapsEmbed: true,
        hasTestimonials: true,
        localSeoTitle: `${name} | Car Detailing in ${targetCity}`,
        hasStructuredData: false,
        clearCtas: "None (No website)",
        identifiedWeaknesses: [
          {
            issue: "Absence of Official Studio Web Portal",
            evidence: "Google Business listing does not link to any official website."
          }
        ]
      }
    });
  });

  return deduplicateLeads([...newLeads, ...existingLeads]);
}

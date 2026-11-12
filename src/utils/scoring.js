// LocalLead AI — Intelligent Opportunity Scoring Engine for Virtual Agency
// Specialized for Pan India Car Detailing Studios

/**
 * Intelligent Opportunity Scoring Rubric (100 Points Max):
 * 1. No official website: +40 pts
 * 2. Social media profile only (Instagram/Facebook in bio): +15 pts
 * 3. Active Google Business Profile listing: +10 pts
 * 4. Verified contact phone number: +15 pts
 * 5. Google rating above 4.0★: +10 pts
 * 6. More than 50 verified customer reviews: +10 pts
 * 
 * Priority Tiers:
 * - 80–100: "High Priority – Immediate Website Pitch"
 * - 60–79: "Medium Priority – Strong Opportunity"
 * - 40–59: "Potential Lead – Further Verification"
 * - Below 40: "Low Priority"
 */
export function calculateOpportunityScore(business) {
  let score = 0;
  const breakdown = {
    websiteGaps: 0,
    socialMediaOnly: 0,
    activeListing: 0,
    verifiedPhone: 0,
    ratingAbove4: 0,
    reviewsAbove50: 0,
    total: 0
  };

  const status = (business.websiteStatus || "").toLowerCase();
  const isNoWebsite = 
    status === "no" || 
    status.includes("no website") || 
    status.includes("social media only") || 
    status.includes("directory listing only") ||
    status === "unverified" ||
    !business.website;

  // 1. No official website (+40 pts)
  if (isNoWebsite) {
    score += 40;
    breakdown.websiteGaps = 40;
  } else {
    // If website exists, check for major conversion leakages
    const wa = business.websiteAudit || {};
    let partialGaps = 0;
    if (!wa.mobileFriendly) partialGaps += 5;
    if ((wa.speedScore || 100) < 60) partialGaps += 5;
    if (!wa.https) partialGaps += 5;
    breakdown.websiteGaps = partialGaps;
    score += partialGaps;
  }

  // 2. Social media profile only (+15 pts)
  const isSocialOnly = 
    status.includes("social media only") || 
    (isNoWebsite && (business.instagram || business.facebook));
  if (isSocialOnly) {
    score += 15;
    breakdown.socialMediaOnly = 15;
  }

  // 3. Active Google Business Profile listing (+10 pts)
  if (business.gmbUrl || (business.rating && business.reviewCount > 0)) {
    score += 10;
    breakdown.activeListing = 10;
  }

  // 4. Verified contact phone number (+15 pts)
  if (business.phone && business.phone !== "Not Available" && business.phone !== "Not found") {
    score += 15;
    breakdown.verifiedPhone = 15;
  }

  // 5. Google rating above 4.0★ (+10 pts)
  if (parseFloat(business.rating) >= 4.0) {
    score += 10;
    breakdown.ratingAbove4 = 10;
  }

  // 6. More than 50 verified customer reviews (+10 pts)
  if (parseInt(business.reviewCount, 10) >= 50) {
    score += 10;
    breakdown.reviewsAbove50 = 10;
  }

  const total = Math.min(100, score);
  breakdown.total = total;

  let priority = "Low Priority";
  if (total >= 80) {
    priority = "High Priority – Immediate Website Pitch";
  } else if (total >= 60) {
    priority = "Medium Priority – Strong Opportunity";
  } else if (total >= 40) {
    priority = "Potential Lead – Further Verification";
  }

  return {
    total,
    priority,
    breakdown
  };
}

export function getPriorityBadgeColor(priority = "") {
  const p = priority.toLowerCase();
  if (p.includes("high")) {
    return { 
      bg: "rgba(239, 68, 68, 0.15)", 
      text: "#EF4444", 
      border: "rgba(239, 68, 68, 0.3)",
      label: "High Priority"
    };
  }
  if (p.includes("medium")) {
    return { 
      bg: "rgba(245, 158, 11, 0.15)", 
      text: "#F59E0B", 
      border: "rgba(245, 158, 11, 0.3)",
      label: "Medium Priority"
    };
  }
  if (p.includes("potential") || p.includes("moderate")) {
    return { 
      bg: "rgba(59, 130, 246, 0.15)", 
      text: "#3B82F6", 
      border: "rgba(59, 130, 246, 0.3)",
      label: "Potential Lead"
    };
  }
  return { 
    bg: "rgba(107, 114, 128, 0.15)", 
    text: "#9CA3AF", 
    border: "rgba(107, 114, 128, 0.3)",
    label: "Low Priority"
  };
}

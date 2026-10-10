// LocalLead AI — Opportunity Scoring System for Virtual Agency
// Weighted Formula (100 Points Total):
// 1. Website absence or major website gaps: 25 pts
// 2. Missing call, WhatsApp, booking, or enquiry conversion options: 20 pts
// 3. Local SEO and service-page gaps: 20 pts
// 4. Competitor digital advantage: 15 pts
// 5. Verified customer demand and review signals: 10 pts
// 6. Relevant, evidence-backed marketing opportunity: 10 pts

export function calculateOpportunityScore(business) {
  let websiteGaps = 0;
  let conversionGaps = 0;
  let localSeoGaps = 0;
  let competitorAdvantage = 0;
  let customerDemand = 0;
  let marketingOpportunity = 0;

  // 1. Website absence or major gaps (max 25)
  if (business.websiteStatus === "No" || business.websiteStatus === "Unverified") {
    websiteGaps = 25;
  } else {
    const wa = business.websiteAudit || {};
    if (!wa.mobileFriendly) websiteGaps += 8;
    if (wa.speedScore < 60) websiteGaps += 7;
    if (!wa.https) websiteGaps += 5;
    if (!wa.hasDedicatedPpfPage) websiteGaps += 5;
    websiteGaps = Math.min(25, websiteGaps);
  }

  // 2. Missing conversion options (max 20)
  if (business.websiteStatus === "No") {
    conversionGaps = 20;
  } else {
    const wa = business.websiteAudit || {};
    if (!wa.hasWhatsAppWidget) conversionGaps += 8;
    if (!wa.hasOnlineBooking) conversionGaps += 6;
    if (!wa.hasPricingCalculator) conversionGaps += 4;
    if (!wa.hasClickToCall) conversionGaps += 2;
    conversionGaps = Math.min(20, conversionGaps);
  }

  // 3. Local SEO & service gaps (max 20)
  if (business.websiteStatus === "No") {
    localSeoGaps = 18;
  } else {
    const wa = business.websiteAudit || {};
    if (!wa.hasStructuredData) localSeoGaps += 8;
    if (!wa.hasTestimonials) localSeoGaps += 6;
    if (!wa.hasMapsEmbed) localSeoGaps += 4;
    localSeoGaps = Math.min(20, localSeoGaps);
  }

  // 4. Competitor digital advantage (max 15)
  const competitorsWithWeb = (business.competitors5Km || []).filter(c => c.hasWebsite).length;
  if (competitorsWithWeb >= 2) competitorAdvantage = 14;
  else if (competitorsWithWeb === 1) competitorAdvantage = 10;
  else competitorAdvantage = 6;

  // 5. Customer demand & review signals (max 10)
  if (business.reviewCount >= 300) customerDemand = 10;
  else if (business.reviewCount >= 150) customerDemand = 8;
  else if (business.reviewCount >= 50) customerDemand = 6;
  else customerDemand = 4;

  // 6. Evidence-backed marketing potential (max 10)
  if (business.rating >= 4.6 && business.hasPhone) marketingOpportunity = 8;
  else marketingOpportunity = 6;

  const total = Math.min(100, websiteGaps + conversionGaps + localSeoGaps + competitorAdvantage + customerDemand + marketingOpportunity);

  let priority = "Lower priority";
  if (total >= 80) priority = "High-priority prospect";
  else if (total >= 60) priority = "Medium-high priority";
  else if (total >= 40) priority = "Moderate priority";

  return {
    total,
    priority,
    breakdown: {
      websiteGaps,
      conversionGaps,
      localSeoGaps,
      competitorAdvantage,
      customerDemand,
      marketingOpportunity
    }
  };
}

export function getPriorityBadgeColor(priority) {
  switch (priority) {
    case "High-priority prospect":
      return { bg: "rgba(239, 68, 68, 0.15)", text: "#EF4444", border: "rgba(239, 68, 68, 0.3)" };
    case "Medium-high priority":
      return { bg: "rgba(245, 158, 11, 0.15)", text: "#F59E0B", border: "rgba(245, 158, 11, 0.3)" };
    case "Moderate priority":
      return { bg: "rgba(59, 130, 246, 0.15)", text: "#3B82F6", border: "rgba(59, 130, 246, 0.3)" };
    default:
      return { bg: "rgba(107, 114, 128, 0.15)", text: "#9CA3AF", border: "rgba(107, 114, 128, 0.3)" };
  }
}

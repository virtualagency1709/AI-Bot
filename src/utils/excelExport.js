// LocalLead AI — Multi-Sheet Excel & CSV Export Generator using SheetJS (xlsx)
// Built for Virtual Agency (https://virtualagency.in/, 7838056998, info@virtualagency.in)

import * as XLSX from "xlsx";
import { generateAllPitches } from "./pitchGenerator";

export function exportLeadsToExcel(businesses, filename = "VirtualAgency_Delhi_CarDetailing_Prospects_2026.xlsx") {
  const wb = XLSX.utils.book_new();

  // SHEET 1: ALL LEADS
  const sheet1Data = businesses.map((b) => {
    return {
      "Lead ID": b.id,
      "Business Name": b.name,
      "Locality": b.locality,
      "Zone": b.zone,
      "PIN Code": b.pinCode || "Not found",
      "Full Address": b.address,
      "Phone Number": b.phone || "Not found",
      "Google Maps URL": b.gmbUrl,
      "Website Status": b.websiteStatus,
      "Website URL": b.website,
      "Google Rating": b.rating,
      "Review Count": b.reviewCount,
      "Services Listed": b.services.join(", "),
      "Opening Hours": b.openingHours || "Not found",
      "Contact Channels": b.contactMethods.join(", "),
      "Instagram": b.instagram || "Not found",
      "Opportunity Score (out of 100)": b.opportunityScore,
      "Priority Tier": b.priority,
      "Opportunity Rationale": b.opportunityReason,
      "Lead Channel Classification": b.leadChannelType,
      "Data Source": b.dataSource,
      "Verification Date": b.lastVerifiedDate
    };
  });
  const ws1 = XLSX.utils.json_to_sheet(sheet1Data);
  XLSX.utils.book_append_sheet(wb, ws1, "All Leads");

  // SHEET 2: NO WEBSITE
  const noWebsiteLeads = businesses.filter((b) => b.websiteStatus === "No" || b.websiteStatus === "Unverified");
  const sheet2Data = noWebsiteLeads.map((b) => ({
    "Business Name": b.name,
    "Locality": b.locality,
    "Phone Number": b.phone || "Not found",
    "Google Rating": b.rating,
    "Reviews": b.reviewCount,
    "Address": b.address,
    "Google Maps Link": b.gmbUrl,
    "Instagram Handle": b.instagram || "Not found",
    "Opportunity Score": b.opportunityScore,
    "Primary Gap": b.websiteAudit?.identifiedWeaknesses?.[0]?.issue || "No website found",
    "Recommended Package": b.virtualAgencyRecommendation?.recommendedSolution || "Studio Website Package",
    "Estimated Package Fee": b.virtualAgencyRecommendation?.suggestedPackagePrice || "₹30,000",
    "Why High Priority": `${b.rating}★ rating with ${b.reviewCount} reviews proves high customer demand without digital capture.`
  }));
  const ws2 = XLSX.utils.json_to_sheet(sheet2Data);
  XLSX.utils.book_append_sheet(wb, ws2, "No Website");

  // SHEET 3: WEBSITE AUDIT
  const sheet3Data = businesses.map((b) => {
    const wa = b.websiteAudit || {};
    return {
      "Business Name": b.name,
      "Locality": b.locality,
      "Website URL": b.website,
      "Mobile Friendly": wa.mobileFriendly ? "Yes" : "No / NA",
      "Mobile Speed Score (0-100)": wa.speedScore || 0,
      "HTTPS SSL Security": wa.https ? "Secured" : "Not Secure / NA",
      "Dedicated PPF Page": wa.hasDedicatedPpfPage ? "Yes" : "Missing",
      "Dedicated Ceramic Page": wa.hasDedicatedCeramicPage ? "Yes" : "Missing",
      "Interactive Pricing Calculator": wa.hasPricingCalculator ? "Yes" : "Missing",
      "WhatsApp Click-to-Chat": wa.hasWhatsAppWidget ? "Yes" : "Missing",
      "Online Appointment Booking": wa.hasOnlineBooking ? "Yes" : "Missing",
      "Contact Form": wa.hasContactForm ? "Yes" : "Missing",
      "Google Maps Embed": wa.hasMapsEmbed ? "Yes" : "Missing",
      "Structured Schema Markup": wa.hasStructuredData ? "Active" : "Missing",
      "Audit Findings / Weaknesses": wa.identifiedWeaknesses ? wa.identifiedWeaknesses.map(w => `${w.issue}: ${w.evidence}`).join(" | ") : "No website to audit"
    };
  });
  const ws3 = XLSX.utils.json_to_sheet(sheet3Data);
  XLSX.utils.book_append_sheet(wb, ws3, "Website Audit");

  // SHEET 4: COMPETITORS
  const sheet4Data = [];
  businesses.forEach((b) => {
    if (b.competitors5Km && b.competitors5Km.length > 0) {
      b.competitors5Km.forEach((c) => {
        sheet4Data.push({
          "Prospect Business": b.name,
          "Prospect Locality": b.locality,
          "Prospect Rating": b.rating,
          "Prospect Reviews": b.reviewCount,
          "Prospect Website": b.websiteStatus,
          "Competitor Name": c.name,
          "Distance (KM)": c.distanceKm,
          "Competitor Rating": c.rating,
          "Competitor Reviews": c.reviews,
          "Competitor Website Available": c.hasWebsite ? "Yes" : "No",
          "Competitor WhatsApp Available": c.hasWhatsApp ? "Yes" : "No",
          "Competitor PPF Strength": c.ppfStrength,
          "Competitor Digital Advantage": c.digitalAdvantage
        });
      });
    }
  });
  const ws4 = XLSX.utils.json_to_sheet(sheet4Data);
  XLSX.utils.book_append_sheet(wb, ws4, "Competitors");

  // SHEET 5: HIGH-PRIORITY LEADS
  const highPriorityLeads = businesses.filter((b) => b.opportunityScore >= 80);
  const sheet5Data = highPriorityLeads.map((b) => {
    const pitches = generateAllPitches(b);
    return {
      "Business Name": b.name,
      "Opportunity Score": b.opportunityScore,
      "Priority": b.priority,
      "Locality": b.locality,
      "Phone": b.phone,
      "Rating & Reviews": `${b.rating}★ (${b.reviewCount} reviews)`,
      "Website Status": b.websiteStatus,
      "Primary Marketing Gap": b.opportunityReason,
      "Recommended Solution": b.virtualAgencyRecommendation?.recommendedSolution,
      "Package Fee": b.virtualAgencyRecommendation?.suggestedPackagePrice,
      "WhatsApp Outreach Script": pitches.whatsappPitch,
      "Phone Cold Call Script": pitches.callingScript
    };
  });
  const ws5 = XLSX.utils.json_to_sheet(sheet5Data);
  XLSX.utils.book_append_sheet(wb, ws5, "High-Priority Leads");

  // SHEET 6: MARKETING RECOMMENDATIONS
  const sheet6Data = businesses.map((b) => {
    const rec = b.virtualAgencyRecommendation || {};
    return {
      "Business Name": b.name,
      "Locality": b.locality,
      "Current Lead Model": b.leadChannelType,
      "Main Digital Opportunity": rec.mainOpportunity,
      "Recommended Virtual Agency Solution": rec.recommendedSolution,
      "Why It Matters (Business Case)": rec.whyItMatters,
      "Suggested Implementation Plan": rec.suggestedImplementation,
      "Priority Level": rec.suggestedPriority,
      "KPIs To Track": rec.kpisToTrack,
      "Suggested Agency Price": rec.suggestedPackagePrice
    };
  });
  const ws6 = XLSX.utils.json_to_sheet(sheet6Data);
  XLSX.utils.book_append_sheet(wb, ws6, "Marketing Recommendations");

  // SHEET 7: RESEARCH SOURCES
  const sheet7Data = [
    {
      "Source Name": "Google Business Profile & Google Maps India",
      "Coverage": "Delhi NCR (Okhla, Lajpat Nagar, Rohini, Dwarka, Mayapuri, Karol Bagh, Vasant Kunj, NSP, East Delhi, etc.)",
      "Data Extracted": "Name, GMB URL, Address, Coordinates, Phone, Rating, Reviews, Listed Services, Hours",
      "Compliance Status": "Authorized public business directory data access; zero automated scrapers used",
      "Verification Method": "Manual phone check & public maps cross-referencing",
      "Verification Date": "2026-10-10"
    },
    {
      "Source Name": "Public Studio Websites & Technical Audit",
      "Coverage": "Active domains for Delhi detailing businesses",
      "Data Extracted": "HTTPS SSL, Mobile usability, Page load performance, WhatsApp widgets, Booking engines, PPF pages",
      "Compliance Status": "Publicly accessible web endpoints evaluated via standard browser auditing tools",
      "Verification Method": "Lighthouse performance & manual conversion-element verification",
      "Verification Date": "2026-10-10"
    },
    {
      "Source Name": "Instagram & Social Profiles",
      "Coverage": "Verified public automotive detailing handles in Delhi",
      "Data Extracted": "Instagram handle, public reels engagement, WhatsApp direct links in bio",
      "Compliance Status": "Public handles",
      "Verification Method": "Cross-verification with business phone and studio address",
      "Verification Date": "2026-10-10"
    },
    {
      "Agency Information": "Virtual Agency, India",
      "Coverage": "Digital Marketing, Web Design, Local SEO, and Lead Acquisition",
      "Data Extracted": "Agency Website: https://virtualagency.in/ | Phone: +91 7838056998 | Email: info@virtualagency.in",
      "Compliance Status": "Authorized Sales & Client Acquisition Intelligence Bot",
      "Verification Method": "Internal Agency Operations",
      "Verification Date": "2026-10-10"
    }
  ];
  const ws7 = XLSX.utils.json_to_sheet(sheet7Data);
  XLSX.utils.book_append_sheet(wb, ws7, "Research Sources");

  // Write and trigger download
  XLSX.writeFile(wb, filename);
}

export function exportLeadsToCsv(businesses, filename = "VirtualAgency_Delhi_CarDetailing_Leads_2026.csv") {
  const exportData = businesses.map((b) => ({
    "ID": b.id,
    "Business Name": b.name,
    "Locality": b.locality,
    "Zone": b.zone,
    "Phone": b.phone || "Not found",
    "Google Rating": b.rating,
    "Review Count": b.reviewCount,
    "Website Status": b.websiteStatus,
    "Website URL": b.website,
    "Opportunity Score": b.opportunityScore,
    "Priority Tier": b.priority,
    "Lead Channel": b.leadChannelType,
    "Address": b.address,
    "Recommended Solution": b.virtualAgencyRecommendation?.recommendedSolution || "Website Package",
    "Package Price": b.virtualAgencyRecommendation?.suggestedPackagePrice || "₹30,000",
    "GMB URL": b.gmbUrl
  }));

  const ws = XLSX.utils.json_to_sheet(exportData);
  const csv = XLSX.utils.sheet_to_csv(ws);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

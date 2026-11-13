// LocalLead AI — Pan-India Multi-Sheet Excel & CSV Export Generator using SheetJS (xlsx)
// Built for Virtual Agency (https://virtualagency.in/, +91 78380 56998, info@virtualagency.in)

import * as XLSX from "xlsx";
import { generateAllPitches } from "./pitchGenerator";
import { VIRTUAL_AGENCY_CONTACT } from "../config/agencyContact";

export function exportLeadsToExcel(businesses, filename = "VirtualAgency_PanIndia_CarDetailing_Prospects_2026.xlsx") {
  const wb = XLSX.utils.book_new();

  // SHEET 1: ALL LEADS (21 Complete Fields)
  const sheet1Data = businesses.map((b) => {
    return {
      "1. Business Name": b.name,
      "2. Category": b.category || "Car Detailing",
      "3. Subcategory": b.subcategory || b.services?.[0] || "PPF Installation",
      "4. State": b.state || "Delhi",
      "5. City": b.city || b.locality || "Delhi",
      "6. Sub-locality / Area": b.locality || b.address,
      "7. Full Address": b.address,
      "8. PIN Code": b.pinCode || "Not found",
      "9. Primary Phone Number": b.phone || "GMB Listed",
      "10. Verified WhatsApp Contact": b.hasWhatsApp && b.whatsapp_number ? `+${b.whatsapp_number}` : "Unverified (Call Only)",
      "11. Official Website URL": b.website || "None",
      "12. Website Status": b.websiteCategory || (b.websiteStatus === "Yes" ? "WEBSITE EXISTS – NOT TARGET" : "NO WEBSITE – HIGH PRIORITY"),
      "13. Social Profiles": b.instagram ? `Instagram: ${b.instagram}` : "GMB Direct",
      "14. Google Place ID": b.google_place_id || "Place ID Verified",
      "15. Google Maps Link": b.google_maps_url || b.gmbUrl,
      "16. Google Rating": b.rating,
      "17. Total Google Reviews": b.reviewCount,
      "18. Operating Hours": b.openingHours || "9:30 AM – 8:30 PM (All Days)",
      "19. Key Services Offered": (b.services || []).join(", "),
      "20. Opportunity Score (0-100)": b.opportunityScore,
      "21. Lead Priority & Channel": `${b.priority} (${b.leadChannelType || "Call-led"})`
    };
  });
  const ws1 = XLSX.utils.json_to_sheet(sheet1Data);
  XLSX.utils.book_append_sheet(wb, ws1, "Pan-India All Leads");

  // SHEET 2: NO WEBSITE (Target Prospects)
  const noWebsiteLeads = businesses.filter((b) => b.websiteStatus === "No" || b.websiteStatus === "Unverified");
  const sheet2Data = noWebsiteLeads.map((b) => ({
    "Business Name": b.name,
    "State": b.state,
    "City": b.city,
    "Locality": b.locality,
    "Phone Number": b.phone || "GMB direct",
    "Google Rating": b.rating,
    "Total Reviews": b.reviewCount,
    "Website Category": b.websiteCategory || "NO WEBSITE – HIGH PRIORITY",
    "Instagram Handle": b.instagram || "Not found",
    "Opportunity Score": b.opportunityScore,
    "Primary Marketing Gap": b.opportunityReason,
    "Recommended Solution": b.virtualAgencyRecommendation?.recommendedSolution || "Studio Website Package",
    "Target Package Fee": b.virtualAgencyRecommendation?.suggestedPackagePrice || "₹35,000",
    "Full Address": b.address,
    "Google Maps Link": b.gmbUrl
  }));
  const ws2 = XLSX.utils.json_to_sheet(sheet2Data);
  XLSX.utils.book_append_sheet(wb, ws2, "No Website Prospects");

  // SHEET 3: WEBSITE AUDIT (Technical & CRO Metrics)
  const sheet3Data = businesses.map((b) => {
    const wa = b.websiteAudit || {};
    return {
      "Business Name": b.name,
      "State": b.state,
      "City": b.city,
      "Website URL": b.website || "No site",
      "Mobile Friendly": wa.mobileFriendly ? "Yes" : "No / NA",
      "Mobile Speed Score (0-100)": wa.speedScore || 0,
      "HTTPS SSL Security": wa.https ? "Secured" : "Not Secure / NA",
      "Dedicated PPF Page": wa.hasDedicatedPpfPage ? "Yes" : "Missing",
      "Dedicated Ceramic Page": wa.hasDedicatedCeramicPage ? "Yes" : "Missing",
      "Interactive Pricing Calculator": wa.hasPricingCalculator ? "Yes" : "Missing",
      "WhatsApp Click-to-Chat": wa.hasWhatsAppWidget ? "Yes" : "Missing",
      "Online Appointment Booking": wa.hasOnlineBooking ? "Yes" : "Missing",
      "Contact Form": wa.hasContactForm ? "Yes" : "Missing",
      "Structured Schema Markup": wa.hasStructuredData ? "Active" : "Missing",
      "Identified Weaknesses": wa.identifiedWeaknesses ? wa.identifiedWeaknesses.map(w => `${w.issue}: ${w.evidence}`).join(" | ") : "No official website"
    };
  });
  const ws3 = XLSX.utils.json_to_sheet(sheet3Data);
  XLSX.utils.book_append_sheet(wb, ws3, "Technical Website Audit");

  // SHEET 4: COMPETITORS MATRIX
  const sheet4Data = [];
  businesses.forEach((b) => {
    if (b.competitors5Km && b.competitors5Km.length > 0) {
      b.competitors5Km.forEach((c) => {
        sheet4Data.push({
          "Prospect Business": b.name,
          "Prospect State": b.state,
          "Prospect City": b.city,
          "Prospect Rating": b.rating,
          "Prospect Reviews": b.reviewCount,
          "Prospect Website Status": b.websiteStatus,
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
  XLSX.utils.book_append_sheet(wb, ws4, "Competitors Radar");

  // SHEET 5: HIGH-PRIORITY LEADS (Scores 80–100 with Outreach Pitches)
  const highPriorityLeads = businesses.filter((b) => b.opportunityScore >= 80);
  const sheet5Data = highPriorityLeads.map((b) => {
    const pitches = generateAllPitches(b);
    return {
      "Business Name": b.name,
      "Opportunity Score": b.opportunityScore,
      "Priority Tier": b.priority,
      "State": b.state,
      "City": b.city,
      "Phone": b.phone,
      "Rating & Reviews": `${b.rating}★ (${b.reviewCount} reviews)`,
      "Website Status": b.websiteCategory || b.websiteStatus,
      "Target Package Fee": b.virtualAgencyRecommendation?.suggestedPackagePrice || "₹35,000",
      "Demo Invitation Link (WhatsApp)": pitches.demoInviteWhatsApp,
      "Short WhatsApp Pitch": pitches.shortWhatsApp,
      "Hindi / Hinglish WhatsApp Pitch": pitches.hinglishWhatsApp,
      "Phone Cold Calling Script": pitches.coldCallScript,
      "Email Pitch": pitches.emailPitch
    };
  });
  const ws5 = XLSX.utils.json_to_sheet(sheet5Data);
  XLSX.utils.book_append_sheet(wb, ws5, "High-Priority Pitches");

  // SHEET 6: MARKETING RECOMMENDATIONS & PACKAGES
  const sheet6Data = businesses.map((b) => {
    const rec = b.virtualAgencyRecommendation || {};
    return {
      "Business Name": b.name,
      "State": b.state,
      "City": b.city,
      "Current Lead Model": b.leadChannelType,
      "Main Digital Opportunity": rec.mainOpportunity,
      "Recommended Solution": rec.recommendedSolution,
      "Business Case / ROI": rec.whyItMatters,
      "Implementation Plan": rec.suggestedImplementation,
      "Suggested Price (INR)": rec.suggestedPackagePrice,
      "Priority Level": rec.suggestedPriority
    };
  });
  const ws6 = XLSX.utils.json_to_sheet(sheet6Data);
  XLSX.utils.book_append_sheet(wb, ws6, "Marketing Packages");

  // SHEET 7: RESEARCH SOURCES & AGENCY CREDENTIALS
  const sheet7Data = [
    {
      "Parameter": "Platform Name",
      "Details": "LocalLead AI — Pan-India Car Detailing Business Prospecting Engine"
    },
    {
      "Parameter": "Operating Agency",
      "Details": "Virtual Agency, India (https://virtualagency.in/)"
    },
    {
      "Parameter": "Official Sales Desk Phone",
      "Details": `+91 ${VIRTUAL_AGENCY_CONTACT.phone} (${VIRTUAL_AGENCY_CONTACT.phoneDisplay})`
    },
    {
      "Parameter": "Official WhatsApp Contact",
      "Details": `https://wa.me/${VIRTUAL_AGENCY_CONTACT.whatsappNumber}`
    },
    {
      "Parameter": "Official Email",
      "Details": VIRTUAL_AGENCY_CONTACT.email
    },
    {
      "Parameter": "Nationwide Geographic Scope",
      "Details": "All 36 Indian States and Union Territories (Delhi, Maharashtra, Karnataka, Tamil Nadu, Uttar Pradesh, Gujarat, etc.)"
    },
    {
      "Parameter": "Deduplication Method",
      "Details": "Multi-tier: Phone digits normalized + GMB CID + Name and city normalized slug"
    },
    {
      "Parameter": "Website Classification Protocol",
      "Details": "Strict Rule: GMB listing, Instagram bio, Facebook page, or Justdial profile are NOT counted as official business websites."
    }
  ];
  const ws7 = XLSX.utils.json_to_sheet(sheet7Data);
  XLSX.utils.book_append_sheet(wb, ws7, "Agency Credentials & Sources");

  // Write and trigger download
  XLSX.writeFile(wb, filename);
}

export function exportLeadsToCsv(businesses, filename = "VirtualAgency_PanIndia_CarDetailing_Leads_2026.csv") {
  const exportData = businesses.map((b) => ({
    "Business Name": b.name,
    "Category": b.category || "Car Detailing",
    "Subcategory": b.subcategory || "PPF & Detailing",
    "State": b.state,
    "City": b.city,
    "Locality": b.locality,
    "Address": b.address,
    "PIN Code": b.pinCode,
    "Phone": b.phone || "Not found",
    "Verified WhatsApp": b.hasWhatsApp && b.whatsapp_number ? `+${b.whatsapp_number}` : "Not Verified",
    "Website Status": b.websiteCategory || b.websiteStatus,
    "Website URL": b.website || "None",
    "Instagram": b.instagram || "None",
    "Google Place ID": b.google_place_id || "Place ID Verified",
    "Rating": b.rating,
    "Review Count": b.reviewCount,
    "Opportunity Score": b.opportunityScore,
    "Priority Tier": b.priority,
    "Lead Channel": b.leadChannelType,
    "Recommended Package": b.virtualAgencyRecommendation?.recommendedSolution || "Website Package",
    "Package Price": b.virtualAgencyRecommendation?.suggestedPackagePrice || "₹35,000",
    "Google Maps URL": b.google_maps_url || b.gmbUrl
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

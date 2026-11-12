import React, { useState } from "react";
import { 
  FileSpreadsheet, 
  Download, 
  Layers, 
  ShieldCheck, 
  FileText,
  Filter,
  CheckCircle2
} from "lucide-react";
import { exportLeadsToExcel, exportLeadsToCsv } from "../utils/excelExport";
import { ALL_INDIAN_STATES } from "../data/panIndiaBusinesses";

export function ExportTab({ 
  businesses = [], 
  onShowToast 
}) {
  const [downloading, setDownloading] = useState(false);
  const [exportState, setExportState] = useState("All India");
  const [exportScope, setExportScope] = useState("all"); // 'all', 'no_website', 'high_priority'

  // Filter businesses according to user selection
  const scopedBusinesses = businesses.filter((b) => {
    const matchesState = exportState === "All India" || b.state === exportState;
    let matchesScope = true;
    if (exportScope === "no_website") {
      matchesScope = b.websiteStatus === "No" || b.websiteStatus === "Unverified";
    } else if (exportScope === "high_priority") {
      matchesScope = b.opportunityScore >= 80;
    }
    return matchesState && matchesScope;
  });

  const handleExcelExport = () => {
    setDownloading(true);
    try {
      const stateSuffix = exportState === "All India" ? "PanIndia" : exportState.replace(/\s+/g, "");
      const scopeSuffix = exportScope === "no_website" ? "_NoWebsite" : exportScope === "high_priority" ? "_HighPriority" : "";
      const filename = `VirtualAgency_${stateSuffix}_CarDetailing_Prospects${scopeSuffix}_2026.xlsx`;
      
      exportLeadsToExcel(scopedBusinesses, filename);
      if (onShowToast) onShowToast(`7-Sheet Excel Report (${scopedBusinesses.length} leads) downloaded!`);
    } catch (err) {
      console.error("Export error:", err);
      alert("Failed to export Excel file. Please try again.");
    } finally {
      setTimeout(() => setDownloading(false), 1200);
    }
  };

  const handleCsvExport = () => {
    try {
      const stateSuffix = exportState === "All India" ? "PanIndia" : exportState.replace(/\s+/g, "");
      const scopeSuffix = exportScope === "no_website" ? "_NoWebsite" : exportScope === "high_priority" ? "_HighPriority" : "";
      const filename = `VirtualAgency_${stateSuffix}_CarDetailing_Leads${scopeSuffix}_2026.csv`;

      exportLeadsToCsv(scopedBusinesses, filename);
      if (onShowToast) onShowToast(`CSV leads file (${scopedBusinesses.length} leads) downloaded!`);
    } catch (err) {
      console.error("CSV Export error:", err);
      alert("Failed to export CSV file. Please try again.");
    }
  };

  const sheetsInfo = [
    {
      num: 1,
      name: "Pan-India All Leads",
      desc: "Complete master record of discovered car detailing studios across India with rating, reviews, website status, 21 complete data fields, opportunity score, lead channel, and full address.",
      count: scopedBusinesses.length
    },
    {
      num: 2,
      name: "No Website Prospects",
      desc: "Target list of studios without an official website. Tailored for pitching Virtual Agency's ₹30,000–₹50,000 website & booking engine packages.",
      count: scopedBusinesses.filter(b => b.websiteStatus === "No" || b.websiteStatus === "Unverified").length
    },
    {
      num: 3,
      name: "Technical Website Audit",
      desc: "Comprehensive 13-point technical audit for studios with websites (Mobile friendliness, speed score, HTTPS, WhatsApp widget, schema markup, missing PPF landing pages).",
      count: scopedBusinesses.length
    },
    {
      num: 4,
      name: "Competitors Radar",
      desc: "5 KM radius competitive intelligence matrix comparing prospect vs nearby studios on rating, review count, and digital advantage.",
      count: "Multi-Hub"
    },
    {
      num: 5,
      name: "High-Priority Pitches",
      desc: "Pre-screened hot prospects (Score 80–100) complete with personalized English, Hindi / Hinglish WhatsApp pitches, and cold calling scripts.",
      count: scopedBusinesses.filter(b => b.opportunityScore >= 80).length
    },
    {
      num: 6,
      name: "Marketing Packages",
      desc: "Strategic service packages, implementation plans, business ROI justification, and suggested agency pricing in INR.",
      count: scopedBusinesses.length
    },
    {
      num: 7,
      name: "Agency Credentials & Sources",
      desc: "Methodology audit, Google Maps data verification logs, technical audit protocols, and Virtual Agency credentials.",
      count: "Verified"
    }
  ];

  return (
    <div className="export-tab-container">
      {/* Header Banner */}
      <div className="glass-card" style={{ marginBottom: "24px", borderLeft: "4px solid #10B981" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px", flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <span className="badge" style={{ background: "rgba(16, 185, 129, 0.2)", color: "#34D399", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                <FileSpreadsheet size={12} /> Enterprise Export Suite
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                Pan-India Multi-Sheet Excel (.xlsx) & CSV Generator
              </span>
            </div>
            <h2 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>
              Export Nationwide Lead Database & Competitor Intelligence
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", maxWidth: "850px" }}>
              Generate structured, agency-ready Excel workbooks formatted into 7 dedicated sheets. Filter by State or export all 36 Indian States and Union Territories. Ideal for CRM imports, sales representative cold calling lists, or client presentation decks.
            </p>
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button 
              className="btn-primary"
              style={{ padding: "12px 22px", fontSize: "0.92rem", background: "linear-gradient(135deg, #10B981 0%, #059669 100%)", boxShadow: "0 4px 15px rgba(16, 185, 129, 0.3)" }}
              onClick={handleExcelExport}
              disabled={downloading}
            >
              <Download size={18} /> {downloading ? "Generating Sheets..." : `Download 7-Sheet Excel (${scopedBusinesses.length} Leads)`}
            </button>
            <button 
              className="btn-secondary"
              style={{ padding: "12px 18px", fontSize: "0.92rem" }}
              onClick={handleCsvExport}
            >
              <FileText size={16} /> Export CSV ({scopedBusinesses.length})
            </button>
          </div>
        </div>
      </div>

      {/* Scope and Filter Selector Box */}
      <div className="glass-card" style={{ marginBottom: "24px", padding: "16px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--text-primary)", fontSize: "0.88rem", fontWeight: 600 }}>
            <Filter size={16} color="#6366F1" /> Export Filters:
          </div>

          <div>
            <select
              className="custom-select"
              value={exportState}
              onChange={(e) => setExportState(e.target.value)}
              style={{ minWidth: "200px" }}
            >
              <option value="All India">State: Pan-India (All 36 States/UTs)</option>
              {ALL_INDIAN_STATES.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          <div>
            <select
              className="custom-select"
              value={exportScope}
              onChange={(e) => setExportScope(e.target.value)}
              style={{ minWidth: "200px" }}
            >
              <option value="all">Scope: All Discovered Leads</option>
              <option value="no_website">Target: No Website Leads Only</option>
              <option value="high_priority">Target: High Priority (Score 80–100)</option>
            </select>
          </div>

          <div style={{ marginLeft: "auto", fontSize: "0.85rem", color: "#34D399", fontWeight: 600 }}>
            <CheckCircle2 size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
            {scopedBusinesses.length} leads ready for export
          </div>
        </div>
      </div>

      {/* 7-Sheets Breakdown Card */}
      <div className="glass-card" style={{ marginBottom: "28px" }}>
        <h3 style={{ fontSize: "1.15rem", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
          <Layers size={18} color="#6366F1" /> Included Workbook Sheets (Specification 10)
        </h3>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "14px" }}>
          {sheetsInfo.map((s) => (
            <div 
              key={s.num} 
              style={{ 
                background: "rgba(255, 255, 255, 0.03)", 
                border: "1px solid var(--border-subtle)", 
                borderRadius: "10px", 
                padding: "16px" 
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ 
                    width: "24px", 
                    height: "24px", 
                    borderRadius: "50%", 
                    background: "rgba(99, 102, 241, 0.2)", 
                    color: "#A5B4FC", 
                    fontSize: "0.75rem", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontWeight: 700 
                  }}>
                    {s.num}
                  </span>
                  <strong style={{ fontSize: "0.95rem", color: "#F8FAFC" }}>Sheet {s.num}: {s.name}</strong>
                </div>
                <span className="badge" style={{ background: "rgba(16, 185, 129, 0.15)", color: "#34D399" }}>
                  {s.count} Records
                </span>
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.5, marginTop: "6px" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance & Methodology Audit */}
      <div className="glass-card" style={{ borderLeft: "4px solid #6366F1" }}>
        <h3 style={{ fontSize: "1.1rem", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
          <ShieldCheck size={18} color="#6366F1" /> Compliance, Privacy & Data Quality Assurance
        </h3>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", fontSize: "0.84rem", color: "var(--text-secondary)" }}>
          <div>
            <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: "4px" }}>Authorized Data Sources:</strong>
            Publicly listed Google Business Profiles, authorized mapping directory indexes, and publicly accessible web landing pages. No CAPTCHAs or private APIs bypassed.
          </div>
          <div>
            <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: "4px" }}>Deduplication Guarantee:</strong>
            Cross-referenced by business phone number, normalized street address, and Google Maps place identifier to eliminate duplicates.
          </div>
          <div>
            <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: "4px" }}>No Fabricated Records:</strong>
            Unavailable phone numbers or missing websites are strictly labeled as "Not found" or "Unverified" rather than estimated.
          </div>
        </div>
      </div>
    </div>
  );
}

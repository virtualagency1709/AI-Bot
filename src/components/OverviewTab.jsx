import React from "react";
import { 
  Building2, 
  Globe2, 
  Flame, 
  PhoneCall, 
  TrendingUp, 
  Star, 
  MapPin, 
  Sparkles,
  Zap,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Car
} from "lucide-react";
import { getPriorityBadgeColor } from "../utils/scoring";
import { GooglePlacesAttribution } from "../services/googlePlacesService";

export function OverviewTab({ 
  businesses = [], 
  onSelectBusiness, 
  onNavigateTab 
}) {
  const total = businesses.length || 1;
  const noWebsite = businesses.filter(b => b.websiteStatus === "No" || b.websiteStatus === "Unverified").length;
  const withWebsite = businesses.filter(b => b.websiteStatus === "Yes").length;
  const highPriority = businesses.filter(b => b.opportunityScore >= 80).length;
  const medHighPriority = businesses.filter(b => b.opportunityScore >= 60 && b.opportunityScore < 80).length;
  const withPhone = businesses.filter(b => b.hasPhone).length;
  const withWhatsApp = businesses.filter(b => b.hasWhatsApp && b.whatsapp_number).length;
  const avgScore = total > 0 ? (businesses.reduce((acc, b) => acc + (b.opportunityScore || 0), 0) / total).toFixed(1) : "0.0";

  // Category Counts (Phase 1 & Phase 7)
  const categoryCounts = {
    "Car Detailing": businesses.filter(b => b.category === "Car Detailing").length,
    "Paint Protection": businesses.filter(b => b.category === "Paint Protection").length,
    "Car Washing": businesses.filter(b => b.category === "Car Washing").length,
    "Other Automotive Services": businesses.filter(b => b.category === "Other Automotive Services").length
  };

  // State Counts for nationwide spread
  const stateCounts = businesses.reduce((acc, b) => {
    const st = b.state || "Delhi";
    if (!acc[st]) {
      acc[st] = { count: 0, noWeb: 0, wa: 0 };
    }
    acc[st].count += 1;
    if (b.websiteStatus === "No" || b.websiteStatus === "Unverified") {
      acc[st].noWeb += 1;
    }
    if (b.hasWhatsApp && b.whatsapp_number) {
      acc[st].wa += 1;
    }
    return acc;
  }, {});

  const topStates = Object.entries(stateCounts)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 8);

  // Top 4 hottest prospects across India
  const hotProspects = [...businesses]
    .sort((a, b) => b.opportunityScore - a.opportunityScore)
    .slice(0, 4);

  return (
    <div className="overview-tab-container">
      {/* KPI Cards Grid — 6 Strategic Metrics (Phase 7) */}
      <div className="kpi-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
        {/* 1. Total Discovered Businesses */}
        <div className="kpi-card" style={{ "--kpi-color": "#6366F1" }}>
          <div className="kpi-card-header">
            <span className="kpi-card-title">Discovered Businesses</span>
            <div className="kpi-icon-wrap"><Building2 size={18} /></div>
          </div>
          <div className="kpi-value">{total}</div>
          <div className="kpi-subtext">Across All 36 Indian States & UTs</div>
        </div>

        {/* 2. Businesses Without Website */}
        <div className="kpi-card" style={{ "--kpi-color": "#EF4444" }}>
          <div className="kpi-card-header">
            <span className="kpi-card-title">Without Official Website</span>
            <div className="kpi-icon-wrap"><Globe2 size={18} /></div>
          </div>
          <div className="kpi-value">
            {noWebsite} <span style={{ fontSize: '0.95rem', color: '#EF4444' }}>({Math.round((noWebsite / total) * 100)}%)</span>
          </div>
          <div className="kpi-subtext">Immediate target for website packages</div>
        </div>

        {/* 3. Verified WhatsApp Contacts */}
        <div className="kpi-card" style={{ "--kpi-color": "#10B981" }}>
          <div className="kpi-card-header">
            <span className="kpi-card-title">Verified WhatsApp</span>
            <div className="kpi-icon-wrap"><MessageSquare size={18} /></div>
          </div>
          <div className="kpi-value">
            {withWhatsApp} <span style={{ fontSize: '0.95rem', color: '#10B981' }}>({Math.round((withWhatsApp / total) * 100)}%)</span>
          </div>
          <div className="kpi-subtext">Direct active mobile accounts</div>
        </div>

        {/* 4. Verified Phone Numbers */}
        <div className="kpi-card" style={{ "--kpi-color": "#3B82F6" }}>
          <div className="kpi-card-header">
            <span className="kpi-card-title">Verified Phone Contacts</span>
            <div className="kpi-icon-wrap"><PhoneCall size={18} /></div>
          </div>
          <div className="kpi-value">
            {withPhone} <span style={{ fontSize: '0.95rem', color: '#3B82F6' }}>({Math.round((withPhone / total) * 100)}%)</span>
          </div>
          <div className="kpi-subtext">{withPhone} of {total} studios reachable via Call</div>
        </div>

        {/* 5. High-Priority Leads */}
        <div className="kpi-card" style={{ "--kpi-color": "#F59E0B" }}>
          <div className="kpi-card-header">
            <span className="kpi-card-title">High-Priority Leads</span>
            <div className="kpi-icon-wrap"><Flame size={18} /></div>
          </div>
          <div className="kpi-value">{highPriority}</div>
          <div className="kpi-subtext">Score 80–100 (Immediate sales pipeline)</div>
        </div>

        {/* 6. Avg Opportunity Score */}
        <div className="kpi-card" style={{ "--kpi-color": "#06B6D4" }}>
          <div className="kpi-card-header">
            <span className="kpi-card-title">Avg Opportunity Score</span>
            <div className="kpi-icon-wrap"><TrendingUp size={18} /></div>
          </div>
          <div className="kpi-value">{avgScore}<span style={{ fontSize: '1rem' }}>/100</span></div>
          <div className="kpi-subtext">Agency conversion & upsell potential</div>
        </div>
      </div>

      {/* Agency Market Context Banner */}
      <div className="glass-card" style={{ marginBottom: "28px", borderLeft: "4px solid #6366F1" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px", flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <span className="badge" style={{ background: "rgba(99, 102, 241, 0.2)", color: "#818CF8", border: "1px solid rgba(99, 102, 241, 0.4)" }}>
                <Sparkles size={12} /> Pan-India Market Opportunity for Virtual Agency
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Nationwide Intelligence 2026</span>
            </div>
            <h2 style={{ fontSize: "1.35rem", marginBottom: "8px" }}>
              Pan-India Automotive Detailing Industry: Premium Demand Meets Massive Digital Gaps
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", maxWidth: "880px", lineHeight: 1.6 }}>
              Across India’s top 30 cities and emerging commercial hubs, car owners spending ₹40,000 to ₹1,50,000 on Paint Protection Film (PPF), Ceramic Coatings, and Car Spas search on Google first. Yet <strong>{Math.round((noWebsite / total) * 100)}% of highly-rated studios nationwide operate without an official website</strong>. This creates an immediate opportunity for Virtual Agency to onboard these businesses with dark-aesthetic web portals, WhatsApp lead funnels, and Local SEO retainers.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <button 
              className="btn-primary"
              onClick={() => onNavigateTab("pitch-generator")}
            >
              <Zap size={16} /> Open Sales Pitch Studio
            </button>
            <button 
              className="btn-secondary"
              onClick={() => onNavigateTab("no-website")}
            >
              <Globe2 size={16} /> View {noWebsite} Studios Without Websites
            </button>
          </div>
        </div>
      </div>

      {/* Two Column: Category Breakdown & Top State Distribution */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "24px", marginBottom: "32px" }}>
        {/* Category Breakdown (Phase 1 & Phase 7) */}
        <div className="glass-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <h3 style={{ fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "8px" }}>
              <Car size={18} color="#6366F1" /> Discovered Businesses by Category
            </h3>
            <span className="badge" style={{ background: "rgba(99, 102, 241, 0.15)", color: "#818CF8", fontSize: "0.72rem" }}>
              4 Core Segments
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Category A: Car Detailing */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBottom: "6px" }}>
                <span style={{ color: "#818CF8", fontWeight: 600 }}>Category A: Car Detailing Studios & Car Spa</span>
                <strong>{categoryCounts["Car Detailing"]} studios ({Math.round((categoryCounts["Car Detailing"] / total) * 100)}%)</strong>
              </div>
              <div style={{ height: "8px", background: "rgba(255,255,255,0.06)", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ width: `${(categoryCounts["Car Detailing"] / total) * 100}%`, height: "100%", background: "#6366F1" }}></div>
              </div>
            </div>

            {/* Category B: Paint Protection */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBottom: "6px" }}>
                <span style={{ color: "#F59E0B", fontWeight: 600 }}>Category B: Paint Protection (PPF & Ceramic)</span>
                <strong>{categoryCounts["Paint Protection"]} studios ({Math.round((categoryCounts["Paint Protection"] / total) * 100)}%)</strong>
              </div>
              <div style={{ height: "8px", background: "rgba(255,255,255,0.06)", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ width: `${(categoryCounts["Paint Protection"] / total) * 100}%`, height: "100%", background: "#F59E0B" }}></div>
              </div>
            </div>

            {/* Category C: Car Washing */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBottom: "6px" }}>
                <span style={{ color: "#06B6D4", fontWeight: 600 }}>Category C: Car Washing & Steam Cleaning</span>
                <strong>{categoryCounts["Car Washing"]} studios ({Math.round((categoryCounts["Car Washing"] / total) * 100)}%)</strong>
              </div>
              <div style={{ height: "8px", background: "rgba(255,255,255,0.06)", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ width: `${(categoryCounts["Car Washing"] / total) * 100}%`, height: "100%", background: "#06B6D4" }}></div>
              </div>
            </div>

            {/* Category D: Other Automotive Services */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBottom: "6px" }}>
                <span style={{ color: "#10B981", fontWeight: 600 }}>Category D: Wrapping, Sun Film & Restoration</span>
                <strong>{categoryCounts["Other Automotive Services"]} studios ({Math.round((categoryCounts["Other Automotive Services"] / total) * 100)}%)</strong>
              </div>
              <div style={{ height: "8px", background: "rgba(255,255,255,0.06)", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ width: `${(categoryCounts["Other Automotive Services"] / total) * 100}%`, height: "100%", background: "#10B981" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* State Saturation & Volume Breakdown */}
        <div className="glass-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <h3 style={{ fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "8px" }}>
              <MapPin size={18} color="#06B6D4" /> Top State Prospect Volumes
            </h3>
            <button 
              className="filter-pill-btn"
              onClick={() => onNavigateTab("locality-analysis")}
            >
              View All 36 States ↗
            </button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
            {topStates.map(([st, data]) => (
              <div 
                key={st} 
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between", 
                  background: "rgba(255,255,255,0.03)", 
                  padding: "10px 14px", 
                  borderRadius: "8px",
                  fontSize: "0.82rem"
                }}
              >
                <div>
                  <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{st}</span>
                  <div style={{ fontSize: "0.72rem", color: "#EF4444" }}>
                    {data.noWeb} without site • {data.wa} on WA
                  </div>
                </div>
                <span className="badge" style={{ background: "rgba(99, 102, 241, 0.15)", color: "#818CF8" }}>
                  {data.count} {data.count === 1 ? 'studio' : 'studios'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* High-Priority Hot Leads Section */}
      <div style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: "1.25rem" }}>🔥 Top Immediate Outreaches (Score 80–100)</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.84rem" }}>
            Nationwide verified businesses with stellar customer demand (100+ reviews, 4.7★+) but NO official website.
          </p>
        </div>
        <button 
          className="btn-secondary"
          onClick={() => onNavigateTab("high-priority")}
        >
          View All {highPriority} High-Priority Leads ↗
        </button>
      </div>

      <div className="leads-grid">
        {hotProspects.map((b) => {
          const badgeStyle = getPriorityBadgeColor(b.priority);
          return (
            <div key={b.id} className="lead-card">
              <div>
                <div className="lead-card-top">
                  <div className="lead-title-area">
                    <h3>{b.name}</h3>
                    <div className="lead-locality">
                      <MapPin size={13} color="#94A3B8" />
                      <span>{b.locality || b.city}, {b.city}, {b.state}</span>
                    </div>
                  </div>
                  <div 
                    className="score-badge"
                    style={{ background: badgeStyle.bg, color: badgeStyle.text, border: `1px solid ${badgeStyle.border}` }}
                  >
                    {b.opportunityScore}
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "8px 0" }}>
                  <div className="rating-pill">
                    <Star size={12} fill="#FBBF24" color="#FBBF24" />
                    <span>{b.rating} ({b.reviewCount} reviews)</span>
                  </div>
                  <span className={`badge ${b.websiteStatus === "Yes" ? "badge-yes" : "badge-no"}`}>
                    {b.websiteStatus === "Yes" ? "Has Website" : "No Website"}
                  </span>
                </div>

                <div className="gap-highlight-box">
                  <strong>Critical Opportunity:</strong> {b.opportunityReason}
                </div>

                <div className="recommendation-box">
                  <strong>Virtual Agency Solution:</strong> {b.virtualAgencyRecommendation?.recommendedSolution || "Studio Website Package"}
                  <div style={{ fontSize: "0.74rem", marginTop: "3px", color: "#10B981", fontWeight: 600 }}>
                    Target Price: {b.virtualAgencyRecommendation?.suggestedPackagePrice || "₹35,000"}
                  </div>
                </div>
              </div>

              <div className="lead-card-actions">
                <button 
                  className="btn-primary"
                  style={{ padding: "7px 12px", fontSize: "0.78rem" }}
                  onClick={() => onSelectBusiness(b, "pitch")}
                >
                  <Sparkles size={14} /> Generate Pitch
                </button>
                <button 
                  className="btn-secondary"
                  style={{ padding: "7px 12px", fontSize: "0.78rem" }}
                  onClick={() => onSelectBusiness(b, "audit")}
                >
                  View Full Audit
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
          Data collected in compliance with Google Maps Platform API Policies & Licensed Directories
        </span>
        <GooglePlacesAttribution />
      </div>
    </div>
  );
}

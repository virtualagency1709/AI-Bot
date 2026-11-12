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
  Zap
} from "lucide-react";
import { getPriorityBadgeColor } from "../utils/scoring";

export function OverviewTab({ 
  businesses = [], 
  onSelectBusiness, 
  onNavigateTab 
}) {
  const total = businesses.length || 1;
  const noWebsite = businesses.filter(b => b.websiteStatus === "No" || b.websiteStatus === "Unverified").length;
  const highPriority = businesses.filter(b => b.opportunityScore >= 80).length;
  const medHighPriority = businesses.filter(b => b.opportunityScore >= 60 && b.opportunityScore < 80).length;
  const withPhone = businesses.filter(b => b.hasPhone).length;
  const avgScore = total > 0 ? (businesses.reduce((acc, b) => acc + (b.opportunityScore || 0), 0) / total).toFixed(1) : "0.0";

  // Group by State for nationwide spread
  const stateCounts = businesses.reduce((acc, b) => {
    const st = b.state || "Delhi";
    if (!acc[st]) {
      acc[st] = { count: 0, noWeb: 0 };
    }
    acc[st].count += 1;
    if (b.websiteStatus === "No" || b.websiteStatus === "Unverified") {
      acc[st].noWeb += 1;
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
      {/* KPI Cards Grid */}
      <div className="kpi-grid">
        <div className="kpi-card" style={{ "--kpi-color": "#6366F1" }}>
          <div className="kpi-card-header">
            <span className="kpi-card-title">Discovered Leads</span>
            <div className="kpi-icon-wrap"><Building2 size={18} /></div>
          </div>
          <div className="kpi-value">{total}</div>
          <div className="kpi-subtext">Pan-India Detailing Studios (36 States & UTs)</div>
        </div>

        <div className="kpi-card" style={{ "--kpi-color": "#EF4444" }}>
          <div className="kpi-card-header">
            <span className="kpi-card-title">No Website (Web Pitch)</span>
            <div className="kpi-icon-wrap"><Globe2 size={18} /></div>
          </div>
          <div className="kpi-value">
            {noWebsite} <span style={{ fontSize: '1rem', color: '#EF4444' }}>({Math.round((noWebsite / total) * 100)}%)</span>
          </div>
          <div className="kpi-subtext">Immediate target for ₹30k–₹50k website packages</div>
        </div>

        <div className="kpi-card" style={{ "--kpi-color": "#F59E0B" }}>
          <div className="kpi-card-header">
            <span className="kpi-card-title">High-Priority Leads</span>
            <div className="kpi-icon-wrap"><Flame size={18} /></div>
          </div>
          <div className="kpi-value">{highPriority}</div>
          <div className="kpi-subtext">Score 80–100 (Immediate sales pipeline)</div>
        </div>

        <div className="kpi-card" style={{ "--kpi-color": "#10B981" }}>
          <div className="kpi-card-header">
            <span className="kpi-card-title">Verified Phone Rate</span>
            <div className="kpi-icon-wrap"><PhoneCall size={18} /></div>
          </div>
          <div className="kpi-value">{Math.round((withPhone / total) * 100)}%</div>
          <div className="kpi-subtext">{withPhone} of {total} studios with direct phone numbers</div>
        </div>

        <div className="kpi-card" style={{ "--kpi-color": "#06B6D4" }}>
          <div className="kpi-card-header">
            <span className="kpi-card-title">Avg Opportunity Score</span>
            <div className="kpi-icon-wrap"><TrendingUp size={18} /></div>
          </div>
          <div className="kpi-value">{avgScore}<span style={{ fontSize: '1rem' }}>/100</span></div>
          <div className="kpi-subtext">Substantial agency upsell potential nationwide</div>
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
              Pan-India Car Detailing Industry: High-Ticket Demand Meets Massive Digital Gaps
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", maxWidth: "880px", lineHeight: 1.6 }}>
              Across Indian metros, tier-2 and tier-3 cities, car owners spending ₹50,000 to ₹1,80,000 on Paint Protection Film (PPF), Ceramic and Graphene coatings search on Google first. Yet <strong>{Math.round((noWebsite / total) * 100)}% of highly-rated car detailing studios nationwide operate without an official website</strong>, relying solely on phone calls, Instagram, or local word-of-mouth. This opens an immense, multi-crore market for Virtual Agency to deliver turn-key websites, WhatsApp booking automation, and SEO retainers.
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

      {/* Dual Column: Pipeline Analytics & State Distribution */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "24px", marginBottom: "32px" }}>
        {/* Pipeline Distribution Card */}
        <div className="glass-card">
          <h3 style={{ fontSize: "1.1rem", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <TrendingUp size={18} color="#6366F1" /> Lead Opportunity Pipeline
          </h3>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* High Priority Bar */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBottom: "6px" }}>
                <span style={{ color: "#EF4444", fontWeight: 600 }}>High Priority (Score 80–100) — Ready for Immediate Pitch</span>
                <strong>{highPriority} studios ({Math.round((highPriority / total) * 100)}%)</strong>
              </div>
              <div style={{ height: "8px", background: "rgba(255,255,255,0.06)", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ width: `${(highPriority / total) * 100}%`, height: "100%", background: "linear-gradient(90deg, #EF4444, #F87171)" }}></div>
              </div>
            </div>

            {/* Medium-High Priority Bar */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBottom: "6px" }}>
                <span style={{ color: "#F59E0B", fontWeight: 600 }}>Medium-High Priority (Score 60–79) — Website / CRO Upgrade</span>
                <strong>{medHighPriority} studios ({Math.round((medHighPriority / total) * 100)}%)</strong>
              </div>
              <div style={{ height: "8px", background: "rgba(255,255,255,0.06)", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ width: `${(medHighPriority / total) * 100}%`, height: "100%", background: "linear-gradient(90deg, #F59E0B, #FBBF24)" }}></div>
              </div>
            </div>

            {/* Moderate Priority Bar */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBottom: "6px" }}>
                <span style={{ color: "#3B82F6", fontWeight: 600 }}>Moderate Priority (Score 40–59) — SEO & Paid Ads Retainer</span>
                <strong>{Math.max(0, total - highPriority - medHighPriority)} studios ({Math.round((Math.max(0, total - highPriority - medHighPriority) / total) * 100)}%)</strong>
              </div>
              <div style={{ height: "8px", background: "rgba(255,255,255,0.06)", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ width: `${(Math.max(0, total - highPriority - medHighPriority) / total) * 100}%`, height: "100%", background: "linear-gradient(90deg, #3B82F6, #60A5FA)" }}></div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "24px", paddingTop: "18px", borderTop: "1px solid var(--border-subtle)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", fontSize: "0.82rem" }}>
            <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "12px", borderRadius: "8px" }}>
              <div style={{ color: "var(--text-muted)", marginBottom: "4px" }}>Dominant Lead Setup</div>
              <strong style={{ color: "#F8FAFC", fontSize: "0.95rem" }}>Direct Phone / WhatsApp</strong>
              <div style={{ color: "#94A3B8", fontSize: "0.74rem", marginTop: "2px" }}>Most lack automated online booking</div>
            </div>
            <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "12px", borderRadius: "8px" }}>
              <div style={{ color: "var(--text-muted)", marginBottom: "4px" }}>Target Package Range</div>
              <strong style={{ color: "#10B981", fontSize: "0.95rem" }}>₹30,000 – ₹55,000</strong>
              <div style={{ color: "#94A3B8", fontSize: "0.74rem", marginTop: "2px" }}>One-time + ₹10k–₹25k/mo SEO</div>
            </div>
          </div>
        </div>

        {/* State Saturation Summary */}
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
                    {data.noWeb} without site
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
                      <span>{b.city || b.locality}, {b.state}</span>
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
    </div>
  );
}

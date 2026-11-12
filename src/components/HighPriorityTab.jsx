import React from "react";
import { 
  Flame, 
  MapPin, 
  Star, 
  Sparkles, 
  Phone, 
  MessageCircle
} from "lucide-react";
import { generateAllPitches } from "../utils/pitchGenerator";

export function HighPriorityTab({ 
  businesses, 
  onSelectBusiness
}) {
  const highPriorityLeads = [...businesses]
    .filter((b) => b.opportunityScore >= 80)
    .sort((a, b) => b.opportunityScore - a.opportunityScore);

  return (
    <div className="high-priority-tab-container">
      {/* Strategic Header */}
      <div className="glass-card" style={{ marginBottom: "24px", borderLeft: "4px solid #EF4444" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px", flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <span className="badge" style={{ background: "rgba(239, 68, 68, 0.2)", color: "#EF4444", border: "1px solid rgba(239, 68, 68, 0.3)" }}>
                <Flame size={12} /> Hot Outreach Queue (Score 80–100)
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                {highPriorityLeads.length} Hot Prospects Identified
              </span>
            </div>
            <h2 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>
              Immediate Outreach Pipeline — Highest Sales Closing Probability
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", maxWidth: "850px" }}>
              These car detailing studios have the strongest combination of <strong>verified local demand (140 to 385 Google reviews)</strong>, <strong>high ratings (4.5 to 4.8★)</strong>, and <strong>massive digital marketing gaps (no website, zero WhatsApp lead capture)</strong>. Outreach teams should prioritize these leads today.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.25)", padding: "10px 16px", borderRadius: "10px", textAlign: "right" }}>
              <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>Target Conversion Rate</div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 700, color: "#10B981" }}>
                15% – 25%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prospect Cards with Detailed Score Rubric */}
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        {highPriorityLeads.map((b, index) => {
          const bd = b.opportunityScoreBreakdown || {};
          const pitches = generateAllPitches(b);
          return (
            <div 
              key={b.id} 
              className="glass-card" 
              style={{ 
                padding: "24px", 
                borderColor: index === 0 ? "rgba(239, 68, 68, 0.4)" : "var(--border-subtle)",
                boxShadow: index === 0 ? "0 0 20px rgba(239, 68, 68, 0.15)" : "var(--shadow-sm)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", flexWrap: "wrap", marginBottom: "14px" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                      #{index + 1}
                    </span>
                    <h3 style={{ fontSize: "1.25rem" }}>{b.name}</h3>
                    <span className="badge badge-no">{b.websiteStatus === "Yes" ? "Website Needs Fix" : "No Website"}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <MapPin size={12} color="#EF4444" /> {b.city || b.locality}, {b.state} {b.pinCode ? `(PIN ${b.pinCode})` : ""}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Star size={12} fill="#FBBF24" color="#FBBF24" /> {b.rating}★ ({b.reviewCount} reviews)
                    </span>
                    {b.phone && (
                      <span style={{ display: "flex", alignItems: "center", gap: "4px", fontFamily: "var(--font-mono)" }}>
                        <Phone size={12} color="#10B981" /> {b.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Big Score Badge */}
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Opportunity Score
                  </div>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 800, color: "#EF4444", lineHeight: 1 }}>
                    {b.opportunityScore}<span style={{ fontSize: "1rem", color: "var(--text-muted)" }}>/100</span>
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#F87171", fontWeight: 600, marginTop: "2px" }}>
                    High-Priority Prospect
                  </div>
                </div>
              </div>

              {/* Weighted Score Breakdown Chips */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", margin: "12px 0", background: "rgba(0,0,0,0.25)", padding: "10px 14px", borderRadius: "8px", fontSize: "0.75rem" }}>
                <span style={{ color: "var(--text-muted)", marginRight: "4px" }}>100-Pt Rubric:</span>
                <span className="config-chip">No Website: <strong style={{ color: "#EF4444" }}>+{bd.websiteGaps || 40} pts</strong></span>
                <span className="config-chip">Social Only: <strong style={{ color: "#F59E0B" }}>+{bd.socialMediaOnly || 15} pts</strong></span>
                <span className="config-chip">Active GMB: <strong style={{ color: "#06B6D4" }}>+{bd.activeListing || 10} pts</strong></span>
                <span className="config-chip">Verified Phone: <strong style={{ color: "#10B981" }}>+{bd.verifiedPhone || 15} pts</strong></span>
                <span className="config-chip">Rating &gt;4.0★: <strong style={{ color: "#FBBF24" }}>+{bd.ratingAbove4 || 10} pts</strong></span>
                <span className="config-chip">50+ Reviews: <strong style={{ color: "#818CF8" }}>+{bd.reviewsAbove50 || 10} pts</strong></span>
              </div>

              {/* Rationale and Strategy */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "16px", margin: "14px 0" }}>
                <div className="gap-highlight-box" style={{ margin: 0 }}>
                  <strong>Why This is a Hot Prospect:</strong>
                  <div style={{ marginTop: "4px", fontSize: "0.82rem" }}>{b.opportunityReason}</div>
                </div>

                <div className="recommendation-box" style={{ margin: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <strong>Recommended Virtual Agency Pitch:</strong>
                    <span style={{ color: "#10B981", fontWeight: 700 }}>{b.virtualAgencyRecommendation?.suggestedPackagePrice}</span>
                  </div>
                  <div style={{ marginTop: "4px", fontSize: "0.82rem" }}>
                    {b.virtualAgencyRecommendation?.recommendedSolution}
                  </div>
                </div>
              </div>

              {/* Quick Outreach Triggers */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", marginTop: "16px", paddingTop: "14px", borderTop: "1px solid rgba(255, 255, 255, 0.05)", flexWrap: "wrap" }}>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {pitches.waUrl && (
                    <a 
                      href={pitches.waUrl}
                      target="_blank" 
                      rel="noreferrer"
                      className="btn-whatsapp"
                      style={{ textDecoration: "none" }}
                    >
                      <MessageCircle size={14} /> Send Hinglish WhatsApp Pitch
                    </a>
                  )}

                  {b.phone && (
                    <a 
                      href={`tel:${b.phone}`} 
                      className="btn-call"
                      style={{ textDecoration: "none" }}
                    >
                      <Phone size={14} /> Call Workshop Manager
                    </a>
                  )}

                  <button 
                    className="btn-primary"
                    onClick={() => onSelectBusiness(b, "pitch")}
                  >
                    <Sparkles size={14} /> Open Full Pitch Studio
                  </button>
                </div>

                <button 
                  className="filter-pill-btn"
                  onClick={() => onSelectBusiness(b, "competitor")}
                >
                  Inspect 5KM Competitors ↗
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

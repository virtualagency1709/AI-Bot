import React, { useState } from "react";
import { 
  Users, 
  Star, 
  Sparkles, 
  Target
} from "lucide-react";

export function CompetitorTab({ 
  businesses, 
  initialBusiness, 
  onSelectBusiness 
}) {
  const [selectedBusinessId, setSelectedBusinessId] = useState(
    initialBusiness?.id || businesses[0]?.id
  );

  const currentBusiness = businesses.find((b) => b.id === selectedBusinessId) || businesses[0];
  const competitors = currentBusiness?.competitors5Km || [];

  return (
    <div className="competitor-tab-container">
      {/* Strategic Header */}
      <div className="glass-card" style={{ marginBottom: "24px", borderLeft: "4px solid #06B6D4" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px", flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <span className="badge" style={{ background: "rgba(6, 182, 212, 0.2)", color: "#22D3EE", border: "1px solid rgba(6, 182, 212, 0.3)" }}>
                <Users size={12} /> 5 KM Radius Intelligence Radar
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                Verified Locality Competitor Analysis
              </span>
            </div>
            <h2 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>
              Competitor Analysis Within 5 KM Catchment Radius
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", maxWidth: "850px" }}>
              Car detailing is fundamentally a local radius business: customers rarely travel more than 5–8 KM for standard detailing unless lured by strong digital reputation or PPF brand authority. Select any studio to see who is stealing their high-ticket leads in their immediate 5 KM radius.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ background: "rgba(6, 182, 212, 0.1)", border: "1px solid rgba(6, 182, 212, 0.25)", padding: "10px 16px", borderRadius: "10px" }}>
              <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>Active Studio Selected</div>
              <strong style={{ color: "#22D3EE", fontSize: "0.95rem" }}>{currentBusiness?.name}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Selector Dropdown Bar */}
      <div className="filter-bar-container" style={{ marginBottom: "24px" }}>
        <div className="filter-row">
          <label style={{ fontSize: "0.86rem", fontWeight: 600, color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "6px" }}>
            <Target size={15} color="#6366F1" /> Select Prospect Studio to Audit 5 KM Radius:
          </label>
          <select 
            className="custom-select" 
            style={{ minWidth: "320px", flex: 1 }}
            value={selectedBusinessId} 
            onChange={(e) => setSelectedBusinessId(e.target.value)}
          >
            {businesses.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name} ({b.locality}) — Score: {b.opportunityScore}/100
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Side-by-Side Comparison Matrix */}
      <div className="glass-card" style={{ marginBottom: "28px" }}>
        <h3 style={{ fontSize: "1.15rem", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span>⚔️ Direct 5 KM Head-to-Head Comparison:</span>
          <span style={{ color: "var(--accent-cyan)" }}>{currentBusiness?.name}</span>
          <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: "normal" }}>({currentBusiness?.locality})</span>
        </h3>

        <div style={{ overflowX: "auto" }}>
          <table className="custom-table">
            <thead>
              <tr>
                <th style={{ width: "220px" }}>Comparison Metric</th>
                <th style={{ background: "rgba(99, 102, 241, 0.15)", color: "#A5B4FC", borderBottom: "2px solid #6366F1" }}>
                  ★ {currentBusiness?.name} (Target Lead)
                </th>
                {competitors.map((c, idx) => (
                  <th key={idx} style={{ background: "rgba(255, 255, 255, 0.03)" }}>
                    {c.name} ({c.distanceKm} KM)
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 600, color: "var(--text-secondary)" }}>Distance from Studio</td>
                <td style={{ fontWeight: 700, color: "#A5B4FC" }}>0.0 KM (Anchor)</td>
                {competitors.map((c, idx) => (
                  <td key={idx} style={{ fontFamily: "var(--font-mono)" }}>{c.distanceKm} KM away</td>
                ))}
              </tr>

              <tr>
                <td style={{ fontWeight: 600, color: "var(--text-secondary)" }}>Google Rating</td>
                <td style={{ fontWeight: 700, color: "#FBBF24" }}>
                  <Star size={13} fill="#FBBF24" style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                  {currentBusiness?.rating}★
                </td>
                {competitors.map((c, idx) => (
                  <td key={idx}>
                    <Star size={13} fill="#FBBF24" style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                    {c.rating}★
                  </td>
                ))}
              </tr>

              <tr>
                <td style={{ fontWeight: 600, color: "var(--text-secondary)" }}>Google Reviews Count</td>
                <td style={{ fontWeight: 700 }}>{currentBusiness?.reviewCount} reviews</td>
                {competitors.map((c, idx) => (
                  <td key={idx}>{c.reviews} reviews</td>
                ))}
              </tr>

              <tr>
                <td style={{ fontWeight: 600, color: "var(--text-secondary)" }}>Official Website</td>
                <td>
                  {currentBusiness?.websiteStatus === "Yes" ? (
                    <span className="badge badge-yes">Yes</span>
                  ) : (
                    <span className="badge badge-no">No Website</span>
                  )}
                </td>
                {competitors.map((c, idx) => (
                  <td key={idx}>
                    {c.hasWebsite ? (
                      <span className="badge badge-yes">Yes</span>
                    ) : (
                      <span className="badge badge-no">No</span>
                    )}
                  </td>
                ))}
              </tr>

              <tr>
                <td style={{ fontWeight: 600, color: "var(--text-secondary)" }}>WhatsApp Quick Chat</td>
                <td>
                  {currentBusiness?.websiteAudit?.hasWhatsAppWidget ? (
                    <span className="badge badge-yes">Active</span>
                  ) : (
                    <span className="badge badge-no">Missing</span>
                  )}
                </td>
                {competitors.map((c, idx) => (
                  <td key={idx}>
                    {c.hasWhatsApp ? (
                      <span className="badge badge-yes">Active</span>
                    ) : (
                      <span className="badge badge-no">No</span>
                    )}
                  </td>
                ))}
              </tr>

              <tr>
                <td style={{ fontWeight: 600, color: "var(--text-secondary)" }}>PPF Market Position</td>
                <td>
                  <span className="badge" style={{ background: "rgba(255,255,255,0.08)", color: "#fff" }}>
                    {currentBusiness?.services.includes("PPF (Paint Protection Film)") ? "Offers PPF" : "General"}
                  </span>
                </td>
                {competitors.map((c, idx) => (
                  <td key={idx}>
                    <span className="badge" style={{ background: c.ppfStrength === "Very High" ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.06)", color: c.ppfStrength === "Very High" ? "#34D399" : "#CBD5E1" }}>
                      {c.ppfStrength}
                    </span>
                  </td>
                ))}
              </tr>

              <tr>
                <td style={{ fontWeight: 600, color: "var(--text-secondary)" }}>Competitor Advantage</td>
                <td style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>[Target Prospect]</td>
                {competitors.map((c, idx) => (
                  <td key={idx} style={{ color: "#FCA5A5", fontSize: "0.82rem" }}>
                    {c.digitalAdvantage}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Actionable Sales Pitch Angle based on Competitor Gap */}
      <div className="glass-card" style={{ borderLeft: "4px solid #10B981" }}>
        <h3 style={{ fontSize: "1.1rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
          <Sparkles size={18} color="#10B981" /> Actionable Competitor Angle for Virtual Agency Sales Call
        </h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginBottom: "14px" }}>
          Use this verified competitor dynamic during your phone call or WhatsApp pitch to create urgency:
        </p>

        <div className="pitch-code-block" style={{ maxHeight: "none", marginBottom: "16px" }}>
{`"Sir, humne ${currentBusiness?.locality} area mein dekha ki aapke paas 5 KM ke radius mein ${competitors?.[0]?.name || "nearby studios"} hai. 

Wo actively Google Search aur online WhatsApp bookings se customers capture kar rahe hain. 

Jabki aapka studio (${currentBusiness?.rating}★ with ${currentBusiness?.reviewCount} reviews) work quality mein unse better hai, lekin digital lead capture na hone ki wajah se ${currentBusiness?.locality} ke luxury car owners unke paas chale jaate hain.

Agar hum aapke liye ek sleek website aur WhatsApp booking bot live kar dein, to aap easily inko outrank karke high-ticket clients direct capture kar sakte hain."`}
        </div>

        <button 
          className="btn-primary"
          onClick={() => onSelectBusiness(currentBusiness, "pitch")}
        >
          <Sparkles size={14} /> Open Personalized Pitch Studio for {currentBusiness?.name}
        </button>
      </div>
    </div>
  );
}

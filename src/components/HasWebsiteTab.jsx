import React, { useState } from "react";
import { 
  Globe, 
  ExternalLink, 
  MapPin, 
  Star, 
  Gauge, 
  Sparkles, 
  CheckCircle2, 
  XCircle
} from "lucide-react";

export function HasWebsiteTab({ 
  businesses, 
  onSelectBusiness 
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const hasWebsiteLeads = businesses.filter(
    (b) => b.websiteStatus === "Yes"
  ).filter((b) => 
    b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.locality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="has-website-tab-container">
      {/* Top Banner */}
      <div className="glass-card" style={{ marginBottom: "24px", borderLeft: "4px solid #6366F1" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px", flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <span className="badge badge-yes">
                <Globe size={12} /> Optimization & Growth Opportunities
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                {hasWebsiteLeads.length} Studios with Active Websites
              </span>
            </div>
            <h2 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>
              Detailing Studios With Websites (CRO, SEO & Speed Upgrade Leads)
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", maxWidth: "850px" }}>
              These studios have websites, but <strong>over 70% suffer from critical conversion leakages</strong>: slow mobile loading speeds (&lt;60), missing WhatsApp click-to-chat widgets, unsecure HTTP protocols, or lack of interactive vehicle pricing estimators. Pitch them Virtual Agency’s <strong>Speed & Conversion Optimization Retainers</strong> (₹18,000–₹28,000 + SEO).
            </p>
          </div>
          <div style={{ background: "rgba(99, 102, 241, 0.1)", border: "1px solid rgba(99, 102, 241, 0.25)", padding: "12px 18px", borderRadius: "12px" }}>
            <div style={{ color: "var(--text-muted)", fontSize: "0.76rem" }}>Avg Mobile Speed Score</div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, color: "#818CF8" }}>
              58 / 100
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>Heavy uncompressed images & code</div>
          </div>
        </div>
      </div>

      {/* Search Input */}
      <div style={{ marginBottom: "20px", maxWidth: "420px" }}>
        <input 
          type="text" 
          className="custom-input" 
          placeholder="Filter studios with websites by name or locality..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Grid of Prospects */}
      <div className="leads-grid">
        {hasWebsiteLeads.map((b) => {
          const wa = b.websiteAudit || {};
          return (
            <div key={b.id} className="lead-card">
              <div>
                <div className="lead-card-top">
                  <div className="lead-title-area">
                    <h3>{b.name}</h3>
                    <div className="lead-locality">
                      <MapPin size={12} color="#6366F1" />
                      <span>{b.locality}</span>
                    </div>
                  </div>
                  <div className="score-badge" style={{ background: "rgba(99, 102, 241, 0.15)", color: "#818CF8", border: "1px solid rgba(99, 102, 241, 0.3)" }}>
                    {b.opportunityScore}/100
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "8px 0" }}>
                  <div className="rating-pill">
                    <Star size={12} fill="#FBBF24" color="#FBBF24" />
                    <span>{b.rating} ({b.reviewCount})</span>
                  </div>
                  <a 
                    href={b.website} 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ fontSize: "0.78rem", display: "inline-flex", alignItems: "center", gap: "3px" }}
                  >
                    Visit Website <ExternalLink size={10} />
                  </a>
                </div>

                {/* Audit Checklist Badges */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", margin: "10px 0", fontSize: "0.74rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Gauge size={13} color={wa.speedScore > 70 ? "#10B981" : "#EF4444"} />
                    <span>Speed: <strong>{wa.speedScore}/100</strong></span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    {wa.hasWhatsAppWidget ? (
                      <CheckCircle2 size={13} color="#10B981" />
                    ) : (
                      <XCircle size={13} color="#EF4444" />
                    )}
                    <span>WhatsApp: {wa.hasWhatsAppWidget ? "Active" : "Missing"}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    {wa.https ? (
                      <CheckCircle2 size={13} color="#10B981" />
                    ) : (
                      <XCircle size={13} color="#EF4444" />
                    )}
                    <span>SSL Security: {wa.https ? "HTTPS" : "Insecure HTTP"}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    {wa.hasOnlineBooking ? (
                      <CheckCircle2 size={13} color="#10B981" />
                    ) : (
                      <XCircle size={13} color="#EF4444" />
                    )}
                    <span>Slot Booking: {wa.hasOnlineBooking ? "Yes" : "Missing"}</span>
                  </div>
                </div>

                {/* Identified Weakness */}
                <div className="gap-highlight-box">
                  <strong>Conversion Gap:</strong> {wa.identifiedWeaknesses?.[0]?.issue || "Needs conversion rate optimization"}
                  <div style={{ fontSize: "0.72rem", color: "#FECACA", marginTop: "2px" }}>
                    {wa.identifiedWeaknesses?.[0]?.evidence}
                  </div>
                </div>

                {/* Agency Upgrade Solution */}
                <div className="recommendation-box">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <strong>Recommended Virtual Agency Package:</strong>
                    <span style={{ color: "#10B981", fontWeight: 700, fontSize: "0.85rem" }}>
                      {b.virtualAgencyRecommendation?.suggestedPackagePrice}
                    </span>
                  </div>
                  <div style={{ marginTop: "3px" }}>
                    {b.virtualAgencyRecommendation?.recommendedSolution}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="lead-card-actions">
                <button 
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: "center" }}
                  onClick={() => onSelectBusiness(b, "pitch")}
                >
                  <Sparkles size={13} /> Pitch Upgrade
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => onSelectBusiness(b, "audit")}
                >
                  Deep Audit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

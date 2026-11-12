import React, { useState } from "react";
import { 
  X, 
  MapPin, 
  Star, 
  Sparkles, 
  ExternalLink, 
  MessageCircle
} from "lucide-react";
import { generateAllPitches } from "../utils/pitchGenerator";
import { getPriorityBadgeColor } from "../utils/scoring";

export function BusinessDetailModal({ 
  business, 
  initialTab = "summary", 
  onClose,
  onShowToast 
}) {
  const [activeTab, setActiveTab] = useState(initialTab); // 'summary', 'audit', 'competitors', 'pitch'
  const [copiedKey, setCopiedKey] = useState(null);

  if (!business) return null;

  const pitches = generateAllPitches(business);
  const badgeStyle = getPriorityBadgeColor(business.priority);
  const wa = business.websiteAudit || {};
  const hasWebsite = business.websiteStatus === "Yes";

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    if (onShowToast) onShowToast("Copied to clipboard!");
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {/* Modal Top Profile Bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px", marginBottom: "20px", flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
              <h2 style={{ fontSize: "1.5rem" }}>{business.name}</h2>
              <span className={`badge ${hasWebsite ? "badge-yes" : "badge-no"}`}>
                {hasWebsite ? "Has Website" : "No Website"}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.84rem", color: "var(--text-secondary)", flexWrap: "wrap" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <MapPin size={13} color="#6366F1" /> {business.address}
              </span>
              <span>•</span>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Star size={13} fill="#FBBF24" color="#FBBF24" /> {business.rating}★ ({business.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>Opportunity Score</div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", fontWeight: 800, color: badgeStyle.text }}>
              {business.opportunityScore}<span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>/100</span>
            </div>
            <div style={{ fontSize: "0.75rem", color: badgeStyle.text, fontWeight: 600 }}>
              {business.priority}
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div style={{ display: "flex", gap: "8px", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "12px", marginBottom: "20px" }}>
          <button 
            className={`filter-pill-btn ${activeTab === "summary" ? "active" : ""}`}
            onClick={() => setActiveTab("summary")}
          >
            Overview & Lead Setup
          </button>
          <button 
            className={`filter-pill-btn ${activeTab === "audit" ? "active" : ""}`}
            onClick={() => setActiveTab("audit")}
          >
            Website & Technical Audit
          </button>
          <button 
            className={`filter-pill-btn ${activeTab === "competitors" ? "active" : ""}`}
            onClick={() => setActiveTab("competitors")}
          >
            5 KM Competitor Radar
          </button>
          <button 
            className={`filter-pill-btn ${activeTab === "pitch" ? "active" : ""}`}
            onClick={() => setActiveTab("pitch")}
          >
            <Sparkles size={13} /> Sales Pitches & Scripts
          </button>
        </div>

        {/* TAB 1: SUMMARY & LEAD SETUP */}
        {activeTab === "summary" && (
          <div>
            {/* Quick Details Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "20px" }}>
              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "12px", borderRadius: "8px", fontSize: "0.82rem" }}>
                <div style={{ color: "var(--text-muted)" }}>Phone Number</div>
                <strong style={{ color: "#fff", fontFamily: "var(--font-mono)" }}>
                  {business.phone ? <a href={`tel:${business.phone}`}>{business.phone}</a> : "Not found"}
                </strong>
              </div>

              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "12px", borderRadius: "8px", fontSize: "0.82rem" }}>
                <div style={{ color: "var(--text-muted)" }}>Website URL</div>
                {hasWebsite ? (
                  <a href={business.website} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    Visit Website <ExternalLink size={11} />
                  </a>
                ) : (
                  <span style={{ color: "#EF4444" }}>No Website Found</span>
                )}
              </div>

              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "12px", borderRadius: "8px", fontSize: "0.82rem" }}>
                <div style={{ color: "var(--text-muted)" }}>Opening Hours</div>
                <span style={{ color: "#E2E8F0" }}>{business.openingHours || "Not listed"}</span>
              </div>

              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "12px", borderRadius: "8px", fontSize: "0.82rem" }}>
                <div style={{ color: "var(--text-muted)" }}>Instagram</div>
                <span style={{ color: "#E2E8F0" }}>{business.instagram || "Not found"}</span>
              </div>
            </div>

            {/* Lead Channel Classification (Section 6) */}
            <div style={{ background: "rgba(99, 102, 241, 0.06)", border: "1px solid rgba(99, 102, 241, 0.2)", borderRadius: "10px", padding: "16px", marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <strong style={{ color: "#A5B4FC", fontSize: "0.92rem" }}>
                  Lead Generation Classification: {business.leadChannelType}
                </strong>
                <span className="badge badge-lead-type">{business.leadChannelType}</span>
              </div>

              <div style={{ fontSize: "0.82rem", display: "flex", flexDirection: "column", gap: "6px" }}>
                <div>
                  <strong style={{ color: "var(--text-primary)" }}>• Observed Facts: </strong>
                  <span style={{ color: "var(--text-secondary)" }}>{business.leadChannelBreakdown?.observedFacts}</span>
                </div>
                <div>
                  <strong style={{ color: "var(--text-primary)" }}>• Reasonable Estimates: </strong>
                  <span style={{ color: "var(--text-secondary)" }}>{business.leadChannelBreakdown?.reasonableEstimates}</span>
                </div>
                <div>
                  <strong style={{ color: "var(--text-primary)" }}>• Requires Owner Confirmation: </strong>
                  <span style={{ color: "var(--text-secondary)" }}>{business.leadChannelBreakdown?.confirmationRequired}</span>
                </div>
              </div>
            </div>

            {/* Recommendation Box */}
            <div className="recommendation-box" style={{ padding: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <strong style={{ fontSize: "0.92rem" }}>Virtual Agency Recommended Solution:</strong>
                <strong style={{ color: "#10B981" }}>{business.virtualAgencyRecommendation?.suggestedPackagePrice}</strong>
              </div>
              <div style={{ fontSize: "0.86rem", color: "#E2E8F0", marginBottom: "6px" }}>
                {business.virtualAgencyRecommendation?.recommendedSolution}
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                {business.virtualAgencyRecommendation?.whyItMatters}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: AUDIT */}
        {activeTab === "audit" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px", fontSize: "0.82rem" }}>
              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "12px", borderRadius: "8px" }}>
                <span style={{ color: "var(--text-muted)" }}>Mobile Friendliness: </span>
                <strong style={{ color: wa.mobileFriendly ? "#10B981" : "#EF4444" }}>
                  {wa.mobileFriendly ? "Pass" : "Fail / Missing"}
                </strong>
              </div>
              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "12px", borderRadius: "8px" }}>
                <span style={{ color: "var(--text-muted)" }}>Mobile Speed Score: </span>
                <strong style={{ color: wa.speedScore >= 70 ? "#10B981" : "#EF4444" }}>
                  {wa.speedScore || 0}/100
                </strong>
              </div>
              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "12px", borderRadius: "8px" }}>
                <span style={{ color: "var(--text-muted)" }}>HTTPS Security: </span>
                <strong style={{ color: wa.https ? "#10B981" : "#EF4444" }}>
                  {wa.https ? "Active SSL" : "Insecure HTTP"}
                </strong>
              </div>
              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "12px", borderRadius: "8px" }}>
                <span style={{ color: "var(--text-muted)" }}>WhatsApp Enquiry: </span>
                <strong style={{ color: wa.hasWhatsAppWidget ? "#10B981" : "#EF4444" }}>
                  {wa.hasWhatsAppWidget ? "Configured" : "Missing"}
                </strong>
              </div>
            </div>

            <h4 style={{ fontSize: "0.95rem", marginBottom: "10px", color: "#F87171" }}>
              Identified Weaknesses & Evidence
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {wa.identifiedWeaknesses?.map((w, idx) => (
                <div key={idx} className="gap-highlight-box" style={{ margin: 0 }}>
                  <strong>{w.issue}: </strong>
                  <span>{w.evidence}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: COMPETITORS */}
        {activeTab === "competitors" && (
          <div>
            <h4 style={{ fontSize: "0.95rem", marginBottom: "12px" }}>5 KM Direct Competitors</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {business.competitors5Km?.map((c, idx) => (
                <div key={idx} style={{ background: "rgba(255, 255, 255, 0.03)", padding: "14px", borderRadius: "8px", border: "1px solid var(--border-subtle)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                    <strong>{c.name}</strong>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>{c.distanceKm} KM away</span>
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "6px" }}>
                    {c.rating}★ ({c.reviews} reviews) • Website: {c.hasWebsite ? "Yes" : "No"} • WhatsApp: {c.hasWhatsApp ? "Yes" : "No"}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#FCA5A5" }}>
                    <strong>Competitor Advantage: </strong>{c.digitalAdvantage}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PITCH */}
        {activeTab === "pitch" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>WhatsApp Pitch (Natural Hinglish):</span>
              <button 
                className="filter-pill-btn"
                onClick={() => handleCopy(pitches.whatsappPitch, "wa")}
              >
                {copiedKey === "wa" ? "Copied!" : "Copy Pitch"}
              </button>
            </div>
            <div className="pitch-code-block" style={{ maxHeight: "250px", marginBottom: "16px" }}>
              {pitches.whatsappPitch}
            </div>

            {pitches.waUrl && (
              <a 
                href={pitches.waUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-whatsapp"
                style={{ textDecoration: "none", width: "100%", justifyContent: "center" }}
              >
                <MessageCircle size={15} /> Open Pre-filled WhatsApp Chat Now
              </a>
            )}
          </div>
        )}

        {/* Modal Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "24px", paddingTop: "16px", borderTop: "1px solid var(--border-subtle)" }}>
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
            Google Maps link: <a href={business.gmbUrl} target="_blank" rel="noreferrer">Open in Maps ↗</a>
          </div>
          <button className="btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

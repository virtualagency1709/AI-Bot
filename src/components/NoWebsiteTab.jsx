import React, { useState } from "react";
import { 
  Globe2, 
  Phone, 
  MapPin, 
  Star, 
  MessageCircle
} from "lucide-react";
import { generateAllPitches } from "../utils/pitchGenerator";

export function NoWebsiteTab({ 
  businesses, 
  onSelectBusiness 
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const noWebsiteLeads = businesses.filter(
    (b) => b.websiteStatus === "No" || b.websiteStatus === "Unverified"
  ).filter((b) => 
    b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.locality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="no-website-tab-container">
      {/* Top Banner Explaining the Sales Strategy */}
      <div className="glass-card" style={{ marginBottom: "24px", borderLeft: "4px solid #EF4444" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px", flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <span className="badge badge-no">
                <Globe2 size={12} /> High-Ticket Website Opportunity
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                {noWebsiteLeads.length} Prospects Identified in Delhi
              </span>
            </div>
            <h2 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>
              High-Demand Detailing Studios Without Any Official Website
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", maxWidth: "850px" }}>
              These business owners already have genuine customer footfall and 4.5+ star reputations on Google Maps. Because they lack a website, luxury car buyers searching for PPF warranties and ceramic coating certifications choose nearby competitors. Pitch them Virtual Agency’s <strong>Turnkey Car Detailing Studio Web Portal</strong> (₹25,000–₹40,000).
            </p>
          </div>

          <div style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.25)", padding: "12px 18px", borderRadius: "12px" }}>
            <div style={{ color: "var(--text-muted)", fontSize: "0.76rem" }}>Total Pipeline Value</div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, color: "#F87171" }}>
              ₹{noWebsiteLeads.length * 32000 > 0 ? (noWebsiteLeads.length * 32).toLocaleString() + ",000" : "0"}
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>At avg ₹32k/website package</div>
          </div>
        </div>
      </div>

      {/* Search Input */}
      <div style={{ marginBottom: "20px", maxWidth: "420px" }}>
        <input 
          type="text" 
          className="custom-input" 
          placeholder="Filter no-website studios by name or locality..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Grid of Prospects */}
      <div className="leads-grid">
        {noWebsiteLeads.map((b) => {
          const pitches = generateAllPitches(b);
          return (
            <div key={b.id} className="lead-card" style={{ borderColor: "rgba(239, 68, 68, 0.2)" }}>
              <div>
                <div className="lead-card-top">
                  <div className="lead-title-area">
                    <h3>{b.name}</h3>
                    <div className="lead-locality">
                      <MapPin size={12} color="#EF4444" />
                      <span>{b.locality}</span>
                    </div>
                  </div>
                  <div className="score-badge" style={{ background: "rgba(239, 68, 68, 0.15)", color: "#EF4444", border: "1px solid rgba(239, 68, 68, 0.3)" }}>
                    {b.opportunityScore}/100
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "10px 0" }}>
                  <div className="rating-pill">
                    <Star size={12} fill="#FBBF24" color="#FBBF24" />
                    <span>{b.rating} ({b.reviewCount} reviews)</span>
                  </div>
                  <span className="badge badge-no">Zero Website Presence</span>
                </div>

                {/* Evidence & Competitor Threat */}
                <div className="gap-highlight-box">
                  <strong>The Revenue Leakage:</strong>
                  <div style={{ marginTop: "4px" }}>
                    Competitor <strong>{b.competitors5Km?.[0]?.name}</strong> ({b.competitors5Km?.[0]?.distanceKm} KM away) captures luxury PPF clients through their active website.
                  </div>
                </div>

                {/* Recommended Package */}
                <div className="recommendation-box">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <strong>Recommended Virtual Agency Pitch:</strong>
                    <span style={{ color: "#10B981", fontWeight: 700, fontSize: "0.85rem" }}>
                      {b.virtualAgencyRecommendation?.suggestedPackagePrice}
                    </span>
                  </div>
                  <div style={{ marginTop: "4px" }}>
                    {b.virtualAgencyRecommendation?.recommendedSolution}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="lead-card-actions">
                <div style={{ display: "flex", gap: "8px", width: "100%", justifyContent: "space-between" }}>
                  {pitches.waUrl ? (
                    <a 
                      href={pitches.waUrl}
                      target="_blank" 
                      rel="noreferrer"
                      className="btn-whatsapp"
                      style={{ textDecoration: "none", flex: 1, justifyContent: "center" }}
                    >
                      <MessageCircle size={14} /> Send WhatsApp Pitch
                    </a>
                  ) : (
                    <button 
                      className="btn-primary"
                      style={{ flex: 1 }}
                      onClick={() => onSelectBusiness(b, "pitch")}
                    >
                      View Pitch Script
                    </button>
                  )}

                  <button 
                    className="btn-secondary"
                    onClick={() => onSelectBusiness(b, "pitch")}
                  >
                    All Pitches
                  </button>
                  
                  {b.phone && (
                    <a 
                      href={`tel:${b.phone}`} 
                      className="btn-call"
                      style={{ textDecoration: "none" }}
                      title="Call Owner"
                    >
                      <Phone size={13} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

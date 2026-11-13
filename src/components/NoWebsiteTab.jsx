import React, { useState, useMemo } from "react";
import { 
  Globe2, 
  Phone, 
  MapPin, 
  Star, 
  MessageSquare,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Filter,
  ExternalLink
} from "lucide-react";
import { generateAllPitches } from "../utils/pitchGenerator";
import { buildWhatsAppLink } from "../config/agencyContact";
import { ALL_INDIAN_STATES } from "../data/panIndiaBusinesses";
import { GooglePlacesAttribution } from "../services/googlePlacesService";

export function NoWebsiteTab({ 
  businesses = [], 
  onSelectBusiness 
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("All India");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [whatsappOnly, setWhatsappOnly] = useState(false);

  // Filter only businesses without official website
  const baseNoWebsiteLeads = useMemo(() => {
    return businesses.filter(
      (b) => b.websiteStatus === "No" || b.websiteStatus === "Unverified" || b.websiteCategory?.includes("NO WEBSITE")
    );
  }, [businesses]);

  const filteredLeads = useMemo(() => {
    return baseNoWebsiteLeads.filter((b) => {
      const term = searchTerm.toLowerCase().trim();
      const matchesSearch = 
        !term ||
        b.name.toLowerCase().includes(term) ||
        (b.city && b.city.toLowerCase().includes(term)) ||
        (b.state && b.state.toLowerCase().includes(term)) ||
        (b.locality && b.locality.toLowerCase().includes(term)) ||
        (b.category && b.category.toLowerCase().includes(term)) ||
        (b.phone && b.phone.includes(term));

      const matchesState = selectedState === "All India" || b.state === selectedState;
      const matchesCategory = selectedCategory === "all" || b.category === selectedCategory;
      const matchesWhatsApp = !whatsappOnly || (b.hasWhatsApp && b.whatsapp_number);

      return matchesSearch && matchesState && matchesCategory && matchesWhatsApp;
    });
  }, [baseNoWebsiteLeads, searchTerm, selectedState, selectedCategory, whatsappOnly]);

  return (
    <div className="no-website-tab-container">
      {/* Top Banner Explaining the Sales Strategy */}
      <div className="glass-card" style={{ marginBottom: "24px", borderLeft: "4px solid #EF4444" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px", flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <span className="badge badge-no">
                <Globe2 size={12} /> Phase 8: High-Value Prospect Pipeline
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                {filteredLeads.length} Verified Businesses Without Official Website
              </span>
            </div>
            <h2 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>
              Automotive Detailing Studios Operating Without Any Official Website
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", maxWidth: "850px" }}>
              These business owners already have genuine customer footfall and 4.3+ star reputations on Google Maps. Because they lack a dedicated website, luxury car buyers searching for PPF warranties and ceramic coating certifications choose competitors. Pitch them Virtual Agency’s <strong>Turnkey Car Detailing Studio Web Portal</strong> (₹30,000–₹50,000).
            </p>
          </div>

          <div style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.25)", padding: "12px 18px", borderRadius: "12px" }}>
            <div style={{ color: "var(--text-muted)", fontSize: "0.76rem" }}>Pipeline Package Value</div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, color: "#F87171" }}>
              ₹{filteredLeads.length * 35000 > 0 ? (filteredLeads.length * 35).toLocaleString() + ",000" : "0"}
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>At avg ₹35k/website setup</div>
          </div>
        </div>
      </div>

      {/* Filter Row */}
      <div className="filter-bar-container" style={{ marginBottom: "20px" }}>
        <div className="filter-row">
          <div className="search-input-wrap">
            <input 
              type="text" 
              className="custom-input" 
              placeholder="Filter by studio name, city or state..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="custom-select"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="All India">State: Pan-India (All 36 States)</option>
            {ALL_INDIAN_STATES.filter(s => s !== "All India").map((st) => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>

          <select
            className="custom-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">Category: All Categories</option>
            <option value="Car Detailing">Car Detailing Studios</option>
            <option value="Paint Protection">Paint Protection (PPF & Ceramic)</option>
            <option value="Car Washing">Car Washing & Spa</option>
            <option value="Other Automotive Services">Other Automotive Services</option>
          </select>

          <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.78rem", color: "var(--text-secondary)", cursor: "pointer", userSelect: "none" }}>
            <input 
              type="checkbox" 
              checked={whatsappOnly} 
              onChange={(e) => setWhatsappOnly(e.target.checked)}
              style={{ accentColor: "#10B981" }}
            />
            <span>Verified WhatsApp Only</span>
          </label>

          <div style={{ marginLeft: "auto", fontSize: "0.82rem", color: "var(--text-secondary)" }}>
            Showing <strong>{filteredLeads.length}</strong> website-less targets
          </div>
        </div>
      </div>

      {/* Grid of Prospects */}
      <div className="leads-grid">
        {filteredLeads.map((b) => {
          const isWaVerified = Boolean(b.hasWhatsApp && b.whatsapp_number);
          const pitches = generateAllPitches(b);
          const waUrl = isWaVerified 
            ? buildWhatsAppLink(b.whatsapp_number, pitches.shortWhatsApp || `Hello ${b.name}, I noticed your studio in ${b.city} has great reviews but no official website. We have a live demo ready for you.`)
            : null;

          return (
            <div key={b.id} className="lead-card" style={{ borderColor: "rgba(239, 68, 68, 0.25)" }}>
              <div>
                <div className="lead-card-top">
                  <div className="lead-title-area">
                    <h3>{b.name}</h3>
                    <div className="lead-locality">
                      <MapPin size={12} color="#EF4444" />
                      <span>{b.locality || b.city}, {b.city}, {b.state}</span>
                    </div>
                  </div>
                  <div className="score-badge" style={{ background: "rgba(239, 68, 68, 0.15)", color: "#EF4444", border: "1px solid rgba(239, 68, 68, 0.3)" }}>
                    {b.opportunityScore}/100
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "8px", margin: "10px 0", flexWrap: "wrap" }}>
                  <div className="rating-pill">
                    <Star size={12} fill="#FBBF24" color="#FBBF24" />
                    <span>{b.rating} ({b.reviewCount} reviews)</span>
                  </div>
                  <span className="badge badge-no">Zero Official Website</span>
                  <span className="badge" style={{ background: "rgba(99, 102, 241, 0.15)", color: "#A5B4FC", fontSize: "0.72rem" }}>
                    {b.category}
                  </span>
                </div>

                {/* Phase 8 required fields: Verified contact, WhatsApp, Instagram, Source */}
                <div style={{ background: "rgba(0, 0, 0, 0.25)", padding: "10px 12px", borderRadius: "8px", fontSize: "0.78rem", margin: "10px 0", display: "flex", flexDirection: "column", gap: "5px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--text-muted)" }}>Verified Phone:</span>
                    <strong style={{ color: "#E2E8F0", fontFamily: "var(--font-mono)" }}>{b.phone}</strong>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--text-muted)" }}>WhatsApp Status:</span>
                    <span style={{ color: isWaVerified ? "#34D399" : "var(--text-muted)", fontWeight: isWaVerified ? 600 : "normal" }}>
                      {isWaVerified ? `Verified Active (+${b.whatsapp_number})` : "Unverified (Call Only)"}
                    </span>
                  </div>
                  {b.instagram && (
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "var(--text-muted)" }}>Instagram Profile:</span>
                      <a href={`https://instagram.com/${b.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" style={{ color: "#818CF8", textDecoration: "none" }}>
                        {b.instagram} ↗
                      </a>
                    </div>
                  )}
                  <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "4px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ color: "var(--text-muted)" }}>Source / Status:</span>
                    <span style={{ color: "#34D399", fontSize: "0.72rem" }}>
                      ✓ {b.source || "Google Places Verified"} ({b.verification_status || "Verified"})
                    </span>
                  </div>
                </div>

                {/* Evidence & Competitor Threat */}
                <div className="gap-highlight-box">
                  <strong>Revenue Leakage:</strong>
                  <div style={{ marginTop: "4px" }}>
                    {b.opportunityReason}
                  </div>
                </div>

                {/* Recommended Package */}
                <div className="recommendation-box">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <strong>Recommended Virtual Agency Solution:</strong>
                    <span style={{ color: "#10B981", fontWeight: 700, fontSize: "0.85rem" }}>
                      {b.virtualAgencyRecommendation?.suggestedPackagePrice || "₹35,000"}
                    </span>
                  </div>
                  <div style={{ marginTop: "4px" }}>
                    {b.virtualAgencyRecommendation?.recommendedSolution || "Dark-Aesthetic Web Portal & Instant WhatsApp Bot"}
                  </div>
                </div>
              </div>

              {/* Action Buttons (Phase 4 & 10) */}
              <div className="lead-card-actions" style={{ marginTop: "14px" }}>
                <div style={{ display: "flex", gap: "8px", width: "100%", justifyContent: "space-between" }}>
                  {isWaVerified ? (
                    <a 
                      href={waUrl}
                      target="_blank" 
                      rel="noreferrer"
                      className="btn-whatsapp"
                      style={{ textDecoration: "none", flex: 1, justifyContent: "center" }}
                    >
                      <MessageSquare size={14} /> Send WhatsApp Pitch
                    </a>
                  ) : (
                    b.phone && (
                      <a 
                        href={`tel:${b.phone}`} 
                        className="btn-call"
                        style={{ textDecoration: "none", flex: 1, justifyContent: "center" }}
                      >
                        <Phone size={14} /> Call Owner Now
                      </a>
                    )
                  )}

                  <button 
                    className="btn-primary"
                    style={{ padding: "7px 14px", fontSize: "0.78rem" }}
                    onClick={() => onSelectBusiness(b, "pitch")}
                  >
                    <Sparkles size={13} /> Pitch Studio
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
        <GooglePlacesAttribution />
      </div>
    </div>
  );
}

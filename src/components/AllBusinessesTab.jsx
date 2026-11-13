import React, { useState, useMemo } from "react";
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  ExternalLink, 
  Sparkles, 
  Eye, 
  Users, 
  LayoutGrid, 
  Table as TableIcon, 
  Phone, 
  MessageSquare, 
  ArrowUpDown, 
  Globe2, 
  CheckCircle2, 
  ShieldCheck
} from "lucide-react";

function InstagramIcon({ size = 12, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}
import { getPriorityBadgeColor } from "../utils/scoring";
import { ALL_INDIAN_STATES, PRIORITY_INDIAN_CITIES, DISCOVERY_CATEGORIES, SERVICE_CATEGORIES } from "../data/panIndiaBusinesses";
import { buildWhatsAppLink } from "../config/agencyContact";
import { GooglePlacesAttribution } from "../services/googlePlacesService";

export function AllBusinessesTab({ 
  businesses = [], 
  onSelectBusiness, 
  localities = []
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("All India");
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedService, setSelectedService] = useState("all");
  const [websiteFilter, setWebsiteFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [whatsappFilter, setWhatsappFilter] = useState("all");
  const [verificationFilter, setVerificationFilter] = useState("all");
  const [minRating, setMinRating] = useState("0");
  const [minReviews, setMinReviews] = useState("0");
  const [sortBy, setSortBy] = useState("score_desc");
  const [viewMode, setViewMode] = useState("table"); // 'table' or 'grid'

  // Dynamic available cities based on selected state
  const availableCities = useMemo(() => {
    const list = new Set();
    businesses.forEach((b) => {
      if (selectedState === "All India" || b.state === selectedState) {
        if (b.city) list.add(b.city);
      }
    });
    return ["All", ...Array.from(list).sort()];
  }, [businesses, selectedState]);

  // Filter logic
  const filteredBusinesses = useMemo(() => {
    return businesses.filter((b) => {
      // Search
      const term = searchTerm.toLowerCase().trim();
      const matchesSearch = 
        !term ||
        b.name.toLowerCase().includes(term) ||
        (b.city && b.city.toLowerCase().includes(term)) ||
        (b.state && b.state.toLowerCase().includes(term)) ||
        (b.locality && b.locality.toLowerCase().includes(term)) ||
        (b.phone && b.phone.includes(term)) ||
        (b.category && b.category.toLowerCase().includes(term)) ||
        (b.subcategory && b.subcategory.toLowerCase().includes(term)) ||
        (b.services && b.services.some(s => s.toLowerCase().includes(term))) ||
        (b.address && b.address.toLowerCase().includes(term));
      
      // State
      const matchesState = selectedState === "All India" || b.state === selectedState;

      // City
      const matchesCity = selectedCity === "All" || b.city === selectedCity;

      // Category
      const matchesCategory = selectedCategory === "all" || b.category === selectedCategory;

      // Service Type
      const matchesService = 
        selectedService === "all" || 
        b.subcategory === selectedService || 
        (b.services && b.services.includes(selectedService));

      // Website filter & Category
      let matchesWebsite = true;
      if (websiteFilter === "no_website") {
        matchesWebsite = b.websiteStatus === "No" || b.websiteStatus === "Unverified";
      } else if (websiteFilter === "has_website") {
        matchesWebsite = b.websiteStatus === "Yes";
      } else if (websiteFilter === "social_only") {
        matchesWebsite = b.websiteCategory === "SOCIAL MEDIA ONLY";
      } else if (websiteFilter === "directory_only") {
        matchesWebsite = b.websiteCategory === "DIRECTORY LISTING ONLY";
      } else if (websiteFilter === "no_website_priority") {
        matchesWebsite = b.websiteCategory === "NO WEBSITE – HIGH PRIORITY";
      }

      // Priority
      const matchesPriority = 
        priorityFilter === "all" ||
        (priorityFilter === "high" && b.opportunityScore >= 80) ||
        (priorityFilter === "medium_high" && b.opportunityScore >= 60 && b.opportunityScore < 80) ||
        (priorityFilter === "moderate" && b.opportunityScore < 60);

      // WhatsApp Filter (Phase 4 & 7)
      let matchesWhatsApp = true;
      if (whatsappFilter === "verified_only") {
        matchesWhatsApp = Boolean(b.hasWhatsApp && b.whatsapp_number);
      } else if (whatsappFilter === "call_only") {
        matchesWhatsApp = !b.hasWhatsApp && Boolean(b.phone);
      }

      // Verification Status
      const matchesVerification = 
        verificationFilter === "all" || b.verification_status === verificationFilter;

      // Min rating & reviews
      const matchesRating = b.rating >= parseFloat(minRating);
      const matchesReviews = b.reviewCount >= parseInt(minReviews, 10);

      return matchesSearch && matchesState && matchesCity && matchesCategory && 
             matchesService && matchesWebsite && matchesPriority && 
             matchesWhatsApp && matchesVerification && matchesRating && matchesReviews;
    });
  }, [
    businesses, searchTerm, selectedState, selectedCity, selectedCategory, 
    selectedService, websiteFilter, priorityFilter, whatsappFilter, 
    verificationFilter, minRating, minReviews
  ]);

  // Sorting
  const sortedBusinesses = useMemo(() => {
    return [...filteredBusinesses].sort((a, b) => {
      if (sortBy === "score_desc") return b.opportunityScore - a.opportunityScore;
      if (sortBy === "reviews_desc") return b.reviewCount - a.reviewCount;
      if (sortBy === "rating_desc") return b.rating - a.rating;
      if (sortBy === "name_asc") return a.name.localeCompare(b.name);
      if (sortBy === "state_asc") return (a.state || "").localeCompare(b.state || "");
      return 0;
    });
  }, [filteredBusinesses, sortBy]);

  const noWebsiteInFiltered = filteredBusinesses.filter(b => b.websiteStatus === "No" || b.websiteStatus === "Unverified").length;
  const verifiedWhatsAppInFiltered = filteredBusinesses.filter(b => b.hasWhatsApp && b.whatsapp_number).length;

  return (
    <div className="all-businesses-container">
      {/* Header and Filter Drawer */}
      <div className="filter-bar-container">
        {/* Row 1: Search, State, City, Category, Website Status, View Toggle */}
        <div className="filter-row">
          <div className="search-input-wrap">
            <Search size={18} />
            <input 
              type="text" 
              className="custom-input" 
              placeholder="Search studio name, city, state, service (PPF, Ceramic, Wash)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* State Filter */}
          <select 
            className="custom-select" 
            value={selectedState} 
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedCity("All");
            }}
            title="Filter by State or Union Territory"
          >
            <option value="All India">State: All India (36 States & UTs)</option>
            {ALL_INDIAN_STATES.filter(s => s !== "All India").map((st) => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>

          {/* City Filter */}
          <select 
            className="custom-select" 
            value={selectedCity} 
            onChange={(e) => setSelectedCity(e.target.value)}
            title="Filter by City"
          >
            <option value="All">City: All Cities ({availableCities.length - 1})</option>
            {availableCities.filter(c => c !== "All").map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          {/* Business Category Filter (Phase 1 & 7) */}
          <select 
            className="custom-select" 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            title="Filter by 4 Core Business Categories"
          >
            <option value="all">Category: All Categories</option>
            <option value="Car Detailing">Category A: Car Detailing</option>
            <option value="Paint Protection">Category B: Paint Protection (PPF & Ceramic)</option>
            <option value="Car Washing">Category C: Car Washing & Spa</option>
            <option value="Other Automotive Services">Category D: Other Automotive Services</option>
          </select>

          {/* Website Status & Category (Phase 8: Find Businesses Without Websites) */}
          <select 
            className="custom-select" 
            value={websiteFilter} 
            onChange={(e) => setWebsiteFilter(e.target.value)}
            title="Filter by Website Presence"
          >
            <option value="all">Website: All Statuses</option>
            <option value="no_website" style={{ color: "#EF4444", fontWeight: 600 }}>
              ★ Businesses Without Website ({noWebsiteInFiltered})
            </option>
            <option value="no_website_priority">NO WEBSITE – HIGH PRIORITY</option>
            <option value="social_only">Social Media Only (Instagram/FB)</option>
            <option value="directory_only">Directory Listing Only</option>
            <option value="has_website">Website Exists (Audited)</option>
          </select>

          {/* View Mode Toggle */}
          <div style={{ display: "flex", gap: "4px", marginLeft: "auto" }}>
            <button 
              className={`filter-pill-btn ${viewMode === "table" ? "active" : ""}`}
              onClick={() => setViewMode("table")}
              title="Table View"
            >
              <TableIcon size={14} /> Table
            </button>
            <button 
              className={`filter-pill-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
              title="Grid View"
            >
              <LayoutGrid size={14} /> Grid
            </button>
          </div>
        </div>

        {/* Row 2: Service Type, WhatsApp Status, Verification, Rating, Sort */}
        <div className="filter-row" style={{ paddingTop: "8px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
          <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
            <Filter size={12} /> Filters:
          </span>

          {/* Service Type Filter */}
          <select 
            className="custom-select" 
            style={{ padding: "6px 12px", fontSize: "0.78rem" }}
            value={selectedService} 
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="all">Service: All Services</option>
            {SERVICE_CATEGORIES.map((srv) => (
              <option key={srv} value={srv}>{srv}</option>
            ))}
          </select>

          {/* WhatsApp Verification Filter (Phase 4) */}
          <select 
            className="custom-select" 
            style={{ padding: "6px 12px", fontSize: "0.78rem" }}
            value={whatsappFilter} 
            onChange={(e) => setWhatsappFilter(e.target.value)}
          >
            <option value="all">Contact: All Contact Types</option>
            <option value="verified_only">Verified WhatsApp Only ({verifiedWhatsAppInFiltered})</option>
            <option value="call_only">Phone / Call-Only</option>
          </select>

          {/* Priority Tier Filter */}
          <select 
            className="custom-select" 
            style={{ padding: "6px 12px", fontSize: "0.78rem" }}
            value={priorityFilter} 
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="all">Priority: All Tiers</option>
            <option value="high">High Priority (Score 80–100)</option>
            <option value="medium_high">Medium-High (Score 60–79)</option>
            <option value="moderate">Moderate (Score &lt;60)</option>
          </select>

          {/* Sorting */}
          <select 
            className="custom-select" 
            style={{ padding: "6px 12px", fontSize: "0.78rem" }}
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="score_desc">Sort: Opportunity Score</option>
            <option value="reviews_desc">Sort: Reviews (Highest)</option>
            <option value="rating_desc">Sort: Rating (Highest)</option>
            <option value="name_asc">Sort: Studio Name (A-Z)</option>
            <option value="state_asc">Sort: State (A-Z)</option>
          </select>

          {/* Rating */}
          <select 
            className="custom-select" 
            style={{ padding: "6px 12px", fontSize: "0.78rem" }}
            value={minRating} 
            onChange={(e) => setMinRating(e.target.value)}
          >
            <option value="0">Min Rating: Any</option>
            <option value="4.0">4.0+ ★</option>
            <option value="4.5">4.5+ ★</option>
            <option value="4.7">4.7+ ★</option>
          </select>

          {/* Count summary badge */}
          <div style={{ marginLeft: "auto", fontSize: "0.82rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "10px" }}>
            <span>Showing <strong>{sortedBusinesses.length}</strong> of {businesses.length}</span>
            <span className="badge" style={{ background: "rgba(239, 68, 68, 0.15)", color: "#FCA5A5", fontSize: "0.72rem" }}>
              {noWebsiteInFiltered} Without Website
            </span>
          </div>
        </div>
      </div>

      {/* TABLE VIEW */}
      {viewMode === "table" ? (
        <div className="table-card-wrapper" style={{ overflowX: "auto" }}>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Business Name & Location</th>
                <th>Category & Subcategory</th>
                <th>Rating & Reviews</th>
                <th>Contact & WhatsApp</th>
                <th>Website Status</th>
                <th>Opportunity Score</th>
                <th>Priority</th>
                <th style={{ textAlign: "right" }}>Lead Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedBusinesses.length === 0 ? (
                <tr>
                  <td colSpan={8} style={{ textAlign: "center", padding: "40px", color: "var(--text-muted)" }}>
                    No automotive businesses match the selected nationwide filters.
                  </td>
                </tr>
              ) : (
                sortedBusinesses.map((b) => {
                  const badgeStyle = getPriorityBadgeColor(b.priority);
                  const isWaVerified = Boolean(b.hasWhatsApp && b.whatsapp_number);
                  const waUrl = isWaVerified 
                    ? buildWhatsAppLink(b.whatsapp_number, `Hello ${b.name}, I came across your studio in ${b.city} and would like to inquire about your services.`)
                    : null;

                  return (
                    <tr key={b.id}>
                      <td>
                        <div style={{ fontWeight: 600, color: "#fff", fontSize: "0.92rem", marginBottom: "3px" }}>
                          {b.name}
                        </div>
                        <div style={{ fontSize: "0.76rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "4px" }}>
                          <MapPin size={11} color="#6366F1" />
                          <span>{b.locality || b.city}, {b.city}, {b.state}</span>
                          {b.pinCode && <span style={{ color: "var(--text-muted)" }}>• PIN {b.pinCode}</span>}
                        </div>
                        {b.google_place_id && (
                          <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginTop: "2px" }}>
                            Place ID: {b.google_place_id}
                          </div>
                        )}
                      </td>

                      <td>
                        <div style={{ fontSize: "0.82rem", color: "#C7D2FE", fontWeight: 500 }}>
                          {b.category || "Car Detailing"}
                        </div>
                        <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "2px" }}>
                          {b.subcategory || b.services?.[0] || "PPF & Detailing"}
                        </div>
                      </td>

                      <td>
                        <div className="rating-pill">
                          <Star size={11} fill="#FBBF24" color="#FBBF24" />
                          <span>{b.rating}</span>
                        </div>
                        <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "2px" }}>
                          {b.reviewCount} reviews
                        </div>
                      </td>

                      <td>
                        {b.phone ? (
                          <div>
                            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem" }}>
                              <a href={`tel:${b.phone}`} style={{ color: "#E2E8F0", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                                <Phone size={11} color="#10B981" /> {b.phone}
                              </a>
                            </div>
                            <div style={{ marginTop: "3px" }}>
                              {isWaVerified ? (
                                <span className="badge" style={{ background: "rgba(16, 185, 129, 0.15)", color: "#34D399", fontSize: "0.68rem", display: "inline-flex", alignItems: "center", gap: "3px" }}>
                                  <MessageSquare size={10} /> Verified WhatsApp
                                </span>
                              ) : (
                                <span className="badge" style={{ background: "rgba(255, 255, 255, 0.05)", color: "var(--text-muted)", fontSize: "0.68rem" }}>
                                  Phone Only
                                </span>
                              )}
                            </div>
                          </div>
                        ) : (
                          <span style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>GMB Direct</span>
                        )}
                      </td>

                      <td>
                        {b.websiteStatus === "Yes" ? (
                          <div>
                            <span className="badge badge-yes">Has Website</span>
                            <div style={{ fontSize: "0.72rem", marginTop: "4px" }}>
                              <a href={b.website} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}>
                                Open URL <ExternalLink size={10} />
                              </a>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <span className="badge badge-no">No Website</span>
                            {b.instagram && (
                              <div style={{ fontSize: "0.72rem", color: "#818CF8", marginTop: "2px" }}>
                                {b.instagram}
                              </div>
                            )}
                          </div>
                        )}
                      </td>

                      <td>
                        <div 
                          className="score-badge"
                          style={{ background: badgeStyle.bg, color: badgeStyle.text, border: `1px solid ${badgeStyle.border}` }}
                        >
                          {b.opportunityScore}/100
                        </div>
                      </td>

                      <td>
                        <span style={{ fontSize: "0.78rem", fontWeight: 600, color: badgeStyle.text }}>
                          {b.priority ? b.priority.replace(" prospect", "") : "Hot Lead"}
                        </span>
                      </td>

                      {/* Phase 10: Clear actions per business */}
                      <td style={{ textAlign: "right" }}>
                        <div style={{ display: "inline-flex", gap: "5px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                          {/* Chat on WhatsApp: ONLY when verified WhatsApp exists */}
                          {isWaVerified ? (
                            <a 
                              href={waUrl} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="btn-whatsapp" 
                              style={{ padding: "5px 9px", fontSize: "0.74rem", textDecoration: "none" }}
                              title="Chat on WhatsApp (Verified Active)"
                            >
                              <MessageSquare size={11} /> WhatsApp
                            </a>
                          ) : (
                            /* If unverified on WhatsApp, show Call only */
                            b.phone && (
                              <a 
                                href={`tel:${b.phone}`} 
                                className="btn-call" 
                                style={{ padding: "5px 9px", fontSize: "0.74rem", textDecoration: "none" }}
                                title="Call Direct Phone"
                              >
                                <Phone size={11} /> Call
                              </a>
                            )
                          )}

                          {/* Visit Website if available */}
                          {b.website && (
                            <a
                              href={b.website}
                              target="_blank"
                              rel="noreferrer"
                              className="btn-secondary"
                              style={{ padding: "5px 7px", fontSize: "0.74rem", textDecoration: "none" }}
                              title="Visit Studio Website"
                            >
                              <Globe2 size={11} />
                            </a>
                          )}

                          {/* Instagram link if available */}
                          {b.instagram && (
                            <a
                              href={`https://instagram.com/${b.instagram.replace('@', '')}`}
                              target="_blank"
                              rel="noreferrer"
                              className="btn-secondary"
                              style={{ padding: "5px 7px", fontSize: "0.74rem", textDecoration: "none" }}
                              title="View Instagram Profile"
                            >
                              <InstagramIcon size={11} color="#E1306C" />
                            </a>
                          )}

                          {/* Google Maps Profile Link */}
                          {(b.google_maps_url || b.gmbUrl) && (
                            <a
                              href={b.google_maps_url || b.gmbUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="btn-secondary"
                              style={{ padding: "5px 7px", fontSize: "0.74rem", textDecoration: "none" }}
                              title="View Google Maps Profile"
                            >
                              <ExternalLink size={11} color="#06B6D4" />
                            </a>
                          )}

                          <button 
                            className="btn-primary" 
                            style={{ padding: "5px 9px", fontSize: "0.74rem" }}
                            onClick={() => onSelectBusiness(b, "pitch")}
                            title="Generate Sales Pitch"
                          >
                            <Sparkles size={11} /> Pitch
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>

          {/* Google Places Required Attribution Footer */}
          <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              Data verified against Google Places API & Independent Directory Records
            </span>
            <GooglePlacesAttribution />
          </div>
        </div>
      ) : (
        /* GRID VIEW */
        <div>
          <div className="leads-grid">
            {sortedBusinesses.map((b) => {
              const badgeStyle = getPriorityBadgeColor(b.priority);
              const isWaVerified = Boolean(b.hasWhatsApp && b.whatsapp_number);
              const waUrl = isWaVerified 
                ? buildWhatsAppLink(b.whatsapp_number, `Hello ${b.name}, I came across your studio in ${b.city} and would like to inquire about your services.`)
                : null;

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

                    <div style={{ display: "flex", alignItems: "center", gap: "8px", margin: "8px 0", flexWrap: "wrap" }}>
                      <div className="rating-pill">
                        <Star size={12} fill="#FBBF24" color="#FBBF24" />
                        <span>{b.rating} ({b.reviewCount} reviews)</span>
                      </div>
                      <span className={`badge ${b.websiteStatus === "Yes" ? "badge-yes" : "badge-no"}`}>
                        {b.websiteStatus === "Yes" ? "Has Website" : "No Website"}
                      </span>
                      <span className="badge" style={{ background: "rgba(99, 102, 241, 0.15)", color: "#A5B4FC", fontSize: "0.72rem" }}>
                        {b.category || "Car Detailing"}
                      </span>
                    </div>

                    <div className="services-tag-list">
                      {(b.services || []).slice(0, 3).map((s, idx) => (
                        <span key={idx} className="service-tag">{s}</span>
                      ))}
                      {(b.services || []).length > 3 && (
                        <span className="service-tag">+{b.services.length - 3} more</span>
                      )}
                    </div>

                    <div className="gap-highlight-box">
                      <strong>Identified Opportunity:</strong> {b.opportunityReason}
                    </div>

                    <div className="recommendation-box">
                      <strong>Virtual Agency Solution:</strong> {b.virtualAgencyRecommendation?.recommendedSolution || "Studio Web Portal & WhatsApp Funnel"}
                      <div style={{ color: "#10B981", fontSize: "0.74rem", marginTop: "3px", fontWeight: 600 }}>
                        Target Package: {b.virtualAgencyRecommendation?.suggestedPackagePrice || "₹35,000"}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar (Phase 10) */}
                  <div className="lead-card-actions" style={{ marginTop: "14px" }}>
                    <div style={{ display: "flex", gap: "6px", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                      <button 
                        className="btn-primary" 
                        style={{ padding: "7px 12px", fontSize: "0.78rem" }}
                        onClick={() => onSelectBusiness(b, "pitch")}
                      >
                        <Sparkles size={13} /> Pitch
                      </button>

                      <div style={{ display: "flex", gap: "5px" }}>
                        {isWaVerified ? (
                          <a 
                            href={waUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-whatsapp"
                            style={{ padding: "6px 10px", fontSize: "0.76rem", textDecoration: "none" }}
                            title="Chat on WhatsApp"
                          >
                            <MessageSquare size={13} /> WhatsApp
                          </a>
                        ) : (
                          b.phone && (
                            <a 
                              href={`tel:${b.phone}`}
                              className="btn-call"
                              style={{ padding: "6px 10px", fontSize: "0.76rem", textDecoration: "none" }}
                              title="Call Business"
                            >
                              <Phone size={13} /> Call
                            </a>
                          )
                        )}

                        <button 
                          className="btn-secondary" 
                          style={{ padding: "6px 10px", fontSize: "0.76rem" }}
                          onClick={() => onSelectBusiness(b, "audit")}
                        >
                          Audit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
            <GooglePlacesAttribution />
          </div>
        </div>
      )}
    </div>
  );
}

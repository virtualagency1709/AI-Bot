import React, { useState } from "react";
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
  Table as TableIcon
} from "lucide-react";
import { getPriorityBadgeColor } from "../utils/scoring";

export function AllBusinessesTab({ 
  businesses, 
  onSelectBusiness, 
  localities 
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocality, setSelectedLocality] = useState("All Delhi");
  const [websiteFilter, setWebsiteFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [channelFilter, setChannelFilter] = useState("all");
  const [minRating, setMinRating] = useState("0");
  const [minReviews, setMinReviews] = useState("0");
  const [viewMode, setViewMode] = useState("table"); // 'table' or 'grid'

  // Filter logic
  const filteredBusinesses = businesses.filter((b) => {
    // Search
    const matchesSearch = 
      b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.locality.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (b.phone && b.phone.includes(searchTerm)) ||
      b.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Locality
    const matchesLocality = selectedLocality === "All Delhi" || b.locality === selectedLocality;

    // Website filter
    const matchesWebsite = 
      websiteFilter === "all" ||
      (websiteFilter === "has_website" && b.websiteStatus === "Yes") ||
      (websiteFilter === "no_website" && (b.websiteStatus === "No" || b.websiteStatus === "Unverified"));

    // Priority filter
    const matchesPriority = 
      priorityFilter === "all" ||
      (priorityFilter === "high" && b.opportunityScore >= 80) ||
      (priorityFilter === "medium_high" && b.opportunityScore >= 60 && b.opportunityScore < 80) ||
      (priorityFilter === "moderate" && b.opportunityScore < 60);

    // Channel filter
    const matchesChannel = 
      channelFilter === "all" || b.leadChannelType.toLowerCase().includes(channelFilter.toLowerCase());

    // Min rating
    const matchesRating = b.rating >= parseFloat(minRating);

    // Min reviews
    const matchesReviews = b.reviewCount >= parseInt(minReviews, 10);

    return matchesSearch && matchesLocality && matchesWebsite && matchesPriority && matchesChannel && matchesRating && matchesReviews;
  });

  return (
    <div className="all-businesses-container">
      {/* Header and Filter Drawer */}
      <div className="filter-bar-container">
        <div className="filter-row">
          <div className="search-input-wrap">
            <Search size={18} />
            <input 
              type="text" 
              className="custom-input" 
              placeholder="Search by studio name, locality, address or phone..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select 
            className="custom-select" 
            value={selectedLocality} 
            onChange={(e) => setSelectedLocality(e.target.value)}
          >
            {localities.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>

          <select 
            className="custom-select" 
            value={websiteFilter} 
            onChange={(e) => setWebsiteFilter(e.target.value)}
          >
            <option value="all">Website: All Statuses</option>
            <option value="no_website">No Website Only</option>
            <option value="has_website">Has Website Only</option>
          </select>

          <select 
            className="custom-select" 
            value={priorityFilter} 
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="all">Priority: All Tiers</option>
            <option value="high">High Priority (Score 80-100)</option>
            <option value="medium_high">Medium-High (Score 60-79)</option>
            <option value="moderate">Moderate (Score &lt;60)</option>
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

        {/* Secondary Filter Chips Row */}
        <div className="filter-row" style={{ paddingTop: "8px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
          <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
            <Filter size={12} /> Fine Tuning:
          </span>

          <select 
            className="custom-select" 
            style={{ padding: "6px 12px", fontSize: "0.78rem" }}
            value={minRating} 
            onChange={(e) => setMinRating(e.target.value)}
          >
            <option value="0">Min Rating: Any</option>
            <option value="4.5">Rating: 4.5+ ★</option>
            <option value="4.7">Rating: 4.7+ ★</option>
          </select>

          <select 
            className="custom-select" 
            style={{ padding: "6px 12px", fontSize: "0.78rem" }}
            value={minReviews} 
            onChange={(e) => setMinReviews(e.target.value)}
          >
            <option value="0">Min Reviews: Any</option>
            <option value="100">100+ Reviews</option>
            <option value="200">200+ Reviews</option>
            <option value="300">300+ Reviews</option>
          </select>

          <select 
            className="custom-select" 
            style={{ padding: "6px 12px", fontSize: "0.78rem" }}
            value={channelFilter} 
            onChange={(e) => setChannelFilter(e.target.value)}
          >
            <option value="all">Lead Setup: All Channels</option>
            <option value="call">Call-led</option>
            <option value="whatsapp">WhatsApp-led</option>
            <option value="mixed">Mixed</option>
          </select>

          <div style={{ marginLeft: "auto", fontSize: "0.82rem", color: "var(--text-secondary)" }}>
            Showing <strong>{filteredBusinesses.length}</strong> of {businesses.length} detailing businesses
          </div>
        </div>
      </div>

      {/* TABLE VIEW */}
      {viewMode === "table" ? (
        <div className="table-card-wrapper" style={{ overflowX: "auto" }}>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Business Name & Locality</th>
                <th>Google Rating</th>
                <th>Contact Phone</th>
                <th>Website Status</th>
                <th>Lead Model</th>
                <th>Opportunity Score</th>
                <th>Priority</th>
                <th style={{ textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBusinesses.length === 0 ? (
                <tr>
                  <td colSpan={8} style={{ textAlign: "center", padding: "40px", color: "var(--text-muted)" }}>
                    No detailing studios match the selected filter criteria.
                  </td>
                </tr>
              ) : (
                filteredBusinesses.map((b) => {
                  const badgeStyle = getPriorityBadgeColor(b.priority);
                  return (
                    <tr key={b.id}>
                      <td>
                        <div style={{ fontWeight: 600, color: "#fff", fontSize: "0.92rem", marginBottom: "3px" }}>
                          {b.name}
                        </div>
                        <div style={{ fontSize: "0.76rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "4px" }}>
                          <MapPin size={11} color="#6366F1" />
                          <span>{b.locality}</span>
                          <span style={{ color: "var(--text-muted)" }}>• PIN {b.pinCode}</span>
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
                          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem" }}>
                            <a href={`tel:${b.phone}`} style={{ color: "#E2E8F0" }}>
                              {b.phone}
                            </a>
                          </div>
                        ) : (
                          <span style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>Not found</span>
                        )}
                      </td>

                      <td>
                        {b.websiteStatus === "Yes" ? (
                          <div>
                            <span className="badge badge-yes">Has Website</span>
                            <div style={{ fontSize: "0.74rem", marginTop: "4px" }}>
                              <a href={b.website} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}>
                                Open URL <ExternalLink size={10} />
                              </a>
                            </div>
                          </div>
                        ) : (
                          <span className="badge badge-no">No Website</span>
                        )}
                      </td>

                      <td>
                        <span className="badge badge-lead-type">
                          {b.leadChannelType}
                        </span>
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
                          {b.priority.replace(" prospect", "")}
                        </span>
                      </td>

                      <td style={{ textAlign: "right" }}>
                        <div style={{ display: "inline-flex", gap: "6px" }}>
                          <button 
                            className="btn-primary" 
                            style={{ padding: "6px 10px", fontSize: "0.76rem" }}
                            onClick={() => onSelectBusiness(b, "pitch")}
                            title="Generate Outreach Pitch"
                          >
                            <Sparkles size={12} /> Pitch
                          </button>
                          <button 
                            className="btn-secondary" 
                            style={{ padding: "6px 10px", fontSize: "0.76rem" }}
                            onClick={() => onSelectBusiness(b, "audit")}
                            title="View Audit Details"
                          >
                            <Eye size={12} />
                          </button>
                          <button 
                            className="btn-secondary" 
                            style={{ padding: "6px 10px", fontSize: "0.76rem" }}
                            onClick={() => onSelectBusiness(b, "competitor")}
                            title="5KM Competitor Radar"
                          >
                            <Users size={12} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      ) : (
        /* GRID VIEW */
        <div className="leads-grid">
          {filteredBusinesses.map((b) => {
            const badgeStyle = getPriorityBadgeColor(b.priority);
            return (
              <div key={b.id} className="lead-card">
                <div>
                  <div className="lead-card-top">
                    <div className="lead-title-area">
                      <h3>{b.name}</h3>
                      <div className="lead-locality">
                        <MapPin size={13} color="#94A3B8" />
                        <span>{b.locality}</span>
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
                    <span className="badge badge-lead-type">{b.leadChannelType}</span>
                  </div>

                  <div className="services-tag-list">
                    {b.services.slice(0, 3).map((s, idx) => (
                      <span key={idx} className="service-tag">{s}</span>
                    ))}
                    {b.services.length > 3 && (
                      <span className="service-tag">+{b.services.length - 3} more</span>
                    )}
                  </div>

                  <div className="gap-highlight-box">
                    <strong>Identified Gap:</strong> {b.opportunityReason}
                  </div>

                  <div className="recommendation-box">
                    <strong>Virtual Agency Solution:</strong> {b.virtualAgencyRecommendation?.recommendedSolution}
                    <div style={{ color: "#10B981", fontSize: "0.74rem", marginTop: "3px", fontWeight: 600 }}>
                      Price: {b.virtualAgencyRecommendation?.suggestedPackagePrice}
                    </div>
                  </div>
                </div>

                <div className="lead-card-actions">
                  <button 
                    className="btn-primary" 
                    style={{ padding: "7px 12px", fontSize: "0.78rem" }}
                    onClick={() => onSelectBusiness(b, "pitch")}
                  >
                    <Sparkles size={13} /> Pitch Generator
                  </button>
                  <div style={{ display: "flex", gap: "6px" }}>
                    <button 
                      className="btn-secondary" 
                      style={{ padding: "7px 10px", fontSize: "0.78rem" }}
                      onClick={() => onSelectBusiness(b, "audit")}
                    >
                      Audit
                    </button>
                    <button 
                      className="btn-secondary" 
                      style={{ padding: "7px 10px", fontSize: "0.78rem" }}
                      onClick={() => onSelectBusiness(b, "competitor")}
                    >
                      5KM
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

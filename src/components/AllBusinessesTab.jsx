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
  Table as TableIcon,
  Phone,
  ArrowUpDown
} from "lucide-react";
import { getPriorityBadgeColor } from "../utils/scoring";
import { ALL_INDIAN_STATES } from "../data/panIndiaBusinesses";

export function AllBusinessesTab({ 
  businesses = [], 
  onSelectBusiness, 
  localities = []
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("All India");
  const [selectedLocality, setSelectedLocality] = useState("All");
  const [websiteFilter, setWebsiteFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [channelFilter, setChannelFilter] = useState("all");
  const [hasPhoneOnly, setHasPhoneOnly] = useState(false);
  const [minRating, setMinRating] = useState("0");
  const [minReviews, setMinReviews] = useState("0");
  const [sortBy, setSortBy] = useState("score_desc");
  const [viewMode, setViewMode] = useState("table"); // 'table' or 'grid'

  // Dynamic available cities based on selected state
  const availableCities = React.useMemo(() => {
    const list = new Set();
    businesses.forEach((b) => {
      if (selectedState === "All India" || b.state === selectedState) {
        if (b.city) list.add(b.city);
        else if (b.locality) list.add(b.locality);
      }
    });
    return ["All", ...Array.from(list).sort()];
  }, [businesses, selectedState]);

  // Filter logic
  const filteredBusinesses = businesses.filter((b) => {
    // Search
    const term = searchTerm.toLowerCase();
    const matchesSearch = 
      !term ||
      b.name.toLowerCase().includes(term) ||
      (b.city && b.city.toLowerCase().includes(term)) ||
      (b.state && b.state.toLowerCase().includes(term)) ||
      (b.locality && b.locality.toLowerCase().includes(term)) ||
      (b.phone && b.phone.includes(term)) ||
      (b.address && b.address.toLowerCase().includes(term));
    
    // State
    const matchesState = selectedState === "All India" || b.state === selectedState;

    // Locality / City
    const matchesLocality = 
      selectedLocality === "All" || 
      b.city === selectedLocality || 
      b.locality === selectedLocality;

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

    // Priority filter
    const matchesPriority = 
      priorityFilter === "all" ||
      (priorityFilter === "high" && b.opportunityScore >= 80) ||
      (priorityFilter === "medium_high" && b.opportunityScore >= 60 && b.opportunityScore < 80) ||
      (priorityFilter === "moderate" && b.opportunityScore < 60);

    // Channel filter
    const matchesChannel = 
      channelFilter === "all" || (b.leadChannelType && b.leadChannelType.toLowerCase().includes(channelFilter.toLowerCase()));

    // Has verified phone
    const matchesPhone = !hasPhoneOnly || b.hasPhone;

    // Min rating
    const matchesRating = b.rating >= parseFloat(minRating);

    // Min reviews
    const matchesReviews = b.reviewCount >= parseInt(minReviews, 10);

    return matchesSearch && matchesState && matchesLocality && matchesWebsite && matchesPriority && matchesChannel && matchesPhone && matchesRating && matchesReviews;
  });

  // Sorting logic
  const sortedBusinesses = [...filteredBusinesses].sort((a, b) => {
    if (sortBy === "score_desc") return b.opportunityScore - a.opportunityScore;
    if (sortBy === "reviews_desc") return b.reviewCount - a.reviewCount;
    if (sortBy === "rating_desc") return b.rating - a.rating;
    if (sortBy === "name_asc") return a.name.localeCompare(b.name);
    if (sortBy === "state_asc") return (a.state || "").localeCompare(b.state || "");
    return 0;
  });

  return (
    <div className="all-businesses-container">
      {/* Header and Filter Drawer */}
      <div className="filter-bar-container">
        {/* Row 1: Search, State, City, Website Category, Priority, View Toggle */}
        <div className="filter-row">
          <div className="search-input-wrap">
            <Search size={18} />
            <input 
              type="text" 
              className="custom-input" 
              placeholder="Search by studio name, state, city or phone..." 
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
              setSelectedLocality("All");
            }}
            title="Filter by State or Union Territory"
          >
            <option value="All India">All India (36 States/UTs)</option>
            {ALL_INDIAN_STATES.map((st) => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>

          {/* City / Locality Filter */}
          <select 
            className="custom-select" 
            value={selectedLocality} 
            onChange={(e) => setSelectedLocality(e.target.value)}
            title="Filter by City / Hub"
          >
            {availableCities.map((loc) => (
              <option key={loc} value={loc}>City: {loc}</option>
            ))}
          </select>

          {/* Website Status & Category */}
          <select 
            className="custom-select" 
            value={websiteFilter} 
            onChange={(e) => setWebsiteFilter(e.target.value)}
          >
            <option value="all">Website: All Categories</option>
            <option value="no_website_priority">NO WEBSITE – HIGH PRIORITY</option>
            <option value="social_only">Social Media Only (IG/FB)</option>
            <option value="directory_only">Directory Listing Only</option>
            <option value="no_website">All Without Website</option>
            <option value="has_website">Website Exists (Audited)</option>
          </select>

          {/* Priority */}
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

        {/* Row 2: Sort, Rating, Reviews, Channel, Phone toggle */}
        <div className="filter-row" style={{ paddingTop: "8px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
          <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
            <ArrowUpDown size={12} /> Sort & Refine:
          </span>

          <select 
            className="custom-select" 
            style={{ padding: "6px 12px", fontSize: "0.78rem" }}
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="score_desc">Sort: Opportunity Score (High to Low)</option>
            <option value="reviews_desc">Sort: Review Count (Highest)</option>
            <option value="rating_desc">Sort: Google Rating (Highest)</option>
            <option value="name_asc">Sort: Studio Name (A-Z)</option>
            <option value="state_asc">Sort: State (A-Z)</option>
          </select>

          <select 
            className="custom-select" 
            style={{ padding: "6px 12px", fontSize: "0.78rem" }}
            value={minRating} 
            onChange={(e) => setMinRating(e.target.value)}
          >
            <option value="0">Min Rating: Any</option>
            <option value="4.0">Rating: 4.0+ ★</option>
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
            <option value="50">50+ Reviews</option>
            <option value="100">100+ Reviews</option>
            <option value="200">200+ Reviews</option>
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

          <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.78rem", color: "var(--text-secondary)", cursor: "pointer", userSelect: "none" }}>
            <input 
              type="checkbox" 
              checked={hasPhoneOnly} 
              onChange={(e) => setHasPhoneOnly(e.target.checked)}
              style={{ accentColor: "#10B981" }}
            />
            <span>Verified Phone Only</span>
          </label>

          <div style={{ marginLeft: "auto", fontSize: "0.82rem", color: "var(--text-secondary)" }}>
            Showing <strong>{sortedBusinesses.length}</strong> of {businesses.length} detailing businesses
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
                <th>Google Rating</th>
                <th>Contact Phone</th>
                <th>Website Status</th>
                <th>Category</th>
                <th>Opportunity Score</th>
                <th>Priority</th>
                <th style={{ textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedBusinesses.length === 0 ? (
                <tr>
                  <td colSpan={8} style={{ textAlign: "center", padding: "40px", color: "var(--text-muted)" }}>
                    No detailing studios match the selected filter criteria.
                  </td>
                </tr>
              ) : (
                sortedBusinesses.map((b) => {
                  const badgeStyle = getPriorityBadgeColor(b.priority);
                  return (
                    <tr key={b.id}>
                      <td>
                        <div style={{ fontWeight: 600, color: "#fff", fontSize: "0.92rem", marginBottom: "3px" }}>
                          {b.name}
                        </div>
                        <div style={{ fontSize: "0.76rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "4px" }}>
                          <MapPin size={11} color="#6366F1" />
                          <span>{b.city || b.locality}, {b.state}</span>
                          {b.pinCode && <span style={{ color: "var(--text-muted)" }}>• PIN {b.pinCode}</span>}
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
                            <a href={`tel:${b.phone}`} style={{ color: "#E2E8F0", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                              <Phone size={11} color="#10B981" /> {b.phone}
                            </a>
                          </div>
                        ) : (
                          <span style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>GMB direct</span>
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
                        <span className="badge" style={{ 
                          background: b.websiteCategory?.includes("NO WEBSITE") 
                            ? "rgba(239, 68, 68, 0.15)" 
                            : b.websiteCategory?.includes("SOCIAL")
                            ? "rgba(168, 85, 247, 0.15)"
                            : "rgba(99, 102, 241, 0.15)",
                          color: b.websiteCategory?.includes("NO WEBSITE") 
                            ? "#FCA5A5" 
                            : b.websiteCategory?.includes("SOCIAL")
                            ? "#D8B4FE"
                            : "#A5B4FC",
                          fontSize: "0.72rem"
                        }}>
                          {b.websiteCategory || b.leadChannelType}
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
                          {b.priority ? b.priority.replace(" prospect", "") : "Hot"}
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
                            title="Competitor Radar"
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
          {sortedBusinesses.map((b) => {
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
                    <span className="badge badge-lead-type">{b.leadChannelType}</span>
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
                    <strong>Identified Gap:</strong> {b.opportunityReason}
                  </div>

                  <div className="recommendation-box">
                    <strong>Virtual Agency Solution:</strong> {b.virtualAgencyRecommendation?.recommendedSolution || "Studio Website Package"}
                    <div style={{ color: "#10B981", fontSize: "0.74rem", marginTop: "3px", fontWeight: 600 }}>
                      Price: {b.virtualAgencyRecommendation?.suggestedPackagePrice || "₹30,000"}
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

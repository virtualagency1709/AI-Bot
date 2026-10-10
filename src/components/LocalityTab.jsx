import React, { useState } from "react";
import { 
  MapPin, 
  Star 
} from "lucide-react";

export function LocalityTab({ 
  businesses, 
  onSelectLocalityFilter 
}) {
  const [searchLocality, setSearchLocality] = useState("");

  // Group data by locality
  const localityMap = businesses.reduce((acc, b) => {
    if (!acc[b.locality]) {
      acc[b.locality] = {
        name: b.locality,
        zone: b.zone,
        businesses: [],
        totalReviews: 0,
        ratingsSum: 0,
        withWebsiteCount: 0,
        withoutWebsiteCount: 0
      };
    }
    acc[b.locality].businesses.push(b);
    acc[b.locality].totalReviews += b.reviewCount;
    acc[b.locality].ratingsSum += b.rating;
    if (b.websiteStatus === "Yes") {
      acc[b.locality].withWebsiteCount += 1;
    } else {
      acc[b.locality].withoutWebsiteCount += 1;
    }
    return acc;
  }, {});

  const localitySummaries = Object.values(localityMap)
    .map((loc) => ({
      ...loc,
      count: loc.businesses.length,
      avgRating: (loc.ratingsSum / loc.businesses.length).toFixed(1),
      avgReviews: Math.round(loc.totalReviews / loc.businesses.length),
      webAdoptionRate: Math.round((loc.withWebsiteCount / loc.businesses.length) * 100)
    }))
    .filter((loc) => 
      loc.name.toLowerCase().includes(searchLocality.toLowerCase()) ||
      loc.zone.toLowerCase().includes(searchLocality.toLowerCase())
    )
    .sort((a, b) => b.count - a.count);

  return (
    <div className="locality-tab-container">
      {/* Header Banner */}
      <div className="glass-card" style={{ marginBottom: "24px", borderLeft: "4px solid #A855F7" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px", flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <span className="badge" style={{ background: "rgba(168, 85, 247, 0.2)", color: "#C084FC", border: "1px solid rgba(168, 85, 247, 0.3)" }}>
                <MapPin size={12} /> Geographic Intelligence
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                12 Delhi Hubs Audited
              </span>
            </div>
            <h2 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>
              Locality-Wise Market Saturation & Digital Penetration
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", maxWidth: "850px" }}>
              To ensure comprehensive coverage, Delhi was analyzed across its major automotive detailing hubs. South and West Delhi hold the highest concentration of high-ticket studios, while North and East Delhi show acute website shortages despite high customer review volumes.
            </p>
          </div>

          <div style={{ background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.25)", padding: "12px 18px", borderRadius: "12px" }}>
            <div style={{ color: "var(--text-muted)", fontSize: "0.76rem" }}>Localities Covered</div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, color: "#C084FC" }}>
              {Object.keys(localityMap).length} Hubs
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>Across North, South, West, East, Central</div>
          </div>
        </div>
      </div>

      {/* Search Input */}
      <div style={{ marginBottom: "20px", maxWidth: "380px" }}>
        <input 
          type="text" 
          className="custom-input" 
          placeholder="Filter localities (e.g. Okhla, Rohini, Dwarka)..."
          value={searchLocality}
          onChange={(e) => setSearchLocality(e.target.value)}
        />
      </div>

      {/* Locality Grid */}
      <div className="leads-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))" }}>
        {localitySummaries.map((loc) => {
          return (
            <div key={loc.name} className="lead-card">
              <div>
                <div className="lead-card-top">
                  <div>
                    <h3 style={{ fontSize: "1.15rem" }}>{loc.name}</h3>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                      Zone: <strong style={{ color: "var(--text-primary)" }}>{loc.zone}</strong>
                    </div>
                  </div>
                  <span className="badge" style={{ background: "rgba(99, 102, 241, 0.15)", color: "#818CF8", fontSize: "0.82rem" }}>
                    {loc.count} Studios
                  </span>
                </div>

                {/* Metrics Breakdown */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", margin: "14px 0" }}>
                  <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "10px", borderRadius: "8px" }}>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>Avg Rating</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#FBBF24", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Star size={14} fill="#FBBF24" /> {loc.avgRating}★
                    </div>
                  </div>

                  <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "10px", borderRadius: "8px" }}>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>Avg Reviews</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>
                      {loc.avgReviews}
                    </div>
                  </div>

                  <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "10px", borderRadius: "8px" }}>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>Has Website</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#10B981" }}>
                      {loc.withWebsiteCount}
                    </div>
                  </div>

                  <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "10px", borderRadius: "8px" }}>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>No Website</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#EF4444" }}>
                      {loc.withoutWebsiteCount}
                    </div>
                  </div>
                </div>

                {/* Website Adoption Bar */}
                <div style={{ margin: "12px 0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", marginBottom: "4px" }}>
                    <span style={{ color: "var(--text-secondary)" }}>Website Penetration Rate</span>
                    <strong style={{ color: loc.webAdoptionRate < 50 ? "#EF4444" : "#10B981" }}>
                      {loc.webAdoptionRate}%
                    </strong>
                  </div>
                  <div style={{ height: "6px", background: "rgba(255, 255, 255, 0.06)", borderRadius: "3px", overflow: "hidden" }}>
                    <div 
                      style={{ 
                        width: `${loc.webAdoptionRate}%`, 
                        height: "100%", 
                        background: loc.webAdoptionRate < 50 ? "#EF4444" : "#10B981" 
                      }}
                    ></div>
                  </div>
                </div>

                {/* Studios preview tags */}
                <div style={{ fontSize: "0.76rem", color: "var(--text-muted)", marginTop: "10px" }}>
                  Included studios: {loc.businesses.map(b => b.name).join(", ")}
                </div>
              </div>

              <div className="lead-card-actions" style={{ marginTop: "14px" }}>
                <button 
                  className="btn-primary" 
                  style={{ width: "100%", justifyContent: "center", fontSize: "0.82rem" }}
                  onClick={() => onSelectLocalityFilter(loc.name)}
                >
                  View All Leads in {loc.name} ↗
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

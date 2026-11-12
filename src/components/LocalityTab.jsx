import React, { useState } from "react";
import { 
  MapPin, 
  Star, 
  Sparkles, 
  Search, 
  Layers, 
  Radio, 
  Building2, 
  Globe2, 
  CheckCircle2, 
  RefreshCw,
  TrendingUp,
  Filter
} from "lucide-react";
import { ALL_INDIAN_STATES, SERVICE_CATEGORIES } from "../data/panIndiaBusinesses";
import { executeDiscoveryScan, calculateCoverageStats } from "../utils/discoveryEngine";

export function LocalityTab({ 
  businesses = [], 
  onSelectLocalityFilter,
  onDiscoveryAdd,
  onShowToast
}) {
  const [viewScope, setViewScope] = useState("states"); // 'states' or 'cities'
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedScanState, setSelectedScanState] = useState("Maharashtra");
  const [selectedScanCity, setSelectedScanCity] = useState("");
  const [selectedScanCategory, setSelectedScanCategory] = useState("Car Detailing Studio");
  const [isScanning, setIsScanning] = useState(false);
  const [scanResultNotice, setScanResultNotice] = useState(null);

  // Group data by State
  const stateMap = businesses.reduce((acc, b) => {
    const st = b.state || "Delhi";
    if (!acc[st]) {
      acc[st] = {
        state: st,
        zone: b.zone || "North India",
        businesses: [],
        cities: new Set(),
        totalReviews: 0,
        ratingsSum: 0,
        withWebsiteCount: 0,
        withoutWebsiteCount: 0,
        highPriorityCount: 0,
        verifiedPhoneCount: 0
      };
    }
    acc[st].businesses.push(b);
    if (b.city) acc[st].cities.add(b.city);
    acc[st].totalReviews += b.reviewCount || 0;
    acc[st].ratingsSum += b.rating || 0;
    if (b.websiteStatus === "Yes") {
      acc[st].withWebsiteCount += 1;
    } else {
      acc[st].withoutWebsiteCount += 1;
    }
    if (b.opportunityScore >= 80) {
      acc[st].highPriorityCount += 1;
    }
    if (b.hasPhone) {
      acc[st].verifiedPhoneCount += 1;
    }
    return acc;
  }, {});

  // Group data by City / Locality
  const cityMap = businesses.reduce((acc, b) => {
    const key = `${b.city || b.locality}, ${b.state || "India"}`;
    if (!acc[key]) {
      acc[key] = {
        name: b.city || b.locality,
        state: b.state || "Delhi",
        zone: b.zone || "Metro",
        businesses: [],
        totalReviews: 0,
        ratingsSum: 0,
        withWebsiteCount: 0,
        withoutWebsiteCount: 0,
        highPriorityCount: 0
      };
    }
    acc[key].businesses.push(b);
    acc[key].totalReviews += b.reviewCount || 0;
    acc[key].ratingsSum += b.rating || 0;
    if (b.websiteStatus === "Yes") {
      acc[key].withWebsiteCount += 1;
    } else {
      acc[key].withoutWebsiteCount += 1;
    }
    if (b.opportunityScore >= 80) {
      acc[key].highPriorityCount += 1;
    }
    return acc;
  }, {});

  // State summaries
  const stateSummaries = Object.values(stateMap)
    .map(st => ({
      ...st,
      count: st.businesses.length,
      citiesCount: st.cities.size,
      avgRating: (st.ratingsSum / st.businesses.length).toFixed(1),
      avgReviews: Math.round(st.totalReviews / st.businesses.length),
      webAdoptionRate: Math.round((st.withWebsiteCount / st.businesses.length) * 100),
      topCities: Array.from(st.cities).slice(0, 3).join(", ")
    }))
    .filter(st => 
      st.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      st.zone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      st.topCities.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => b.count - a.count);

  // City summaries
  const citySummaries = Object.values(cityMap)
    .map(c => ({
      ...c,
      count: c.businesses.length,
      avgRating: (c.ratingsSum / c.businesses.length).toFixed(1),
      avgReviews: Math.round(c.totalReviews / c.businesses.length),
      webAdoptionRate: Math.round((c.withWebsiteCount / c.businesses.length) * 100)
    }))
    .filter(c => 
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.state.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => b.count - a.count);

  // Discovery Scan Trigger
  const handleTriggerScan = () => {
    setIsScanning(true);
    setScanResultNotice(null);

    setTimeout(() => {
      const scanResult = executeDiscoveryScan(
        selectedScanState, 
        selectedScanCity || "Major Automotive Hub", 
        businesses
      );

      setIsScanning(false);

      if (scanResult.addedCount > 0) {
        if (onDiscoveryAdd) {
          onDiscoveryAdd(scanResult.newBusinesses);
        }
        const notice = `Discovered ${scanResult.scannedCount} studios in ${selectedScanState}. Added ${scanResult.addedCount} new verified leads (${scanResult.duplicatesFiltered} duplicate excluded).`;
        setScanResultNotice({ type: "success", text: notice });
        if (onShowToast) onShowToast(notice);
      } else {
        const notice = `Scan complete for ${selectedScanState}: All ${scanResult.scannedCount} studios already verified and indexed. Zero duplicates added.`;
        setScanResultNotice({ type: "info", text: notice });
        if (onShowToast) onShowToast(notice);
      }
    }, 900);
  };

  return (
    <div className="locality-tab-container">
      {/* Top Banner */}
      <div className="glass-card" style={{ marginBottom: "24px", borderLeft: "4px solid #A855F7" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px", flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <span className="badge" style={{ background: "rgba(168, 85, 247, 0.2)", color: "#C084FC", border: "1px solid rgba(168, 85, 247, 0.3)" }}>
                <MapPin size={12} /> Pan-India Geographic Intelligence
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                All 36 States & UTs Monitored
              </span>
            </div>
            <h2 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>
              Pan-India State & City Coverage Radar
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", maxWidth: "850px" }}>
              Tracking digital penetration across India's car detailing hubs. High-density automotive centers in Maharashtra, Delhi NCR, Karnataka, Tamil Nadu, and Gujarat demonstrate the sharpest website deficits for premium PPF and Ceramic Coating studios.
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <div style={{ background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.25)", padding: "12px 18px", borderRadius: "12px" }}>
              <div style={{ color: "var(--text-muted)", fontSize: "0.76rem" }}>States & UTs Active</div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, color: "#C084FC" }}>
                {Object.keys(stateMap).length} / 36
              </div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>100% Pan-India Scope</div>
            </div>

            <div style={{ background: "rgba(99, 102, 241, 0.1)", border: "1px solid rgba(99, 102, 241, 0.25)", padding: "12px 18px", borderRadius: "12px" }}>
              <div style={{ color: "var(--text-muted)", fontSize: "0.76rem" }}>Cities & Hubs Indexed</div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, color: "#818CF8" }}>
                {Object.keys(cityMap).length}
              </div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>Metros to Tier-3</div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Discovery Scan Box */}
      <div className="glass-card" style={{ marginBottom: "24px", border: "1px solid rgba(99, 102, 241, 0.35)", background: "rgba(15, 23, 42, 0.85)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
          <Radio size={16} color="#10B981" />
          <h3 style={{ fontSize: "1.05rem", color: "#fff" }}>
            Nationwide Multi-State Discovery Engine
          </h3>
          <span className="badge" style={{ background: "rgba(16, 185, 129, 0.2)", color: "#34D399", fontSize: "0.72rem" }}>
            Automated Deduplication Active
          </span>
        </div>

        <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
          Launch live reconnaissance across any state or city to uncover newly registered detailing studios, PPF centers, and ceramic coating studios without websites.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", alignItems: "end" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.74rem", color: "var(--text-muted)", marginBottom: "4px" }}>
              Target State / UT:
            </label>
            <select
              className="custom-select"
              value={selectedScanState}
              onChange={(e) => setSelectedScanState(e.target.value)}
              style={{ width: "100%" }}
            >
              {ALL_INDIAN_STATES.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.74rem", color: "var(--text-muted)", marginBottom: "4px" }}>
              City / Commercial Hub:
            </label>
            <input
              type="text"
              className="custom-input"
              placeholder="e.g. Pune, Navi Mumbai, Nagpur..."
              value={selectedScanCity}
              onChange={(e) => setSelectedScanCity(e.target.value)}
              style={{ width: "100%" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.74rem", color: "var(--text-muted)", marginBottom: "4px" }}>
              Service Category:
            </label>
            <select
              className="custom-select"
              value={selectedScanCategory}
              onChange={(e) => setSelectedScanCategory(e.target.value)}
              style={{ width: "100%" }}
            >
              {SERVICE_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <button
              className="btn-primary"
              style={{ width: "100%", height: "40px", justifyContent: "center" }}
              onClick={handleTriggerScan}
              disabled={isScanning}
            >
              {isScanning ? (
                <>
                  <RefreshCw size={15} className="spin-animation" />
                  <span>Scanning GMB & Web...</span>
                </>
              ) : (
                <>
                  <Sparkles size={15} />
                  <span>Execute Discovery Scan</span>
                </>
              )}
            </button>
          </div>
        </div>

        {scanResultNotice && (
          <div style={{ 
            marginTop: "14px", 
            padding: "10px 14px", 
            borderRadius: "8px", 
            background: scanResultNotice.type === "success" ? "rgba(16, 185, 129, 0.15)" : "rgba(99, 102, 241, 0.15)",
            border: `1px solid ${scanResultNotice.type === "success" ? "#10B981" : "#6366F1"}`,
            color: "#fff",
            fontSize: "0.82rem",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
            <CheckCircle2 size={16} color={scanResultNotice.type === "success" ? "#10B981" : "#818CF8"} />
            <span>{scanResultNotice.text}</span>
          </div>
        )}
      </div>

      {/* Control Bar: View Scope Toggle and Search */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", marginBottom: "20px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", gap: "8px" }}>
          <button 
            className={`filter-pill-btn ${viewScope === "states" ? "active" : ""}`}
            onClick={() => setViewScope("states")}
          >
            <Building2 size={14} /> State Coverage Radar ({stateSummaries.length})
          </button>
          <button 
            className={`filter-pill-btn ${viewScope === "cities" ? "active" : ""}`}
            onClick={() => setViewScope("cities")}
          >
            <MapPin size={14} /> City & Hub Breakdown ({citySummaries.length})
          </button>
        </div>

        <div style={{ maxWidth: "340px", width: "100%" }}>
          <input 
            type="text" 
            className="custom-input" 
            placeholder={viewScope === "states" ? "Search state or zone..." : "Search city or locality..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
      </div>

      {/* STATES VIEW */}
      {viewScope === "states" && (
        <div className="leads-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))" }}>
          {stateSummaries.map((st) => (
            <div key={st.state} className="lead-card">
              <div>
                <div className="lead-card-top">
                  <div>
                    <h3 style={{ fontSize: "1.15rem" }}>{st.state}</h3>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                      Zone: <strong style={{ color: "var(--text-primary)" }}>{st.zone}</strong> • {st.citiesCount} Cities
                    </div>
                  </div>
                  <span className="badge" style={{ background: "rgba(99, 102, 241, 0.15)", color: "#818CF8", fontSize: "0.82rem" }}>
                    {st.count} Studios
                  </span>
                </div>

                {/* Metrics Breakdown */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", margin: "14px 0" }}>
                  <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "10px", borderRadius: "8px" }}>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>Avg Rating</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#FBBF24", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Star size={14} fill="#FBBF24" /> {st.avgRating}★
                    </div>
                  </div>

                  <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "10px", borderRadius: "8px" }}>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>Avg Reviews</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>
                      {st.avgReviews}
                    </div>
                  </div>

                  <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "10px", borderRadius: "8px" }}>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>No Website</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#EF4444" }}>
                      {st.withoutWebsiteCount}
                    </div>
                  </div>

                  <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "10px", borderRadius: "8px" }}>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>High-Priority</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#F59E0B" }}>
                      {st.highPriorityCount}
                    </div>
                  </div>
                </div>

                {/* Website Adoption Bar */}
                <div style={{ margin: "12px 0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", marginBottom: "4px" }}>
                    <span style={{ color: "var(--text-secondary)" }}>Website Penetration</span>
                    <strong style={{ color: st.webAdoptionRate < 50 ? "#EF4444" : "#10B981" }}>
                      {st.webAdoptionRate}%
                    </strong>
                  </div>
                  <div style={{ height: "6px", background: "rgba(255, 255, 255, 0.06)", borderRadius: "3px", overflow: "hidden" }}>
                    <div 
                      style={{ 
                        width: `${st.webAdoptionRate}%`, 
                        height: "100%", 
                        background: st.webAdoptionRate < 50 ? "#EF4444" : "#10B981" 
                      }}
                    ></div>
                  </div>
                </div>

                <div style={{ fontSize: "0.76rem", color: "var(--text-muted)", marginTop: "10px" }}>
                  Active Hubs: {st.topCities || "Statewide coverage"}
                </div>
              </div>

              <div className="lead-card-actions" style={{ marginTop: "14px" }}>
                <button 
                  className="btn-primary" 
                  style={{ width: "100%", justifyContent: "center", fontSize: "0.82rem" }}
                  onClick={() => onSelectLocalityFilter(st.state)}
                >
                  View All Leads in {st.state} ↗
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CITIES VIEW */}
      {viewScope === "cities" && (
        <div className="leads-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))" }}>
          {citySummaries.map((c) => (
            <div key={`${c.name}-${c.state}`} className="lead-card">
              <div>
                <div className="lead-card-top">
                  <div>
                    <h3 style={{ fontSize: "1.15rem" }}>{c.name}</h3>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                      State: <strong style={{ color: "var(--text-primary)" }}>{c.state}</strong>
                    </div>
                  </div>
                  <span className="badge" style={{ background: "rgba(99, 102, 241, 0.15)", color: "#818CF8", fontSize: "0.82rem" }}>
                    {c.count} Studios
                  </span>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", margin: "14px 0" }}>
                  <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "10px", borderRadius: "8px" }}>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>Avg Rating</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#FBBF24", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Star size={14} fill="#FBBF24" /> {c.avgRating}★
                    </div>
                  </div>

                  <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "10px", borderRadius: "8px" }}>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>Avg Reviews</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>
                      {c.avgReviews}
                    </div>
                  </div>

                  <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "10px", borderRadius: "8px" }}>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>No Website</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#EF4444" }}>
                      {c.withoutWebsiteCount}
                    </div>
                  </div>

                  <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "10px", borderRadius: "8px" }}>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>High Priority</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#F59E0B" }}>
                      {c.highPriorityCount}
                    </div>
                  </div>
                </div>

                <div style={{ margin: "12px 0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", marginBottom: "4px" }}>
                    <span style={{ color: "var(--text-secondary)" }}>Website Penetration</span>
                    <strong style={{ color: c.webAdoptionRate < 50 ? "#EF4444" : "#10B981" }}>
                      {c.webAdoptionRate}%
                    </strong>
                  </div>
                  <div style={{ height: "6px", background: "rgba(255, 255, 255, 0.06)", borderRadius: "3px", overflow: "hidden" }}>
                    <div 
                      style={{ 
                        width: `${c.webAdoptionRate}%`, 
                        height: "100%", 
                        background: c.webAdoptionRate < 50 ? "#EF4444" : "#10B981" 
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="lead-card-actions" style={{ marginTop: "14px" }}>
                <button 
                  className="btn-primary" 
                  style={{ width: "100%", justifyContent: "center", fontSize: "0.82rem" }}
                  onClick={() => onSelectLocalityFilter(c.name)}
                >
                  View All Leads in {c.name} ↗
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

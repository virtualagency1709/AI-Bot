import React, { useState } from "react";
import { 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Gauge, 
  Smartphone, 
  Lock, 
  Car, 
  MessageCircle, 
  Calendar, 
  MapPin, 
  Star, 
  Sparkles,
  ExternalLink,
  Target,
  FileText,
  DollarSign
} from "lucide-react";

export function WebsiteAuditTab({ 
  businesses, 
  initialBusiness, 
  onSelectBusiness 
}) {
  const [selectedBusinessId, setSelectedBusinessId] = useState(
    initialBusiness?.id || businesses[0]?.id
  );

  const currentBusiness = businesses.find((b) => b.id === selectedBusinessId) || businesses[0];
  const wa = currentBusiness?.websiteAudit || {};
  const hasWebsite = currentBusiness?.websiteStatus === "Yes";

  const checklistItems = [
    { label: "Mobile Responsive Layout", passed: wa.mobileFriendly, icon: Smartphone },
    { label: "HTTPS / SSL Certificate Active", passed: wa.https, icon: Lock },
    { label: "Mobile Speed Score ≥ 70", passed: (wa.speedScore || 0) >= 70, score: wa.speedScore, icon: Gauge },
    { label: "Dedicated PPF Landing Page", passed: wa.hasDedicatedPpfPage, icon: Car },
    { label: "Dedicated Ceramic Coating Page", passed: wa.hasDedicatedCeramicPage, icon: Car },
    { label: "Interactive Pricing / Package Estimator", passed: wa.hasPricingCalculator, icon: DollarSign },
    { label: "WhatsApp Floating Enquiry Widget", passed: wa.hasWhatsAppWidget, icon: MessageCircle },
    { label: "Click-to-Call Phone Button", passed: wa.hasClickToCall, icon: Smartphone },
    { label: "Online Appointment Booking Engine", passed: wa.hasOnlineBooking, icon: Calendar },
    { label: "Website Contact / Lead Form", passed: wa.hasContactForm, icon: FileText },
    { label: "Google Maps Embed & Directions", passed: wa.hasMapsEmbed, icon: MapPin },
    { label: "Customer Testimonials & Proof", passed: wa.hasTestimonials, icon: Star },
    { label: "LocalBusiness Schema Markup", passed: wa.hasStructuredData, icon: ShieldCheck },
  ];

  const passedCount = checklistItems.filter(item => item.passed).length;
  const auditHealthScore = hasWebsite ? Math.round((passedCount / checklistItems.length) * 100) : 0;

  return (
    <div className="website-audit-container">
      {/* Header Banner */}
      <div className="glass-card" style={{ marginBottom: "24px", borderLeft: "4px solid #F59E0B" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px", flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <span className="badge" style={{ background: "rgba(245, 158, 11, 0.2)", color: "#FBBF24", border: "1px solid rgba(245, 158, 11, 0.3)" }}>
                <Gauge size={12} /> Technical & CRO Audit Engine
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                Evidence-Backed Audit Checklist
              </span>
            </div>
            <h2 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>
              Comprehensive Website & Lead Conversion Audit
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", maxWidth: "850px" }}>
              Evaluates 13 critical technical and conversion factors that directly determine whether a visiting car owner books a ₹50,000+ PPF or ceramic coating job or bounces to a competitor. Supporting evidence is documented for every identified gap.
            </p>
          </div>

          <div style={{ background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.25)", padding: "12px 18px", borderRadius: "12px", textAlign: "right" }}>
            <div style={{ color: "var(--text-muted)", fontSize: "0.76rem" }}>Audit Health Score</div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", fontWeight: 700, color: hasWebsite ? (auditHealthScore > 65 ? "#10B981" : "#F59E0B") : "#EF4444" }}>
              {hasWebsite ? `${auditHealthScore}/100` : "0/100 (No Web)"}
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>
              {hasWebsite ? `${passedCount} of ${checklistItems.length} factors passed` : "Zero web presence detected"}
            </div>
          </div>
        </div>
      </div>

      {/* Studio Selector Bar */}
      <div className="filter-bar-container" style={{ marginBottom: "24px" }}>
        <div className="filter-row">
          <label style={{ fontSize: "0.86rem", fontWeight: 600, color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "6px" }}>
            <Target size={15} color="#6366F1" /> Select Studio to Run In-Depth Audit:
          </label>
          <select 
            className="custom-select" 
            style={{ minWidth: "320px", flex: 1 }}
            value={selectedBusinessId} 
            onChange={(e) => setSelectedBusinessId(e.target.value)}
          >
            {businesses.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name} ({b.locality}) — {b.websiteStatus === "Yes" ? "Website Active" : "No Website"}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Business Header Snapshot */}
      <div className="glass-card" style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "14px" }}>
          <div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "4px" }}>{currentBusiness.name}</h3>
            <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "10px" }}>
              <span><MapPin size={12} style={{ display: "inline" }} /> {currentBusiness.address}</span>
              <span>•</span>
              <span><Star size={12} fill="#FBBF24" color="#FBBF24" style={{ display: "inline" }} /> {currentBusiness.rating}★ ({currentBusiness.reviewCount} reviews)</span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {hasWebsite ? (
              <a 
                href={currentBusiness.website} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-secondary"
                style={{ fontSize: "0.82rem" }}
              >
                Inspect Live Site <ExternalLink size={12} />
              </a>
            ) : (
              <span className="badge badge-no" style={{ fontSize: "0.85rem", padding: "6px 14px" }}>
                No Verified Website Exists
              </span>
            )}
            <button 
              className="btn-primary"
              style={{ fontSize: "0.82rem" }}
              onClick={() => onSelectBusiness(currentBusiness, "pitch")}
            >
              <Sparkles size={13} /> Generate Sales Pitch
            </button>
          </div>
        </div>
      </div>

      {/* Audit Checklist Grid */}
      <div className="glass-card" style={{ marginBottom: "24px" }}>
        <h4 style={{ fontSize: "1.05rem", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span>13-Point Technical & Conversion Audit Checklist</span>
        </h4>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px" }}>
          {checklistItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between",
                  background: item.passed ? "rgba(16, 185, 129, 0.05)" : "rgba(239, 68, 68, 0.05)",
                  border: `1px solid ${item.passed ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)"}`,
                  padding: "12px 14px",
                  borderRadius: "10px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Icon size={16} color={item.passed ? "#10B981" : "#EF4444"} />
                  <span style={{ fontSize: "0.82rem", color: "#F8FAFC" }}>{item.label}</span>
                </div>
                <div>
                  {item.passed ? (
                    <span className="badge badge-yes" style={{ fontSize: "0.72rem" }}>
                      <CheckCircle2 size={11} /> Pass {item.score ? `(${item.score})` : ""}
                    </span>
                  ) : (
                    <span className="badge badge-no" style={{ fontSize: "0.72rem" }}>
                      <XCircle size={11} /> Gap {item.score !== undefined ? `(${item.score})` : ""}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Identified Weaknesses with Exact Evidence */}
      <div className="glass-card" style={{ marginBottom: "24px" }}>
        <h4 style={{ fontSize: "1.05rem", marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
          <AlertTriangle size={18} color="#EF4444" />
          <span>Identified Weaknesses & Supporting Evidence</span>
        </h4>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {wa.identifiedWeaknesses && wa.identifiedWeaknesses.length > 0 ? (
            wa.identifiedWeaknesses.map((w, idx) => (
              <div 
                key={idx}
                style={{ 
                  background: "rgba(239, 68, 68, 0.06)", 
                  borderLeft: "4px solid #EF4444", 
                  padding: "14px 18px", 
                  borderRadius: "0 10px 10px 0" 
                }}
              >
                <div style={{ fontWeight: 700, color: "#F87171", fontSize: "0.92rem", marginBottom: "4px" }}>
                  Issue #{idx + 1}: {w.issue}
                </div>
                <div style={{ fontSize: "0.84rem", color: "#E2E8F0", lineHeight: 1.5 }}>
                  <strong style={{ color: "var(--text-secondary)" }}>Supporting Evidence: </strong>
                  {w.evidence}
                </div>
              </div>
            ))
          ) : (
            <div style={{ padding: "20px", color: "var(--text-muted)" }}>
              No specific weaknesses logged.
            </div>
          )}
        </div>
      </div>

      {/* Tailored Virtual Agency Solution Package */}
      <div className="glass-card" style={{ borderLeft: "4px solid #10B981" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", flexWrap: "wrap", marginBottom: "14px" }}>
          <div>
            <span className="badge" style={{ background: "rgba(16, 185, 129, 0.15)", color: "#34D399", border: "1px solid rgba(16, 185, 129, 0.3)", marginBottom: "6px" }}>
              Virtual Agency Recommended Implementation
            </span>
            <h4 style={{ fontSize: "1.2rem", marginTop: "4px" }}>
              {currentBusiness.virtualAgencyRecommendation?.recommendedSolution}
            </h4>
          </div>

          <div style={{ background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.25)", padding: "10px 16px", borderRadius: "10px", textAlign: "right" }}>
            <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>Suggested Package Price</div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: 700, color: "#10B981" }}>
              {currentBusiness.virtualAgencyRecommendation?.suggestedPackagePrice}
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px", fontSize: "0.84rem" }}>
          <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "14px", borderRadius: "10px" }}>
            <strong style={{ color: "var(--text-secondary)", display: "block", marginBottom: "4px" }}>Why It Matters (Business ROI):</strong>
            <p style={{ color: "#E2E8F0" }}>{currentBusiness.virtualAgencyRecommendation?.whyItMatters}</p>
          </div>

          <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "14px", borderRadius: "10px" }}>
            <strong style={{ color: "var(--text-secondary)", display: "block", marginBottom: "4px" }}>Implementation Roadmap:</strong>
            <p style={{ color: "#E2E8F0" }}>{currentBusiness.virtualAgencyRecommendation?.suggestedImplementation}</p>
          </div>

          <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "14px", borderRadius: "10px" }}>
            <strong style={{ color: "var(--text-secondary)", display: "block", marginBottom: "4px" }}>KPIs to Track:</strong>
            <p style={{ color: "#E2E8F0" }}>{currentBusiness.virtualAgencyRecommendation?.kpisToTrack}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

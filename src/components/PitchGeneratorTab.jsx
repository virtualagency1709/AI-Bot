import React, { useState } from "react";
import { 
  Sparkles, 
  MessageCircle, 
  Mail, 
  PhoneCall, 
  Clock, 
  FileText, 
  Copy, 
  Check, 
  Target,
  Send,
  MapPin
} from "lucide-react";
import { generateAllPitches } from "../utils/pitchGenerator";

function InstagramIcon({ size = 14, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export function PitchGeneratorTab({ 
  businesses, 
  initialBusiness,
  onShowToast 
}) {
  const [selectedBusinessId, setSelectedBusinessId] = useState(
    initialBusiness?.id || businesses[0]?.id
  );
  const [activeFormat, setActiveFormat] = useState("whatsapp"); // 'whatsapp', 'english', 'instagram', 'calling', 'followup', 'summary'
  const [copiedKey, setCopiedKey] = useState(null);

  const currentBusiness = businesses.find((b) => b.id === selectedBusinessId) || businesses[0];
  const pitches = generateAllPitches(currentBusiness);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    if (onShowToast) onShowToast("Pitch copied to clipboard!");
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const formats = [
    { id: "whatsapp", label: "WhatsApp (Natural Hinglish)", icon: MessageCircle, badge: "Most Popular" },
    { id: "english", label: "Professional English (Email)", icon: Mail },
    { id: "instagram", label: "Instagram DM", icon: InstagramIcon },
    { id: "calling", label: "Cold Calling Script (SDR)", icon: PhoneCall, badge: "5-Stage Script" },
    { id: "followup", label: "48h Follow-up", icon: Clock },
    { id: "summary", label: "Audit Snapshot", icon: FileText },
  ];

  const getActiveText = () => {
    switch (activeFormat) {
      case "whatsapp": return pitches.whatsappPitch;
      case "english": return pitches.englishPitch;
      case "instagram": return pitches.instagramDm;
      case "calling": return pitches.callingScript;
      case "followup": return pitches.followUpMessage;
      case "summary": return pitches.auditSummary;
      default: return "";
    }
  };

  return (
    <div className="pitch-generator-container">
      {/* Header Banner */}
      <div className="glass-card" style={{ marginBottom: "24px", borderLeft: "4px solid #10B981" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px", flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <span className="badge" style={{ background: "rgba(16, 185, 129, 0.2)", color: "#34D399", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                <Sparkles size={12} /> Personalized Sales Pitch Engine
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                Tailored for Virtual Agency Sales Representatives
              </span>
            </div>
            <h2 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>
              Multi-Channel Outreach Studio for {currentBusiness.name}
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", maxWidth: "850px" }}>
              Generates verified, non-spammy sales pitches across 5 outreach formats. Every pitch incorporates real business observations, Google review counts, and 5 KM competitor dynamics to provide a compelling, high-converting value proposition.
            </p>
          </div>

          <div style={{ background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.25)", padding: "12px 18px", borderRadius: "12px" }}>
            <div style={{ color: "var(--text-muted)", fontSize: "0.76rem" }}>Agency Rep Info</div>
            <strong style={{ color: "#34D399", fontSize: "0.95rem" }}>Virtual Agency, India</strong>
            <div style={{ fontSize: "0.74rem", color: "var(--text-secondary)", marginTop: "2px" }}>
              7838056998 | info@virtualagency.in
            </div>
          </div>
        </div>
      </div>

      {/* Target Studio Selector */}
      <div className="filter-bar-container" style={{ marginBottom: "24px" }}>
        <div className="filter-row">
          <label style={{ fontSize: "0.86rem", fontWeight: 600, color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "6px" }}>
            <Target size={15} color="#6366F1" /> Target Lead for Pitch Generation:
          </label>
          <select 
            className="custom-select" 
            style={{ minWidth: "340px", flex: 1 }}
            value={selectedBusinessId} 
            onChange={(e) => setSelectedBusinessId(e.target.value)}
          >
            {businesses.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name} ({b.locality}) — {b.opportunityScore}/100 [{b.priority.replace(" prospect", "")}]
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Studio Pitch Card */}
      <div className="glass-card">
        {/* Selected Prospect Mini Bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "16px", borderBottom: "1px solid var(--border-subtle)", marginBottom: "18px", flexWrap: "wrap", gap: "12px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h3 style={{ fontSize: "1.2rem" }}>{currentBusiness.name}</h3>
              <span className={`badge ${currentBusiness.websiteStatus === "Yes" ? "badge-yes" : "badge-no"}`}>
                {currentBusiness.websiteStatus === "Yes" ? "Has Website" : "No Website"}
              </span>
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "3px" }}>
              <MapPin size={12} style={{ display: "inline" }} /> {currentBusiness.locality} | {currentBusiness.rating}★ ({currentBusiness.reviewCount} reviews) | Phone: {currentBusiness.phone || "Not found"}
            </div>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            {pitches.waUrl && (
              <a 
                href={pitches.waUrl}
                target="_blank" 
                rel="noreferrer"
                className="btn-whatsapp"
                style={{ textDecoration: "none" }}
              >
                <Send size={14} /> 1-Click Send on WhatsApp Web
              </a>
            )}
            {currentBusiness.phone && (
              <a 
                href={`tel:${currentBusiness.phone}`}
                className="btn-call"
                style={{ textDecoration: "none" }}
              >
                <PhoneCall size={14} /> Call Now
              </a>
            )}
          </div>
        </div>

        {/* Pitch Format Tabs */}
        <div style={{ display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "10px", marginBottom: "16px" }}>
          {formats.map((f) => {
            const Icon = f.icon;
            const isActive = activeFormat === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFormat(f.id)}
                className={`filter-pill-btn ${isActive ? "active" : ""}`}
                style={{ padding: "8px 14px", fontSize: "0.84rem" }}
              >
                <Icon size={14} />
                <span>{f.label}</span>
                {f.badge && (
                  <span style={{ fontSize: "0.68rem", background: isActive ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)", padding: "1px 6px", borderRadius: "10px" }}>
                    {f.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Pitch Content Display Box */}
        <div style={{ position: "relative" }}>
          <div className="pitch-code-block" style={{ maxHeight: "420px", fontSize: "0.9rem" }}>
            {getActiveText()}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "14px", flexWrap: "wrap", gap: "10px" }}>
            <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
              ✓ Verified token replacement: Studio Name, Locality, 5KM Competitor ({currentBusiness.competitors5Km?.[0]?.name}), Virtual Agency details.
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button 
                className="btn-secondary"
                onClick={() => handleCopy(getActiveText(), activeFormat)}
              >
                {copiedKey === activeFormat ? (
                  <>
                    <Check size={14} color="#10B981" /> Copied to Clipboard!
                  </>
                ) : (
                  <>
                    <Copy size={14} /> Copy Pitch Text
                  </>
                )}
              </button>

              {activeFormat === "whatsapp" && pitches.waUrl && (
                <a 
                  href={pitches.waUrl}
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-whatsapp"
                  style={{ textDecoration: "none" }}
                >
                  <MessageCircle size={14} /> Launch WhatsApp Chat
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { 
  MapPin, 
  Phone, 
  Globe, 
  Mail, 
  Layers, 
  ShieldCheck, 
  Car
} from "lucide-react";

export function Header({ 
  totalCount
}) {
  return (
    <header className="header-wrapper">
      {/* Top Bar with Agency Brand & Contact */}
      <div className="header-top">
        <div className="brand-section">
          <div className="brand-logo-icon">
            <Car size={24} />
          </div>
          <div className="brand-text">
            <h1>
              LocalLead AI <span className="badge-ai">Enterprise Bot</span>
            </h1>
            <div className="brand-subtitle">
              <span>Business Prospecting & Competitor Intelligence for</span>
              <a 
                href="https://virtualagency.in/" 
                target="_blank" 
                rel="noreferrer" 
                className="agency-chip"
              >
                Virtual Agency, India ↗
              </a>
            </div>
          </div>
        </div>

        {/* Agency Quick Reach Bar */}
        <div className="header-agency-info">
          <div className="agency-contact-pill">
            <Phone size={14} color="#10B981" />
            <span>Call: <strong>7838056998</strong></span>
          </div>
          <div className="agency-contact-pill">
            <Mail size={14} color="#6366F1" />
            <span><strong>info@virtualagency.in</strong></span>
          </div>
          <a 
            href="https://virtualagency.in/" 
            target="_blank" 
            rel="noreferrer" 
            className="agency-contact-pill" 
            style={{ textDecoration: 'none' }}
          >
            <Globe size={14} color="#06B6D4" />
            <span>virtualagency.in</span>
          </a>
        </div>
      </div>

      {/* Search Configuration Ribbon */}
      <div className="config-ribbon">
        <div className="config-ribbon-inner">
          <div className="config-items-group">
            <div className="config-chip">
              <MapPin size={13} color="#EF4444" />
              <span>Target:</span>
              <span className="val">Delhi NCR, India</span>
            </div>
            <div className="config-chip">
              <Car size={13} color="#06B6D4" />
              <span>Category:</span>
              <span className="val">Car Detailing (PPF & Ceramic)</span>
            </div>
            <div className="config-chip">
              <Layers size={13} color="#A855F7" />
              <span>Search Radius:</span>
              <span className="val">5 KM Radius Analysis</span>
            </div>
            <div className="config-chip">
              <ShieldCheck size={13} color="#10B981" />
              <span>Deduplication:</span>
              <span className="val">100% Unique Verified</span>
            </div>
          </div>

          <div className="search-progress-badge">
            <div className="status-dot"></div>
            <span>Verified Lead Pipeline Active ({totalCount} Studios Scanned)</span>
          </div>
        </div>
      </div>
    </header>
  );
}

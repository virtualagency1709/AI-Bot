import React from "react";
import { 
  MapPin, 
  Phone, 
  Globe, 
  Mail, 
  Layers, 
  ShieldCheck, 
  Car,
  MessageSquare
} from "lucide-react";
import { VIRTUAL_AGENCY_CONTACT } from "../config/agencyContact";

export function Header({ 
  totalCount,
  activeStateFilter = "All India"
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
              LocalLead AI <span className="badge-ai">Pan-India Lead Engine</span>
            </h1>
            <div className="brand-subtitle">
              <span>Car Detailing Lead Generation & Competitor Intelligence for</span>
              <a 
                href={VIRTUAL_AGENCY_CONTACT.websiteUrl} 
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
          <a 
            href={`tel:+91${VIRTUAL_AGENCY_CONTACT.phone}`}
            className="agency-contact-pill"
            style={{ textDecoration: 'none' }}
            title="Call Virtual Agency Sales Desk"
          >
            <Phone size={14} color="#10B981" />
            <span>Call: <strong>{VIRTUAL_AGENCY_CONTACT.phoneDisplay}</strong></span>
          </a>
          <a 
            href={VIRTUAL_AGENCY_CONTACT.getWhatsAppUrl("Hello Virtual Agency, I would like to inquire about car detailing leads and website design packages.")}
            target="_blank" 
            rel="noreferrer"
            className="agency-contact-pill"
            style={{ textDecoration: 'none' }}
            title="WhatsApp Virtual Agency"
          >
            <MessageSquare size={14} color="#25D366" />
            <span>WhatsApp: <strong>{VIRTUAL_AGENCY_CONTACT.phoneDisplay}</strong></span>
          </a>
          <a 
            href={`mailto:${VIRTUAL_AGENCY_CONTACT.email}`}
            className="agency-contact-pill"
            style={{ textDecoration: 'none' }}
          >
            <Mail size={14} color="#6366F1" />
            <span><strong>{VIRTUAL_AGENCY_CONTACT.email}</strong></span>
          </a>
          <a 
            href={VIRTUAL_AGENCY_CONTACT.websiteUrl} 
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
              <span>Target Scope:</span>
              <span className="val">{activeStateFilter === "All India" ? "Pan-India (All 36 States & UTs)" : activeStateFilter}</span>
            </div>
            <div className="config-chip">
              <Car size={13} color="#06B6D4" />
              <span>Category:</span>
              <span className="val">Car Detailing, PPF, Ceramic & Car Washing</span>
            </div>
            <div className="config-chip">
              <Layers size={13} color="#A855F7" />
              <span>Coverage:</span>
              <span className="val">Metros, Tier-2 & Tier-3 Cities</span>
            </div>
            <div className="config-chip">
              <ShieldCheck size={13} color="#10B981" />
              <span>Deduplication:</span>
              <span className="val">100% Unique Verified</span>
            </div>
          </div>

          <div className="search-progress-badge">
            <div className="status-dot"></div>
            <span>Verified Lead Pipeline Active ({totalCount} Studios Nationwide)</span>
          </div>
        </div>
      </div>
    </header>
  );
}

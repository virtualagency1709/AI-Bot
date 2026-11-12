import React from "react";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  ShieldCheck, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { WHATSAPP_CONFIG } from "../config/whatsapp";

export function Footer({ onNavigateTab }) {
  const waUrl = WHATSAPP_CONFIG.getURL("Hello Virtual Agency, I would like to schedule an introductory consultation.");

  return (
    <footer className="footer-wrapper">
      {/* Top CTA Banner */}
      <div className="footer-cta-banner">
        <div className="footer-cta-inner">
          <div>
            <div className="footer-cta-badge">
              <Sparkles size={13} color="#34D399" />
              <span>Direct Client Acquisition Partner</span>
            </div>
            <h3>Ready to Scale Your High-Ticket Client Inquiries?</h3>
            <p>
              Connect directly with Virtual Agency’s digital growth strategists on WhatsApp. 
              Get customized web portals, conversion bots, and local SEO campaigns.
            </p>
          </div>
          <div className="footer-cta-action">
            <a 
              href={waUrl} 
              target="_blank" 
              rel="noreferrer"
              className="btn-whatsapp footer-whatsapp-cta"
            >
              <MessageCircle size={18} />
              <span>Connect on WhatsApp (+91 98711 55662)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="footer-columns-container">
        {/* Column 1: Brand Info */}
        <div className="footer-col brand-col">
          <div className="footer-brand-title">
            <span className="footer-brand-logo">VA</span>
            <h4>Virtual Agency, India</h4>
          </div>
          <p className="footer-col-desc">
            Enterprise LocalLead AI Prospecting, Competitor Radar & Lead Generation Bot.
            Engineered for high-performing automotive detailing studios, luxury local services, and digital growth retainers.
          </p>
          <div className="footer-verified-badge">
            <ShieldCheck size={14} color="#10B981" />
            <span>Verified WhatsApp Business: <strong>+91 98711 55662</strong></span>
          </div>
        </div>

        {/* Column 2: Platform Navigation */}
        <div className="footer-col">
          <h5 className="footer-col-heading">Platform Modules</h5>
          <ul className="footer-links-list">
            <li><button type="button" onClick={() => onNavigateTab("overview")}>1. Strategic Overview</button></li>
            <li><button type="button" onClick={() => onNavigateTab("all-businesses")}>2. All Businesses (Delhi NCR)</button></li>
            <li><button type="button" onClick={() => onNavigateTab("no-website")}>3. High-Ticket Web Gaps</button></li>
            <li><button type="button" onClick={() => onNavigateTab("high-priority")}>4. Hot Outreach Queue</button></li>
            <li><button type="button" onClick={() => onNavigateTab("pitch-generator")}>5. Multi-Channel Pitch Studio</button></li>
            <li><button type="button" onClick={() => onNavigateTab("export-reports")}>6. Excel & CSV Exports</button></li>
          </ul>
        </div>

        {/* Column 3: Contact & Verified Reach */}
        <div className="footer-col">
          <h5 className="footer-col-heading">Verified Contact</h5>
          <ul className="footer-contact-list">
            <li>
              <a 
                href={waUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="footer-contact-item"
              >
                <MessageCircle size={15} color="#25D366" />
                <span>WhatsApp: <strong>+91 98711 55662</strong></span>
                <ArrowUpRight size={13} className="ext-icon" />
              </a>
            </li>
            <li>
              <a 
                href="tel:+919871155662" 
                className="footer-contact-item"
              >
                <Phone size={15} color="#3B82F6" />
                <span>Call: <strong>+91 98711 55662</strong></span>
              </a>
            </li>
            <li>
              <a 
                href="mailto:info@virtualagency.in" 
                className="footer-contact-item"
              >
                <Mail size={15} color="#A855F7" />
                <span>info@virtualagency.in</span>
              </a>
            </li>
            <li>
              <a 
                href="https://virtualagency.in/" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-contact-item"
              >
                <Globe size={15} color="#06B6D4" />
                <span>virtualagency.in</span>
                <ArrowUpRight size={13} className="ext-icon" />
              </a>
            </li>
            <li>
              <div className="footer-contact-item" style={{ cursor: "default" }}>
                <MapPin size={15} color="#EF4444" />
                <span>New Delhi, NCR, India</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <div>
            © {new Date().getFullYear()} Virtual Agency. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <span>Verified WhatsApp: https://wa.me/919871155662</span>
            <span>•</span>
            <a href="https://virtualagency.in/" target="_blank" rel="noreferrer">
              virtualagency.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

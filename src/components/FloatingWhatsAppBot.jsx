import React, { useState } from "react";
import { MessageCircle, X, Send, Sparkles, Phone, ExternalLink } from "lucide-react";
import { WHATSAPP_CONFIG } from "../config/whatsapp";

export function FloatingWhatsAppBot() {
  const [isOpen, setIsOpen] = useState(false);

  const defaultWAUrl = WHATSAPP_CONFIG.getURL("Hello Virtual Agency, I am interested in your services.");
  const auditWAUrl = WHATSAPP_CONFIG.getURL("Hello Virtual Agency, I would like to request a complimentary Website & Lead Audit.");

  return (
    <aside className="floating-wa-wrapper" aria-label="WhatsApp Assistant">
      {/* Expanded Chatbot Modal / Card */}
      {isOpen && (
        <div className="wa-bot-card" role="dialog" aria-modal="true" aria-labelledby="wa-bot-title">
          <div className="wa-bot-header">
            <div className="wa-bot-avatar-group">
              <div className="wa-bot-avatar">
                <Sparkles size={18} color="#fff" />
              </div>
              <div className="wa-bot-header-text">
                <h4 id="wa-bot-title">Virtual Agency Assistant</h4>
                <div className="wa-bot-status">
                  <span className="wa-status-dot"></span>
                  <span>Online • Verified (+91 98711 55662)</span>
                </div>
              </div>
            </div>
            <button 
              className="wa-bot-close-btn" 
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp chat popup"
            >
              <X size={18} />
            </button>
          </div>

          <div className="wa-bot-body">
            <div className="wa-bot-bubble">
              <p>
                Namaste! 🙏 Welcome to <strong>Virtual Agency</strong>.
              </p>
              <p style={{ marginTop: "6px" }}>
                How can we assist you today? Connect directly with our team on our verified WhatsApp number:
              </p>
              <div className="wa-bot-verified-chip">
                <span>📱 {WHATSAPP_CONFIG.displayNumber}</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="wa-bot-actions">
              <a 
                href={defaultWAUrl} 
                target="_blank" 
                rel="noreferrer"
                className="btn-whatsapp wa-action-btn"
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp Now</span>
              </a>

              <a 
                href={auditWAUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-secondary wa-action-btn"
              >
                <Send size={15} color="#06B6D4" />
                <span>Request Free Digital Audit</span>
              </a>

              <a 
                href="tel:+919871155662"
                className="btn-call wa-action-btn"
              >
                <Phone size={15} />
                <span>Call: +91 98711 55662</span>
              </a>
            </div>
          </div>

          <div className="wa-bot-footer">
            <span>Powered by Virtual Agency WhatsApp Business Bot</span>
          </div>
        </div>
      )}

      {/* Floating Circular Action Trigger */}
      <button 
        type="button"
        className={`floating-wa-btn ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp live assistant"
        title="Chat on WhatsApp (+91 98711 55662)"
      >
        {isOpen ? (
          <X size={26} />
        ) : (
          <>
            <MessageCircle size={28} />
            <span className="wa-notification-badge" aria-label="1 new message">1</span>
          </>
        )}
      </button>
    </aside>
  );
}

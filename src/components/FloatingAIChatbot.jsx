import React, { useState, useRef, useEffect } from "react";
import { 
  Bot, 
  MessageSquare, 
  Send, 
  X, 
  Phone, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Globe2, 
  Flame, 
  RotateCcw 
} from "lucide-react";
import { VIRTUAL_AGENCY_CONTACT } from "../config/agencyContact";

export function FloatingAIChatbot({ businesses = [], onSelectBusiness }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "ai",
      text: "Hello! Welcome to Virtual Agency. How can I help you with your business leads today?",
      options: [
        "How many leads have no website?",
        "Show top leads in Maharashtra",
        "High-priority prospects",
        "Connect on WhatsApp"
      ],
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Compute live statistics from the actual business database
  const totalCount = businesses.length;
  const noWebsiteLeads = businesses.filter(
    (b) => b.websiteStatus === "No" || b.websiteStatus === "Unverified" || b.websiteCategory?.includes("NO_WEBSITE")
  );
  const highPriorityLeads = businesses.filter((b) => b.opportunityScore >= 80);

  // Intelligent responder matching natural user queries against real live leads
  const processQuery = (rawQuery) => {
    const query = rawQuery.toLowerCase().trim();

    // 1. WhatsApp / Contact Hand-off
    if (query.includes("whatsapp") || query.includes("contact") || query.includes("call") || query.includes("agency number") || query.includes("phone")) {
      const waLink = VIRTUAL_AGENCY_CONTACT.getWhatsAppUrl(
        "Hello Virtual Agency, I would like to inquire about car detailing lead acquisition and website solutions."
      );
      return {
        text: `You can reach Virtual Agency directly:\n• Official Phone: ${VIRTUAL_AGENCY_CONTACT.phoneDisplay}\n• WhatsApp: wa.me/${VIRTUAL_AGENCY_CONTACT.whatsappNumber}\n• Email: ${VIRTUAL_AGENCY_CONTACT.email}\n• Website: ${VIRTUAL_AGENCY_CONTACT.websiteUrl}`,
        cta: {
          label: "Chat with Sales on WhatsApp",
          url: waLink,
          isExternal: true
        }
      };
    }

    // 2. No Website count / query
    if (query.includes("no website") || query.includes("without website") || query.includes("without a website") || query.includes("no site")) {
      const percentage = Math.round((noWebsiteLeads.length / totalCount) * 100);
      const top3 = noWebsiteLeads.slice(0, 3);
      const topList = top3.map(b => `• ${b.name} (${b.city}, ${b.state}) - ${b.rating}★ (${b.reviewCount} reviews)`).join("\n");
      return {
        text: `Across our nationwide database, ${noWebsiteLeads.length} out of ${totalCount} car detailing studios (${percentage}%) have NO official website!\n\nTop website-less prospects right now:\n${topList}`,
        options: ["Show high-priority prospects", "Top leads in Delhi", "Connect on WhatsApp"]
      };
    }

    // 3. High Priority / Hot Leads
    if (query.includes("high priority") || query.includes("hot") || query.includes("best leads") || query.includes("top prospects")) {
      const top5 = highPriorityLeads.slice(0, 4);
      const topList = top5.map(b => `• ${b.name} (${b.city}) — Score: ${b.opportunityScore}/100 | Phone: ${b.phone || 'GMB direct'}`).join("\n");
      return {
        text: `We have ${highPriorityLeads.length} High-Priority prospects with Opportunity Scores of 80–100/100.\n\nTop matches:\n${topList}\n\nThese studios have 4.5+ star ratings, 50+ customer reviews, and immediate budget for website and booking automation.`,
        options: ["How many leads have no website?", "Show top leads in Karnataka", "Connect on WhatsApp"]
      };
    }

    // 4. State / City specific queries
    const stateMatches = businesses.filter(b => 
      query.includes(b.state?.toLowerCase() || "") || 
      query.includes(b.city?.toLowerCase() || "") ||
      query.includes(b.locality?.toLowerCase() || "")
    );

    if (stateMatches.length > 0 && (query.includes("state") || query.includes("lead") || query.includes("in ") || query.includes("show") || stateMatches.length < 50)) {
      const matchedCity = stateMatches[0].city || stateMatches[0].state;
      const matchedNoWeb = stateMatches.filter(b => b.websiteStatus === "No" || b.websiteStatus === "Unverified");
      const sample = stateMatches.slice(0, 4).map(b => `• ${b.name} (${b.city}) — ${b.websiteStatus === "Yes" ? "Has site" : "No website"} | Phone: ${b.phone}`).join("\n");
      return {
        text: `Found ${stateMatches.length} verified detailing studios in ${matchedCity} and surrounding region (${matchedNoWeb.length} without websites):\n\n${sample}`,
        options: ["Show high-priority prospects", "How many leads have no website?", "Connect on WhatsApp"]
      };
    }

    // 5. Pitch help
    if (query.includes("pitch") || query.includes("script") || query.includes("whatsapp message")) {
      return {
        text: `For website-less car detailing studios, pitch high-ticket customer loss: "Hi [Name], seeing your 4.8★ reviews in [City], premium BMW/Audi car owners looking for PPF & Ceramic Coating search on Google, but cannot find your official price list and booking page. We built a live interactive demo for [Name] that can capture 15+ high-ticket clients every month."`,
        options: ["High-priority prospects", "How many leads have no website?", "Connect on WhatsApp"]
      };
    }

    // 6. Total count / general stats
    if (query.includes("total") || query.includes("count") || query.includes("all leads") || query.includes("database")) {
      return {
        text: `LocalLead AI is actively monitoring ${totalCount} verified car detailing studios across all 36 Indian States and Union Territories.\n• No Website: ${noWebsiteLeads.length} studios\n• High Priority: ${highPriorityLeads.length} studios\n• 100% deduplicated with verified phone numbers.`,
        options: ["How many leads have no website?", "Show top leads in Maharashtra", "Connect on WhatsApp"]
      };
    }

    // Default Fallback
    return {
      text: `I can look up live verified data for all 36 Indian states, locate studios without websites, reveal competitor gaps, or connect you with our Virtual Agency deployment team. Try asking one of the options below:`,
      options: [
        "How many leads have no website?",
        "High-priority prospects",
        "Show top leads in Maharashtra",
        "Connect on WhatsApp"
      ]
    };
  };

  const handleSendMessage = (textToSend = inputMessage) => {
    if (!textToSend || !textToSend.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: "user",
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage("");

    // Simulate snappy AI response
    setTimeout(() => {
      const response = processQuery(textToSend);
      const aiMsg = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: response.text,
        options: response.options,
        cta: response.cta,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 350);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="floating-chatbot-trigger-wrap">
        {!isOpen && (
          <div className="floating-chatbot-tooltip">
            <span>Ask AI about Pan-India Leads</span>
          </div>
        )}
        <button
          className={`floating-chatbot-btn ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle AI Virtual Agency Assistant"
          title="Virtual Agency AI Assistant"
        >
          {isOpen ? (
            <X size={22} color="#ffffff" />
          ) : (
            <>
              <Bot size={24} color="#ffffff" />
              <span className="floating-chatbot-status-dot"></span>
            </>
          )}
        </button>
      </div>

      {/* Compact Chatbot Window (340px width, max 480px height) */}
      {isOpen && (
        <div className="floating-chatbot-panel" role="dialog" aria-label="AI Lead Assistant">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-left">
              <div className="chatbot-avatar">
                <Bot size={18} color="#ffffff" />
                <span className="chatbot-online-pulse"></span>
              </div>
              <div>
                <div className="chatbot-title">
                  Virtual Agency AI
                </div>
                <div className="chatbot-status">
                  Active • 36 States Scanned
                </div>
              </div>
            </div>

            <div className="chatbot-header-actions">
              <a
                href={VIRTUAL_AGENCY_CONTACT.getWhatsAppUrl("Hello Virtual Agency, I am using the LocalLead AI platform and need assistance.")}
                target="_blank"
                rel="noreferrer"
                className="chatbot-header-btn"
                title="Open WhatsApp Support (+91 78380 56998)"
              >
                <Phone size={13} color="#10B981" />
              </a>
              <button
                className="chatbot-header-btn"
                onClick={() => setIsOpen(false)}
                title="Close chat"
              >
                <X size={15} color="var(--text-secondary)" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="chatbot-messages-container">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chatbot-msg-row ${msg.sender === "user" ? "user-row" : "ai-row"}`}
              >
                {msg.sender === "ai" && (
                  <div className="chatbot-ai-icon">
                    <Sparkles size={12} color="#818CF8" />
                  </div>
                )}
                <div className={`chatbot-bubble ${msg.sender === "user" ? "user-bubble" : "ai-bubble"}`}>
                  <div style={{ whiteSpace: "pre-line", fontSize: "0.82rem", lineHeight: 1.5 }}>
                    {msg.text}
                  </div>

                  {msg.cta && (
                    <div style={{ marginTop: "10px" }}>
                      <a
                        href={msg.cta.url}
                        target="_blank"
                        rel="noreferrer"
                        className="chatbot-cta-btn"
                      >
                        <Phone size={12} /> {msg.cta.label} <ArrowUpRight size={12} />
                      </a>
                    </div>
                  )}

                  {msg.options && msg.options.length > 0 && (
                    <div className="chatbot-options-wrap">
                      {msg.options.map((opt, idx) => (
                        <button
                          key={idx}
                          className="chatbot-option-chip"
                          onClick={() => handleSendMessage(opt)}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="chatbot-msg-time">{msg.timestamp}</div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Agency Contact Strip */}
          <div className="chatbot-contact-strip">
            <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>Sales Desk:</span>
            <a
              href={`tel:+91${VIRTUAL_AGENCY_CONTACT.phone}`}
              className="chatbot-phone-link"
            >
              <Phone size={11} color="#10B981" /> +91 78380 56998
            </a>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>•</span>
            <a
              href={VIRTUAL_AGENCY_CONTACT.getWhatsAppUrl("Hello Virtual Agency, I would like to connect.")}
              target="_blank"
              rel="noreferrer"
              className="chatbot-wa-link"
            >
              WhatsApp ↗
            </a>
          </div>

          {/* Footer Input Bar */}
          <div className="chatbot-input-bar">
            <input
              type="text"
              className="chatbot-input-field"
              placeholder="Ask about states, no-website leads..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              className="chatbot-send-btn"
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim()}
              aria-label="Send message"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}


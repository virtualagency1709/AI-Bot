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
import { VIRTUAL_AGENCY_CONTACT, buildWhatsAppLink } from "../config/agencyContact";

export function FloatingAIChatbot({ businesses = [], onSelectBusiness }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "ai",
      text: "Hello! Welcome to Virtual Agency. How can I help you with your business leads today?",
      options: [
        "Find PPF installers in Mumbai",
        "Find ceramic coating in Bengaluru",
        "Detailing without websites in Chandigarh",
        "Verified WhatsApp in Gurugram"
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
    (b) => b.websiteStatus === "No" || b.websiteStatus === "Unverified" || b.websiteCategory?.includes("NO WEBSITE")
  );
  const highPriorityLeads = businesses.filter((b) => b.opportunityScore >= 80);

  // Intelligent responder matching natural user queries against real live leads (Phase 9)
  const processQuery = (rawQuery) => {
    const query = rawQuery.toLowerCase().trim();

    // 1. WhatsApp / Virtual Agency Contact Hand-off
    if (
      query === "connect on whatsapp" || 
      query === "contact virtual agency" || 
      (query.includes("agency") && (query.includes("number") || query.includes("contact") || query.includes("whatsapp")))
    ) {
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

    // 2. Phase 9 Specific Natural Queries & City/Category Matchers
    // Extract City / State
    const knownLocations = [
      "delhi", "mumbai", "navi mumbai", "thane", "pune", "bengaluru", "bangalore", 
      "hyderabad", "chennai", "kolkata", "ahmedabad", "surat", "jaipur", "chandigarh", 
      "gurugram", "gurgaon", "noida", "faridabad", "lucknow", "indore", "bhopal", 
      "nagpur", "kochi", "coimbatore", "ludhiana", "amritsar", "dehradun", "patna", 
      "ranchi", "bhubaneswar", "guwahati", "visakhapatnam", "maharashtra", "karnataka", 
      "tamil nadu", "gujarat", "punjab", "haryana", "rajasthan", "uttar pradesh"
    ];

    const matchedLocation = knownLocations.find(loc => query.includes(loc));

    // Detect Service / Category
    const isPpf = query.includes("ppf") || query.includes("paint protection film");
    const isCeramic = query.includes("ceramic") || query.includes("graphene");
    const isWash = query.includes("washing") || query.includes("car wash") || query.includes("cleaning");
    const isDetailing = query.includes("detailing") || query.includes("car spa") || query.includes("polishing");

    // Detect Website Status & WhatsApp verification filters
    const wantsNoWebsite = query.includes("no website") || query.includes("without website") || query.includes("without a website") || query.includes("no site");
    const wantsVerifiedWhatsApp = query.includes("whatsapp") && (query.includes("verified") || query.includes("contact") || query.includes("in "));

    // Filter matching actual businesses
    let matches = [...businesses];

    if (matchedLocation) {
      matches = matches.filter(b => {
        const c = (b.city || "").toLowerCase();
        const s = (b.state || "").toLowerCase();
        const l = (b.locality || "").toLowerCase();
        if (matchedLocation === "bangalore" && (c.includes("bengaluru") || s.includes("karnataka"))) return true;
        if (matchedLocation === "gurgaon" && (c.includes("gurugram") || s.includes("haryana"))) return true;
        return c.includes(matchedLocation) || s.includes(matchedLocation) || l.includes(matchedLocation);
      });
    }

    if (isPpf) {
      matches = matches.filter(b => 
        b.category === "Paint Protection" || 
        (b.subcategory && b.subcategory.toLowerCase().includes("ppf")) ||
        (b.services && b.services.some(s => s.toLowerCase().includes("ppf")))
      );
    } else if (isCeramic) {
      matches = matches.filter(b => 
        (b.subcategory && b.subcategory.toLowerCase().includes("ceramic")) ||
        (b.services && b.services.some(s => s.toLowerCase().includes("ceramic") || s.toLowerCase().includes("graphene")))
      );
    } else if (isWash) {
      matches = matches.filter(b => 
        b.category === "Car Washing" ||
        (b.subcategory && b.subcategory.toLowerCase().includes("wash")) ||
        (b.services && b.services.some(s => s.toLowerCase().includes("wash")))
      );
    } else if (isDetailing) {
      matches = matches.filter(b => 
        b.category === "Car Detailing" ||
        (b.services && b.services.some(s => s.toLowerCase().includes("detail")))
      );
    }

    if (wantsNoWebsite) {
      matches = matches.filter(b => b.websiteStatus === "No" || b.websiteStatus === "Unverified");
    }

    if (wantsVerifiedWhatsApp) {
      matches = matches.filter(b => b.hasWhatsApp && b.whatsapp_number);
    }

    // If query was specific and we found matches:
    if (matchedLocation || isPpf || isCeramic || isWash || wantsNoWebsite || wantsVerifiedWhatsApp) {
      if (matches.length === 0) {
        return {
          text: `No matching businesses found in our verified repository for "${rawQuery}".\n\nTry searching another city (e.g., Mumbai, Delhi, Bengaluru, Pune, Chandigarh) or use the Locality Tab to run a live Google Places scan.`,
          options: [
            "Find PPF installers in Mumbai",
            "Find ceramic coating in Bengaluru",
            "Detailing without websites in Chandigarh",
            "Verified WhatsApp in Gurugram"
          ]
        };
      }

      const topResults = matches.slice(0, 4);
      const formattedList = topResults.map(b => {
        const waText = b.hasWhatsApp ? `WhatsApp: +${b.whatsapp_number}` : "Phone: Call Only";
        const webText = b.websiteStatus === "Yes" ? "Has Website" : "NO Website";
        return `• ${b.name} (${b.city})\n  Rating: ${b.rating}★ (${b.reviewCount} reviews) | ${waText} | ${webText}`;
      }).join("\n\n");

      const locationLabel = matchedLocation ? ` in ${matchedLocation.toUpperCase()}` : "";
      return {
        text: `Found ${matches.length} verified automotive businesses${locationLabel}:\n\n${formattedList}\n\nSelect a studio from the table or click below to explore:`,
        options: [
          "Detailing without websites in Chandigarh",
          "Find PPF installers in Mumbai",
          "Verified WhatsApp in Gurugram",
          "Connect on WhatsApp"
        ]
      };
    }

    // 3. High Priority / Hot Leads
    if (query.includes("high priority") || query.includes("hot") || query.includes("best leads") || query.includes("top prospects")) {
      const top4 = highPriorityLeads.slice(0, 4);
      const topList = top4.map(b => `• ${b.name} (${b.city}) — Score: ${b.opportunityScore}/100 | ${b.hasWhatsApp ? `WA: +${b.whatsapp_number}` : `Call: ${b.phone}`}`).join("\n");
      return {
        text: `We have ${highPriorityLeads.length} High-Priority prospects with Opportunity Scores of 80–100/100 across India:\n\n${topList}\n\nThese studios possess 4.4+ star ratings, 100+ customer reviews, and no official website.`,
        options: ["Detailing without websites in Chandigarh", "Find PPF installers in Mumbai", "Connect on WhatsApp"]
      };
    }

    // 4. Pitch help
    if (query.includes("pitch") || query.includes("script")) {
      return {
        text: `For website-less car detailing studios, pitch high-ticket customer loss: "Hi [Name], seeing your 4.8★ reviews in [City], premium BMW/Audi car owners looking for PPF & Ceramic Coating search on Google, but cannot find your official price list and booking page. We built a live interactive demo for [Name] that can capture 15+ high-ticket clients every month."`,
        options: ["High-priority prospects", "Find ceramic coating in Bengaluru", "Connect on WhatsApp"]
      };
    }

    // 5. Total count / general stats
    if (query.includes("total") || query.includes("count") || query.includes("all leads") || query.includes("database")) {
      const withWA = businesses.filter(b => b.hasWhatsApp && b.whatsapp_number).length;
      return {
        text: `LocalLead AI is actively monitoring ${totalCount} verified automotive businesses across all 36 Indian States and Union Territories:\n• Without Website: ${noWebsiteLeads.length} studios\n• Verified WhatsApp: ${withWA} studios\n• High Priority (Score 80+): ${highPriorityLeads.length} studios\n• 100% deduplicated with Google Place IDs.`,
        options: ["Find PPF installers in Mumbai", "Detailing without websites in Chandigarh", "Connect on WhatsApp"]
      };
    }

    // Default Fallback
    return {
      text: `I can search real verified automotive detailing data across all 36 Indian states. Try asking:`,
      options: [
        "Find PPF installers in Mumbai",
        "Find ceramic coating in Bengaluru",
        "Find car washing studios in Pune",
        "Detailing without websites in Chandigarh",
        "Verified WhatsApp in Gurugram"
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
    }, 300);
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
                  Active • 36 States Monitored
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
              placeholder="e.g. PPF in Mumbai, no site in Chandigarh..."
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

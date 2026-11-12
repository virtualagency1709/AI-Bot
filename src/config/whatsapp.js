// ============================================================
// CENTRALIZED WHATSAPP & CONTACT CONFIGURATION
// Single Source of Truth for Virtual Agency
// ============================================================

export const WHATSAPP_CONFIG = {
  // Official Verified WhatsApp Business details
  countryCode: "91",
  mobileNumber: "9871155662",
  fullNumber: "919871155662",       // 12-digit international format: 919871155662
  displayNumber: "+91 98711 55662", // Clean formatted display
  email: "info@virtualagency.in",
  website: "https://virtualagency.in/",
  agencyName: "Virtual Agency",
  defaultMessage: "Hello, I am interested in your services.",

  /**
   * Generates the verified WhatsApp deep link URL.
   * Guarantees exact https://wa.me/919871155662?text=... format.
   * Eliminates any accidental duplicate country code or invalid format.
   */
  getURL(customMessage) {
    const message = customMessage || this.defaultMessage;
    return `https://wa.me/${this.fullNumber}?text=${encodeURIComponent(message)}`;
  },

  /**
   * Sanitizes an Indian phone number to 12-digit international format (91XXXXXXXXXX).
   * Strips all spaces, brackets, hyphens, and leading +91 or duplicate 91.
   */
  formatIndianNumber(rawPhone) {
    if (!rawPhone) return this.fullNumber;
    const digitsOnly = String(rawPhone).replace(/[^0-9]/g, "");
    if (!digitsOnly) return this.fullNumber;
    
    // If already 12 digits starting with 91
    if (digitsOnly.startsWith("91") && digitsOnly.length === 12) {
      return digitsOnly;
    }
    // If starts with 0 and has 11 digits
    if (digitsOnly.startsWith("0") && digitsOnly.length === 11) {
      return `91${digitsOnly.slice(1)}`;
    }
    // If standard 10-digit Indian mobile
    if (digitsOnly.length === 10) {
      return `91${digitsOnly}`;
    }
    // If double country code 9191XXXXXXXXXX
    if (digitsOnly.startsWith("9191") && digitsOnly.length >= 14) {
      return `91${digitsOnly.slice(4)}`;
    }
    // Fallback: return verified agency number
    return this.fullNumber;
  }
};

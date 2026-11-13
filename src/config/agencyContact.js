// ============================================================
// VIRTUAL AGENCY OFFICIAL CONTACT CONFIGURATION
// Source: Official Website (https://virtualagency.in/)
// Single Source of Truth — Never hardcode or assume numbers
// ============================================================

export const VIRTUAL_AGENCY_CONTACT = {
  agencyName: "Virtual Agency",
  tagline: "India's Premier Digital Growth & Web Engineering Agency",
  officialWebsite: "https://virtualagency.in/",
  websiteUrl: "https://virtualagency.in/",
  phone: "7838056998",
  phoneFormatted: "+91 78380 56998",
  phoneDisplay: "+91 78380 56998",
  phoneTel: "tel:+917838056998",
  whatsappNumber: "917838056998",
  whatsappDisplay: "+91 78380 56998",
  whatsappUrl: "https://wa.me/917838056998?text=Hello%20Virtual%20Agency%2C%20I%20am%20interested%20in%20your%20services.",
  email: "info@virtualagency.in",
  headquarters: "New Delhi, India",
  getWhatsAppUrl(messageText = "Hello Virtual Agency, I am interested in car detailing lead acquisition and website solutions.") {
    const encodedMsg = messageText ? `?text=${encodeURIComponent(messageText)}` : "";
    return `https://wa.me/917838056998${encodedMsg}`;
  }
};

/**
 * Validates whether a phone string contains a valid 10-digit Indian mobile number
 * (Indian mobile numbers start with 6, 7, 8, or 9).
 */
export function isValidIndianMobile(rawPhone) {
  if (!rawPhone) return false;
  const digits = String(rawPhone).replace(/[^0-9]/g, "");
  let mobile10 = "";
  if (digits.startsWith("9191") && digits.length >= 14) {
    mobile10 = digits.slice(4, 14);
  } else if (digits.startsWith("91") && digits.length === 12) {
    mobile10 = digits.slice(2);
  } else if (digits.startsWith("0") && digits.length === 11) {
    mobile10 = digits.slice(1);
  } else if (digits.length === 10) {
    mobile10 = digits;
  }
  return /^[6-9]\d{9}$/.test(mobile10);
}

/**
 * Normalizes Indian phone numbers into standard 10-digit format.
 * Returns null if the number is a landline or invalid.
 */
export function extract10DigitMobile(rawPhone) {
  if (!rawPhone) return null;
  const digits = String(rawPhone).replace(/[^0-9]/g, "");
  let mobile10 = "";
  if (digits.startsWith("9191") && digits.length >= 14) {
    mobile10 = digits.slice(4, 14);
  } else if (digits.startsWith("91") && digits.length === 12) {
    mobile10 = digits.slice(2);
  } else if (digits.startsWith("0") && digits.length === 11) {
    mobile10 = digits.slice(1);
  } else if (digits.length === 10) {
    mobile10 = digits;
  }
  return /^[6-9]\d{9}$/.test(mobile10) ? mobile10 : null;
}

/**
 * Generates clean WhatsApp deep link using strict international format:
 * https://wa.me/91XXXXXXXXXX?text=...
 * Requirements:
 * 1. 10-digit Indian mobile number after country code 91.
 * 2. Zero spaces, brackets, hyphens or plus signs.
 * 3. Never converts landlines or unverified numbers.
 * 4. Returns null if number is not a verified WhatsApp mobile.
 */
export function buildWhatsAppLink(rawPhone, messageText = "") {
  const mobile10 = extract10DigitMobile(rawPhone);
  if (!mobile10) return null;

  const encodedMsg = messageText ? `?text=${encodeURIComponent(messageText)}` : "";
  return `https://wa.me/91${mobile10}${encodedMsg}`;
}

/**
 * Shortcut helper for Virtual Agency sales inquiry.
 */
export function getWhatsAppUrl(messageText = "") {
  return VIRTUAL_AGENCY_CONTACT.getWhatsAppUrl(messageText);
}

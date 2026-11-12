// ============================================================
// VIRTUAL AGENCY OFFICIAL CONTACT CONFIGURATION
// Source: Official Website (https://virtualagency.in/)
// Single Source of Truth — Never hardcode or assume numbers
// ============================================================

export const VIRTUAL_AGENCY_CONTACT = {
  agencyName: "Virtual Agency",
  tagline: "India's Premier Digital Growth & Web Engineering Agency",
  officialWebsite: "https://virtualagency.in/",
  phone: "7838056998",
  phoneFormatted: "+91 78380 56998",
  phoneTel: "tel:+917838056998",
  whatsappNumber: "917838056998",
  whatsappDisplay: "+91 78380 56998",
  whatsappUrl: "https://wa.me/917838056998?text=Hello%20Virtual%20Agency%2C%20I%20am%20interested%20in%20your%20services.",
  email: "info@virtualagency.in",
  headquarters: "New Delhi, India"
};

/**
 * Generates clean WhatsApp deep link using 12-digit international format (91XXXXXXXXXX)
 * without duplicate country codes.
 */
export function buildWhatsAppLink(rawPhone, messageText = "") {
  if (!rawPhone) return null;
  const digits = String(rawPhone).replace(/[^0-9]/g, "");
  if (!digits) return null;

  let formattedNumber = digits;
  if (digits.startsWith("9191") && digits.length >= 14) {
    formattedNumber = digits.slice(2);
  } else if (digits.startsWith("91") && digits.length === 12) {
    formattedNumber = digits;
  } else if (digits.startsWith("0") && digits.length === 11) {
    formattedNumber = `91${digits.slice(1)}`;
  } else if (digits.length === 10) {
    formattedNumber = `91${digits}`;
  } else if (!digits.startsWith("91")) {
    formattedNumber = `91${digits}`;
  }

  const encodedMsg = messageText ? `?text=${encodeURIComponent(messageText)}` : "";
  return `https://wa.me/${formattedNumber}${encodedMsg}`;
}

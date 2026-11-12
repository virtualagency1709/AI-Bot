// LocalLead AI — Multi-Channel Sales Pitch Generator for Virtual Agency
// Official Contact Details: Virtual Agency (https://virtualagency.in/, +91 78380 56998, info@virtualagency.in)

import { VIRTUAL_AGENCY_CONTACT, buildWhatsAppLink } from "../config/agencyContact";

export { VIRTUAL_AGENCY_CONTACT };

export function generateAllPitches(business) {
  const name = business.name || "Studio";
  const city = business.city || "your city";
  const state = business.state || "India";
  const locality = business.locality || city;
  const rating = business.rating || 4.7;
  const reviews = business.reviewCount || 100;
  const phone = business.phone || "";
  const category = business.category || "Car Detailing Studio";
  const hasWebsite = business.websiteStatus === "WEBSITE EXISTS – NOT TARGET" || business.websiteStatus === "Yes";
  
  const mainWeakness = business.websiteAudit?.identifiedWeaknesses?.[0]?.issue || 
    (hasWebsite ? "Missing direct WhatsApp quote funnel & slow mobile speed" : "Absence of an official studio web portal");
  
  const topCompetitor = business.competitors5Km?.[0]?.name || `nearby detailing studios in ${city}`;
  const competitorAdvantage = business.competitors5Km?.[0]?.digitalAdvantage || "active online booking and Google search presence";
  const recommendation = business.virtualAgencyRecommendation?.recommendedSolution || "Custom Detailing Studio Web Portal & WhatsApp Lead Bot";

  // 1. WhatsApp Pitch in natural Hinglish
  const whatsappPitch = `Namaste ${name} Team / Owner ji! 🙏

Mera naam Shivam hai from Virtual Agency (https://virtualagency.in/).

Maine aapka Google Business Profile dekha — aapka studio ${locality}, ${city} (${state}) mein kaafi reputed hai with ${rating}★ rating aur ${reviews} genuine customer reviews! Aapka paint correction aur ceramic detailing work waqai me top-class hai.

Lekin ek critical digital gap observe kiya:
👉 ${hasWebsite ? `Aapki website par direct WhatsApp PPF package estimator aur instant booking nahi hai, plus mobile speed slow hai.` : `Aapka Google Maps par koi official website ya digital portfolio linked nahi hai.`}

Iska direct impact yeh ho raha hai ki ${city} ke jo luxury car owners (Creta, Fortuner, BMW, Thar etc.) Google search karte hain "best PPF studio in ${city}", wo seedha ${topCompetitor} (${competitorAdvantage}) ke paas chale jaate hain.

Hum Virtual Agency mein specially car detailing studios ke liye high-converting dark-aesthetic websites aur direct WhatsApp lead funnels design karte hain — jisse aapko monthly 25-35 genuine PPF aur Ceramic Coating inquiries mil sakti hain.

Kya hum kal 10 minute ka ek quick phone call ya WhatsApp par 3-step live demo preview share kar sakte hain?

Regards,
Shivam | Virtual Agency
📞 Phone: +91 78380 56998
🌐 Website: https://virtualagency.in/
✉️ Email: info@virtualagency.in`;

  // 2. Short WhatsApp Introduction (Direct & High-Converting)
  const shortWhatsAppIntro = `Hello Team ${name}! 👋 

Humne Google par aapka ${category} dekha in ${city}. Aapka work aur customer reviews (${rating}★, ${reviews} reviews) waqai me outstanding hain!

Aapke studio ke liye ek customized dark-aesthetic website demo ready kiya hai jisme interactive PPF warranty selector aur 1-click WhatsApp quote button integrated hai.

Kya main aapko is demo ka ek 60-second video preview WhatsApp par share kar sakta hoon?

Shivam | Virtual Agency
📞 +91 78380 56998 | 🌐 https://virtualagency.in/`;

  // 3. Website Demo Invitation (English Version)
  const demoInvitationEnglish = `Hello, we came across your ${category} on Google. Your services look great! 

We noticed that your business in ${city} could benefit from having a professional website where customers can explore your detailing packages, ceramic coating and PPF services, and contact you directly.

We are from Virtual Agency (https://virtualagency.in/), and we specialize in professional website development and digital growth for premium automotive studios.

We would love to show you a website demo created specifically for your business.

Would you be interested in taking a look?

Best regards,
Growth Team | Virtual Agency
Phone: +91 78380 56998
Email: info@virtualagency.in`;

  // 4. Website Demo Invitation (Hindi Version)
  const demoInvitationHindi = `नमस्ते ${name} टीम! 🙏

हमने गूगल पर आपका ${category} देखा — ${city} में आपका काम और कस्टमर रेटिंग (${rating}★) बेहतरीन है!

हमने देखा कि आपके स्टूडियो को एक प्रोफेशनल वेबसाइट से काफी फायदा हो सकता है, जहाँ ग्राहक आपके कार डिटेलिंग, सेरामिक कोटिंग और PPF पैकेजेस देखकर सीधे आपसे व्हाट्सऐप पर संपर्क कर सकें।

हम Virtual Agency से हैं, और हम कार डिटेलिंग स्टूडियोज़ के लिए हाई-कन्वर्टिंग वेबसाइट्स और डिजिटल ग्रोथ सॉल्यूशंस डिज़ाइन करते हैं।

हमने खास आपके स्टूडियो के लिए एक वेबसाइट डेमो तैयार किया है।

क्या आप यह डेमो देखना पसंद करेंगे?

धन्यवाद,
शिवम | Virtual Agency
फ़ोन: +91 78380 56998
वेबसाइट: https://virtualagency.in/`;

  // 5. Professional English Proposal Pitch (Email)
  const englishPitch = `Subject: Quick digital audit & lead growth opportunity for ${name} in ${city}

Dear ${name} Management,

I hope this message finds you well.

I came across ${name} while analyzing top-rated car detailing and paint protection studios across ${city}, ${state}. With an impressive ${rating}★ Google rating across ${reviews} customer reviews, your studio’s craftsmanship and customer satisfaction are clearly outstanding.

However, during a comprehensive public audit of your digital presence, our team identified a notable opportunity:

1. Primary Observation: ${mainWeakness}
2. Customer Friction: ${hasWebsite ? "Prospective customers landing on your website encounter friction due to the lack of an interactive WhatsApp quotation calculator, leading to high drop-offs." : `Over 70% of luxury car owners in ${city} verify a studio's credentials online before entrusting a ₹60,000+ PPF job. Without an official website, prospective clients hesitate and defer to studios with verifiable portfolios.`}
3. Local Competitor Landscape: Studios within 5 KM (such as ${topCompetitor}) are actively capitalizing on this demand through ${competitorAdvantage}.

At Virtual Agency (virtualagency.in), we specialize in performance digital marketing and conversion-focused web development tailored specifically for the automotive detailing industry.

We have engineered a turnkey solution:
• ${recommendation}
• High-converting mobile landing pages showcasing hydrophobic proof and PPF warranties
• Direct WhatsApp click-to-chat automation capturing inbound leads 24/7

Would you be open to a brief 10-minute discovery call this Thursday or Friday to review our complimentary audit findings?

Best regards,

Digital Growth Team
Virtual Agency
Website: https://virtualagency.in/
Contact: +91 78380 56998
Email: info@virtualagency.in`;

  // 6. Cold Calling Script (SDR Rep)
  const callingScript = `[COLD CALL SCRIPT FOR SDR / AGENCY REPRESENTATIVE]

📞 TARGET: Owner / Manager of ${name} (${phone || "Phone on file"})
📍 CITY: ${city}, ${state} | RATING: ${rating}★ (${reviews} reviews)

---------------------------------------------------------
STAGE 1: INTRODUCTION & PATTERN INTERRUPT
---------------------------------------------------------
"Namaste, kya meri baat ${name} ke owner ya workshop manager se ho rahi hai?

... Namaste sir, mera naam Shivam hai from Virtual Agency. Main koi regular sales call nahi kar raha hoon, sirf 60 seconds chahta tha aapke studio ke baare mein ek important observation share karne ke liye in ${city}. Kya abhi 1 minute baat ho sakti hai?"

---------------------------------------------------------
STAGE 2: COMPLIMENT & REPUTATION HOOK
---------------------------------------------------------
"Sir, maine aapka Google profile dekha ${city} mein — aapka ${rating} star rating hai with ${reviews} reviews. ${city} ke detailing market mein itna solid customer feedback maintain karna bahut badi baat hai. Respect for that!"

---------------------------------------------------------
STAGE 3: THE SPECIFIC LEAKAGE & COMPETITOR HOOK
---------------------------------------------------------
"Lekin sir, jab humne ${city} area ka local search data analyze kiya, to humne dekha:
${hasWebsite ? 
`Aapki website hai, lekin mobile par load hone mein 4 second leti hai aur koi direct WhatsApp quote calculator nahi hai. Is wajah se log bounce hoke doosre studios par ja rahe hain.` : 
`Aapka koi official website nahi hai. Sir aaj kal Fortuner, Defender, ya Creta ka owner ₹80,000 ka PPF karwane se pehle Google par studio ki website aur film warranty check karta hai.`}

Paas hi mein ${topCompetitor} hai — wo is search demand ko aggressively capture kar rahe hain."

---------------------------------------------------------
STAGE 4: THE VIRTUAL AGENCY VALUE PROPOSITION
---------------------------------------------------------
"Sir, hum Virtual Agency mein ${city} aur all India ke top car detailing studios ke liye modern, dark-look websites aur WhatsApp lead capture systems build karte hain. 

Aapko bina kisi extra headache ke, direct aapke WhatsApp par daily 2-3 genuine car owners ke inquiry messages aane lagenge: 'Mere pass Scorpio N hai, PPF ka package price kya hai?'"

---------------------------------------------------------
STAGE 5: CLOSE FOR DISCOVERY CALL
---------------------------------------------------------
"Sir, main chahta hoon aap hamare work ka ek sample dekhein. Main aapko WhatsApp par ek 2-minute live demo link bhej raha hoon. Kal dopahar 3 baje ya sham 6 baje ek 10-minute ka call connect kar sakte hain?"

Virtual Agency Contact: +91 78380 56998 | Website: https://virtualagency.in/`;

  // 7. Follow-up Message (48 Hours Later)
  const followUpMessage = `Namaste ${name} Team! 🙏

Shivam here again from Virtual Agency.

Maine 2 din pehle aapke saath ${city} car detailing market ka digital gap share kiya tha. 

Humne aapke studio ke liye ek customized 1-page Growth Blueprint draft kiya hai, jisme clearly dikhaya hai ki kaise aap ${topCompetitor} se aage nikal kar ${city} mein #1 high-ticket PPF studio ban sakte hain.

Kya main yeh PDF report aapko isi WhatsApp number par share kar doon?

Virtual Agency | 📞 +91 78380 56998 | 🌐 https://virtualagency.in/`;

  // 8. Short Business-Specific Audit Summary
  const auditSummary = `📋 DIGITAL AUDIT SUMMARY — ${name.toUpperCase()}
• Location: ${locality}, ${city}, ${state} (${business.pinCode || "India"})
• Google Maps Rating: ${rating}★ (${reviews} Reviews) | Demand Signal: High
• Website Status: ${business.websiteStatus}
• Primary Weakness: ${mainWeakness}
• Local Competitor Threat: ${topCompetitor} (${competitorAdvantage})
• Opportunity Score: ${business.opportunityScore}/100 (${business.priority})
• Recommended Action: ${recommendation}
• Virtual Agency Target Price: ${business.virtualAgencyRecommendation?.suggestedPackagePrice || "₹28,000"}`;

  // WhatsApp link generator using target phone without duplicate country code
  const waUrl = buildWhatsAppLink(phone, whatsappPitch);

  return {
    whatsappPitch,
    shortWhatsAppIntro,
    demoInvitationEnglish,
    demoInvitationHindi,
    englishPitch,
    callingScript,
    followUpMessage,
    auditSummary,
    waUrl
  };
}

// LocalLead AI — Sales Pitch Generator for Virtual Agency
// Agency Info: Virtual Agency (https://virtualagency.in/, 7838056998, info@virtualagency.in)

export function generateAllPitches(business) {
  const name = business.name;
  const locality = business.locality;
  const rating = business.rating;
  const reviews = business.reviewCount;
  const phone = business.phone;
  const cleanPhone = phone ? phone.replace(/[^0-9]/g, "") : "";
  const hasWebsite = business.websiteStatus === "Yes";
  const mainWeakness = business.websiteAudit?.identifiedWeaknesses?.[0]?.issue || 
    (hasWebsite ? "Missing high-converting WhatsApp quote funnel" : "Absence of an official studio website");
  const topCompetitor = business.competitors5Km?.[0]?.name || "nearby detailing studios";
  const competitorAdvantage = business.competitors5Km?.[0]?.digitalAdvantage || "active online booking and Google search presence";
  const recommendation = business.virtualAgencyRecommendation?.recommendedSolution || "Custom Detailing Studio Web Portal & WhatsApp Lead Bot";

  // 1. WhatsApp Pitch in natural Hinglish
  const whatsappPitch = `Namaste ${name} Team / Owner ji! 🙏

Mera naam Shivam hai from Virtual Agency, New Delhi (virtualagency.in).

Maine aapka Google Business Profile dekha — aapka studio ${locality} mein kaafi reputed hai with ${rating}★ rating aur ${reviews} genuine customer reviews! Aapka paint correction aur detailing work waqai me top-class hai.

Lekin ek critical digital gap observe kiya:
👉 ${hasWebsite ? `Aapki website par direct WhatsApp PPF package estimator aur instant booking nahi hai, plus mobile speed slow hai.` : `Aapka Google Maps par koi official website ya digital portfolio linked nahi hai.`}

Iska direct impact yeh ho raha hai ki ${locality} ke jo luxury car owners (Creta, Fortuner, BMW, Thar etc.) Google search karte hain "PPF studio near me", wo seedha ${topCompetitor} (${competitorAdvantage}) ke paas chale jaate hain.

Hum Virtual Agency mein specially car detailing studios ke liye high-converting dark-aesthetic websites aur direct WhatsApp lead funnels design karte hain — jisse aapko monthly 25-35 genuine PPF aur Ceramic Coating inquiries mil sakti hain.

Kya hum kal 10 minute ka ek quick phone call ya WhatsApp par 3-step live demo preview share kar sakte hain?

Regards,
Shivam | Virtual Agency
📞 Phone: 7838056998
🌐 Website: https://virtualagency.in/
✉️ Email: info@virtualagency.in`;

  // 2. Professional English Pitch (Email / Proposal)
  const englishPitch = `Subject: Quick digital audit & lead growth opportunity for ${name} in ${locality}

Dear ${name} Management,

I hope this message finds you well.

I came across ${name} while analyzing top-rated car detailing and paint protection studios across ${locality}, Delhi NCR. With an impressive ${rating}★ Google rating across ${reviews} customer reviews, your studio’s craftsmanship and customer satisfaction are clearly outstanding.

However, during a comprehensive public audit of your digital presence, our team identified a notable opportunity:

1. Primary Observation: ${mainWeakness}
2. Customer Friction: ${hasWebsite ? "Prospective customers landing on your website encounter friction due to the lack of an interactive WhatsApp quotation calculator, leading to high drop-offs." : "Over 70% of luxury car owners verify a studio's credentials online before entrusting a ₹60,000+ PPF job. Without an official website, prospective clients hesitate and defer to studios with verifiable portfolios."}
3. Local Competitor Landscape: Studios within 5 KM (such as ${topCompetitor}) are actively capitalizing on this demand through ${competitorAdvantage}.

At Virtual Agency (virtualagency.in), we specialize in performance digital marketing and conversion-focused web development tailored specifically for the automotive detailing industry.

We have engineered a turnkey solution:
• ${recommendation}
• High-converting mobile landing pages showcasing hydrophobic proof and PPF warranties
• Direct WhatsApp click-to-chat automation capturing inbound leads 24/7

Would you be open to a brief 10-minute discovery call this Thursday or Friday to review our complimentary audit findings?

Best regards,

Digital Growth Team
Virtual Agency, New Delhi
Website: https://virtualagency.in/
Contact: +91 7838056998
Email: info@virtualagency.in`;

  // 3. Instagram DM
  const instagramDm = `Hey Team ${name}! 👋 Loving the mirror-shine finishes and PPF edge work you guys are delivering in ${locality}! 🔥

Noticed your Google Maps profile has an impressive ${rating}★ with ${reviews} reviews, but ${hasWebsite ? "your website is missing an instant WhatsApp quote widget for smartphone searchers." : "there's no official website linked to showcase your warranty packages."}

You guys are doing world-class work, but high-ticket car owners searching on Google are currently discovering ${topCompetitor} instead.

We build luxury dark-aesthetic websites & WhatsApp quote funnels for car detailers at Virtual Agency (virtualagency.in).

Mind if we share a quick 2-minute video breakdown of how you can capture 20+ additional ceramic/PPF bookings every month? Let us know! 🚗✨

— Shivam, Virtual Agency (+91 7838056998)`;

  // 4. Phone Calling Script (Cold Call SDR)
  const callingScript = `[COLD CALL SCRIPT FOR SDR / AGENCY REPRESENTATIVE]

📞 TARGET: Owner / Manager of ${name} (${phone || "Phone on file"})
📍 LOCALITY: ${locality} | RATING: ${rating}★ (${reviews} reviews)

---------------------------------------------------------
STAGE 1: INTRODUCTION & PATTERN INTERRUPT
---------------------------------------------------------
"Namaste, kya meri baat ${name} ke owner ya workshop manager se ho rahi hai?

... Namaste sir, mera naam Shivam hai from Virtual Agency, New Delhi. Main koi regular sales call nahi kar raha hoon, sirf 60 seconds chahta tha aapke studio ke baare mein ek important observation share karne ke liye. Kya abhi 1 minute baat ho sakti hai?"

---------------------------------------------------------
STAGE 2: COMPLIMENT & REPUTATION HOOK
---------------------------------------------------------
"Sir, maine aapka Google profile dekha ${locality} mein — aapka 4.8 star rating hai with ${reviews} reviews. Delhi NCR ke detailing market mein itna solid customer feedback maintain karna bahut badi baat hai. Respect for that!"

---------------------------------------------------------
STAGE 3: THE SPECIFIC LEAKAGE & COMPETITOR HOOK
---------------------------------------------------------
"Lekin sir, jab humne ${locality} area ka local search data analyze kiya, to humne dekha:
${hasWebsite ? 
`Aapki website hai, lekin mobile par load hone mein 4 second leti hai aur koi direct WhatsApp quote calculator nahi hai. Is wajah se log bounce hoke doosre studios par ja rahe hain.` : 
`Aapka koi official website nahi hai. Sir aaj kal Fortuner, Defender, ya Creta ka owner ₹80,000 ka PPF karwane se pehle Google par studio ki website aur film warranty check karta hai.`}

Paas hi mein ${topCompetitor} hai — wo is search demand ko aggressively capture kar rahe hain."

---------------------------------------------------------
STAGE 4: THE VIRTUAL AGENCY VALUE PROPOSITION
---------------------------------------------------------
"Sir, hum Virtual Agency mein Delhi ke top car detailing studios ke liye modern, dark-look websites aur WhatsApp lead capture systems build karte hain. 

Aapko bina kisi extra headache ke, direct aapke WhatsApp par daily 2-3 genuine car owners ke inquiry messages aane lagenge: 'Mere pass Scorpio N hai, PPF ka package price kya hai?'"

---------------------------------------------------------
STAGE 5: HANDLING COMMON OBJECTIONS
---------------------------------------------------------
• Objection 1: "Humare paas already bahut kaam hai / walk-ins aate hain."
  Response: "Sir bilkul, walk-ins to aate hain. Lekin kya aapko standard car wash customer chahiye, ya ₹90,000 ka full TPU PPF customer? Humara system high-ticket ceramic aur PPF customers attract karta hai jisme margin 5 guna zyada hota hai."

• Objection 2: "Humara Instagram chal raha hai, website ki zarurat nahi."
  Response: "Sir Instagram par log reels dekhte hain, lekin jab kisi ne nayi car showroom se nikali hoti hai, to wo Google par search karta hai 'PPF studio near me'. Us waqt agar aapki website nahi aayi, to booking kisi aur ko mil jaati hai."

• Objection 3: "Cost kitni hogi?"
  Response: "Sir Virtual Agency ke packages ek single PPF job ke profit se bhi kam cost karte hain — sirf ₹25,000 to ₹35,000 one-time. Ek car ka PPF aate hi aapka 100% investment recover!"

---------------------------------------------------------
STAGE 6: CLOSE FOR DISCOVERY CALL
---------------------------------------------------------
"Sir, main chahta hoon aap hamare work ka ek sample dekhein. Main aapko WhatsApp par ek 2-minute live demo link bhej raha hoon. Kal dopahar 3 baje ya sham 6 baje ek 10-minute ka call connect kar sakte hain?"

Virtual Agency Contact: 7838056998 | Website: https://virtualagency.in/`;

  // 5. Follow-up Message (48 Hours Later)
  const followUpMessage = `Namaste ${name} Team! 🙏

Shivam here again from Virtual Agency, New Delhi.

Maine 2 din pehle aapke saath ${locality} car detailing market ka digital gap share kiya tha. 

Humne aapke studio ke liye ek customized 1-page Growth Blueprint draft kiya hai, jisme clearly dikhaya hai ki kaise aap ${topCompetitor} se aage nikal kar ${locality} mein #1 high-ticket PPF studio ban sakte hain.

Kya main yeh PDF report aapko isi WhatsApp number par share kar doon?

Virtual Agency | 📞 7838056998 | 🌐 https://virtualagency.in/`;

  // 6. Short Business-Specific Audit Summary
  const auditSummary = `📋 DIGITAL AUDIT SUMMARY — ${name.toUpperCase()}
• Location: ${locality}, Delhi (${business.pinCode || "Delhi NCR"})
• Google Maps Rating: ${rating}★ (${reviews} Reviews) | Demand Signal: High
• Website Status: ${business.websiteStatus === "Yes" ? `Active (${business.website})` : "NO WEBSITE FOUND"}
• Primary Weakness: ${mainWeakness}
• 5 KM Competitor Threat: ${topCompetitor} (${competitorAdvantage})
• Opportunity Score: ${business.opportunityScore}/100 (${business.priority})
• Recommended Action: ${recommendation}
• Virtual Agency Target Price: ${business.virtualAgencyRecommendation?.suggestedPackagePrice || "₹30,000"}`;

  // WhatsApp Web deep-link
  const encodedWhatsappText = encodeURIComponent(whatsappPitch);
  const waUrl = cleanPhone ? `https://wa.me/91${cleanPhone}?text=${encodedWhatsappText}` : null;

  return {
    whatsappPitch,
    englishPitch,
    instagramDm,
    callingScript,
    followUpMessage,
    auditSummary,
    waUrl
  };
}

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);
const SUPPORTED = ["ar", "he", "en"];

export const UI_TRANSLATIONS = {
  ar: {
    brand: "أهلا وسهلا",
    menu: "القائمة",
    close: "إغلاق",
    government: "خدمات حكومية",
    visas: "تأشيرات",
    language: "اللغة",
    search: "بحث",
    clear: "مسح",
    placeholder: "ابحث عن خدمة (مثال: رخصة، جواز، إثيوبيا…) ",
    noResults: "لا توجد نتائج مطابقة.",
    applyYourself: "قدّم بنفسك (مجانًا)",
    applyForYou: "أقدّمها لك",
    fixedPrice: "بسعر ثابت",
    serviceDescription: "إذا أردت أن أقدّمها لك {price} اضغط الزر الأسود، أو اضغط الزر الأبيض للتقديم بنفسك مجانًا عبر الموقع الرسمي.",
    price: "250 ₪",
    opening: "جارٍ الفتح…",
    manualLink: "هنا",
    javascriptDisabled: "تم تعطيل JavaScript. افتح الرابط يدويًا:",
    privacy: "سياسة الخصوصية",
    applyWhatsApp: "مرحبًا، أريد خدمة التقديم:\n• الخدمة: {service}\n• السعر: {price}\nأوافق أن تتولى التقديم عني.",
  },
  he: {
    brand: "ברוכים הבאים",
    menu: "תפריט",
    close: "סגירה",
    government: "שירותים ממשלתיים",
    visas: "ויזות",
    language: "שפה",
    search: "חפש",
    clear: "נקה",
    placeholder: "חפש שירות (לדוגמה: רישיון, דרכון, אתיופיה…) ",
    noResults: "לא נמצאו תוצאות מתאימות.",
    applyYourself: "הגש בעצמך (בחינם)",
    applyForYou: "אני אגיש עבורך",
    fixedPrice: "במחיר קבוע",
    serviceDescription: "אם תרצה שאגיש עבורך {price}, לחץ על הכפתור השחור, או לחץ על הכפתור הלבן כדי להגיש בעצמך בחינם דרך האתר הרשמי.",
    price: "250 ₪",
    opening: "פותח…",
    manualLink: "כאן",
    javascriptDisabled: "JavaScript מושבת. פתח את הקישור באופן ידני:",
    privacy: "מדיניות פרטיות",
    applyWhatsApp: "שלום, אני רוצה שירות הגשת בקשה:\n• שירות: {service}\n• מחיר: {price}\nאני מאשר/ת שתטפל בהגשה עבורי.",
  },
  en: {
    brand: "Welcome",
    menu: "Menu",
    close: "Close",
    government: "Government Services",
    visas: "Visas",
    language: "Language",
    search: "Search",
    clear: "Clear",
    placeholder: "Search for a service (e.g. license, passport, Ethiopia…)",
    noResults: "No matching results.",
    applyYourself: "Apply yourself (Free)",
    applyForYou: "I'll apply for you",
    fixedPrice: "at a fixed price",
    serviceDescription: "If you want me to submit it for you {price}, click the black button, or click the white button to apply yourself for free through the official website.",
    price: "250 ₪",
    opening: "Opening…",
    manualLink: "here",
    javascriptDisabled: "JavaScript is disabled. Open the link manually:",
    privacy: "Privacy Policy",
    applyWhatsApp: "Hello, I want an application service:\n• Service: {service}\n• Price: {price}\nI agree that you handle the application for me.",
  },
};

function detectLanguage() {
  if (typeof window === "undefined") return "ar";

  const saved = window.localStorage.getItem("support-language");
  if (SUPPORTED.includes(saved)) return saved;

  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const value of browserLanguages) {
    const code = value?.toLowerCase().split("-")[0];
    if (SUPPORTED.includes(code)) return code;
  }

  return "ar";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => detectLanguage());

  const switchLang = (newLang) => {
    if (!SUPPORTED.includes(newLang)) return;
    setLang(newLang);
    window.localStorage.setItem("support-language", newLang);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" || lang === "he" ? "rtl" : "ltr";
  }, [lang]);

  const t = UI_TRANSLATIONS[lang] ?? UI_TRANSLATIONS.ar;
  const value = useMemo(() => ({ lang, switchLang, t }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}

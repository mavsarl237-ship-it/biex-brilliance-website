import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "fr" | "en" | "de" | "ar";

interface Translations {
  fr: string;
  en: string;
  de?: string;
  ar?: string;
}

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (fr: string, en: string, de?: string, ar?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectBrowserLang(): Lang {
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("fr")) return "fr";
  if (browserLang.startsWith("de")) return "de";
  if (browserLang.startsWith("ar")) return "ar";
  return "en";
}

export const LANG_FLAGS: Record<Lang, string> = {
  fr: "https://flagcdn.com/w40/fr.png",
  en: "https://flagcdn.com/w40/gb.png",
  de: "https://flagcdn.com/w40/de.png",
  ar: "https://flagcdn.com/w40/sa.png",
};

export const LANG_LABELS: Record<Lang, string> = {
  fr: "Français",
  en: "English",
  de: "Deutsch",
  ar: "العربية",
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("biex-lang");
    if (saved === "fr" || saved === "en" || saved === "de" || saved === "ar") return saved;
    return detectBrowserLang();
  });

  useEffect(() => {
    localStorage.setItem("biex-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const t = (fr: string, en: string, de?: string, ar?: string): string => {
    switch (lang) {
      case "fr": return fr;
      case "de": return de || en;
      case "ar": return ar || en;
      default: return en;
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

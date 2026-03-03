import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "fr" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (fr: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("biex-lang");
    if (saved === "fr" || saved === "en") return saved;
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith("fr") ? "fr" : "en";
  });

  useEffect(() => {
    localStorage.setItem("biex-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (fr: string, en: string) => (lang === "fr" ? fr : en);

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

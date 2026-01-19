import { createContext, useContext, useState } from "react";
import en from "../i18n/en.json";
import hi from "../i18n/hi.json";

const LanguageContext = createContext();

const languages = { en, hi };

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const t = languages[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);

import React, { createContext, useState, useEffect } from "react";
import { translation } from "./translations";
import { useContext } from "react";


// Create the context
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ru");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") || "ru";
      setLanguage(savedLanguage);
      setIsHydrated(true);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "ru" ? "uz" : "ru";
    setLanguage(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", newLang);
    }
  };

  const t = translation[language] || {}; // Return an empty object if translation is not found

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isHydrated }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
    return useContext(LanguageContext);
  };

'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'zh-CN';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load from localStorage if available
    const saved = localStorage.getItem('language') as Language | null;
    if (saved && (saved === 'en' || saved === 'zh-CN')) {
      setLanguageState(saved);
      document.documentElement.lang = saved;
    } else {
      // Default to English
      document.documentElement.lang = 'en';
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'zh-CN' : 'en';
    setLanguage(newLang);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Return default values during SSR or if not within provider
    return { language: 'en' as Language, toggleLanguage: () => {}, setLanguage: () => {} };
  }
  return context;
}


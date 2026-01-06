'use client';

import { useLanguage } from '@/app/language-provider';
import { useEffect, useState } from 'react';

// Globe icon for language selection
const GlobeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export function LanguageToggle() {
  const [mounted, setMounted] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="px-3 py-2 rounded-button bg-surface border border-border text-sm text-text-secondary"
        aria-label="Loading language toggle"
        disabled
      >
        <GlobeIcon />
      </button>
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-button bg-surface border border-border text-sm text-text-secondary hover:text-text-primary hover:border-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background flex items-center justify-center gap-1.5"
      aria-label={language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
      title={language === 'en' ? '切换到中文' : 'Switch to English'}
    >
      <GlobeIcon />
      <span className="text-xs">{language === 'en' ? '中文' : 'EN'}</span>
    </button>
  );
}

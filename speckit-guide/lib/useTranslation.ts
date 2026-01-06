'use client';

import { useLanguage } from '@/app/language-provider';
import { translations, TranslationKey } from './translations';

export function useTranslation() {
  const { language } = useLanguage();
  
  const t = (key: TranslationKey): string => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  return { t, language };
}


'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale } from '@/types';
import enMessages from '@/messages/en.json';
import hiMessages from '@/messages/hi.json';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    // Check saved preference or cookie
    const saved = localStorage.getItem('sangita_locale') as Locale | null;
    if (saved === 'en' || saved === 'hi') {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('sangita_locale', newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    const dict = locale === 'hi' ? hiMessages : enMessages;
    const parts = key.split('.');
    let current: any = dict;

    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        // Fallback to English if missing in Hindi
        let fallback: any = enMessages;
        for (const fPart of parts) {
          if (fallback && typeof fallback === 'object' && fPart in fallback) {
            fallback = fallback[fPart];
          } else {
            return key;
          }
        }
        return typeof fallback === 'string' ? fallback : key;
      }
    }

    if (typeof current !== 'string') return key;

    let result = current;
    if (params) {
      Object.entries(params).forEach(([paramKey, paramVal]) => {
        result = result.replace(new RegExp(`{${paramKey}}`, 'g'), String(paramVal));
      });
    }

    return result;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};

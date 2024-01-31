'use client';
import * as React from 'react';

export default function useLanguage(): { language: string, changeLanguage: (language: string) => void } {
  const [ language, setLanguage ] = React.useState<string>('default');
  console.log({language});

  React.useEffect(function retrieveLocalSettings() {
    const language = localStorage.getItem(LANGUAGE_KEY);
    changeLanguage(language ?? 'en');
  }, []);

  const changeLanguage = (language: string) => {
    // Change the actual language
    localStorage.setItem(LANGUAGE_KEY, language);
    document.documentElement.style.setProperty(CSS_PROPERTY, language);
    setLanguage(language);
  }

  return { language, changeLanguage };
}

const LANGUAGE_KEY = 'language';
const CSS_PROPERTY = '--language';
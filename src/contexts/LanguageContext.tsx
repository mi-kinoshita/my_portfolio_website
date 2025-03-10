import React, { createContext, useContext, useState } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            projects: 'Projects',
            contact: 'Contact',
          },
          home: {
            title: 'Product Designer & Frontend Developer',
            subtitle: 'Creating beautiful, user-centered digital experiences',
          },
          // Add more translations as needed
        },
      },
      ja: {
        translation: {
          nav: {
            home: 'ホーム',
            projects: 'プロジェクト',
            contact: 'お問い合わせ',
          },
          home: {
            title: 'プロダクトデザイナー & フロントエンド開発者',
            subtitle: '美しく、ユーザー中心のデジタル体験を創造する',
          },
          // Add more translations as needed
        },
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState(i18n.language);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
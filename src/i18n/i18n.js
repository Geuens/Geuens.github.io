import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // import the language detector
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import ko from './locales/ko.json';

i18n
  .use(LanguageDetector) // Use the language detector
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr },
      ko: { translation: ko },
    },
    fallbackLng: 'en', // Default language if no match is found
    detection: {
      order: ['localStorage', 'navigator'], // Check localStorage first, then the browser's language
      caches: ['localStorage'], // Save the language to localStorage
    },
    interpolation: { escapeValue: false },
  });

export default i18n;


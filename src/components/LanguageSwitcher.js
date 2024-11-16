// LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

console.log("LanguageSwitcher component loaded"); // Debugging: Confirm component is loading

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      {['en', 'es', 'fr', 'ko'].map((lang) => (
        <button
          key={lang}
          onClick={() => changeLanguage(lang)}
          className={`language-button ${currentLanguage === lang ? 'active' : ''}`}
        >
          {lang === 'en' ? 'English' :
           lang === 'es' ? 'Español' :
           lang === 'fr' ? 'Français' :
           '한국어'}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;



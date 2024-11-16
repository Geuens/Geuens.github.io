import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.css';
import ConfirmationAndBuses from './components/ConfirmationAndBuses/ConfirmationAndBuses';
import Gifts from './components/Gifts/Gifts';
import Schedule from './components/Schedule/Schedule';
import Wedding from './components/Wedding/Wedding';
import LanguageSwitcher from './components/LanguageSwitcher';
import './i18n/i18n';

function App() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.className = i18n.language === 'ko' ? 'korean' : 'default';
  }, [i18n.language]);

  // New effect to change the document title based on language
  useEffect(() => {
    document.title = 'Carlos & Soyeon';
  }, [t, i18n.language]);

  // Wrap the handler in useCallback to ensure stability
  const handleOutsideClick = useCallback((e) => {
    if (!e.target.closest('.mobile-menu') && menuOpen) {
      setMenuOpen(false);
    }
  }, [menuOpen]);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <Router>
      <div className="App">
        {isDesktop && <LanguageSwitcher className="LanguageSwitcher-desktop" />}
        <nav className="desktop-menu">
          <Link to="/" className="App-link">{t('welcome')}</Link> {/* Link to the home route */}
          <Link to="/schedule" className="App-link">{t('schedule')}</Link>
          <Link to="/confirmation-and-buses" className="App-link">{t('confirmationAndBuses')}</Link>
          <Link to="/gifts" className="App-link">{t('gifts')}</Link>
        </nav>

        {/* Mobile Hamburger and Dropdown Navigation */}
        <div className="mobile-menu">
          <button
            className="hamburger"
            aria-expanded={menuOpen}
            aria-label="Toggle mobile menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          {menuOpen && (
            <div className="mobile-nav">
              <LanguageSwitcher className="mobile-language-select" />
              <nav className="mobile-nav-links">
                <a href="/" onClick={() => setMenuOpen(false)}>{t('welcome')}</a> {/* Link to the home route */}
                <a href="/schedule" onClick={() => setMenuOpen(false)}>{t('schedule')}</a>
                <a href="/confirmation-and-buses" onClick={() => setMenuOpen(false)}>{t('confirmationAndBuses')}</a>
                <a href="/gifts" onClick={() => setMenuOpen(false)}>{t('gifts')}</a>
              </nav>
            </div>
          )}
        </div>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Wedding />} /> {/* Default route for the welcome page */}
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/confirmation-and-buses" element={<ConfirmationAndBuses />} />
            <Route path="/gifts" element={<Gifts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;



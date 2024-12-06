import React from 'react';
import { useTranslation } from 'react-i18next';
import './ConfirmationAndBuses.css';
import foto1 from '../resources/foto_2.jpeg';
import foto2 from '../resources/foto_1.jpeg';
import foto3 from '../resources/foto_3.jpeg';

const ConfirmationAndBuses = () => {
  const { t } = useTranslation();

  return (
    <div className="confirmation-container">
      <div className="confirmation-images">
        <div className="top-row">
          <img src={foto1} alt={t('eventImageAlt1')} className="confirmation-image large" />
          <img src={foto2} alt={t('eventImageAlt2')} className="confirmation-image medium" />
        </div>
        <img src={foto3} alt={t('eventImageAlt3')} className="confirmation-image small" />
      </div>
      <div className="confirmation-form-overlay">
        <h1 className="confirmation-title">{t('confirmAttendanceTitle')}</h1>
        <div className="confirmation-form-link">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSelRDeV6siiyaQ70toijDb90KSq15-APXpQPjKL_rBZFZ9hfQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="formulario-asistencia-link"
          >
            {t('confirmAttendanceurl')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationAndBuses;






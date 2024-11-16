import React from 'react';
import { useTranslation } from 'react-i18next';
import './Gifts.css';
import foto5 from '../resources/foto_6.jpeg'; // Ensure the path is correct
import foto6 from '../resources/foto_7.jpeg';

const Gifts = () => {
  const { t } = useTranslation();

  return (
    <div className="gifts-container">
      <div className="gifts-images">
        <img src={foto5} alt="Wedding celebration" className="gifts-image large" />
        <img src={foto6} alt="Wedding ceremony details" className="gifts-image small" />
        <div className="gifts-text-overlay">
          <h1 className="gifts-title">{t('giftsTitle')}</h1>
          <p className="gifts-text">{t('giftsText')}</p>
          <p className="gifts-account">{t('giftsAccount')}</p>
        </div>
      </div>
    </div>
  );
};

export default Gifts;



import React from 'react';
import { useTranslation } from 'react-i18next';
import './Wedding.css'; // Ensure the path is correct
import foto4 from '../resources/foto_4.jpeg'; // Ensure the image path is correct

const Wedding = () => {
  const { t } = useTranslation();

  return (
    <div className="wedding-container">
      <img src={foto4} alt="Wedding" className="wedding-photo" />
      <div className="wedding-content">
        <h2>{t('welcometext1')}</h2>
        <h3 dangerouslySetInnerHTML={{ __html: t('welcometext2') }} />
        <h4>Carlos  &  Soyeon</h4>
      </div>
    </div>
  );
};

export default Wedding;

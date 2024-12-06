import React from 'react';
import { useTranslation } from 'react-i18next';
import './Schedule.css';
import churchImage from '../resources/church.png'; // Ensure the path is correct
import busImage from '../resources/bus.png';
import houseImage from '../resources/house.png';

const Schedule = () => {
  const { t } = useTranslation();

  return (
    <div className="schedule-container">
      <div className="timeline">

        <div className="timeline-item">
          <img src={churchImage} alt="Ceremony" className="timeline-image" />
          <div className="timeline-content">
            <h2>{t('ceremonyTitle')}</h2>
            <p>{t('ceremonyTime')}</p>
            <p>{t('ceremonyLocation')}</p>
          </div>
        </div>

        <div className="timeline-item">
          <img src={busImage} alt="Buses to the Reception" className="timeline-image" />
          <div className="timeline-content">
            <h2>{t('busToReceptionTitle')}</h2>
            <p>{t('busToReceptionTime')}</p>
            <p>{t('busToReceptionLocation')}</p>
          </div>
        </div>

        <div className="timeline-item">
          <img src={houseImage} alt="Reception" className="timeline-image" />
          <div className="timeline-content">
            <h2>{t('receptionTitle')}</h2>
            <p>{t('receptionTime')}</p>
            <p>{t('receptionApertif')}</p>
            <p>{t('receptionBanquet')}</p>
            <p>{t('receptionParty')}</p>
          </div>
        </div>

        <div className="timeline-item">
          <img src={busImage} alt="Return Buses" className="timeline-image" />
          <div className="timeline-content">
            <h2>{t('returnBusTitle')}</h2>
            <p>{t('returnBusTime')}</p>
            <p>{t('returnBusLocation')}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Schedule;


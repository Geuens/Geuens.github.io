import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ConfirmationAndBuses.css';
import foto1 from '../resources/foto_2.jpeg';
import foto2 from '../resources/foto_1.jpeg';
import foto3 from '../resources/foto_3.jpeg';

const ConfirmationAndBuses = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    attending: 'yes',
    transportation: 'no',
    dietaryRestrictions: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

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
        <form onSubmit={handleSubmit} className="confirmation-form">
          <label htmlFor="name" className="confirmation-label">{t('nameLabel')}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="confirmation-input"
            placeholder={t('namePlaceholder')}
          />

          <label className="confirmation-label">{t('attendingLabel')}</label>
          <select
            name="attending"
            value={formData.attending}
            onChange={handleInputChange}
            className="confirmation-select"
          >
            <option value="yes">{t('attendingYes')}</option>
            <option value="no">{t('attendingNo')}</option>
          </select>

          <label className="confirmation-label">{t('transportationLabel')}</label>
          <select
            name="transportation"
            value={formData.transportation}
            onChange={handleInputChange}
            className="confirmation-select"
          >
            <option value="yes">{t('transportationYes')}</option>
            <option value="no">{t('transportationNo')}</option>
          </select>

          <label htmlFor="dietaryRestrictions" className="confirmation-label">{t('dietaryRestrictionsLabel')}</label>
          <input
            type="text"
            id="dietaryRestrictions"
            name="dietaryRestrictions"
            value={formData.dietaryRestrictions}
            onChange={handleInputChange}
            placeholder={t('dietaryRestrictionsPlaceholder')}
            className="confirmation-input"
          />

          <button type="submit" className="confirmation-button">{t('submitButton')}</button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmationAndBuses;




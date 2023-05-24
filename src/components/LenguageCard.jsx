import React, { useState } from 'react';

function LanguageCard({ onLanguageSelect }) {
  const [language, setLanguage] = useState('');

  const languages = ['English', 'Español']; // Lista de idiomas

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    // onLanguageSelect(selectedLanguage); // Llamar a la función de callback del componente padre
  };

  return (
    <div>
      <h2>Seleccionar Idioma</h2>
      <div>
        <label>Idioma:</label>
        <select value={language} onChange={handleLanguageChange}>
          <option value="">Seleccionar idioma</option>
          {languages.map((language, index) => (
            <option key={index} value={language}>{language}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default LanguageCard;

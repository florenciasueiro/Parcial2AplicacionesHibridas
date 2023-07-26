import React, { useState } from 'react';
import useEditarUsuario from '../Service/APIeditarUsuario';
import PerfilCSS from '../css/Perfil.module.css';

function LanguageCard({ onLanguageSelect }) {
  const [language, setLanguage] = useState('');
  const languages = ['English', 'Español','Português']; // Lista de idiomas
  const editar =useEditarUsuario();
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;


  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    // onLanguageSelect(selectedLanguage); // Llamar a la función de callback del componente padre
  };

  const handleClick = () => {
    if(language==='English'){
      usuario.lang= 'en'
    }else if(language==='Español'){
      usuario.lang= 'es'
    }else{
      usuario.lang='pt'
    }
    
    editar(usuario);
  }

  return (
    <div className={PerfilCSS.cumple}>
      {/* <h2>Seleccionar Idioma</h2> */}
      <div>
        {/* <label>Idioma:</label> */}
        <select value={language} onChange={handleLanguageChange}>
          <option value="">Seleccionar idioma</option>
          {languages.map((language, index) => (
            <option key={index} value={language}>{language}</option>
          ))}
        </select>
      </div>
      <button className={PerfilCSS.boton} onClick={handleClick}>Cambiar</button>
    </div>
  );
}

export default LanguageCard;
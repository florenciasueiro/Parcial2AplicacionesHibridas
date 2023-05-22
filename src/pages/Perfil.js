import React, { useState } from 'react';
import ProfileInfo from '../components/Perfil';
import { CardGrid, CardGrid2, CardGrid3, CardGrid4, CardGrid5, CardGrid6, CardGrid7, CardGrid8 } from '../components/GridApp';
import PerfilCSS from '../css/Perfil.module.css';

function ProfilePage() {

  const [activeSection, setActiveSection] = useState('Inicio de Sesion');
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;

  if(usuario===null){
    return <h1>Debes crearte una cuenta para acceder a esta pagina</h1>
  }
  else{
  return (
    <div className={PerfilCSS.alto}>
    <div className={PerfilCSS.profilePage}>
      <div className={PerfilCSS.leftSection}>
        <ProfileInfo onSectionClick={setActiveSection} />
      </div>
      <div className={PerfilCSS.rightSection}>
        <div className={PerfilCSS.text}>
          <h1>{activeSection}</h1>
          <p>Hola, esto es un texto nformativo de ejemplo</p>
        </div>
        {activeSection === 'Inicio de Sesion' && <CardGrid />}  
        {activeSection === 'Informacion personal' && <CardGrid2 />}
        {activeSection === 'Metodos de pago' && <CardGrid3 />}
        {activeSection === 'Compartir en familia' && <CardGrid4 />}
        {activeSection === 'Mis Productos' && <CardGrid5 />}
        {activeSection === 'Mis Servicios' && <CardGrid6 />}
        {activeSection === 'Mis Reservas' && <CardGrid7 />}
        {/* {activeSection === 'Privacidad' && <CardGrid8 />} */}

      </div>
    </div>
    </div>
  );
  }
}

export default ProfilePage;
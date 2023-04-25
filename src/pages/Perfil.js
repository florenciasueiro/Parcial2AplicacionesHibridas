import React, { useState } from 'react';
import ProfileInfo from '../components/Perfil';
// import CardGrid from '../components/GridApp';
import PerfilCSS from '../css/Perfil.module.css';

function ProfilePage() {
  const [activeSection, setActiveSection] = useState('section1');

  return (
    <div className={PerfilCSS.profilePage}>
      <div className={PerfilCSS.leftSection}>
        <ProfileInfo />
      </div>
      <div className={PerfilCSS.rightSection}>
        <div className={PerfilCSS.text}>
            <h1>Texto informativo</h1>
            <p>Hola</p>
        </div>
        {/* {activeSection === 'section1' && <CardGrid />}
        {activeSection === 'section2' && <CardGrid2 />}
        {activeSection === 'section3' && <CardGrid3 />} */}
      </div>
    </div>
  );
}

export default ProfilePage;

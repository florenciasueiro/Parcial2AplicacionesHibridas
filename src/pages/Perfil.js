import React, { useState, useEffect } from 'react';
import ProfileInfo from '../components/Perfil';
import { CardGrid, CardGrid2, CardGrid3, CardGrid4, CardGrid5, CardGrid6, CardGrid7, /*CardGrid8*/CardGridInfoProducto } from '../components/GridApp';
import PerfilCSS from '../css/Perfil.module.css';

function ProfilePage() {
  const [activeSection, setActiveSection] = useState('Inicio de Sesion');
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;

  useEffect(() => {
    console.table(`El valor de activeSection ha cambiado a: ${activeSection}`);
  }, [activeSection]);

  if (usuario === null) {
    return <h1>Debes crearte una cuenta para acceder a esta pagina</h1>;
  } else {
    const handleVolverClick = () => {
      setActiveSection('Mis Productos'); // Cambia la sección activa a "Mis Productos"
    };

    return (
      <div className={PerfilCSS.alto}>
        <div className={PerfilCSS.profilePage}>
          <div className={PerfilCSS.leftSection}>
            <ProfileInfo onSectionClick={setActiveSection} />
          </div>
          <div className={PerfilCSS.rightSection}>
            <div className={PerfilCSS.text}>
              {activeSection === 'Producto' && <button onClick={handleVolverClick}>Volver</button>}
              <h1>{activeSection}</h1>
              <p>Aqui se encuentra la informacion relacionada a {activeSection}</p>
            </div>
            {activeSection === 'Inicio de Sesion' && <CardGrid />}  
            {activeSection === 'Informacion personal' && <CardGrid2 />}
            {activeSection === 'Metodos de pago' && <CardGrid3 />}
            {activeSection === 'Compartir en familia' && <CardGrid4 />}
            {activeSection === 'Mis Productos' && <CardGrid5 transfer={setActiveSection} />}
            {activeSection === 'Mis Servicios' && <CardGrid6 />}
            {activeSection === 'Mis Reservas' && <CardGrid7 />}
            {/* {activeSection === 'Privacidad' && <CardGrid8 />} */}
            {activeSection === 'Producto' && <CardGridInfoProducto />}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;

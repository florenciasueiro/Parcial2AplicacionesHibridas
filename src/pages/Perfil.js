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
          <p>Aqui se encuentra la informacion relacionada a {activeSection}</p>
          {/* aca podriamos agregar un boton que diga regresar (mas que nada para
          la seccion de producto, podria ser algo asi:)
          <button onClick={() => window.history.back()} >Regresar</button>
          o quizas onClick{()=> activesection = previusSection} */}
        </div>
        {activeSection === 'Inicio de Sesion' && <CardGrid />}  
        {activeSection === 'Informacion personal' && <CardGrid2 />}
        {activeSection === 'Metodos de pago' && <CardGrid3 />}
        {activeSection === 'Compartir en familia' && <CardGrid4 />}
        {activeSection === 'Mis Productos' && <CardGrid5 transfer={setActiveSection} />}
        {activeSection === 'Mis Servicios' && <CardGrid6 />}
        {activeSection === 'Mis Reservas' && <CardGrid7 />}
        {/* {activeSection === 'Privacidad' && <CardGrid8 />} */}
        {activeSection === 'Producto' && <CardGridInfoProducto  />}

      </div>
    </div>
    </div>
  );
  }
}

export default ProfilePage;
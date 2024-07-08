import React, { useState, useEffect } from 'react';
import ProfileInfo from '../components/Perfil';
import { CardGrid, CardGrid2, CardGrid3, CardGrid4, CardGrid5, CardGrid6, CardGrid7, /*CardGrid8*/CardGridInfoProducto } from '../components/GridApp';
import PerfilCSS from '../css/Perfil.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


function ProfilePage() {
  const [activeSection, setActiveSection] = useState('Inicio de Sesion');
  const [product, setProduct] = useState(0);
  const [isLeftMoved, setIsLeftMoved] = useState(false);
  const [isRightMoved, setIsRightMoved] = useState(false);
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;



  useEffect(() => {
    console.table(`El valor de activeSection ha cambiado a: ${activeSection}`);
    console.log(`El valor de activeSection ha cambiado  ${isLeftMoved}`)
  }, [activeSection, isLeftMoved, isRightMoved]);

  const handleResetIsRightMoved = () => {
    setIsRightMoved(true); // Restablece isLeftMoved a false
    console.log(`El valor de activeSection ha cambiado ${isRightMoved}`);
  };


  // useEffect(() => {
  //   alert(`El valor de product ha cambiado a: ${product}`);
  // }, [product]);

  if (usuario === null) {
    return <div className={PerfilCSS.containerprofile}><div className={PerfilCSS.noprofile}><h1>Debes crearte una cuenta para acceder a esta pagina</h1><a href='/registro'><button className={PerfilCSS.profilebtn}>Registrate</button></a></div></div>;
  } else {
    const handleVolverClick = () => {
      setActiveSection('Mis Productos'); // Cambia la sección activa a "Mis Productos"
      setIsLeftMoved(true);
    };

    return (
      <div className={isLeftMoved ? `${PerfilCSS.alto} ${PerfilCSS.leftMoved}` : `${PerfilCSS.rightMoved} ${ PerfilCSS.alto}`}>

        <div className={PerfilCSS.profilePage}>
          <div className={PerfilCSS.leftSection}>
            <ProfileInfo setIsLeftMoved={setIsLeftMoved} onSectionClick={setActiveSection}/>
          </div>
          <div className={PerfilCSS.rightSection}>
            <div className={PerfilCSS.text}>
            <button className={PerfilCSS.botonVolverAtras} onClick={handleResetIsRightMoved}><FontAwesomeIcon icon={faChevronLeft} /></button>
            {activeSection === 'Producto' && ( <button className={PerfilCSS.botonVolver} onClick={handleVolverClick}><FontAwesomeIcon icon={faChevronLeft} /></button>)}
              <div>
                <h1>{activeSection}</h1>
                <p>Aqui se encuentra la informacion relacionada a {activeSection}</p>
              </div>
            </div>
            {activeSection === 'Inicio de Sesion' && <CardGrid />}
            {activeSection === 'Informacion personal' && <CardGrid2 />}
            {activeSection === 'Metodos de pago' && <CardGrid3 />}
            {activeSection === 'Compartir en familia' && <CardGrid4 />}
            {activeSection === 'Mis Productos' && <CardGrid5 transfer={setActiveSection} product={setProduct} />}
            {activeSection === 'Mis Servicios' && <CardGrid6 />}
            {activeSection === 'Mis Reservas' && <CardGrid7 />}
            {/* {activeSection === 'Privacidad' && <CardGrid8 />} */}
            {activeSection === 'Producto' && <CardGridInfoProducto index={product}/>}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;

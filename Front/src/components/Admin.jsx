import React, { useState } from 'react';
import AdminCSS from '../css/Admin.module.css';
import Avatar from '@mui/material/Avatar';
// import { Link } from 'react-router-dom';

function Admin(props) {
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;


  const { onSectionClick, sectionTitle, setIsLeftMoved } = props;

  const handleSection1Click = () => {
    onSectionClick('Inicio de Sesion');
    setIsLeftMoved(true);
  };

  const handleSection2Click = () => {
    onSectionClick('Informacion personal');
    setIsLeftMoved(true);
  };

  const handleSection3Click = () => {
    onSectionClick('Metodos de pago');
    setIsLeftMoved(true);
  };

  const handleSection4Click = () => {
    onSectionClick('Compartir en familia');
    setIsLeftMoved(true);
  };

  const handleSection5Click = () => {
    onSectionClick('Mis Productos');
    setIsLeftMoved(true);
  };

  const handleSection6Click = () => {
    onSectionClick('Mis Servicios');
    setIsLeftMoved(true);
  };

  const handleSection7Click = () => {
    onSectionClick('Mis Reservas');
    setIsLeftMoved(true);
  };

  const handleSection8Click = () => {
    onSectionClick('Privacidad');
    setIsLeftMoved(true);
  };

  
  const handleLogout = () => {  
    sessionStorage.clear();
    window.location.assign("/");
  }


  return (
    <div className={AdminCSS.Admin}>
      <div className={AdminCSS.header}>
      <Avatar className={AdminCSS.AdminImg} src="/broken-image.jpg" sx={{ width: 64, height: 64 }} />
      <div className={AdminCSS.AdminInfo}>
        <h2>{usuario.name}</h2>
        <p>{usuario.email}</p>
      </div>
      </div>
      <ul className={AdminCSS.lista}>
        <li className={AdminCSS.listaElemento}>
          <button className={AdminCSS.btn} onClick={handleSection1Click}>
            Inicio de sesion
          </button>
        </li>
        {/* <li className={PerfilCSS.listaElemento}>
          <button className={PerfilCSS.btn} onClick={handleSection2Click}>
            Informacion personal
          </button>
        </li>*/}
        {/* <li className={PerfilCSS.listaElemento}>
          <button className={PerfilCSS.btn} onClick={handleSection3Click}>
            Metodos de pago
          </button>
        </li> */}
        {/* <li className={PerfilCSS.listaElemento}>
          <button className={PerfilCSS.btn} onClick={handleSection4Click}>
            Compartir en familia
          </button>
        </li> */}
        <li className={AdminCSS.listaElemento}>
          <button className={AdminCSS.btn} onClick={handleSection5Click}>
            Agregar productos
          </button>
        </li>
        <li className={AdminCSS.listaElemento}>
          <button className={AdminCSS.btn} onClick={handleSection6Click}>
            Modificar productos
          </button>
        </li>
        <li className={AdminCSS.listaElemento}>
          <button className={AdminCSS.btn} onClick={handleSection7Click}>
            Eliminar productos
          </button>
        </li>
        <li className={AdminCSS.listaElemento}>
        <button
          className={`${AdminCSS.btn} ${AdminCSS.btnCerrarSesion}`}
          onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </li>
      </ul>
    </div>
  );
}

export default Admin;

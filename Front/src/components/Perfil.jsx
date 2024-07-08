import React, { useState } from 'react';
import PerfilCSS from '../css/Perfil.module.css';
import Avatar from '@mui/material/Avatar';
// import { Link } from 'react-router-dom';

function Perfil(props) {
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
    <div className={PerfilCSS.perfil}>
      <div className={PerfilCSS.header}>
      <Avatar className={PerfilCSS.perfilImg} src="/broken-image.jpg" sx={{ width: 64, height: 64 }} />
      <div className={PerfilCSS.perfilInfo}>
        <h2>{usuario.name}</h2>
        <p>{usuario.email}</p>
      </div>
      </div>
      <ul className={PerfilCSS.lista}>
        <li className={PerfilCSS.listaElemento}>
          <button className={PerfilCSS.btn} onClick={handleSection1Click}>
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
        <li className={PerfilCSS.listaElemento}>
          <button className={PerfilCSS.btn} onClick={handleSection5Click}>
            Mis Productos
          </button>
        </li>
        {/* <li className={PerfilCSS.listaElemento}>
          <button className={PerfilCSS.btn} onClick={handleSection6Click}>
            Mis Servicios
          </button>
        </li> */}
        <li className={PerfilCSS.listaElemento}>
          <button className={PerfilCSS.btn} onClick={handleSection7Click}>
            Mis Reservas
          </button>
        </li>
        <li className={PerfilCSS.listaElemento}>
        <button
          className={`${PerfilCSS.btn} ${PerfilCSS.btnCerrarSesion}`}
          onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </li>
      </ul>
    </div>
  );
}

export default Perfil;

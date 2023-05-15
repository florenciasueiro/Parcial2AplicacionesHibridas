import React from 'react';
import PerfilCSS from '../css/Perfil.module.css';
import Avatar from '@mui/material/Avatar';

function Perfil(props) {
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
  const { onSectionClick, sectionTitle } = props;

  const handleSection1Click = () => {
    onSectionClick('Inicio de Sesion');
  };

  const handleSection2Click = () => {
    onSectionClick('Informacion personal');
  };

  const handleSection3Click = () => {
    onSectionClick('Metodos de pago');
  };

  const handleSection4Click = () => {
    onSectionClick('Compartir en familia');
  };

  const handleSection5Click = () => {
    onSectionClick('Mis Productos');
  };

  const handleSection6Click = () => {
    onSectionClick('Mis Servicios');
  };

  const handleSection7Click = () => {
    onSectionClick('Mis Reservas');
  };

  const handleSection8Click = () => {
    onSectionClick('Privacidad');
  };


  return (
    <div className={PerfilCSS.perfil}>
      <Avatar className={PerfilCSS.perfilImg} src="/broken-image.jpg" sx={{ width: 64, height: 64 }} />
      <div className={PerfilCSS.perfilInfo}>
        <h2>{usuario.name}</h2>
        <p>{usuario.email}</p>
      </div>
      <ul className={PerfilCSS.lista}>
        <li className={PerfilCSS.listaElemento}>
          <button className={PerfilCSS.btn} onClick={handleSection1Click}>
            Inicio de sesion
          </button>
        </li>
        <li className={PerfilCSS.listaElemento}>
          <button className={PerfilCSS.btn} onClick={handleSection2Click}>
            Informacion personal
          </button>
        </li>
        <li className={PerfilCSS.listaElemento}>
          <button className={PerfilCSS.btn} onClick={handleSection3Click}>
            Metodos de pago
          </button>
        </li>
        <li className={PerfilCSS.listaElemento}>
          <button className={PerfilCSS.btn} onClick={handleSection4Click}>
            Compartir en familia
          </button>
        </li>
        <li className={PerfilCSS.listaElemento}>
          <button className={PerfilCSS.btn} onClick={handleSection5Click}>
            Mis Productos
          </button>
        </li>
        <li className={PerfilCSS.listaElemento}>
          <button className={PerfilCSS.btn} onClick={handleSection6Click}>
            Mis Servicios
          </button>
        </li>
        <li className={PerfilCSS.listaElemento}>
          <button className={PerfilCSS.btn} onClick={handleSection7Click}>
            Mis Reservas
          </button>
        </li>
        {/* <li className={PerfilCSS.listaElemento}>
          <button onClick={handleSection8Click}>
            Privacidad
          </button>
        </li> */}
      </ul>
    </div>
  );
}

export default Perfil;

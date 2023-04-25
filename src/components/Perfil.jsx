import React from 'react';
import PerfilCSS from '../css/Perfil.module.css';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

function Perfil(perfil) {
  return (
    <div className={PerfilCSS.perfil}>
    <Avatar className={PerfilCSS.perfilImg} src="/broken-image.jpg" sx={{ width: 64, height: 64 }} />
        <div className={PerfilCSS.perfilInfo}>
            <h2>Nombre de usuario</h2>
            <p>emeplo.mail@gmail.com</p>
        </div>
        <ul className={PerfilCSS.lista}>
            <li className={PerfilCSS.listaElemento}><Link  style={{ color: 'blue' }} to="/perfil">Inicio de sesion</Link></li>
            <li className={PerfilCSS.listaElemento}><Link to="/infopersonal">Informacion Personal</Link></li>
            <li className={PerfilCSS.listaElemento}><Link to="/metodosdepago">Metodos de pago</Link></li>
            <li className={PerfilCSS.listaElemento}><Link to="/politicas">Compartir en familia</Link></li>
            <li className={PerfilCSS.listaElemento}><Link to="/politicas">Mis Productos</Link></li>
            <li className={PerfilCSS.listaElemento}><Link to="/politicas">Mis Servicios</Link></li>
            <li className={PerfilCSS.listaElemento}><Link to="/politicas">Mis Reservas</Link></li>
            <li className={PerfilCSS.listaElemento}><Link to="/politicas">Privacidad</Link></li>
                {/* <li className={PerfilCSS.listaElemento}>Opcion4</li>
                <li className={PerfilCSS.listaElemento}>Opcion5</li>
                <li className={PerfilCSS.listaElemento}>Opcion6</li>
                <li className={PerfilCSS.listaElemento}>Opcion8</li> */}
        </ul>
    </div>
  );
}

export default Perfil;

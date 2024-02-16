import React from 'react';
import InicioCSS from '../css/Inicio.module.css';
import Cards from '../components/Cards';
import {CardGrid26} from '../components/GridApp';
import { BackgroundQuarters } from  '../components/Background';

function Eventos() {
  return (
    <div className={InicioCSS.inicio}>
      {/* <a href="/quarters" className={InicioCSS.background}>
      <div className={InicioCSS.textEvents}>
        <div className={InicioCSS.logoP}>
          <img className={InicioCSS.img} src={"/img/LogoBlanco.png"}/>
          <p className={InicioCSS.p}>Events</p>
        </div>
        <p className={InicioCSS.pEvent}>Hogar de eventos especiales que anuncian lo último en productos, servicios y más.</p>
        <button className={InicioCSS.button}>Registrarse</button>
      </div>
        <BackgroundQuarters />
      </a>   */}

      <div>
        <CardGrid26/>
      </div>
    </div>
  );
}

export default Eventos;


import React from 'react';
import InicioCSS from '../css/Inicio.module.css';
import Cards from '../components/Cards';
import {CardGrid9, CardGrid10, CardGrid11, CardGrid12} from '../components/GridApp';
import { BackgroundQuarters } from  '../components/Background';

function Inicio() {
  return (
    <div className={InicioCSS.inicio}>
      <a href="/quarters" className={InicioCSS.background}>
      <div className={InicioCSS.text}>
        <img className={InicioCSS.img} src={"/img/LogoBlanco.png"}/>
        <p className={InicioCSS.p}>Quarters Family 1</p>
      </div>
        <BackgroundQuarters />
      </a>  

      <div className={InicioCSS.cards}>
        <CardGrid9/>
        <CardGrid10/>
        <CardGrid11/>
        <CardGrid12/>   
      </div>
    </div>
  );
}

export default Inicio;


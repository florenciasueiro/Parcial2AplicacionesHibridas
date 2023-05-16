import React from 'react';
//import logo from './logo.svg';
import InicioCSS from '../css/Inicio.module.css';
import Cards from '../components/Cards';
//import Login from './components/Login';
import {CardGrid9, CardGrid10 } from '../components/GridApp';
import { BackgroundQuarters } from  '../components/Background';



function Inicio() {
  return (
    <div className={InicioCSS.inicio}>
      <div className={InicioCSS.text}>
        <h1 className={InicioCSS.h1}>Somos Asset</h1>
        <p className={InicioCSS.p}>Tu valor agregado.</p>
      </div>
      <>
      <BackgroundQuarters className={InicioCSS.background}/>
      </>

      <div className={InicioCSS.cards}>
        <CardGrid9/>
        <CardGrid10/>
      </div>
    </div>
  );
}
export default Inicio;
//xd


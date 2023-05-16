import React from 'react';
//import logo from './logo.svg';
import InicioCSS from '../css/Inicio.module.css';
import CardEvent from '../components/CardEvent';
//import Login from './components/Login';
import { Background, } from '../components/Background';
import {CardGrid11} from '../components/GridApp';
import { BackgroundQuarters } from  '../components/Background';



function Inicio() {
  return (
    <div className={InicioCSS.inicio}>
      <h1 className={InicioCSS.titulo}>Asset Event</h1>
      <>
      <BackgroundQuarters className={InicioCSS.background}/>
      </>

      <div className={InicioCSS.cards}>
        <>
        <CardGrid11/>
        </>
      </div>
    </div>
  );
}
export default Inicio;
//xd
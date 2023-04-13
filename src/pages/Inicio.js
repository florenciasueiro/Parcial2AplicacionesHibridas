import React from 'react';
//import logo from './logo.svg';
import InicioCSS from '../css/Inicio.module.css';
import Cards from '../components/Cards';
//import Login from './components/Login';
import { Background } from  '../components/Background';



function Inicio() {
  return (
    <div className={InicioCSS.inicio}>
      <>
      <Background className={InicioCSS.background}/>
      </>

      <div className={InicioCSS.cards}>
        <>
        <Cards className={InicioCSS.card}/>
        <Cards className={InicioCSS.card}/>
        </>
      </div>
    </div>
  );
}
export default Inicio;
//xd
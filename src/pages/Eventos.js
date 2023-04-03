import React from 'react';
//import logo from './logo.svg';
import InicioCSS from '../css/Inicio.module.css';
import CardEvent from '../components/CardEvent';
//import Login from './components/Login';
import Background from '../components/Background';


function Inicio() {
  return (
    <div className={InicioCSS.inicio}>
      <>
      <Background className={InicioCSS.background}/>
      </>

      <div className={InicioCSS.cards}>
        <>
        <CardEvent/>
        </>
      </div>
    </div>
  );
}
export default Inicio;
//xd
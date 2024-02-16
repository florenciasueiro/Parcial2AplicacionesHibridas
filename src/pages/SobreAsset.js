import React from 'react';
//import logo from './logo.svg';
import InicioCSS from '../css/Inicio.module.css';
import CardEvent from '../components/CardEvent';
//import Login from './components/Login';
import { Background, } from '../components/Background';
import {CardGrid13, CardGrid14, CardGrid15} from '../components/GridApp';
import { BackgroundQuarters } from  '../components/Background';
// import CardAsset from '../components/CardAsset';



function SobreAsset() {
  return (
    <div className={InicioCSS.inicio}>
      {/* <h1 className={InicioCSS.titulo}>Sobre Asset</h1> */}
      <>
      {/* <BackgroundQuarters className={InicioCSS.background}/> */}
      </>
        <>
        <div className={InicioCSS.gridCards}>
        <CardGrid13/>
        <CardGrid14/>
        <CardGrid15/>
        </div>
        </>
    </div>
  );
}
export default SobreAsset;
//xd
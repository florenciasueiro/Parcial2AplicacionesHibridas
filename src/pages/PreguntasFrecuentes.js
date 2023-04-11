import React from 'react';
//import logo from './logo.svg';
import InicioCSS from '../css/Inicio.module.css';
import PreguntasFrecuente from '../components/PreguntasFrecuentes.jsx';
//import Login from './components/Login';
import Background from '../components/Background';



function PreguntasFrecuentes() {
  return (
    <div>
      <>
      <Background className={InicioCSS.background}/>
      </>
      <>
      <PreguntasFrecuente/>
      </>
    </div>
  );
}
export default PreguntasFrecuentes;
//xd
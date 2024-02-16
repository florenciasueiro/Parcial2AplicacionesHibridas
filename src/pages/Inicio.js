import React, {useContext} from 'react';
import InicioCSS from '../css/Inicio.module.css';
import Cards from '../components/Cards';
import {CardGrid9, CardGrid10, CardGrid11, CardGrid12} from '../components/GridApp';
import { BackgroundQuarters } from  '../components/Background';
import { Link } from 'react-router-dom';
import  {Context} from '../context/notification-context'
import {suscrbirUsuario} from '../Service/APIfunnel'
import IslandNotificationCSS from '../css/IslandNotification.module.css';

function Inicio() {
  const {activar, playAnimation, notificar} = useContext(Context);
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;

 
  const suscribir = () => {
    activar(false)
    setTimeout(() => {
      activar(true);
      notificar(<div className={IslandNotificationCSS.contenido}>
        <span className={IslandNotificationCSS.contenido}>Un asesor comercial se pondra en contacto contigo a la brevedad</span>
        </div>)
      setTimeout(() => {
          activar(false);
        }, 3000);
    }, 750);
    suscrbirUsuario({
      usuario: usuario,
      funnelID: "641c5f375ba494fd3803b591",
      stageID:"641c5f375ba494fd3803b592"});
    
  }
  const handleClick = () => { 
    if(!usuario){
      
      activar(true);
      notificar(<div><span className={IslandNotificationCSS.contenido}>Para poder acceder primero debes registrate</span></div>)
      setTimeout(() => {
        activar(false);
      }, 3000);
      
    }
    else{
      activar(true);
      notificar(<div className={IslandNotificationCSS.div}>
        <span className={IslandNotificationCSS.raya}></span>
        <span className={IslandNotificationCSS.consulta}>¿Quieres que un asesor se contacte contigo?
        <button className={IslandNotificationCSS.boton} onClick={suscribir}>Sí, quiero</button>
        </span>
        </div>)
        setTimeout(() => {
          activar(false);
        }, 15000);
  }
}

  return (
    <div className={InicioCSS.inicio}>
      {/* <Link to="/quarters" className={InicioCSS.background}>
      <div className={InicioCSS.text}>
        <img className={InicioCSS.img} src={"/img/LogoBlanco.png"}/>
        <h2 className={InicioCSS.p}>Quarters Family 1</h2>
      </div>
        <BackgroundQuarters />
      </Link>   */}

      <div className={InicioCSS.cards}>
        {/* <CardGrid9/>
        <CardGrid10/> esta tiene que llevar el video del telefono despues */}
        <CardGrid11/>
        <CardGrid12 handleClick={handleClick}/>   
      </div>
    </div>
  );
}

export default Inicio;
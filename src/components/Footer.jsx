import React , {useContext} from 'react';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import FooterCSS from '../css/Footer.module.css';
import { Link } from 'react-router-dom';
import  {Context} from '../context/notification-context'
import {suscrbirUsuario} from '../Service/APIfunnel'
import IslandNotificationCSS from '../css/IslandNotification.module.css';




function Footer() {
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
  const {activar, playAnimation, notificar} = useContext(Context);
  
  const suscribir = () => {
    activar(false)
    setTimeout(() => {
      activar(true);
      notificar(<div><span>Un asesor comercial se pondra en contacto contigo a la brevedad</span></div>)
      setTimeout(() => {
          activar(false);
        }, 3000);
    }, 750);
    suscrbirUsuario({
      usuario: usuario,
      funnelID: "641c5f375ba494fd3803b591",
      stageID:"641c5f375ba494fd3803b592"});
    
  }
  const soporte = () => { 
    if(!usuario){
      
      activar(true);
      notificar(<div><span className={IslandNotificationCSS.acceso}>Para poder acceder primero debes registrate</span></div>)
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
    <footer className={FooterCSS.footerBox}>
      <div className={`${FooterCSS.textCenter} ${FooterCSS.footerCopy} ${FooterCSS.p3}`}>
      Copyright © 2023 Asset Real Estate S.A. Todos los derechos reservados.
        <a className={FooterCSS.linkText} href='https://mdbootstrap.com/'>
          
        </a>
        
      </div>
      {/* <div  className={`${FooterCSS.pt4} ${FooterCSS.container}`}>
        <section className={`${FooterCSS.mb-4} ${FooterCSS.bgBlack}`}>
        <ul>
  <li className={FooterCSS.footerLi}>
    <a className={`${FooterCSS.footerA} ${FooterCSS.facebook}`} href="#">
      <FacebookIcon/>
    </a>
  </li>
  <li className={FooterCSS.footerLi}>
    <a className={`${FooterCSS.footerA} ${FooterCSS.twitter}`} href="#">
      <TwitterIcon/>
    </a>
  </li>
  <li className={FooterCSS.footerLi}>
    <a className={`${FooterCSS.footerA} ${FooterCSS.instagram}`} href="#">
      <InstagramIcon/>
    </a>
  </li>
  <li className={FooterCSS.footerLi}>
    <a className={`${FooterCSS.footerA} ${FooterCSS.youtube}`} href="#">
      <YouTubeIcon/>
    </a>
  </li>
</ul>
        </section>
      </div>
      <div>
      <a className={FooterCSS.linkText} href='https://mdbootstrap.com/'>
          Preguntas Frecuentes
        </a>
      </div> */}

<div className={FooterCSS.container}>
      <div className={FooterCSS.groupLink}>
        {usuarioJson ? (
          <Link className={FooterCSS.linkText} to='/profile'>
            Mi perfil | ‎
          </Link>
        ) : (
          <Link className={FooterCSS.linkText} to='/registro'>
            Registrarse | ‎
          </Link>
        )}
        <button className={FooterCSS.linkText} onClick={soporte}>
          Soporte ‎
        </button>
      </div>
    </div>

    </footer>
  );
}
export default Footer
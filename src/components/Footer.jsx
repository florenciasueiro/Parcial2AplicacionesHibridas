import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FooterCSS from '../css/Footer.module.css';
import { Link } from 'react-router-dom';



function Footer() {
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
        <Link className={FooterCSS.linkText} to='/registro'>
          Registrarse | ‎
        </Link>
        <Link className={FooterCSS.linkText} to='/login'>
          Iniciar sesión | ‎
        </Link>
        <Link className={FooterCSS.linkText} to='/soporte'>
          Soporte  ‎
        </Link>
      </div>
    </div>

    </footer>
  );
}
export default Footer
//holis
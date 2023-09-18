import React, { useEffect, useState } from 'react';
import BrochureCSS from '../css/Brochure.module.css';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import ScrollAnimation from 'react-animate-on-scroll';

function Brochure() {
  const [isVisible, setIsVisible] = useState(false);

  // Función para manejar el evento onScroll del Parallax
  const handleScroll = (e) => {
    // Calcula el punto en el que deseas que los textos aparezcan
    const threshold = 100; // Ajusta este valor según sea necesario

    // Comprueba si el usuario ha desplazado más allá del umbral
    if (e.scrollY >= threshold) {
      setIsVisible(true);
    }
  };
  
  useEffect(() => {
    // Agrega un event listener para el scroll
    window.addEventListener('scroll', handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <ParallaxProvider>
        <div className={BrochureCSS.container}>
      <div className={BrochureCSS.portada}>
        <div className={`${BrochureCSS.izquierda}`}>
        </div>
        <div className={BrochureCSS.derecha}>
          <img className={BrochureCSS.logo} src="../img/LogoBlanco.png" alt="" />
        </div>
      </div>
      <div className={`${BrochureCSS.indice}`}>
      <ScrollAnimation animateIn="fadeIn">
        hola como estas
      </ScrollAnimation>
        <div className={BrochureCSS.izquierda}>
          <h2>Sobre Asset</h2>
          <h2>Quarters Family 1</h2>
          <h2>Seguridad</h2>
          <h2>Diseño</h2>
          <h2>Servicios</h2>
          <h2>Calidad</h2>
          <h2>Ubicación</h2>
          <h2>Equipo</h2>
          <h2>¿Planos?</h2>
        </div>
        <div className={BrochureCSS.derecha}>
          <img className={BrochureCSS.logo} src="" alt="" />
        </div>
      </div>

      {/* Repite esta estructura para los otros elementos con las clases slide2, slide3, etc. */}
      
      <div className={`${BrochureCSS.slide1}`}>
          <Parallax y={[-20, 20]}>
            <div className={BrochureCSS.izquierda}>
              <h2>Título</h2>
              <p>Texto de relleno</p>
            </div>
          </Parallax>
        <div className={BrochureCSS.derecha}>
          <img className={BrochureCSS.img} src="https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg" alt="" />
        </div>
      </div>

      {/* Repite esta estructura para los otros elementos con las clases slide2, slide3, etc. */}
      <div className={`${BrochureCSS.slide2}`}>
          <Parallax y={[-20, 20]}>
            <div className={BrochureCSS.izquierda}>
              <h2>Título</h2>
              <p>Texto de relleno</p>
            </div>
          </Parallax>
        <div className={BrochureCSS.derecha}>
            <img className={BrochureCSS.img} src="https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg" alt="" />
        </div>
      </div>
      <div className={`${BrochureCSS.slide3}`}>
          <Parallax y={[-20, 20]}>
            <div className={BrochureCSS.izquierda}>
              <h2>Título</h2>
              <p>Texto de relleno</p>
            </div>
          </Parallax>
        <div className={BrochureCSS.derecha}>
            <img className={BrochureCSS.img} src="https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg" alt="" />
        </div>
      </div>
      <div className={`${BrochureCSS.slide4}`}>
          <Parallax y={[-20, 20]}>
            <div className={BrochureCSS.izquierda}>
              <h2>Título</h2>
              <p>Texto de relleno</p>
            </div>
          </Parallax>
        <div className={BrochureCSS.derecha}>
            <img className={BrochureCSS.img} src="https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg" alt="" />
        </div>
      </div>
      <div className={`${BrochureCSS.slide5}`}>
          <Parallax y={[-20, 20]}>
            <div className={BrochureCSS.izquierda}>
              <h2>Título</h2>
              <p>Texto de relleno</p>
            </div>
          </Parallax>
        <div className={BrochureCSS.derecha}>
            <img className={BrochureCSS.img} src="https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg" alt="" />
        </div>
      </div>
      <div className={`${BrochureCSS.slide6}`}>
          <Parallax y={[-20, 20]}>
            <div className={BrochureCSS.izquierda}>
              <h2>Título</h2>
              <p>Texto de relleno</p>
            </div>
          </Parallax>
        <div className={BrochureCSS.derecha}>
            <img className={BrochureCSS.img} src="https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg" alt="" />
        </div>
      </div>

    </div>
      </ParallaxProvider>
    );
  }
  
export default Brochure;

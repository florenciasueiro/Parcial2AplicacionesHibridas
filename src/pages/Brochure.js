import React, { useRef } from "react";
import { useInView } from "framer-motion";
import BrochureCSS from '../css/Brochure.module.css';

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div className={BrochureCSS.titulos}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
        }}
      >
        {children}
      </div>
    </section>
  );
}

function Brochure() {
  return (
    <div>
      <div className={BrochureCSS.portada}>
        <div className={`${BrochureCSS.izquierda}`}>
        </div>
        <div className={BrochureCSS.derecha}>
          <img className={BrochureCSS.logo} src="../img/LogoBlanco.png" alt="" />
        </div>
      </div>
      <Section>      <div className={`${BrochureCSS.indice}`}>
        <div className={BrochureCSS.izquierda}>
          {/* Utiliza motion.div para aplicar la animación */}
          <h2>
            Sobre Asset
          </h2>
          <h2 className={BrochureCSS.fadeIn}>
            Quarters Family 1
          </h2>
          <h2 className={BrochureCSS.fadeIn}>
          Seguridad
          </h2>
          <h2 className={BrochureCSS.fadeIn}>
          Diseño
          </h2>
          <h2 className={BrochureCSS.fadeIn}>
          Diseño
          </h2>
          <h2 className={BrochureCSS.fadeIn}>
          Servicios
          </h2>
          <h2 className={BrochureCSS.fadeIn}>
          Calidad
          </h2>
          <h2 className={BrochureCSS.fadeIn}>
          Ubicación
          </h2>
          <h2 className={BrochureCSS.fadeIn}>
          Equipo
          </h2>
          <h2 className={BrochureCSS.fadeIn}>
          ¿Planos?
          </h2>
        </div>
        <div className={BrochureCSS.derecha}>
          <img className={BrochureCSS.logo} src="" alt="" />
        </div>
      </div></Section>
      <Section>Quarters Family 1</Section>
      <Section>Seguridad</Section>
      <Section>Diseño</Section>
      <Section>Servicios</Section>
      <Section>Calidad</Section>
      <Section>Ubicación</Section>
      <Section>Equipo</Section>
      <Section>¿Planos?</Section>
    </div>
  );
}

export default Brochure;









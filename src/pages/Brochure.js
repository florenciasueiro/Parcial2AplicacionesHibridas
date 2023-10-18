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
        }}>

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

  <div className={`${BrochureCSS.indice}`}>
    <div>
      <Section>
        <h2 className={`${BrochureCSS.about} ${BrochureCSS.h2}`}>
          <a href="#sobreAsset">Sobre Asset</a>
        </h2>
      </Section>
      <Section>
      <h2 className={BrochureCSS.h2}>
        <a href="#QF1">Quarters Family 1</a>
      </h2>
      </Section>
      <Section>
      <h2 className={BrochureCSS.h2}>
        <a href="#seguridad">Seguridad</a>
      </h2>
      </Section>
      <Section>
      <h2 className={BrochureCSS.h2}>
        <a href="#diseno">Diseño</a>
      </h2>
      </Section>
      <Section>
      <h2 className={BrochureCSS.h2}>
        <a href="#servicios">Servicios</a>
      </h2>
      </Section>
      <Section>
      <h2 className={BrochureCSS.h2}>
        <a href="#calidad">Calidad</a>
      </h2>
      </Section>
      <Section>
      <h2 className={BrochureCSS.h2}>
        <a href="#ubicacion">Ubicación</a>
      </h2>
      </Section>
      <Section>
      <h2 className={BrochureCSS.h2}>
        <a href="#equipo">Equipo</a>
      </h2>
      </Section>
      <Section>
      <h2 className={BrochureCSS.h2}>
        <a href="#planos">¿Planos?</a>
      </h2>
      </Section>
    </div>

  </div>
      <Section>
        <div  id="sobreAsset" className={`${BrochureCSS.slide1}`}>
          <div className={BrochureCSS.izquierda}>
                <div className={BrochureCSS.margenes}>
                  <div>
                  <h2 className={BrochureCSS.temas}>Sobre Asset</h2>
                  <p className={BrochureCSS.parrafo}>Simplificar la vida de las personas.
                  En asset, simplificamos la vida de las personas, creando productos y servicios simples, innovadores e inteligentes.En Asset,nos comprometemos a llevar a cabo todas nuestras acciones de manera ética, honesta y en pleno cumplimiento de la ley,incluso cuando esto genere dificultades o costos significativos para nosotros.Asset se encuentra en todo el proceso del desarrollo inmobilirario, otorgando los más altos estándares de calidad.Tierra - Proyecto - Comercialización - Contrucción  y Adminitración.
                  </p>
                  </div>
                </div>
          </div>
      <div className={`${BrochureCSS.derechaqf} ${BrochureCSS.derecha}`}>
          <img className={BrochureCSS.imgqf1} src="https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg" alt="" />
          <img className={BrochureCSS.imgqf1} src="https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg" alt="" />
          <img className={BrochureCSS.imgqf1} src="https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg" alt="" />
          <img className={BrochureCSS.imgqf1} src="https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg" alt="" />
      </div>
    </div>
    </Section>
      <Section>
        <div id="QF1" className={`${BrochureCSS.slide2}`}>
          <div className={BrochureCSS.izquierda}>
            <div className={BrochureCSS.margenes}>
            <h2 className={BrochureCSS.temas}>Quarters Family 1</h2>
            <p className={BrochureCSS.parrafo}>Quarters Family es nuestra linea de productos destinado/para familias con hijos/as y tiene como objetivo principal ser de los más seguros de la ciudad. Después de la seguridad, nuestro objetivo es maximizar el tiempo de calidad en familia. Diseñamos espacios y servicios para que solo tengas que dedicarte a disfrutar. Propuesta de valor (debe enterderse rápidamente yfacilmente).Con diseño innovador, simple e inteligente, Quarters family 1 tienen todo lo que necesitas.</p>
          </div></div>
      <div className={BrochureCSS.derecha}>
          <img className={BrochureCSS.img} src="https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg" alt="" />
      </div>
    </div>
    </Section>
    <Section className={`${BrochureCSS.secVideo}`}>
      <div className={`${BrochureCSS.video}`}>
        <video>
          <source src="https://res.cloudinary.com/dazsjxtmy/video/upload/v1682603550/02_QF1_ACCESO_FINAL_x0qwez.mp4" type="video/mp4" />
        </video>
      </div>
    </Section>


      <Section>
        <div id="seguridad" className={`${BrochureCSS.slide3}`} >
          
          <div className={BrochureCSS.izquierda}>
          <div className={BrochureCSS.margenes}>
            <h2 className={BrochureCSS.temas}>Seguridad</h2>
            <p className={BrochureCSS.parrafo}>Quarters family 1 tiene un sistema de acceso inteligente que permite que ingreses fácil y rápido. El sistema de control de acceso los vas a manejar desde nuestra app y vas a poder administrar claves, huellas y las tarjetas vinculadas. En el acceso encontrarás lockers para que puedas hacer tu compra de e-commerse sin que tengas que estar en tu casa y un excelente sistema de cámaras, monitoreado en tiempo real las 24 horas para brindarles la máxima seguridad.</p>
          </div></div>
      <div className={BrochureCSS.derecha}>
          <img className={BrochureCSS.img} src="https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg" alt="" />
      </div>
    </div></Section>
      <Section>      <div id="diseno" className={`${BrochureCSS.slide4}`}>
          
          <div className={BrochureCSS.izquierda}>
          <div className={BrochureCSS.margenes}>
            <h2 className={BrochureCSS.temas}>Diseño</h2>
            <p className={BrochureCSS.parrafo}>Con diseño sofisticado y la curva como insignia de marca, Quarters family 1 es la combinación perfecta entre ingeniería y diseño.  Los servicios de electricidad, gas, agua potable y fibra óptica están bajo tierra y el funcionamiento de los servicios generales están garantizados los 365 días del año, por la colocación de un generador eléctrico.  El sistema de construcción industrializado es flexible, de alta durabilidad, eficaz energéticamente y nos permite reducir los tiempos de obra.  La calle interna tendrá adoquinado para mejorar el acceso a cada terreno y estará rodeada de juegos y de más de 1300 especies del diseño paisajístico.</p>
          </div></div>
      <div className={BrochureCSS.derecha}>
          <img className={BrochureCSS.img} src="https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg" alt="" />
      </div>
    </div></Section>
      <Section>      <div id="servicios" className={`${BrochureCSS.slide5}`}>
          
          <div className={BrochureCSS.izquierda}>
          <div className={BrochureCSS.margenes}>
            <h2 className={BrochureCSS.temas}>Servicios</h2>
            <p className={BrochureCSS.parrafo}>Nuestros amenities, juegos de exterior y eventos están pensados para vos y tus hijos.  Usa nuestra app, enterate de nuestros eventos y reserva el sum o la sala de juegos cuando quieras. Solo tenes que disfrutar, nosotros nos encargamos del resto.</p>
            <h2 className={BrochureCSS.temas}>Calidad</h2>
            <p className={BrochureCSS.parrafo}>Las pruebas y el control exhaustivo en el proceso de diseño y obra, hacen que el proyecto cumpla con nuestros altos estándares de calidad.  Quarters family 1, tiene aprobadas factibilidades de tipo municipal, provincial y de las empresas prestadoras de servicios.</p>
            </div>
          </div>
      <div className={BrochureCSS.derecha}>
          <img className={BrochureCSS.img} src="https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg" alt="" />
      </div>
    </div></Section>
      <Section>      <div id="ubicacion" className={`${BrochureCSS.slide6}`}>
          
          <div className={BrochureCSS.izquierda}>
          <div className={BrochureCSS.margenes}>
            <h2 className={BrochureCSS.temas}>Ubicación</h2>
            <p className={BrochureCSS.parrafo}>Ubicado en un terreno de 5000 m2, en calle 90 esquina 5, a 10 minutos del centro de la Ciudad de La Plata, el barrio cuenta con 13 lotes con medidas que van desde los 207 a los 330 m2. </p>
          </div></div>
      <div className={BrochureCSS.derecha}>
          <img className={BrochureCSS.img} src="https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg" alt="" />
      </div>
    </div></Section>
      <Section>      <div id="equipo" className={`${BrochureCSS.slide7}`}>
          
          <div className={BrochureCSS.izquierda}>
          <div className={BrochureCSS.margenes}>
            <h2 className={BrochureCSS.temas}>Equipo</h2>
            <p className={BrochureCSS.parrafo}>Nos emociona que nuestros equipos innoven para crear experiencias únicas En Asset, somos afortunados de estar rodeados de personas excepcionales que se esfuerzan para simplificar la vida de las personas, creando productos y servicios simples e inteligentes que generen experiencias únicas. Nuestro compromiso es brindarle a nuestros clientes, inversores, proveedores y distribuidores los recursos, las herramientas y las oportunidades para crear juntos productos y servicios increíbles.  </p>
          </div></div>
      <div className={BrochureCSS.derecha}>
          <img className={BrochureCSS.img} src="https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg" alt="" />
      </div>
    </div></Section>
    <Section>      <div id="planos" className={`${BrochureCSS.slide8}`}>
          
          <div className={BrochureCSS.izquierda}>
          <div className={BrochureCSS.margenes}>
            <h2 className={BrochureCSS.temas}>Planos</h2>
            <p className={BrochureCSS.parrafo}>Nos emociona que nuestros equipos innoven para crear experiencias únicas En Asset, somos afortunados de estar rodeados de personas excepcionales que se esfuerzan para simplificar la vida de las personas, creando productos y servicios simples e inteligentes que generen experiencias únicas. Nuestro compromiso es brindarle a nuestros clientes, inversores, proveedores y distribuidores los recursos, las herramientas y las oportunidades para crear juntos productos y servicios increíbles.  </p>
          </div></div>
      <div className={BrochureCSS.derecha}>
          <img className={BrochureCSS.img} src="https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg" alt="" />
      </div>
    </div></Section>
    <Section>      <div id="cuadro" className={`${BrochureCSS.slide9}`}>
      <div className={`${BrochureCSS.circles} ${BrochureCSS.circle1}`}> <p className={`${BrochureCSS.cuadroText} ${BrochureCSS.text1}`}>Soluciones</p></div>
      <div className={`${BrochureCSS.circles} ${BrochureCSS.circle2}`}> <p className={`${BrochureCSS.cuadroText} ${BrochureCSS.text2}`}>Tecnología</p></div>
      <div className={BrochureCSS.cuadroLogo}>
          <img className={BrochureCSS.cLogo} src="../img/LogoBlanco.png" alt="" />
        </div>
      <div className={`${BrochureCSS.circles} ${BrochureCSS.circle3}`}><p className={`${BrochureCSS.cuadroText} ${BrochureCSS.text3}`}>Innovación</p></div>
      <div className={`${BrochureCSS.circles} ${BrochureCSS.circle4}`}><p className={`${BrochureCSS.cuadroText} ${BrochureCSS.text4}`}>Gestión 360</p></div>
      <div className={`${BrochureCSS.text}`}>
      <p>Te va a encantar lo simple que es vivir en Quarters family 1 y una vez que lo hagas, vas a ver lo que hace única la experiencia Asset. </p>
      </div>


      
      </div>
    </Section>
      <Section>    <div className={`${BrochureCSS.contraportada}`}>
          
          <div className={BrochureCSS.izquierda}><div className={BrochureCSS.margenes}>
          <img className={BrochureCSS.logo} src="logo" alt="" />
            <p className={BrochureCSS.parrafoFinal}>Las fotos, planos, ilustraciones, renders, y las superficies y medidas expresadas en este folleto, solo son propuestas y son una representación del proyecto para facilitar su interpretación. No son vinculantes, carecen de rigor técnico y están sujetas a eventuales modificaciones del desarrollador sin previo aviso; quien se reserva el derecho de revisar, modificar, suplementar, complementar o retirar las mismas, total o parcialmente a su sola discreción. Las amenidades, facilidades y atracciones de este folleto están sujetas a cambios del desarrollador sin previo aviso. La información inserta en estos folletos se considera confiable, pero no está garantizada y debe ser verificada de forma independiente. Representaciones orales de personas ajenas al desarrollador, incluyendo inmobiliarias, brokers y comercializadores, no pueden considerarse como correctas declaraciones del desarrollador. Asset Real Estate S.A - Fideicomiso de administrción y construcción Quarters Family 1- CUIT  </p>
          </div></div>
      <div className={BrochureCSS.derecha}>
      </div>
    </div></Section>
    </div>
  );
}

export default Brochure;

import React from 'react';
import ResumenCSS from '../css/Resumen.module.css';
import Payment from './Payment';

// Importa las imágenes que deseas mostrar
// import image1 from './image1.jpg';
// import image2 from './image2.jpg';
// import image3 from './image3.jpg';

const AppleStyle = () => {
  return (
    <div className={ResumenCSS.container}>
      {/* <div className={ResumenCSS.imageContainer}>
        <img src={image1} alt="Image 1" className={ResumenCSS.image} />
        <img src={image2} alt="Image 2" className={ResumenCSS.image} />
        <img src={image3} alt="Image 3" className={ResumenCSS.image} />
      </div> */}
      <div className={ResumenCSS.textContainer}>
        <h1 className={ResumenCSS.title}>Título del Bloque de Texto</h1>
        <p className={ResumenCSS.subtitle}>
          Subtítulo del Bloque de Texto
        </p>
        <p className={ResumenCSS.text}>
          <Payment/>
        </p>
        <a href="#" className={ResumenCSS.button}>Botón</a>
      </div>
    </div>
  );
};

export default AppleStyle;

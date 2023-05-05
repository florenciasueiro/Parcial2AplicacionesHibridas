import React from 'react';
import ResumenCSS from '../css/Resumen.module.css';

// Importa las imágenes que deseas mostrar
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

const AppleStyle = () => {
  return (
    <div className={ResumenCSS.container}>
      <div className={ResumenCSS.imageContainer}>
        <img src={image1} alt="Image 1" className={ResumenCSS.image} />
        <img src={image2} alt="Image 2" className={ResumenCSS.image} />
        <img src={image3} alt="Image 3" className={ResumenCSS.image} />
      </div>
      <div className={ResumenCSS.textContainer}>
        <h1 className={ResumenCSS.title}>Título del Bloque de Texto</h1>
        <p className={ResumenCSS.subtitle}>
          Subtítulo del Bloque de Texto
        </p>
        <p className={ResumenCSS.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam bibendum, dolor nec lacinia tincidunt, magna massa
          tristique dui, vel consequat sapien  felis in lectus. Sed
          lacinia volutpat tempor. Morbi porttitor leo vel eros
          tincidunt, at congue nunc dapibus. Sed suscipit dolor a
          lorem ullamcorper, sit amet semper metus tempor. Integer
          ornare eros in imperdiet bibendum. Nam gravida turpis nec
          velit dictum, id lobortis mauris lobortis. Nulla et velit
          nulla. In imperdiet lectus eu commodo tristique. Integer
          tempor, purus vel lobortis maximus, mi felis malesuada
          lorem, eu commodo justo orci sed velit. Ut quis libero
          in risus sagittis malesuada ac at justo. Donec id feugiat
          nibh, sit amet tristique arcu. Etiam bibendum ultrices
          metus vitae commodo.
        </p>
        <a href="#" className={ResumenCSS.button}>Botón</a>
      </div>
    </div>
  );
};

export default AppleStyle;

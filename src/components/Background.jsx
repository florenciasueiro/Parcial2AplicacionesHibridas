import React from 'react';
import bgCSS from '../css/Background.module.css';

export function Background() {
  return (
    <div className={bgCSS.contenedor}>
      <img className={bgCSS.imagen} src="img/image1.png" alt="" />
    </div>
  );
}

export function BackgroundRegistro() {
  return (
    <div className={bgCSS.contenedor2}>
      <img className={bgCSS.imagen} src="img/image2.png" alt="" />
    </div>
  );
}

import React from 'react';
import bgCSS from '../css/Background.module.css';

export function Background() {
  return (
    <div className={bgCSS.contenedor}>
      <img className={bgCSS.imagen} src="img/01_ACCESO_4K_POS.png" alt="" />
    </div>
  );
}

export function BackgroundRegistro() {
  return (
    <div className={bgCSS.contenedor2}>
      <img className={bgCSS.imagen} src="img/07_INTERIOR_GUARDERIA_4K_POS.png" alt="" />
    </div>
  );
}

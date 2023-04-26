import React from 'react';
import bgCSS from '../css/Background.module.css';
import videobg from '../assets/09_QF1_DETALLE_VERTICAL_FINAL.mp4';

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

export function BackgroundQuarters() {
  return (
    <div className={bgCSS.contenedor}>
      <video className={bgCSS.video} src={videobg} autoPlay loop muted/>
    </div>
  );
}
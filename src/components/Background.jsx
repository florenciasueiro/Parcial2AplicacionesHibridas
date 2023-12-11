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

export function BackgroundQuarters() {
  const videoUrl = "https://res.cloudinary.com/dazsjxtmy/video/upload/f_auto/v1702311598/09_QF1_DETALLE_VERTICAL_FINAL_k2polp.mp4";

  return (
    <div className={bgCSS.contenedor}>
      <div className={bgCSS.black}></div>
      <video controls={false} className={bgCSS.video} src={videoUrl} autoPlay loop muted/>
    </div>
  );
}

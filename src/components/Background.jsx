import React from 'react'
import bgCSS from '../css/Background.module.css'
import video from '../assets/video-background.mp4'

function Background() {
  return (
    <div className={bgCSS.contenedor}>
        <img className={bgCSS.imagen} src="img/01_ACCESO_4K_POS.png" alt="" />
    </div>
  )
}

export default Background
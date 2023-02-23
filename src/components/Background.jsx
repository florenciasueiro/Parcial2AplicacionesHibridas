import React from 'react'
import bgCSS from '../css/Background.module.css'
import video from '../assets/video-background.mp4'

function Background() {
  return (
    <div className={bgCSS.contenedor}>
        <video className={bgCSS.video} src={video} autoPlay loop muted/>
    </div>
  )
}

export default Background
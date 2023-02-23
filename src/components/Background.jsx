import React from 'react'
import bgCSS from './Background.module.css'

function Background() {
  return (
    <div className={bgCSS.contenedor}>
        <video className={bgCSS.video} src="/assets/video-background.mp4"/>
    </div>
  )
}

export default Background
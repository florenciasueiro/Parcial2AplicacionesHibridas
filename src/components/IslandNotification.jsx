import React, { useState, useEffect } from 'react';
import IslandNotificationCSS from '../css/IslandNotification.module.css';

function IslandNotification({ playAnimation, message }) {


  return (
    <div className={`${IslandNotificationCSS.container} ${playAnimation ? IslandNotificationCSS.show : ''}`}>
      <div style={{textAlign:"center"}}className={`${IslandNotificationCSS.notification} ${playAnimation ? IslandNotificationCSS.playAnimation : ''}`}>
        <br/>
        <br/>
        <h3 style={{color:"black"}}>{message}</h3>
        <br/>
      </div>
    </div>
  );
}

export default IslandNotification;

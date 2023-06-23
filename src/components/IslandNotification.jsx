import React, { useState, useEffect, useContext } from 'react';
import IslandNotificationCSS from '../css/IslandNotification.module.css';
import  {Context} from '../context/notification-context'
function IslandNotification({message }) {
  const {playAnimation, notificar, notification} = useContext(Context);
  
  // useEffect(()=> { alert('test')},[playAnimation])

  return (
    <div className={`${IslandNotificationCSS.container} ${playAnimation ? IslandNotificationCSS.show : ''}`}>
      <div style={{textAlign:"center"}}className={`${IslandNotificationCSS.notification} ${playAnimation ? IslandNotificationCSS.playAnimation : ''}`}>
        <br/>
        <br/>
        <h3 style={{color:"black"}}>{message}{notification}</h3>
        <br/>
      </div>
    </div>
  );
}

export default IslandNotification;

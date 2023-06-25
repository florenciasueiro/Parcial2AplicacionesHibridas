import React, { useState, useEffect, useContext } from 'react';
import IslandNotificationCSS from '../css/IslandNotification.module.css';
import  {Context} from '../context/notification-context'
function IslandNotification({message }) {
  const {playAnimation, notificar, notification} = useContext(Context);
  
  // useEffect(()=> { alert('test')},[playAnimation])

  return (
    <div className={`${IslandNotificationCSS.container}  ${playAnimation ? IslandNotificationCSS.show : ''}`}>
      <div className={`${IslandNotificationCSS.notification}  ${playAnimation ? IslandNotificationCSS.playAnimation : ''}`}>
        <br/>
        <br/>
        <span style={{color:"black"}}>{notification}</span>
        <br/>
      </div>
    </div>
  );
}

export default IslandNotification;

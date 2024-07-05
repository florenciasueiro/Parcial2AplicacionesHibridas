import React, { useState, useEffect, useContext } from 'react';
import IslandNotificationCSS from '../css/IslandNotification.module.css';
import  {Context} from '../context/notification-context'
function IslandNotification({message }) {
  const {playAnimation, notificar, notification} = useContext(Context);
  
  // useEffect(()=> { alert('test')},[playAnimation])

  return (
    <div className={`${IslandNotificationCSS.container}  ${IslandNotificationCSS.show}`}>
      <div className={`${IslandNotificationCSS.notification}  ${playAnimation ? IslandNotificationCSS.playAnimation : ''}`}>
        <span className={IslandNotificationCSS.contenido}>{notification}</span>
      </div>
    </div>
  );
}

export default IslandNotification;

import React, { useState, useEffect } from 'react';
import IslandNotificationCSS from '../css/IslandNotification.module.css';

function IslandNotification({ playAnimation }) {


  return (
    <div className={`${IslandNotificationCSS.container} ${playAnimation ? IslandNotificationCSS.show : ''}`}>
      <div className={`${IslandNotificationCSS.notification} ${playAnimation ? IslandNotificationCSS.playAnimation : ''}`}>
        <h3>Notificacion</h3>
      </div>
    </div>
  );
}

export default IslandNotification;

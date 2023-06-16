import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import IslandNotificationCSS from '../css/IslandNotification.module.css';

function IslandNotification({ playAnimation, message }) {
  const location = useLocation();
  const isShopPage = location.pathname === '/shop';

  return (
    <div className={`${IslandNotificationCSS.container} ${isShopPage ? IslandNotificationCSS.containerBlack : ''} ${playAnimation ? IslandNotificationCSS.show : ''}`}>
      <div className={`${IslandNotificationCSS.notification} ${isShopPage ? IslandNotificationCSS.notificationBlack : ''} ${playAnimation ? IslandNotificationCSS.playAnimation : ''}`}>
        <br/>
        <br/>
        <h3 className={`${IslandNotificationCSS.text} ${isShopPage ? IslandNotificationCSS.textBlack : ''}`}>{message}</h3>
        <br/>
      </div>
    </div>
  );
}

export default IslandNotification;

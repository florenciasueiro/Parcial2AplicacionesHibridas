import { useState, useEffect } from 'react';
import FeedbackCSS from '../css/Feedback.module.css';
import { BackgroundQuarters } from '../components/Background';

function Inicio() {
  const urlParams = new URLSearchParams(window.location.search);
  const status = Object.fromEntries(urlParams).status;
  console.log(Object.fromEntries(urlParams))
  let message = '';

  if (status === 'approved') {
    message = 'TU COMPRA ESTÁ APROBADA';
  } else if (status === 'failure') {
    message = 'TU COMPRA ESTÁ RECHAZADA';
  } else if (status === 'pending') {
    message = 'TU COMPRA ESTÁ EN PROCESO';
  }

  return (
    <div className={FeedbackCSS.inicio}>
      <div className={FeedbackCSS.text}>
        <h1 className={FeedbackCSS.h1}>FEED: {message}</h1>
      </div>
      <>
        <BackgroundQuarters className={FeedbackCSS.background} />
      </>
    </div>
  );
}

export default Inicio;

import {useState, useEffect } from 'react';
import FeedbackCSS from '../css/Feedback.module.css';
import { BackgroundQuarters } from  '../components/Background';
// import useFeedback from '../Service/APIFeedback'



function Inicio() {

  const urlParams = new URLSearchParams(window.location.search);
  const apiUrl = 'http://localhost:8080/feedback';
  console.log(Object.fromEntries(urlParams).status)// tomo del link de la pagina los datos que me manda mercado pago
  console.log(Object.fromEntries(urlParams).status)
  return (
    <div className={FeedbackCSS.inicio}>
      <div className={FeedbackCSS.text}>
        <h1 className={FeedbackCSS.h1}>ESTO ES EL FEEDBACK</h1>
      </div>
      <>
      <BackgroundQuarters className={FeedbackCSS.background}/>
      </>
    </div>
  );
}



export default Inicio;
//xd


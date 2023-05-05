import React from 'react';
import FeedbackCSS from '../css/Feedback.module.css';
import { BackgroundQuarters } from  '../components/Background';



function Inicio() {
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


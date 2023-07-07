import React, { useState } from 'react';
import FAQCSS from '../css/PreguntasFrecuentes.module.css';

const PreguntaFrecuente = ({ pregunta, respuesta, handleLogic }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={FAQCSS.faqContainer}>
      <div className={FAQCSS.faqQuestion} onClick={toggleVisible}>
        {pregunta}
        {/* <a className={FAQCSS.arrowDownClose} onclick="openDropdown(this)"></a> */}
        <span className={`${FAQCSS.faqChevron} ${visible ? FAQCSS.faqChevronUp : FAQCSS.faqChevronDown}`}></span>
      </div>
      {visible && (
        <div className={FAQCSS.faqAnswer}>
          {respuesta}
          
        </div>
      )}
    </div>
  );
};

export default PreguntaFrecuente;

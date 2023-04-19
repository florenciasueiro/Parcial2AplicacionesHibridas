import React from "react";
import PreguntasFrecuntesCSS from '../css/PreguntasFrecuentes.module.css';

const Accordion = ({ title, content }) => {
  return (
    <div className={PreguntasFrecuntesCSS.accordion}>
      <div className={PreguntasFrecuntesCSS.accordionHeader}>{title}</div>
      <div className={PreguntasFrecuntesCSS.accordionContent}>{content}</div>
    </div>
  );
};

export default Accordion;
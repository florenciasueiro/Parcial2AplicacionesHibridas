import React, { useState } from "react";
import Accordion from "../components/PreguntasFrecuentes";
import "../css/PreguntasFrecuentes.module.css";

const faqs = [
  {
    title: "¿Qué es Asset?",
    content:
      "ReactJS es una biblioteca JavaScript de código abierto utilizada para construir interfaces de usuario o UI. Fue desarrollada por Facebook y está diseñada para simplificar el proceso de creación de aplicaciones web complejas e interactivas.",
  },
  {
    title: "¿Qué hacemos?",
    content:
      "CSS (Cascading Style Sheets) es un lenguaje de hojas de estilo utilizado para describir la presentación visual de un documento HTML o XML. Permite separar la estructura de un documento web de su presentación visual, lo que hace que sea más fácil de mantener y modificar.",
  },
];

const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="app">
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          title={faq.title}
          content={faq.content}
          isActive={index === activeIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default App;

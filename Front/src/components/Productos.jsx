import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CACSS from '../css/CardAsset.module.css';

const Productos = ( card, cardData ) => {

  return (
    <div className={CACSS.card}>

      <div className={CACSS.rightSection}>
        <div
          className={`${CACSS.imageContainer}`}
        >
          <div className={CACSS.front}>
            <img className={CACSS.img} src={card.imageUrl} alt="" />
          </div>
          <div className={CACSS.back}>
            <span>{card.description}</span>
          </div>
        </div>
      </div>
      
      <div className={CACSS.leftSection}>
        <div className={CACSS.icon}>
          <button className={CACSS.btn}>
            <FontAwesomeIcon icon={faPlus} />
            <p className={CACSS.registerText}>{card.text}</p>
            {card.buttons && card.buttons.map((input, index) => (
            <div  key={index}>
                  <div>
                      <button className={CACSS.btn} onClick={input.onClick}> {input.button} </button>
                  </div>
              </div>
            ))}
          </button>
        </div>
        <div className={`${CACSS.title}`}>
          <h2 className={CACSS.h1}>{card.title}</h2>
          <h3 className={CACSS.h2}>{card.subtitle}</h3>
        </div>
      </div>
    </div>
  );
};

export default Productos;

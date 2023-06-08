import React, { useState } from 'react';
import GridCSS from '../css/Grid.module.css';
import { Link } from 'react-router-dom';
import ModalProductGrid from './Modal';

function ProductGrid({ card, cardData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={GridCSS.tarjeta}>
      <div className={GridCSS.black}></div>
      <Link className={GridCSS.link} to={card.link}>
        <div className={GridCSS.card} onClick={handleOpenModal}>
          <div className={GridCSS.cardBodyInicio}>
            {/* {card.icon && <img className={GridCSS.cardIcon} src={card.icon} alt="Logo" />} */}
            <h1 className={GridCSS.h1}>{card.title}</h1>
            {/* <p>{card.description}</p> */}
          </div>
          <img className={GridCSS.cardImg} src={card.imageUrl} alt="Imagen de la tarjeta" />
        </div>
      </Link>

      <ModalProductGrid card={card} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default ProductGrid;

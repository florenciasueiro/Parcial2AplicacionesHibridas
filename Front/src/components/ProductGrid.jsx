import React, { useState } from 'react';
import GridCSS from '../css/Grid.module.css';
import { Link } from 'react-router-dom';
import ModalProductGrid from './Modal';

function ProductGrid({ card, cardData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    if (card.id === 102){
      setIsModalOpen(false);
    }
    else {
      setIsModalOpen(true);
    }
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`${GridCSS.tarjeta} ${card.id === 102 ? GridCSS.defaultCursor : ''}`}>
      <div className={GridCSS.black}></div>
      <Link className={GridCSS.link} to={card.link}>
        <div className={GridCSS.card} onClick={handleOpenModal}>
          <div className={GridCSS.cardBodyInicio}>
            {/* {card.icon && <img className={GridCSS.cardIcon} src={card.icon} alt="Logo" />} */}
            <h2 className={GridCSS.h1}>
              {card.title}
                <span className={GridCSS.span}>{card.span}</span>
            </h2>
            {/* <p>{card.description}</p> */}
          </div>
          {card.imageUrl && <img className={GridCSS.cardImg} src={card.imageUrl} alt="Imagen de la tarjeta" />}
          {card.videoUrl && <video controls={false} className={GridCSS.cardImg} src={card.videoUrl}  autoPlay loop muted />}
        </div>
      </Link>

      <ModalProductGrid card={card} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default ProductGrid;

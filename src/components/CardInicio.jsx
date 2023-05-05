import React, { useState } from 'react';
import PerfilCSS from '../css/Perfil.module.css';
import { Link } from 'react-router-dom';
import ModalCardInicio from './Modal';

function CardInicio({ card, cardData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    if (card.id === 28) {
      setIsModalOpen(true);
    }
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Link to={card.link}>
  <div className={PerfilCSS.cardInicio} onClick={handleOpenModal}>
    <img className={PerfilCSS.cardImg} src={card.imageUrl} alt="Imagen de la tarjeta" />
    <div className={PerfilCSS.cardBodyInicio}>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </div>
  </div>
</Link>

      <ModalCardInicio card={card} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default CardInicio;
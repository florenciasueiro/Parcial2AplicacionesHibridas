import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
// import { Background } from './Background';
import PerfilCSS from '../css/Perfil.module.css';
import { Link } from 'react-router-dom';
import ModalCardInicio from './ModalPerfil';


function Card({ card, cardData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
      setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };




    return (
        <>
      <Link to={card.link} className={PerfilCSS.card}>
        {/* <img src={card.imageUrl} alt="Imagen de la tarjeta" /> */}
        <div className="card-body" onClick={handleOpenModal}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
        <div className={PerfilCSS.icon}>
        <h2 id={card.id} className={`${PerfilCSS[`${card.className}`]}`}>{card.icon}</h2>
        </div>
      </Link>
        <ModalCardInicio card={card} isOpen={isModalOpen} onClose={handleCloseModal} />
  </>
    );
  }
  
  export default Card;




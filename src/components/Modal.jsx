import React from 'react';
//npm install react-modal
import Modal from 'react-modal';
import PerfilCSS from '../css/Perfil.module.css';

function ModalCardInicio({ card, isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={PerfilCSS.modalCard}
      overlayClassName={PerfilCSS.modalOverlay}
    >
      <div className={PerfilCSS.modalCardHeader}>
        <h3>{card.title}</h3>
        <button className={PerfilCSS.modalCloseButton} onClick={onClose}></button>
      </div>
      <img className={PerfilCSS.modalCardImg} src={card.imageUrl} alt="Imagen de la tarjeta" />
      <div className={PerfilCSS.modalCardBody}>
        <p>{card.description}</p>
      </div>
    </Modal>
  );
}

export default ModalCardInicio;

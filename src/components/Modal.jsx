import React from 'react';
import Modal from 'react-modal';
import { CSSTransition } from 'react-transition-group';
import PerfilCSS from '../css/Perfil.module.css';

function ModalCardInicio({ card, isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={PerfilCSS.modalCard}
      overlayClassName={PerfilCSS.modalOverlayQuarters}>
      <CSSTransition
        in={isOpen}
        timeout={300}
        className={PerfilCSS.modalTransition}
        unmountOnExit>
        <div className={PerfilCSS.modalCardContainer}>
          <div className={PerfilCSS.modalCardHeader}>
            <h3>{card.title}</h3>
            <button className={PerfilCSS.modalCloseButton} onClick={onClose}></button>
          </div>
          <img className={PerfilCSS.modalCardImg} src={card.imageUrl} alt="Imagen de la tarjeta" />
          <div className={PerfilCSS.modalCardBody}>
            <p>{card.description}</p>
          </div>
        </div>
      </CSSTransition>
    </Modal>
  );
}

export default ModalCardInicio;

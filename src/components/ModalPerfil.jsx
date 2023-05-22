import React from 'react';
import Modal from 'react-modal';
import { CSSTransition } from 'react-transition-group';
import PerfilCSS from '../css/Perfil.module.css';



function ModalCardPerfil({ card, isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={PerfilCSS.modalCardApp}
      overlayClassName={PerfilCSS.modalOverlay}>
      <CSSTransition
        in={isOpen}
        timeout={300}
        className={PerfilCSS.modalTransition}
        unmountOnExit>
        <div className={PerfilCSS.modalCardContainer}>
          <div className={PerfilCSS.modalCardHeader}>
            <h2 className={PerfilCSS.icono}>{card.icon}</h2>
            <h3 className={PerfilCSS.titulo}>{card.title}</h3>
            <button className={PerfilCSS.modalCloseButton} onClick={onClose}></button>
          </div>
        <div className={PerfilCSS.modalCardBody}>
            <p className={PerfilCSS.description}>Tu Asset ID es: {card.description}</p>

      {card.inputs && card.inputs.map((input, index) => (

        <div className={PerfilCSS.inputBox} key={index}>
          
            <div className={PerfilCSS.inputContainer}>
                <input
                 pattern="^(?=.[a-z])(?=.[A-Z])(?=.*\d)[A-Za-z\d]{8,}$" 
                 className={PerfilCSS.input} 
                 type={input.type} 
                 placeholder={input.placeholder} 
                 onChange={(e)=> input.change(e.target.value,index)}
                 />
                <button 
                className={input.className}
                onClick={input.onClick}
                >{input.button}</button>
            </div>

        </div>
      ))}

          </div>
        </div>
      </CSSTransition>
    </Modal>
  );
}

export default ModalCardPerfil;

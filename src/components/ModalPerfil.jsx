import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { CSSTransition } from 'react-transition-group';
import PerfilCSS from '../css/Perfil.module.css';



function ModalCardPerfil({ card, isOpen, onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(false);



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
        <div className={PerfilCSS.modalCardContainer} style={{ width: '100%', paddingTop: '15px' }}>

          <div className={PerfilCSS.modalCardHeader}>
            <h2 className={PerfilCSS.icono}>{card.icon}</h2>
            <h3 className={PerfilCSS.titulo}>{card.title}</h3>
            <button className={PerfilCSS.modalCloseButton} onClick={onClose}></button>
          </div>
        <div className={PerfilCSS.modalCardBody}>
            <p className={PerfilCSS.description}>{card.description}</p>
            <div>
              {card.card}
            </div>

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
                className={PerfilCSS.boton}
                onClick={input.onClick}
                >{input.button}</button>
            </div>

        </div>
      ))}
        <div>{card.contenido}</div>
        <button onClick={card.change}>{card.button}</button>


          </div>
        </div>
      </CSSTransition>
    </Modal>
  );
}

export default ModalCardPerfil;

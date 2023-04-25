import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { Background } from './Background';
import PerfilCSS from '../css/Perfil.module.css';
import { Link } from 'react-router-dom';



function Card({ card }) {
    return (
      <Link to="/ruta-de-destino" className={PerfilCSS.card}>
        {/* <img src={card.imageUrl} alt="Imagen de la tarjeta" /> */}
        <div className="card-body">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
        <div className={PerfilCSS.icon}>
          <FontAwesomeIcon style={{ color: '#3248ed' }} icon={faShieldAlt} />
        </div>
      </Link>
    );
  }
  
  export default Card;
  
  
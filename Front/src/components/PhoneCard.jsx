import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faCalendar, faLocationDot, faLanguage, faMobile, faAt } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import PerfilCSS from './Perfil.module.css';

export function CardGrid({ handleClick }) {
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
  const [telefono, setTelefono] = useState(usuario.mobile);

  const cardData = [
    {
      id: 8,
      title: 'Teléfono',
      description: `Teléfono: ${telefono}`,
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faMobile} />,
      inputs: [
        {
          placeholder: 'Número de teléfono',
          type: 'text',
          value: telefono,
          onChange: (event) => setTelefono(event.target.value),
        },
      ],
    },
  ];

  return (
    <div className={PerfilCSS.cardGrid} onClick={handleClick}>
      {cardData.map((card) => (
        <Card className={PerfilCSS.card} key={card.id} card={card} />
      ))}
    </div>
  );
}

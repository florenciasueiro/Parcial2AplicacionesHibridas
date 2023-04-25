import React from 'react';
import Card from './CardApp';
import PerfilCSS from '../css/Perfil.module.css';

function CardGrid() {
  const cardData = [
    {
      id: 1,
      title: 'Asset ID',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Contraseña',
      description: 'Descripción de la tarjeta 2',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Seguridad de la cuenta',
      description: 'Descripción de la tarjeta 3',
      imageUrl: 'https://via.placeholder.com/150',
    },
    // {
    //     id: 4,
    //     title: 'Facturas',
    //     description: 'Descripción de la tarjeta 3',
    //     imageUrl: 'https://via.placeholder.com/150',
    //   },
    //   {
    //     id: 5,
    //     title: 'Resumenes',
    //     description: 'Descripción de la tarjeta 3',
    //     imageUrl: 'https://via.placeholder.com/150',
    //   },
    //   {
    //     id: 6,
    //     title: 'Pedidos de arreglos',
    //     description: 'Descripción de la tarjeta 3',
    //     imageUrl: 'https://via.placeholder.com/150',
    //   },
    //   {
    //     id: 7,
    //     title: 'Mis reservas ',
    //     description: 'Descripción de la tarjeta 3',
    //     imageUrl: 'https://via.placeholder.com/150',
    //   },
    // Agrega más objetos según la cantidad de tarjetas que quieras mostrar
  ];

  return (
    <div className={PerfilCSS.cardGrid}>
      {cardData.map((card) => (
        <Card className={PerfilCSS.card} key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardGrid;

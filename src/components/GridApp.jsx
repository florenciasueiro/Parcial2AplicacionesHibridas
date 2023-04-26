import React from 'react';
import Card from './CardApp';
import PerfilCSS from '../css/Perfil.module.css';

export function CardGrid({ handleClick }) {
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
  ];
  return (
    <div className={PerfilCSS.cardGrid} onClick={handleClick}>
      {cardData.map((card) => (
        <Card className={PerfilCSS.card} key={card.id} card={card} />
      ))}
    </div>
  );
}

export function CardGrid2({ handleClick }) {
  const cardData = [
    {
      id: 1,
      title: 'Nombre',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Cumpleaños',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'País',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Idioma',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      title: 'Teléfono',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      title: 'Correo personal',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 7,
      title: 'Género',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
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

export function CardGrid3({ handleClick }) {
  const cardData = [
    {
      id: 1,
      title: 'Métodos de pago',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
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

export function CardGrid4({ handleClick }) {
  const cardData = [
    {
      id: 1,
      title: 'Miembros de familia',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Agregar nuevo miembro',
      description: 'Descripción de la tarjeta 2',
      imageUrl: 'https://via.placeholder.com/150',
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

export function CardGrid5({ handleClick }) {
  const cardData = [
    {
      id: 1,
      title: 'Productos enlazados',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Enlazar nuevo producto',
      description: 'Descripción de la tarjeta 2',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Pagos',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Facturas',
      description: 'Descripción de la tarjeta 2',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      title: 'Resúmenes',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      title: 'Mantenimiento',
      description: 'Descripción de la tarjeta 2',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 7,
      title: 'Documentacion',
      description: 'Descripción de la tarjeta 2',
      imageUrl: 'https://via.placeholder.com/150',
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

export function CardGrid6({ handleClick }) {
  const cardData = [
    {
      id: 1,
      title: 'SUM',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Guardería',
      description: 'Descripción de la tarjeta 2',
      imageUrl: 'https://via.placeholder.com/150',
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

export function CardGrid7({ handleClick }) {
  const cardData = [
    {
      id: 1,
      title: 'Reservas de servicios',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Reservas de mantenimiento',
      description: 'Descripción de la tarjeta 2',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Reservas de servicios',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Reservas de llamadas',
      description: 'Descripción de la tarjeta 2',
      imageUrl: 'https://via.placeholder.com/150',
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

export function CardGrid8({ handleClick }) {
  const cardData = [
    {
      id: 1,
      title: 'Todavía no se qué poner acá bien.',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
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

export default CardGrid;

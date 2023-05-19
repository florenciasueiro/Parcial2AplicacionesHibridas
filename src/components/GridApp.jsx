import React from 'react';
import Card from './CardApp';
import CardInicio from './CardInicio';
import PerfilCSS from '../css/Perfil.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faKey, faIdCard, faCalendar, faLocationDot, faUser, faMobile, faAt, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

export function CardGrid({ handleClick }) {
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
  const cardData = [
    {
      id: 1,
      title: 'Asset ID',
      description: `${usuario.id}`,
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      id: 2,
      title: 'Contraseña',
      description: `Contraseña: ${usuario.password}`,
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faLock} />,
      class: "",
      inputs: [
        { placeholder: 'Contraseña actual', type: 'password', button: 'PerfilCSS.none' },
        { placeholder: 'Nueva contraseña', type: 'password', button: 'PerfilCSS.none' },
        { placeholder: 'Repetir contraseña', type: 'password', button: 'PerfilCSS.show' }
      ]
    },
    {
      id: 3,
      title: 'Seguridad de la cuenta',
      description: 'Descripción de la tarjeta 3',
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faKey} />,
      // No se especifican inputs para esta tarjeta
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
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
  const cardData = [
    {
      id: 4,
      title: 'Nombre',
      description: `nombre: ${usuario.name}\n Segundo nombreXD:\n Apellido:`,
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faIdCard} />
    },
    {
      id: 5,
      title: 'Cumpleaños',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faCalendar} />
    },
    {
      id: 6,
      title: 'País',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faLocationDot} />
    },
    {
      id: 7,
      title: 'Idioma',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 8,
      title: 'Teléfono',
      description: `telefono: ${usuario.mobile}`,
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faMobile} />
    },
    {
      id: 9,
      title: 'Correo personal',
      description: `${usuario.email}`,
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faAt} />
    },
    {
      id: 10,
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
      id: 11,
      title: 'Métodos de pago',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];
  return (
    <div className={PerfilCSS.cardGrid} onClick={handleClick}>
      {cardData.map((card) => (
        <a href={card.link} key={card.id}>
          <Card className={PerfilCSS.card} card={card} />
        </a>
      ))}
    </div>
  );
}

export function CardGrid4({ handleClick }) {
  const cardData = [
    {
      id: 12,
      title: 'Miembros de familia',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
      icon: "",

    },
    {
      id: 13,
      title: 'Agregar nuevo miembro',
      description: 'Descripción de la tarjeta 2',
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faCirclePlus} />
    },

  ];
  return (
    <div className={PerfilCSS.cardGrid} onClick={handleClick}>
      {cardData.map((card) => (
        <a href={card.link} key={card.id}>
          <Card className={PerfilCSS.card} card={card} />
        </a>
      ))}
    </div>
  );
}

export function CardGrid5({ handleClick }) {
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
  const cardData = [
    {
      id: 14,
      title: 'Productos enlazados',
      description: usuario.productos,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 15,
      title: 'Enlazar nuevo producto',
      description: 'Descripción de la tarjeta 2',
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faCirclePlus} />
    },
    {
      id: 16,
      title: 'Pagos',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 17,
      title: 'Facturas',
      description: 'Descripción de la tarjeta 2',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 18,
      title: 'Resúmenes',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 19,
      title: 'Mantenimiento',
      description: 'Descripción de la tarjeta 2',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 20,
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
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
  console.log(usuario)


  const displayPASS = (serv)=>{ //esta funcion toma como argumento el nombre generico del serivico (sea pase o individual) y busca en la coleccion de servicios del usuario si hay alguno que en el nombre incluya el argumento y despues pregunta si tiene pase
    if (usuario.servicios.find(servicio=> servicio.name.includes(serv)) && usuario.servicios.find(servicio => servicio.name.includes('Pase'))) {
      return `A su ${usuario.servicios.find(servicio=> servicio.name.includes(serv)).name} le quedan ${usuario.servicios.find(servicio=> servicio.name.includes(serv)).units} meses`;
    } else if(usuario.servicios.find(servicio=> servicio.name.includes(serv))) {
      return `Cuenta con ${usuario.servicios.units} horas`;
    }else{
      return 'No tiene servicios activos';
    }
  }

  const cardData = [
    {
      id: 21,
      title: 'SUM',
      description: displayPASS('SUM'),
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 22,
      title: 'Guardería',
      description: displayPASS('Kinder'),
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 999,
      title: 'Coworking',
      description: displayPASS('Pase Coworking'),
      imageUrl: 'https://via.placeholder.com/150',
    }

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
      id: 23,
      title: 'Reservas de servicios',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 24,
      title: 'Reservas de mantenimiento',
      description: 'Descripción de la tarjeta 2',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 25,
      title: 'Reservas de servicios',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 26,
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
      id: 27,
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

export function CardGrid9({ handleClick }) {
  const cardData = [
    {
      id: 28,
      title: 'Mision y vision',
      pie:'Descripción de la tarjeta 1',
      description: 'Descripción de la tarjeta 2',
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1683125222/image9_idbdi3.png',

    },

  ];
  return (
    <div className={PerfilCSS.cardGridInicio} onClick={handleClick}>
      {cardData.map((card) => (
        <CardInicio className={PerfilCSS.cardInicio} key={card.id} card={card} />
      ))}
    </div>
  );
}
export function CardGrid10({ handleClick }) {
  const cardData = [
    {
      id: 29,
      title: 'Eventos',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1683125222/image9_idbdi3.png',
      link: "/eventos",
    },

  ];
  return (
    <div className={PerfilCSS.cardGridInicio} onClick={handleClick}>
      {cardData.map((card) => (
        <CardInicio className={PerfilCSS.cardInicio} key={card.id} card={card} />
      ))}
    </div>
  );
}
export function CardGrid11({ handleClick }) {
  const cardData = [
    {
      id: 29,
      title: 'Evento',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1683125222/image9_idbdi3.png',
      link: "/eventos",
    },

  ];
  return (
    <div className={PerfilCSS.cardGridInicio} onClick={handleClick}>
      {cardData.map((card) => (
        <CardInicio className={PerfilCSS.cardInicio} key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardGrid;

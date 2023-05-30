import React, {useState} from 'react';
import Card from './CardApp';
import CardInicio from './CardInicio';
import PerfilCSS from '../css/Perfil.module.css';
import useEditarUsuario from '../Service/APIeditarUsuario'
import BirthdayCard from './BirthdayCard';
import AddressCard from './CountryCard';
import LanguageCard from './LenguageCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faKey, faIdCard, faCalendar, faShapes,faHouseLaptop, faCalendarCheck, faMoneyCheckDollar, faFileInvoiceDollar, faFileLines, faGears, faFolderOpen, faHouseChimneyUser, faVenusMars, faBox, faLocationDot, faUser, faLanguage, faMobile, faAt, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
//npm install @fortawesome/free-solid-svg-icons
import { faPhoneArrowUpRight } from '@fortawesome/free-solid-svg-icons';


import PDFViewer from '../components/PDFViewer';


export function CardGrid({ handleClick }) {
  const editar =useEditarUsuario();
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
  let datosIngresados=[];
  //0=pass actaul
  //1=pass nueva
  //2=pass nueva repetida
  const handleChange = (e,pos) =>{
    datosIngresados[pos]=e;
    console.log(datosIngresados);  
  }
  const btnClick = ()=>{
    if(datosIngresados[0]!=usuario.password){
      alert("esa no es la contraseña actual");
    }
    else if(datosIngresados[1]!=datosIngresados[2]){
    alert("repetir contraseña y nueva contraseña deben ser iguales")
  }else{
    usuario.password=datosIngresados[2];
    alert("contraseña cambiada con exito!")
    editar(usuario)
  }}
  const cardData = [
    {
      id: 1,
      title: 'Asset ID',
      description: `Tu Asset ID es: ${usuario.id}`,
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
        { placeholder: 'Contraseña actual', type: 'password', change: handleChange},
        { placeholder: 'Nueva contraseña', type: 'password', change: handleChange },
        { placeholder: 'Repetir contraseña', type: 'password',change: handleChange, button: 'Cambiar',onClick: btnClick}
      ],
    },
    {
      id: 3,
      title: 'Seguridad de la cuenta',
      description: 'Descripción de la tarjeta 3',
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faKey} />,
      button: 'Enviar codigo de autenticacion',
      
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
  const [genero, setGenero] = useState(""); // Estado para almacenar el valor seleccionado
  const editar =useEditarUsuario();
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
  const unixTimestamp = usuario.fechaNac;
  const date = new Date(unixTimestamp * 1000); // Multiplicamos por 1000 para convertirlo a milisegundos
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
    console.log("genero", event.target.value) // Actualiza el estado con el valor seleccionado
  };
  const handleGeneroClick = () => { 
    usuario.genero = genero;
    editar(usuario);
  };
  const cardData = [
    {
      id: 4,
      title: 'Nombre',
      description: (
        <span>
          {usuario.name}<br/>
        </span>),
        contenido:(<form>
        <input type="text" id="nombre" name="nombre" placeholder="Modificar nombre"/>
        {/* <input type="text" id="segundoNombre" name="segundoNombre" placeholder="Modificar segundo nombre"/> */}
        <input type="text" id="apellido" name="apellido" placeholder="Modificar apellido"/>
    </form>),
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faIdCard} />,
      button: 'Guardar cambios',
    },
    {
      id: 5,
      title: 'Cumpleaños',
      description:(
        <span style={{ textAlign: 'center' }}>
          {formattedDate}<br/>
          <span>Modificar fecha de nacimiento</span>
        </span>
      ),
      // button: 'Guardar cambios',
      card: <BirthdayCard />,
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faCalendar} />
    },    
    {
      id: 6,
      title: 'País',
      description: '',
      card: <AddressCard/>,
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faLocationDot} />
    },
    {
      id: 7,
      title: 'Idioma',
      description: '',
      card: <LanguageCard />,
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faLanguage} />
    },
    {
      id: 8,
      title: 'Teléfono',
      description: `telefono: ${usuario.mobile}`,
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faMobile} />,
      inputs: [
        { placeholder: 'Añadir nuevo teléfono', type: 'text'},
      ],
      button: 'Añadir',
    },
    {
      id: 9,
      title: 'Correo personal',
      description: `${usuario.email}`,
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faAt} />,
      contenido:(<form>
        <input type="text" id="email" name="email" placeholder="Modificar emal"/>
        <input type="text" id="email" name="segundoNombre" placeholder="Añadir nuevo email"/>
    </form>),
    button: 'Guardar cambios',
    },
    {
      id: 10,
      title: 'Género',
      description: `Modificar genero actual:`,
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faVenusMars} />,
      contenido:   (<form>
      <label for="genero">Género:</label>
      <select id="genero" name="genero" value={usuario.genero} onChange={handleGeneroChange}>
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
        <option value="no-binario">No binario</option>
        <option value="prefiero-no-mencionarlo">Prefiero no mencionarlo</option>
      </select>
      
    </form>),
    button: 'Guardar cambios',
    change: handleGeneroClick,
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
 

  const generarListaFacturas = () => {
    return usuario.facturas.map((facturaId) => (
      <li key={facturaId}>
        <a href={`/factura?id=${facturaId}`}>
          Factura {facturaId}
        </a>
      </li>
    ));
  };



  const cardData = [
    {
      id: 14,
      title: 'Productos enlazados',
      description: usuario.productos,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 'quince',
      title: 'Agregar producto',
      className: 'card1',
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faCirclePlus} />
    },
    {
      id: 16,
      title: 'Pagos',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faMoneyCheckDollar} />,
    },
    {
      id: 17,
      title: 'Facturas',
      description: 'Descripción de la tarjeta 2',
      imageUrl: 'https://via.placeholder.com/150',
      contenido: generarListaFacturas(),
      icon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
    },
    {
      id: 18,
      title: 'Resúmenes',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faFileLines} />,
    },
    {
      id: 19,
      title: 'Mantenimiento',
      description: 'Descripción de la tarjeta 2',
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faGears} />,
    },
    {
      id: 20,
      title: 'Documentacion',
      description: 'Descripción de la tarjeta 2',
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faFolderOpen} />,
    }
  ];

  if (usuario && usuario.productos && usuario.productos.length > 0) {
    const productCard = usuario.productos.map((producto, index) => ({
      id: index + 1,
      title: producto,
      description: producto,
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faBox} />
    }
    
    ));

    cardData.unshift(productCard);


  }

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
      icon: <FontAwesomeIcon icon={faHouseChimneyUser} />,
    },
    {
      id: 22,
      title: 'Guardería',
      description: displayPASS('Kinder'),
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faShapes} />,
    },
    {
      id: 999,
      title: 'Coworking',
      description: displayPASS('Pase Coworking'),
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faHouseLaptop} />,
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
      icon: <FontAwesomeIcon icon={faCalendarCheck} />,
    },
    {
      id: 24,
      title: 'Reservas de mantenimiento',
      description: 'Descripción de la tarjeta 2',
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faCalendarCheck} />,

    },
    {
      id: 26,
      title: 'Reservas de llamadas',
      description: 'Descripción de la tarjeta 2',
      imageUrl: 'https://via.placeholder.com/150',
      // icon: <FontAwesomeIcon icon={faPhoneArrowUpRight} />,
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

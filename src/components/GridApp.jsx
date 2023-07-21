import React, {useState, useContext,useEffect} from 'react';
import Card from './CardApp';
import CardInicio from './CardInicio';
import PerfilCSS from '../css/Perfil.module.css';
import useEditarUsuario from '../Service/APIeditarUsuario'
import useFacturaInfo from '../Service/APIfacturaInfo'
import BirthdayCard from './BirthdayCard';
import AddressCard from './CountryCard';
import LanguageCard from './LenguageCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faKey, faIdCard, faCalendar, faPlus, faShapes,faHouseLaptop, faCalendarCheck, faMoneyCheckDollar, faFileInvoiceDollar, faFileLines, faGears, faFolderOpen, faHouseChimneyUser, faVenusMars, faBox, faLocationDot, faUser, faLanguage, faMobile, faAt, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import {useDolar }    from '../Service/APIdolar';
import CardAsset from './CardAsset'; 
import ProductGrid from './ProductGrid';
import  {Context} from '../context/notification-context'
import {suscrbirUsuario} from '../Service/APIfunnel'
import { format } from 'date-fns';
import Payment from "./Payment";
import { initMercadoPago } from "@mercadopago/sdk-react";
import InternalProvider from "../Service/ContextProvider";
import { SpinnerCircular } from 'spinners-react';
import Checkout from "./Checkout";


// import PDFViewer from '../components/PDFViewer';


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
    // console.log(datosIngresados);  
  }
  const btnClick = ()=>{
    if(datosIngresados[0]!==usuario.password){
      alert("esa no es la contraseña actual");
    }
    else if(datosIngresados[1]!==datosIngresados[2]){
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
      description: `${usuario.email}`,
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faUser} />,

    },
    {
      id: 2,
      title: 'Contraseña',
      description: `Cambiar contraseña`, 
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faLock} />,
      class: "",
      inputs: [
        { placeholder: 'Contraseña actual', type: 'password', change: handleChange},
        { placeholder: 'Nueva contraseña', type: 'password', change: handleChange },
        { placeholder: 'Repetir contraseña', type: 'password',change: handleChange, className: 'boton', button: 'Cambiar',onClick: btnClick}
      ],
    },
    // {
    //   id: 3,
    //   title: 'Seguridad de la cuenta',
    //   description: 'Descripción de la tarjeta 3',
    //   imageUrl: 'https://via.placeholder.com/150',
    //   icon: <FontAwesomeIcon icon={faKey} />,
    //   button: 'Enviar codigo de autenticacion',
      
    //   // No se especifican inputs para esta tarjeta
    // },
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
  const [mobile, setMobile] = useState(""); // Estado para almacenar el valor seleccionado
  const editar =useEditarUsuario();
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
  const unixTimestamp = usuario.fechaNac;
  const date = new Date(unixTimestamp * 1000); // Multiplicamos por 1000 para convertirlo a milisegundos
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
    // alert(event.target.value) // Actualiza el estado con el valor seleccionado
  };
  const handleGeneroClick = () => { 
    usuario.genero = genero;
    editar(usuario);
  };
  const handleTelefonoChange = (e,i) => {
    setMobile(e);
    // console.log("Mobile", e) // Actualiza el estado con el valor seleccionado
  };
  const handleTelefonoClick = () => { 
    usuario.mobile = mobile;
    editar(usuario);
  };

  
  let nombreApellido=[];
  const handleNameChange = (e,pos) =>{
    nombreApellido[pos]=e;
    // console.log(nombreApellido);  
  }

  const btnNameClick = ()=>{
    usuario.name=nombreApellido[0] +" "+ nombreApellido[1] 
    editar(usuario)
  }

  const cardData = [
    {
      id: 4,
      title: 'Nombre',
      description: (
        <span>
          {usuario.name}<br/>
        </span>),

          inputs: [
            { placeholder: 'Nombre', type: 'text', change: handleNameChange},
            { placeholder: 'Apellido', type: 'text',change: handleNameChange, button: 'Cambiar',onClick: btnNameClick}
          ],
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faIdCard} />,
      // button: 'Cambiar',
    },
    {
      id: 5,
      title: 'Cumpleaños',
      description:(
        <span style={{ textAlign: 'center' }}>
          {formattedDate}<br/>
        </span>
      ),
      // button: 'Cambiar',
      card: <BirthdayCard />,
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faCalendar} />
    },    
    {
      id: 6,
      title: 'Direccion',
      description: usuario.address.address ? usuario.address.address : 'Aun no has ingresado ninguna dirección',
      card: <AddressCard/>,
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faLocationDot} />
    },    
    {
      id: 7,
      title: 'Idioma',
      description: `${usuario.lang}`,
      card: <LanguageCard />,
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faLanguage} />
    },
    {
      id: 8,
      title: 'Teléfono',
      description: `${usuario.mobile}`,
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faMobile} />,
      inputs: [
        { placeholder: 'Editar teléfono', type: 'text', change: handleTelefonoChange, button: 'Aceptar cambios', onClick: handleTelefonoClick},
      ],
      // button: 'Aceptar cambios',
      // change: handleTelefonoClick,
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
      button: 'Cambiar',
    },
    {
      id: 10,
      title: 'Género',
      description: `${usuario.genero}`,
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faVenusMars} />,
      contenido:   (<form style={{ display: "flex", justifyContent: "center" }}>
      <select id="genero" name="genero" onChange={handleGeneroChange}>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
        <option value="No binario">No binario</option>
        <option value="Prefiero no mencionarlo">Prefiero no mencionarlo</option>
      </select>
    </form>),
    button: 'Cambiar',
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

export function CardGrid5({ handleClick, transfer }) {
  const onSectionClick  = transfer;
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;

  const changePage = () => {onSectionClick('Producto')};




    const cardData = [
      // {
      //   id: 14,
      //   title: 'Productos enlazados',
      //   description: usuario.productos,
      //   imageUrl: 'https://via.placeholder.com/150',
      // },
      {
        id: 'quince',
        title: 'Agregar producto',
        className: 'card1',
        imageUrl: 'https://via.placeholder.com/150',
        icon: <FontAwesomeIcon icon={faCirclePlus} />,
        link: "/shop",
      },

    ];

    if (usuario && usuario.productos && usuario.productos.length > 0) {
      const productCard = usuario.productos.map((producto, index) => ({
        id: index + 1,
        title: producto,
        // description: producto,
        onClick: changePage,
        imageUrl: 'https://via.placeholder.com/150',
        icon: <FontAwesomeIcon icon={faBox} />
      }),
      );
      cardData.unshift(...productCard)
      
    }


    return (
      <div className={PerfilCSS.cardGrid} onClick={handleClick}>
    
        {cardData.map((card) => (
          <Card className={PerfilCSS.card} key={card.id} card={card} />
        ))}
      </div>
    );
  }

export function CardGridInfoProducto({handleClick}){
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
  const [productName, setProductName] = useState(null);
  const [showFacturaInfo, setShowFacturaInfo] = useState(false);
  const [selectedFacturaId, setSelectedFacturaId] = useState(null);
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [tipoCuotas,    setTipoCuotas] = useState("");
  const [orderData, setOrderData] = useState({
    amount: 0,
    description: ''
  });
  const valorDolar = useDolar();
  const [dolarValue, setDolarValue] = useState(null);
 let facturaInfo = usuario.facturas[0];



  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await valorDolar;
        if(value){setDolarValue(await value);
        }else{
          console.log('error en bcra, usando valor dolar auxiliar')
          setDolarValue(510)
        }
        
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    
  }, [valorDolar]);
  


  useEffect(() => {
    console.log(facturaInfo)
    if (facturaInfo && facturaInfo.products) {
      setProductName(facturaInfo.products[0].name);
    }
  }, [facturaInfo]);

  const toggleFacturaInfo = async (facturaId) => {
    // if (selectedFacturaId !== facturaId) {
    //   setSelectedFacturaId(null);
    //   setShowFacturaInfo(false);
    // } else {
      setSelectedFacturaId(facturaId);
      setIsLoading(true);
      orderData.amount= (calcularMontoCuota((facturaInfo.customFields[0].value),(facturaInfo.total*dolarValue)))
      orderData.description=`Descripcion: ${parseInt(facturaInfo.customFields[1].value.charAt(0))+1}`  //antes aca iba Cuota N
      orderData.facturaInfo = facturaInfo;
      await preference();
      setShowFacturaInfo(true);
    // }
  };
//lo anoto para no olvidarme como se me ocurrio resolverlo
//basicamente es asi, las facturas no las tocamos mas por que ya funcionan y es el core economico del sistema, asi que lo que podemos hacer es que en esta funcion en vez de mostrar facturas
//mostar pedidos de compra con el nombre cambiado a Recibo X, entonces, como esto no impacta al stock, siempre puedo generar un recibo por el monto que pago el cliente, sumarlo a la factura como ya esta pasando, 
//pero aca, en vez de ver la factura, verias este pedido de compra, para esto nececito que usuarioDTO venga aparte de con la lista de facturas ( que ahora vienen no solo le id, sino toda la factura)
//que tenga una lista de IDs de pedidos de compra (factura x), y mostarlas aca, para hacer que el mostrador funcione habria que modificar esta funcion para que el href tambien agregue algo asi como ?doctype=buynote o algo asi para hacer
//a la funicon mas Generica y que pueda manejar tanto facturas como otro tipo de documentos (habria que agregar en el back que busque ese param) y walla!, problema del recibo unico solucionado y sin modificar el core :_) soy tan bueno dios.
  const generarListaFacturas = () => {
    return usuario.ordenesCompra.map((orden) => (
      <li key={orden.id}>
        <a href={`/factura?id=${orden.id}&doctype=purchaseorder`}>
          Recibo {orden.docNumber}
        </a>
      </li>
    ));
  };

  const calcularMontoCuota = (tipoFinanciacion, montoTotal) => {
    let montoCuota = 0;
    
    if (tipoFinanciacion === 'contado') {
      montoCuota = montoTotal- (montoTotal * 0.05);
      setTipoCuotas("2/2");
    } else if (tipoFinanciacion === '70/30') {
      const monto30Porciento = montoTotal * 0.3;
      montoCuota = (montoTotal - monto30Porciento) / 11;
      setTipoCuotas(parseInt(facturaInfo.customFields[1].value.charAt(0))+1)
    } else if (tipoFinanciacion === '100%') {
      const monto5Porciento = montoTotal * 0.05;
      montoCuota = (montoTotal - monto5Porciento) / 12;
      console.log(facturaInfo.customFields[1].value)
      setTipoCuotas(parseInt(facturaInfo.customFields[1].value.charAt(0))+1)
    }
    
    return montoCuota;
  };

const preference = () => {
  fetch("http://localhost:8080/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  }).then((response) => {
    return response.json();
  }).then((preference) => {
    setPreferenceId(preference.id);
  }).catch((error) => {
    console.error(error);
  }).finally(() => {
    setIsLoading(false);
  });
}

  const pagarCuota = () => {

    if (productName) {

      

  

      return (
    <ul>
      {usuario.facturas.map((facturaId) => (
        <li key={facturaId}>
          <button onClick={() => toggleFacturaInfo(facturaId)}>
            Pagar Cuota de producto {productName}
          </button>
          {showFacturaInfo && (
            <div>
              
              <h3>Información de la factura</h3>
              <p>Número de factura: {facturaInfo.docNumber}</p>
              <p>Fecha de emisión: {format(new Date(facturaInfo.date*1000),'dd/MM/yyyy')}</p>
              <p>Fecha de vencimiento: {format(new Date(facturaInfo.date*2000),'dd/MM/yyyy')}</p>
              <p>Financiacion: {facturaInfo.customFields[0].value}</p>
              <p>Total a pagar: USD{facturaInfo.total}</p>
              <p>Descripcion: Cuota {tipoCuotas}</p>
              <p>Monto cuota: USD{calcularMontoCuota(facturaInfo.customFields[0].value,facturaInfo.total)}</p>
              <p>Monto cuota: ARS{calcularMontoCuota((facturaInfo.customFields[0].value),(facturaInfo.total*dolarValue))}</p>
              
              <InternalProvider context={{ preferenceId, isLoading, orderData, setOrderData, dolarValue }}>
      <main>
        {/* {renderSpinner()} */}
        {/* <Checkout onClick={handleClick} description/> */}
        <Payment />
      </main>
      
    </InternalProvider>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
    } else {
      return(<div><span>Aun no tienes pagos pendientes</span></div>);
    }
  };
  

  const cardData = [
    {
      id: 16,
      title: 'Pagos',
      description: 'Hacer nuevos pagos',
      imageUrl: 'https://via.placeholder.com/150',
      contenido: pagarCuota(),
      icon: <FontAwesomeIcon icon={faMoneyCheckDollar} />,
    },
    {
      id: 17,
      title: 'Recibos',
      description: 'Todos tus recibos de pagos.',
      imageUrl: 'https://via.placeholder.com/150',
      contenido: generarListaFacturas(),
      icon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
    },
    {
      id: 18,
      title: 'Resúmenes',
      description: 'Próximamente estará disponible. ',
      // description: 'Todos tus resúmenes de pagos. ',
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faFileLines} />,
    },
    {
      id: 19,
      title: 'Mantenimiento',
      description: 'Próximamente estará disponible.',
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faGears} />,
    },
    {
      id: 20,
      title: 'Documentacion',
      description: 'Próximamente estará disponible.',
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faFolderOpen} />,
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

  export function CardGrid6({ handleClick }) {
    const usuarioJson = sessionStorage.getItem('user');
    const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
  // console.log(usuario)


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
      description: 'Próximamente estará disponible.',
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faCalendarCheck} />,
    },
    {
      id: 24,
      title: 'Reservas de mantenimiento',
      description: 'Próximamente estará disponible.',
      imageUrl: 'https://via.placeholder.com/150',
      icon: <FontAwesomeIcon icon={faCalendarCheck} />,

    },
    {
      id: 26,
      title: 'Reservas de llamadas',
      description: 'Próximamente estará disponible.',
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
      description: 'Próximamente estará disponible.',
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
      logo: "img/LogoBlanco.png",
      icon: <FontAwesomeIcon icon={faPlus}/>,
      title: 'Card',
      pie:'Descripción de la tarjeta 1',
      description: 'Descripción de la tarjeta 2',
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687714451/2244_zgkbmv.jpg',

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
      logo: "img/LogoBlanco.png",
      icon: <FontAwesomeIcon icon={faPlus}/>,
      title: 'ID',
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
      id: 30,
      logo: "",
      icon: "",
      title: 'Sobre Asset',

      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687714295/MicrosoftTeams-image_biu2dz.png',
      link: "/sobreasset",
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

export function CardGrid12({ handleClick }) {
  const cardData = [
    {
      id: 31,
      logo: "img/LogoBlanco.png",
      icon: <FontAwesomeIcon icon={faPlus}/>,
      title: 'Soporte',
      description: 'Descripción de la tarjeta 1',
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687798522/grupo-jovenes-empresarios-que-trabajan-oficina_izwjdf.jpg',
      
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


// Sobre Asset cards

export function CardGrid13({ handleClick }) {
  const cardData = [
    {
      id: 31,
      logo: "img/LogoBlanco.png",
      icon: <FontAwesomeIcon icon={faPlus}/>,
      title: 'Nuestro propósito',
      subtitle: 'Es simple. Eso es Asset.',
      description: 'En Asset, somos afortunados de estar rodeados de gente que se esfuerza para simplificar la vida de las personas, creando productos y servicios simples e inteligentes que aporten experiencias únicas.',
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1683125222/image9_idbdi3.png',
      link: "/sobreasset",
    },
    // Agrega más objetos cardData según sea necesario
  ];

  return (
    <div className={PerfilCSS.cardGridInicio} onClick={handleClick}>
      {cardData.map((card) => (
        <CardAsset key={card.id} card={card} /> // Pasa cada objeto card como prop al componente CardAsset
      ))}
    </div>
  );
}

export function CardGrid14({ handleClick }) {
  const cardData = [
    {
      id: 31,
      logo: "img/LogoBlanco.png",
      icon: <FontAwesomeIcon icon={faPlus}/>,
      title: 'Nuestros valores',
      subtitle: 'Compromiso desde el primer día.',
      description: 'En Asset, nos enorgullece ser una empresa que se esfuerza por crear productos y servicios que brinden una experiencia de vida única. Nuestros valores fundamentales definen quiénes somos y guían cada decisión que tomamos. Nos emociona que nos acompañes en este viaje.',
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1683125222/image9_idbdi3.png',
      link: "/sobreasset",
    },
    // Agrega más objetos cardData según sea necesario
  ];

  return (
    <div className={PerfilCSS.cardGridInicio} onClick={handleClick}>
      {cardData.map((card) => (
        <CardAsset key={card.id} card={card} /> // Pasa cada objeto card como prop al componente CardAsset
      ))}
    </div>
  );
}

export function CardGrid15({ handleClick }) {
  const cardData = [
    {
      id: 31,
      logo: "img/LogoBlanco.png",
      icon: <FontAwesomeIcon icon={faPlus}/>,
      title: 'Nuestra política empresarial',
      subtitle: 'Honestidad, Respeto, Sostenibilidad, Privacidad y Cumplimiento.',
      description: 'En Asset, somos afortunados de estar rodeados de gente que se esfuerza para simplificar la vida de las personas, creando productos y servicios simples e inteligentes que aporten experiencias únicas.',
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1683125222/image9_idbdi3.png',
      link: "/sobreasset",
    },
    // Agrega más objetos cardData según sea necesario
  ];

  return (
    <div className={PerfilCSS.cardGridInicio} onClick={handleClick}>
      {cardData.map((card) => (
        <CardAsset key={card.id} card={card} /> // Pasa cada objeto card como prop al componente CardAsset
      ))}
    </div>
  );
}

// Fin de Asset cards

//Product Grid Cards

export function CardGrid16({ handleClick }) {
  const cardData = [
    {
      id: 31,
      icon: "img/LogoBlanco.png",
      title: 'Diseñado para marcar la diferencia.',
      subtitle: 'Honestidad, Respeto, Sostenibilidad, Privacidad y Cumplimiento.',
      description: 'En Asset, somos afortunados de estar rodeados de gente que se esfuerza para simplificar la vida de las personas, creando productos y servicios simples e inteligentes que aporten experiencias únicas.',
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/11_PLANTA_CONJUNTO_4K_POS_ujndnr.jpg',
    },
    // Agrega más objetos cardData según sea necesario
  ];

  return (
    <div className={PerfilCSS.cardGridInicio} onClick={handleClick}>
      {cardData.map((card) => (
        <ProductGrid key={card.id} card={card} /> // Pasa cada objeto card como prop al componente CardAsset
      ))}
    </div>
  );
}

export function CardGrid17({ handleClick }) {
  const cardData = [
    {
      id: 31,
      icon: "img/LogoBlanco.png",
      title: 'Simplificando tu día a día.',
      subtitle: 'Honestidad, Respeto, Sostenibilidad, Privacidad y Cumplimiento.',
      description: 'En Asset, somos afortunados de estar rodeados de gente que se esfuerza para simplificar la vida de las personas, creando productos y servicios simples e inteligentes que aporten experiencias únicas.',
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/09_CALLE_INTERNA_BLUE_HOUR_4K_POS_mscfkm.jpg',
    },
    // Agrega más objetos cardData según sea necesario
  ];

  return (
    <div className={PerfilCSS.cardGridInicio} onClick={handleClick}>
      {cardData.map((card) => (
        <ProductGrid key={card.id} card={card} /> // Pasa cada objeto card como prop al componente CardAsset
      ))}
    </div>
  );
}

export function CardGrid18({ handleClick }) {
  const cardData = [
    {
      id: 31,
      icon: "img/LogoBlanco.png",
      title: 'Pedir online sin preocupaciones',
      subtitle: 'Honestidad, Respeto, Sostenibilidad, Privacidad y Cumplimiento.',
      description: 'En Asset, somos afortunados de estar rodeados de gente que se esfuerza para simplificar la vida de las personas, creando productos y servicios simples e inteligentes que aporten experiencias únicas.',
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751162/10_INTERIOR_SUM_BLUE_HOUR_4K_POS_gr3ozf.jpg',
    },
    // Agrega más objetos cardData según sea necesario
  ];

  return (
    <div className={PerfilCSS.cardGridInicio} onClick={handleClick}>
      {cardData.map((card) => (
        <ProductGrid key={card.id} card={card} /> // Pasa cada objeto card como prop al componente CardAsset
      ))}
    </div>
  );
}

export function CardGrid19({ handleClick }) {
  const cardData = [
    {
      id: 31,
      icon: "img/LogoBlanco.png",
      title: 'Mantenerse conectado sin interrupciones, todo el día.',
      subtitle: 'Honestidad, Respeto, Sostenibilidad, Privacidad y Cumplimiento.',
      description: 'En Asset, somos afortunados de estar rodeados de gente que se esfuerza para simplificar la vida de las personas, creando productos y servicios simples e inteligentes que aporten experiencias únicas.',
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751162/08_INTERIOR_SUM_4K_POS_io5hkb.jpg',
    },
    // Agrega más objetos cardData según sea necesario
  ];

  return (
    <div className={PerfilCSS.cardGridInicio} onClick={handleClick}>
      {cardData.map((card) => (
        <ProductGrid key={card.id} card={card} /> // Pasa cada objeto card como prop al componente CardAsset
      ))}
    </div>
  );
}

export function CardGrid20({ handleClick }) {
  const cardData = [
    {
      id: 31,
      icon: "img/LogoBlanco.png",
      title: 'Relajarse Rejuvenecer Reconectarse.',
      subtitle: 'Honestidad, Respeto, Sostenibilidad, Privacidad y Cumplimiento.',
      description: 'En Asset, somos afortunados de estar rodeados de gente que se esfuerza para simplificar la vida de las personas, creando productos y servicios simples e inteligentes que aporten experiencias únicas.',
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751161/07_INTERIOR_GUARDERIA_4K_POS_w1ev6q.jpg',
    },
    // Agrega más objetos cardData según sea necesario
  ];

  return (
    <div className={PerfilCSS.cardGridInicio} onClick={handleClick}>
      {cardData.map((card) => (
        <ProductGrid key={card.id} card={card} /> // Pasa cada objeto card como prop al componente CardAsset
      ))}
    </div>
  );
}

export function CardGrid21({ handleClick }) {
  const cardData = [
    {
      id: 31,
      icon: "img/LogoBlanco.png",
      title: 'La tranquilidad de tu familia es nuestra prioridad.',
      subtitle: 'Honestidad, Respeto, Sostenibilidad, Privacidad y Cumplimiento.',
      description: 'En Asset, somos afortunados de estar rodeados de gente que se esfuerza para simplificar la vida de las personas, creando productos y servicios simples e inteligentes que aporten experiencias únicas.',
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751161/01_ACCESO_4K_POS_wurxql.jpg',
    },
    // Agrega más objetos cardData según sea necesario
  ];

  return (
    <div className={PerfilCSS.cardGridInicio} onClick={handleClick}>
      {cardData.map((card) => (
        <ProductGrid key={card.id} card={card} /> // Pasa cada objeto card como prop al componente CardAsset
      ))}
    </div>
  );
}

export function CardGrid22({ handleClick }) {
  const cardData = [
    {
      id: 31,
      icon: "img/LogoBlanco.png",
      title: 'Inspirado a través del movimiento.',
      subtitle: 'Honestidad, Respeto, Sostenibilidad, Privacidad y Cumplimiento.',
      description: 'En Asset, somos afortunados de estar rodeados de gente que se esfuerza para simplificar la vida de las personas, creando productos y servicios simples e inteligentes que aporten experiencias únicas.',
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751159/02_CONTROL_ACCESO_4K_POS_brydhw.jpg',
    },
    // Agrega más objetos cardData según sea necesario
  ];

  return (
    <div className={PerfilCSS.cardGridInicio} onClick={handleClick}>
      {cardData.map((card) => (
        <ProductGrid key={card.id} card={card} /> // Pasa cada objeto card como prop al componente CardAsset
      ))}
    </div>
  );
}

export function CardGrid23({ handleClick }) {
  const cardData = [
    {
      id: 31,
      icon: "img/LogoBlanco.png",
      title: 'Ambiente seguro para crecer.',
      subtitle: 'Honestidad, Respeto, Sostenibilidad, Privacidad y Cumplimiento.',
      description: 'En Asset, somos afortunados de estar rodeados de gente que se esfuerza para simplificar la vida de las personas, creando productos y servicios simples e inteligentes que aporten experiencias únicas.',
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751160/04_CALLE_GUARDERIA_4K_POS_g21a6d.jpg',
    },
    // Agrega más objetos cardData según sea necesario
  ];

  return (
    <div className={PerfilCSS.cardGridInicio} onClick={handleClick}>
      {cardData.map((card) => (
        <ProductGrid key={card.id} card={card} /> // Pasa cada objeto card como prop al componente CardAsset
      ))}
    </div>
  );
}

export function CardGrid24({ handleClick }) {
  const cardData = [
    {
      id: 31,
      icon: "img/LogoBlanco.png",
      title: 'Impulsa tu creatividad',
      subtitle: 'Honestidad, Respeto, Sostenibilidad, Privacidad y Cumplimiento.',
      description: 'En Asset, somos afortunados de estar rodeados de gente que se esfuerza para simplificar la vida de las personas, creando productos y servicios simples e inteligentes que aporten experiencias únicas.',
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1683125222/image9_idbdi3.png',
    },
    // Agrega más objetos cardData según sea necesario
  ];

  return (
    <div className={PerfilCSS.cardGridInicio} onClick={handleClick}>
      {cardData.map((card) => (
        <ProductGrid key={card.id} card={card} /> // Pasa cada objeto card como prop al componente CardAsset
      ))}
    </div>
  );
}

export function CardGrid25({ handleClick }) {
  const cardData = [
    {
      id: 31,
      icon: "img/LogoBlanco.png",
      title: 'Disfrutar de momento inolvidables, Juntos.',
      subtitle: 'Honestidad, Respeto, Sostenibilidad, Privacidad y Cumplimiento.',
      description: 'En Asset, somos afortunados de estar rodeados de gente que se esfuerza para simplificar la vida de las personas, creando productos y servicios simples e inteligentes que aporten experiencias únicas.',
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1683125222/image9_idbdi3.png',
    },
    // Agrega más objetos cardData según sea necesario
  ];

  return (
    <div onClick={handleClick}>
      {cardData.map((card) => (
        <ProductGrid key={card.id} card={card} /> // Pasa cada objeto card como prop al componente CardAsset
      ))}
    </div>
  );
}

//card eventos

export function CardGrid26({ handleClick }) {
    const usuarioJson = sessionStorage.getItem('user');
    const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
   
    const {activar, playAnimation, notificar} = useContext(Context);




  const btnCheckUserClick = () => {
    // console.log('click');
    if(!usuario){
      activar(true);
      notificar(<div><span>Para poder acceder primero debes registrate</span></div>)
      setTimeout(() => {
        activar(false);
      }, 3000);
      
    }
    else{
      suscrbirUsuario({
        usuario: usuario,
        funnelID: "648b8d0d0f58893d050bd744",
        stageID:"648b8d0d0f58893d050bd73f"});

      window.location.replace('https://www.eventbrite.com/e/asset-event-tickets-662052696437');
    }
  }
  const cardData = [
    {
      id: 31,
      logo: "img/LogoBlanco.png",
      icon: <FontAwesomeIcon icon={faPlus}/>,
      
      title: 'Quarters',
      subtitle: 'Descubre un lugar donde diseño, seguridad y confort se fusionan para crear una experiencia única perfecta para tu familia.',
      description: 'En Asset, nos enorgullece ser una empresa que se esfuerza por crear productos y servicios que brinden una experiencia de vida única. Nuestros valores fundamentales definen quiénes somos y guían cada decisión que tomamos. Nos emociona que nos acompañes en este viaje.',
      imageUrl: 'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687716368/MicrosoftTeams-image_1_asfpbu.png',
      link: "/sobreasset",
      buttons: [
            
            { button: 'Registrate' ,onClick: btnCheckUserClick}
          ],
    },
    // Agrega más objetos cardData según sea necesario
  ];

  return (
    <div className={PerfilCSS.cardGridInicio} onClick={handleClick}>
      {cardData.map((card) => (
        <CardAsset key={card.id} card={card} /> // Pasa cada objeto card como prop al componente CardAsset
      ))}
    </div>
  );
}

export default CardGrid;
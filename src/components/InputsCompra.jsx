import React, { useState, useRef, useEffect, useContext } from 'react';

import InputCSS from '../css/Inputs.module.css';
import useProducto from '../Service/APIproducto';
import useServicio from '../Service/APIservicio';
import {useDolar }    from '../Service/APIdolar';
import { initMercadoPago } from "@mercadopago/sdk-react";
import numeral from 'numeral';
import Checkout from "./Checkout";
import {Context} from "../Service/ContextProvider";
import { SpinnerCircular } from 'spinners-react';

import Payment from "./Payment";
import  {Context as NotificationContext} from '../context/notification-context'
import { OpacityOutlined } from '@mui/icons-material';

//credencial de prueba test user 1
initMercadoPago("TEST-8cc0de02-11c6-4f51-86f9-5243bcc0b1cd");
// credenciales de prueba:
// ASSET (it@asset)
// credencial  public key:  "TEST-026812a7-4811-43d1-8f09-8207c13823a5"
// credencial  Acces Token: TEST-6453243717102029-050120-8e42db516068f5814f7146cefe6696b4-1362723906  

// Produccion
// public key: APP_USR-cea272c1-a889-4a00-8d37-6f86ba43adb1
//Access Token: APP_USR-6453243717102029-050120-86625470ed742e0c3a8dfdfa709ade8a-1362723906
// Credenciales de prueba:

// Test user 1 vendedor TTEST53609
// test_user_1617378711@testuser.com
// credencial  public key:  "TEST-8cc0de02-11c6-4f51-86f9-5243bcc0b1cd"
// credencial  Acces Token: TEST-5990004718573364-050309-6f5ddb7d13b533596d97451683dcf03e-1365118455

// Produccion
// Publick key: "APP_USR-d1d798ac-ada1-4e7e-8ab8-512fe38520a4"
// Access token: APP_USR-5990004718573364-050309-e155277ff5747f15411c67de313903fd-1365118455

// Client Secret: oPB0PWcUBp0cTl9WzzqxW4XJJOjBCiok


//Test user 2  dor TTEST65297

export default function RadioInputs({seleccion}) {
  
  //MERCADO PAGO 
  const { preferenceId,setPreferenceId, orderData, setOrderData, dolarValue, setDolarValue } = React.useContext(Context);
  const [showLoged, setShowLoged] = useState(false);
  const {activar, playAnimation, notificar} = useContext(NotificationContext);
  const refA = useRef(null);


  
    const valorDolar = useDolar();
    // const [dolarValue, setDolarValue] = useState(null);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const value = await valorDolar;
          if(value){setDolarValue(parseInt(await value));
          }else{
            setDolarValue(500)
          }
          
          
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
      
    }, [valorDolar]);
    
  
    useEffect(() => {
      console.log(dolarValue);
    }, [dolarValue]);
  // const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [orderData, setOrderData] = useState(
  //   { 
  //   quantity: "1", 
  //   price: "0", 
  //   amount: 0, 
  //   description: "Terreno",
  //   cards: 0, 
  //   storage:1, 
  //   guarderia:0, 
  //   sum:0,
  //   cw:0, 
  //   user: {}, 
  //   sku:"",
  //   storagePrice:0,
  //   guarderiaPrice:0,
  //   sumPrice:0,
  //   cwPrice:0,
  // });
//FIN DE MERCADO PAGO
  
  const [input2Disabled, setInput2Disabled] = useState(true );
  const [input3Disabled, setInput3Disabled] = useState(true );
  const [input4Disabled, setInput4Disabled] = useState(true );
  const [input5Disabled, setInput5Disabled] = useState(true );
  const [input6Disabled, setInput6Disabled] = useState(true ); 
  const [input7Disabled, setInput7Disabled] = useState(true ); 
  const [input8Disabled, setInput8Disabled] = useState(true ); 
  const [cargaron,             setCargaron] = useState(false);
  const [selectedTerreno,         setSelectedTerreno]         = useState('');
  const [selectedAlmacenamiento,  setSelectedAlmacenamiento]  = useState('');
  const [selectedCard,            setSelectedCard]            = useState('');
  const [selectedGuarderia,       setSelectedGuarderia]       = useState('');
  const [selectedSUM,             setSelectedSUM]             = useState('');
  const [selectedCW,              setSelectedCW]              = useState('');
  const [financiacionGrid,        setFinanciationGrid]        = useState('contado');
  const [selectedFinanciation,    setSelectedFinanciation]    = useState(parseFloat(1));
 

  const urlParams = new URLSearchParams(window.location.search);
  const status = Object.fromEntries(urlParams).status;
  // console.log("params del link:",Object.fromEntries(urlParams))
  

  
  const almacenamientoRef = useRef(null);
  const cardRef           = useRef(null);
  const guarderiaRef      = useRef(null);
  const sumRef            = useRef(null);
  const pagoRef           = useRef(null);
  const cwRef             = useRef(null);
  const FinanciationRef   = useRef(null);

  const request = {
    terreno         : selectedTerreno,
    almacenamiento  : selectedAlmacenamiento,
    card            : selectedCard,
    guarderia       : selectedGuarderia,
    sum             : selectedSUM,
    cw              : selectedCW,
    // pago            : selectedPago
  }

orderData.description=request.terreno;
orderData.cards=request.card;
orderData.storage=request.almacenamiento;
orderData.sum=request.sum;
orderData.guarderia=request.guarderia;
orderData.cw=request.cw;
orderData.financiation= 'contado'
const usuarioJson = sessionStorage.getItem('user');
const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
orderData.user = usuario;

useEffect(() => {
  const logOrderData = async () => {
    console.table("orderData:", await orderData);
  };

  logOrderData();
}, [orderData,selectedTerreno,selectedCard,selectedAlmacenamiento,selectedGuarderia,selectedSUM, selectedCW]);


//deberia hacer que productos tenga un useState y para que se ejecute cuando cambia la lista (reducir sto

// useEffect(
//   () => {
//     if(!(selectedTerreno==='')){
//     console.log('useEffect terreno','selectedTerreno:', selectedTerreno)
//   cardRef.current.scrollIntoView({ behavior: 'smooth' });
//   }
// }, [selectedTerreno,input2Disabled]);

useEffect(
  () => {
    
  window.scrollTo({top: 0, behavior: 'smooth' });
    
}, []);


useEffect(
  () => {
    if(!(selectedCard==='')){
  almacenamientoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
}, [selectedCard]);

// useEffect(
//   () => {
//     if(!(selectedAlmacenamiento==='')){
//     guarderiaRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [selectedAlmacenamiento]);

useEffect(
  () => {
    if(!(selectedGuarderia==='')){
    sumRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedGuarderia]);

  useEffect(
    () => {
      if(!(selectedSUM==='')){
      cwRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [selectedSUM]);

    useEffect(
      () => {
        if(!(selectedCW==='')){
        FinanciationRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, [selectedCW]);

// useEffect(() => {pagoRef.current.scrollIntoView({ behavior: 'smooth' });}, [selectedSUM]);
useEffect(()=>{
  seleccion(orderData);
  // console.log('se deberia estar mandando')
},[orderData, setOrderData,selectedTerreno, selectedCard, selectedAlmacenamiento, selectedGuarderia, selectedSUM, selectedCW]);

//
const productos = useProducto();
const servicios = useServicio();


useEffect(() => {
  async function cargar(){
    if(!cargaron){
      await productos;
      await servicios;
      setCargaron(true);
      
    }
  }
  // console.log("servicios:", servicios);
  cargar();
  
}, [servicios,productos]);

  useEffect(() => {
    if (usuario) setShowLoged(false);
    else setShowLoged(true);
  }, [usuario]);

  

  useEffect(() => {
    if(orderData.description){    
      // console.log(refA.current)
      // console.log(refA.current.offsetHeight)
      activar(true);
      // notificar(<div style={{height: refA.current.offsetHeight}}></div>);}
      // setIsLoading(true);
      notificar(
      
        <div className={InputCSS["col-md-12"] + " " + InputCSS["col-lg-4"]} style={{ width: '100%', paddingBottom: '5px'}}>
        <div className={orderData.description ? InputCSS.summaryShow : InputCSS.summary}>
        <span className={InputCSS.raya}></span>
        <p>Costo de reserva</p>
        <span className={InputCSS.raya}></span>
          {showLoged ? (
            <div className={InputCSS["textContainer"]}>
            <span className={InputCSS["textNotification"]}>Debes iniciar sesión para comprar.</span>
            {/* <button
                className={InputCSS.test}
                onClick={onClick}
                id={InputCSS["checkout-btn-disabled"]}
                disabled='true'
              >
                Checkout
              </button> */}

            </div>
          ) : (
            <div className={InputCSS["summaryGroup"]}>
{renderSpinner()}
              <div className={InputCSS["summary-item"]}>
                <span className={InputCSS["text"]}>Subtotal USD</span>
                <span className={InputCSS["price"]} id={InputCSS["cart-total"]}>{(orderData.amount/dolarValue).toLocaleString('es-AR', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 })}
+ IVA</span>
                
                <span className={InputCSS["text"]}>Subtotal ARS</span>
                <span className={InputCSS["price"]} id={InputCSS["cart-total"]}>{orderData.amount.toLocaleString('es-AR', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 })}
+ IVA</span>
              </div>
              {/* <button
                className={InputCSS.test}
                onClick={onClick}
                id={InputCSS["checkout-btn"]}
                disabled={disabled}
                >
                Comprar
              </button> */}
            </div>
          )}
          
          
        </div>
          <Payment />
      </div>
                    );}
                    else{
                      activar(false)
                    }

      // setTimeout(() => {
      //   activar(false);
      // }, 3000);
  }, [orderData.amount, refA, isLoading]); 



function checkSKUByName(name) {

  const obj = productos.find(item => item.name === name);
  if (obj.sku) {
    return obj.sku;
  } else {
    return "no habia";
  }
}

function checkStockByName(name) {

  const obj = productos.find(item => item.name === name);
  if (obj && obj.stock > 0) {
    return true;
  } else {
    return false;
  }
}

function checkPriceByName(name) {
  const obj = productos.find(item => item.name === name);
  if (obj && obj.price > 0) {
    return obj.price;
  } else {
    return 0;
  }
}
const servicePrice = (name2find) => {
  
  // console.log(servicios);
  // console.log(servicios.map(item => item.name));

  const serv = servicios.find(item => item.name.toLowerCase() === name2find.toLowerCase());
  // console.log(servicios.find(item => item.name.toLowerCase() === name2find.toLowerCase()))
  
  if (serv && serv.price) {
    return serv.price;
  }else{
    // alert('xd');
    return 0;
  }
  
  
  // Por ejemplo:
  throw new Error('No se encontró el servicio o no tiene un precio válido');
}




orderData.price = checkPriceByName(request.terreno);
//MERCADO PAGO
  sessionStorage.setItem("compra", JSON.stringify(orderData));

const handleClick = () => {
  orderData.sku=checkSKUByName(orderData.description);
  orderData.stock=checkStockByName(orderData.description);
  orderData.backURL="feedback"
  orderData.transfer = "\a\a\a\a\a\a\\tatatatatataaaaaaaaaaaaa" 
  orderData.tax = 0.21;
  setIsLoading(true);

  // postVenta();
  fetch("http://localhost:8080/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  })
    .then((response) => {
      return response.json();
    })
    .then((preference) => {
      setPreferenceId(preference.id);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
};

const renderSpinner = () => {
  console.log("orderData de renderSpiner",orderData);
  if (isLoading) {
    return (
      <div className={InputCSS["spinner-wrapper"]}>
        <SpinnerCircular color='#009EE3' />
      </div>
    );
  }
  return null;
};


//FIN MERCADO PAGO





orderData.dolarValue = dolarValue;
  //IMPORTANTE!!!!!!!!
  //ESTA FUNCION ES LA QUE DEFINE CUANTO SE VA A FACTURAR, EN PESOS!!, multiplica por .05 por que es el 5% de la reserva
  //por ahora no hace el return de los servicios pero es copiar lo que dice el console log aun que cw da problemas
  const calculateAmount = (financiation, terreno, almacenamiento, guarderia, sum, cw) => {
    const terrenoPrice = terreno ? checkPriceByName(terreno) : 0;
    const almacenamientoPrice = almacenamiento ? servicePrice(almacenamiento) : 0;
    // console.log(almacenamiento)
    
    const guarderiaPrice = guarderia ? servicePrice("Pase Kinder") * guarderia : 0;
    const sumPrice = sum ? servicePrice("Pase SUM") * sum : 0;
    const cwPrice = cw ? servicePrice("Pase CoWorking") * cw : 0;
    //if selected finaciation != 1 then handleClick() para que si cambia de terreno le cobre bien
    // console.log( (terrenoPrice + almacenamientoPrice + guarderiaPrice + sumPrice + cwPrice)* parseFloat(financiation) );
    return (((terrenoPrice)* parseFloat(financiation)*dolarValue).toFixed(2)*0.05);
  };

//FIN DE LO IMPORTANTE!!!!!!!








  const handleSelectTerreno = (event) => {
    setSelectedTerreno(event.target.value);
    orderData.amount = calculateAmount(selectedFinanciation, event.target.value, selectedAlmacenamiento, selectedGuarderia, selectedSUM, selectedCW);
      if (event.target.value !== '') {
        setInput2Disabled(false);
        
        
      } else {
        setInput2Disabled(true);
        
      }
    };
  

  
  
    const handleSelectCard = (event) => {
      setSelectedCard(event.target.value);
      
      if (event.target.value !== '') {
        setInput3Disabled(false);
      } else {
        setInput3Disabled(true);
      }
    };
    
  
  
  //faltaria conectar los servicos para obtener los precios, quilombo para el fin de semana
 
  
    const handleSelectAlmacenamiento = (event) => {
      setSelectedAlmacenamiento(event.target.value);
      if (event.target.value !== '') {
        setInput4Disabled(false);
        
        orderData.amount = calculateAmount(selectedFinanciation, selectedTerreno, event.target.value, selectedGuarderia, selectedSUM, selectedCW);
        orderData.storagePrice = servicePrice(event.target.value);
      } else {
        setInput4Disabled(true);
  
    };
  };
  
  
  
  
  
    const handleSelectGuarderia = (event) => {
      setSelectedGuarderia(event.target.value);
  
      if (event.target.value !== '') {
        setInput5Disabled(false);
        
        orderData.guarderiaPrice = servicePrice("Pase Kinder");
        console.log("servicePrice('Pase Kinder')",servicePrice("Pase Kinder"))
        console.log("servicePrice(selectedAlmacenamiento)",servicePrice(selectedAlmacenamiento))
        console.log("selectedGuarderia",event.target.value)
        orderData.amount = calculateAmount( selectedFinanciation, selectedTerreno, selectedAlmacenamiento, event.target.value, selectedSUM, selectedCW);
      } else {
        setInput5Disabled(true);
      }
    };
    
    
    
    
    
  const handleSelectSUM = async(event) => {
    setSelectedSUM(event.target.value);
    
    orderData.sumPrice = await servicePrice("Pase SUM");
    orderData.amount = calculateAmount( selectedFinanciation, selectedTerreno, selectedAlmacenamiento, selectedGuarderia, event.target.value, selectedCW);
    if (event.target.value !== '') {
      setInput6Disabled(false);
 
    } else {
      setInput6Disabled(true);
    }
  };

  
  const handleSelectCW = async (event) => {
    setSelectedCW(event.target.value);
    orderData.financiation= financiacionGrid 
    orderData.cwPrice = servicePrice("Pase CoWorking");
    orderData.amount = calculateAmount(selectedFinanciation, selectedTerreno, selectedAlmacenamiento, selectedGuarderia, selectedSUM, event.target.value);
    // setIsLoading(true);
    await handleClick();
    await handleClick();
    if (event.target.value !== '') {
      setInput7Disabled(false);
      
    } else {
      setInput7Disabled(true);
    }
  };
  const handleSelectFinanciation = (value) => {
    console.log(value);
    orderData.financiation= value.grid;
    handleClick();
    setSelectedFinanciation(value.financiation);
    setFinanciationGrid(value.grid)
    orderData.amount = calculateAmount(value.financiation, selectedTerreno, selectedAlmacenamiento, selectedGuarderia, selectedSUM, selectedCW);
    handleClick();

  };
  
  
  //Para corregir:
  // ahora si el cliente llegua hasta financiacion y luego cambia algo ese algo no se va a impactar en mercado pago
  // para solucionarlo se puede hacer varias cosas 
  // 1: se puede agregar handleClick() en calculateAmount, pero esto haria que el boton de mercado pago aparezca desde la primera 
  //2: 1 pero corroborando que solo lo ejecute una vez qeu todo tenga un valor disitinto al inicial 
  //3: bueno claramente eso es lo mas facil deberias hacerlo ahora pajerito


  let itemGrilla1;
  let itemGrilla2;
  let itemGrilla3;
  let itemGrilla4;
  let itemGrilla5;
  let itemGrilla6;
  let itemGrilla7;
  let itemGrilla8;
  let itemGrilla9;
  switch (selectedTerreno) {
    case 'Lote 1':
      itemGrilla1 = '13,00 x 25,50';
      itemGrilla2 = '13,00 x 25,50';
      itemGrilla3 = '13,00 x 25,50';
      break;
    case 'Lote 2':
      itemGrilla1 = '15,00 x 27,50';
      itemGrilla2 = '15,00 x 27,50';
      itemGrilla3 = '15,00 x 27,50';
      break;
    case 'Lote 2':
      itemGrilla1 = '15,00 x 27,50';
      itemGrilla2 = '15,00 x 27,50';
      itemGrilla3 = '15,00 x 27,50';
      break;
    case 'Lote 3':
      itemGrilla1 = '13,00 x 25,50';
      itemGrilla2 = '13,00 x 25,50';
      itemGrilla3 = '13,00 x 25,50';
      break;
    case 'Lote 4':
      itemGrilla1 = '15,00 x 27,50';
      itemGrilla2 = '15,00 x 27,50';
      itemGrilla3 = '15,00 x 27,50';
      break;
    case 'Lote 5':
      itemGrilla1 = '15,00 x 27,50';
      itemGrilla2 = '15,00 x 27,50';
      itemGrilla3 = '15,00 x 27,50';
      break;
    case 'Lote 6':
      itemGrilla1 = '13,00 x 25,50';
      itemGrilla2 = '13,00 x 25,50';
      itemGrilla3 = '13,00 x 25,50';
      break;
    case 'Lote 7':
      itemGrilla1 = '15,00 x 27,50';
      itemGrilla2 = '15,00 x 27,50';
      itemGrilla3 = '15,00 x 27,50';
      break;
    case 'Lote 8':
      itemGrilla1 = '15,00 x 27,50';
      itemGrilla2 = '15,00 x 27,50';
      itemGrilla3 = '15,00 x 27,50';
      break;
    case 'Lote 9':
      itemGrilla1 = '13,00 x 25,50';
      itemGrilla2 = '13,00 x 25,50';
      itemGrilla3 = '13,00 x 25,50';
      break;
    case 'Lote 10':
      itemGrilla1 = '15,00 x 27,50';
      itemGrilla2 = '15,00 x 27,50';
      itemGrilla3 = '15,00 x 27,50';
      break;
    case 'Lote 11':
      itemGrilla1 = '15,00 x 27,50';
      itemGrilla2 = '15,00 x 27,50';
      itemGrilla3 = '15,00 x 27,50';
      break;
    case 'Lote 12':
      itemGrilla1 = '15,00 x 27,50';
      itemGrilla2 = '15,00 x 27,50';
      itemGrilla3 = '15,00 x 27,50';
      break;
    case 'Lote 13':
      itemGrilla1 = '15,00 x 27,50';
      itemGrilla2 = '15,00 x 27,50';
      itemGrilla3 = '15,00 x 27,50';
      break;
    default:
      itemGrilla1 = '11,00m x 24,50m';
      itemGrilla2 = '11,00m x 24,50m';
      itemGrilla3 = '11,00m x 24,50m';
      break;
  }

  switch (selectedAlmacenamiento) {
    case 'Almacenamiento S':
      itemGrilla4 = '40cm';
      itemGrilla5 = '40cm';
      itemGrilla6 = '40cm';
      break;
    case 'Almacenamiento M':
      itemGrilla4 = '60cm';
      itemGrilla5 = '40cm';
      itemGrilla6 = '40cm';
      break;
    case 'Almacenamiento L':
      itemGrilla4 = '100cm';
      itemGrilla5 = '40cm';
      itemGrilla6 = '40cm';
      break;
      default:
        itemGrilla4 = '20cm';
        itemGrilla5 = '25cm';
        itemGrilla6 = '20cm';
        break;
    }

  switch (financiacionGrid) {
    case 'contado':
      itemGrilla7 = 'contado 1';
      itemGrilla8 = 'contado 2';
      itemGrilla9 = 'contado 3';
      break;
    case '70/30':
      itemGrilla7 = '70/30 primero';
      itemGrilla8 = '70/30 segundo';
      itemGrilla9 = '70/30 tercero';
      break;
    case '100%':
      itemGrilla7 = '100 primero';
      itemGrilla8 = '100 segundo';
      itemGrilla9 = '100 tercero';
      break;
      default:
        itemGrilla7 = 'deefecto 1';
        itemGrilla8 = 'defecto 2';
        itemGrilla9 = 'defecto 3';
        break;
    }
    // className={selectedTerreno? "" : InputCSS.transparency50}

if(cargaron){

  return (
    
    <div >
      <div>
        <div>
          <b className={InputCSS.b}>Terreno.</b>
          <p className={InputCSS.p}> ¿Cuál es el mejor para su familia?</p>
          {/* <div className={InputCSS.moreInfo}>
            <Info1/>
          </div> */}
        </div>
        {/* <div className={InputCSS['icono']}>?</div> */}

        <div className={InputCSS.grilla}> 
          <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla1}`}>{itemGrilla1}</div>
          <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla2}`}>{itemGrilla2}</div>
          <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla3}`}>{itemGrilla3}</div>
          <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla4}`}>Ancho x Largo</div>
          <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla5}`}>Superficie terreno</div>
          <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla6}`}>Construcción vivienda</div>
        </div>

      <div className={InputCSS['radioInputs']} style={{ maxHeight: '265px', overflowY: 'auto' }}>          <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 1' ? InputCSS.selected : ''}`}>
            <span><input
              type="radio" 
              value="Lote 1"
              checked={selectedTerreno === 'Lote 1'} 
              onChange={handleSelectTerreno}
              disabled={!checkStockByName("Lote 1")} 
              />
            F1 </span> <div><span className={InputCSS['precio']}>${numeral(checkPriceByName("Lote 1")*selectedFinanciation.toFixed(2)).format('0,0.00')}</span>  {!checkStockByName("Lote 1") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
          </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 2' ? InputCSS.selected : ''}`}>
          <span><input 
          type="radio" 
          value="Lote 2"
          checked={selectedTerreno === 'Lote 2'} 
          onChange={handleSelectTerreno}
          disabled={!checkStockByName("Lote 2")}    
          />
          F2 </span> <div><span className={InputCSS['precio']}>${numeral(checkPriceByName("Lote 2")*selectedFinanciation.toFixed(2)).format('0,0.00')}</span>  {!checkStockByName("Lote 2") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 3' ? InputCSS.selected : ''}`}>
          <span><input 
          type="radio" 
          value="Lote 3" 
          checked={selectedTerreno === 'Lote 3'} 
          onChange={handleSelectTerreno}
          disabled={!checkStockByName("Lote 3")}  
          />
          F3 </span> <div><span className={InputCSS['precio']}>${(checkPriceByName("Lote 3")*selectedFinanciation).toFixed(2)}</span>  {!checkStockByName("Lote 3") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 4' ? InputCSS.selected : ''}`}>
          <span><input 
          type="radio" 
          value="Lote 4"
          checked={selectedTerreno === 'Lote 4'} 
          onChange={handleSelectTerreno} 
          disabled={!checkStockByName("Lote 4")}
          />
          F4 </span> <div><span className={InputCSS['precio']}>${(checkPriceByName("Lote 4")*selectedFinanciation).toFixed(2)}</span>  {!checkStockByName("Lote 4") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 5' ? InputCSS.selected : ''}`}>
          <span><input 
          type="radio" 
          value="Lote 5"
          checked={selectedTerreno === 'Lote 5'} 
          onChange={handleSelectTerreno} 
          disabled={!checkStockByName("Lote 5")} 
          />
          F5 </span> <div><span className={InputCSS['precio']}>${numeral(checkPriceByName("Lote 5")*selectedFinanciation.toFixed(2)).format('0,0.00')}</span>  {!checkStockByName("Lote 5") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 6' ? InputCSS.selected : ''}`}>
          <span><input 
          type="radio" 
          value="Lote 6"
          checked={selectedTerreno === 'Lote 6'} 
          onChange={handleSelectTerreno}
          disabled={!checkStockByName("Lote 6")}  
          />
          F6</span> <div><span className={InputCSS['precio']}>${(checkPriceByName("Lote 6")*selectedFinanciation).toFixed(2)}</span>  {!checkStockByName("Lote 6") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 7' ? InputCSS.selected : ''}`}>
          <span><input 
          type="radio" 
          value="Lote 7"
          checked={selectedTerreno === 'Lote 7'} 
          onChange={handleSelectTerreno} 
          disabled={!checkStockByName("Lote 7")} 
          />
          F7 </span> <div><span className={InputCSS['precio']}>${(checkPriceByName("Lote 7")*selectedFinanciation).toFixed(2)}</span>  {!checkStockByName("Lote 7") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 8' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="Lote 8" checked={selectedTerreno === 'Lote 8'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 8")} />
          F8 </span> <div><span className={InputCSS['precio']}>${(checkPriceByName("Lote 8")*selectedFinanciation).toFixed(2)}</span>  {!checkStockByName("Lote 8") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 9' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="Lote 9" checked={selectedTerreno === 'Lote 9'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 9")} />
          F9 </span> <div><span className={InputCSS['precio']}>${(checkPriceByName("Lote 9")*selectedFinanciation).toFixed(2)}</span>  {!checkStockByName("Lote 9") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 10' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="Lote 10" checked={selectedTerreno === 'Lote 10'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 10")}/>
          F10 </span> <div><span className={InputCSS['precio']}>${(checkPriceByName("Lote 10")*selectedFinanciation).toFixed(2)}</span>  {!checkStockByName("Lote 10") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 11' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="Lote 11" checked={selectedTerreno === 'Lote 11'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 11")} />
          F11 </span> <div><span className={InputCSS['precio']}>${(checkPriceByName("Lote 11")*selectedFinanciation).toFixed(2)}</span>  {!checkStockByName("Lote 11") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 12' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="Lote 12" checked={selectedTerreno === 'Lote 12'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 12")} />
          F12 </span> <div><span className={InputCSS['precio']}>${(checkPriceByName("Lote 12")*selectedFinanciation).toFixed(2)}</span>  {!checkStockByName("Lote 12") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 13' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="Lote 13" checked={selectedTerreno === 'Lote 13'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 13")} />
          F13 </span> <div><span className={InputCSS['precio']}>${(checkPriceByName("Lote 13")*selectedFinanciation).toFixed(2)}</span>  {!checkStockByName("Lote 13") && <div className={InputCSS['end']}>  <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}</div>
        </label>

        <br/>
        
      </div>
      </div>
      <div className={selectedTerreno?        "" : InputCSS.transparency50}>
      <div className={`${InputCSS['ref']}`} ref={cardRef}>
        <div>
          <b className={InputCSS.b}>Asset Card.</b>
          <p className={InputCSS.p}>¿Cuántas personas viven con usted?</p>
          {/* <div className={InputCSS.moreInfo}>
          <Info2/>
          </div> */}
        </div>

        <div>
          <p className={InputCSS['pCantidad']}>Cantidad de Asset cards</p>
        </div>
        <div className={InputCSS['radioInputsCard']}>
          <label className={`${InputCSS['radioInputCard']} ${selectedCard === '1' ? InputCSS.selected : ''}`}>
            <span>
              <input
                type="radio"
                value="1"
                checked={selectedCard === '1'}
                onChange={handleSelectCard}
                disabled={input2Disabled}
              />
              <div className={InputCSS.circle}>1</div>
            </span>
          </label>
          <label className={`${InputCSS['radioInputCard']} ${selectedCard === '2' ? InputCSS.selected : ''}`}>
            <span>
              <input
                type="radio"
                value="2"
                checked={selectedCard === '2'}
                onChange={handleSelectCard}
                disabled={input2Disabled}
                />
              <div className={InputCSS.circle}>2</div>
            </span>
          </label>
          <label className={`${InputCSS['radioInputCard']} ${selectedCard === '3' ? InputCSS.selected : ''}`}>
            <span>
              <input
                type="radio"
                value="3"
                checked={selectedCard === '3'}
                onChange={handleSelectCard}
                disabled={input2Disabled}
                />
              <div className={InputCSS.circle}>3</div>
            </span>
          </label>
          <label className={`${InputCSS['radioInputCard']} ${selectedCard === '4' ? InputCSS.selected : ''}`}>
            <span>
              <input
                type="radio"
                value="4"
                checked={selectedCard === '4'}
                onChange={handleSelectCard}
                disabled={input2Disabled}
              />
              <div className={InputCSS.circle}>4</div>
            </span>
          </label>
          <br />
        </div> 
      </div>
      </div>
      <div className={selectedCard?           "" : InputCSS.transparency50}>
      <div className={InputCSS['ref']} ref={almacenamientoRef}>
        <div>
          <b className={InputCSS.b}>Almacenamiento.</b>
          <p className={InputCSS.p}>¿Cuánto espacio es el adecuado?</p>
            {/* <div className={InputCSS.moreInfo}>
              <Info3/>
            </div> */}

            <div className={InputCSS.grilla}>
              <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla1}`}>{itemGrilla4}</div>
              <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla2}`}>{itemGrilla5}</div>
              <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla3}`}>{itemGrilla6}</div>
              <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla4}`}>Alto</div>
              <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla5}`}>Ancho</div>
              <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla6}`}>Profundidad</div>
            </div>

        </div>
          <div className={InputCSS['radioInputs']}>
          <label className={`${InputCSS['radioInput']} ${selectedAlmacenamiento === 'Almacenamiento S' ? InputCSS.selected : ''}`}>
            <span><input type="radio" value="Almacenamiento S" checked={selectedAlmacenamiento === 'Almacenamiento S'} onChange={handleSelectAlmacenamiento} disabled={input3Disabled} />
              Pequeño
          </span>
          {/* <span className={InputCSS['precio']}>No disponible</span> */}
          </label>
          <label className={`${InputCSS['radioInput']} ${selectedAlmacenamiento === 'Almacenamiento M' ? InputCSS.selected : ''}`}>
            <span><input type="radio" value="Almacenamiento M" checked={selectedAlmacenamiento === 'Almacenamiento M'} onChange={handleSelectAlmacenamiento} disabled={input3Disabled}/>
            Mediano
          </span>
          {/* <span className={InputCSS['precio']}>No disponible</span> */}
          </label>
          <label className={`${InputCSS['radioInput']} ${selectedAlmacenamiento === 'Almacenamiento L' ? InputCSS.selected : ''}`}>
            <span><input type="radio" value="Almacenamiento L" checked={selectedAlmacenamiento === 'Almacenamiento L'} onChange={handleSelectAlmacenamiento} disabled={input3Disabled}/>
            Grande
          </span>{/* <span className={InputCSS['precio']}>No disponible</span> */}</label>
          <br/>
        </div>
      </div>
      </div>
      <div className={selectedAlmacenamiento? "" : InputCSS.transparency50}>
      <div className={InputCSS['ref']} ref={guarderiaRef}>
        <div>
          <b className={InputCSS.b}> Sala de juegos.</b>
          <p className={InputCSS.p}>¿Cuál es el plan que mejor se adapta a ti?</p>
          {/* <div className={InputCSS.moreInfo}>
              <Info4/>
            </div> */}
        </div>
        <div className={InputCSS['radioInputs']}>
          <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '1' ? InputCSS.selected : ''}`}>
            <span><input type="radio" value="1" checked={selectedGuarderia === '1'} onChange={handleSelectGuarderia} disabled={input4Disabled}/>
            1 Meses
          </span>{/* <span className={InputCSS['precio']}>No disponible</span> */}</label>
          <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '3' ? InputCSS.selected : ''}`}>
            <span><input type="radio" value="3" checked={selectedGuarderia === '3'} onChange={handleSelectGuarderia} disabled={input4Disabled}/>
            3 Meses
          </span>{/* <span className={InputCSS['precio']}>No disponible</span> */}</label>
          <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '6' ? InputCSS.selected : ''}`}>
            <span><input type="radio" value="6" checked={selectedGuarderia === '6'} onChange={handleSelectGuarderia} disabled={input4Disabled}/>
            6 Meses
          </span>{/* <span className={InputCSS['precio']}>No disponible</span> */}</label>
          <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '12' ? InputCSS.selected : ''}`}>
            <span><input type="radio" value="12" checked={selectedGuarderia === '12'} onChange={handleSelectGuarderia} disabled={input4Disabled}/>
            12 Meses
          </span>{/* <span className={InputCSS['precio']}>No disponible</span> */}</label>
        <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '0' ? InputCSS.selected : ''}`}>
            <span><input type="radio" value="0" checked={selectedGuarderia === '0'} onChange={handleSelectGuarderia} disabled={input4Disabled}/>
            Ninguno
          </span></label>
          <br/>
        </div>
      </div>
      </div>
      <div className={selectedGuarderia?      "" : InputCSS.transparency50}>
      <div className={InputCSS['ref']} ref={sumRef}>
        <div>
          <b className={InputCSS.b}> SUM</b>
          <p className={InputCSS.p}>Reservá el espacio para juntarte con las personas que más querés.</p>
          {/* <div className={InputCSS.moreInfo}>
              <Info5/>
            </div> */}
          </div>
          <div className={InputCSS['radioInputs']}>
            <label className={`${InputCSS['radioInput']} ${selectedSUM === '6' ? InputCSS.selected : ''}`}>
              <span><input type="radio" value="6" checked={selectedSUM === '6'} onChange={handleSelectSUM} disabled={input5Disabled}/>
              6 Meses
            </span>{/* <span className={InputCSS['precio']}>No disponible</span> */}</label>
            <label className={`${InputCSS['radioInput']} ${selectedSUM === '12' ? InputCSS.selected : ''}`}>
              <span><input type="radio" value="12" checked={selectedSUM === '12'} onChange={handleSelectSUM} disabled={input5Disabled}/>
              12 Meses
            </span>{/* <span className={InputCSS['precio']}>No disponible</span> */}</label>
            <label className={`${InputCSS['radioInput']} ${selectedSUM === '24' ? InputCSS.selected : ''}`}>
              <span><input type="radio" value="24" checked={selectedSUM === '24'} onChange={handleSelectSUM} disabled={input5Disabled}/>
              24 Meses
            </span>{/* <span className={InputCSS['precio']}>No disponible</span> */}</label>
          <label className={`${InputCSS['radioInput']} ${selectedSUM === '0' ? InputCSS.selected : ''}`}>
              <span><input type="radio" value="0" checked={selectedSUM === '0'} onChange={handleSelectSUM} disabled={input5Disabled}/>
              Ninguno
            </span></label>
            <br/>
          </div>
        </div>
        </div>
        <div className={selectedSUM?            "" : InputCSS.transparency50}>
          <div className={InputCSS['ref']} ref={cwRef}>
            <div>
              <b className={InputCSS.b}>Coworking</b>
              <p className={InputCSS.p}>Reservá el espacio para lo que tú quieras.</p>
              {/* <div className={InputCSS.moreInfo}>
                <Info6/>
              </div> */}
            </div>
            <div className={InputCSS['radioInputs']}>
              <label className={`${InputCSS['radioInput']} ${selectedCW === '3' ? InputCSS.selected : ''}`}>
                <span><input type="radio" value="3" checked={selectedCW === '3'} onChange={handleSelectCW} disabled={input6Disabled}/>
                3 Meses
              </span>{/* <span className={InputCSS['precio']}>No disponible</span> */}</label>
              <label className={`${InputCSS['radioInput']} ${selectedCW === '6' ? InputCSS.selected : ''}`}>
                <span><input type="radio" value="6" checked={selectedCW === '6'} onChange={handleSelectCW} disabled={input6Disabled}/>
                6 Meses
              </span>{/* <span className={InputCSS['precio']}>No disponible</span> */}</label>
              <label className={`${InputCSS['radioInput']} ${selectedCW === '12' ? InputCSS.selected : ''}`}>
                <span><input type="radio" value="12" checked={selectedCW === '12'} onChange={handleSelectCW} disabled={input6Disabled}/>
                12 Meses
              </span>{/* <span className={InputCSS['precio']}>No disponible</span> */}</label>
            <label className={`${InputCSS['radioInput']} ${selectedCW === '0' ? InputCSS.selected : ''}`}>
                <span><input type="radio" value="0" checked={selectedCW === '0'} onChange={handleSelectCW} disabled={input6Disabled}/>
                Ninguno
              </span></label>
              <br/>
            </div>
          </div>
        </div>
        <div className={selectedCW?             "" : InputCSS.transparency50}>
          <div className={InputCSS['ref']} ref={FinanciationRef}>
            <div>
              <b className={InputCSS.b}>Financiación</b>
              <p className={InputCSS.p}>Selecciona el mejor para ti.</p>
              {/* <div className={InputCSS.moreInfo}>
                <Info6/>
              </div> */}
            </div>
              <div className={InputCSS.containers}>
                <div className={InputCSS.tabs}>
                  <input 
                    type="radio" 
                    id="radio1" 
                    name="tabs"
                    value="contado"
                    defaultChecked
                    onChange={() => handleSelectFinanciation({financiation:1, grid : 'contado'})}
                    disabled={input7Disabled}
                  />
                  <label htmlFor="radio1" className={InputCSS.tab}>Precio contado</label>
                  <input 
                    type="radio" 
                    id="radio2" 
                    name="tabs"
                    value="financiado7030"
                    onChange={() => handleSelectFinanciation({financiation :1.1917, grid :'70/30'})}
                    disabled={input7Disabled}

                  />
                  <label htmlFor="radio2" className={InputCSS.tab} >Financiado 70%/30%</label>
                  <input 
                    type="radio" 
                    id="radio3"   
                    name="tabs" 
                    value="financiado100"
                    onChange={() => handleSelectFinanciation({financiation :1.1917, grid :'100%'})}
                    disabled={input7Disabled}

                  />
                  <label htmlFor="radio3" className={InputCSS.tab}>Financiado 100%</label>
                  <span className={InputCSS.glider}></span>
                </div>
              </div>
                <div className={InputCSS.grilla}>
                  <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla1}`}>{itemGrilla7}</div>
                  <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla2}`}>{itemGrilla8}</div>
                  <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla3}`}>{itemGrilla9}</div>
                  <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla4}`}>Precio para reservar</div>
                  <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla5}`}>Precio de cuota mensual</div>
                  <div className={`${InputCSS.itemGrilla} ${InputCSS.itemGrilla6}`}>Cantidad de cuotas</div>
                </div>
          </div>
        </div>
      </div>
    
  );
}else{

  return(
    <div>
    <div>
      <div className={InputCSS.textContainer}>
  <b className={InputCSS.text}>Terreno.</b> <p className={InputCSS.p}>¿Cuál es el mejor para su familia?</p>
      </div>
      <div className={InputCSS['radioInputs']}>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 1' ? InputCSS.selected : ''}`}>
          <input 
            type="radio" 
            value="F1" 
            checked={selectedTerreno === 'Lote 1'} 
            readOnly
            
            />
          F 1 
        </label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 2' ? InputCSS.selected : ''}`}>
        <span><input 
        type="radio" 
        value="F2" 
        checked={selectedTerreno === 'Lote 2'} 
        readOnly
        
        />
        F 2
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 3' ? InputCSS.selected : ''}`}>
        <span><input 
        type="radio" 
        value="F3" 
        checked={selectedTerreno === 'Lote 3'} 
        readOnly
        
        />
        F 3 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 4' ? InputCSS.selected : ''}`}>
        <span><input 
        type="radio" 
        value="F4" 
        checked={selectedTerreno === 'Lote 4'} 
        readOnly
        
        />
        F 4 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 5' ? InputCSS.selected : ''}`}>
        <span><input 
        type="radio" 
        value="F5" 
        checked={selectedTerreno === 'Lote 5'} 
        readOnly 
        
        />
        F 5 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 6' ? InputCSS.selected : ''}`}>
        <span><input 
        type="radio" 
        value="F6" 
        checked={selectedTerreno === 'Lote 6'} 
        readOnly
         
        />
        F 6 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 7' ? InputCSS.selected : ''}`}>
        <span><input 
        type="radio" 
        value="F7" 
        checked={selectedTerreno === 'Lote 7'} 
        readOnly 
        
        />
        F 7 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 8' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="F8" checked={selectedTerreno === 'Lote 8'} 
        readOnly  
        />
        F 8 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 9' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="F9" checked={selectedTerreno === 'Lote 9'} readOnly />
        F 9 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 10' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="F10" checked={selectedTerreno === 'Lote 10'} readOnly  />
        F 10 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 11' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="F11" checked={selectedTerreno === 'Lote 11'} readOnly  />
        F 11 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 12' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="F12" checked={selectedTerreno === 'Lote 12'} readOnly   />
        F 12 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 13' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="F13" checked={selectedTerreno === 'Lote 13'} readOnly   />
        F 13 
      </span></label>
      <br/>
      
    </div>
      </div>


      <div className={InputCSS['ref']} ref={cardRef}>
      <div><b className={InputCSS.b}>Asset Card.</b> <p className={InputCSS.p}>¿Cuántas personas viven con usted?</p></div>
      <div className={InputCSS['radioInputs']}>
      <label className={`${InputCSS['radioInput']} ${selectedCard === '1' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="1" checked={selectedCard === '1'} /**onChange={handleSelectCard}**/ disabled={input2Disabled}/>
        1
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedCard === '2' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="2" checked={selectedCard === '2'}/**onChange={handleSelectCard}**/ disabled={input2Disabled}/>
        2
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedCard === '3' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="3" checked={selectedCard === '3'} /**onChange={handleSelectCard}**/ disabled={input2Disabled}/>
        3
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedCard === '4' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="4" checked={selectedCard === '4'} /**onChange={handleSelectCard}**/ disabled={input2Disabled}/>
        4
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedCard === '5' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="5" checked={selectedCard === '5'} /**onChange={handleSelectCard}**/ disabled={input2Disabled}/>
        5
      </span></label>
      <br/>
    </div>
    </div>

      <div className={InputCSS['ref']} ref={almacenamientoRef}>
      <div><b className={InputCSS.b}>Almacenamiento.</b> <p className={InputCSS.p}>¿Cuánto espacio necesitará para almacenar sus cosas?</p></div>
      <div className={InputCSS['radioInputs']}>
      <label className={`${InputCSS['radioInput']} ${selectedAlmacenamiento === 'Pequeño' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="Pequeño" checked={selectedAlmacenamiento === 'Pequeño'} /**onChange={handleSelectAlmacenamiento}**/ disabled={input3Disabled} />
          Pequeño
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedAlmacenamiento === 'Mediano' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="Mediano" checked={selectedAlmacenamiento === 'Mediano'} /**onChange={handleSelectAlmacenamiento}**/ disabled={input3Disabled}/>
        Mediano
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedAlmacenamiento === 'Grande' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="Grande" checked={selectedAlmacenamiento === 'Grande'} /**onChange={handleSelectAlmacenamiento}**/ disabled={input3Disabled}/>
        Grande
      </span></label>
      <br/>
    </div>
    </div>


    <div className={InputCSS['ref']} ref={guarderiaRef}>
    <div><b className={InputCSS.b}> Guardería.</b> <p className={InputCSS.p}>¿Cuál es el plan que mejor se adapta a ti?</p></div>
    <div className={InputCSS['radioInputs']}>
      <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '6' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="6" checked={selectedGuarderia === '6'} /**onChange={handleSelectGuarderia}**/ disabled={input4Disabled}/>
        6 Meses
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '12' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="12" checked={selectedGuarderia === '12'} /**onChange={handleSelectGuarderia}**/  disabled={input4Disabled}/>
        12 Meses
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '24' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="24" checked={selectedGuarderia === '24'} /**onChange={handleSelectGuarderia}**/  disabled={input4Disabled}/>
        24 Meses
      </span></label>
      <br/>
    </div>
    </div>

    <div className={InputCSS['ref']} ref={sumRef}>
    <div><b className={InputCSS.b}> SUM.</b> <p className={InputCSS.p}>Reservá el espacio para lo que tu quieras.</p></div>
    <div className={InputCSS['radioInputs']}>
      <label className={`${InputCSS['radioInput']} ${selectedSUM === '6' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="6" checked={selectedSUM === '6'} /**onChange={handleSelectSUM}**/ disabled={input5Disabled}/>
        6 Meses
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedSUM === '12' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="12" checked={selectedSUM === '12'} /**onChange={handleSelectSUM}**/ disabled={input5Disabled}/>
        12 Meses
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedSUM === '24' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="24" checked={selectedSUM === '24'} /**onChange={handleSelectSUM}**/ disabled={input5Disabled}/>
        24 Meses
      </span></label>
      <br/>
    </div>
    </div>

    <div className={InputCSS['ref']} ref={pagoRef}>
    <div><b className={InputCSS.b}> Opciones de pago.</b> <p className={InputCSS.p}>Seleccione el que funcione para usted.</p></div>
    <div className={InputCSS['radioInputs']}>
      <label className={`${InputCSS['radioInput']} ${ InputCSS.selected}`}>
        <span><input type="radio" value="1" /**onChange={handleSelectPago}**/ disabled={input6Disabled}/>
        1 cuota
      </span></label>
      <label className={`${InputCSS['radioInput']} ${InputCSS.selected}`}>
        <span><input type="radio" value="6"  /**onChange={handleSelectPago}**/ disabled={input6Disabled}/>
        6 cuotas
      </span></label>
      <label className={`${InputCSS['radioInput']} ${ InputCSS.selected}`}>
        <span><input type="radio" value="12" /**onChange={handleSelectPago}**/ disabled={input6Disabled}/>
        12 cuotas
      </span></label>
      <br/>
    </div>
    </div>
  </div>
  

  )
}
} 
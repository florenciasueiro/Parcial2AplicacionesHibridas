import React, { useState, useRef, useEffect } from 'react';
import InputCSS from '../css/Inputs.module.css';
import useProducto from '../Service/APIproducto';
import useServicio from '../Service/APIservicio';
import { initMercadoPago } from "@mercadopago/sdk-react";
import Payment from "./Payment";
import Checkout from "./Checkout";

import InternalProvider from "../Service/ContextProvider";
import { SpinnerCircular } from 'spinners-react';

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
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setOrderData] = useState(
    { 
    quantity: "1", 
    price: "0", 
    amount: 0, 
    description: "Terreno",
    cards: 0, 
    storage:1, 
    guarderia:0, 
    sum:0,
    coworking:0, 
    user: {}, 
    sku:"",
    storagePrice:0,
    guarderiaPrice:0,
    sumPrice:0,
    coworkingPrice:0
  });
//FIN DE MERCADO PAGO
  
  const [input2Disabled, setInput2Disabled] = useState(true );
  const [input3Disabled, setInput3Disabled] = useState(true );
  const [input4Disabled, setInput4Disabled] = useState(true );
  const [input5Disabled, setInput5Disabled] = useState(true );
  const [input6Disabled, setInput6Disabled] = useState(true ); 
  const [cargaron,             setCargaron] = useState(false);
  const [selectedTerreno,         setSelectedTerreno]         = useState('');
  const [selectedAlmacenamiento,  setSelectedAlmacenamiento]  = useState('');
  const [selectedCard,            setSelectedCard]            = useState('');
  const [selectedGuarderia,       setSelectedGuarderia]       = useState('');
  const [selectedSUM,             setSelectedSUM]             = useState('');
  const [selectedPago,            setSelectedPago]            = useState('');


  const urlParams = new URLSearchParams(window.location.search);
  const status = Object.fromEntries(urlParams).status;
  console.log("params del link:",Object.fromEntries(urlParams))
  

  
  const almacenamientoRef = useRef(null);
  const cardRef           = useRef(null);
  const guarderiaRef      = useRef(null);
  const sumRef            = useRef(null);
  const pagoRef           = useRef(null);

  const request = {
    terreno         : selectedTerreno,
    almacenamiento  : selectedAlmacenamiento,
    card            : selectedCard,
    guarderia       : selectedGuarderia,
    sum             : selectedSUM,
    // pago            : selectedPago
  }

orderData.description=request.terreno;
orderData.cards=request.card;
orderData.storage=request.almacenamiento;
orderData.sum=request.sum;
orderData.guarderia=request.guarderia;

const usuarioJson = sessionStorage.getItem('user');
const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
orderData.user = usuario;

useEffect(() => {
  const logOrderData = async () => {
    console.log("orderData:", await orderData);
  };

  logOrderData();
}, [orderData,selectedTerreno,selectedCard,selectedAlmacenamiento,selectedGuarderia,selectedSUM]);


//deberia hacer que productos tenga un useState y para que se ejecute cuando cambia la lista (reducir sto

useEffect(
  () => {
    if(!(selectedTerreno==='')){
    console.log('useEffect terreno','selectedTerreno:', selectedTerreno)
  cardRef.current.scrollIntoView({ behavior: 'smooth' });
  }
}, [selectedTerreno,input2Disabled]);

useEffect(
  () => {
    if(!(selectedCard==='')){
  almacenamientoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
}, [selectedCard]);

useEffect(
  () => {
    if(!(selectedAlmacenamiento==='')){
    guarderiaRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedAlmacenamiento]);

useEffect(
  () => {
    if(!(selectedGuarderia==='')){
    sumRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedGuarderia]);

// useEffect(() => {pagoRef.current.scrollIntoView({ behavior: 'smooth' });}, [selectedSUM]);
useEffect(()=>{
  seleccion(orderData);
  console.log('se deberia estar mandando')
},[orderData, setOrderData,selectedTerreno, selectedCard, selectedAlmacenamiento, selectedGuarderia,selectedSUM]);

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
  console.log("servicios:", servicios);
  cargar();
  
}, [servicios,productos]);



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
const servicePrice =  (name) => {
  console.log("servicePrice dice",servicios)
  const serv = servicios.find(item => item.name === name);
  
  if (serv && serv.price) {
    return serv.price;
  }
  
  // Si no se encuentra el servicio o no tiene un precio válido, puedes devolver un valor predeterminado o lanzar un error, según tus necesidades.
  // Por ejemplo:
  throw new Error('No se encontró el servicio o no tiene un precio válido');
}


orderData.price = checkPriceByName(request.terreno);
//MERCADO PAGO
  sessionStorage.setItem("compra", JSON.stringify(orderData));

const handleClick = () => {
  orderData.sku=checkSKUByName(orderData.description);
  orderData.stock=checkStockByName(orderData.description);
  setIsLoading(true);

  // postVenta();
  fetch("http://localhost:8080/create_preference", {
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

 



  // const handleSelectPago = (event) => {
  //   setSelectedPago(event.target.value);
  // };


  
  const calculateAmount = (terreno, almacenamiento, guarderia, sum) => {
    const terrenoPrice = terreno ? checkPriceByName(terreno) : 0;
    const almacenamientoPrice = almacenamiento ? servicePrice(almacenamiento) : 0;
    console.log(almacenamiento)
    const guarderiaPrice = guarderia ? servicePrice("Pase Kinder") * guarderia : 0;
    const sumPrice = sum ? servicePrice("Pase SUM") * sum : 0;
    return terrenoPrice + almacenamientoPrice + guarderiaPrice + sumPrice;
  };
  
  
  const handleSelectTerreno = (event) => {
    setSelectedTerreno(event.target.value);
    orderData.amount = calculateAmount(event.target.value, selectedAlmacenamiento, selectedGuarderia, selectedSUM);
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
        
        orderData.amount = calculateAmount(selectedTerreno, event.target.value, selectedGuarderia, selectedSUM);
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
      orderData.amount = calculateAmount(selectedTerreno, selectedAlmacenamiento, event.target.value, selectedSUM);
    } else {
      setInput5Disabled(true);
    }
  };
  
  
  
  
  
  const handleSelectSUM = (event) => {
    setSelectedSUM(event.target.value);
    
    orderData.sumPrice = servicePrice("Pase SUM");
    orderData.amount = calculateAmount(selectedTerreno, selectedAlmacenamiento, selectedGuarderia, event.target.value);
    if (event.target.value !== '') {
      setInput6Disabled(false);
 
    } else {
      setInput6Disabled(true);
    }
  };
  //manda para afuera el order data


if(cargaron){

  return (
    <div>
      <div>
        <p>
          <b className={InputCSS.b}>Terreno.</b> ¿Cuál es el mejor para su familia?
        </p><p className={InputCSS['icono']}>?</p>
        <div className={InputCSS['radioInputs']}>
          <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 1' ? InputCSS.selected : ''}`}>
            <span><input
              type="radio" 
              value="Lote 1"
              checked={selectedTerreno === 'Lote 1'} 
              onChange={handleSelectTerreno}
              disabled={!checkStockByName("Lote 1")} 
              />
            F1</span><span className={InputCSS['precio']}>${checkPriceByName("Lote 1")}</span> {!checkStockByName("Lote 1") && <div> <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}
          </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 2' ? InputCSS.selected : ''}`}>
          <span><input 
          type="radio" 
          value="Lote 2"
          checked={selectedTerreno === 'Lote 2'} 
          onChange={handleSelectTerreno}
          disabled={!checkStockByName("Lote 2")}  
          />
          F2 </span><span className={InputCSS['precio']}>${checkPriceByName("Lote 2")}</span> {!checkStockByName("Lote 2") && <div> <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 3' ? InputCSS.selected : ''}`}>
          <span><input 
          type="radio" 
          value="Lote 3" 
          checked={selectedTerreno === 'Lote 3'} 
          onChange={handleSelectTerreno}
          disabled={!checkStockByName("Lote 3")}  
          />
          F3 </span> <span className={InputCSS['precio']}>${checkPriceByName("Lote 3")}</span>{!checkStockByName("Lote 3") && <div> <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 4' ? InputCSS.selected : ''}`}>
          <span><input 
          type="radio" 
          value="Lote 4"
          checked={selectedTerreno === 'Lote 4'} 
          onChange={handleSelectTerreno} 
          disabled={!checkStockByName("Lote 4")}
          />
          F4 </span> <span className={InputCSS['precio']}>${checkPriceByName("Lote 4")}</span>{!checkStockByName("Lote 4") && <div> <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 5' ? InputCSS.selected : ''}`}>
          <span><input 
          type="radio" 
          value="Lote 5"
          checked={selectedTerreno === 'Lote 5'} 
          onChange={handleSelectTerreno} 
          disabled={!checkStockByName("Lote 5")} 
          />
          F5 </span><span className={InputCSS['precio']}>${checkPriceByName("Lote 5")}</span> {!checkStockByName("Lote 5") && <div> <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 6' ? InputCSS.selected : ''}`}>
          <span><input 
          type="radio" 
          value="Lote 6"
          checked={selectedTerreno === 'Lote 6'} 
          onChange={handleSelectTerreno}
          disabled={!checkStockByName("Lote 6")}  
          />
          F6 </span><span className={InputCSS['precio']}>${checkPriceByName("Lote 6")}</span> {!checkStockByName("Lote 6") && <div> <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 7' ? InputCSS.selected : ''}`}>
          <span><input 
          type="radio" 
          value="Lote 7"
          checked={selectedTerreno === 'Lote 7'} 
          onChange={handleSelectTerreno} 
          disabled={!checkStockByName("Lote 7")} 
          />
          F7 </span><span className={InputCSS['precio']}>${checkPriceByName("Lote 7")}</span> {!checkStockByName("Lote 7") && <div> <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 8' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="Lote 8" checked={selectedTerreno === 'Lote 8'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 8")} />
          F8 </span><span className={InputCSS['precio']}>${checkPriceByName("Lote 8")}</span> {!checkStockByName("Lote 8") && <div> <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 9' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="Lote 9" checked={selectedTerreno === 'Lote 9'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 9")} />
          F9 </span><span className={InputCSS['precio']}>${checkPriceByName("Lote 9")}</span> {!checkStockByName("Lote 9") && <div> <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 10' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="Lote 10" checked={selectedTerreno === 'Lote 10'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 10")}/>
          F10 </span><span className={InputCSS['precio']}>${checkPriceByName("Lote 10")}</span> {!checkStockByName("Lote 10") && <div> <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 11' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="Lote 11" checked={selectedTerreno === 'Lote 11'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 11")} />
          F11 </span><span className={InputCSS['precio']}>${checkPriceByName("Lote 11")}</span> {!checkStockByName("Lote 11") && <div> <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 12' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="Lote 12" checked={selectedTerreno === 'Lote 12'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 12")} />
          F12 </span><span className={InputCSS['precio']}>${checkPriceByName("Lote 12")}</span> {!checkStockByName("Lote 12") && <div> <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 13' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="Lote 13" checked={selectedTerreno === 'Lote 13'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 13")} />
          F13 </span><span className={InputCSS['precio']}>${checkPriceByName("Lote 13")}</span> {!checkStockByName("Lote 13") && <div> <span className={InputCSS['noDisp']}>‎ Lote no disponible</span></div>}
        </label>

        <br/>
        
      </div>
        </div>


        <div className={InputCSS['ref']} ref={cardRef}>
        <p><b className={InputCSS.b}>Asset Card.</b> Cuántas personas viven con usted?</p>
        <div className={InputCSS['radioInputs']}>
        <label className={`${InputCSS['radioInput']} ${selectedCard === '1' ? InputCSS.selected : ''}`}>
          <span><input 
          type="radio" 
          value="1" 
          checked={selectedCard === '1'} 
          onChange={handleSelectCard} 
          disabled={input2Disabled}/>
          1
        </span></label>
        <label className={`${InputCSS['radioInput']} ${selectedCard === '2' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="2" checked={selectedCard === '2'} onChange={handleSelectCard} disabled={input2Disabled}/>
          2
        </span></label>
        <label className={`${InputCSS['radioInput']} ${selectedCard === '3' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="3" checked={selectedCard === '3'} onChange={handleSelectCard} disabled={input2Disabled}/>
          3
        </span></label>
        <label className={`${InputCSS['radioInput']} ${selectedCard === '4' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="4" checked={selectedCard === '4'} onChange={handleSelectCard} disabled={input2Disabled}/>
          4
        </span></label>
        <br/>
      </div>
      </div>

        <div className={InputCSS['ref']} ref={almacenamientoRef}>
        <p><b className={InputCSS.b}>Almacenamiento.</b> ¿Cuánto espacio necesitará para almacenar sus cosas?</p>
        <div className={InputCSS['radioInputs']}>
        <label className={`${InputCSS['radioInput']} ${selectedAlmacenamiento === 'Almacenamiento S' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="Almacenamiento S" checked={selectedAlmacenamiento === 'Almacenamiento S'} onChange={handleSelectAlmacenamiento} disabled={input3Disabled} />
            Pequeño
        </span><span className={InputCSS['precio']}>$</span></label>
        <label className={`${InputCSS['radioInput']} ${selectedAlmacenamiento === 'Almacenamiento M' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="Almacenamiento M" checked={selectedAlmacenamiento === 'Almacenamiento M'} onChange={handleSelectAlmacenamiento} disabled={input3Disabled}/>
          Mediano
        </span><span className={InputCSS['precio']}>${/*{servicePrice('Almacenamiento S')}*/}</span></label>
        <label className={`${InputCSS['radioInput']} ${selectedAlmacenamiento === 'Almacenamiento L' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="Almacenamiento L" checked={selectedAlmacenamiento === 'Almacenamiento L'} onChange={handleSelectAlmacenamiento} disabled={input3Disabled}/>
          Grande
        </span><span className={InputCSS['precio']}>${/*{servicePrice('Almacenamiento S')}*/}</span></label>
        <br/>
      </div>
      </div>


      <div className={InputCSS['ref']} ref={guarderiaRef}>
      <p><b className={InputCSS.b}> Guardería.</b> ¿Cuál es el plan que mejor se adapta a ti?</p>
      <div className={InputCSS['radioInputs']}>
      <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '0' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="0" checked={selectedGuarderia === '0'} onChange={handleSelectGuarderia} disabled={input4Disabled}/>
          Ninguno
        </span></label>
        <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '1' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="1" checked={selectedGuarderia === '1'} onChange={handleSelectGuarderia} disabled={input4Disabled}/>
          1 Meses
        </span></label>
        <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '3' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="3" checked={selectedGuarderia === '3'} onChange={handleSelectGuarderia} disabled={input4Disabled}/>
          3 Meses
        </span></label>
        <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '6' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="6" checked={selectedGuarderia === '6'} onChange={handleSelectGuarderia} disabled={input4Disabled}/>
          6 Meses
        </span></label>
        <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '12' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="12" checked={selectedGuarderia === '12'} onChange={handleSelectGuarderia} disabled={input4Disabled}/>
          12 Meses
        </span></label>
        <br/>
      </div>
      </div>

      <div className={InputCSS['ref']} ref={sumRef}>
      <p><b className={InputCSS.b}> SUM.</b> Reservá el espacio para lo que tu quieras.</p>
      <div className={InputCSS['radioInputs']}>
      <label className={`${InputCSS['radioInput']} ${selectedSUM === '0' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="0" checked={selectedSUM === '0'} onChange={handleSelectSUM} disabled={input5Disabled}/>
          Ninguno
        </span></label>
        <label className={`${InputCSS['radioInput']} ${selectedSUM === '6' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="6" checked={selectedSUM === '6'} onChange={handleSelectSUM} disabled={input5Disabled}/>
          6 Meses
        </span></label>
        <label className={`${InputCSS['radioInput']} ${selectedSUM === '12' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="12" checked={selectedSUM === '12'} onChange={handleSelectSUM} disabled={input5Disabled}/>
          12 Meses
        </span></label>
        <label className={`${InputCSS['radioInput']} ${selectedSUM === '24' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="24" checked={selectedSUM === '24'} onChange={handleSelectSUM} disabled={input5Disabled}/>
          24 Meses
        </span></label>
        <br/>
      </div>
      </div>

      {/* <div className={InputCSS['ref']} ref={pagoRef}>
      <p><b className={InputCSS.b}> Opciones de pago.</b> Seleccione el que funcione para usted.</p>
      <div className={InputCSS['radioInputs']}>
        <label className={`${InputCSS['radioInput']} ${selectedPago === '1' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="1" checked={selectedPago === '1'} onChange={handleSelectPago} disabled={input6Disabled}/>
          1 cuota
        </span></label>
        <label className={`${InputCSS['radioInput']} ${selectedPago === '6' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="6" checked={selectedPago === '6'} onChange={handleSelectPago} disabled={input6Disabled}/>
          6 cuotas
        </span></label>
        <label className={`${InputCSS['radioInput']} ${selectedPago === '12' ? InputCSS.selected : ''}`}>
          <span><input type="radio" value="12" checked={selectedPago === '12'} onChange={handleSelectPago} disabled={input6Disabled}/>
          12 cuotas
        </span></label>
        <br/>
        
      </div>

      </div> */}
            {/* mercado pago */}
            <InternalProvider context={{ preferenceId, isLoading, orderData, setOrderData }}>
      <main>
        {renderSpinner()}
        <Checkout onClick={handleClick} description />

        <Payment />
      </main>
      
    </InternalProvider>
    {/* fin mercado pago */}
    </div>
    



  );
}else{

  return(
    <div>
    <div>
      <p className={InputCSS.textContainer}>
  <b className={InputCSS.text}>Terreno.</b> ¿Cuál es el mejor para su familia?
      </p>
      <div className={InputCSS['radioInputs']}>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 1' ? InputCSS.selected : ''}`}>
          <input 
            type="radio" 
            value="F1" 
            checked={selectedTerreno === 'Lote 1'} 
            readOnly
            
            />
          F1 
        </label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 2' ? InputCSS.selected : ''}`}>
        <span><input 
        type="radio" 
        value="F2" 
        checked={selectedTerreno === 'Lote 2'} 
        readOnly
         
        />
        F2
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 3' ? InputCSS.selected : ''}`}>
        <span><input 
        type="radio" 
        value="F3" 
        checked={selectedTerreno === 'Lote 3'} 
        readOnly
        
        />
        F3 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 4' ? InputCSS.selected : ''}`}>
        <span><input 
        type="radio" 
        value="F4" 
        checked={selectedTerreno === 'Lote 4'} 
        readOnly
        
        />
        F4 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 5' ? InputCSS.selected : ''}`}>
        <span><input 
        type="radio" 
        value="F5" 
        checked={selectedTerreno === 'Lote 5'} 
        readOnly 
        
        />
        F5 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 6' ? InputCSS.selected : ''}`}>
        <span><input 
        type="radio" 
        value="F6" 
        checked={selectedTerreno === 'Lote 6'} 
        readOnly
         
        />
        F6 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 7' ? InputCSS.selected : ''}`}>
        <span><input 
        type="radio" 
        value="F7" 
        checked={selectedTerreno === 'Lote 7'} 
        readOnly 
        
        />
        F7 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 8' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="F8" checked={selectedTerreno === 'Lote 8'} 
        readOnly  
        />
        F8 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 9' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="F9" checked={selectedTerreno === 'Lote 9'} readOnly />
        F9 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 10' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="F10" checked={selectedTerreno === 'Lote 10'} readOnly  />
        F10 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 11' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="F11" checked={selectedTerreno === 'Lote 11'} readOnly  />
        F11 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 12' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="F12" checked={selectedTerreno === 'Lote 12'} readOnly   />
        F12 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 13' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="F13" checked={selectedTerreno === 'Lote 13'} readOnly   />
        F13 
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 13' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="F13" checked={selectedTerreno === 'Lote 13'} readOnly   />
        F13 
      </span></label>
      <br/>
      
    </div>
      </div>


      <div className={InputCSS['ref']} ref={cardRef}>
      <p><b className={InputCSS.b}>Asset Card.</b> Cuántas personas viven con usted?</p>
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
      <p><b className={InputCSS.b}>Almacenamiento.</b> ¿Cuánto espacio necesitará para almacenar sus cosas?</p>
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
    <p><b className={InputCSS.b}> Guardería.</b> ¿Cuál es el plan que mejor se adapta a ti?</p>
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
    <p><b className={InputCSS.b}> SUM.</b> Reservá el espacio para lo que tu quieras.</p>
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
    <p><b className={InputCSS.b}> Opciones de pago.</b> Seleccione el que funcione para usted.</p>
    <div className={InputCSS['radioInputs']}>
      <label className={`${InputCSS['radioInput']} ${selectedPago === '1' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="1" checked={selectedPago === '1'} /**onChange={handleSelectPago}**/ disabled={input6Disabled}/>
        1 cuota
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedPago === '6' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="6" checked={selectedPago === '6'} /**onChange={handleSelectPago}**/ disabled={input6Disabled}/>
        6 cuotas
      </span></label>
      <label className={`${InputCSS['radioInput']} ${selectedPago === '12' ? InputCSS.selected : ''}`}>
        <span><input type="radio" value="12" checked={selectedPago === '12'} /**onChange={handleSelectPago}**/ disabled={input6Disabled}/>
        12 cuotas
      </span></label>
      <br/>
    </div>
    </div>
  </div>
  

  )
}
} 
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

export default function RadioInputs() {

//MERCADO PAGO 
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setOrderData] = useState({ quantity: "1", price: "0", amount: 0, description: "Terreno",cards: 0, storage:1, guarderia:0, sum:0, user: {}, sku:"" });
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

console.log(orderData);

//deberia hacer que productos tenga un useState y para que se ejecute cuando cambia la lista (reducir sto

useEffect(() => {cardRef.current.scrollIntoView({ behavior: 'smooth' });}, [selectedTerreno]);

useEffect(() => {almacenamientoRef.current.scrollIntoView({ behavior: 'smooth' });}, [selectedCard]);

useEffect(() => {guarderiaRef.current.scrollIntoView({ behavior: 'smooth' });}, [selectedAlmacenamiento]);

useEffect(() => {sumRef.current.scrollIntoView({ behavior: 'smooth' });}, [selectedGuarderia]);

// useEffect(() => {pagoRef.current.scrollIntoView({ behavior: 'smooth' });}, [selectedSUM]);

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
  cargar();
}, []);



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


orderData.price = checkPriceByName(request.terreno);
//MERCADO PAGO

const handleClick = () => {
  orderData.sku=checkSKUByName(orderData.description);
  orderData.stock=checkStockByName(orderData.description);
  setIsLoading(true);
  // postVenta();
  sessionStorage.setItem("compra", JSON.stringify(orderData));
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

 



  const handleSelectPago = (event) => {
    setSelectedPago(event.target.value);
  };


  
  
  
  
  const handleSelectTerreno = (event) => {
    setSelectedTerreno(event.target.value);
  
      if (event.target.value != '') {
        setInput2Disabled(false);
        orderData.amount = checkPriceByName(request.terreno);
        
      } else {
        setInput2Disabled(true);
        
      }
    };
  

  
  
    const handleSelectCard = (event) => {
      setSelectedCard(event.target.value);
      
      if (event.target.value != '') {
        setInput3Disabled(false);
      } else {
        setInput3Disabled(true);
      }
    };
    
  
  
  //faltaria conectar los servicos para obtener los precios, quilombo para el fin de semana
  
    const handleSelectAlmacenamiento = (event) => {
      setSelectedAlmacenamiento(event.target.value);
  
      if (event.target.value != '') {
        setInput4Disabled(false);
        
        if (event.target.value==="Pequeño"){
          orderData.amount = checkPriceByName(request.terreno)+200;
          console.log('pase por if 1');
        }
        else if(event.target.value==="Mediano"){
          orderData.amount = checkPriceByName(request.terreno)+500;
          console.log('pase por if 2');
        }
        else if(event.target.value==="Grande"){
          orderData.amount = checkPriceByName(request.terreno)+1000;
          console.log('pase por if 3');
        
      }
      } else {
        setInput4Disabled(true);
  
    };
  };
  
  
  
  
  
    const handleSelectGuarderia = (event) => {
      setSelectedGuarderia(event.target.value);
  
    if (event.target.value != '') {
      setInput5Disabled(false);
    } else {
      setInput5Disabled(true);
    }
  };
  
  
  
  
  
  const handleSelectSUM = (event) => {
    setSelectedSUM(event.target.value);
  
    if (event.target.value != '') {
      setInput6Disabled(false);
    } else {
      setInput6Disabled(true);
    }
  };
  




if(cargaron){

  return (
    <div>
      <div>
        <p>
          <b>Terreno.</b> ¿Cuál es el mejor para su familia?
        </p><p className={InputCSS['icono']}>?</p>
        <div className={InputCSS['radioInputs']}>
          <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 1' ? InputCSS.selected : ''}`}>
            <input 
              type="radio" 
              value="Lote 1"
              checked={selectedTerreno === 'Lote 1'} 
              onChange={handleSelectTerreno}
              disabled={!checkStockByName("Lote 1")} 
              />
            F1 {!checkStockByName("Lote 1") && <p>‎ Lote no disponible</p>}
          </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 2' ? InputCSS.selected : ''}`}>
          <input 
          type="radio" 
          value="Lote 2"
          checked={selectedTerreno === 'Lote 2'} 
          onChange={handleSelectTerreno}
          disabled={!checkStockByName("Lote 2")}  
          />
          F2 {!checkStockByName("Lote 2") && <p>‎ Lote no disponible</p>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 3' ? InputCSS.selected : ''}`}>
          <input 
          type="radio" 
          value="Lote 3" 
          checked={selectedTerreno === 'Lote 3'} 
          onChange={handleSelectTerreno}
          disabled={!checkStockByName("Lote 3")}  
          />
          F3 {!checkStockByName("Lote 3") && <p>‎ Lote no disponible</p>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 4' ? InputCSS.selected : ''}`}>
          <input 
          type="radio" 
          value="Lote 4"
          checked={selectedTerreno === 'Lote 4'} 
          onChange={handleSelectTerreno} 
          disabled={!checkStockByName("Lote 4")}
          />
          F4 {!checkStockByName("Lote 4") && <p>‎ Lote no disponible</p>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 5' ? InputCSS.selected : ''}`}>
          <input 
          type="radio" 
          value="Lote 5"
          checked={selectedTerreno === 'Lote 5'} 
          onChange={handleSelectTerreno} 
          disabled={!checkStockByName("Lote 5")} 
          />
          F5 {!checkStockByName("Lote 5") && <p>‎ Lote no disponible</p>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 6' ? InputCSS.selected : ''}`}>
          <input 
          type="radio" 
          value="Lote 6"
          checked={selectedTerreno === 'Lote 6'} 
          onChange={handleSelectTerreno}
          disabled={!checkStockByName("Lote 6")}  
          />
          F6 {!checkStockByName("Lote 6") && <p>‎ Lote no disponible</p>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 7' ? InputCSS.selected : ''}`}>
          <input 
          type="radio" 
          value="Lote 7"
          checked={selectedTerreno === 'Lote 7'} 
          onChange={handleSelectTerreno} 
          disabled={!checkStockByName("Lote 7")} 
          />
          F7 {!checkStockByName("Lote 7") && <p>‎ Lote no disponible</p>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 8' ? InputCSS.selected : ''}`}>
          <input type="radio" value="Lote 8" checked={selectedTerreno === 'Lote 8'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 8")} />
          F8 {!checkStockByName("Lote 8") && <p>‎ Lote no disponible</p>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 9' ? InputCSS.selected : ''}`}>
          <input type="radio" value="Lote 9" checked={selectedTerreno === 'Lote 9'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 9")} />
          F9 {!checkStockByName("Lote 9") && <p>‎ Lote no disponible</p>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 10' ? InputCSS.selected : ''}`}>
          <input type="radio" value="Lote 10" checked={selectedTerreno === 'Lote 10'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 10")}/>
          F10 {!checkStockByName("Lote 10") && <p>‎ Lote no disponible</p>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 11' ? InputCSS.selected : ''}`}>
          <input type="radio" value="Lote 11" checked={selectedTerreno === 'Lote 11'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 11")} />
          F11 {!checkStockByName("Lote 11") && <p>‎ Lote no disponible</p>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 12' ? InputCSS.selected : ''}`}>
          <input type="radio" value="Lote 12" checked={selectedTerreno === 'Lote 12'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 12")} />
          F12 {!checkStockByName("Lote 12") && <p>‎ Lote no disponible</p>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 13' ? InputCSS.selected : ''}`}>
          <input type="radio" value="Lote 13" checked={selectedTerreno === 'Lote 13'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 13")} />
          F13 {!checkStockByName("Lote 13") && <p>‎ Lote no disponible</p>}
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 13' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F13" checked={selectedTerreno === 'Lote 13'} onChange={handleSelectTerreno} disabled={!checkStockByName("Lote 13")} />
          F13 {!checkStockByName("Lote 13") && <p>‎ Lote no disponible</p>}
        </label>
        <br/>

  
        
      </div>
        </div>


        <div className={InputCSS['ref']} ref={cardRef}>
        <p><b>Asset Card.</b> Cuántas personas viven con usted?</p>
        <div className={InputCSS['radioInputs']}>
        <label className={`${InputCSS['radioInput']} ${selectedCard === '1' ? InputCSS.selected : ''}`}>
          <input 
          type="radio" 
          value="1" 
          checked={selectedCard === '1'} 
          onChange={handleSelectCard} 
          disabled={input2Disabled}/>
          1
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedCard === '2' ? InputCSS.selected : ''}`}>
          <input type="radio" value="2" checked={selectedCard === '2'} onChange={handleSelectCard} disabled={input2Disabled}/>
          2
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedCard === '3' ? InputCSS.selected : ''}`}>
          <input type="radio" value="3" checked={selectedCard === '3'} onChange={handleSelectCard} disabled={input2Disabled}/>
          3
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedCard === '4' ? InputCSS.selected : ''}`}>
          <input type="radio" value="4" checked={selectedCard === '4'} onChange={handleSelectCard} disabled={input2Disabled}/>
          4
        </label>
        <br/>
      </div>
      </div>

        <div className={InputCSS['ref']} ref={almacenamientoRef}>
        <p><b>Almacenamiento.</b> ¿Cuánto espacio necesitará para almacenar sus cosas?</p>
        <div className={InputCSS['radioInputs']}>
        <label className={`${InputCSS['radioInput']} ${selectedAlmacenamiento === 'Pequeño' ? InputCSS.selected : ''}`}>
          <input type="radio" value="Pequeño" checked={selectedAlmacenamiento === 'Pequeño'} onChange={handleSelectAlmacenamiento} disabled={input3Disabled} />
            Pequeño
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedAlmacenamiento === 'Mediano' ? InputCSS.selected : ''}`}>
          <input type="radio" value="Mediano" checked={selectedAlmacenamiento === 'Mediano'} onChange={handleSelectAlmacenamiento} disabled={input3Disabled}/>
          Mediano
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedAlmacenamiento === 'Grande' ? InputCSS.selected : ''}`}>
          <input type="radio" value="Grande" checked={selectedAlmacenamiento === 'Grande'} onChange={handleSelectAlmacenamiento} disabled={input3Disabled}/>
          Grande
        </label>
        <br/>
      </div>
      </div>


      <div className={InputCSS['ref']} ref={guarderiaRef}>
      <p><b> Guardería.</b> ¿Cuál es el plan que mejor se adapta a ti?</p>
      <div className={InputCSS['radioInputs']}>
      <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '0' ? InputCSS.selected : ''}`}>
          <input type="radio" value="0" checked={selectedGuarderia === '0'} onChange={handleSelectGuarderia} disabled={input4Disabled}/>
          Ninguno
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '1' ? InputCSS.selected : ''}`}>
          <input type="radio" value="1" checked={selectedGuarderia === '1'} onChange={handleSelectGuarderia} disabled={input4Disabled}/>
          1 Meses
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '3' ? InputCSS.selected : ''}`}>
          <input type="radio" value="3" checked={selectedGuarderia === '3'} onChange={handleSelectGuarderia} disabled={input4Disabled}/>
          3 Meses
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '6' ? InputCSS.selected : ''}`}>
          <input type="radio" value="6" checked={selectedGuarderia === '6'} onChange={handleSelectGuarderia} disabled={input4Disabled}/>
          6 Meses
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '12' ? InputCSS.selected : ''}`}>
          <input type="radio" value="12" checked={selectedGuarderia === '12'} onChange={handleSelectGuarderia} disabled={input4Disabled}/>
          12 Meses
        </label>
        <br/>
      </div>
      </div>

      <div className={InputCSS['ref']} ref={sumRef}>
      <p><b> SUM.</b> Reservá el espacio para lo que tu quieras.</p>
      <div className={InputCSS['radioInputs']}>
      <label className={`${InputCSS['radioInput']} ${selectedSUM === '0' ? InputCSS.selected : ''}`}>
          <input type="radio" value="0" checked={selectedSUM === '0'} onChange={handleSelectSUM} disabled={input5Disabled}/>
          Ninguno
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedSUM === '6' ? InputCSS.selected : ''}`}>
          <input type="radio" value="6" checked={selectedSUM === '6'} onChange={handleSelectSUM} disabled={input5Disabled}/>
          6 Meses
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedSUM === '12' ? InputCSS.selected : ''}`}>
          <input type="radio" value="12" checked={selectedSUM === '12'} onChange={handleSelectSUM} disabled={input5Disabled}/>
          12 Meses
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedSUM === '24' ? InputCSS.selected : ''}`}>
          <input type="radio" value="24" checked={selectedSUM === '24'} onChange={handleSelectSUM} disabled={input5Disabled}/>
          24 Meses
        </label>
        <br/>
      </div>
      </div>

      {/* <div className={InputCSS['ref']} ref={pagoRef}>
      <p><b> Opciones de pago.</b> Seleccione el que funcione para usted.</p>
      <div className={InputCSS['radioInputs']}>
        <label className={`${InputCSS['radioInput']} ${selectedPago === '1' ? InputCSS.selected : ''}`}>
          <input type="radio" value="1" checked={selectedPago === '1'} onChange={handleSelectPago} disabled={input6Disabled}/>
          1 cuota
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedPago === '6' ? InputCSS.selected : ''}`}>
          <input type="radio" value="6" checked={selectedPago === '6'} onChange={handleSelectPago} disabled={input6Disabled}/>
          6 cuotas
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedPago === '12' ? InputCSS.selected : ''}`}>
          <input type="radio" value="12" checked={selectedPago === '12'} onChange={handleSelectPago} disabled={input6Disabled}/>
          12 cuotas
        </label>
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
      <p>
        <b>Terreno.</b> ¿Cuál es el mejor para su familia?
      </p>
      <div className={InputCSS['radioInputs']}>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 1' ? InputCSS.selected : ''}`}>
          <input 
            type="radio" 
            value="F1" 
            checked={selectedTerreno === 'Lote 1'} 
            // onChange={handleSelectTerreno}
            
            />
          F1 
        </label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 2' ? InputCSS.selected : ''}`}>
        <input 
        type="radio" 
        value="F2" 
        checked={selectedTerreno === 'Lote 2'} 
        // onChange={handleSelectTerreno}
         
        />
        F2
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 3' ? InputCSS.selected : ''}`}>
        <input 
        type="radio" 
        value="F3" 
        checked={selectedTerreno === 'Lote 3'} 
        // onChange={handleSelectTerreno}
        
        />
        F3 
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 4' ? InputCSS.selected : ''}`}>
        <input 
        type="radio" 
        value="F4" 
        checked={selectedTerreno === 'Lote 4'} 
        // onChange={handleSelectTerreno} 
        
        />
        F4 
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 5' ? InputCSS.selected : ''}`}>
        <input 
        type="radio" 
        value="F5" 
        checked={selectedTerreno === 'Lote 5'} 
        // onChange={handleSelectTerreno} 
        
        />
        F5 
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 6' ? InputCSS.selected : ''}`}>
        <input 
        type="radio" 
        value="F6" 
        checked={selectedTerreno === 'Lote 6'} 
        // onChange={handleSelectTerreno}
         
        />
        F6 
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 7' ? InputCSS.selected : ''}`}>
        <input 
        type="radio" 
        value="F7" 
        checked={selectedTerreno === 'Lote 7'} 
        // onChange={handleSelectTerreno} 
        
        />
        F7 
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 8' ? InputCSS.selected : ''}`}>
        <input type="radio" value="F8" checked={selectedTerreno === 'Lote 8'} 
        // onChange={handleSelectTerreno}  
        />
        F8 
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 9' ? InputCSS.selected : ''}`}>
        <input type="radio" value="F9" checked={selectedTerreno === 'Lote 9'} /**onChange={handleSelectTerreno} **/ />
        F9 
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 10' ? InputCSS.selected : ''}`}>
        <input type="radio" value="F10" checked={selectedTerreno === 'Lote 10'} /**onChange={handleSelectTerreno} **/  />
        F10 
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 11' ? InputCSS.selected : ''}`}>
        <input type="radio" value="F11" checked={selectedTerreno === 'Lote 11'} /**onChange={handleSelectTerreno} **/   />
        F11 
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 12' ? InputCSS.selected : ''}`}>
        <input type="radio" value="F12" checked={selectedTerreno === 'Lote 12'} /**onChange={handleSelectTerreno} **/   />
        F12 
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 13' ? InputCSS.selected : ''}`}>
        <input type="radio" value="F13" checked={selectedTerreno === 'Lote 13'} /**onChange={handleSelectTerreno} **/   />
        F13 
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'Lote 13' ? InputCSS.selected : ''}`}>
        <input type="radio" value="F13" checked={selectedTerreno === 'Lote 13'} /**onChange={handleSelectTerreno} **/   />
        F13 
      </label>
      <br/>
      
    </div>
      </div>


      <div className={InputCSS['ref']} ref={cardRef}>
      <p><b>Asset Card.</b> Cuántas personas viven con usted?</p>
      <div className={InputCSS['radioInputs']}>
      <label className={`${InputCSS['radioInput']} ${selectedCard === '1' ? InputCSS.selected : ''}`}>
        <input type="radio" value="1" checked={selectedCard === '1'} /**onChange={handleSelectCard}**/ disabled={input2Disabled}/>
        1
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedCard === '2' ? InputCSS.selected : ''}`}>
        <input type="radio" value="2" checked={selectedCard === '2'}/**onChange={handleSelectCard}**/ disabled={input2Disabled}/>
        2
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedCard === '3' ? InputCSS.selected : ''}`}>
        <input type="radio" value="3" checked={selectedCard === '3'} /**onChange={handleSelectCard}**/ disabled={input2Disabled}/>
        3
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedCard === '4' ? InputCSS.selected : ''}`}>
        <input type="radio" value="4" checked={selectedCard === '4'} /**onChange={handleSelectCard}**/ disabled={input2Disabled}/>
        4
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedCard === '5' ? InputCSS.selected : ''}`}>
        <input type="radio" value="5" checked={selectedCard === '5'} /**onChange={handleSelectCard}**/ disabled={input2Disabled}/>
        5
      </label>
      <br/>
    </div>
    </div>

      <div className={InputCSS['ref']} ref={almacenamientoRef}>
      <p><b>Almacenamiento.</b> ¿Cuánto espacio necesitará para almacenar sus cosas?</p>
      <div className={InputCSS['radioInputs']}>
      <label className={`${InputCSS['radioInput']} ${selectedAlmacenamiento === 'Pequeño' ? InputCSS.selected : ''}`}>
        <input type="radio" value="Pequeño" checked={selectedAlmacenamiento === 'Pequeño'} /**onChange={handleSelectAlmacenamiento}**/ disabled={input3Disabled} />
          Pequeño
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedAlmacenamiento === 'Mediano' ? InputCSS.selected : ''}`}>
        <input type="radio" value="Mediano" checked={selectedAlmacenamiento === 'Mediano'} /**onChange={handleSelectAlmacenamiento}**/ disabled={input3Disabled}/>
        Mediano
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedAlmacenamiento === 'Grande' ? InputCSS.selected : ''}`}>
        <input type="radio" value="Grande" checked={selectedAlmacenamiento === 'Grande'} /**onChange={handleSelectAlmacenamiento}**/ disabled={input3Disabled}/>
        Grande
      </label>
      <br/>
    </div>
    </div>


    <div className={InputCSS['ref']} ref={guarderiaRef}>
    <p><b> Guardería.</b> ¿Cuál es el plan que mejor se adapta a ti?</p>
    <div className={InputCSS['radioInputs']}>
      <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '6' ? InputCSS.selected : ''}`}>
        <input type="radio" value="6" checked={selectedGuarderia === '6'} /**onChange={handleSelectGuarderia}**/ disabled={input4Disabled}/>
        6 Meses
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '12' ? InputCSS.selected : ''}`}>
        <input type="radio" value="12" checked={selectedGuarderia === '12'} /**onChange={handleSelectGuarderia}**/  disabled={input4Disabled}/>
        12 Meses
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '24' ? InputCSS.selected : ''}`}>
        <input type="radio" value="24" checked={selectedGuarderia === '24'} /**onChange={handleSelectGuarderia}**/  disabled={input4Disabled}/>
        24 Meses
      </label>
      <br/>
    </div>
    </div>

    <div className={InputCSS['ref']} ref={sumRef}>
    <p><b> SUM.</b> Reservá el espacio para lo que tu quieras.</p>
    <div className={InputCSS['radioInputs']}>
      <label className={`${InputCSS['radioInput']} ${selectedSUM === '6' ? InputCSS.selected : ''}`}>
        <input type="radio" value="6" checked={selectedSUM === '6'} /**onChange={handleSelectSUM}**/ disabled={input5Disabled}/>
        6 Meses
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedSUM === '12' ? InputCSS.selected : ''}`}>
        <input type="radio" value="12" checked={selectedSUM === '12'} /**onChange={handleSelectSUM}**/ disabled={input5Disabled}/>
        12 Meses
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedSUM === '24' ? InputCSS.selected : ''}`}>
        <input type="radio" value="24" checked={selectedSUM === '24'} /**onChange={handleSelectSUM}**/ disabled={input5Disabled}/>
        24 Meses
      </label>
      <br/>
    </div>
    </div>

    <div className={InputCSS['ref']} ref={pagoRef}>
    <p><b> Opciones de pago.</b> Seleccione el que funcione para usted.</p>
    <div className={InputCSS['radioInputs']}>
      <label className={`${InputCSS['radioInput']} ${selectedPago === '1' ? InputCSS.selected : ''}`}>
        <input type="radio" value="1" checked={selectedPago === '1'} /**onChange={handleSelectPago}**/ disabled={input6Disabled}/>
        1 cuota
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedPago === '6' ? InputCSS.selected : ''}`}>
        <input type="radio" value="6" checked={selectedPago === '6'} /**onChange={handleSelectPago}**/ disabled={input6Disabled}/>
        6 cuotas
      </label>
      <label className={`${InputCSS['radioInput']} ${selectedPago === '12' ? InputCSS.selected : ''}`}>
        <input type="radio" value="12" checked={selectedPago === '12'} /**onChange={handleSelectPago}**/ disabled={input6Disabled}/>
        12 cuotas
      </label>
      <br/>
    </div>
    </div>
  </div>
  

  )
}
} 
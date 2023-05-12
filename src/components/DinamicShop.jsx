import React, { useState, useRef, useEffect } from 'react';
import Payment from "./Payment";
import Checkout from "./Checkout";
import InternalProvider from "../Service/ContextProvider";
import request from './InputsCompra';


import InputCSS from '../css/Inputs.module.css';
import { initMercadoPago } from "@mercadopago/sdk-react";

import { SpinnerCircular } from 'spinners-react';






initMercadoPago("TEST-8cc0de02-11c6-4f51-86f9-5243bcc0b1cd");
 
 export default function DinamicShop(props) {
    const [preferenceId, setPreferenceId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [orderData, setOrderData] = useState(props);    

    console.log("props");
    console.log(JSON.stringify(props.props));
    console.log("OrderData");
    console.log(orderData[0]);
    const handleClick = () => {
        setIsLoading(true);
        postVenta();
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



      const postVenta = async () => {
        try {
          const response = await fetch(`http://localhost:8080/v1/venta`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
          });
          if (response.status > 200 || response.status <= 300) {
            console.log(response.status)
            console.log(await response.json());
                if(response.status === 201){
                    
                    return response.status;
                }
                else if (response.status === 400){
                    
                    return response.status;
                }
                else if (response.status === 409){
      
                    return response.status;
                }
                else if (response.status === 500){
      
                    return response.status;
                }
          }
          
        else if (response.status !==200){
            let errorMessage = 'Ha ocurrido un error.';
            throw new Error(errorMessage);
        }
        else if (response.status === 400) {
          let errorMessage = 'Lote altan datos requeridos en la solicitud.';
            throw new Error(errorMessage);
            } 
        else if (response.status === 409) {
          let errorMessage = 'El usuario ya ha sido registrado previamente.';
              throw new Error(errorMessage);
            }
            
          
        
          const data = await response.json();
          console.log("se ejecuto registro");
          console.log(data);
        
      
      } catch (error) {
      console.error(error.message);
      console.error(error.status);
          // Puedes manejar el error de otra manera, por ejemplo, mostrar un mensaje de error en la aplicación.
        }
      }




    
   
    return (
     <div>{/* mercado pago */}
     <InternalProvider context={{ preferenceId, isLoading, orderData, setOrderData }}>
<main  className={`${InputCSS.checkout}`}>
 {renderSpinner()}
 <Checkout onClick={handleClick} description/>
 <Payment />
</main>
{/* <FooterMeli /> */}
</InternalProvider>
{/* fin mercado pago */}</div>
   )
 }
 


            
import React  from 'react';
import FeedbackCSS from '../css/Feedback.module.css';
import { BackgroundQuarters } from '../components/Background';


function Inicio() {

  const usuarioJson = sessionStorage.getItem('user');
  const compraJson = sessionStorage.getItem('compra');

  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
  const compra = compraJson ? JSON.parse(compraJson) : null;

  const urlParams = new URLSearchParams(window.location.search);
  const status = Object.fromEntries(urlParams).status;
  console.log(Object.fromEntries(urlParams))
  let message = '';

  const postVenta = async (venta) => {
  try {
    const response = await fetch(`http://localhost:8080/v1/venta`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(venta)
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

  if (status === 'approved') {
    // message = 'TU COMPRA ESTÁ APROBADA';
    message = `TU COMPRA ESTÁ APROBADA `;
    postVenta(compra);
    console.log(compra);

  } else if (status === 'failure') {
    message = 'TU COMPRA ESTÁ RECHAZADA';
  } else if (status === 'pending') {
    message = 'TU COMPRA ESTÁ EN PROCESO';
  }

  return (
    <div className={FeedbackCSS.inicio}>
      <div className={FeedbackCSS.text}>
        <h1 className={FeedbackCSS.h1}>FEED: {message}</h1>
      </div>
      <>
        <BackgroundQuarters className={FeedbackCSS.background} />
      </>
    </div>
  );
}

export default Inicio;

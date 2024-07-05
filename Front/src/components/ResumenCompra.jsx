import React, { useEffect, useState } from 'react';
import ResumenCSS from '../css/Resumen.module.css';
// import Payment from './Payment';

const Resumen = ({seleccion}) => {

  // const compraJson = compra ? JSON.parse(compra) : {};
  useEffect(() => {
   console.log(seleccion)
    }, []);
  

  return (
    <div className={ResumenCSS.container}>
      <div className={ResumenCSS.imageContainer}></div>
      <div className={ResumenCSS.textContainer}>
        {/* <ul className={ResumenCSS.list}>
          {Object.entries(productos).map(([key, value]) => (
            <li key={key}>{`${key}: ${value}`}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );  
};

export default Resumen;


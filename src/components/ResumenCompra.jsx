import React, { useEffect, useState } from 'react';
import ResumenCSS from '../css/Resumen.module.css';
// import Payment from './Payment';

const Resumen = () => {
  const [productos, setProductos] = useState([]);
  const compra = sessionStorage.getItem('compra');
  // const compraJson = compra ? JSON.parse(compra) : {};
  useEffect(() => {
    if (sessionStorage.getItem('compra')) {
      const compraJson = JSON.parse(sessionStorage.getItem('compra'));
      console.log(compra)
      setProductos(Array.isArray(compraJson) ? compraJson : []);
    }
  }, [sessionStorage.getItem('compra')]);
  

  return (
    <div className={ResumenCSS.container}>
      <div className={ResumenCSS.imageContainer}></div>
      <div className={ResumenCSS.textContainer}>
        <ul className={ResumenCSS.list}>
          {Object.entries(productos).map(([key, value]) => (
            <li key={key}>{`${key}: ${value}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );  
};

export default Resumen;


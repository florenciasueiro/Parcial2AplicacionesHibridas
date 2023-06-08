import React,{useState, useEffect} from 'react';
import ShopCSS from '../css/Shop.module.css';
import Carousel from '../components/Carousel';
import Inputs from '../components/InputsCompra';
import FAQ from '../components/PreguntasFrecuentes';
// import Comparative from '../components/Comparative';
import Resumen from '../components/ResumenCompra';

function Shop() {
  const [seleccion, setSeleccion]= useState({});
  
  const handleSeleccionUpdate = (nuevaSeleccion)=>{
    setSeleccion(nuevaSeleccion);
    console.log('hola desde shop')

  }
  
  return (
    <div className={ShopCSS.body}>
      <div className={ShopCSS.container}>
        <div className={ShopCSS.carousel}>
          <Carousel/>
        </div>
        <div className={ShopCSS.inputs}>
          <Inputs seleccion={handleSeleccionUpdate}/>
        </div>
      </div>
      <div>
        <h1>Que incluye mi compra?</h1>
        <Resumen seleccion={seleccion} />
        {/* por algun motivo extraño al pasarle el prop de seleccion a resumen este
        se pasa correctametne solo la primera vez y no se actualiza cada vez que la seleccion 
        cambia asi que como nadie nos obliga a usar ese componete...
        mejor escrbiimos aca el resumen total es un codigo cortito 👌😎👍 */}
        <span> mi compra incluye {JSON.stringify(seleccion)} </span>
        <br/>
      </div>
      <div className={ShopCSS.comparative}>
        <div>
          {/* <Comparative/> */}
        </div>
      </div>
      <div className={ShopCSS.faq}>
      <h1>Preguntas Frecuentes</h1>
        <FAQ/>
      </div>
      
    </div>
  );
}

export default Shop;
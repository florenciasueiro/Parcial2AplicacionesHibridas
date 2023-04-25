import React from 'react';
import ShopCSS from '../css/Shop.module.css';
import Carousel from '../components/Carousel';
import Inputs from '../components/InputsCompra';
import FAQ from '../components/PreguntasFrecuentes';

function Shop() {
  return (
    <div className={ShopCSS.body}>
      <div className={ShopCSS.container}>
        <div className={ShopCSS.carousel}>
          <Carousel />
        </div>
        <div className={ShopCSS.inputs}>
          <Inputs />
        </div>
      </div>
      <div>
        <h1>Que incluye mi compra?</h1>
        <br/>
      </div>
      <div className={ShopCSS.faq}>
      <h1>Preguntas Frecuentes</h1>
        <FAQ/>
      </div>

    </div>
  );
}

export default Shop;

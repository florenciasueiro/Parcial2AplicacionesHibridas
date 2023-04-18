import React from 'react';
import ShopCSS from '../css/Shop.module.css';
import Carousel from '../components/Carousel';
import RadioInputs from '../components/InputsCompra';

function Shop() {
  return (
    <div className={ShopCSS.body}>
      <div className={ShopCSS.carouselContainer}>
        <Carousel />
      </div>
      <div className={ShopCSS.inputs}>
        <RadioInputs />
      </div>
    </div>
  );
}

export default Shop;

import React from 'react';
import { BackgroundQuarters } from  '../components/Background';
import ProductGrid from '../components/ProductGrid.jsx';
import QuartersCSS from '../css/Quarters.module.css';
import { Link } from 'react-router-dom';


function Quarters() {
  return (
    <div className={QuartersCSS.Inicio}>
      <React.Fragment>
      <>
      <div className={QuartersCSS.text}>
        <h1>Quarters Family 1</h1>
        <p>En nuestro barrio residencial podrás disfrutar de la sofisticación y la alta calidad que mereces. No esperes más para asegurar el futuro de tu familia, reserva ahora mismo tu terreno en nuestro exclusivo barrio y comienza a disfrutar de una vida plena y confortable.</p>
        <Link className={QuartersCSS.link} to="/shop"><b>Comprar</b></Link>
      </div>
      <BackgroundQuarters className={QuartersCSS.background}/>
      </>
      <div>
        <>
        <ProductGrid/>
        </>
        
      </div>
      </React.Fragment>
    </div>
  );
}
export default Quarters;
//xd
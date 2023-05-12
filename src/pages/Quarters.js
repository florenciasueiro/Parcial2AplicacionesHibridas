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
        <p>Descubre Quarters Family 1: el barrio residencial ideal para familias en La Plata. Disfruta de la vida en un entorno dinámico rodeado de espacios verdes y acceso rápido al centro. Lotes exclusivos, servicios de calidad, seguridad, guardería y mucho más. ¡Haz realidad tus sueños en Quarters Family 1!</p>
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
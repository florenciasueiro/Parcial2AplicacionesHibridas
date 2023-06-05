import React from 'react';
import { BackgroundQuarters } from  '../components/Background';
// import ProductGrid from '../components/ProductGrid.jsx';
import QuartersCSS from '../css/Quarters.module.css';
import { Link } from 'react-router-dom';
import {CardGrid16, CardGrid17, CardGrid18, CardGrid19, CardGrid20, CardGrid21, CardGrid22, CardGrid23, CardGrid24, CardGrid25} from '../components/GridApp';
import GridCSS from '../css/Grid.module.css'


function Quarters() {
  return (
    <div className={QuartersCSS.Inicio}>
      <React.Fragment>
      <>
      <div className={QuartersCSS.text}>
        <h1>Quarters Family 1</h1>
        <p className={QuartersCSS.p}>Desde u$d 29.999 o u$d 1.725/mes por 18 meses.</p>
        <Link to="/shop"><p className={QuartersCSS.link}>Comprar</p></Link>
      </div>
      <BackgroundQuarters className={QuartersCSS.background}/>
      </>
      <div className={GridCSS.grilla}>
        <CardGrid16 className={GridCSS.tarjeta} />
        <CardGrid17 className={GridCSS.tarjeta} />
        <CardGrid18 className={GridCSS.tarjeta} />
        <CardGrid19 className={GridCSS.tarjeta} />
        <CardGrid20 className={GridCSS.tarjeta} />
        <CardGrid21 className={GridCSS.tarjeta} />
        <CardGrid22 className={GridCSS.tarjeta} />
        <CardGrid23 className={GridCSS.tarjeta} />
        <CardGrid24 className={GridCSS.tarjeta} />
        <CardGrid25 className={GridCSS.tarjeta} />
      </div>
      </React.Fragment>
    </div>
  );
}
export default Quarters;
//xd
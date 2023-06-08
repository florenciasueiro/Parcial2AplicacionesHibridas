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
        <div className={`${GridCSS.tarjetas} ${GridCSS.tarjeta1}`}>
          <CardGrid16/>
        </div>
        <div className={`${GridCSS.tarjetas} ${GridCSS.tarjeta2}`}>
          <CardGrid17/>
        </div>
        <div className={`${GridCSS.tarjetas} ${GridCSS.tarjeta3}`}>
          <CardGrid18/>
        </div>
        <div className={`${GridCSS.tarjetas} ${GridCSS.tarjeta4}`}>
          <CardGrid19/>
        </div>
        <div className={`${GridCSS.tarjetas} ${GridCSS.tarjeta5}`}>
          <CardGrid20/>
        </div>
        <div className={`${GridCSS.tarjetas} ${GridCSS.tarjeta6}`}>
          <CardGrid21/>
        </div>
        <div className={`${GridCSS.tarjetas} ${GridCSS.tarjeta7}`}>
          <CardGrid22/>
        </div>
        <div className={`${GridCSS.tarjetas} ${GridCSS.tarjeta8}`}>
          <CardGrid23/>
        </div>
        <div className={`${GridCSS.tarjetas} ${GridCSS.tarjeta9}`}>
          <CardGrid24/>
        </div>
        <div className={`${GridCSS.tarjetas} ${GridCSS.tarjeta10}`}>
          <CardGrid25/>
        </div>
      </div>


      </React.Fragment>
    </div>
  );
}
export default Quarters;
//xd
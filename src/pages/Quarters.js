import React from 'react';
import { BackgroundQuarters } from  '../components/Background';
import ProductGrid from '../components/ProductGrid.jsx';
import QuartersCSS from '../css/Quarters.module.css';


function Quarters() {
  return (
    <div className={QuartersCSS.Inicio}>
      <React.Fragment>
      <>
      <div className={QuartersCSS.text}>
        <h1>Quarters Family 1</h1>
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
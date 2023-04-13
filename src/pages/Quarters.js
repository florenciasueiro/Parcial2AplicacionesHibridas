import React from 'react';
import { Background } from  '../components/Background';
import ProductGrid from '../components/ProductGrid.jsx';


function Quarters() {
  return (
    <div className="Inicio">
      <React.Fragment>
      <>
      <Background className="background"/>
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
import React from 'react';
import Inicio from './Inicio';
import SobreAsset from './SobreAsset';
import Quarters from './Quarters';
import Eventos from './Eventos';
import {Background} from '../components/Background';
import Productos from '../components/Productos';


const Landing = () => {
  return (
    <div className="App">
      <Background/>
      <Inicio/>
      <SobreAsset/>
      <Productos/>
      <Quarters/>
      <Eventos/>
    </div>
  );
};

export default Landing;

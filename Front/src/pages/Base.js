import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Quarters from './Quarters';
import Inicio from './Inicio';
import Registro from './Registro';
import PreguntasFrecuentes from './PreguntasFrecuentes';
import Shop from './Shop';
import Profile from './Perfil';
import Feedback from './Feedback';
import Factura from './factura'; //me esta obligando a ponerlo en minuscula
import SobreAsset from './SobreAsset';
import Nosotros from './Nosotros';
import Brochure from './Brochure';
import Landing from './Landingpage';
import Producto from './Producto';
import Admin from './Admin'




const Base = () => {
  return (
    <React.Fragment>

      <Routes>
        <Route path='/' element={<Landing/>}/>
        {/* Antes era Inicio */}
        <Route path='/quarters' element={<Quarters/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/preguntasfrecuentes' element={<PreguntasFrecuentes/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/factura' element={<Factura/>}/>
        <Route path='/sobreasset' element={<SobreAsset/>}/>
        <Route path='/brochure' element={<Brochure/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/producto' element={<Producto/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
      
      </React.Fragment>
  );
}
export default Base;
//xd

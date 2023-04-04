import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Quarters from './Quarters';
import Eventos from './Eventos';
import Inicio from './Inicio';
import Registro from './Registro';


const Base = () => {
  return (
    <React.Fragment>

      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/quarters' element={<Quarters/>}/>
        <Route path='/eventos' element={<Eventos/>}/>
        <Route path='/registro' element={<Registro/>}/>
      </Routes>

      </React.Fragment>
  );
}
export default Base;
//xd
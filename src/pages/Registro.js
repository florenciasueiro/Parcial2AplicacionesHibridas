import React from 'react';
import { BackgroundRegistro } from  '../components/Background';
import Registro from '../components/Registro';
import RegistroCSS from '../css/Registro.module.css'


function Register() {
  return (
    <div className={RegistroCSS.body}>
      
      <div>
        <>
        <Registro/>
        </>
      </div>
    </div>
  );
}
export default Register;
//xd
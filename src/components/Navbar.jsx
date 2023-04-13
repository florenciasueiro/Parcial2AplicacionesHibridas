import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarCSS from '../css/Navbar.module.css';
import Login from './Login';
import Contactos from "../service/holdedConection";

function Navbar() {

  const usuario= JSON.parse(sessionStorage.getItem('user'));
  console.log(usuario);

  const displayName = (props) => {
    if(!usuario || Object.keys(usuario).length==0){
      console.log("No usuario");
    return (
      <p>Login</p>
    );
  }
  else{
      console.log("si usuario");
  return(
  
      <p>{usuario[0].name}</p>
  );
  }
  }

  const handleLogin = (email, password) => {
    Contactos(email, password);
  };
  return (
  <div className={NavbarCSS.Navbarcontainer}>
      <div className={NavbarCSS.navprimario}>
        <ul className={NavbarCSS.box}>
            <li className={NavbarCSS.menuItem}><NavLink to="/" className={NavbarCSS.logo}><img src="/img/LogoBlanco.png" alt=""/></NavLink></li>
            <li className={NavbarCSS.menuItem}><NavLink to="/">Inicio</NavLink></li>
            <li className={NavbarCSS.menuItem}><NavLink to="/quarters">Quarters</NavLink></li>
            <li className={NavbarCSS.menuItem}><NavLink to="/eventos">Eventos</NavLink></li>
            {/*<li><a href="" className=''>Login</a></li>*/}
            <input type="checkbox" id={NavbarCSS.active}/>
              <li className={NavbarCSS.menuItem}>
              <label for={NavbarCSS.active} className={NavbarCSS.menubtn}>{displayName()}</label>
                <label for={NavbarCSS.active} className={NavbarCSS.close}></label>
              </li>
              
              <div className={NavbarCSS.wrapper}>
                <div className={NavbarCSS.login}>
                  <Login Contactos={handleLogin}/>
                </div>
            </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
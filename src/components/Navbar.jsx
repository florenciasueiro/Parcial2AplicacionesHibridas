import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavbarCSS from '../css/Navbar.module.css';
import Login from './Login';
import Contactos from "../Service/holdedConection";

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
  
      <p>{usuario.name}</p>
  );
  }
  }

  const handleLogin = (email, password) => {
    Contactos(email, password);
  };
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className={NavbarCSS.Navbarcontainer}>
      <div className={NavbarCSS.navprimario}>
        <ul className={NavbarCSS.box}>
          <li className={NavbarCSS.menuItem}><NavLink exact to="/" className={NavbarCSS.logo}><img src="/img/LogoBlanco.png" alt=""/></NavLink></li>
          <li className={NavbarCSS.menuItem}><NavLink exact to="/">Inicio</NavLink></li>
          <li className={NavbarCSS.menuItem}><NavLink to="/quarters">Quarters</NavLink></li>
          <li className={NavbarCSS.menuItem}><NavLink to="/eventos">Eventos</NavLink></li>
          <li className={NavbarCSS.menuItem}><button onClick={toggleLogin}>{displayName()}</button></li>
          <div className={`${NavbarCSS.wrapper} ${showLogin ? NavbarCSS.show : ''}`}>
            <div className={NavbarCSS.login}>
              <Login Contactos={handleLogin}/>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;

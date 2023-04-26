import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavbarCSS from '../css/Navbar.module.css';
import Login from './Login';
import Contactos from "../Service/APIlogin";

function Navbar() {

const usuarioJson = sessionStorage.getItem('user');
const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
console.log(usuario);

const displayName = (props) => {
  if (!usuario || Object.keys(usuario).length === 0) {
    console.log("No usuario");
    return (
      <p>Login</p>
    );
  } else {
    console.log("usuario");
    return (
      <p>{usuario.name}</p>
    );
  }
};

  const handleLogin = (email, password) => {
    Contactos(email, password);
  };
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };
//probablemente tenga que resolver esto con un session storage
  const hideLogin = () => {setShowLogin(false)}


  return (
    <div className={NavbarCSS.Navbarcontainer}>
      <div className={NavbarCSS.navprimario}>
        <ul className={NavbarCSS.box}>
          <li className={NavbarCSS.menuItem}><button onClick={hideLogin}><NavLink exact to="/" className={NavbarCSS.logo}><img src="/img/LogoNegro.png" alt=""/></NavLink></button></li>
          <li className={NavbarCSS.menuItem}><button onClick={hideLogin}><NavLink exact to="/">Inicio</NavLink></button></li>
          <li className={NavbarCSS.menuItem}><button onClick={hideLogin}><NavLink to="/quarters">Quarters</NavLink></button></li>
          <li className={NavbarCSS.menuItem}><button onClick={hideLogin}><NavLink to="/eventos">Eventos</NavLink></button></li>
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

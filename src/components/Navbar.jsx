import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import NavbarCSS from '../css/Navbar.module.css';
import Login from './Login';
// import Contactos from "../Service/APIlogin";
import NavbarBlackCSS from '../css/NavbarBlack.module.css'

function Navbar() {
  
  const location = useLocation();
  const isShopPage = location.pathname === '/shop';

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
    <div className={`${NavbarCSS.Navbarcontainer} ${isShopPage ? NavbarBlackCSS.Navbarcontainer : ''}`}>
      <div className={`${NavbarCSS.navprimario} ${isShopPage ? NavbarBlackCSS.navbarcontainer : ''}`}>
        <ul className={`${NavbarCSS.box} ${isShopPage ? NavbarBlackCSS.box : ''}`}>
          <li className={`${NavbarCSS.menuItem} ${isShopPage ? NavbarBlackCSS.menuItem : ''}`}><NavLink onClick={hideLogin} exact to="/" className={`${NavbarCSS.logo} ${isShopPage ? NavbarBlackCSS.logo : ''}`}><img src="/img/LogoNegro.png" alt=""/></NavLink></li>
          <li className={`${NavbarCSS.menuItem} ${isShopPage ? NavbarBlackCSS.menuItem : ''}`}><NavLink onClick={hideLogin} exact to="/">Inicio</NavLink></li>
          <li className={`${NavbarCSS.menuItem} ${isShopPage ? NavbarBlackCSS.menuItem : ''}`}><NavLink onClick={hideLogin} to="/quarters">Quarters</NavLink></li>
          <li className={`${NavbarCSS.menuItem} ${isShopPage ? NavbarBlackCSS.menuItem : ''}`}><NavLink onClick={hideLogin} to="/eventos">Eventos</NavLink></li>
          <li className={`${NavbarCSS.menuItem} ${isShopPage ? NavbarBlackCSS.menuItem : ''}`}><button onClick={toggleLogin}>{displayName()}</button></li>
          <div className={`${NavbarCSS.wrapper} ${isShopPage ? `${NavbarBlackCSS.wrapper} ${showLogin ? NavbarBlackCSS.show : ''}` : ''} ${showLogin ? NavbarCSS.show : ''}`}>
            <div className={`${NavbarCSS.login} ${isShopPage ? NavbarBlackCSS.login : ''}`}>
              <Login Contactos={handleLogin}/>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;

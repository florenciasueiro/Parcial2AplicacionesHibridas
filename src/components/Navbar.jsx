import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavbarCSS from '../css/Navbar.module.css';
import Login from './Login';

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };


  return (
    <div className={NavbarCSS.Navbarcontainer}>
      <div className={NavbarCSS.navprimario}>
        <ul className={NavbarCSS.box}>
          <li className={NavbarCSS.menuItem}><NavLink exact to="/" className={NavbarCSS.logo}><img src="/img/LogoNegro.png" alt=""/></NavLink></li>
          <li className={NavbarCSS.menuItem}><NavLink exact to="/">Inicio</NavLink></li>
          <li className={NavbarCSS.menuItem}><NavLink to="/quarters">Quarters</NavLink></li>
          <li className={NavbarCSS.menuItem}><NavLink to="/eventos">Eventos</NavLink></li>
          <li className={NavbarCSS.menuItem}><button onClick={toggleLogin}>Login</button></li>
          <div className={`${NavbarCSS.wrapper} ${showLogin ? NavbarCSS.show : ''}`}>
            <div className={NavbarCSS.login}>
              <Login/>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;

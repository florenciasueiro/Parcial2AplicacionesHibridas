import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import NavbarCSS from '../css/Navbar.module.css';
import Login from './Login';
import Contactos from "../Service/APIlogin";
import NavbarBlackCSS from '../css/NavbarBlack.module.css';
import IslandNotification from './IslandNotification';
import useContactos from '../Service/APIlogin'

function Navbar() {
  const contactos = useContactos();
  const location = useLocation();
  const isShopPage = location.pathname === '/shop';

  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;

  const displayName = (props) => {
    if (!usuario || Object.keys(usuario).length === 0) {
      console.log("No usuario");
      return (
        <p>Login</p>
      );
    } else {
      console.log(usuario);
      return (
        <Link link="true" to="/profile">{usuario.name.split(" ")[0]}</Link>
      );
    }
  };

  const handleLogin = (email, password) => {
    Contactos(email, password);
    setShowLogin(false); // Ocultar el login después de iniciar sesión
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [showLogin, setShowLogin] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);
  const loginRef = useRef(null);

  const showLoginDropdown = () => {
    setShowLogin(true);
  };

  const hideLoginDropdown = () => {
    setShowLogin(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleDropdownMouseLeave = () => {
    setTimeout(() => {
      setShowLogin(false);
    }, 60000); // Retrasar la ocultación del login en 600 milisegundos (0.6 segundos)
  };

  useEffect(() => {
    const usuarioJson = sessionStorage.getItem('user');
    if (usuarioJson) {
      setPlayAnimation(true);
      setTimeout(() => {
        setPlayAnimation(false);
      }, 600000000);
    }
  }, []);

  return (
    <div className={`${NavbarCSS.Navbarcontainer} ${isShopPage ? NavbarBlackCSS.Navbarcontainer : ''}`}>
      <div className={`${NavbarCSS.navprimario} ${isShopPage ? NavbarBlackCSS.navbarcontainer : ''}`}>
        <ul className={`${NavbarCSS.box} ${isShopPage ? NavbarBlackCSS.box : ''}`}>
          <li className={`${NavbarCSS.menuItem} ${isShopPage ? NavbarBlackCSS.menuItem : ''}`}>
            <NavLink onClick={hideLoginDropdown} exact="true" to="/" className={`${NavbarCSS.logo} ${isShopPage ? NavbarBlackCSS.logo : ''}`}>
              <img src={isShopPage ? "/img/LogoBlanco.png" : "/img/LogoNegro.png"} alt="" />
            </NavLink>
          </li>
          <li className={`${NavbarCSS.menuItem} ${isShopPage ? NavbarBlackCSS.menuItem : ''}`}>
            <NavLink onClick={hideLoginDropdown} to="/quarters">Quarters</NavLink>
          </li>
          <li className={`${NavbarCSS.menuItem} ${isShopPage ? NavbarBlackCSS.menuItem : ''}`}>
            <NavLink onClick={hideLoginDropdown} to="/eventos">Eventos</NavLink>
          </li>
          <li className={`${NavbarCSS.menuItem} ${isShopPage ? NavbarBlackCSS.menuItem : ''}`}>
            <NavLink onClick={hideLoginDropdown} exact="true" to="/shop">Store</NavLink>
          </li>
          <li className={`${NavbarCSS.menuItem} ${isShopPage ? NavbarBlackCSS.menuItem : ''}`}>
            <button
              className={NavbarCSS.btn}
              onMouseEnter={showLoginDropdown}
              onClick={() => { usuario && contactos(usuario.email, usuario.password) }}
            >
              {displayName()}
            </button>
          </li>
        </ul>
        <div
          id="loginDropdown"
          className={`${NavbarCSS.wrapper} ${isShopPage ? `${NavbarBlackCSS.wrapper} ${showLogin ? NavbarBlackCSS.show : ''}` : ''} ${
            showLogin ? NavbarCSS.show : ''
          }`}
          onMouseLeave={handleDropdownMouseLeave}
          >
          <div onMouseLeave={handleDropdownMouseLeave} className={`${NavbarCSS.login} ${isShopPage ? NavbarBlackCSS.login : ''}`}>
            <Login Contactos={handleLogin} />
          </div>
        </div>
          {<IslandNotification playAnimation={playAnimation} />}
      </div>
    </div>
  );
}

export default Navbar;

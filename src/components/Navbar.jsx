  import React, { useState, useRef } from 'react';
  import { NavLink, useLocation } from 'react-router-dom';
  import NavbarCSS from '../css/Navbar.module.css';
  import Login from './Login';
  import Contactos from "../Service/APIlogin";
  import NavbarBlackCSS from '../css/NavbarBlack.module.css';
  // import DinamicShop from './DinamicShop';

  function Navbar() {
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
        console.log("usuario");
        return (
          <p>{usuario.name}</p>
        );
      }
    };

    const handleLogin = (email, password) => {
      Contactos(email, password);
      setShowLogin(false); // Ocultar el login después de iniciar sesión
    };

    const [showLogin, setShowLogin] = useState(false);
    const [isDropdownHovered, setIsDropdownHovered] = useState(false);
    const [isLoginHovered, setIsLoginHovered] = useState(false);
    const loginRef = useRef(null);

    const toggleLogin = () => {
      setShowLogin(!showLogin);
    };

    const showLoginDropdown = () => {
      setShowLogin(true);
    };

    const hideLoginDropdown = () => {
      setShowLogin(false);
    };

    const handleDropdownMouseEnter = () => {
      setIsDropdownHovered(true);
    };

    const handleDropdownMouseLeave = () => {
      setTimeout(() => {
        setShowLogin(false);
      }, 200); // Retrasar la ocultación del login en 2000 milisegundos (2 segundos)
    };
    

    const handleLoginMouseEnter = () => {
      setIsLoginHovered(true);
    };


    const handleLoginMouseLeave = () => {
      if (!isLoginHovered) {
        setTimeout(() => {
          setShowLogin(false);
        }, 200); // Tiempo adicional antes de cerrar el login (2 segundos)
      }
    };

    return (
      <div className={`${NavbarCSS.Navbarcontainer} ${isShopPage ? NavbarBlackCSS.Navbarcontainer : ''}`}>
        <div className={`${NavbarCSS.navprimario} ${isShopPage ? NavbarBlackCSS.navbarcontainer : ''}`}>
          <ul className={`${NavbarCSS.box} ${isShopPage ? NavbarBlackCSS.box : ''}`}>
            <li className={`${NavbarCSS.menuItem} ${isShopPage ? NavbarBlackCSS.menuItem : ''}`}>
              <NavLink onClick={hideLoginDropdown} exact to="/" className={`${NavbarCSS.logo} ${isShopPage ? NavbarBlackCSS.logo : ''}`}>
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
              <NavLink onClick={hideLoginDropdown} exact to="/shop">Store</NavLink>
            </li>
            <li className={`${NavbarCSS.menuItem} ${isShopPage ? NavbarBlackCSS.menuItem : ''}`}>
            <button
              className={NavbarCSS.btn}
              onMouseEnter={showLoginDropdown}
            >
              {displayName()}
            </button>
          </li>
          <div
            id="loginDropdown"
            className={`${NavbarCSS.wrapper} ${isShopPage ? `${NavbarBlackCSS.wrapper} ${showLogin ? NavbarBlackCSS.show : ''}` : ''} ${
              showLogin ? NavbarCSS.show : ''
            }`}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div
                      onMouseLeave={handleDropdownMouseLeave}

              className={`${NavbarCSS.login} ${isShopPage ? NavbarBlackCSS.login : ''}`}
            >
              <Login Contactos={handleLogin} />
            </div>
          </div>
        </ul>
        {/* {isShopPage && (
          <div>
            {<DinamicShop />}
          </div>
        )} */}
      </div>
    </div>
  );
  }

  export default Navbar;

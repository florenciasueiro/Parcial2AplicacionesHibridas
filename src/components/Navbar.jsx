import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  const [navprimarioWidth, setNavprimarioWidth] = useState(0);
  const navprimarioRef = useRef(null);
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
        <Link Link to="/profile">{usuario.name}</Link>
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
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownHovered(true);
  };

  const handleDropdownMouseLeave = () => {
    setTimeout(() => {
      setShowLogin(false);
    }, 600); // Retrasar la ocultación del login en 600 milisegundos (0.6 segundos)
  };

  const handleLoginMouseEnter = () => {
    setIsLoginHovered(true);
  };

  const handleLoginMouseLeave = () => {
    if (!isLoginHovered) {
      setTimeout(() => {
        setShowLogin(false);
      }, 600); // Tiempo adicional antes de cerrar el login (0.6 segundos)
    }
  };

  useEffect(() => {
    if (navprimarioRef.current) {
      const width = navprimarioRef.current.offsetWidth;
      setNavprimarioWidth(width);
    }
  }, []);

  return (
    <div className={`Navbar ${isShopPage ? 'black' : ''}`}>
      <div ref={navprimarioRef} className={`navprimario ${isShopPage ? 'navbarcontainer' : ''}`}>
        <ul className={`box ${isShopPage ? 'menuItem' : ''}`}>
          <li className={`menuItem ${isShopPage ? 'navbarcontainer' : ''}`}>
            <NavLink onClick={hideLoginDropdown} exact to="/" className={`logo ${isShopPage ? 'navbarcontainer' : ''}`}>
              <img src={isShopPage ? "/img/LogoBlanco.png" : "/img/LogoNegro.png"} alt="" />
            </NavLink>
          </li>
          <li className={`menuItem ${isShopPage ? 'navbarcontainer' : ''}`}>
            <NavLink onClick={hideLoginDropdown} to="/quarters">Quarters</NavLink>
          </li>
          <li className={`menuItem ${isShopPage ? 'navbarcontainer' : ''}`}>
            <NavLink onClick={hideLoginDropdown} to="/eventos">Eventos</NavLink>
          </li>
          <li className={`menuItem ${isShopPage ? 'navbarcontainer' : ''}`}>
            <NavLink onClick={hideLoginDropdown} exact to="/shop">Store</NavLink>
          </li>
          <li className={`menuItem ${isShopPage ? 'navbarcontainer' : ''}`}>
            <button
              className="btn"
              onMouseEnter={showLoginDropdown}
              onClick={() => { contactos(usuario.email, usuario.password) }}
            >
              {displayName()}
            </button>
          </li>
          <div
            id="loginDropdown"
            className={`wrapper ${isShopPage ? `navbarcontainer ${showLogin ? 'show' : ''}` : ''} ${showLogin ? 'show' : ''}`}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div onMouseLeave={handleDropdownMouseLeave} className={`login ${isShopPage ? 'navbarcontainer' : ''}`}>
              <Login Contactos={handleLogin} />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

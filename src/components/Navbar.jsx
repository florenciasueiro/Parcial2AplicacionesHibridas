import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import NavbarCSS from '../css/Navbar.module.css';
import Login from './Login';
import Contactos from "../Service/APIlogin";
import NavbarBlackCSS from '../css/NavbarBlack.module.css';
import IslandNotification from './IslandNotification';
import useContactos from '../Service/APIlogin'

const postVenta = async (venta) => {
  try {
    const response = await fetch(`https://restapinode-production.up.railway.app/v1/venta`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(venta)
    });
    
    if (response.status > 200 || response.status <= 300) {
      console.log(response.status)
      console.log(await response.json());
          if(response.status === 201){
              
              return response.status;
          }
          else if (response.status === 400){
              
              return response.status;
          }
          else if (response.status === 409){

              return response.status;
          }
          else if (response.status === 500){

              return response.status;
          }
    }
    
  else if (response.status !==200){
      let errorMessage = 'Ha ocurrido un error.';
      throw new Error(errorMessage);
  }
  else if (response.status === 400) {
    let errorMessage = 'Lote altan datos requeridos en la solicitud.';
      throw new Error(errorMessage);
      } 
  else if (response.status === 409) {
    let errorMessage = 'El usuario ya ha sido registrado previamente.';
        throw new Error(errorMessage);
      }
      
    
  
    const data = await response.json();
    console.log("se ejecuto registro");
    console.log(data);
  

} catch (error) {
console.error(error.message);
console.error(error.status);
    // Puedes manejar el error de otra manera, por ejemplo, mostrar un mensaje de error en la aplicación.
  }
}

const urlParams = new URLSearchParams(window.location.search);
const status = Object.fromEntries(urlParams).status;
console.log(Object.fromEntries(urlParams))

function Navbar() {
  const contactos = useContactos();
  const location = useLocation();
  const isShopPage = location.pathname === '/shop';
  const compraJson = sessionStorage.getItem('compra');
  const compra = compraJson ? JSON.parse(compraJson) : null;
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;


 
  
  useEffect(() => {
    const compraJson = sessionStorage.getItem('compra');
    console.log(compraJson);
    const compraCounter = Number(sessionStorage.getItem('compraCounter'));
    console.log(compraCounter);
    if (compraJson && compraCounter === 0) {
      setPlayAnimation(true);
      sessionStorage.setItem('compraCounter', '1');
      if (status === 'approved' && compra) {
        // message = 'TU COMPRA ESTÁ APROBADA';
        setMessage(`TU COMPRA ESTÁ APROBADA `);
        postVenta(compra);
        console.log(compra);
        sessionStorage.setItem('compraCounter',0)
        sessionStorage.setItem('compra',null)
      } else if (status === 'failure') {
        setMessage('TU COMPRA ESTÁ RECHAZADA');
      } else if (status === 'pending') {
        setMessage('TU COMPRA ESTÁ EN PROCESO');
      }
      
      setTimeout(() => {
        setPlayAnimation(false);
      }, 3000);
    }
  }, []); 


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
  const [message, setMessage] = useState('');
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
    }, 6000); // Retrasar la ocultación del login en 600 milisegundos (0.6 segundos)
  };

  useEffect(() => {
    const usuarioJson = sessionStorage.getItem('user');
    const welcomeCounter = Number(sessionStorage.getItem('welcomeCounter'));
    
    if (usuarioJson && welcomeCounter === 0) {
      setPlayAnimation(true);
      sessionStorage.setItem('welcomeCounter', '1');
      setMessage('Bienvenido');
      setTimeout(() => {
        setPlayAnimation(false);
      }, 3000);
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
          {<IslandNotification playAnimation={playAnimation} message={message} />}
      </div>
    </div>
  );
}

export default Navbar;

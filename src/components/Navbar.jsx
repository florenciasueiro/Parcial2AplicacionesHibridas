import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import NavbarCSS from '../css/Navbar.module.css';
import Login from './Login';
import Contactos from "../Service/APIlogin";
import NavbarBlackCSS from '../css/NavbarBlack.module.css';
import IslandNotification from './IslandNotification';
import useContactos from '../Service/APIlogin';
import {suscrbirUsuario} from '../Service/APIfunnel'
import  {Context} from '../context/notification-context'




const urlParams = new URLSearchParams(window.location.search);
const status = Object.fromEntries(urlParams).status;
console.log(Object.fromEntries(urlParams));

function Navbar() {
  const contactos = useContactos();
  const location = useLocation();
  const isShopPage = location.pathname === '/shop';
  const compraJson = sessionStorage.getItem('compra');
  const compra = compraJson ? JSON.parse(compraJson) : null;
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
  const {activar, playAnimation, notificar} = useContext(Context);

  useEffect(() => {
    const compraJson = sessionStorage.getItem('compra');
    console.log(compraJson);
    const compraCounter = Number(sessionStorage.getItem('compraCounter'));
    console.log(compraCounter);
    if (compraJson) {
      
      if (status === 'approved' && compra) {
        activar(true);
        
        notificar(<div><span>Tu pago esta aprobado</span></div>)
        // postVenta(compra);
        suscrbirUsuario({usuario: usuario,funnelID: "641c5f375ba494fd3803b591",stageID:"644a93336ce5752e8d041dc9"});

        console.log(compra);
        
        
        sessionStorage.setItem('compra',null)
      } else if (status === 'failure') {
        activar(true);

        notificar(<div><span>Tu pago fue rechazado</span></div>)
        suscrbirUsuario({usuario: usuario,funnelID: "641c5f375ba494fd3803b591",stageID:"644a93336ce5752e8d041dc9"});
      } else if (status === 'pending') {
        activar(true);
        notificar(<div><span>Tu pago se encuentra pendiente</span></div>)
        suscrbirUsuario({usuario: usuario,funnelID: "641c5f375ba494fd3803b591",stageID:"644a93336ce5752e8d041dc9"});
      }
      setTimeout(() => {
        activar(false);
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
      // console.log(usuario);
      return (
        <NavLink  to="/profile">{usuario.name.split(" ")[0]}</NavLink>
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
  // const [showNotification, setShowNotification] = useState(false);
  // const [playAnimation, setPlayAnimation] = useState(false);
  // const [message, setMessage] = useState('');
  const loginRef = useRef(null);

  const handleMouseEnter = () => {
    if (!usuario || Object.keys(usuario).length === 0) {
      showLoginDropdown();
    }
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

  const handleDropdownMouseLeave = () => {
    setTimeout(() => {
      setShowLogin(false);
    }, 1000); // Retrasar la ocultación del login en 600 milisegundos (0.6 segundos)
  };

  useEffect(() => {
    const usuarioJson = sessionStorage.getItem('user');
    const welcomeCounter = Number(sessionStorage.getItem('welcomeCounter'));
    
    if (usuarioJson && welcomeCounter === 0) {
      activar(true);
      sessionStorage.setItem('welcomeCounter', '1');

      notificar(<div className={`${NavbarCSS.NotificationContainer}`}><span>Bienvenido</span></div>)
      setTimeout(() => {
        activar(false);
      }, 3000);
   
    }
  }, []); 




  return (
    <div className={`${NavbarCSS.Navbarcontainer} ${isShopPage ? NavbarCSS.Navbarcontainer : ''}`}>
      <div className={`${NavbarCSS.navprimario} ${isShopPage ? NavbarCSS.navbarcontainer : ''}`}>
        <ul className={`${NavbarCSS.box} ${isShopPage ? NavbarCSS.box : ''}`}>
          <li className={`${NavbarCSS.menuItem} ${isShopPage ? NavbarCSS.menuItem : ''}`}>
            <NavLink onClick={hideLoginDropdown} exact="true" to="/" className={`${NavbarCSS.logo} ${isShopPage ? NavbarCSS.logo : ''}`}>
              <img src={"/img/LogoNegro.png"} alt="Logo asset" />
            </NavLink>
          </li>
          <li className={`${NavbarCSS.menuItem} ${isShopPage ? NavbarCSS.menuItem : ''}`}>
            <NavLink onClick={hideLoginDropdown} to="/quarters">Quarters</NavLink>
          </li>
          <li className={`${NavbarCSS.menuItem} ${isShopPage ? NavbarCSS.menuItem : ''}`}>
            <NavLink onClick={hideLoginDropdown} to="/eventos">Eventos</NavLink>
          </li>
          <li className={`${NavbarCSS.menuItem} ${isShopPage ? NavbarCSS.menuItem : ''}`}>
            <NavLink onClick={hideLoginDropdown} exact="true" to="/shop">Store</NavLink>
          </li>
          <li className={`${NavbarCSS.menuItem} ${isShopPage ? NavbarCSS.menuItem : ''}`}>
            <button
              className={NavbarCSS.btn}
              onMouseEnter={handleMouseEnter} // Selecciona el evento onMouseEnter condicionalmente
              onClick={() => { usuario && contactos(usuario.email, usuario.password) }}
            >
              {displayName()}
            </button>
          </li>

        </ul>
        
        <div
          id="loginDropdown"
          className={`${NavbarCSS.wrapper} ${isShopPage ? `${NavbarCSS.wrapper} ${showLogin ? NavbarCSS.show : ''}` : ''} ${
            showLogin ? NavbarCSS.show : ''
          }`}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <div onMouseLeave={handleDropdownMouseLeave} className={`${NavbarCSS.login} ${isShopPage ? NavbarCSS.login : ''}`}>
            <Login Contactos={handleLogin} />
          </div>
        </div>
        {<IslandNotification />}
      </div>
    </div>
  );
}

export default Navbar;

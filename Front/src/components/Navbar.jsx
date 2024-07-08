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
  const [isMobile, setIsMobile] = useState(false);



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
        notificar(<div><span>Tu pago fue rechazado</span></div>)
      } else if (status === 'pending') {
        notificar(<div><span>Tu pago se encuentra pendiente</span></div>)
      }
      setTimeout(() => {
        activar(false);
      }, 3000);
      
    }
  }, []); 

    // // Función para manejar cambios en el tamaño de la ventana
    // const handleWindowSizeChange = () => {
    //   if (window.innerWidth <= 768) {
    //     setIsMobile(true);
    //   } else {
    //     setIsMobile(false);
    //   }
    // };


    // useEffect(() => {
    //   // Llama a la función de manejo al montar el componente
    //   handleWindowSizeChange();
  
    //   // Agrega un listener para el evento de cambio de tamaño de la ventana
    //   window.addEventListener('resize', handleWindowSizeChange);
  
    //   // Limpia el listener al desmontar el componente
    //   return () => {
    //     window.removeEventListener('resize', handleWindowSizeChange);
    //   };
    // }, []);


    

  const displayName = (props) => {
    if (!usuario || Object.keys(usuario).length === 0) {
      console.log("No usuario");
      return (
        <p>Login</p>
      );
    } else {
      console.log(usuario);
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
              <h1>
                <img
                  src={"/img/LogoNegro.png"}
                  alt="Logo asset"
                  style={{ width: '25px', height: '25px' }}
                />
              </h1>
            </NavLink>

          </li>
          <li className={`${NavbarCSS.menuItem} ${isShopPage ? NavbarCSS.menuItem : ''}`}>
            <NavLink onClick={hideLoginDropdown} to="/quarters">Quarters</NavLink>
          </li>
          <li className={`${NavbarCSS.menuItem} ${isShopPage ? NavbarCSS.menuItem : ''}`}>
            <NavLink onClick={hideLoginDropdown} to="/nosotros">Nosotros</NavLink>
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

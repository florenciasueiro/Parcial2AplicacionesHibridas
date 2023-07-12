import React ,{ useState, useEffect, useMemo} from 'react';

import './App.css';
import Base from './pages/Base.js';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';
import InicioCSS from './css/Inicio.module.css';
import NotificationContext from './context/notification-context'
import InternalProvider from "./Service/ContextProvider";

// import DinamicShop from './components/DinamicShop';

function App() {
  // const location = useLocation(); // obtén la ubicación actual

  // let navbarClass = InicioCSS.navbar; // clase CSS predeterminada para el Navbar

  // // Si la ruta actual es "/base", cambia la clase CSS del Navbar
  // if (location.pathname === '/base') {
  //   navbarClass = InicioCSS.navbarBase;
  // }
  const [notification, setNotification] = useState(null);
  const [playAnimation, setPlayAnimation] = useState(false);
    const [preferenceId, setPreferenceId] = useState(null);
    const [dolarValue, setDolarValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setOrderData] = useState(
    { 
    quantity: "1", 
    price: "0", 
    amount: 0, 
    description: "Terreno",
    cards: 0, 
    storage:1, 
    guarderia:0, 
    sum:0,
    cw:0, 
    user: {}, 
    sku:"",
    storagePrice:0,
    guarderiaPrice:0,
    sumPrice:0,
    cwPrice:0,
    backURL: ""
  });
  const test= "context test"
  const notificar = (mensaje) => {
    setNotification(mensaje);
    // alert(mensaje)
  };
  const activar = (valor) => {
    setPlayAnimation(valor);
  }
  // useEffect(() => {
      
  //   if(notification){
  //     setPlayAnimation(true);
      
      
  //     setTimeout(() => {
  //       setPlayAnimation(false);
  //       setNotification('');
        
  //     }, 3000);
  //   }
  // }, [notification]);
  const payContext = useMemo(()=> { return {preferenceId,setPreferenceId,isLoading,setIsLoading,orderData,setOrderData,dolarValue,setDolarValue}},[preferenceId,setPreferenceId, isLoading,setIsLoading,orderData,setOrderData,dolarValue,setDolarValue])
  const contextValue = useMemo(() => {
    return {activar, playAnimation, notificar, notification };
  }, [activar,playAnimation, notificar, notification]);


  
    // useEffect(() => {
    //   const handleLocationChange = () => {
    //     const currentPath = window.location.pathname;
    //     // Realiza las acciones necesarias con la ubicación actual
    //     alert('La ubicación ha cambiado:', currentPath);
    //   };
  
    //   // Agrega un event listener para detectar cambios en la ubicación
    //   window.addEventListener('popstate', handleLocationChange);
  
    //   // Limpia el event listener cuando el componente se desmonte
    //   return () => {
    //     window.removeEventListener('popstate', handleLocationChange);
    //   };
    // }, [BrowserRouter,Base,Footer]);




  

  return (
    <InternalProvider context={payContext}>
    <NotificationContext context={contextValue}>
      <BrowserRouter>
      <div className={InicioCSS.App}>
        <header className={InicioCSS.inicioHeader}>
          <Navbar/>
        </header>
        <>
          <Base className={InicioCSS.base} />
        </>
        <div className={InicioCSS.footer}>
          <>
            <Footer />
          </>
        </div>
      </div>
    </BrowserRouter>
      </NotificationContext>
      </InternalProvider>
  );
}

export default App;

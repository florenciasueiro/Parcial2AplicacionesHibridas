import React ,{ useState, useEffect, useMemo} from 'react';
import './App.css';
import Base from './pages/Base.js';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';
import InicioCSS from './css/Inicio.module.css';
import NotificationContext from './context/notification-context'
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
  
  const contextValue = useMemo(() => {
    return {activar, playAnimation, notificar, notification };
  }, [activar,playAnimation, notificar, notification]);
  

  return (
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
  );
}

export default App;

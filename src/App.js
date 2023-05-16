import React from 'react';
import './App.css';
import Base from './pages/Base.js';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';
import InicioCSS from './css/Inicio.module.css';

// import DinamicShop from './components/DinamicShop';

function App() {
  // const location = useLocation(); // obtén la ubicación actual

  // let navbarClass = InicioCSS.navbar; // clase CSS predeterminada para el Navbar

  // // Si la ruta actual es "/base", cambia la clase CSS del Navbar
  // if (location.pathname === '/base') {
  //   navbarClass = InicioCSS.navbarBase;
  // }
  

  return (
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
  );
}

export default App;

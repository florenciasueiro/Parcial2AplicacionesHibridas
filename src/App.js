import React from 'react';
import './App.css';
import Base from './pages/Base.js';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';

import InicioCSS from './css/Inicio.module.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className={InicioCSS.inicioHeader}>       

        
          <Navbar className={InicioCSS.navbar}/>
        

      </header>

      <>
        <Base/>
      </>
      <div className={InicioCSS.footer}>
        <>
        <Footer/>
        </>
      </div>
    </div>
    </BrowserRouter>
  );
}
export default App;
//xd
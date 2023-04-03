import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarCSS from '../css/Navbar.module.css';
import Login from './Login';

function Navbar() {
  return (
  <div className={NavbarCSS.Navbarcontainer}>
      <div className={NavbarCSS.navprimario}>
        <ul className={NavbarCSS.box}>
            <li className={NavbarCSS.menuItem}><NavLink to="/" className={NavbarCSS.logo}><img src="/img/LogoBlanco.png" alt=""/></NavLink></li>
            <li className={NavbarCSS.menuItem}><NavLink to="/">Inicio</NavLink></li>
            <li className={NavbarCSS.menuItem}><NavLink to="/quarters">Quarters</NavLink></li>
            <li className={NavbarCSS.menuItem}><NavLink to="/eventos">Eventos</NavLink></li>
            {/*<li><a href="" className=''>Login</a></li>*/}
            <input type="checkbox" id={NavbarCSS.active}/>
              <li className={NavbarCSS.menuItem}>
                <label for={NavbarCSS.active} className={NavbarCSS.menubtn}>Login</label>
                <label for={NavbarCSS.active} className={NavbarCSS.close}></label>
              </li>
              
              <div className={NavbarCSS.wrapper}>
                <div className={NavbarCSS.login}>
                  <Login/>
                </div>
            </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
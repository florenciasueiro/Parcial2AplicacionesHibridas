import React from 'react';
import NavbarCSS from '../css/Navbar.module.css';
import Login from './Login';

function Navbar() {
  return (
  <div className={NavbarCSS.Navbarcontainer}>
      <div className={NavbarCSS.navprimario}>
        <ul className={NavbarCSS.box}>
            <li className={NavbarCSS.menuItem}><a href="logo.html"><img src="/img/LogoBlanco.png" alt=""/></a></li>
            <li className={NavbarCSS.menuItem}><a href="quarters.html">Quarters</a></li>
            <li className={NavbarCSS.menuItem}><a href="#blog">Blog</a></li>
            {/*<li><a href="" className=''>Login</a></li>*/}
            <input type="checkbox" id="active"/>
              <li className={NavbarCSS.menuItem}>
                <label for="active" className={NavbarCSS.menubtn}>Login</label>
                <label for="active" className={NavbarCSS.close}></label>
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
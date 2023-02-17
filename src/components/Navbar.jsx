import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return (
    <>
    <Navbarcontainer>
      <div className='navprimario'>
        <ul className='box'>
          <li><a href="logo.html"><img src="/img/LogoBlanco.png" alt="" /></a></li>
          <li><a href="quarters.html">Quarters</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><div className='container'>
                <input type="checkbox" id="toggle" checked/>
                <label className='button' for="toggle"></label>
                <nav className='nav'>
                  <ul>
                    <a href="http://sashatran.com" target="_blank">About</a>
                    <a href="https://codepen.io/sashatran/pens/public/" target="_blank">Home</a>
                    <a href="https://www.linkedin.com/in/sasha-tran-23498989/" target="_blank">Hire Me</a>
                    <a href="https://www.youtube.com/channel/UCCATAa8MWoBuH-sR_Jlx29A" target="_blank">Subscribe</a>
                  </ul>
                </nav>
              </div>
          </li>
        </ul>
      </div>
    </Navbarcontainer>
    </>
  )
}




export default Navbar

const Navbarcontainer = styled.nav`
  Navbarcontainer{
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
  }

  ul{
    display: flex;
    background-color: rgba(255, 255, 255, 0.25); 
    backdrop-filter: blur(10px);
    border-radius: 50px;
    justify-content: center;
    align-items: center;
  }
  li{
    display: inline-block;
    padding: 10px 15px;
  }
  li a{
    color: white;
    list-style: none;
    text-decoration: none;
    font-size: 15px;
  } 
  img{
    height: 30px;
  }













.container {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}


.button {
  position: absolute;
  z-index: 999;
  width: 43px;
  height: 43px;
  background: $purple;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -12px;

  &:before {
    position: absolute;
    content: "";
    width: 20px;
    height: 2px;
    background: #fff;
    transform: rotate(90deg);
    transition: all 0.4s ease;
  }
  
  &:after {
    position: absolute;
    content: "";
    width: 20px;
    height: 2px;
    background: #fff;
    transition: all 0.4s ease;
  }
}

.nav {
  opacity: 0;
  transition: all 0.4s ease-in-out;
  background: #fff;
  width: 100%;
  border-radius: 5px;
  transform: translateY(0%);
  box-shadow: 2px 3px 10px 0 rgba(81, 81, 81, 0.1);
  border: 1px solid #e4e4e4;
  padding: 10px;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  a {
    text-align: center;
    margin: 20px 0;
    color: $purple;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 14px;
    
    &:hover {
      color: $light-purple;
    }
  }
}

#toggle:checked ~ .nav {
  opacity: 1;
  transform: translateY(10%);
}

#toggle:checked ~ .button:before {
  transform: rotate(225deg);
}

#toggle:checked ~ .button:after {
  transform: rotate(135deg);
}


}









`

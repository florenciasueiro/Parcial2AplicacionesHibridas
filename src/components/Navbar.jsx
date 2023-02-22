import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return (
    <>
    <Navbarcontainer>
      <div className='navprimario'>
        <ul className='box'>
          <li><a href="logo.html"><img src="/img/LogoBlanco.png" alt=""/></a></li>
          <li><a href="quarters.html">Quarters</a></li>
          <li><a href="#blog">Blog</a></li>
          {/*<li><a href="" className=''>Login</a></li>*/}
          <input type="checkbox" id="active"/>
            <li>
              <label for="active" className='menu-btn'>Login</label>
            </li>
            <label for="active" className='close'></label>
            <div className='wrapper'>
              <div className=''>
                {/* ACA VA EL INICIO DE SESION*/}
              </div>
            </div>
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
  .navprimario{
    margin: 20px;
  }
  .box{
    display: flex;

    backdrop-filter: blur(0px);
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    padding: 0px;
  }
  li{
    display: inline-block;
    padding: 10px 15px;
    z-index: 10;
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





  .oculto{
    display: none;
  }

  .wrapper{
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.25); 
    backdrop-filter: blur(10px);
    border-radius: 50px;
    transition: all 0.6s ease-in-out;
    box-shadow: inset 7px 6px 10px 0px rgba(0,0,0,0.75);
  #active:checked ~ .wrapper{
    display: flex;
    justify-content: center;
    width: 200%;
    height: 500%;

  }
  .menu-btn{
    font-size: 15px;
    cursor: pointer;
    /*color: #fff;*/
    /*background: linear-gradient(90deg, #f92c78, #4114a1);*/
    /* background: linear-gradient(375deg, #1cc7d0, #2ede98); */
   /* background: linear-gradient(-45deg, #e3eefe 0%, #efddfb 100%); */
    transition: all 0.3s ease-in-out;
  }
  .menu-btn span,
  .menu-btn:before,
  .menu-btn:after{
    position: absolute;
    top: calc(50% - 1px);
    left: 30%;
    width: 40%;
    border-bottom: 2px solid #000;
    transition: transform .6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .menu-btn:before{
    transform: translateY(-8px);
  }
  .menu-btn:after{
    transform: translateY(8px);
  }
  
  
  .close {
    z-index: 1;
    width: 100%;
    height: 100%;
    pointer-events: none;
    transition: background .6s;
  }
  
  /* closing animation */
  #active:checked + .menu-btn span {
    transform: scaleX(0);
  }
  #active:checked + .menu-btn:before {
    transform: rotate(45deg);
    border-color: #fff;
  }
  #active:checked + .menu-btn:after {
    transform: rotate(-45deg);
    border-color: #fff;
  }
  .wrapper ul{
    position: absolute;
    top: 60%;
    left: 50%;
    height: 90%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
  }
  .wrapper ul li{
    height: 10%;
    margin: 15px 0;
  }

  input[type="checkbox"]{
    display: none;
  }


  .content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    text-align: center;
    width: 100%;
    color: #202020;
  }
  .content .title{
    font-size: 40px;
    font-weight: 700;
  }
  .content p{
    font-size: 35px;
    font-weight: 600;
  }
  
  #active:checked ~ .wrapper ul li a{
    opacity: 1;
  }
  .wrapper ul li a{
    transition: opacity 1.2s, transform 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translateX(100px);
  }
  #active:checked ~ .wrapper ul li a{
    transform: none;
    transition-timing-function: ease, cubic-bezier(.1,1.3,.3,1); /* easeOutBackを緩めた感じ */
     transition-delay: .6s;
    transform: translateX(-100px);
  }










`

import React, { useState, useEffect } from 'react';
import { BackgroundQuarters } from '../components/Background';
import QuartersCSS from '../css/Quarters.module.css';
import { Link } from 'react-router-dom';
import {
  CardGrid16,
  CardGrid17,
  CardGrid18,
  CardGrid19,
  CardGrid20,
  CardGrid21,
  CardGrid22,
  CardGrid23,
  CardGrid24,
  CardGrid25,
} from '../components/GridApp';
import GridCSS from '../css/Grid.module.css';

function Quarters() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={QuartersCSS.Inicio}>
      <React.Fragment>
        <>
          <div className={QuartersCSS.text}>
            <h1>Quarters Family 1</h1>
            <p className={QuartersCSS.p}>
              Desde u$d 29.999 o u$d 1.725/mes por 12 meses.
            </p>
            <Link className={QuartersCSS.a} to="/shop">
              <p className={QuartersCSS.link}>Comprar</p>
            </Link>
          </div>
          {/* <BackgroundQuarters className={QuartersCSS.background} /> */} 
        </>
        <div className={GridCSS.grilla}>
          <div
            className={`${GridCSS.tarjetas} ${GridCSS.tarjeta1} ${
              scrollY > 300 ? '' : QuartersCSS['tarjeta-hidden']
            }`}
          >
            <CardGrid16 />
          </div>
          <div
            className={`${GridCSS.tarjetas} ${GridCSS.tarjeta2} ${
              scrollY > 400 ? '' : QuartersCSS['tarjeta-hidden']
            }`}
          >
            <CardGrid17 />
          </div>
          <div
            className={`${GridCSS.tarjetas} ${GridCSS.tarjeta3} ${
              scrollY > 500 ? '' : QuartersCSS['tarjeta-hidden']
            }`}
          >
            <CardGrid18 />
          </div>
          <div
            className={`${GridCSS.tarjetas} ${GridCSS.tarjeta4} ${
              scrollY > 600 ? '' : QuartersCSS['tarjeta-hidden']
            }`}
          >
            <CardGrid19 />
          </div>
          <div
            className={`${GridCSS.tarjetas} ${GridCSS.tarjeta5} ${
              scrollY > 700 ? '' : QuartersCSS['tarjeta-hidden']
            }`}
          >
            <CardGrid20 />
          </div>
          <div
            className={`${GridCSS.tarjetas} ${GridCSS.tarjeta6} ${
              scrollY > 800 ? '' : QuartersCSS['tarjeta-hidden']
            }`}
          >
            <CardGrid21 />
          </div>
          <div
            className={`${GridCSS.tarjetas} ${GridCSS.tarjeta7} ${
              scrollY > 900 ? '' : QuartersCSS['tarjeta-hidden']
            }`}
          >
            <CardGrid22 />
          </div>
          <div
            className={`${GridCSS.tarjetas} ${GridCSS.tarjeta8} ${
              scrollY > 1000 ? '' : QuartersCSS['tarjeta-hidden']
            }`}
          >
            <CardGrid23 />
          </div>
          <div
            className={`${GridCSS.tarjetas} ${GridCSS.tarjeta9} ${
              scrollY > 1100 ? '' : QuartersCSS['tarjeta-hidden']
            }`}
          >
            <CardGrid24 />
          </div>
          <div
            className={`${GridCSS.tarjetas} ${GridCSS.tarjeta10} ${
              scrollY > 1200 ? '' : QuartersCSS['tarjeta-hidden']
            }`}
          >
            <CardGrid25 />
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}
export default Quarters;

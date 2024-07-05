import React, { useEffect, useState, useContext, useRef } from "react";
// import classnames from 'classnames';
import { Context } from "../Service/ContextProvider";
import InputCSS from '../css/Inputs.module.css';
import numeral from 'numeral';
import Payment from "./Payment";
import  {Context as NotificationContext} from '../context/notification-context'


const Checkout = ({ onClick }) => {
  const [showLoged, setShowLoged] = useState(false);
  // const [isVisible, setIsVisible] = useState(true);
  // const [status, setStatus] = useState(null);
  const { preferenceId,setPreferenceId, isLoading: disabled, orderData, setOrderData, dolarValue } = React.useContext(Context);
  const {activar, playAnimation, notificar} = useContext(NotificationContext);
  const [altoComponenteA, setAltoComponenteA] = useState(0);
  const refA = useRef(null);
  // const shoppingCartClass = classnames('shopping-cart dark', {
  //   'shopping-cart--hidden': !isVisible,
  // });
  let message = '';

  // useEffect(() => {
  //   if (preferenceId) setIsVisible(false);
  // }, [preferenceId]);

  // const updatePrice = (event) => {
  //   const quantity = event.target.value;
  //   const amount = parseInt(orderData.price) * parseInt(quantity);
  //   setOrderData({ ...orderData, quantity, amount });
  // };

  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
 
  useEffect(() => {
    if (usuario) setShowLoged(false);
    else setShowLoged(true);
  }, [usuario]);
  
  useEffect(() => {
    if(orderData.description){    
      // console.log(refA.current)
      // console.log(refA.current.offsetHeight)
      activar(true);
      // notificar(<div style={{height: refA.current.offsetHeight}}></div>);}
      notificar(
        
        <div className={InputCSS["col-md-12"] + " " + InputCSS["col-lg-4"] + " " + InputCSS["conjunto"]} style={{ width: '100%' }}>

        <div style={{ width: '100%' }} className={orderData.description ? InputCSS.summaryShow : InputCSS.summary}>
          {/* <h3>Cart</h3> */}
          {showLoged ? (
            <div>
            <span className={InputCSS["text-white"]}>Debes iniciar sesión para comprar.</span>
            <button
                className={InputCSS.test}
                onClick={onClick}
                id={InputCSS["checkout-btn-disabled"]}
                disabled='true'
              >
                Checkout
              </button>

            </div>
          ) : (
            <div className={InputCSS["summaryGroup"]}>
              
              

              <div className={InputCSS["summary-item"]}>
                <span className={InputCSS["text"]}>Subtotal USD</span>
                <span className={InputCSS["price"]} id={InputCSS["cart-total"]}>
                  {(orderData.amount/dolarValue).toLocaleString('es-AR', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  + IVA</span>
                
                <span className={InputCSS["text"]}>Subtotal ARS</span>
                <span className={InputCSS["price"]} id={InputCSS["cart-total"]}>
                  {orderData.amount.toLocaleString('es-AR', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  + IVA</span>
              </div>
              <button
                className={InputCSS.test}
                onClick={onClick}
                id={InputCSS["checkout-btn"]}
                disabled={disabled}
              >
                Comprar
              </button>
            </div>
          )}
          
          
        </div>
          <Payment />
      </div>
                    );}

      // setTimeout(() => {
      //   activar(false);
      // }, 3000);
  }, [orderData.amount, refA]); 


  
//   return (
//     <div  className={`${InputCSS['bodyCheckout']}`}>
//       {/* <section className={shoppingCartClass}> */}
//       <section className={InputCSS.shoppingCart}>
//         <div className={InputCSS["container"]} id={InputCSS["container"]}>
//           <div ref={refA} className={orderData.description ? InputCSS.contentShow : InputCSS.content}>
//             <div className={InputCSS["row"]}>
//               <div className={InputCSS["col-md-12"] + " " + InputCSS["col-lg-8"]}>
//                 <div className={InputCSS.items}>
//                   <div className={InputCSS.product}>
//                     <div className={InputCSS.info}>
//                       <div className={InputCSS.productDetails}>
//                         <div className={InputCSS["row"] + " " + InputCSS["justify-content-md-center"]}>
//                           <div className={InputCSS["col-md-3"]}></div>
//                           <div className={InputCSS["col-md-4"] + " " + InputCSS.productDetail}></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className={InputCSS["col-md-12"] + " " + InputCSS["col-lg-4"]}>
//                 <div className={orderData.description ? InputCSS.summaryShow : InputCSS.summary}>
//                   {/* <h3>Cart</h3> */}
//                   {showLoged ? (
//                     <div>
//                     <span className={InputCSS["text-white"]}>Debes iniciar sesión para comprar.</span>
//                     <button
//                         className={InputCSS.test}
//                         onClick={onClick}
//                         id={InputCSS["checkout-btn-disabled"]}
//                         disabled='true'
//                       >
//                         Checkout
//                       </button>

//                     </div>
//                   ) : (
//                     <div className={InputCSS["summaryGroup"]}>
//                       <div className={InputCSS["summary-item"]}>
//                         <span className={InputCSS["text"]}>Subtotal USD$</span>
//                         <span className={InputCSS["price"]} id={InputCSS["cart-total"]}>{(orderData.amount/dolarValue).toLocaleString('es-AR', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//  + IVA</span>
                        
//                         <span className={InputCSS["text"]}>Subtotal ARS$</span>
//                         <span className={InputCSS["price"]} id={InputCSS["cart-total"]}>{orderData.amount.toLocaleString('es-AR', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//  + IVA</span>
//                       </div>
//                       <button
//                         className={InputCSS.test}
//                         onClick={onClick}
//                         id={InputCSS["checkout-btn"]}
//                         disabled={disabled}
//                       >
//                         Comprar
//                       </button>
//                     </div>
//                   )}
                  
                  
//                 </div>
//                   <Payment />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
};


export default Checkout;

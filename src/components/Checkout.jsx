import React, { useEffect, useState } from "react";
// import classnames from 'classnames';
import { Context } from "../Service/ContextProvider";
import InputCSS from '../css/Inputs.module.css';

const Checkout = ({ onClick }) => {
  const [showLoged, setShowLoged] = useState(false);
  // const [isVisible, setIsVisible] = useState(true);
  const [status, setStatus] = useState(null);
  const { preferenceId, isLoading: disabled, orderData, setOrderData } = React.useContext(Context);
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



  return (
    <div className={`${InputCSS['bodyCheckout']}`}>
      {/* <section className={shoppingCartClass}> */}
      <section className={InputCSS.shoppingCart}>
        <div className={InputCSS["container"]} id={InputCSS["container"]}>
          <div className={orderData.description ? InputCSS.contentShow : InputCSS.content}>
            <div className={InputCSS["row"]}>
              <div className={InputCSS["col-md-12"] + " " + InputCSS["col-lg-8"]}>
                <div className={InputCSS.items}>
                  <div className={InputCSS.product}>
                    <div className={InputCSS.info}>
                      <div className={InputCSS.productDetails}>
                        <div className={InputCSS["row"] + " " + InputCSS["justify-content-md-center"]}>
                          <div className={InputCSS["col-md-3"]}></div>
                          <div className={InputCSS["col-md-4"] + " " + InputCSS.productDetail}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={InputCSS["col-md-12"] + " " + InputCSS["col-lg-4"]}>
                <div className={orderData.description ? InputCSS.summaryShow : InputCSS.summary}>
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
                        <span className={InputCSS["text"]}>Subtotal $</span>
                        <span className={InputCSS["price"]} id={InputCSS["cart-total"]}>{orderData.amount} + IVA</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Checkout;

import React, { useEffect, useState } from "react";
import classnames from 'classname'
import { Context } from "../Service/ContextProvider";
import InputCSS from '../css/Inputs.module.css';
import { Background } from "@cloudinary/url-gen/qualifiers";

const Checkout = ({ onClick }) => {
  const [showLoged, setShowLoged]=useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const { preferenceId, isLoading: disabled, orderData, setOrderData } = React.useContext(Context);
  const shoppingCartClass = classnames('shopping-cart dark', {
    'shopping-cart--hidden': !isVisible,
  })

  useEffect(() => {
    if (preferenceId) setIsVisible(false);
  }, [preferenceId])


  const updatePrice = (event) => {
    const quantity = event.target.value;
    const amount = parseInt(orderData.price) * parseInt(quantity);
    setOrderData({ ...orderData, quantity, amount });
  }
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
 
  useEffect(()=>{
    if (usuario) setShowLoged(false);
    else setShowLoged(true);
  },[usuario])

  
  
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
                      <div className={InputCSS["col-md-3"]}>
                        
                      </div>
                      <div className={InputCSS["col-md-4"] + " " + InputCSS.productDetail}>
                        
                      </div>
                      {/* <div className={InputCSS["col-md-3"] + " " + InputCSS["product-detail"]}>
                        <label htmlFor="quantity">
                          <b>Quantity</b>
                        </label>
                        <input
                          onChange={updatePrice}
                          type="number"
                          id={InputCSS["quantity"]}
                          value={orderData.quantity}
                          min="1"
                          className={InputCSS["form-control"]}
                        />
                      </div> */}
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
  <p>Debes iniciar sesión para comprar.</p>
) : (

  <div>
    <div className={InputCSS["summary-item"]}>
                <span className={InputCSS["text"]}>Subtotal $</span>
                <span className={InputCSS["price"]} id={InputCSS["cart-total"]}>{orderData.amount}</span>
              </div>
  <button
    className={InputCSS.test}
    onClick={onClick}
    id={InputCSS["checkout-btn"]}
    disabled={disabled}
  >
    Checkout
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
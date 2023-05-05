import React, { useEffect } from "react";
import classnames from 'classname'
import { Context } from "../Service/ContextProvider";
import InputCSS from '../css/Inputs.module.css';
import { Background } from "@cloudinary/url-gen/qualifiers";

const Checkout = ({ onClick }) => {
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
  
  return (
    <div className={`${InputCSS['body']}`}>
    {/* <section className={shoppingCartClass}> */}
    <section className={InputCSS.shoppingCart}>
    <div className={InputCSS["container"]} id={InputCSS["container"]}>
      <div className={InputCSS.blockHeading}>
        <h2>Tu Compra</h2>
        <p></p>
      </div>
      <div className={InputCSS.content}>
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
                        
                        <div className={InputCSS.productInfo}>
                          <b>Description: </b>
                          <span id={InputCSS["product-description"]}>{orderData.description}</span>
                          <br />
                          <b>Asset Cards: </b>{orderData.cards}
                          <br />
                          <b>Almacenamiento: </b>{orderData.storage}
                          <br />
                          <b>Guardería: </b>{orderData.guarderia}
                          <br />
                          <b>SUM: </b>{orderData.sum}
                          <br />
                          
                          <b>Precio por el lote:</b> $ <span id={InputCSS["unit-price"]}>${orderData.price}</span>
                          <br />
                        </div>
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
            <div className={InputCSS["summary"]}>
              {/* <h3>Cart</h3> */}
              <div className={InputCSS["summary-item"]}>
                <span className={InputCSS["text"]}>Subtotal</span>
                <span className={InputCSS["price"]} id={InputCSS["cart-total"]}>${orderData.amount}</span>
              </div>
              <button
              className={InputCSS.test}
                // className={`${InputCSS.Boton}${InputCSS.button} ${InputCSS.btnPrimary} ${InputCSS.btnLg} ${InputCSS.btnBlock}`}
                // className={InputCSS["btn"] + " " + InputCSS["btn-primary"] + " " + InputCSS["btn-lg"] + " " + InputCSS["btn-block"]}
                onClick={onClick}
                id={InputCSS["checkout-btn"]}
                disabled={disabled}

              >
                Checkout
              </button>
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
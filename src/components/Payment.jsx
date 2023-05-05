import React from "react";
import classnames from 'classname'
import { Wallet } from "@mercadopago/sdk-react";
import { Context } from "../Service/ContextProvider";
import InputCSS from '../css/Inputs.module.css';

const Payment = () => {
  const { preferenceId, orderData } = React.useContext(Context);
  const [isReady, setIsReady] = React.useState(false);
  const paymentClass = classnames('payment-form dark', {
    'payment-form--hidden': !isReady,
  });

  const handleOnReady = () => {
    setIsReady(true);
  }

  const renderCheckoutButton = (preferenceId) => {
    if (!preferenceId) return null;

    return (
      <Wallet 
        initialization={{ preferenceId: preferenceId }}
        onReady={handleOnReady} />
      )
  }

  return (
    <div className={paymentClass}>
    <div className={InputCSS.container}>
      <div className={InputCSS["block-heading"]}>
        <h2>Checkout Payment</h2>
        <p>este pago se gestiona por medio de MercadoPago</p>
      </div>
      <div className={InputCSS["form-payment"]}>
        <div className={InputCSS.products}>
          <h2 className={InputCSS.title}>Resumen</h2>
          <div className={InputCSS.item}>
            <span className={InputCSS.price} id={InputCSS["summary-price"]}> neto: ${orderData.price}</span>
            <p className={InputCSS["item-name"]}>
              Lote: <span id={InputCSS["summary-quantity"]}>{orderData.description}</span>
            </p>
            <p className={InputCSS["item-name"]}>
              Asset Cards: <span id={InputCSS["summary-quantity"]}>{orderData.cards}</span>
            </p>
            <p className={InputCSS["item-name"]}>
              Almacenamiento: <span id={InputCSS["summary-quantity"]}>{orderData.storage}</span>
            </p>
            <p className={InputCSS["item-name"]}>
              Guarderia: <span id={InputCSS["summary-quantity"]}>{orderData.guarderia}</span>
            </p>
            <p className={InputCSS["item-name"]}>
              sum: <span id={InputCSS["summary-quantity"]}>{orderData.sum}</span>
            </p>
          </div>
          <div className={InputCSS.total}>
            Total:
            <span className={InputCSS.price} id={InputCSS["summary-total"]}>${(orderData.amount)*1.23}</span>
          </div>
        </div>
        <div className={InputCSS["payment-details"]}>
          <div className={`${InputCSS["form-group"]} ${InputCSS["col-sm-12"]}`}>
            {renderCheckoutButton(preferenceId)}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Payment;
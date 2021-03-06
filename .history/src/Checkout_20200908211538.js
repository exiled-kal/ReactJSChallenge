import React from 'react';
import './Checkout.css';

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__Left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
      </div>
      <div>
        <h2 className="checkout__title">Your shopping Basket</h2>
      </div>
      <div className="checkout__Right">
        <Subtotal />
        <h2>The subTotal</h2>
      </div>
    </div>
  );
}

export default Checkout;

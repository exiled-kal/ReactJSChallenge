import React from 'react';
import './Payment.css';

function Payment() {
    const [{basket, user}, dispatch]
  return (
    <div className="payment">
      <div className="payment__container">
        {/* Payment Section - Delivery */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
              <p></p>
          </div>
        </div>
        {/* Payment Section - Review Items */}
        <div className="payment__section"></div>
        {/* Payment Section - payment method */}
        <div className="payment__section"></div>
      </div>
    </div>
  );
}

export default Payment;

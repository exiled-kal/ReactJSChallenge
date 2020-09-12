import React from 'react';
import './Payment.css';
import {useStateValue} from './StateProvider';

function Payment() {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        {/* Payment Section - Delivery */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            {/* usin optional chaining just incase user not defined */}
            <p>{user?.email}</p>
            <p>123 React lane</p>
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

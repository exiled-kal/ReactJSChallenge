import React from 'react';
import CheckoutProduct from './CheckoutProduct';
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
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        {/* Payment Section - Review Items */}
        <div className="payment__section">
            <div className="payment__title">
                <h3>Review items and delivery</h3>
                <div className="payment__items">
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title=
                        />
                    ))}
                </div>
            </div>
        </div>
        {/* Payment Section - payment method */}
        <div className="payment__section"></div>
      </div>
    </div>
  );
}

export default Payment;

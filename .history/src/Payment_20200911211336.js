import { useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import {Link} from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import {useStateValue} from './StateProvider';

function Payment() {
  const [{basket, user}, dispatch] = useStateValue();
const stripe = useStripe();
const elements = useEle

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* Payment Section - Delivery */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            {/* using optional chaining just incase user not defined */}
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
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Payment Section - payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
            <div className="payment__details">{/* stripe method */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

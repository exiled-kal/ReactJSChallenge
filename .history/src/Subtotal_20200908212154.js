import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasket}
      />
    </div>
  );
}

export default Subtotal;

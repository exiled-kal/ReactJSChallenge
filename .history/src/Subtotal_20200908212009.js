import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat 
          renderText={(value)=> (
              <>
              <p>
                  Subtotal ({basket.length} items):
                  <stroing></stroing>
              </p>
              </>
          )}
      />
    </div>
  );
}

export default Subtotal;

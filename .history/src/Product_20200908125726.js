import React from 'react';
import './Product.css';

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The Lean startup</p>
        <p className="product__price"><small>$</small><strong></strong></p>
      </div>
    </div>
  );
}

export default Product;

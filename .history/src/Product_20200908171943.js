import React from 'react';
import './Product.css';

function Product({ title, image, price, rating}) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{19.99}</strong>
        </p>
        <div className="product__rating">
          <p>⭐️</p>
        </div>
      </div>
      <img
        src="https://miro.medium.com/max/331/1*ZMe1nCevc9Kp8lzzfYIsZg.jpeg"
        alt=""
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;

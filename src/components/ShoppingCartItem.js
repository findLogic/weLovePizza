import React from 'react';
import '../styles/ShoppingCartItem.scss';

const ShoppingCartItem = () => {
  return (
    <div className="shopping-cart-item">
      <div className="delete-cart-item-button">
        <i className="close icon small"></i>
      </div>

      <div className="cart-item-title">Supreme</div>
      <div className="cart-item-ingredients">
        Traditional crust, 40cm, cheese
      </div>

      <div className="cart-item-bottom">
        <div className="cart-item-value">
          <i className="icon minus circle small"></i>
          <div className="cart-item-value-number">1</div>
          <i className="icon plus circle small"></i>
        </div>
        <div className="cart-item-price">
          321<i className="sign euro icon"></i>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;

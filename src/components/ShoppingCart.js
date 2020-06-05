import React from 'react';
import '../styles/ShoppingCart.scss';
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCart = () => {
  const cartEmpty = (
    <div className="cart-empty">
      <p>Your cart is empty.</p> Choose pizza and add it from menu.
    </div>
  );

  return (
    <div className="shopping-cart">
      <div className="cart-title">
        <i className="icon cart red big"></i>
      </div>

      <div className="cart-top">
        <div>
          Cart(3) <i className="caret up icon"></i>
        </div>
        <div>clear</div>
      </div>

      {/* Cart Items*/}
      <div className="cart-items">
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
      </div>

      <div className="cart-bottom">
        <div>Total:</div>
        <div className="cart-total">
          4321 <i className="sign euro icon"></i>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/ShoppingCartButton.scss';

const ShoppingCartButton = (props) => {
  return ReactDOM.createPortal(
    <div className="shopping-cart-button">
      <i className="ui shopping cart icon"></i> 4321
      <i className="euro sign ui icon"></i>
    </div>,
    document.getElementById('ShoppingCartButton'),
  );
};

export default ShoppingCartButton;
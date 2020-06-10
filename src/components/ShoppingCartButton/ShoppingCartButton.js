import React from 'react';
import ReactDOM from 'react-dom';
import history from '../../history';
import { connect } from 'react-redux';
import './ShoppingCartButton.scss';

// This button appears when window size < 1280px

const ShoppingCartButton = ({ total, currency }) => {
  if (total <= 0) return <></>;
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push('/order')}
      className="shopping-cart-button">
      <i className="ui shopping cart icon"></i>
      {total}
      <i className={`icon sign ${currency}`}></i>
    </div>,
    document.getElementById('ShoppingCartButton'),
  );
};

const mapStateToProps = (state) => ({
  total: state.cart.total,
  currency: state.currency.activeCurrency,
});

export default connect(mapStateToProps)(ShoppingCartButton);

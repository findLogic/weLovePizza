import React, { useState } from 'react';
import { connect } from 'react-redux';
import history from '../history';
import '../styles/OrderPage.scss';
import '../styles/ShoppingCart.scss';
import ShoppingCartItem from './ShoppingCartItem';

const OrderPage = ({ total, pizzaArray, currency }) => {
  const [toggleShow, setToggleShow] = useState(true);

  const displayStyle = { display: `${toggleShow ? 'block' : 'none'}` };

  if (total <= 0) return <>{history.push('/')}</>;
  return (
    <div className="order-page">
      <div className="container ui">
        <div className="cart-items" style={displayStyle}>
          {pizzaArray
            .sort((a, b) => a.order - b.order)
            .map((el) => {
              return <ShoppingCartItem key={el.id} pizza={el} />;
            })}
        </div>

        <div className="cart-bottom">
          <div>Total:</div>
          <div className="cart-total">
            {total} <i className={`icon sign ${currency}`}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  total: state.cart.total,
  pizzaArray: state.cart.pizzaArray,
  currency: state.currency.activeCurrency,
});

export default connect(mapStateToProps)(OrderPage);

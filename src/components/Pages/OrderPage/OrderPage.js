import React, { useState } from 'react';
import { connect } from 'react-redux';
import history from '../../../history';
import './OrderPage.scss';
import ShoppingCartItem from '../../ShoppingCart/ShoppingCartItem/ShoppingCartItem';

import AddressForm from '../../Form/AdressForm/AddressForm';
import { Redirect } from 'react-router-dom';
import { postUserOrder } from '../../../actions/';

const OrderPage = ({ total, pizzaArray, currency, user, postUserOrder }) => {
  const [after, setAfter] = useState('');

  if (total <= 0) {
    return <Redirect to="/" />;
  }
  const onSubmit = (values) => {
    if (!user) {
      history.push('/registration');
    }
    const order = JSON.stringify({
      pizzaArray,
      total,
      currency,
      address: values.address,
      comment: values.comment,
    });
    setAfter(order);
  };

  const renderAfter = () => {
    if (after) {
      return (
        <div>
          <br />
          Order must goes (now it doesn't) to server and now it must be look
          like this:
          <br />
          <br />
          <p>{after}</p>
          <br />
          IN PROGRESS
        </div>
      );
    }
  };

  return (
    <div className="order-page">
      <div className="container ui">
        <div className="cart-items">
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
          <div className="order-address">
            <AddressForm onSubmit={(values) => onSubmit(values)} />
          </div>
          {renderAfter()}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  total: state.cart.total,
  pizzaArray: state.cart.pizzaArray,
  currency: state.currency.activeCurrency,
});

export default connect(mapStateToProps, { postUserOrder })(OrderPage);

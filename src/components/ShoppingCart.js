import React from 'react';
import '../styles/ShoppingCart.scss';
import { connect } from 'react-redux';
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCart = ({ total, pizzaArray }) => {
  const renderCartEmpty = () => (
    <div className="cart-empty">
      <p>Your cart is empty.</p> Choose pizza and add it from menu.
    </div>
  );

  const renderCartNotEmpty = () => (
    <>
      <div className="cart-items">
        {pizzaArray.map((el) => {
          return <ShoppingCartItem key={el.id} pizza={el} />;
        })}
      </div>

      <div className="cart-bottom">
        <div>Total:</div>
        <div className="cart-total">
          {total} <i className="sign euro icon"></i>
        </div>
      </div>
    </>
  );

  const renderCart = () => {
    return pizzaArray.length > 0 ? renderCartNotEmpty() : renderCartEmpty();
  };

  return (
    <div className="shopping-cart">
      <div className="cart-title">
        <i className="icon cart red big"></i>
      </div>

      <div className="cart-top">
        <div>
          Cart
          {pizzaArray.length ? (
            <>
              ({pizzaArray.length})
              <i className="caret up icon" />
            </>
          ) : (
            <i className="caret up icon"></i>
          )}
        </div>
        <div>clear</div>
      </div>

      <div className="cart-body">{renderCart()}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  total: state.cart.total,
  pizzaArray: state.cart.pizzaArray,
});

export default connect(mapStateToProps)(ShoppingCart);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import ShoppingCartItem from './ShoppingCartItem/ShoppingCartItem';
import { clearAllCartItems } from '../../actions/';
import history from '../../history';
import './ShoppingCart.scss';
import WithPopup from '../../hoc/WithPopup';

const ShoppingCart = ({ total, pizzaArray, clearAllCartItems, currency }) => {
  const [toggleShow, setToggleShow] = useState(true);

  const displayStyle = { display: `${toggleShow ? 'block' : 'none'}` };

  const renderCartEmpty = () => (
    <div className="cart-empty" style={displayStyle}>
      <p>Your cart is empty.</p> Choose pizza and add it from menu.
    </div>
  );

  const renderCartNotEmpty = () => (
    <>
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
      <div className="cart-bottom-button">
        <div
          onClick={() => history.push('/order')}
          className="ui button big green">
          FEED ME!
        </div>
      </div>
    </>
  );

  const renderCart = () => {
    return pizzaArray.length > 0 ? renderCartNotEmpty() : renderCartEmpty();
  };

  const renderClearAllItems = () =>
    pizzaArray.length ? (
      <div onClick={() => clearAllCartItems()} className="clear-all-cart-items">
        clear
      </div>
    ) : null;

  const renderCaretIcon = () => {
    return (
      <WithPopup
        popupText={toggleShow ? 'Hide cart.' : 'Show cart'}
        position="top center">
        <i
          onClick={() => setToggleShow(!toggleShow)}
          className={`caret icon ${toggleShow ? 'up' : 'left'}`}></i>
      </WithPopup>
    );
  };

  return (
    <div className="shopping-cart">
      <div className="cart-title">
        <i className="icon cart red big"></i>
      </div>

      <div className="cart-top">
        <div className="cart-top-with-arrow">
          Cart
          {pizzaArray.length ? (
            <>
              ({pizzaArray.length}){renderCaretIcon()}
            </>
          ) : (
            renderCaretIcon()
          )}
        </div>
        {renderClearAllItems()}
      </div>

      <div className="cart-body">{renderCart()}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  total: state.cart.total,
  pizzaArray: state.cart.pizzaArray,
  currency: state.currency.activeCurrency,
});

export default connect(mapStateToProps, { clearAllCartItems })(ShoppingCart);

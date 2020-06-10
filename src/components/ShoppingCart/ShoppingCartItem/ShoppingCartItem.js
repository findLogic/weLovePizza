import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  increacePizzaQuantity,
  decreasePizzaQuantity,
  deleteItemFromCart,
} from '../../../actions/';
import './ShoppingCartItem.scss';
import WithPopup from '../../../hoc/WithPopup';

const ShoppingCartItem = ({
  pizza,
  increacePizzaQuantity,
  decreasePizzaQuantity,
  deleteItemFromCart,
  currency,
  activeCurrencyValue,
}) => {
  const {
    title,
    initPrice,
    price,
    id,
    crust,
    size,
    quantity,
    extraIngredients,
    removedIngredients,
  } = pizza;

  const crustText = crust[0].toUpperCase() + crust.slice(1) + ' crust';

  const renderExtraIngredient = () => {
    return extraIngredients.length ? (
      <p className="extra-ingredients">
        {extraIngredients.map((el) => el.ingredient).join(', ')}
      </p>
    ) : null;
  };

  const renderRemovedIngredients = () => {
    const removedIngredientsString =
      '-' +
      removedIngredients.map((el) => el.ingredient.toLowerCase()).join(', -');
    return removedIngredients.length ? (
      <div className="removed-ingredients">{removedIngredientsString}</div>
    ) : null;
  };

  // Price convert
  const convertPrice = () => {
    return ((initPrice * quantity * activeCurrencyValue) / 100).toFixed(2);
  };

  // Minus button handler
  const handleMinusButton = (id) => {
    quantity === 1
      ? deleteItemFromCart({ id, activeCurrencyValue })
      : decreasePizzaQuantity({ id, activeCurrencyValue });
  };

  return (
    <div className="shopping-cart-item">
      <div
        onClick={() => deleteItemFromCart({ id, activeCurrencyValue })}
        className="delete-cart-item-button">
        <WithPopup
          popupText={`Delete "${title}" from cart.`}
          position="left center">
          <i className="close icon small"></i>
        </WithPopup>
      </div>

      <div className="cart-item-title">{title}</div>
      <div className="cart-item-ingredients">
        <p>
          {crustText}, {size}cm
        </p>
        {renderExtraIngredient()}
        {renderRemovedIngredients()}
      </div>

      <div className="cart-item-bottom">
        <div className="cart-item-value">
          <WithPopup popupText={`Remove one "${title}"`} position="top center">
            <i
              onClick={() => handleMinusButton(id)}
              className="icon minus circle small"></i>
          </WithPopup>
          <div className="cart-item-value-number">{quantity}</div>
          <WithPopup
            position="top center"
            popupText={`Add one more "${title}"`}>
            <i
              onClick={() => increacePizzaQuantity({ id, activeCurrencyValue })}
              className="icon plus circle small"></i>
          </WithPopup>
        </div>
        <div className="cart-item-price">
          {convertPrice(price * quantity)}
          <i className={`icon sign ${currency}`}></i>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currency: state.currency.activeCurrency,
  activeCurrencyValue: state.currency.activeCurrencyValue,
});

export default connect(mapStateToProps, {
  increacePizzaQuantity,
  decreasePizzaQuantity,
  deleteItemFromCart,
})(ShoppingCartItem);

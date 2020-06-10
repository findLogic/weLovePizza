import React from 'react';
import { connect } from 'react-redux';
import {
  increacePizzaQuantity,
  decreasePizzaQuantity,
  deleteItemFromCart,
} from '../../../actions/';
import './ShoppingCartItem.scss';

const ShoppingCartItem = ({
  pizza,
  increacePizzaQuantity,
  decreasePizzaQuantity,
  deleteItemFromCart,
  currency,
}) => {
  const {
    title,
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
  const convertPrice = (price) => {
    return Math.floor(price * 100) / 100;
  };

  // Minus button handler
  const handleMinusButton = (id) => {
    quantity === 1 ? deleteItemFromCart(id) : decreasePizzaQuantity(id);
  };

  return (
    <div className="shopping-cart-item">
      <div
        onClick={() => deleteItemFromCart(id)}
        className="delete-cart-item-button">
        <i className="close icon small"></i>
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
          <i
            onClick={() => handleMinusButton(id)}
            className="icon minus circle small"></i>
          <div className="cart-item-value-number">{quantity}</div>
          <i
            onClick={() => increacePizzaQuantity(id)}
            className="icon plus circle small"></i>
        </div>
        <div className="cart-item-price">
          {convertPrice(price * quantity).toFixed(2)}
          <i className={`icon sign ${currency}`}></i>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currency: state.currency.activeCurrency,
});

export default connect(mapStateToProps, {
  increacePizzaQuantity,
  decreasePizzaQuantity,
  deleteItemFromCart,
})(ShoppingCartItem);

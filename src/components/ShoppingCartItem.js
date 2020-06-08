import React from 'react';
import { connect } from 'react-redux';
import { increacePizzaQuantity, decreasePizzaQuantity } from '../actions/';
import '../styles/ShoppingCartItem.scss';

const ShoppingCartItem = ({
  pizza,
  increacePizzaQuantity,
  decreasePizzaQuantity,
}) => {
  const {
    title,
    id,
    crust,
    size,
    quantity,
    extraIngredients,
    removedIngredients,
    price,
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
    return Math.round(price * 100) / 100;
  };

  return (
    <div className="shopping-cart-item">
      <div className="delete-cart-item-button">
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
            onClick={() => decreasePizzaQuantity(id)}
            className="icon minus circle small"></i>
          <div className="cart-item-value-number">{quantity}</div>
          <i
            onClick={() => increacePizzaQuantity(id)}
            className="icon plus circle small"></i>
        </div>
        <div className="cart-item-price">
          {convertPrice(price * quantity)}
          <i className="sign euro icon"></i>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { increacePizzaQuantity, decreasePizzaQuantity })(
  ShoppingCartItem,
);

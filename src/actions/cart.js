import * as TYPES from './types';

// CART ACTIONS

// Adding current pizza to cart
export const addPizzaToCart = (pizzaObj, currencyValue) => ({
  type: TYPES.ADD_ITEM_TO_CART,
  payload: { pizzaObj, currencyValue },
});

// Increase quantity of pizza in cart by 1
export const increacePizzaQuantity = (id) => ({
  type: TYPES.INCREACE_ITEM_QUANTITY,
  payload: id,
});

// Decrease quantity of pizza in cart by 1
export const decreasePizzaQuantity = (id) => ({
  type: TYPES.DECREASE_ITEM_QUANTITY,
  payload: id,
});

// Delete any quantity of pizza from cart
export const deleteItemFromCart = (id) => ({
  type: TYPES.DELETE_ITEM_FROM_CART,
  payload: id,
});

// Clear all cart items
export const clearAllCartItems = () => ({
  type: TYPES.CLEAR_ALL_CART_ITEMS,
});

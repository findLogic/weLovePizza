import pizzasDB from '../apis/pizzasDB';
import history from '../history';
import * as TYPES from './types';

// Initial start to get all pizzas from database
export const fetchPizzas = () => async (dispatch) => {
  const response = await pizzasDB.get('/pizzas');

  dispatch({ type: TYPES.FETCH_PIZZAS, payload: response.data });
};

// Adding current pizza to cart
export const addPizzaToCart = (pizzaObj) => ({
  type: TYPES.ADD_PIZZA_TO_CART,
  payload: pizzaObj,
});

// Increase quantity of pizza in cart by 1
export const increacePizzaQuantity = (id) => ({
  type: TYPES.INCREACE_PIZZA_QUANTITY,
  payload: id,
});

// Decrease quantity of pizza in cart by 1
export const decreasePizzaQuantity = (id) => ({
  type: TYPES.INCREACE_PIZZA_QUANTITY,
  payload: id,
});

export const deleteItemFromCart = (id) => {};

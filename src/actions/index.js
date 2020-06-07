import pizzasDB from '../apis/pizzasDB';
import history from '../history';
import * as TYPES from './types';

export const fetchPizzas = () => async (dispatch) => {
  const response = await pizzasDB.get('/pizzas');

  dispatch({ type: TYPES.FETCH_PIZZAS, payload: response.data });
};

export const addPizzaToCart = (pizzaObj) => ({
  type: TYPES.ADD_PIZZA_TO_CART,
  payload: pizzaObj,
});

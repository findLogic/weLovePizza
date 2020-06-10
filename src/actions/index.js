import pizzasDB from '../apis/pizzasDB';
import history from '../history';
import * as TYPES from './types';

// PIZZAS FROM DB ACTIONS

// Initial start to get all pizzas from database
export const fetchPizzas = (currencyValue) => async (dispatch) => {
  const response = await pizzasDB.get('/pizzas');

  dispatch({
    type: TYPES.FETCH_PIZZAS,
    payload: { data: response.data, currencyValue },
  });
};

// CURRENCY FROM DB
export const fetchCurrency = () => async (dispatch) => {
  const response = await pizzasDB.get('/currency');

  dispatch({
    type: TYPES.FETCH_CURRENCY,
    payload: response.data,
  });
};

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

// Change currency
export const changeCurrency = (currencyValue, currency) => ({
  type: TYPES.CHANGE_CURRENCY,
  payload: { currencyValue, currency },
});

// USER ACTIONS

// Add a new USER
export const addNewUser = (userObj) => async (dispatch) => {
  await pizzasDB.post('/users', userObj);

  dispatch({
    type: TYPES.IS_LOGGED,
  });
};

// Try to login
export const tryToLoginUser = ({ login, password }) => async (dispatch) => {
  const result = await pizzasDB
    .get('/users')
    .then((res) => res.data.filter((el) => el.login === login)[0].id)
    .then((id) => pizzasDB.get('/users/' + id))
    .then((res) => res.data[0].password === password);

  dispatch({
    type: TYPES.IS_LOGGED,
    payload: result,
  });
};

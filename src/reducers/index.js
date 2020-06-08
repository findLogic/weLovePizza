import { combineReducers } from 'redux';
import pizzasReducer from './pizzasReducer';
import cartReducer from './cartReducer';
import currencyReducer from './currencyReducer';

export default combineReducers({
  pizzas: pizzasReducer,
  cart: cartReducer,
  currency: currencyReducer,
});

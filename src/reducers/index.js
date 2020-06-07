import { combineReducers } from 'redux';
import pizzasReducer from './pizzasReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  pizzas: pizzasReducer,
  cart: cartReducer,
});

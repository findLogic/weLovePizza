import { combineReducers } from 'redux';
import pizzasReducer from './pizzasReducer';
import cartReducer from './cartReducer';
import currencyReducer from './currencyReducer';
import { reducer as reduxFormReducer } from 'redux-form';
import userReducer from './userReducer';

export default combineReducers({
  form: reduxFormReducer,
  pizzas: pizzasReducer,
  cart: cartReducer,
  currency: currencyReducer,
  user: userReducer,
});

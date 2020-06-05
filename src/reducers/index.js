import { combineReducers } from 'redux';
import pizzasReducer from './pizzasReducer';

export default combineReducers({
  pizzas: pizzasReducer,
});

import pizzasDB from '../apis/pizzasDB';
import history from '../history';
import * as TYPES from './types';

export const fetchPizzas = () => async (dispatch) => {
  const response = await pizzasDB.get('/pizzas');

  dispatch({ type: TYPES.FETCH_PIZZAS, payload: response.data });
};

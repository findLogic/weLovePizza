import pizzasDB from '../apis/pizzasDB';
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

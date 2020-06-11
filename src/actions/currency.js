import * as TYPES from './types';
import pizzasDB from '../apis/pizzasDB';

// CURRENCY FROM DB
export const fetchCurrency = () => async (dispatch) => {
  const response = await pizzasDB.get('/currency');

  dispatch({
    type: TYPES.FETCH_CURRENCY,
    payload: response.data,
  });
};

// Change currency
export const changeCurrency = (currencyValue, currency) => ({
  type: TYPES.CHANGE_CURRENCY,
  payload: { currencyValue, currency },
});

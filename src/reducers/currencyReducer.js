import * as TYPES from '../actions/types';

const INITIAL_STATE = {
  activeCurrency: 'euro',
  activeCurrencyValue: 1,
};

// state = {
//   activeCurrency: 'euro'
//   options: [
// {
//   currency: 'euro',
//   value: 1
// },]
// }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_CURRENCY:
      return {
        ...state,
        options: [...action.payload],
      };
    case TYPES.CHANGE_CURRENCY:
      return {
        ...state,
        activeCurrencyValue: action.payload.currencyValue,
        activeCurrency: action.payload.currency,
      };
    default:
      return state;
  }
};

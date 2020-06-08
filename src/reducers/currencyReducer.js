import * as TYPES from '../actions/types';

const INITIAL_STATE = {
  activeCurrency: 'euro',
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
        activeCurrency: action.payload.currency,
      };
    default:
      return state;
  }
};

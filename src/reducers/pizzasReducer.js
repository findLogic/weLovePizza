import * as TYPES from '../actions/types';

// state = [
//   array of pizzas objects
// ]

export default (state = [], action) => {
  switch (action.type) {
    case TYPES.FETCH_PIZZAS:
      return [...action.payload];
    default:
      return state;
  }
};

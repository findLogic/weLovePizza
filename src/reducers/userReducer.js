import * as TYPES from '../actions/types';

const INITIAL_STATE = {
  isLogged: false,
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
    case TYPES.IS_LOGGED:
      return {
        ...state,
        isLogged: action.payload,
      };
    default:
      return state;
  }
};

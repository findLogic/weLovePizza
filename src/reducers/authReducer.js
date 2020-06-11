import * as TYPES from '../actions/types';

const INITIAL_STATE = {
  user: null,
  error: null,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case TYPES.AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
        loading: false,
      };
    case TYPES.AUTH_FAIL:
      return {
        ...state,
        user: null,
        error: action.payload,
        loading: false,
      };
    case TYPES.AUTH_LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

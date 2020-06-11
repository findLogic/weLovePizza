import pizzasDB from '../apis/pizzasDB';
import * as TYPES from './types';

// ORDER

// IN PROGRESSSSSSSSSSSSSSS

export const postUserOrder = (order, userId) => async (dispatch) => {
  pizzasDB
    .put('/users/:' + userId, order)
    .then((res) => {
      console.log('good');
    })
    .catch((err) => {
      console.log('error order');
    });

  dispatch({
    type: TYPES.POST_ORDER,
    payload: {},
  });
};

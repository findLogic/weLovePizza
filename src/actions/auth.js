import pizzasDB from '../apis/pizzasDB';
import * as TYPES from './types';

// AUTH ACTIONS

export const authStart = () => ({
  type: TYPES.AUTH_START,
});

export const authSuccess = (authData) => {
  return {
    type: TYPES.AUTH_SUCCESS,
    payload: authData,
  };
};

export const authFail = (error) => ({
  type: TYPES.AUTH_FAIL,
  payload: error,
});

export const onTryToLogin = (login, password) => (dispatch) => {
  dispatch(authStart());

  const reqString = login + '...' + password;
  pizzasDB
    .get('/users/:' + reqString)
    .then((res) => {
      if (!res.data.length) {
        console.log('error');
        dispatch(authFail('no user'));
      } else {
        localStorage.setItem('user', JSON.stringify(res.data[0]));
        dispatch(authSuccess(res.data[0]));
      }
    })
    .catch((err) => {
      console.log('error2');
      dispatch(authFail(err));
    });
};

export const auth = (userData) => async (dispatch) => {
  dispatch(authStart());

  pizzasDB
    .post('/users', userData)
    .then((res) => {
      dispatch(authSuccess(res.data));
    })
    .catch((err) => {
      dispatch(authFail(err));
    });
};

export const logout = () => {
  localStorage.removeItem('user');
  return {
    type: TYPES.AUTH_LOGOUT,
  };
};

export const checkLocalStorageUser = () => (dispatch) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    dispatch(logout());
  } else {
    dispatch(authSuccess(user));
  }
};

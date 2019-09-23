import { firebaseApp } from '../firebase';

import {
  LOGIN_REQUEST, LOGIN_SUCCESS,
  LOGIN_FAILURE, LOGOUT
} from '../constants';

export const loginRequest = email => ({
  type: LOGIN_REQUEST,
  email
});

export const loginSuccess = currentUser => ({
  type: LOGIN_SUCCESS,
  currentUser
});

export const loginFailure = errors => ({
  type: LOGIN_FAILURE,
  error: true,
  errors
});

export const logout = () => ({
  type: LOGOUT
});

const fetchUser = (email, password) => dispatch => {
  dispatch(loginRequest(email));
  firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      return fetch(`/api/user-by-email/${email}`)
        .then(response => response.json())
        .then(json => dispatch(loginSuccess(json.id)))
    })
    .catch(error => {
      dispatch(loginFailure(error));
    });

}

const handleLogout = () => dispatch => {
  dispatch(logout());
  firebaseApp.auth().logout();
}

export const authenticateUser = (email, password) => dispatch => {
  return dispatch(fetchUser(email, password));
}

export const logoutUser = () => dispatch => {
  return dispatch(handleLogout());
}
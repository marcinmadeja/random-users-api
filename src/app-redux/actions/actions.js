import { usersApi } from 'services/api';

import {
  ADD_USERS,
  LOGIN_USER,
  SELECT_USER,
  REMOVE_SELECTED_USER,
  SHOW_ERROR_DIALOG,
  HIDE_ERROR_DIALOG,
} from '../constants/action-type';

export const addUsers = (users) => ({
  type: ADD_USERS,
  payload: users,
});

export const selectUser = (user) => ({
  type: SELECT_USER,
  payload: user,
});

export const removeSelectedUser = () => ({
  type: REMOVE_SELECTED_USER,
  payload: null,
});

export const getBestUsers = (usersAmount = 10) => {
  return (dispatch) => {
    return dispatch(fetchUsers(usersAmount));
  };
};

const fetchUsers = (usersAmount) => {
  return dispatch => {
    return usersApi.fetchUsersList(usersAmount)
      .then(usersApi.getFormatedUsersList)
      .then(usersList => dispatch(receiveUsers(usersList)))
      .catch(error => {
        const dialogMsg = error instanceof Error ? error.message : error;
        dispatch(showErrorDialog(dialogMsg));
      });
  };
};

const receiveUsers = (users) => {
  return {
    type: ADD_USERS,
    payload: users,
  };
};

export const getLoggedUser = () => {
  return dispatch => {
    return usersApi.fetchUsersList()
      .then(usersApi.getFormatedUser)
      .then(loggedUser => dispatch(loginUser(loggedUser)));
  };
};

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});


export const showErrorDialog = (error) => ({
  type: SHOW_ERROR_DIALOG,
  msg: error,
});

export const closeErrorDialog = () => ({
  type: HIDE_ERROR_DIALOG,
});

import { ADD_USERS, LOGIN_USER, SELECT_USER, REMOVE_SELECTED_USER } from '../constants/action-type';

export const addUsers = (users) => ({
  type: ADD_USERS,
  payload: users,
});

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const selectUser = (user) => ({
  type: SELECT_USER,
  payload: user,
});

export const removeSelectedUser = () => ({
  type: REMOVE_SELECTED_USER,
  payload: null,
});

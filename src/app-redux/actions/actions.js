import {
  ADD_USERS,
  LOGIN_USER,
  SELECT_USER,
  REMOVE_SELECTED_USER,
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
    return fetch(`https://randomuser.me/api/?results=${usersAmount}`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveUsers(json.results));
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
    return fetch('https://randomuser.me/api/?results=1')
      .then(response => response.json())
      .then(json => {
        dispatch(loginUser(json.results[0]));
      });
  };
};

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});


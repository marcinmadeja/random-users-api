import { ADD_USERS, LOGIN_USER, SELECT_USER, REMOVE_SELECTED_USER } from '../constants/action-type';

const initialState = {
  selectedUser: null,
  usersList: [],
  loggedUser: null,
};

const addUsers = (state, users) => {
  return {
    ...state,
    usersList: [...state.usersList, ...users],
  };
};

const loginUser = (state, user) => {
  return {
    ...state,
    loggedUser: user,
  };
};

const changeSelectedUser = (state, selectedUser) => {
  return {
    ...state,
    selectedUser,
  };
};

const removeSelectedUser = (state) => {
  return {
    ...state,
    selectedUser: null,
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS:
      return addUsers(state, action.payload);
    case LOGIN_USER:
      return loginUser(state, action.payload);
    case SELECT_USER:
      return changeSelectedUser(state, action.payload);
    case REMOVE_SELECTED_USER:
      return removeSelectedUser(state);
    default:
      return state;
  }
};

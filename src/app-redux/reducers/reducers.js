import {
  ADD_USERS,
  LOGIN_USER,
  SELECT_USER,
  REMOVE_SELECTED_USER,
  SHOW_ERROR_DIALOG,
  HIDE_ERROR_DIALOG,
} from '../constants/action-type';

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

const showErrorSlider = (state, msg) => {
  return {
    ...state,
    errorDialog: {
      open: true,
      msg,
    },
  };
};

const hideErrorSlider = (state) => {
  const errorDialog = {
    ...state.errorDialog,
    open: false,
  };

  return {
    ...state,
    errorDialog,
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
    case SHOW_ERROR_DIALOG:
      return showErrorSlider(state, action.msg);
    case HIDE_ERROR_DIALOG:
      return hideErrorSlider(state);
    default:
      return state;
  }
};

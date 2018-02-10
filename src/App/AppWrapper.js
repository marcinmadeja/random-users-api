import React, { Component } from 'react';
import { usersApi } from 'services/api';
import App from 'App/App';

import { connect } from 'react-redux';
import {
  getLoggedUser,
  getBestUsers,
} from 'app-redux/actions/actions';

class AppWrapper extends Component {
  componentDidMount() {
    this.props.getBestUsers();
    this.props.getLoggedUser();
  }

  async setUsers() {
    const users = await usersApi.getUsersList(10);
    this.props.addUsers(users);
  }

  async loginUser() {
    const user = await usersApi.loginUser();
    this.props.loginUser(user);
  }

  render() {
    return (
      <App />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedUser: state.selectedUser,
  };
};

export default connect(mapStateToProps, { getBestUsers, getLoggedUser })(AppWrapper);

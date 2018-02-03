import React, { Component } from 'react';
import { usersApi } from 'services/api';
import App from 'App/App';

import { connect } from 'react-redux';
import { addUsers, loginUser } from 'app-redux/actions/actions';

class AppWrapper extends Component {
  componentDidMount() {
    this.setUsers();
    this.loginUser();
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

export default connect(mapStateToProps, { addUsers, loginUser })(AppWrapper);

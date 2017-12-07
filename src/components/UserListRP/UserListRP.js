import React, { Component } from 'react';
import UsersApi from 'services/api/users/users-api';

const usersApi = new UsersApi();

class UserListRP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.searchUsers();
  }

  async searchUsers() {
    const users = await usersApi.getUsersList(8);
    setTimeout(() => {
      this.setState({ users, isLoaded: true });
    }, 3000);
  }

  render() {
    return this.props.render(this.state);
  }
}

export default UserListRP;

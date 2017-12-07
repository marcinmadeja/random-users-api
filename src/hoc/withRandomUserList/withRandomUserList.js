import React, { Component } from 'react';
import { AlertStandard } from 'components/alerts/';
import UsersApi from 'services/api/users/users-api';

const usersApi = new UsersApi();

const withRandomUserList = ListComponent =>
  class extends Component {
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
      const { isLoaded } = this.state;
      if (isLoaded) return <ListComponent users={this.state.users} />;
      return <AlertStandard msg="List is loading..." progressBar />;
    }
  };

export default withRandomUserList;

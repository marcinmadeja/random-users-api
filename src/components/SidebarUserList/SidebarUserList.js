import React, { Component } from 'react';

import { Paper } from 'material-ui';
import UsersApi from 'services/api/users/users-api';
import UserListShort from 'components/UserListShort/UserListShort';

import { Title } from './SidebarUserList.styles';

const usersApi = new UsersApi();

class SidebarUserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };

    this.setUsers = this.setUsers.bind(this);
  }

  componentDidMount() {
    this.setUsers();
  }

  async setUsers() {
    const users = await usersApi.getUsersList(10);
    this.setState({ users });
  }

  render() {
    const { loading, users } = this.state;

    return (
      <Paper elevation={2}>
        <Title>Most popular</Title>
        <UserListShort users={users} loading={loading} />
      </Paper>
    );
  }
}

export default SidebarUserList;

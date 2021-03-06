import React, { Component } from 'react';
import { usersApi } from 'services/api/';
import UserList from 'components/UserList/UserList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };

    this.usersLimit = 10;
    this.setUsers = this.setUsers.bind(this);
  }

  componentDidMount() {
    this.setUsers();
  }

  async setUsers() {
    const users = await usersApi.getUsersList(this.usersLimit);
    this.setState({ users });
  }

  render() {
    const { loading, users } = this.state;

    return (
      <div>
        <UserList users={users} loading={loading} />
      </div>
    );
  }
}

export default Home;

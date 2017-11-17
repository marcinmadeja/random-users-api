import React, { Component } from 'react';
import { getUsers } from 'services/api/users/users-api';
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
    getUsers(this.usersLimit, this.setUsers);
  }

  setUsers(users) {
    users = Array.isArray(users) ? users : [];
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

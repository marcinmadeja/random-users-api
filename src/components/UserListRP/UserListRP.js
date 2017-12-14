import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { usersApi } from 'services/api/';
import { AlertStandard } from 'components/alerts/';

const propTypes = {
  render: PropTypes.func.isRequired,
};

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
    const { isLoaded, users } = this.state;
    if (!isLoaded) return <AlertStandard msg="User list is loading..." progressBar />;
    return this.props.render({ users });
  }
}

UserListRP.propTypes = propTypes;

export default UserListRP;

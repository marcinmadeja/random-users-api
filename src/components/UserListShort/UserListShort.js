import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from 'material-ui/List';
import UserListShortItem from './UserListShortItem';

const propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = {
  users: [],
};

class UserListShorter extends Component {
  renderList() {
    const { users } = this.props;
    return (
      <List>
        {users.map(user => <UserListShortItem key={user.email} user={user} />)}
      </List>
    );
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

UserListShorter.propTypes = propTypes;
UserListShorter.defaultProps = defaultProps;

export default UserListShorter;

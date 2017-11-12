import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from 'material-ui/List';
import UserListShortItem from './UserListShortItem';

class UserListShorter extends Component {
  renderList() {
    const { users } = this.props;
    return (
      <List>
        {users.map(user => <UserListShortItem key={user.id.value} user={user} />)}
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

export default UserListShorter;

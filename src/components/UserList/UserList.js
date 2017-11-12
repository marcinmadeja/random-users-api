import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from 'material-ui/List';
import UserListShortItem from './UserListItem';

class UserList extends Component {
  renderList() {
    const { users } = this.props;
    return (
      <div>
        {users.map(user => <UserListShortItem key={user.id.value} user={user} />)}
      </div>
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

export default UserList;

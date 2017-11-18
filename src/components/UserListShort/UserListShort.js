import React, { Component } from 'react';
import { typesUserList } from 'constants/propTypes/userPropTypes';

import List from 'material-ui/List';
import UserListShortItem from './UserListShortItem';

const propTypes = {
  users: typesUserList,
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

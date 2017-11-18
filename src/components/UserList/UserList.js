import React, { Component } from 'react';
import { typesUserList } from 'constants/propTypes/userPropTypes';

import UserListShortItem from './UserListItem';

const propTypes = {
  users: typesUserList,
};

const defaultProps = {
  users: [],
};

class UserList extends Component {
  renderList() {
    const { users } = this.props;
    return (
      <div>
        {users.map(user => <UserListShortItem key={user.cell} user={user} />)}
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

UserList.propTypes = propTypes;
UserList.defaultProps = defaultProps;

export default UserList;

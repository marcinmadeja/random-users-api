import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserListShortItem from './UserListItem';

const propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
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

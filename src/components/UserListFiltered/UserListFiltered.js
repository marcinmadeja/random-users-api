import React from 'react';
import { typesUserList } from 'constants/propTypes/userPropTypes';

import ListItem from './ListItem';

const propTypes = {
  users: typesUserList,
};

const defaultProps = {
  users: [],
};

const UserListFiltered = ({ users }) => {
  return (
    <div>
      {users.map(user => <ListItem key={user.cell} user={user} />)}
    </div>
  );
};

UserListFiltered.propTypes = propTypes;
UserListFiltered.defaultProps = defaultProps;

export default UserListFiltered;

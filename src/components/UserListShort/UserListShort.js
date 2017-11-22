import React from 'react';
import { typesUserList } from 'constants/propTypes/userPropTypes';

import ListItem from './ListItem';

const propTypes = {
  users: typesUserList,
};

const defaultProps = {
  users: [],
};

const UserList = ({ users }) => {
  return (
    <div>
      {users.map(user => <ListItem key={user.cell} user={user} />)}
    </div>
  );
};

UserList.propTypes = propTypes;
UserList.defaultProps = defaultProps;

export default UserList;

import React from 'react';
import { typesUserList } from 'constants/propTypes/userPropTypes';
import ListItem from './ListItem';
import { UserListStyles } from './UserBoxList.styles';

const propTypes = {
  users: typesUserList,
};

const defaultProps = {
  users: [],
};

const UserListFiltered = ({ users }) => {
  return (
    <UserListStyles>
      {users.map(user => <ListItem key={user.cell} user={user} />)}
    </UserListStyles>
  );
};

UserListFiltered.propTypes = propTypes;
UserListFiltered.defaultProps = defaultProps;

export default UserListFiltered;

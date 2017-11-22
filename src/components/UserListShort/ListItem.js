import React from 'react';
import { typesUserListItem } from 'constants/propTypes/userPropTypes';

import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const propTypes = {
  user: typesUserListItem.isRequired,
};

const UserListShortItem = ({ user }) => {
  const { 
    picture: { thumbnail: avatar },
    name: { first, last },
    email,
  } = user;

  return (
    <ListItem button>
      <Avatar>
        <img src={avatar} alt="thumb" />
      </Avatar>
      <ListItemText primary={`${first} ${last}`} secondary={email} />
    </ListItem>
  );
};

UserListShortItem.propTypes = propTypes;

export default UserListShortItem;

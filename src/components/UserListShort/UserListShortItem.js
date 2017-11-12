import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';

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

export default UserListShortItem;

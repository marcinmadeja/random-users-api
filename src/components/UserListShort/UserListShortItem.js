import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }),
  }),
};

const defaultProps = {
  user: null,
};

const UserListShortItem = ({ user }) => {
  if (!user) return null;

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
UserListShortItem.defaultProps = defaultProps;

export default UserListShortItem;

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { typesUserListItem } from 'constants/propTypes/userPropTypes';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import { selectUser } from 'app-redux/actions/actions';

const propTypes = {
  user: typesUserListItem.isRequired,
  selectUser: PropTypes.func.isRequired,
};

const UserListShortItem = ({ user, selectUser: propsSelectUser }) => {
  const {
    picture: { thumbnail: avatar },
    name: { first, last },
    email,
  } = user;

  return (
    <ListItem button onClick={() => propsSelectUser(user)}>
      <Avatar>
        <img src={avatar} alt="thumb" />
      </Avatar>
      <ListItemText primary={`${first} ${last}`} secondary={email} />
    </ListItem>
  );
};

UserListShortItem.propTypes = propTypes;

export default connect(null, { selectUser })(UserListShortItem);

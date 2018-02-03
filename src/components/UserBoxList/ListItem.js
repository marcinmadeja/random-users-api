import React from 'react';
import PropTypes from 'prop-types';
import { typesUserListItem } from 'constants/propTypes/userPropTypes';

import { withStyles } from 'material-ui/styles';
import { Avatar, Paper } from 'material-ui';
import SocialPerson from 'material-ui-icons/Person';
import SocialLocationCity from 'material-ui-icons/LocationCity';
import {
  CardContainer,
  UserListItemStyles,
  ListItemStyles,
} from './UserBoxList.styles';

const propTypes = {
  user: typesUserListItem.isRequired,
  classes: PropTypes.object,
};

const defaultProps = {
  classes: {},
};

const UserListItem = ({ user, classes }) => {
  const {
    picture: { large: avatar },
    name: { first, last },
    location: { city },
  } = user;

  return (
    <ListItemStyles>
      <Paper className={classes.paper}>
        <CardContainer>
          <Avatar alt="thumbnail" src={avatar} className={classes.avatar} />

          <ul>
            <li><SocialPerson />{first} {last}</li>
            <li><SocialLocationCity />{city}</li>
          </ul>
        </CardContainer>
      </Paper>
    </ListItemStyles>
  );
};

UserListItem.propTypes = propTypes;
UserListItem.defaultProps = defaultProps;

export default withStyles(UserListItemStyles)(UserListItem);

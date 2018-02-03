import React from 'react';

import List, {
  ListItem,
  ListItemAvatar,
  ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import Divider from 'material-ui/Divider';
import PersonIcon from 'material-ui-icons/Person';
import MailIcon from 'material-ui-icons/Mail';
import PhoneIcon from 'material-ui-icons/Phone';


const UserDetails = ({ loggedUser }) => {
  const getUserName = () => {
    return `${loggedUser.name.first} ${loggedUser.name.first}`;
  };

  const getUserMail = () => {
    return `${loggedUser.email}`;
  };

  const getUserPhone = () => {
    return `${loggedUser.phone}`;
  };


  return (
    <List dense>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>

        <ListItemText primary={getUserName(loggedUser)} />
      </ListItem>

      <Divider />

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MailIcon />
          </Avatar>
        </ListItemAvatar>

        <ListItemText primary={getUserMail(loggedUser)} />
      </ListItem>

      <Divider />

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PhoneIcon />
          </Avatar>
        </ListItemAvatar>

        <ListItemText primary={getUserPhone(loggedUser)} />
      </ListItem>
    </List>
  );
};

export default UserDetails;

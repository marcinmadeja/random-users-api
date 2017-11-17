import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import { Avatar, Paper } from 'material-ui';
import SocialPerson from 'material-ui-icons/Person';
import CommunicationEmail from 'material-ui-icons/Email';
import CommunicationPhone from 'material-ui-icons/Phone';
import HardwarePhoneAndroid from 'material-ui-icons/PhoneAndroid';
import SocialLocationCity from 'material-ui-icons/LocationCity';
import MapsStreetview from 'material-ui-icons/Streetview';
import MapsLocalPostOffice from 'material-ui-icons/LocalPostOffice';
import SocialPublic from 'material-ui-icons/Public';
import { 
  CardContainer,
  UserData,
  UserListItemStyles,
} from './UserList.styles';


const UserListItem = ({ user, classes }) => {
  const { 
    picture: { large: avatar },
    name: { first, last },
    location: {
      street, city, state, postcode,
    },
    email,
    phone,
    cell,
  } = user;

  console.log(user);

  return (
    <Paper className={classes.paper}>
      <CardContainer>
        <Avatar alt="thumbnail" src={avatar} className={classes.avatar} />

        <UserData>
          <ul>
            <li><SocialPerson />{first} {last}</li>
            <li><CommunicationEmail />{email}</li>
            <li><CommunicationPhone />{phone}</li>
            <li><HardwarePhoneAndroid />{cell}</li>
          </ul>
        </UserData>

        <UserData>
          <ul>
            <li><MapsStreetview />{street}</li>
            <li><SocialLocationCity />{city}</li>
            <li><SocialPublic />{state}</li>
            <li><MapsLocalPostOffice />{postcode}</li>
          </ul>        
        </UserData>
      </CardContainer>
    </Paper>
  );
};

export default withStyles(UserListItemStyles)(UserListItem);

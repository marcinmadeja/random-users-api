import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';

import UserListShortItem from './UserListShortItem';

class UserListShorter extends Component {
  renderList() {
    const { users } = this.props;
    return (
      <List>
        {users.map(user => <UserListShortItem key={user.id.value} user={user} />)}
      </List>
    );
  }

  render() {
    console.log(this.props);
    
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

export default UserListShorter;

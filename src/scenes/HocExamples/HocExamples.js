import React, { Component } from 'react';
import withRandomUserList from 'hoc/withRandomUserList/withRandomUserList';
import UserBoxList from 'components/UserBoxList/UserBoxList';
import UserList from 'components/UserList/UserList';
import UserListShort from 'components/UserListShort/UserListShort';

const UserBoxListWithUsers = withRandomUserList(UserBoxList);
const UserListWithUsers = withRandomUserList(UserList);
const UserListShortWithUsers = withRandomUserList(UserListShort);

class HocExamples extends Component {
  render() {
    return (
      <div>
        <UserBoxListWithUsers />
        <br /><br /><br />

        <UserListWithUsers />
        <br /><br /><br />

        <UserListShortWithUsers />
      </div>
    );
  }
}

export default HocExamples;

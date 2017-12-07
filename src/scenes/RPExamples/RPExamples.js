import React, { Component } from 'react';
import UserListRP from 'components/UserListRP/UserListRP';
import { AlertStandard } from 'components/alerts/';

import UserBoxList from 'components/UserBoxList/UserBoxList';
import UserList from 'components/UserList/UserList';
import UserListShort from 'components/UserListShort/UserListShort';

// const UserBoxListWithUsers = withRandomUserList(UserBoxList);
// const UserListWithUsers = withRandomUserList(UserList);
// const UserListShortWithUsers = withRandomUserList(UserListShort);

class RPExamples extends Component {
  render() {
    return (
      <div>
        <UserListRP
          render={({ users, isLoaded }) => {
            if (!isLoaded) return <AlertStandard msg="Box list is loading..." progressBar />;
            return <UserBoxList users={users} />;
          }}
        />

        <br /> <br /> <br />
        <UserListRP
          render={({ users, isLoaded }) => {
            if (!isLoaded) return <AlertStandard msg="User list is loading..." progressBar />;
            return <UserList users={users} />;
          }}
        />

        <br /> <br /> <br />
        <UserListRP
          render={({ users, isLoaded }) => {
            if (!isLoaded) return <AlertStandard msg="Short list is loading..." progressBar />;
            return <UserListShort users={users} />;
          }}
        />


      </div>
    );
  }
}

export default RPExamples;

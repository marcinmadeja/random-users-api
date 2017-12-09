import React, { Component } from 'react';
import UserListRP from 'components/UserListRP/UserListRP';

import UserBoxList from 'components/UserBoxList/UserBoxList';
import UserList from 'components/UserList/UserList';
import UserListShort from 'components/UserListShort/UserListShort';

class RPExamples extends Component {
  render() {
    return (
      <div>
        <UserListRP
          render={({ users }) => <UserBoxList users={users} />}
        />

        <br /> <br /> <br />
        <UserListRP
          render={({ users }) => <UserList users={users} />}
        />

        <br /> <br /> <br />
        <UserListRP
          render={({ users }) => <UserListShort users={users} />}
        />


      </div>
    );
  }
}

export default RPExamples;

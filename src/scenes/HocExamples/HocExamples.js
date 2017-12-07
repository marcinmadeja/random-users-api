import React, { Component } from 'react';
import withRandomUserList from 'hoc/withRandomUserList/withRandomUserList';
import UserBoxList from 'components/UserBoxList/UserBoxList';

const UserBoxListWithUsers = withRandomUserList(UserBoxList);

class HocExamples extends Component {
  render() {
    return (
      <div>
        <UserBoxListWithUsers />
      </div>
    );
  }
}

export default HocExamples;

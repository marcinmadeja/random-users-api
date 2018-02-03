import React, { Component } from 'react';

import { Paper } from 'material-ui';
import UserListShort from 'components/UserListShort/UserListShort';
import { connect } from 'react-redux';

import { Title } from './SidebarUserList.styles';

class SidebarUserList extends Component {
  render() {
    const { usersList } = this.props;

    return (
      <Paper elevation={2}>
        <Title>Most popular</Title>
        <UserListShort users={usersList} loading={false} />
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersList: state.usersList,
  };
};

export default connect(mapStateToProps)(SidebarUserList);

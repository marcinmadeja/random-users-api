import React, { Component } from 'react';

class UserList extends Component {
  renderList() {
    const { users } = this.props;

    return users.map(user => <p>test</p>);
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

export default UserList;

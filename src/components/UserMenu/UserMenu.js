import React, { Component } from 'react';
import { connect } from 'react-redux';

import Popover from 'material-ui/Popover';
import UserButton from './UserButton';
import UserDetails from './UserDetails';

class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    const { anchorEl } = this.state;
    const { loggedUser } = this.props;

    if (!loggedUser) return null;

    return (
      <div>
        <UserButton
          loggedUser={loggedUser}
          anchorEl={anchorEl}
          handleClick={this.handleClick}
        />

        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <UserDetails loggedUser={loggedUser} />
        </Popover>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedUser: state.loggedUser,
  };
};

export default connect(mapStateToProps)(UserMenu);

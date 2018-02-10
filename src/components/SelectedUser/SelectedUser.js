import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeSelectedUser } from 'app-redux/actions/actions';

import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';

import { TitleWrapper } from './SelectedUser.styles';

class SelectedUser extends Component {
  render() {
    const { selectedUser } = this.props;

    if (!selectedUser) return null;
    const {
      name: {
        title,
        first,
        last,
      },
      cell,
      dob,
      gender,
      nat,
      phone,
      registered,
    } = selectedUser;

    return (
      <Dialog
        open={!!title}
        onClose={this.props.removeSelectedUser}
      >
        <DialogTitle>
          <TitleWrapper>
            <Avatar alt="user" src={selectedUser.picture.large} />
            {title}, {first} {last}
          </TitleWrapper>
        </DialogTitle>
        <DialogContent>
          <ul>
            <li>cell: {cell}</li>
            <li>dob: {dob}</li>
            <li>gender: {gender}</li>
            <li>nat: {nat}</li>
            <li>phone: {phone}</li>
            <li>registered: {registered}</li>
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.removeSelectedUser} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedUser: state.selectedUser,
  };
};

export default connect(mapStateToProps, { removeSelectedUser })(SelectedUser);

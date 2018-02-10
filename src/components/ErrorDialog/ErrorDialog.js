import React from 'react';
import { connect } from 'react-redux';
import { closeErrorDialog } from 'app-redux/actions/actions';

import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

const ErrorDialog = ({
  errorDialog: {
    open,
    msg,
  },
  closeErrorDialog: closeDialog,
}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={closeDialog}
      >
        <DialogTitle>Error</DialogTitle>

        <DialogContent>
          <DialogContentText>{msg}</DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={closeDialog} color="primary" variant="raised">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    errorDialog: state.errorDialog,
  };
};

export default connect(mapStateToProps, { closeErrorDialog })(ErrorDialog);

import React, { Component } from 'react';
import App from 'App/App';

import { connect } from 'react-redux';
import {
  getLoggedUser,
  getBestUsers,
} from 'app-redux/actions/actions';

class AppWrapper extends Component {
  componentDidMount() {
    this.props.getBestUsers();
    this.props.getLoggedUser();
  }

  render() {
    return (
      <App />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedUser: state.selectedUser,
  };
};

export default connect(mapStateToProps, { getBestUsers, getLoggedUser })(AppWrapper);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};

class Main extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default Main;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};

class Sidebar extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Sidebar.propTypes = propTypes;

export default Sidebar;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SidebarStyles } from './Sidebar.styles';


const propTypes = {
  children: PropTypes.node.isRequired,
};

class Sidebar extends Component {
  render() {
    return (
      <SidebarStyles>{this.props.children}</SidebarStyles>
    );
  }
}

Sidebar.propTypes = propTypes;

export default Sidebar;

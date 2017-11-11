import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MainStyles } from './Main.styles';

const propTypes = {
  children: PropTypes.node.isRequired,
};

class Main extends Component {
  render() {
    return (
      <MainStyles>{this.props.children}</MainStyles>
    );
  }
}

Main.propTypes = propTypes;

export default Main;

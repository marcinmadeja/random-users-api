import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Main from 'layout/Main/Main';
import Sidebar from 'layout/Sidebar/Sidebar';
import { Container, Row } from 'styled-components/main';

const propTypes = {
  main: PropTypes.node.isRequired,
};

class FullWidthLayout extends Component {
  render() {
    return (
      <Container>
        {this.props.main}
      </Container>
    );
  }
}

FullWidthLayout.propTypes = propTypes;

export default FullWidthLayout;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'styled-components/main';

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

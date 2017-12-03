import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'components/grid';

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

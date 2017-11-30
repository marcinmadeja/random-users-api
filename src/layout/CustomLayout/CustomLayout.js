import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'styled-components/main';

const propTypes = {
  children: PropTypes.node.isRequired,
};

class DefaultLayout extends Component {
  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    );
  }
}

DefaultLayout.propTypes = propTypes;

export default DefaultLayout;

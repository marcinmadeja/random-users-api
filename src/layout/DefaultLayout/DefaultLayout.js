import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Main from 'layout/Main/Main';
import Sidebar from 'layout/Sidebar/Sidebar';
import { Container, Row } from 'styled-components/main';

const propTypes = {
  sidebar: PropTypes.node.isRequired,
  main: PropTypes.node.isRequired,
};

class DefaultLayout extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Main>{this.props.main}</Main>
          
          <Sidebar>{this.props.sidebar}</Sidebar>
        </Row>
      </Container>
    );
  }
}

DefaultLayout.propTypes = propTypes;

export default DefaultLayout;

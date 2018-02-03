import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Main from 'layout/Main/Main';
import Sidebar from 'layout/Sidebar/Sidebar';
import { Container, Row, Col } from 'components/grid';

const propTypes = {
  sidebar: PropTypes.node.isRequired,
  main: PropTypes.node.isRequired,
};

class DefaultLayout extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={8}>
            <Main>{this.props.main}</Main>
          </Col>

          <Col md={4}>
            <Sidebar>{this.props.sidebar}</Sidebar>
          </Col>
        </Row>
      </Container>
    );
  }
}

DefaultLayout.propTypes = propTypes;

export default DefaultLayout;

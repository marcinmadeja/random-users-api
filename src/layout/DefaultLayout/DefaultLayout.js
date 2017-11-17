import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Main from 'layout/Main/Main';
import Sidebar from 'layout/Sidebar/Sidebar';
import { Container, Row } from 'styled-components/main';

import { MainStyles, SidebarStyles } from './DefaultLayout.styles';

const propTypes = {
  sidebar: PropTypes.node.isRequired,
  main: PropTypes.node.isRequired,
};

class DefaultLayout extends Component {
  render() {
    return (
      <Container>
        <Row>
          <MainStyles>
            <Main>{this.props.main}</Main>
          </MainStyles>
          
          <SidebarStyles>
            <Sidebar>{this.props.sidebar}</Sidebar>
          </SidebarStyles>
        </Row>
      </Container>
    );
  }
}

DefaultLayout.propTypes = propTypes;

export default DefaultLayout;

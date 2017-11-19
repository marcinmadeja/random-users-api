import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'styled-components/main';
import { MenuStyles } from './TopMenu.styles';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const TopMenu = ({ children }) => {
  return (
    <MenuStyles>
      <Container>{children}</Container>
    </MenuStyles>
  );
};

TopMenu.propTypes = propTypes;

export default TopMenu;

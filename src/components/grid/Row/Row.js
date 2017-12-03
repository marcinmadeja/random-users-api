import React from 'react';
import PropTypes from 'prop-types';
import { RowStyled } from './Row.styles';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

const defaultProps = {
  children: null,
};

const Row = ({ children }) => {
  return (
    <RowStyled>
      {children}
    </RowStyled>
  );
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;

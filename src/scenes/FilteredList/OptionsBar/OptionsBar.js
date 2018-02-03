import React from 'react';
import { Bar } from './OptionsBar.styled';

const OptionsBar = ({ children }) => {
  return (
    <Bar>
      {children}
    </Bar>
  );
};

export default OptionsBar;

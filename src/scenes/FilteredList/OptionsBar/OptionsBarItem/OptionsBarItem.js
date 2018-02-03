import React from 'react';
import { BarItem, Label } from './OptionsBarItem.styled';

const OptionsBarItem = ({ children, label }) => {
  return (
    <BarItem>
      <Label>{label}</Label>
      {children}
    </BarItem>
  );
};

export default OptionsBarItem;

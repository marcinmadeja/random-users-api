import React from 'react';
import PropTypes from 'prop-types';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

const propTypes = {
  selectedItem: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const DisplayPersons = ({ selectedItem, handleChange }) => {
  function handleLocalChange(event) {
    handleChange(event.target.value);
  }

  return (
    <div>
      <Select
        value={selectedItem}
        onChange={handleLocalChange}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={100}>100</MenuItem>
      </Select>
    </div>
  );
};

DisplayPersons.propTypes = propTypes;

export default DisplayPersons;

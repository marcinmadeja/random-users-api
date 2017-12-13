import React from 'react';
import PropTypes from 'prop-types';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

const propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  results: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const Pagination = ({
  page,
  results,
  totalPages,
  handleChange,
}) => {
  function handleLocalChange(event) {
    handleChange(event.target.value);
  }

  function renderItems() {
    const pageLimit = Math.ceil(totalPages / results);
    const range = generareRange(1, pageLimit);
    return range
      .map(number => <MenuItem value={number} key={number}>{number}</MenuItem>);
  }

  function generareRange(start, end) {
    const numbers = [];
    for (let i = start; i <= end; i++) {
      numbers.push(i);
    }

    return numbers;
  }

  return (
    <div>
      <Select
        value={page}
        onChange={handleLocalChange}
      >
        {renderItems()}
      </Select>
    </div>
  );
};

Pagination.propTypes = propTypes;

export default Pagination;

import React from 'react';
import PropTypes from 'prop-types';

import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';

const propTypes = {
  gender: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};

const FilterColumn = ({ gender, handleChange }) => {
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={gender.includes('man')}
                onChange={handleChange}
                value="man"
              />
            }
            label="man"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={gender.includes('woman')}
                onChange={handleChange}
                value="woman"
              />
            }
            label="woman"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
};

FilterColumn.propTypes = propTypes;

export default FilterColumn;

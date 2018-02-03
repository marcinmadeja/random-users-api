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
  handleGenderChange: PropTypes.func.isRequired,
};

const FilterColumn = ({ gender, handleGenderChange }) => {
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={gender.includes('male')}
                onChange={handleGenderChange}
                value="male"
              />
            }
            label="male"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={gender.includes('female')}
                onChange={handleGenderChange}
                value="female"
              />
            }
            label="female"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
};

FilterColumn.propTypes = propTypes;

export default FilterColumn;

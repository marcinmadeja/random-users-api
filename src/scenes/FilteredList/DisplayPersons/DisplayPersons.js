import React, { Component } from 'react';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';

class DisplayPersons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNumber: 20,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ displayNumber: event.target.value }, () => {
      this.props.handleDisplayPersons(this.state.displayNumber);
    });
  }

  render() {
    return (
      <div>
        <Select
          value={this.state.displayNumber}
          onChange={this.handleChange}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </div>
    );
  }
}

export default DisplayPersons;

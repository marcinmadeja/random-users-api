import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { NavStyles } from './Nav.styles';

class Nav extends Component {
  render() {
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <NavStyles>
            <li><NavLink to="/" exact activeClassName="selected">Home</NavLink></li>
            <li><NavLink to="/about" exact activeClassName="selected">About</NavLink></li>       
          </NavStyles>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Nav;

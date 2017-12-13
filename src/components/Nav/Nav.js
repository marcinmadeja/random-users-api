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
            <li>
              <NavLink to="/" exact activeClassName="selected">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" exact activeClassName="selected">About</NavLink>
            </li>
            <li>
              <NavLink to="/full-list" exact activeClassName="selected">Full list</NavLink>
            </li>
            <li>
              <NavLink to="/filtered-list" exact activeClassName="selected">Filtered list</NavLink>
            </li>
            <li>
              <NavLink to="/hoc-examples" exact activeClassName="selected">Hoc Examples</NavLink>
            </li>
            <li>
              <NavLink to="/rp-examples" exact activeClassName="selected">RP Examples</NavLink>
            </li>
          </NavStyles>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Nav;

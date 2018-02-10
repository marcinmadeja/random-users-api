import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopMenu from 'layout/TopMenu/TopMenu';
import DefaultLayout from 'layout/DefaultLayout/DefaultLayout';
import FullWidthLayout from 'layout/FullWidthLayout/FullWidthLayout';

import SelectedUser from 'components/SelectedUser/SelectedUser';
import Nav from 'components/Nav/Nav';
import ErrorDialog from 'components/ErrorDialog/ErrorDialog';
import Home from 'scenes/Home/Home';
import About from 'scenes/About/About';
import FilteredList from 'scenes/FilteredList/FilteredList';

import SidebarUserList from 'components/SidebarUserList/SidebarUserList';
import { Container } from 'components/grid';

import 'styles/material-elevation.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div>
            <TopMenu>
              <Nav />
            </TopMenu>

            <Route
              exact
              path="/"
              render={() => (
                <DefaultLayout
                  main={<Home />}
                  sidebar={<SidebarUserList />}
                />
              )}
            />

            <Route
              exact
              path="/about"
              render={() => (
                <DefaultLayout
                  main={<About />}
                  sidebar={<SidebarUserList />}
                />
              )}
            />

            <Route
              exact
              path="/full-list"
              render={() => (
                <FullWidthLayout
                  main={<Home />}
                />
              )}
            />

            <Route
              exact
              path="/filtered-list"
              render={() => (
                <Container>
                  <FilteredList />
                </Container>
              )}
            />

            <SelectedUser />
          </div>
        </Router>

        <ErrorDialog />
      </Fragment>
    );
  }
}

export default App;

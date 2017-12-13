import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopMenu from 'layout/TopMenu/TopMenu';
import DefaultLayout from 'layout/DefaultLayout/DefaultLayout';
import FullWidthLayout from 'layout/FullWidthLayout/FullWidthLayout';

import Nav from 'components/Nav/Nav';
import Home from 'scenes/Home/Home';
import About from 'scenes/About/About';
import FilteredList from 'scenes/FilteredList/FilteredList';
import HocExamples from 'scenes/HocExamples/HocExamples';
import RPExamples from 'scenes/RPExamples/RPExamples';

import SidebarUserList from 'components/SidebarUserList/SidebarUserList';
import { Container } from 'components/grid';

import 'styles/material-elevation.css';

class App extends Component {
  render() {
    return (
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

          <Route
            exact
            path="/hoc-examples"
            render={() => (
              <Container>
                <HocExamples />
              </Container>
            )}
          />

          <Route
            exact
            path="/rp-examples"
            render={() => (
              <Container>
                <RPExamples />
              </Container>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;

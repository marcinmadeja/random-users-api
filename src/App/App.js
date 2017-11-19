import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopMenu from 'layout/TopMenu/TopMenu';
import DefaultLayout from 'layout/DefaultLayout/DefaultLayout';
import FullWidthLayout from 'layout/FullWidthLayout/FullWidthLayout';

import Nav from 'components/Nav/Nav';
import Home from 'scenes/Home/Home';
import About from 'scenes/About/About';
import SidebarUserList from 'components/SidebarUserList/SidebarUserList';

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
        </div>
      </Router>
    );
  }
}

export default App;

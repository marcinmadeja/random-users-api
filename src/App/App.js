import React, { Component } from 'react';
import TopMenu from 'layout/TopMenu/TopMenu';
import DefaultLayout from 'layout/DefaultLayout/DefaultLayout';
import Home from 'scenes/Home/Home';
import SidebarUserList from 'components/SidebarUserList/SidebarUserList';

class App extends Component {
  render() {
    return (
      <div>
        <TopMenu />

        <DefaultLayout
          main={<Home />} 
          sidebar={<SidebarUserList />}
        />
      </div>
    );
  }
}

export default App;

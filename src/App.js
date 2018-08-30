import React, { Component } from 'react';
import SideBar from './components/sideBar/sidebar';
import Pages from './components/page/page';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <Pages>

          </Pages>
        </div>
      </div>
    );
  }
}

export default App;

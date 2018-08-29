import React, { Component } from 'react';
import SideBar from './components/sideBar/sidebar';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <SideBar />
      </div>
    );
  }
}

export default App;

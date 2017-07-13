import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MapPropsExample from './components/MapPropsExample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Recomposed</h2>
        </div>
        <div>
          <h3>HOCs</h3>
          <h4>mapProps</h4>
          <MapPropsExample num={1} text={'a string prop'} />
        </div>
      </div>
    );
  }
}

export default App;

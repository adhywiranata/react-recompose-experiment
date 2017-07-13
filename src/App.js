import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MapPropsExample from './components/MapPropsExample';
import WithPropsExample from './components/WithPropsExample';
import DefaultPropsExample from './components/DefaultPropsExample';

const Section = ({ label, desc }) => (
  <div className="section">
    <h4>{label}</h4>
    <p>
      {desc}
    </p>
  </div>
)
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

          <Section label={'mapProps()'} desc={'Accepts a function that maps owner props to a new collection of props that are passed to the base component.'} />
          <MapPropsExample num={1} text={'a string prop'} />

          <Section label={'withProps()'} desc={'Like mapProps(), except the newly created props are merged with the owner props.'} />
          <WithPropsExample num={2} text={'a string prop'} />

          <Section label={'defaultProps()'} desc={'Specifies props to be passed by default to the base component. Similar to withProps(), except the props from the owner take precedence over props provided to the HoC.'} />
          <DefaultPropsExample num={3} text={'owner\'s string prop'} />
          <DefaultPropsExample />
        </div>
      </div>
    );
  }
}

export default App;

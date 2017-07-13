import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MapPropsExample from './components/MapPropsExample';
import WithPropsExample from './components/WithPropsExample';
import DefaultPropsExample from './components/DefaultPropsExample';

import WithHandlersExample from './components/WithHandlersExample';

import WithStateExample from './components/WithStateExample';

import WithStateAndPropsExample from './components/WithStateAndPropsExample';

const Section = ({ label, desc }) => (
  <div className="section">
    <h4>{label}</h4>
    <p>
      {desc}
    </p>
  </div>
)
class App extends Component {
  constructor() {
    super();
    this.state = {
      text: 'this is a text state from App',
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Recomposed</h2>
        </div>
        <div>
          <h3>Props</h3>

          <Section label={'mapProps()'} desc={'Accepts a function that maps owner props to a new collection of props that are passed to the base component.'} />
          <MapPropsExample num={1} text={'a string prop'} />

          <Section label={'withProps()'} desc={'Like mapProps(), except the newly created props are merged with the owner props.'} />
          <WithPropsExample num={2} text={'a string prop'} />

          <Section label={'defaultProps()'} desc={'Specifies props to be passed by default to the base component. Similar to withProps(), except the props from the owner take precedence over props provided to the HoC.'} />
          <DefaultPropsExample num={3} text={'owner\'s string prop'} />
          <DefaultPropsExample />

          <h3>Handler</h3>

          <Section label={'withHandlers()'} desc={'Takes an object map of handler creators or a factory function.'} />
          <WithHandlersExample />

          <h3>States</h3>

          <Section label={'withState()'} desc={'Passes two additional props to the base component: a state value, and a function to update that state value. The state updater has the following signature:'} />
          <WithStateExample />

          <h3>Compose</h3>

          <Section label={'compose()'} desc={'composes two or more HOCs'} />
          <WithStateAndPropsExample label={'this is a label props'} />
        </div>
      </div>
    );
  }
}

export default App;

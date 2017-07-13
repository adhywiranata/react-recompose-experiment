import React from 'react';
import { lifecycle } from 'recompose';

const Comp = () => (
  <div>I'm a stateless function, yet i have my own lifecycle! Cool!</div>
);

export default lifecycle({
  componentDidMount() {
    console.log('component mounted!');
  },
})(Comp);
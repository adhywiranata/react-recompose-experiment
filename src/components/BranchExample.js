import React from 'react';
import { branch } from 'recompose';

const TrueComp = (BaseComp) => () => (<div style={{ color: 'green' }}><BaseComp /></div>);
const FalseComp = (BaseComp) => () => (<div style={{ color: 'red' }}><BaseComp /></div>);

const Comp = () => (
  <div>
    <h5>I'm green if true, red if false :)</h5>
  </div>
);

export default branch(
  ({ showTrue }) => showTrue,
  TrueComp,
  FalseComp,
)(Comp);
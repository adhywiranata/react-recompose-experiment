import React from 'react';
import { withState } from 'recompose';

const Comp = ({ text }) => (
  <div>
    <span>{text}</span>
  </div>
);

export default withState('text', 'setText', 'Hello There I am a state!!')(Comp);
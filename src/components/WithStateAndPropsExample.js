import React from 'react';
import { compose, withState, withProps } from 'recompose';

const Comp = ({ text, label }) => (
  <div>
    <strong>Text</strong> {text} <br />
    <strong>Label</strong> {label} <br />
  </div>
);

export default compose(
  withState('text', 'setText', 'woalah'),
  withProps(ownerProps => ({ ...ownerProps, label: `${ownerProps.label} - updated` })),
)(Comp);
import React from 'react';
import { mapProps } from 'recompose';

const Comp = ({ num, text }) => (
  <div>{num}: {text}</div>
);

// the mapProps below maps the ownerProps and returns a modified props,
// which in this case, an uppercased version of the text
export default mapProps(ownerProps => ({
  ...ownerProps,
  text: ownerProps.text.toUpperCase() })
)(Comp);
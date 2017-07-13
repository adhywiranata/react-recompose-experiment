import React from 'react';
import { withProps } from 'recompose';

const Comp = ({ num, text, details }) => (
  <div>NUM: {num}: TEXT: {text} DETAILS: {details}</div>
);

// the mapProps below maps the ownerProps and returns a modified props,
// which in this case, an uppercased version of the text
export default withProps(ownerProps => ({
  ...ownerProps,
  details: 'wow!' })
)(Comp);
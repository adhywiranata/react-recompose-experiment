import React from 'react';
import { defaultProps } from 'recompose';

const Comp = ({ num, text, details }) => (
  <div>
    <strong>NUM:</strong> {num} <br/>
    <strong>TEXT:</strong> {text} <br/>
    <br/><br/>
  </div>
);

// the mapProps below maps the ownerProps and returns a modified props,
// which in this case, an uppercased version of the text
export default defaultProps({ num: 100, text: 'default text' })(Comp);
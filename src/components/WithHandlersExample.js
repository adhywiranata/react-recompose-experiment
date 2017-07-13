import React from 'react';
import { withHandlers } from 'recompose';

const Comp = ({ onClick, onChange, onBlur }) => (
  <div>
    <button onClick={onClick}>CLICK ME!</button>
    <input type={'text'} onChange={onChange} onBlur={onBlur} placeholder={'change me!'} />
  </div>
);

export default withHandlers({
  onClick: () => {
    alert('oi');
  },
  onChange: props => event => {
    console.log(event.target.value);
  },
  onBlur: props => event => {
    alert(event.target.value);
  },
})(Comp);
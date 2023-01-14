import React from 'react';
const Buttons = (props) => {
  return (
    <button onClick={() => props.handlerClick(props.children)}>
      {props.children}
    </button>
  )
};
export default Buttons;
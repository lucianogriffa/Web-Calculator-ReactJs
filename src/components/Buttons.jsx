import React from 'react';
import './button.css';
const Buttons = (props) => {
  return (
    <button 
      onClick={() => props.handlerClick(props.children)}
      className="button"
    >
      {props.children}
    </button>
  )
};
export default Buttons;
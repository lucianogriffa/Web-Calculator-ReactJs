import React from 'react';
import './buttonNum.css';
const Numbers = (props) => {
  return (
    <button 
      onClick={() => props.handlerClick(props.children)}
      className="buttonNum"
    >
      {props.children}
    </button>
  )
};
export default Numbers;
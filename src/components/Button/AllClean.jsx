import React from 'react';
import './buttonAc.css';
const AllClean = (props) => {
  return (
    <button 
      onClick={() => props.handlerClick(props.children)}
      className="buttonAc"
    >
      {props.children}
    </button>
  )
};
export default AllClean;
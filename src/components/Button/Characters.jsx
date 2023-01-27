import React from 'react';
import './CharactersButton.css';
const Characters = (props) => {
  return (
    <button 
      onClick={() => props.handlerClick(props.children)}
      className="buttonChar"
    >
      {props.children}
    </button>
  )
};
export default Characters;
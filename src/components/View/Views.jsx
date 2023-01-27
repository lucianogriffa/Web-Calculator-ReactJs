import React from 'react';
import './views.css';
const Views = ({ result, displayOperation }) => {
  return (
    <div className='container_display'>
      <p className='text_display'>{displayOperation}</p>
      <p className='text_display'>{result}</p>
    </div>
  )
};
export default Views;
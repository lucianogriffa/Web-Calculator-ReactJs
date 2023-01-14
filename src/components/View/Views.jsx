import React from 'react';
import './views.css';
const Views = ({ display, result }) => {
  return (
    <div className='container_display'>
      <p className='text_display'>{display}</p>
    </div>
  )
};
export default Views;
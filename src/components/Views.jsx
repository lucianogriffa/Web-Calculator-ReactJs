import React from 'react';
import './Views.css';
const Views = ({ display, result }) => {
  return (
    <div className='container_display'>
      <p className='text_display'>{display}</p>
      <p className='text_result_display'>{result}</p>
    </div>
  )
};
export default Views;
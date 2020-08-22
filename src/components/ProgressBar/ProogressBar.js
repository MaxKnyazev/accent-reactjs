import React from 'react';
import './ProgressBar.css';
// import words from '../../data/data';

function ProgressBar ({count, classes, words}) {
  return (
    <div
      style={{
        width: `${count * (100 / words.length)}vw`,
      }}
      className={`progress ${classes}`} 
    ></div>
  )
}

export default ProgressBar;
import React from 'react';

function ProgressBar ({count, words, classes}) {
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
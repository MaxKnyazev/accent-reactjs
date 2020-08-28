import React from 'react';
import './ProgressBar.css';

function ProgressBar({ count, classes, words }) {
  const result = count ? `${count * (100 / words.length)}vw` : `0vw`;

  return (
    <div
      style={{
        width: result,
      }}
      className={`progress ${classes}`}
    ></div>
  );
}

export default ProgressBar;

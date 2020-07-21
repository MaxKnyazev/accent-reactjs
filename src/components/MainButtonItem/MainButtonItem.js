import React from 'react';
import './MainButtonItem.css';

function MainButtonItem ({buttonHandler, word, index, classes, mainButtonsRef, wordFlag}) {
  return (
    <span
      onClick={() => {
        buttonHandler(word, index, mainButtonsRef, wordFlag);
      }}
      className={classes}
    >
      <span className='main__btnInside'>{word}</span>
    </span>
  )
}

export default MainButtonItem;
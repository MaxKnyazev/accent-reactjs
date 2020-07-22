import React from 'react';
import './MainButtonItem.css';

function MainButtonItem ({buttonHandler, word, index, classes, mainButtonsRef, mainInfoRef, wordFlag}) {
  return (
    <span
      onClick={() => {
        buttonHandler(word, index, mainButtonsRef, mainInfoRef, wordFlag);
      }}
      className={classes}
    >
      <span className='main__btnInside'>{word}</span>
    </span>
  )
}

export default MainButtonItem;
import React from 'react';

function MainButtonItem ({buttonHandler, word, index, classes}) {
  return (
    <span
      onClick={() => {
        buttonHandler(word, index);
      }}
      className={classes}
    >
      {word}
    </span>
  )
}

export default MainButtonItem;
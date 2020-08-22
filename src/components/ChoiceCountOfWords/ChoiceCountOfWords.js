import React from 'react';
import './ChoiceCountOfWords.css';

function ChoiceCountOfWords({subCount, countOfWords, addCount}) {
  return (
    <span className='main__change-count'>
      <span className='main__sub' onClick={subCount}>-</span>
      <span className='main__count'>{countOfWords}</span>
      <span className='main__add' onClick={addCount}>+</span>
    </span>
  );
}

export default ChoiceCountOfWords;
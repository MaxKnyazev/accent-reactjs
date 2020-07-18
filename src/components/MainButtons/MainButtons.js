import React from 'react';
import MainButtonItem from '../MainButtonItem/MainButtonItem';
import './MainButton.css';

function MainButtons ({wordButtonHandler, firstWord, secondWord, index=0}) {
  return (
    <div className='main__buttons'>
      <MainButtonItem buttonHandler={wordButtonHandler} word={firstWord} index={index} classes='main__btn'/>
      <MainButtonItem buttonHandler={wordButtonHandler} word={secondWord} index={index} classes='main__btn'/>
  </div>
  )
}

export default MainButtons;
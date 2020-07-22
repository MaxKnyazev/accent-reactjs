import React, { useRef } from 'react';
import MainButtonItem from '../MainButtonItem/MainButtonItem';
import './MainButtons.css';

function MainButtons ({wordButtonHandler, firstWord, secondWord, index=0, mainInfoRef}) {
  let mainButtonsRef = useRef();
  return (
    <div ref={mainButtonsRef} className='main__buttons'>
      <MainButtonItem 
        buttonHandler={wordButtonHandler} 
        word={firstWord} 
        index={index} 
        classes='main__btn'
        mainButtonsRef={mainButtonsRef}
        mainInfoRef={mainInfoRef}
        wordFlag='first'
      />
      <MainButtonItem 
        buttonHandler={wordButtonHandler} 
        word={secondWord} 
        index={index} 
        classes='main__btn'
        mainButtonsRef={mainButtonsRef}
        mainInfoRef={mainInfoRef}
        wordFlag='second'
      />
    </div>
  )
}

export default MainButtons;
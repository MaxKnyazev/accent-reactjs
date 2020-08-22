import React, { useRef } from 'react';
import WrongsResult from '../WrongResult/WrongsResult';
import words from '../../data/data';
import MainInfo from '../MainInfo/MainInfo';
import MainButtons from '../MainButtons/MainButtons';
import MainButtonItem from '../MainButtonItem/MainButtonItem';
import './Main.css';

function Main({
  isGameOn,
  buttonStartHandler,
  wordButtonHandler,
  firstWord,
  secondWord,
  index,
  isFinished,
  correctCount,
  allCount,
  incorrectCount,
}) {
  let mainInfoRef = useRef();

  return isGameOn ? (
    <main className='main'>
      <section className='main__content'>
        <MainButtons
          wordButtonHandler={wordButtonHandler}
          firstWord={firstWord}
          secondWord={secondWord}
          index={index}
          mainInfoRef={mainInfoRef}
        />
        <MainInfo
          mainInfoRef={mainInfoRef}
          correctCount={correctCount}
          allCount={allCount}
          incorrectCount={incorrectCount}
        />
      </section>
    </main>
  ) : isFinished ? (
    <main className='main'>
      <section className='main__content'>
        <WrongsResult words={words} />
        <MainButtonItem
          buttonHandler={buttonStartHandler}
          word='Начать заново'
          classes='main__btn main__btn--start'
        />
      </section>
    </main>
  ) : (
    <main className='main'>
      <section className='main__content'>
        <MainButtonItem
          buttonHandler={buttonStartHandler}
          word='Начать'
          classes='main__btn main__btn--start'
        />


      </section>
    </main>
  );
}

export default Main;

// <span className='main__change-count'>
// <span className='main__add'>-</span>
// <span className='main__count'>100</span>
// <span className='main__sub'>+</span>
// </span>

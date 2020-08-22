import React, { useRef } from 'react';
import WrongsResult from '../WrongResult/WrongsResult';
import MainInfo from '../MainInfo/MainInfo';
import MainButtons from '../MainButtons/MainButtons';
import MainButtonItem from '../MainButtonItem/MainButtonItem';
import ChoiceCountOfWords from '../ChoiceCountOfWords/ChoiceCountOfWords';
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
  countOfWords,
  addCount,
  subCount,
  words,
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
        <ChoiceCountOfWords 
          subCount={subCount}
          countOfWords={countOfWords}
          addCount={addCount}
        />
      </section>
    </main>
  );
}

export default Main;

// <span className='main__change-count'>
// <span className='main__sub' onClick={subCount}>-</span>
// <span className='main__count'>{countOfWords}</span>
// <span className='main__add' onClick={addCount}>+</span>
// </span>

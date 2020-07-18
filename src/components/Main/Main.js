import React from 'react';
import WrongsResult from '../WrongResult/WrongsResult';
import words from '../../data/data';
import MainInfo from '../MainInfo/MainInfo';
import MainButtons from '../MainButtons/MainButtons';
import MainButtonItem from '../MainButtonItem/MainButtonItem';
import './Main.css';

function Main ({isGameOn, buttonStartHandler, wordButtonHandler, firstWord, secondWord, index, isFinished, correctCount, allCount, incorrectCount}) {
  return (
    isGameOn ? (
      <main className='main'>
        <section className='main__content'>
          <MainButtons 
            wordButtonHandler={wordButtonHandler} 
            firstWord={firstWord} 
            secondWord={secondWord} 
            index={index}
          />

          <MainInfo correctCount={correctCount} allCount={allCount} incorrectCount={incorrectCount}/>
        </section>
      </main>
    ) : isFinished ? (
      <main className='main'>
        <section className='main__content'>
          <WrongsResult words={words} />
          <MainButtonItem buttonHandler={buttonStartHandler} word='Начать заново' classes='main__btn main__btn--start'/>

          <MainInfo correctCount={correctCount} allCount={allCount} incorrectCount={incorrectCount}/>
        </section>
      </main>
    ) : (
      <main className='main'>
        <section className='main__content'>
          <MainButtonItem buttonHandler={buttonStartHandler} word='Начать' classes='main__btn main__btn--start'/>
        </section>
      </main>
    )
  )
}

export default Main;
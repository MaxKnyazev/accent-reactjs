import React, { Component } from 'react';
import './App.css';
import words from '../../data/data';
import { randomSort, delay } from '../../data/utils';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

class App extends Component {
  state = {
    correctCount: 0,
    incorrectCount: 0,
    allCount: words.length,
    firstWord: '',
    secondWord: '',
  };

  isGameOn = false;
  isFinished = false;
  index = 0;
  isAnimated = false;

  randomlySortWords = () => {
    let randomNumber = Math.random();
    this.setState({
      firstWord:
        randomNumber > 0.5
          ? words[this.index].correct
          : words[this.index].incorrect,
      secondWord:
        randomNumber > 0.5
          ? words[this.index].incorrect
          : words[this.index].correct,
    });
  };

  buttonStartHandler = () => {
    this.setState({
      correctCount: 0,
      incorrectCount: 0,
      allCount: words.length,
      firstWord: '',
      secondWord: '',
    });

    this.index = 0;

    randomSort(words);
    words.map((elem) => (elem.madeError = false));

    this.isGameOn = true;
    this.randomlySortWords();
  };

  toggleClassesOnElem = (elem, firstId, secondId, firstClass, secondClass) => {
    elem.children[firstId].classList.toggle(firstClass);
    elem.children[secondId].classList.toggle(secondClass);
  };

  animateButtonChange = async (
    elem,
    firstId,
    secondId,
    firstClass,
    secondClass
  ) => {
    this.toggleClassesOnElem(elem, firstId, secondId, firstClass, secondClass);
    await delay(1000);
    this.toggleClassesOnElem(elem, firstId, secondId, firstClass, secondClass);
  };

  changeOpacityOnElements = (elem, firstId, secondId, opacity) => {
    elem.children[firstId].children[0].style.opacity = opacity;
    elem.children[secondId].children[0].style.opacity = opacity;
  };

  animatedChangeWords = async (
    word,
    idx,
    mainButtonsRef,
    firstElemId,
    secondElemId
  ) => {
    this.isAnimated = true;
    if (words[idx].correct === word) {
      await this.animateButtonChange(
        mainButtonsRef.current,
        firstElemId,
        secondElemId,
        'main__btn--correct',
        'main__btn--incorrect'
      );
    } else {
      await this.animateButtonChange(
        mainButtonsRef.current,
        firstElemId,
        secondElemId,
        'main__btn--incorrect',
        'main__btn--correct'
      );
    }
    this.changeOpacityOnElements(
      mainButtonsRef.current,
      firstElemId,
      secondElemId,
      0
    );
    await delay(250);
    this.randomlySortWords();
    this.changeOpacityOnElements(
      mainButtonsRef.current,
      firstElemId,
      secondElemId,
      1
    );
    this.isAnimated = false;
  };

  changeInfoCount = async (elem, count, sign = '+') => {
    elem.style.opacity = 0;
    await delay(250);
    elem.style.opacity = 1;

    this.setState((prevState) =>
      sign === '+'
        ? {
            [count]: prevState[count] + 1,
          }
        : {
            [count]: prevState[count] - 1,
          }
    );
  };

  animatedChangeInfo = async (word, idx, mainInfoRef) => {
    if (words[idx].correct === word) {
      await this.changeInfoCount(
        mainInfoRef.current.children[0].children[0],
        'correctCount',
        '+'
      );
    } else {
      words[idx].madeError = true;
      await this.changeInfoCount(
        mainInfoRef.current.children[2].children[0],
        'incorrectCount',
        '+'
      );
    }

    if (!this.checkEnd()) {
      await this.changeInfoCount(
        mainInfoRef.current.children[1].children[0],
        'allCount',
        '-'
      );
      this.index += 1;
    }
  };

  wordButtonHandler = (word, idx, mainButtonsRef, mainInfoRef, wordFlag) => {
    if (!this.isAnimated) {
      this.animatedChangeInfo(word, idx, mainInfoRef);

      if (!this.checkEnd()) {
        if (wordFlag === 'first') {
          this.animatedChangeWords(word, idx, mainButtonsRef, 0, 1);
        }

        if (wordFlag === 'second') {
          this.animatedChangeWords(word, idx, mainButtonsRef, 1, 0);
        }
      } else {
        this.isGameOn = false;
        this.isFinished = true;
      }
    }
  };

  checkEnd = () => this.state.allCount === 1;

  render() {
    return (
      <>
        <Header
          correctCount={this.state.correctCount}
          incorrectCount={this.state.incorrectCount}
        />

        <Main
          isGameOn={this.isGameOn}
          wordButtonHandler={this.wordButtonHandler}
          index={this.index}
          {...this.state}
          isFinished={this.isFinished}
          buttonStartHandler={this.buttonStartHandler}
        />

        <Footer />
      </>
    );
  }
}

export default App;

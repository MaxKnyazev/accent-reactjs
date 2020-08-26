import React, { Component } from 'react';
import './App.css';
import allWords from '../../data/data';
import { randomSort, delay } from '../../data/utils';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { ANIMATION_TIME } from '../../data/const';

class App extends Component {
  state = {
    correctCount: 0,
    incorrectCount: 0,
    allCount: 0,
    firstWord: '',
    secondWord: '',
    countOfWords: 10,
  };

  isGameOn = false;
  isFinished = false;
  index = 0;
  isAnimated = false;
  words = [];

  init = () => {
    this.setState({
      correctCount: 0,
      incorrectCount: 0,
      allCount: 0,
      firstWord: '',
      secondWord: '',
      countOfWords: 10,
    });
    this.isGameOn = false;
    this.isFinished = false;
    this.index = 0;
    this.isAnimated = false;
    this.words = [];
  }

  randomlySortWords = () => {
    let randomNumber = Math.random();
    this.setState({
      firstWord:
        randomNumber > 0.5
          ? this.words[this.index].correct
          : this.words[this.index].incorrect,
      secondWord:
        randomNumber > 0.5
          ? this.words[this.index].incorrect
          : this.words[this.index].correct,
    });
  };

  buttonStartHandler = () => {
    console.log(this.state.countOfWords);
    this.words = allWords.slice(0, this.state.countOfWords);
    console.log(this.words);

    this.setState({
      correctCount: 0,
      incorrectCount: 0,
      allCount: this.words.length,
      firstWord: '',
      secondWord: '',
    });

    this.index = 0;

    randomSort(this.words);
    this.words.map((elem) => (elem.madeError = false));

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
    await delay(ANIMATION_TIME * 4);
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
    if (this.words[idx].correct === word) {
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
    await delay(ANIMATION_TIME);
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
    await delay(ANIMATION_TIME);
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
    if (this.words[idx].correct === word) {
      await this.changeInfoCount(
        mainInfoRef.current.children[0].children[0],
        'correctCount',
        '+'
      );
    } else {
      this.words[idx].madeError = true;
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

  addCount = () => {
    this.setState(prevState => {
      if (prevState.countOfWords < 100) {
        return { countOfWords: prevState.countOfWords + 5 }
      }
    });
  }

  subCount = () => {
    this.setState(prevState => {
      if (prevState.countOfWords > 5) {
        return { countOfWords: prevState.countOfWords - 5 }
      }
    });
  }

  render() {
    return (
      <>
        <Header
          correctCount={this.state.correctCount}
          incorrectCount={this.state.incorrectCount}
          init={this.init}
          words={this.words}
        />

        <Main
          isGameOn={this.isGameOn}
          wordButtonHandler={this.wordButtonHandler}
          index={this.index}
          {...this.state}
          isFinished={this.isFinished}
          buttonStartHandler={this.buttonStartHandler}
          addCount={this.addCount}
          subCount={this.subCount}
          words={this.words}
        />

        <Footer />
      </>
    );
  }
}

export default App;

/**
 * change-the-count-of-words
 */
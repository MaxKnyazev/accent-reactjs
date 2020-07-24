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

    let randomNumber = Math.random();
    this.isGameOn = true;
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

  animatedChangeWords = async (word, idx, mainButtonsRef, firstElemId, secondElemId) => {
    let randomNumber = Math.random();
    this.isAnimated = true;
    if (words[idx].correct === word) {
      mainButtonsRef.current.children[firstElemId].classList.toggle('main__btn--correct');
      mainButtonsRef.current.children[secondElemId].classList.toggle('main__btn--incorrect');
      await delay(1000);
      mainButtonsRef.current.children[firstElemId].classList.toggle('main__btn--correct');
      mainButtonsRef.current.children[secondElemId].classList.toggle('main__btn--incorrect');
    } else {
      mainButtonsRef.current.children[firstElemId].classList.toggle('main__btn--incorrect');
      mainButtonsRef.current.children[secondElemId].classList.toggle('main__btn--correct');
      await delay(1000);
      mainButtonsRef.current.children[firstElemId].classList.toggle('main__btn--incorrect');
      mainButtonsRef.current.children[secondElemId].classList.toggle('main__btn--correct');
    }

    mainButtonsRef.current.children[firstElemId].children[0].style.opacity = 0;
    mainButtonsRef.current.children[secondElemId].children[0].style.opacity = 0;

    await delay(250);

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
    mainButtonsRef.current.children[firstElemId].children[0].style.opacity = 1;
    mainButtonsRef.current.children[secondElemId].children[0].style.opacity = 1;
    this.isAnimated = false;
  }

  animatedChangeInfo = async (word, idx, mainInfoRef) => {
    if (words[idx].correct === word) {
      mainInfoRef.current.children[0].children[0].style.opacity = 0;
      console.dir(mainInfoRef.current);
      await delay(250);
      mainInfoRef.current.children[0].children[0].style.opacity = 1;
      this.setState((prevState) => ({
        correctCount: prevState.correctCount + 1,
      }));
    } else {
      mainInfoRef.current.children[2].children[0].style.opacity = 0;
      words[idx].madeError = true;
      await delay(250);
      mainInfoRef.current.children[2].children[0].style.opacity = 1;
      this.setState((prevState) => ({
        incorrectCount: prevState.incorrectCount + 1,
      }));
    }

    if (!this.checkEnd()) {
      mainInfoRef.current.children[1].children[0].style.opacity = 0;
      await delay(250);
      mainInfoRef.current.children[1].children[0].style.opacity = 1;
      this.setState((prevState) => ({
        allCount: prevState.allCount - 1,
      }));
      this.index += 1;
    }
  }

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

import React, { Component } from 'react';
import './App.css';
import words from '../../data/data';
import { randomSort } from '../../data/utils';
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
    console.log('--------Массив Слов---------');
    console.log(words);

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

  wordButtonHandler = (word, idx, mainButtonsRef, wordFlag) => {
    if (!this.isAnimated) {
      if (words[idx].correct === word) {
        console.log('Правильно!');
        this.setState((prevState) => ({
          correctCount: prevState.correctCount + 1,
        }));
      } else {
        words[idx].madeError = true;
        console.log('Неправильно!');
        this.setState((prevState) => ({
          incorrectCount: prevState.incorrectCount + 1,
        }));
      }
  
      this.setState((prevState) => ({
        allCount: prevState.allCount - 1,
      }));
      this.index += 1;
      console.log(this.state.allCount);
  
      if (!this.checkEnd()) {
        let randomNumber = Math.random();

        if (wordFlag === 'first') {
          this.isAnimated = true;
          if (words[idx].correct === word) {
            mainButtonsRef.current.children[0].classList.toggle('main__btn--correct');
            mainButtonsRef.current.children[1].classList.toggle('main__btn--incorrect');
          } else {
            mainButtonsRef.current.children[0].classList.toggle('main__btn--incorrect');
            mainButtonsRef.current.children[1].classList.toggle('main__btn--correct');
          }
          setTimeout(() => {
            if (words[idx].correct === word) {
              mainButtonsRef.current.children[0].classList.toggle('main__btn--correct');
              mainButtonsRef.current.children[1].classList.toggle('main__btn--incorrect');
            } else {
              mainButtonsRef.current.children[0].classList.toggle('main__btn--incorrect');
              mainButtonsRef.current.children[1].classList.toggle('main__btn--correct');
            }

            mainButtonsRef.current.children[0].children[0].style.opacity = 0;
            mainButtonsRef.current.children[1].children[0].style.opacity = 0;

            setTimeout(() => {
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
              mainButtonsRef.current.children[0].children[0].style.opacity = 1;
              mainButtonsRef.current.children[1].children[0].style.opacity = 1;
              this.isAnimated = false;
            }, 250)
          }, 1000)
        }

        if (wordFlag === 'second') {
          this.isAnimated = true;
          if (words[idx].correct === word) {
            mainButtonsRef.current.children[1].classList.toggle('main__btn--correct');
            mainButtonsRef.current.children[0].classList.toggle('main__btn--incorrect');
          } else {
            mainButtonsRef.current.children[1].classList.toggle('main__btn--incorrect');
            mainButtonsRef.current.children[0].classList.toggle('main__btn--correct');
          }
          setTimeout(() => {
            if (words[idx].correct === word) {
              mainButtonsRef.current.children[1].classList.toggle('main__btn--correct');
              mainButtonsRef.current.children[0].classList.toggle('main__btn--incorrect');
            } else {
              mainButtonsRef.current.children[1].classList.toggle('main__btn--incorrect');
              mainButtonsRef.current.children[0].classList.toggle('main__btn--correct');
            }

            setTimeout(() => {
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
              this.isAnimated = false;
            }, 250)
          }, 1000)
        }

      } else {
        console.log('Конец игры');
        console.log(words);
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

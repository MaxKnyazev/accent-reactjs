import React, { Component } from 'react';
import './App.css';
import words from '../data/data';
import { randomSort } from '../data/utils';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

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

  wordButtonHandler = (word, idx) => {
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
    } else {
      console.log('Конец игры');
      console.log(words);
      this.isGameOn = false;
      this.isFinished = true;
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

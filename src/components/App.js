import React, { Component } from 'react';
import './App.css';
import GithubIcon from '../svg/GithubIcon';
import VkIcon from '../svg/VkIcon';
import words from '../data/data';
import { randomSort } from '../data/utils';

function WrongsResult({ words }) {
  let wrongWords = words
    .filter((elem) => elem.madeError === true)
    .map((elem) => (
      <li key={elem.id} className='main__wrongsItem'>
        <span className='main__itemCorrect'>{elem.correct}</span>
        <span className='main__itemSeparator'>-</span>
        <span className='main__itemIncorrect'>{elem.incorrect}</span>
      </li>
    ));

  return wrongWords.length ? (
    <div className='main__showWrongs'>
      <ul className='main__wrongsList'>
        <li className='main__wrongsItem'><h2 className='main__unsuccessMessage'>Ваши ошибки:</h2></li>
        {wrongWords}
      </ul>
    </div>
  ) : (
    <h2 className='main__successMessage'>Ошибок нет</h2>
  );
}

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
        <header className='header'>
          <div
            style={{
              width: `${this.state.correctCount * (100 / words.length)}vw`,
            }}
            className='progress progress--correct'
          ></div>

          <div className='logo'>
            <h1 className='logo__title'>Accent</h1>
          </div>

          <div
            style={{
              width: `${this.state.incorrectCount * (100 / words.length)}vw`,
            }}
            className='progress progress--incorrect'
          ></div>

          <div className='icons'>
            <GithubIcon />
            <VkIcon />
          </div>
        </header>

        {this.isGameOn ? (
          <main className='main'>
            <section className='main__content'>
              <div className='main__buttons'>
                <span
                  onClick={() => {
                    this.wordButtonHandler(this.state.firstWord, this.index);
                  }}
                  className='main__btn'
                >
                  {this.state.firstWord}
                </span>
                <span
                  onClick={() => {
                    this.wordButtonHandler(this.state.secondWord, this.index);
                  }}
                  className='main__btn'
                >
                  {this.state.secondWord}
                </span>
              </div>

              <div className='main__levels'>
                <span className='main__info main__info--correct'>
                  {this.state.correctCount}
                </span>
                <span className='main__info main__info--all'>
                  {this.state.allCount}
                </span>
                <span className='main__info main__info--incorrect'>
                  {this.state.incorrectCount}
                </span>
              </div>
            </section>
          </main>
        ) : this.isFinished ? (
          <main className='main'>
            <section className='main__content'>
              <WrongsResult words={words} />
              <span
                onClick={this.buttonStartHandler}
                className='main__btn main__btn--start'
              >
                Начать заново
              </span>

              <div className='main__levels'>
                <span className='main__info main__info--correct'>
                  {this.state.correctCount}
                </span>
                <span className='main__info main__info--all'>
                  {this.state.allCount}
                </span>
                <span className='main__info main__info--incorrect'>
                  {this.state.incorrectCount}
                </span>
              </div>
            </section>
          </main>
        ) : (
          <main className='main'>
            <section className='main__content'>
              <span
                onClick={this.buttonStartHandler}
                className='main__btn main__btn--start'
              >
                Начать
              </span>
            </section>
          </main>
        )}

        <footer className='footer'>
          <span className='footer__copyright'>
            Max Knyazev <br /> copyright &copy; 2020
          </span>
        </footer>
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import GithubIcon from '../svg/GithubIcon';
import VkIcon from '../svg/VkIcon';
import words from '../data/data';
import {randomSort} from '../data/utils';

class App extends Component {
  state = {
    isGameOn: false,
    correctCount: 2,
    incorrectCount: 3,
    allCount: words.length,
    firstWord: '',
    secondWord: '',
  }

  buttonStartHandler = () => {
    randomSort(words);
    console.log('--------Массив Слов---------');
    console.log(words);

    let randomNumber = Math.random();
    this.setState({
      isGameOn: true,
      firstWord: randomNumber > 0.5 ? words[0].correct : words[0].incorrect,
      secondWord: randomNumber > 0.5 ? words[0].incorrect : words[0].correct, 
    })
  }

  render() {
    
    return (
      <>
        <header className='header'>
          <div style={{width: `${this.state.correctCount * (100 / words.length)}vw`}} className='progress progress--correct'></div>

          <div className='logo'>
            <h1 className='logo__title'>Accent</h1>
          </div>

          <div style={{width: `${this.state.incorrectCount * (100 / words.length)}vw`}} className='progress progress--incorrect'></div>

          <div className='icons'>
            <GithubIcon />
            <VkIcon />
          </div>
        </header>

        {this.state.isGameOn ?       
        <main className='main'>
          <section className='main__content'>
            <div className='main__buttons'>
              <span className='main__btn'>{this.state.firstWord}</span>
              <span className='main__btn'>{this.state.secondWord}</span>
            </div>

            <div className='main__levels'>
              <span className='main__info main__info--correct'>{this.state.correctCount}</span>
              <span className='main__info main__info--all'>{this.state.allCount}</span>
              <span className='main__info main__info--incorrect'>{this.state.incorrectCount}</span>
            </div>
          </section>
        </main>
        :
        <main className='main'>
          <section className='main__content'>
            <span onClick={this.buttonStartHandler} className='main__btn main__btn--start'>Начать</span>
          </section>
        </main>
        }

        <footer className='footer'>
          <span className='footer__copyright'>
            Max Knyazev <br /> copyright &copy; 2020
          </span>
        </footer>
      </>
    )
  }
}

export default App;

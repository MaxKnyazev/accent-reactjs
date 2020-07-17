import React, { Component } from 'react';
import './App.css';
import GithubIcon from './svg/GithubIcon';
import VkIcon from './svg/VkIcon';

class App extends Component {
  state = {
    isGameOn: false,
  }

  buttonStartHandler = () => {
    this.setState({
      isGameOn: true,
    })
  }

  render() {
    
    return (
      <>
        <header className='header'>
          <div className='progress progress--correct'></div>

          <div className='logo'>
            <h1 className='logo__title'>Accent</h1>
          </div>

          <div className='progress progress--incorrect'></div>

          <div className='icons'>
            <GithubIcon />
            <VkIcon />
          </div>
        </header>

        {this.state.isGameOn ?       
        <main className='main'>
          <section className='main__content'>
            <div className='main__buttons'>
              <span className='main__btn'>красивЕе</span>
              <span className='main__btn'>красИвее</span>
            </div>

            <div className='main__levels'>
              <span className='main__info main__info--correct'>10</span>
              <span className='main__info main__info--all'>100</span>
              <span className='main__info main__info--incorrect'>90</span>
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

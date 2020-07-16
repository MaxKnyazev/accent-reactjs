import React from 'react';
import './App.css';
import GithubIcon from './svg/GithubIcon';
import VkIcon from './svg/VkIcon';


function App() {
  return (
  <>
  <header className="header">
    <div className="progress progress--correct"></div>

    <div className="logo">
      <h1 className="logo__title">Accent</h1>
    </div>
    

    <div className="progress progress--incorrect"></div>

    <div className="icons">
      <GithubIcon />
      <VkIcon />
    </div>
  </header>

  <main className="main">
    <section className="main__content">
      <div className="main__buttons">
        <span className="main__btn">красивЕе</span>
        <span className="main__btn">красИвее</span>
      </div>

      <div className="main__levels">
        <span className="main__info main__info--correct">10</span>
        <span className="main__info main__info--all">100</span>
        <span className="main__info main__info--incorrect">90</span>
      </div>
    </section>
  </main>

  <footer className="footer">
    <span className="footer__copyright">Max Knyazev <br /> copyright &copy; 2020</span>
  </footer>
  </>
  );
}

export default App;

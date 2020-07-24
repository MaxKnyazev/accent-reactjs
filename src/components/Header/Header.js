import React from 'react';
import GithubIcon from '../../svg/GithubIcon';
import VkIcon from '../../svg/VkIcon';
import ProgressBar from '../ProgressBar/ProogressBar';
import words from '../../data/data';
import './Header.css';
import AccentLogo from '../../svg/AccentLogo';

function Header ({correctCount, incorrectCount}) {
  return (
    <header className='header'>
    <ProgressBar count={correctCount} words={words} classes='progress--correct'/>

    <div className='logo'>
      <h1 className='logo__title'>Accent</h1>
    </div>

    <ProgressBar count={incorrectCount} words={words} classes='progress--incorrect'/>
    <div className='icons'>
      <GithubIcon />
      <VkIcon />
    </div>
  </header>
  )
}

export default Header;
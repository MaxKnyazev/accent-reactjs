import React from 'react';
import GithubIcon from '../svg/GithubIcon';
import VkIcon from '../svg/VkIcon';
import ProgressBar from './ProogressBar';
import words from '../data/data';

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
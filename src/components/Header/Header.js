import React from 'react';
import GithubIcon from '../../svg/GithubIcon';
import VkIcon from '../../svg/VkIcon';
import ProgressBar from '../ProgressBar/ProogressBar';
import './Header.css';
import AccentLogo from '../../svg/AccentLogo';

function Header ({correctCount, incorrectCount}) {
  return (
    <header className='header'>
    <div className='logo--accent'>
      <AccentLogo />
    </div>
    <ProgressBar count={correctCount} classes='progress--correct'/>

    <div className='logo'>
      <h1 className='logo__title'>Accent</h1>
    </div>

    <ProgressBar count={incorrectCount} classes='progress--incorrect'/>
    <div className='icons'>
      <GithubIcon />
      <VkIcon />
    </div>
  </header>
  )
}

export default Header;
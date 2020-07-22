import React from 'react';
import './MainInfo.css';

function MainInfo({ correctCount, allCount, incorrectCount, mainInfoRef }) {
  return (
    <div ref={mainInfoRef} className='main__levels'>
      <span className='main__info main__info--correct'><span className='main__infoInside'>{correctCount}</span></span>
      <span className='main__info main__info--all'><span className='main__infoInside'>{allCount}</span></span>
      <span className='main__info main__info--incorrect'><span className='main__infoInside'>{incorrectCount}</span></span>
    </div>
  );
}

export default MainInfo;

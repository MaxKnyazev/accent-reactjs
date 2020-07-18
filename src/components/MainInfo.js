import React from 'react';

function MainInfo({ correctCount, allCount, incorrectCount }) {
  return (
    <div className='main__levels'>
      <span className='main__info main__info--correct'>{correctCount}</span>
      <span className='main__info main__info--all'>{allCount}</span>
      <span className='main__info main__info--incorrect'>{incorrectCount}</span>
    </div>
  );
}

export default MainInfo;

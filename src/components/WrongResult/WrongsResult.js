import React from 'react';
import './WrongsResult.css';

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

export default WrongsResult;
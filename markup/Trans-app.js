import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
// import { Button } from 'react-bootstrap';
import './App.css';

const TestButton = (props) => {
  let resultCheckWord = Math.random() > 0.5;
  let classes = 'btn';
  classes += resultCheckWord ? ' btn--correct' : ' btn--incorrect';

  return (
    <button className={classes} onClick={props.clickHandler}>
      {props.word}
    </button>
  );
};

const arr = [
    { madeError: false, id: 0, correct: 'цепОчка', incorrect: 'цЕпочка'}, 
    { madeError: false, id: 1, correct: 'щавЕль', incorrect: 'щАвель'}, 
    { madeError: false, id: 2, correct: 'баловАть', incorrect: 'бАловать'}, 
    { madeError: false, id: 3, correct: 'опломбировАть', incorrect: 'опломбИровать'},
    { madeError: false, id: 4, correct: 'Искра', incorrect: 'искрА'}, 
    { madeError: false, id: 5, correct: 'чЕрпать', incorrect: 'черпАть'},
    { madeError: false, id: 6, correct: 'наделИт', incorrect: 'надЕлит'}, 
    { madeError: false, id: 7, correct: 'сирОты', incorrect: 'сИроты'},
    { madeError: false, id: 8, correct: 'тОрты', incorrect: 'тортЫ'}, 
    { madeError: false, id: 9, correct: 'клАла', incorrect: 'клалА'}
];

export default function App() {
  // const [title, setTitle] = React.useState(true);
  const [indexArr, setIndexArr] = React.useState(1);
  const [firstWord, setFirstWord] = React.useState(arr[0].correct);
  const [secondWord, setSecondWord] = React.useState(arr[0].incorrect);

  const handleTestButtonClick = () => {
    setIndexArr((idx) => indexArr + 1);
    setFirstWord((word) => arr[indexArr].correct);
    setSecondWord((word) => arr[indexArr].incorrect);
    
    // setFirstWord((word) => 'клАла' + Math.random());
    // setSecondWord((word) => 'клалА' + Math.random());
    // setTitle(title => !title)

    console.log('click');
    console.log(indexArr);
  };

  return (
    <>
      <div className='main'>
        <SwitchTransition>
          <CSSTransition
            key={firstWord}
            addEndListener={(node, done) => {
              node.addEventListener('transitionend', done, false);
            }}
            classNames='fade'
          >
            <div className='button-container'>
              <TestButton
                word={firstWord}
                clickHandler={handleTestButtonClick}
              />
            </div>
          </CSSTransition>
        </SwitchTransition>

        <SwitchTransition>
          <CSSTransition
            key={secondWord}
            addEndListener={(node, done) => {
              node.addEventListener('transitionend', done, false);
            }}
            classNames='fade'
          >
            <div className='button-container'>
              <TestButton
                word={secondWord}
                clickHandler={handleTestButtonClick}
              />
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
}

/***
 * TODO : обернуть каждую кнопку в CSSTransition
 * с отдельной настройкой
 *  key={title}
 * или
 *  key={firstWord}
 * ***************************************РЕШЕНО
 * 
 * TODO : 
 * 1) помещать слова в кнопки случайным образом
 * 2) при нажатии на кнопку сделать проверку на правильность
 * 3) исправить ошибку в консоли, связанную с окончанием массива
 * 
 * 
 *               <Button
                className={classes}
                onClick={() => {
                  classes += 'btn--correct';
                  setTitle(title => !title);
                  console.log(classes)
                  }
                }
              >
                {title ? '1111111' : '3333333'}
              </Button>

              <Button
                className='btn--incorrect'
                onClick={() => setTitle(title => !title)}
              >
                {title ? '2222222' : '4444444'}
              </Button>


 *
 */

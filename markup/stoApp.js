import React, { Component } from 'react';
import './App.css';

class App extends Component {
  clickHandler = (e) => {
    this.buttonRef.current.classList.toggle('correct');
    setTimeout(() => {
      this.buttonRef.current.classList.toggle('correct');
      this.buttonRef.current.children[0].style.opacity = 0;
      setTimeout(() => {
        this.setState({
          text: 'Button'
        })
        this.buttonRef.current.children[0].style.opacity = 1;
      }, 500)
      // console.dir(this.buttonRef.current)
    }, 1500)
  }

  state = {
    text: 'Кнопка',
  }

  count = 0;

  buttonRef = React.createRef();

  render () {
    return (
      <div className="App">
        <span ref={this.buttonRef} onClick={this.clickHandler} className="button"><h2>{this.state.text}</h2></span>
      </div>
    );
  }
}

export default App;

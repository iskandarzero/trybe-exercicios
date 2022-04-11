import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

    this.state = {
      color1: 'odd',
      counter1: 0,
      color2: 'odd',
      counter2: 0,
      color3: 'odd',
      counter3: 0,
    }
  }
  handleClick1() {
    console.log('banana');
    console.log(this.evenOdd(this.state.counter1));
    this.setState((estadoAtual, _props) => ({
      counter1: estadoAtual.counter1 + 1
    }))
    this.setState(() => ({
      color1: this.evenOdd(this.state.counter1)
    }))
  }
  handleClick2() {
    console.log('uva');
    this.evenOdd(this.state.counter2)
    this.setState((estadoAtual, _props) => ({
      counter2: estadoAtual.counter2 + 1
    }))
    this.setState(() => ({
      color2: this.evenOdd(this.state.counter2)
    }))
  }
  handleClick3() {
    console.log('maçã');
    this.evenOdd(this.state.counter3)
    this.setState((estadoAtual, _props) => ({
      counter3: estadoAtual.counter3 + 1
    }))
    this.setState(() => ({
      color3: this.evenOdd(this.state.counter3)
    }))
  } 

  evenOdd(num) {
    return (num + 1) % 2 === 0 ? 'green' : 'white';
  }

  render() {
    return (
      <div className='botoes'>
        <button className={this.state.color1} onClick={this.handleClick1}>{this.state.counter1}</button>
        <button className={this.state.color2} onClick={this.handleClick2}>{this.state.counter2}</button>
        <button className={this.state.color3} onClick={this.handleClick3}>{this.state.counter3}</button>
      </div>
    );
  }
}

export default App;

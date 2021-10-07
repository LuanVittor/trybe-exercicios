import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
    this.clearButton = this.clearButton.bind(this)
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
  }

  handleClick() {
    this.setState(({ numeroDeCliques }) => ({
      numeroDeCliques: numeroDeCliques + 1
    }))
  }
  handleClick2() {
    this.setState(({ numeroDeCliques2 }) => ({
      numeroDeCliques2: numeroDeCliques2 + 1
    }))
  }
  // maneira q eu entendi melhor
  handleClick3() {
    this.setState(({ numeroAnterior, _props }) => ({
      numeroDeCliques3: numeroAnterior.numeroDeCliques3 + 1
    }))
  }

  isEven(numero) {
    return numero % 2 === 0 ? 'green' : 'pink'
  }

  clearButton() {
    this.setState({
      numeroDeCliques: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    })
  }
  render() {
    console.log(this)
    const {numeroDeCliques, numeroDeCliques2, numeroDeCliques3} = this.state;
    return (
      <div>
        <button onClick={this.handleClick} style={{backgroundColor: this.isEven(numeroDeCliques)}}>Click para clicar</button>
        <button onClick={this.handleClick2} style={{backgroundColor: this.isEven(numeroDeCliques2)}}>Click para clicar</button>
        <button onClick={this.handleClick3} style={{backgroundColor: this.isEven(numeroDeCliques3)}}>Click para clicar</button>
        <button onClick={this.clearButton}>Click para Limpar</button>
    
      </div>
    );
  }
}

export default App;

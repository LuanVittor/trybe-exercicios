import React from "react";
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      name:'',
      dogName: [],
    };
    this.fetchDog = this.fetchDog.bind(this);
    this.addName = this.addName.bind(this);
  }

  addName() {
    const { dogName, name } = this.state
    dogName.push(name)
    this.setState({})
  }

  componentDidMount() {
    this.fetchDog();
  }

  fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(result => this.setState({ data: result }));
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.data.message.includes("terrier")) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    localStorage.setItem("image", this.state.data.message);
    localStorage.setItem("dog", this.state.dogName);
    const dogBreed = this.state.data.message.split("/")[4];
    // alert(dogBreed);
  }

  render() {
    if (this.state.data === "") return "loading...";
    return (
      <div>
        <p>Dogs</p>
        <button onClick={this.fetchDog}>New dog!</button>
        <input value={ this.state.name } onChange={ e => this.setState({ name: e.target.value }) } placeholder="nome do dog" />
        <button onClick={ this.addName }>Salvar</button>
        <div>
          <img src={this.state.data.message} alt="cachorro" />
        </div>
      </div>
    );
  }
}

export default App;
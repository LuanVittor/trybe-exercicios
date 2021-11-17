import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      idade: '',
      email: '',
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
  
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

    render(){
      const { redirect } = this.state
      const { logado } = this.props;
      if (redirect) {
        return <Redirect to="/login" />
      }
      if (!logado) {
        return (
        <div>
        <h1>Voce deve fazer login para continuar!</h1> 
        <button onClick={ () => this.setState({ redirect: true }) }>Fazer login!</button>
        </div>
        )
      } 
      return(
        <fieldset>
          <label htmlFor='nome'>
            Nome:
            <input
            type="text"
            name="nome"
            onChange={ this.handleChange }
             />
          </label>
          <label htmlFor='email'>
            Email:
            <input
            type="email"
            name="email"
            onChange={ this.handleChange }
            />
          </label>
          <label htmlFor='idade'>
            Idade:
            <input
            type="text"
            idade="idade"
            onChange={ this.handleChange }
            />
          </label>
          <button type="button">Cadastrar</button>
        </fieldset>
      )
    }
}

const mapStateToProps = (state) => ({
  logado: state.logado,
})

export default connect(mapStateToProps, null)(Registration);

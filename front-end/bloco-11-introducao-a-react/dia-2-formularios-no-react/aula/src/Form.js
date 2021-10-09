import React from 'react';
import TextArea from './EstadoFav';
import Input from './Input';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      estadoFav: '',
      nome: '',
      email: '',
      genero: '',
      brasileiro: '',
      foto: '',
    }
    this.forms = this.forms.bind(this)
  }

  forms({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <h1>Estados e React</h1>
        <form>
          <fieldset>
            <Input type="text" text="Seu Nome: " name="nome" value={this.state.nome} form={this.forms} />
            <Input type="text" text="Seu email: " name="email" value={this.state.email} form={this.forms} />
          </fieldset>
          <fieldset>
            <Input type="checkbox" text="Mora no Brasil?" name="brasileiro" value={this.state.brasileiro} form={this.forms} />
          </fieldset>
            <fieldset>
              <Input type="file" text="Anexe uma foto sua: " name="foto" value={this.state.foto} form={this.forms} />
            </fieldset>
            <fieldset>
              <TextArea type="text" text="Estado Favorito: " name="estadoFav" value={this.state.estadoFav} form={this.forms} />
            </fieldset>
            <fieldset>
              <label>seu genero: </label>
              <select name="genero" value={this.state.genero} form={this.forms}>
                <option>Selecione</option>
                <option>Masculino</option>
                <option>Feminino</option>
                <option>Prefiro nao dizer</option>
              </select>
            </fieldset>
        </form >
      </div >
    )
  }
}

export default Form
import React from 'react'
import FillForm from './FillForm'
import Estados from './Estados'
import CasaAp from './CasaAp'
import LastJob from './LastJob'

class FieldSet extends React.Component {
  constructor() {
    super()
    this.form = this.form.bind(this)
    this.upperName = this.upperName.bind(this)
    this.clear = this.clear.bind(this)

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      curriculo: '',
      cargo: '',
      descricaoCargo: '',
    }
  }

  form({ target }) {
    const { name, value } = target
    this.setState({ [name]: value })
  }

  upperName({ target }) {
    this.setState({ nome: target.value.toUpperCase() });
  }

  clear() {
    this.setState({
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      curriculo: '',
      cargo: '',
      descricaoCargo: '',
    })
  }

  render() {
    return (
      <div>
        <fieldset>
          <FillForm type="text" text="Nome: " maxLength="40" name="nome" value={this.state.nome} onChange={this.upperName} />
          <FillForm type="text" text="Email: " maxLength="50" name="email" value={this.state.email} onChange={this.form} />
          <FillForm type="text" text="CPF: " maxLength="11" name="cpf" value={this.state.cpf} onChange={this.form} />
          <FillForm type="text" text="Endereco: " maxLength="200" name="endereco" value={this.state.endereco} onChange={this.form} />
          <FillForm type="text" text="Cidade: " maxLength="28" name="cidade" value={this.state.cidade} onChange={this.form} />
          <Estados value={this.state.estado} onChange={this.form} />
          <CasaAp type="radio" options={['Casa', 'Ap']} value={this.state.tipo} onChange={this.form} />
        </fieldset>
        <fieldset>
          <LastJob text="Resumo do Curriculo: " maxLength="1000" name="curriculo" value={this.state.curriculo} onChange={this.form} />
          <LastJob text="Cargo: " maxLength="40" name="cargo" value={this.state.cargo} onChange={this.form} />
          <LastJob text="Descricao do Cargo: " maxLength="500" name="descricaoCargo" value={this.state.descricaoCargo} onChange={this.form} />
        </fieldset>
        <div>
          <button onClick={this.submit}>Geras Informacoes</button>
          <button onClick={this.clear}>Limpar</button>
        </div>
      </div>

    )
  }
}

export default FieldSet
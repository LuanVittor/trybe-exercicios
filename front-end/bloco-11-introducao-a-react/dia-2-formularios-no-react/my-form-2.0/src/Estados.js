import React from "react";

class Estados extends React.Component {
  render() {
    const estados = [ 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
    const { value, onChange } = this.props
    return(
      <div>
        <select text="Estado: "  name="estado" value={value} onChange={onChange} required >
          {estados.map((element) => (<option key={element}>{element}</option>))}
        </select>
      </div>
    )
  }
}

export default Estados
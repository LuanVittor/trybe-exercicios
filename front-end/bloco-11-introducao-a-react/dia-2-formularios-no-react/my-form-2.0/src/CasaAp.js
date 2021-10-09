import React from 'react'

class CasaAp extends React.Component {
  render() {
    const { options, type, onChange } = this.props
    let { value } = this.props
    return(
      <div>
        {options.map((element) => (<label>{element}<input value={value = element} type={type} text={element} id={element} name={"tipo"} onChange={onChange} required /></label>))}
      </div>
    )
  }
}

export default CasaAp
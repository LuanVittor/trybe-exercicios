import React from 'react'

class FillForm extends React.Component {
  render() {
    const { text, type, maxLength, name, value, onChange } = this.props
    return (
      <label>{text}
        <input type={type} maxLength={maxLength} name={name} value={value} onChange={onChange} required />
      </label>
    )
  }
}

export default FillForm
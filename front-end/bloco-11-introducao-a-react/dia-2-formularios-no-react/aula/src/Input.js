import React from "react";

class Input extends React.Component {
  render() {
    const { value, form, text, name, type } = this.props
    return (
        <label>{text}
          <input type={type} name={name} value={value} onChange={form} />
        </label>
    )
  }
}

export default Input
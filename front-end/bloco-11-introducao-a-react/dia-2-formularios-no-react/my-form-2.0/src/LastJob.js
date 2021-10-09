import React from "react";

class LastJob extends React.Component {
  render() {
    const { text, maxLength, name, value, onChange } = this.props
    return(
      <label> {text}
        <textarea maxLength={maxLength} name={name} value={value} onChange={onChange} required />
      </label>
    )
  }
}

export default LastJob
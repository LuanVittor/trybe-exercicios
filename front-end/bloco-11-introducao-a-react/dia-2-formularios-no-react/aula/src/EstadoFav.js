import React from "react";

class TextArea extends React.Component {
  render() {
    const { value, form, text, name } = this.props
    return (
      <div>

        <label>{text}
          <textarea name={name} value={value} onChange={form} />
        </label>

      </div>
    )
  }
}

export default TextArea
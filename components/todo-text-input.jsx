"use strict"

var React = require('react')

class TodoTextInput extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleSubmit (e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      this.setState({ text: '' });
    }
  }

  handleChange (e) {
    this.setState({ text: e.target.value });
  }

  render () {
    return (
      <input
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }
}

TodoTextInput.propTypes = {
  onSave: React.PropTypes.func.isRequired,
  text: React.PropTypes.string,
  placeholder: React.PropTypes.string,
}

module.exports = TodoTextInput

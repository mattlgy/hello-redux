"use strict"

var React = require('react')

class TodoList extends React.Component {
  render () {
    var { todos } = this.props
    return (
      <ul>
        {todos.map((todo) =>
          <li key={todo.id}>{todo.text}</li>
        )}
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
  })).isRequired
}

module.exports = TodoList

"use strict"

require('isomorphic-fetch')
var React = require('react/addons')
var connect = require('react-redux').connect
var actions = require('../actions')

var TodoTextInput = require('./todo-text-input.jsx')
var TodoList = require('./todo-list.jsx')

class App extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.dispatch = props.dispatch
  }

  addTodo (text) {
    this.dispatch((dispatch => {

    }))
  }

  render () {
    // Injected by connect() call:
    var { todos } = this.props
    return (
      <div>
        <TodoTextInput newTodo
          onSave={ (text) => this.dispatch(actions.todoNew(text)) }
          placeholder="What needs to be done?"
        />
        <TodoList todos={ todos } />
      </div>
    )
  }
}
App.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
  })).isRequired
}

function select (state) {
  return {
    todos: state.todos
  }
}

module.exports = connect(select)(App)

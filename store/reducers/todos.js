"use strict"

const initialState = [];

module.exports =  function todos (state = initialState, action) {
  switch (action.type) {
  case 'TODO_ADD':
    return [...state, action.todo]

  default:
    return state;
  }
}

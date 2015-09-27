"use strict"

var { combineReducers } = require('redux')
var todos = require('./todos')

const rootReducer = combineReducers({
  todos
})

module.exports = rootReducer

"use strict"

var React = require("react")
var Store = require("./store")
var App = require("./components/app.jsx")
var Provider = require('react-redux').Provider

// var initialState = null
// if (window.__INITIAL_STATE__)

const store = Store(window.__INITIAL_STATE__)
window.store = store

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>
, document.getElementById('app'))

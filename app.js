"use strict"

var React = require("react")
var Store = require("./store")
var App = require("./components/app.jsx")
var Provider = require('react-redux').Provider

const store = Store(window.__INITIAL_STATE__)

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>
, document.getElementById('app'))

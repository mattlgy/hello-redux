"use strict"

var React = require('react')
var Provider = require('react-redux').Provider

var App = require('./components/app.jsx')
var Store = require('./store')

module.exports =  function (initialState) {
  const store = Store(initialState);

  // Render the component to a string
  const html = React.renderToString(
    <Provider store={store}>
      {() => <App />}
    </Provider>
  );

  // Grab the initial state from our Redux store
  const state = store.getState();

  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(state)};
        </script>
        <script src="/hello-redux.js"></script>
      </body>
    </html>
    `
}

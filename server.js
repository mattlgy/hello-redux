"use strict"

var express = require('express')
var port = 3000

var app = new express()
app.use(express.static('static'))
app.use(require('body-parser').json())

var renderApp = require('./render-app.jsx')

var todos = []
app.get("/", function (req, res) {
  const html = renderApp({
    todos
  })
  res.send(html);
})
app.post('/todos', function (req, res) {
  var newTodo = {
    id: todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 0) + 1,
    text: req.body.text,
    completed: req.body.completed
  }

  todos.push(newTodo)
  res.json(newTodo)
})

app.listen(port, function(error) {
  if (error) return console.error(error)
  console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
})

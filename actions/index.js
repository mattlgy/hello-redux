function todoNew (text) {
  return function (dispatch) {
    fetch('/todos', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text,
        completed: false,
      })
    }).then((res) =>
      res.json()
    ).then((todo) => {
      dispatch(todoAdd(todo))
    })
  }
}

function todoAdd (todo) {
  return {
    type: 'TODO_ADD',
    todo
  }
}

module.exports = {
  todoNew,
  todoAdd
}

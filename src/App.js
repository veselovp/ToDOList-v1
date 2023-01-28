import './App.css'
import TodoList from './components/Todos/todoList'
import TodoForm from './components/Todos/todoForm'
import { useState } from 'react'

function App(text) {
  const [todos, setTodo] = useState([])

  const addButtonHandler = (text) => {
    setTodo([...todos, text])
  }

  const deleteButtonHandler = (index) => {
    setTodo(todos.filter((_, idx) => idx !== index))
  }

  return (
    <div className="App">
      <h1>This is TODO App</h1>
      <TodoForm addTodo={addButtonHandler} />
      <TodoList todos={todos} deleteTodo={deleteButtonHandler} />
    </div>
  )
}

export default App

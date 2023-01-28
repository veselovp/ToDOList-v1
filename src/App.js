import './App.css'
import TodoList from './components/Todos/todoList'
import TodoForm from './components/Todos/todoForm'
import { useState } from 'react'
//dobavlajem unikaljnij id ->
import { v4 as uuidv4 } from 'uuid'

function App(text) {
  const [todos, setTodo] = useState([])

  const addButtonHandler = (text) => {
    const newText = {
      id: uuidv4(),
      text: text,
      complieted: false,
    }
    console.log(newText)
    setTodo([...todos, newText])
  }

  const deleteButtonHandler = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id))
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

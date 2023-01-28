import { useState } from 'react'
import styles from '../Todos/todoForm.module.css'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit"> add todo </button>
      </form>
    </div>
  )
}

export default TodoForm

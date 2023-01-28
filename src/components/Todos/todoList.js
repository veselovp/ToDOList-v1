import Todo from './todo'
import styles from '../Todos/todoList.module.css'

function TodoList(props) {
  const { todos, deleteTodo, toggle } = props
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>todoes is empty</h2>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          del={deleteTodo}
          toggle={toggle}
        />
      ))}
    </div>
  )
}

export default TodoList

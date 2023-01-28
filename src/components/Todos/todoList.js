import Todo from './todo'
import styles from '../Todos/todoList.module.css'

function TodoList(props) {
  const { todos, deleteTodo } = props
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>todoes is empty</h2>}
      {todos.map((todo) => (
        <Todo clasName key={todo.id} todo={todo} del={deleteTodo} />
      ))}
    </div>
  )
}

export default TodoList

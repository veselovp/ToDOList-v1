import Todo from './todo'
import styles from '../Todos/todoList.module.css'

function TodoList(props) {
  const { todos, deleteTodo } = props
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>todoes is empty</h2>}
      {todos.map((item, value) => (
        <Todo clasName key={value} todo={item} index={value} del={deleteTodo} />
      ))}
    </div>
  )
}

export default TodoList

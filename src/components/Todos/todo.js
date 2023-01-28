import { FaBeer } from 'react-icons/fa'
import styles from '../Todos/todo.module.css'

function Todo(props) {
  const { key, todo, del } = props
  return (
    <div className={styles.todo} onDoubleClick={() => del(todo.id)}>
      <FaBeer className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
    </div>
  )
}

export default Todo

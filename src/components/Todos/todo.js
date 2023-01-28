import { FaBeer, FaCheck, FaEdit } from 'react-icons/fa'
import styles from '../Todos/todo.module.css'

function Todo(props) {
  const { key, todo, del } = props
  return (
    <div className={styles.todo}>
      <FaBeer className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <FaEdit className={styles.deleteIcon} onClick={() => del(todo.id)} />
      <FaCheck className={styles.checkIcon} />
    </div>
  )
}

export default Todo

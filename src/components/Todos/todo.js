import { FaBeer } from 'react-icons/fa'
import styles from '../Todos/todo.module.css'

function Todo(props) {
  const { key, todo, index, del } = props
  return (
    <div className={styles.todo} onDoubleClick={() => del(index)}>
      <FaBeer className={styles.todoIcon} />
      <div className={styles.todoText}>
        {key}
        {todo}
      </div>
    </div>
  )
}

export default Todo

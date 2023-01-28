import Button from '../UI/button'
import { FaBeer, FaEdit } from 'react-icons/fa'

function TodoAction({ deleteAllTodo, deleteAllCompleted , complietedTodo }) {
  return (
    <>
      {/* //vstavlaju ikonki v knopki potomuchto estj 
      children  */}
      <Button title="reset todos" onClick={deleteAllTodo}>
        <FaBeer />
      </Button>

      <Button title="complitly delete" onClick={deleteAllCompleted} disabled={!complietedTodo}>
        <FaEdit />
      </Button>
    </>
  )
}

export default TodoAction

import Button from '../UI/button'
import { FaBeer, FaEdit } from 'react-icons/fa'

function TodoAction() {
  return (
    <>
      {/* //vstavlaju ikonki v knopki  */}
      <Button title="reset todos">
        <FaBeer />
      </Button>

      <Button title="complitly delete">
        <FaEdit />
      </Button>
    </>
  )
}

export default TodoAction

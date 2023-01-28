import styles from '../UI/button.module.css'

function Button({ onClick, children, title, disabled }) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      children={children}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button

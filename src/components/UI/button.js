import styles from '../UI/button.module.css'

function Button(props) {
  const { onClick, children, title, disabled = false } = props
  return (
    <button
      {...props}
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

import styles from './Empty.module.css'

export function Empty() {
  return (
    <div className={styles.container}>
      <img src="/clipboard.png" alt="ícone de prancheta" />
      <p>
        <strong>You don't have any tasks registered yet</strong>
        Create tasks and organize your to-do items
      </p>
    </div>
  )
}
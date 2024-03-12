import styles from './Header.module.css'

interface Props {
  tasksCounter: number
  checkedTasksCounter: number
}

export function Header({ tasksCounter, checkedTasksCounter }: Props) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tasks created</p>
        <span>{tasksCounter}</span>
      </aside>

      <aside>
        <p>Completed</p>
        <span>
          {tasksCounter === 0
            ? tasksCounter
            : `${checkedTasksCounter} of ${tasksCounter}`}
        </span>
      </aside>
    </header>
  )
}
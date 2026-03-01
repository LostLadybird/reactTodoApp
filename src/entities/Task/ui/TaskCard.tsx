import { memo, type FC } from "react"
import type { Task } from "../model"

import styles from './taskCard.module.css'

interface ITaskProps {
  task: Task
  onRemoveTask: () => void
}

export const TaskCard: FC<ITaskProps> = memo(({ task, onRemoveTask }) => {
  return (
    <div className={styles.taskCard}>
      <span className={styles.taskId}>#{task.id}</span>
      <span className={styles.taskTitle}>{task.title}</span>
      <input 
        type="checkbox"
        checked={task.completed}
        className={styles.taskCheckbox}
      />
      <button className={styles.iconDestroy} onClick={onRemoveTask}></button>
    </div>
  )
})
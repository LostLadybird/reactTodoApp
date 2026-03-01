import { TaskCard } from "entities/Task"
import type { Task } from "entities/Task"

import styles from './TaskList.module.css'

interface ITaskListProps {
  tasks: Task[]
  removeTask: (id: string) => void
}

export const TaskList = ({ tasks, removeTask }: ITaskListProps) => {
  return (
    <div className={styles.taskList}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onRemoveTask={() => removeTask(task.id)} />
      ))}
    </div>
  )
}
import { TaskWidget } from "widgets/TaskWidget"
import styles from './TaskPage.module.css'

export const TaskPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <h3 className={styles.pageTitle}>Мои задачи</h3>

      <TaskWidget />
    </div>
  )
}
import { TaskList, useTasks } from "features/TaskList"

import styles from './TaskWidget.module.css'
import { FilterButton } from "shared/ui"

export const TaskWidget = () => {
  const { filter, onChangeFilterValue, removeTask, filteredTasks } = useTasks()

  return (
    <div className={styles.wrapper}>
      <section className={styles.filtersSection}>
        <div className={styles.radioGroup}>
          <FilterButton buttonTitle="все" filter={filter} buttonValue='all' onChangeFilterValue={onChangeFilterValue} />
          <FilterButton buttonTitle="завершённые" filter={filter} buttonValue='completed' onChangeFilterValue={onChangeFilterValue} />
          <FilterButton buttonTitle="незавершённые" filter={filter} buttonValue='incomplete' onChangeFilterValue={onChangeFilterValue} />
        </div>
      </section>

      <TaskList tasks={filteredTasks} removeTask={removeTask} />
    </div>
  )
}
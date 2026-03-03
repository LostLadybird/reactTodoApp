import { useGetTasksQuery, type Task } from "entities/Task"
import { useCallback, useEffect, useMemo, useState, type ChangeEvent } from "react"
import type { TFilter } from "shared"

export const useTasks = () => {
 const { data: remoteTasks = [] } = useGetTasksQuery()

  const [taskList, setTaskList] = useState<Task[]>(remoteTasks)
  const [filter, setFilter] = useState<TFilter>('all')

 const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return taskList.filter((task) => task.completed === true)
      case 'incomplete':
        return taskList.filter((task) => task.completed === false)
      case "all":
      default:
        return taskList
    }
  }, [filter, taskList])

  const onChangeFilterValue = useCallback((e: ChangeEvent<HTMLInputElement>) => setFilter(e.target.value as TFilter), [setFilter])

  const removeTask = useCallback((id: string) => setTaskList((prev) => prev.filter((el) => el.id !== id)), [setTaskList])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!taskList.length && remoteTasks?.length > 0) setTaskList(remoteTasks)
  }, [taskList, remoteTasks, setTaskList])

  return {
    filter,
    filteredTasks,
    onChangeFilterValue,
    removeTask,
  }
}
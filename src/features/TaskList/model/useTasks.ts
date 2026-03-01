import type { Task } from "entities/Task"
import { useMemo, useState, type ChangeEvent } from "react"
import type { TFilter } from "shared"

const TASKS_LIST: Task[] = [
  {
    id: '1',
    title: 'sleep',
    completed: false,
  },
    {
    id: '2',
    title: 'eat',
    completed: false,
  },
    {
    id: '3',
    title: 'walk',
    completed: true,
  },
    {
    id: '4',
    title: 'work',
    completed: true,
  },
    {
    id: '5',
    title: 'study',
    completed: true,
  },
    {
    id: '6',
    title: 'hobby',
    completed: false,
  },
]

export const useTasks = () => {
  const [taskList, setTaskList] = useState<Task[]>(TASKS_LIST)
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

  const onChangeFilterValue = (e: ChangeEvent<HTMLInputElement>) => setFilter(e.target.value as TFilter)

  const removeTask = (id: string) => {
    const newList = taskList.filter((el) => el.id !== id)
    setTaskList(newList)
  }

  return {
    filter,
    filteredTasks,
    onChangeFilterValue,
    removeTask,
  }
}
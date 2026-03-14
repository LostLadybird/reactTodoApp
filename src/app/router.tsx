import { TaskPage } from "pages/TaskPage"
import { createBrowserRouter } from "react-router"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TaskPage />,
    children: [],
  }
])
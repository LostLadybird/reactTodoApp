import { RegisterPage } from "pages/RegisterPage"
import { TaskPage } from "pages/TaskPage"
import { createBrowserRouter } from "react-router"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RegisterPage />,
    children: [],
  },
  {
    path: '/todo',
    element: <TaskPage />,
    children: [],
  }
])
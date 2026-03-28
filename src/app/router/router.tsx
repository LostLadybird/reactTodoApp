import { ProtectedRoute } from "entities/authorization"
import { LoginPage } from "pages/LoginPage"
import { ProfilePage } from "pages/ProfilePage"
import { PublicPage } from "pages/PublicPage"
import { RefExamplesPage } from "pages/RefExamplesPage"
import { RegisterPage } from "pages/RegisterPage"
import { TaskPage } from "pages/TaskPage"
import { createBrowserRouter } from "react-router"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/todo',
        element: <TaskPage />,
      },
      {
        path: '/refExamples',
        element: <RefExamplesPage />,
      },
    ],
  },
])
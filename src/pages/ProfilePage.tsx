import { useGetUserQuery, useLazyGetLogoutUserQuery } from "entities/authorization"
import { useNavigate } from "react-router"
import { useAuth } from "shared/lib/useAuth"

export const ProfilePage = () => {
  const { token, isLoading, logout } = useAuth()
  const navigate = useNavigate()

  const { data: user } = useGetUserQuery(undefined, { skip: !token || isLoading })
  const [logoutUser] = useLazyGetLogoutUserQuery()

  const userName = user?.name

    const onLogout = () => {
    logoutUser()
    logout()
    navigate("/login", { replace: true })
  }

  return (
    <div>
      <h3>Profile Page</h3>
      <p>Hello, {userName}!</p>
      <button onClick={() => onLogout()}>LOGOUT</button>
    </div>
  )
}
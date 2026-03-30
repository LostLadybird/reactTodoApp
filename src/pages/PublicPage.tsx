import { useNavigate } from "react-router"

export const PublicPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <div>Public Page</div>
      <button onClick={() => navigate('/todo')}>open my todos</button>
    </>
  )
}
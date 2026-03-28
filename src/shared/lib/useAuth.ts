import { useContext } from "react"
import { AuthContext } from "./AuthContext"

export const useAuth = () => {
    const authContextInfo = useContext(AuthContext)

    if (!authContextInfo) {
        throw new Error('useAuthContext должен использоваться только внутри AuthProvider')
    }

    return authContextInfo
}
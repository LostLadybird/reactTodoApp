import { useCallback, useEffect, useState, type PropsWithChildren } from "react"
import { AuthContext } from "shared/lib/AuthContext"
import type { IAuthInfo } from "shared/model"

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [userEmail, setUserEmail] = useState<string>('')
  const [userToken, setUserToken] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const processData = useCallback((data: IAuthInfo) => {
    setUserToken(data?.token)
    setUserEmail(data?.email)
  }, [setUserToken, setUserEmail])

  const login = useCallback((authInfo: IAuthInfo) => {
    localStorage.setItem('token', authInfo?.token)
    localStorage.setItem('email', authInfo?.email)
    setUserToken(authInfo?.token)
    setUserEmail(authInfo?.email)
  }, [])

    const logout = useCallback(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    setUserToken('')
    setUserEmail('')
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    const email = localStorage.getItem('email')

    if (token && email) {
      processData({ token, email })
    }
    setIsLoading(false)
  }, [processData])

  return (
    <AuthContext.Provider value={{ email: userEmail, token: userToken, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
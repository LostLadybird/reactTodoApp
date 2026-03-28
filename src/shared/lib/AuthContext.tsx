import { createContext } from "react"
import type { TAuthContext } from "../model"

const DEFAULT_CONTEXT: TAuthContext = {
  token: '',
  email: '',
  isLoading: true,
  login: () => {},
  logout: () => {},
}

export const AuthContext = createContext<TAuthContext>(DEFAULT_CONTEXT)
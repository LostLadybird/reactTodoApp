export interface IAuthInfo {
  token: string
  email: string
}

export interface IAuthMethods {
  login: (authInfo: IAuthInfo) => void
  logout: () => void
}

export type TAuthContext = IAuthInfo & IAuthMethods & { isLoading: boolean }
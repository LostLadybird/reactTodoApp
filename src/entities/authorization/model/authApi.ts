import { baseAuthApi } from "shared/api"

export const authApi = baseAuthApi.injectEndpoints({
    endpoints: (build) => ({
      postLoginUser: build.mutation<IPostLoginApiResponse, IPostLoginApiArg>({
        query: (data: IPostLoginApiArg) => ({
          url: 'auth/login',
          method: 'POST',
          body: data,
        }),
        invalidatesTags: ['Auth'],
      }),
      postRegisterUser: build.mutation<IPostLoginApiResponse, IPostRegisterApiArg>({
        query: (data) => ({
          url: 'auth/register',
          method: 'POST',
          body: data,
        })
      }),
      getLogoutUser: build.query<void, void>({
        query: () => 'auth/logout',
      }),
      getUser: build.query<IUserApiResponse, void>({
        query: () => 'users/me',
        providesTags: ['User'],
      }),
    }),
    overrideExisting: false,
})

export interface IPostLoginApiArg {
  email: string
  password: string
}

export interface IPostLoginApiResponse {
  user: {
    id: string
    email: string
  },
  accessToken: string
}

export interface IPostRegisterApiArg {
  email: string
  name: string
  avatarPath: string
  about: string
  phone: string
  "roles": string[],
  password: string
}

export interface IUserApiResponse {
  id: string
  email: string
  name: string
  avatarPath: string
  about: string
  phone: string
  roles: string[]
  likes: string[]
  favoritesPost: string[]
}

export const { usePostLoginUserMutation, usePostRegisterUserMutation, useLazyGetLogoutUserQuery, useGetUserQuery } = authApi
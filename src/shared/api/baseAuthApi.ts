import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseAuthApi = createApi({ 
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://api.v2.react-learning.ru/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')
      if (token) {
        headers.set('Authorization', `${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Auth', 'User'],
  endpoints: () => ({})
})
import { configureStore } from '@reduxjs/toolkit'
import { baseAuthApi, baseTaskApi } from 'shared/api'

export const store = configureStore({
 reducer: {
   [baseTaskApi.reducerPath]: baseTaskApi.reducer,
   [baseAuthApi.reducerPath]: baseAuthApi.reducer,
 },
 middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(baseTaskApi.middleware, baseAuthApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
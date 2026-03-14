import type { Task } from "../model"
import { baseApi } from "shared/api"

// export const tasksApi = createApi({
//  reducerPath: 'tasksApi',
//  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
//  tagTypes: ['Tasks'],
//  endpoints: (build) => ({
//    getTasks: build.query<Task[], void>({
//      query: () => 'todos',
//      transformResponse: (response: Task[]) => response,
//      providesTags: ['Tasks'],
//    })
//  }),
// });

export const tasksApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
      getTasks: build.query<Task[], void>({
        query: () => 'todos',
        transformResponse: (response: Task[]) => response,
        providesTags: ['Tasks'],
      }),
    }),
    overrideExisting: false,
});

export const { useGetTasksQuery } = tasksApi
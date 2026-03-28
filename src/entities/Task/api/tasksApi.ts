import type { Task } from "../model"
import { baseTaskApi } from "shared/api"

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

export const tasksApi = baseTaskApi.injectEndpoints({
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
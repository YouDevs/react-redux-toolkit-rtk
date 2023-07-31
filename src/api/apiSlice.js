// apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => '/task',
      providesTags: ['Tasks'],
      transformResponse: response => response.sort((a, b)  => b.id - a.id )
    }),
    createTask: builder.mutation({
      query: (newTask) => ({
        url: '/task',
        method: 'POST',
        body: newTask
      }),
      invalidatesTags: ['Tasks']
    })
  }),
})

export const { useGetTasksQuery, useCreateTaskMutation } = apiSlice

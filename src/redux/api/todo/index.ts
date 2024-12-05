import { api as index } from '..';

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getTodo: build.query<TODO.GetTodoResponse, TODO.GetTodoRequest>({
      query: () => ({
        url: '',
        method: 'GET',
      }),
      providesTags: ['todo'],
    }),
    addTodo: build.mutation<TODO.AddtodoResponse, TODO.AddTodoRequest>({
      query: (data) => ({
        url: ``,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['todo'],
    }),
    deleteTodo: build.mutation<TODO.DeleteTodoResponse, TODO.DeleteTodoRequest>({
      query: (_id) => ({
        url: `/${_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['todo'],
    }),
    patchTodo: build.mutation<TODO.PatchTodoResponse, TODO.PatchTodoRequest>({
      query: ({ _id, newData }) => ({
        url: `/${_id}`,
        method: 'PATCH',
        body: newData,
      }),
      invalidatesTags: ['todo'],
    }),
  }),
  overrideExisting: true,
});
export const { useGetTodoQuery, useAddTodoMutation, useDeleteTodoMutation, usePatchTodoMutation } =
  api;

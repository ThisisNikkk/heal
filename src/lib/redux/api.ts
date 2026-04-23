import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type CreatePostInput = Pick<Post, "title" | "body" | "userId">;
export type UpdatePostInput = Partial<CreatePostInput> & { id: number };

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts?_limit=10",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Post" as const, id })),
              { type: "Post", id: "LIST" },
            ]
          : [{ type: "Post", id: "LIST" }],
    }),
    createPost: builder.mutation<Post, CreatePostInput>({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body,
      }),
      // JSONPlaceholder fakes creation; we optimistically insert the returned post
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),
    updatePost: builder.mutation<Post, UpdatePostInput>({
      query: ({ id, ...patch }) => ({
        url: `/posts/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (_result, _err, { id }) => [{ type: "Post", id }],
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _err, id) => [{ type: "Post", id }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;

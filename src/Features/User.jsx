import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const UseAPI = createApi({
  reducerPath: "userapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    allUsers: builder.query({
      query: () => ({
        url: "api",
        method: "GET",
      }),
    }),

    userdata: builder.query({
      query: ({ id }) => ({
        url: `api/${id}`,
        method: "GET",
      }),
    }),

    adduser: builder.mutation({
      query: (user) => ({
        url: "api",
        method: "POST",
        body: user,
      }),
    }),

    deluser: builder.mutation({
      query: (id) => ({
        url: `api/${id}`,
        method: "DELETE",
      }),
    }),

    edituser: builder.mutation({
      query: (user) => {
        const { id } = user;
        return {
          url: `api/${id}`,
          method: "PUT",
          body: user,
        };
      },
    }),
  }),
});

export const {
  useAllUsersQuery,
  useUserdataQuery,
  useDeluserMutation,
  useAdduserMutation,
  useEdituserMutation,
} = UseAPI;

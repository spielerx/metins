import { createApi } from "@reduxjs/toolkit/query/react";
import jsonBaseQuery from "app/api/json/jsonBaseQuery";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: jsonBaseQuery(),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials
      })
    })
  })
});

export const { useLoginMutation } = authApi;

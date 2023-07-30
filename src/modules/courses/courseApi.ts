import { createApi } from "@reduxjs/toolkit/query/react";
import jsonBaseQuery from "app/api/json/jsonBaseQuery";

export interface Topic {
  id: number;
  title: string;
  excerpt: string;
  type: "lecture" | "practical";
  plannedOn: string;
}

export interface Course {
  id: number;
  title: string;
  image: string;
  topics: Topic[];
}

// Define a service using a base URL and expected endpoints
export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: jsonBaseQuery(),
  endpoints: (builder) => ({
    getCourses: builder.query<Course[], number[]>({
      query: (ids) => ({
        url: "/courses",
        method: "GET",
        body: ids
      })
    }),
    getCourse: builder.query<Course, number>({
      query: (id: number) => ({
        url: "/course",
        method: "GET",
        body: id
      })
    })
  })
});

export const { useGetCoursesQuery, useGetCourseQuery } = courseApi;

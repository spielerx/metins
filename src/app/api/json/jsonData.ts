import { Course } from "modules/courses/courseApi";

export const user = {
  id: 1,
  name: "John Doe",
  email: "user@gmail.com",
  password: "password",
  courses: [1, 2]
};

const modifyDate = (days: number) =>
  new Date(new Date().setDate(new Date().getDate() - days)).toISOString();

export const courses: Course[] = [
  {
    id: 1,
    title: "JavaScript",
    image:
      "https://images.unsplash.com/photo-1552084117-56a987666449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE2OTA3NTgxMjc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
    topics: [
      {
        id: 1,
        title: "Introduction",
        excerpt: "Introduction to JavaScript",
        type: "lection",
        plannedOn: modifyDate(-10)
      },
      {
        id: 2,
        title: "Variables",
        excerpt: "Introduction to variables",
        type: "exercise",
        plannedOn: modifyDate(1)
      },
      {
        id: 3,
        title: "Functions",
        excerpt: "Introduction to functions",
        type: "lection",
        plannedOn: modifyDate(2)
      },
      {
        id: 4,
        title: "Objects",
        excerpt: "Introduction to objects",
        type: "lection",
        plannedOn: modifyDate(3)
      }
    ]
  },
  {
    id: 2,
    title: "React",
    image:
      "https://images.unsplash.com/photo-1552084117-56a987666449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE2OTA3NTgxMjc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
    topics: [
      {
        id: 5,
        title: "Introduction",
        excerpt: "Introduction to React",
        type: "lection",
        plannedOn: modifyDate(-10)
      },
      {
        id: 6,
        title: "Components",
        excerpt: "Introduction to components",
        type: "exercise",
        plannedOn: modifyDate(1)
      },
      {
        id: 7,
        title: "Hooks",
        excerpt: "Introduction to hooks",
        type: "lection",
        plannedOn: modifyDate(2)
      }
    ]
  }
];

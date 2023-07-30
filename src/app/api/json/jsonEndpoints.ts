/* eslint-disable @typescript-eslint/no-explicit-any */
import * as jsonData from "./jsonData";

const pause = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const jsonEndpoints: Record<
  string,
  {
    handler: (data: any) => any;
  }
> = {
  "/login": {
    handler: async (data) => {
      await pause(1000);

      if (
        data?.email === jsonData.user.email &&
        data?.password === jsonData.user.password
      ) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { email, password, ...data } = jsonData.user;
        return data;
      } else {
        throw new Error("Invalid email or password");
      }
    }
  },
  "/courses": {
    handler: async (ids) => {
      await pause(2000);

      return jsonData.courses.filter((course) => ids.includes(course.id));
    }
  },
  "/course": {
    handler: async (id) => {
      await pause(1000);
      return jsonData.courses?.[id - 1];
    }
  }
};

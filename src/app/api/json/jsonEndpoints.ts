/* eslint-disable @typescript-eslint/no-explicit-any */
import { jsonData } from "./jsonData";

const pause = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const jsonEndpoints: Record<
  string,
  {
    handler: (data: any) => any;
  }
> = {
  "/login": {
    handler: async (data) => {
      await pause(300);

      if (
        data?.email === jsonData.user.email &&
        data?.password === jsonData.user.password
      ) {
        return {
          id: jsonData.user.id
        };
      } else {
        throw new Error("Invalid email or password");
      }
    }
  }
};

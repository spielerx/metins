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
        data.login === jsonData.user.login &&
        data.password === jsonData.user.password
      ) {
        return {
          id: jsonData.user.id
        };
      }
    }
  }
};

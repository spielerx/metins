/* eslint-disable @typescript-eslint/no-explicit-any */
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { jsonEndpoints } from "./jsonEndpoints";

const jsonBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      data?: any;
    },
    unknown,
    unknown
  > =>
  async ({ url, data }) => {
    try {
      const fullUrl = baseUrl + url;

      if (jsonEndpoints[fullUrl]) {
        return {
          data: jsonEndpoints[fullUrl].handler(data)
        };
      } else {
        throw new Error(`Unknown endpoint: ${fullUrl}`);
      }
    } catch (error) {
      console.log(error);

      return {
        error: {
          status: 500,
          data: "Unhandled server error"
        }
      };
    }
  };

export default jsonBaseQuery;

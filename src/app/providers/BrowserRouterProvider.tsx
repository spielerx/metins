import { RouterProvider } from "react-router-dom";
import { router } from "app/router";

export const BrowserRouterProvider = () => <RouterProvider router={router} />;

import HomePage from "pages/HomePage";
import ErrorPage from "pages/ErrorPage";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  }
]);

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "app/layouts/main/MainLayout";
import GuestLayout from "app/layouts/guest/GuestLayout";
import ErrorPage from "pages/ErrorPage";
import DashboardPage from "pages/DashboardPage";
import LoginPage from "pages/LoginPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <DashboardPage />
          }
        ]
      }
    ]
  },
  {
    element: <GuestLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <LoginPage />
      }
    ]
  }
]);

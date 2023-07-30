import { createBrowserRouter } from "react-router-dom";
import MainLayout from "app/layouts/main/MainLayout";
import GuestLayout from "app/layouts/guest/GuestLayout";
import ErrorPage from "pages/ErrorPage";
import DashboardPage from "pages/DashboardPage";
import LoginPage from "pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import CoursePage from "pages/CoursePage";

export const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <DashboardPage />
          },
          {
            path: "/course/:courseId",
            element: <CoursePage />
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

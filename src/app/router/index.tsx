import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "pages/ErrorPage";
import GuestLayout from "app/layouts/GuestLayout";
import HomePage from "pages/HomePage";
import MainLayout from "app/layouts/MainLayout";
import LoginPage from "pages/LoginPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
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

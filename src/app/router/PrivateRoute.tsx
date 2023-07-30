import { useSelectIsAuthenticated } from "modules/auth/authSlice";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const isAuthenticated = useSelectIsAuthenticated();
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

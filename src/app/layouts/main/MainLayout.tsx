import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { APP_NAME } from "app/constants/page";

export default function MainLayout() {
  useEffect(() => {
    document.title = `Welcome back to ${APP_NAME}`;
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
}

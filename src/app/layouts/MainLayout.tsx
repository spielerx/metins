import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  useEffect(() => {
    document.title = "Welcome back to Student Account";
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
}

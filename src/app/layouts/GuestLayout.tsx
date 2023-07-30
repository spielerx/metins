import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function GuestLayout() {
  useEffect(() => {
    document.title = "Start using Student Account";
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
}

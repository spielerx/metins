import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { APP_NAME } from "app/constants/page";
import { Stack } from "app/ui";
import GuestLayoutCopyrights from "./GuestLayoutCopyrights";

export default function GuestLayout() {
  useEffect(() => {
    document.title = `Start using ${APP_NAME}`;
  }, []);

  return (
    <Stack spacing={4}>
      <Outlet />
      <GuestLayoutCopyrights />
    </Stack>
  );
}

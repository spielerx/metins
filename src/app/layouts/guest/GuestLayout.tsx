import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { APP_NAME } from "app/constants/page";
import { Link, Stack, Typography } from "app/ui";

export default function GuestLayout() {
  useEffect(() => {
    document.title = `Start using ${APP_NAME}`;
  }, []);

  return (
    <Stack spacing={4}>
      <Outlet />

      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="/">
          {APP_NAME}
        </Link>
        {` ${new Date().getFullYear()}`}
      </Typography>
    </Stack>
  );
}

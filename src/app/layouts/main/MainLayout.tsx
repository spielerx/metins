import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { APP_NAME } from "app/constants/page";
import { Box, Button, Toolbar, Typography } from "app/ui";
import { VerifiedUser } from "@mui/icons-material";
import { useAppDispatch } from "app/store";
import { logOut, useSelectCurrentUser } from "modules/auth/authSlice";

export default function MainLayout() {
  const dispatch = useAppDispatch();
  const currentUser = useSelectCurrentUser();

  useEffect(() => {
    document.title = `Welcome back to ${APP_NAME}`;
  }, []);

  return (
    <div>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button color="success" disableRipple>
          <VerifiedUser />
          <Typography fontSize={16} pl={1} color="inherit">
            User verified
          </Typography>
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {APP_NAME}
        </Typography>

        <Typography pr={2}>Hi, {currentUser?.name}</Typography>
        <Button
          variant="outlined"
          size="small"
          onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
      </Toolbar>
      <Box mt={3}>
        <Outlet />
      </Box>
    </div>
  );
}

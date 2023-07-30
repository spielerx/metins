import { APP_NAME } from "app/constants/page";
import { Link, Typography } from "app/ui";

export default function GuestLayoutCopyrights() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        {APP_NAME}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

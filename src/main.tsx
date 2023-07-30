import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "providers/ThemeProvider.tsx";
import { router } from "router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

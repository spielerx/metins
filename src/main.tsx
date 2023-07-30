import React from "react";
import ReactDOM from "react-dom/client";
import {
  ThemeProvider,
  StoreProvider,
  BrowserRouterProvider
} from "utils/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <StoreProvider>
        <BrowserRouterProvider />
      </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>
);

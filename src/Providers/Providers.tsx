import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@emotion/react";

import { router } from "src/router";

import { defaultTheme } from "src/themes";

export const Providers = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

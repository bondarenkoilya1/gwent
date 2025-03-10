import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@emotion/react";

import { defaultTheme } from "../themes";
import { Children } from "../types";

export const Providers: FC<Children> = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@emotion/react";

import { defaultTheme } from "src/themes";

import { Children } from "src/types";

export const Providers: FC<Children> = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

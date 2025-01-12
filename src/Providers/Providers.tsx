import { FC, StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

import { Children } from "../types";

export const Providers: FC<Children> = ({ children }) => {
  return (
    <StrictMode>
      <BrowserRouter>{children}</BrowserRouter>
    </StrictMode>
  );
};

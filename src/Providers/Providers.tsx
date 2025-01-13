import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { Children } from "../types";

export const Providers: FC<Children> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

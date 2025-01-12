import { FC, StrictMode } from "react";

import { Children } from "../types";

export const Providers: FC<Children> = ({ children }) => {
  return <StrictMode>{children}</StrictMode>;
};

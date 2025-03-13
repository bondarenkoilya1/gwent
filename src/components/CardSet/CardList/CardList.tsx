import { FC } from "react";

import { Children } from "../../../types";

export const CardList: FC<Children> = ({ children }) => {
  return <ul>{children}</ul>;
};

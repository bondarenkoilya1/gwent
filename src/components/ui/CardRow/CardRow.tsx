import { FC } from "react";

import { CardRowStyled } from "./styled";

import { Children } from "../../../types";

export const CardRow: FC<Children> = ({ children }) => {
  return <CardRowStyled>{children}</CardRowStyled>;
};

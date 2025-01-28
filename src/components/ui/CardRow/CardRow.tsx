import { FC } from "react";

import { CardRowStyled } from "./styled";

import { CardRowProps } from "../../../types";

export const CardRow: FC<CardRowProps> = ({ children, type }) => {
  return <CardRowStyled type={type}>{children}</CardRowStyled>;
};

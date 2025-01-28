import { FC } from "react";

import { CardRowStyled } from "./styled";

import { CardRowProps } from "../../../types";

// ClassName in props, so I can style this component outside with emotion
export const CardRow: FC<CardRowProps> = ({ children, type, className }) => {
  return (
    <CardRowStyled type={type} className={className}>
      {children}
    </CardRowStyled>
  );
};

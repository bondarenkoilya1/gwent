import { FC } from "react";

import { CardRowStyled } from "./styled";

import { CardRowProps } from "../../../types";

// ClassName in props, so I can style this component outside with emotion
export const CardRow: FC<CardRowProps> = ({ outsideStyles, children, type }) => {
  return (
    <CardRowStyled type={type} css={outsideStyles}>
      {children}
    </CardRowStyled>
  );
};

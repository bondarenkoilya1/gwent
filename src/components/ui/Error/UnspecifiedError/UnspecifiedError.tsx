import { FC } from "react";

import { UnspecifiedErrorStyled } from "./styled";

import { UnspecifiedErrorProps } from "src/types";

export const UnspecifiedError: FC<UnspecifiedErrorProps> = ({ errorMessage }) => {
  return (
    <UnspecifiedErrorStyled>{errorMessage || "Unexpected error occurred."}</UnspecifiedErrorStyled>
  );
};

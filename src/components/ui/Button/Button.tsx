import { FC } from "react";

import { ButtonStyled } from "./styled";

import { ButtonProps } from "../../../types";

export const Button: FC<ButtonProps> = ({ children, type = "button", variant = "primary" }) => {
  return (
    <ButtonStyled type={type} variant={variant}>
      {children}
    </ButtonStyled>
  );
};

// todo: on lint i need to find all .styled.*ts* imports and remove ,ts

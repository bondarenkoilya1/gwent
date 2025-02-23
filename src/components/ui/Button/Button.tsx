import { FC } from "react";

import { ButtonStyled } from "./styled";

import { ButtonProps } from "../../../types";

export const Button: FC<ButtonProps> = ({
  className,
  children,
  type = "button",
  variant = "primary"
}) => {
  return (
    <ButtonStyled className={className} type={type} variant={variant}>
      {children}
    </ButtonStyled>
  );
};

// todo: on lint i need to find all .styled.*ts* imports and remove ,ts

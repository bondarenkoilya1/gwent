import { FC } from "react";

import { ButtonStyled } from "./styled";

import { ButtonProps } from "../../../types";

// TODO: Create theme for colors with emotion

export const Button: FC<ButtonProps> = ({
  className,
  children,
  type = "button",
  variant = "primary",
  hasIcon
}) => {
  switch (hasIcon) {
    case "onLeft":
      return 1;
    case "onRight":
      return 2;
    default:
      return (
        <ButtonStyled className={className} type={type} variant={variant}>
          {children}
        </ButtonStyled>
      );
  }
};

// todo: on lint i need to find all .styled.*ts* imports and remove ,ts

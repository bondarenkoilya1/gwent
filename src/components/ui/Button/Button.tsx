import { FC } from "react";

import { ButtonStyled } from "./styled";

import { ButtonProps, JSXElement } from "../../../types";

// TODO: Create theme for colors with emotion
// ! Probably the task is not so complicated to create new files. I guess I'll do this logic in one file for now

export const Button: FC<ButtonProps> = ({
  className,
  children,
  type = "button",
  variant = "primary",
  hasIcon
}) => {
  return (
    <ButtonStyled className={className} type={type} variant={variant}>
      {hasIcon == "onLeft" && renderLeftIcon()}
      {children}
    </ButtonStyled>
  );
};

// I declare functions like this to be able to call them above
function renderLeftIcon(): JSXElement {
  return <div />;
}

// todo: on lint i need to find all .styled.*ts* imports and remove ,ts

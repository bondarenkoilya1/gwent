import React from "react";
import { IconType } from "react-icons";

type DefaultButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = DefaultButtonProps & {
  variant?: "primary" | "secondary" | "tertiary";
  hasIcon?: "onLeft" | "onRight";
  icon?: IconType;
};

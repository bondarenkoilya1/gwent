import { FC } from "react";

import { ImageStyled } from "./styled";

import { ImageProps } from "../../../types";

export const Image: FC<ImageProps> = ({ src, alt }) => {
  if (!src) return <ImageStyled src="https://placehold.co/100x100" alt={alt} />;

  return <ImageStyled src={src} alt={alt} />;
};

// lazy loading prop

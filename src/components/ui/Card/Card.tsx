import { FC } from "react";

import {
  CardDescriptionStyled,
  CardNameStyled,
  CardPointsStyled,
  CardStyled,
  CardTextHighlighted,
  CardTypeStyled
} from "./styled";

import { CardProps } from "../../../types/components";

export const Card: FC<CardProps> = ({ name, description, type, points, ...attrs }) => {
  return (
    <CardStyled {...attrs}>
      <CardNameStyled>{name}</CardNameStyled>
      <CardDescriptionStyled>{description}</CardDescriptionStyled>
      <CardTypeStyled>
        Type: <CardTextHighlighted>{type}</CardTextHighlighted>
      </CardTypeStyled>
      <CardPointsStyled>
        Points: <CardTextHighlighted> {points}</CardTextHighlighted>
      </CardPointsStyled>
    </CardStyled>
  );
};

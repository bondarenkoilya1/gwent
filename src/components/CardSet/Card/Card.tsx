import { FC } from "react";

import {
  CardPointsStyled,
  CardPropertiesStyled,
  CardStyled,
  CardTitleStyled,
  CardTypeStyled
} from "./styled";

import { CardWrapperProps } from "../../../types";

export const Card: FC<CardWrapperProps> = ({ card }) => {
  const { name, type, points } = card;

  return (
    <CardStyled>
      <CardPropertiesStyled>
        <CardTitleStyled>{name}</CardTitleStyled>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CardPointsStyled>
            <span>{points}</span> points
          </CardPointsStyled>
          <CardTypeStyled>
            <span>{type}</span> unit
          </CardTypeStyled>
        </div>
      </CardPropertiesStyled>
    </CardStyled>
  );
};

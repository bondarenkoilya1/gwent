import { FC } from "react";

import { HandCardNameStyled, HandCardStyled } from "./styled";

import { CardWrapperProps } from "../../../../types";

export const HandCard: FC<CardWrapperProps> = ({ card, onClick }) => {
  const { name } = card;

  return (
    <HandCardStyled onClick={onClick}>
      <HandCardNameStyled>{name}</HandCardNameStyled>
      {/*<HandCardDescriptionStyled>{description}</HandCardDescriptionStyled>*/}
      {/*<HandCardTypeStyled>*/}
      {/*  Type: <HandCardTextHighlighted>{type}</HandCardTextHighlighted>*/}
      {/*</HandCardTypeStyled>*/}
      {/*<HandCardPointsStyled>*/}
      {/*  Points: <HandCardTextHighlighted> {points}</HandCardTextHighlighted>*/}
      {/*</HandCardPointsStyled>*/}
    </HandCardStyled>
  );
};

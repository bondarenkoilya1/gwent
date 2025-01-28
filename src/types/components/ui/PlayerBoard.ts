import React from "react";

import { CardProps, CardType } from "./Card";

export type RowProps = {
  type: CardType;
  cards: CardProps[];
};

export type CardsOnBoardArray = {
  cardsOnBoard: RowProps[];
};

export type CardsOnBoardUpdater = {
  setCardsOnBoard: React.Dispatch<React.SetStateAction<RowProps[]>>;
};

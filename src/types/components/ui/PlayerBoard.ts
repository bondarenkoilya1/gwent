import React from "react";

import { CSS } from "../../global";

import { CardProps, CardType } from "./Card";

export type RowProps = {
  type: CardType;
  cards: CardProps[];
};

export type CardsOnBoardArray = {
  cardsOnBoard: RowProps[];
  setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
};

export type CardsOnBoardUpdater = {
  outsideStyles?: CSS;
  setCardsOnBoard: React.Dispatch<React.SetStateAction<RowProps[]>>;
  currentScore: number;
};

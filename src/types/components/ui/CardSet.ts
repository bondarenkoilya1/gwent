import { CardProps } from "./Card";

export type CardSetProps = {
  _id: string;
  cardSetName: string;
  cards: CardProps[];
};

export type CardSetWrapperProps = {
  set: CardSetProps;
  deleteCardSet: (cardId: string) => void;
};

export type CardSets = CardSetProps[];

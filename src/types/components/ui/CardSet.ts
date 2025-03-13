import { CardProps } from "./Card";

export type CardSetProps = {
  _id: string;
  cardSetName: string;
  cards: CardProps[];
};

export type CardSetAnotherProps = {
  set: CardSetProps;
  key: string;
  deleteCardSet: (cardId: string) => void;
};

export type CardSets = CardSetProps[];

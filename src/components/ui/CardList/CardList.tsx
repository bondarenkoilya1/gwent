import { FC } from "react";

import { CardListProps, CardProps } from "../../../types";
import { Card } from "../Card";

export const CardList: FC<CardListProps> = ({ cards }) => {
  return cards.map((card: CardProps) => <Card location="adminPanel" card={card} key={card._id} />);
};

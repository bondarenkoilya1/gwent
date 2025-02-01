import { Children, CSS } from "../../global";

import { CardType } from "./Card";

export type RowType = CardType | "deck";

export type CardRowProps = Children & {
  type: RowType;
  outsideStyles?: CSS;
};

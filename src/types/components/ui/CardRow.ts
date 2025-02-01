import { Children, CSS } from "../../global";

import { CardType } from "./Card";

export type RowType = CardType | "hand";

export type CardRowProps = Children & {
  type: RowType;
  outsideStyles?: CSS;
};

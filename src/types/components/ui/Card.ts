type CardType = "close" | "range" | "siege";

export type CardProps = {
  name: string;
  description: string;
  type: CardType;
  points: number;
};

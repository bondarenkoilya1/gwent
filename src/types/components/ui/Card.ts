export type CardType = "close" | "range" | "siege";

export type CardProps = {
  id: string;
  name: string;
  description?: string;
  type?: CardType;
  points?: number;
  onClick?: () => void;
};

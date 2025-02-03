export type CardType = "close" | "range" | "siege";
type Speciality = "multiplier";

export type CardProps = {
  id: string;
  name: string;
  description?: string;
  type?: CardType;
  // TODO: do check if such card is not already in a row
  speciality?: Speciality;
  points?: number;
  onClick?: () => void;
};

export type CardType = "close" | "range" | "siege";
type Speciality = "multiplier";

export type CardProps = {
  // todo: fix these mess with ids. I guess i should not set id myself, because i already have _id from mongo
  _id?: string;
  id: string;
  name: string;
  description?: string;
  type?: CardType;
  // TODO: do check if such card is not already in a row
  speciality?: Speciality;
  points?: number;
  onClick?: () => void;
};

export type CardWrapperProps = {
  card: CardProps;
  onClick?: () => void;
};

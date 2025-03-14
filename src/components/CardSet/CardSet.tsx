import { FC } from "react";

import { CardProps, CardSetWrapperProps } from "../../types";
import { Card } from "../ui";

import { CardList } from "./CardList";

// zustand for deleteCardSet

export const CardSet: FC<CardSetWrapperProps> = ({ set, deleteCardSet }) => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <li style={{ fontSize: "24px", marginBottom: "10px" }}>
        <span style={{ textTransform: "uppercase", fontWeight: 700 }}>{set.cardSetName}</span>{" "}
        <span
          onClick={() => deleteCardSet(set._id)}
          style={{
            color: "red",
            fontSize: "12px",
            cursor: "pointer",
            userSelect: "none"
          }}>
          [DELETE THIS CARD SET]
        </span>
      </li>
      <CardList>
        {/*bring this to card list component*/}
        {set.cards.map((card: CardProps) => (
          <Card location="adminPanel" card={card} key={card._id} />
        ))}
      </CardList>
    </div>
  );
};

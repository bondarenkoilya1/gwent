import { FC } from "react";

import { CardSetWrapperProps } from "../../types";
import { CardList } from "../ui";

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
      <CardList cards={set.cards} />
    </div>
  );
};

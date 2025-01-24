import { useState } from "react";

import { CardProps } from "../../../types/components";
import { Card } from "../Card";
import { CardRow } from "../CardRow";

export const PlayerBoard = () => {
  const [cardsInBoard, setCardsInBoard] = useState<CardProps[]>([]);

  const addCardToBoard = () => {
    setCardsInBoard((prevItem) => [
      ...prevItem,
      {
        name: `${Math.floor(Math.random() * 100)}`,
        description: "card!",
        type: "siege",
        points: Math.floor(Math.random() * 10)
      }
    ]);
  };

  return (
    <div style={{ width: "100%" }}>
      <CardRow>
        {cardsInBoard.map(({ name, description, type, points }) => (
          <Card name={name} description={description} type={type} points={points} />
        ))}
      </CardRow>

      <button style={{ marginTop: "20px" }} onClick={addCardToBoard}>
        Click to add card
      </button>
      {/*<CardRow />*/}
      {/*<CardRow />*/}
    </div>
  );
};
